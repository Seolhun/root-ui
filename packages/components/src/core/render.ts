import { isEmpty } from '@fxts/core';
import { isFunction, omit } from 'lodash-es';
import * as React from 'react';

import { GlobalRootDataAttributeMap } from '../constants';
import { Expand, RootUIProps, RootUIUniqueKey, XOR } from '../types';
import { compact, isUndefined, match } from '../utils';
import { mergeProps } from './mergeProps';

export enum RenderFeatures {
  /** No features at all */
  None = 0,

  /**
   * When used, this will allow us to use one of the render strategies.
   *
   * **The render strategies are:**
   *    - **Unmount**   _(Will unmount the component.)_
   *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
   */
  RenderStrategy = 1,

  /**
   * When used, this will allow the user of our component to be in control. This can be used when
   * you want to transition based on some state.
   */
  Static = 2,
}

export enum RootRenderStrategyEnum {
  Unmount,
  Hidden,
}

type FeatureProps<PassedInFeatures extends RenderFeatures, ForFeature extends RenderFeatures, Props> = {
  [P in PassedInFeatures]: P extends ForFeature ? Props : RootUIUniqueKey;
}[PassedInFeatures];

export type PropsForFeatures<T extends RenderFeatures> = XOR<
  FeatureProps<T, RenderFeatures.Static, { static?: boolean }>,
  FeatureProps<T, RenderFeatures.RenderStrategy, { unmount?: boolean }>
>;

interface RootRenderProps<Feature extends RenderFeatures, Tag extends React.ElementType, Slot> {
  defaultTag: React.ElementType;
  features?: Feature;
  name: string;
  ourProps: Expand<RootUIProps<Tag, Slot, any> & PropsForFeatures<Feature>>;
  slot?: Slot;
  theirProps: Expand<RootUIProps<Tag, Slot, any>>;
  /**
   * @default true
   */
  visible?: boolean;
}

function privateRender<Tag extends React.ElementType, Slot>(
  props: RootUIProps<Tag, Slot> & { ref?: unknown },
  slot: Slot = {} as Slot,
  tag: React.ElementType,
  name: string,
) {
  const { children, as: Component = tag, refName = 'ref', ...others } = omit(props, ['unmount', 'static']);

  // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`
  const refRelatedProps = !isUndefined(props.ref) ? { [refName]: props.ref } : {};

  const resolvedChildren = (isFunction(children) ? children(slot) : children) as
    | React.ReactElement
    | React.ReactElement[];

  // Allow for className to be a function with the slot as the contents
  if (others.className && isFunction(others.className)) {
    (others as any).className = others.className(slot);
  }

  const dataAttributes: Record<string, string> = {};
  if (slot) {
    let exposeState = false;
    const states: string[] = [];
    for (const [k, v] of Object.entries(slot)) {
      if (typeof v === 'boolean') {
        exposeState = true;
      }
      if (v === true) {
        states.push(k);
      }
    }
    if (exposeState) {
      dataAttributes[GlobalRootDataAttributeMap.State] = states.join(' ');
    }
  }

  if (Component === React.Fragment) {
    if (Object.keys(compact(others)).length > 0) {
      if (!React.isValidElement(resolvedChildren) || !isEmpty(resolvedChildren)) {
        throw new Error(
          [
            'Passing props on "Fragment"!',
            '',
            `The current component <${name} /> is rendering a "Fragment".`,
            `However we need to passthrough the following props:`,
            Object.keys(others)
              .map((line) => `  - ${line}`)
              .join('\n'),
            '',
            'You can apply a few solutions:',
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
              'Render a single element as the child so that we can forward the props onto that element.',
            ]
              .map((line) => `  - ${line}`)
              .join('\n'),
          ].join('\n'),
        );
      }

      return React.cloneElement(
        resolvedChildren,
        Object.assign(
          {},
          /**
           * Filter out undefined values so that they don't override the existing values
           * @todo remove as any
           */
          mergeProps(resolvedChildren.props as any, compact(omit(others, ['ref']))),
          dataAttributes,
          refRelatedProps,
        ),
      );
    }
  }

  return React.createElement(
    Component,
    Object.assign(
      {},
      omit(others, ['ref']),
      Component !== React.Fragment && refRelatedProps,
      Component !== React.Fragment && dataAttributes,
    ),
    resolvedChildren,
  );
}

export function render<Feature extends RenderFeatures, Tag extends React.ElementType, Slot>({
  defaultTag,
  features,
  name,
  ourProps,
  slot,
  theirProps,
  visible = true,
}: RootRenderProps<Feature, Tag, Slot>) {
  const props = mergeProps(theirProps, ourProps);

  // Visible always render
  if (visible) {
    return privateRender(props, slot, defaultTag, name);
  }

  const featureFlags = features ?? RenderFeatures.None;

  if (featureFlags & RenderFeatures.Static) {
    const { static: isStatic = false, ...others } = props as PropsForFeatures<RenderFeatures.Static>;
    // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else
    if (isStatic) {
      return privateRender(others, slot, defaultTag, name);
    }
  }

  if (featureFlags & RenderFeatures.RenderStrategy) {
    const { unmount = true, ...others } = props as PropsForFeatures<RenderFeatures.RenderStrategy>;
    const strategy = unmount ? RootRenderStrategyEnum.Unmount : RootRenderStrategyEnum.Hidden;

    return match(strategy, {
      [RootRenderStrategyEnum.Hidden]() {
        const props = {
          ...others,
          hidden: true,
          style: {
            display: 'none',
          },
        };
        return privateRender(props, slot, defaultTag, name);
      },
      [RootRenderStrategyEnum.Unmount]() {
        return null;
      },
    });
  }

  // No features enabled, just render
  return privateRender(props, slot, defaultTag, name);
}
