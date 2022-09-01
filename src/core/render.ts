import React from 'react';

import { RootUIProps, XOR, RootUIUniqueKey, Expand } from '@/types';
import { GlobalRootDataAttributeMap } from '@/constants';
import { match, omit, compact, isFunction, isEmpty, isUndefined } from '@/utils';

import { mergeProps } from './mergeProps';

export enum RenderFeatureEnum {
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

type FeatureProps<PassedInFeatures extends RenderFeatureEnum, ForFeature extends RenderFeatureEnum, Props> = {
  [P in PassedInFeatures]: P extends ForFeature ? Props : RootUIUniqueKey;
}[PassedInFeatures];

export type FeaturePropsMap<T extends RenderFeatureEnum> = XOR<
  FeatureProps<T, RenderFeatureEnum.Static, { static?: boolean }>,
  FeatureProps<T, RenderFeatureEnum.RenderStrategy, { unmount?: boolean }>
>;

interface RootRenderProps<Feature extends RenderFeatureEnum, Tag extends React.ElementType, Slot> {
  ourProps: Expand<RootUIProps<Tag, Slot, any> & FeaturePropsMap<Feature>>;
  theirProps: Expand<RootUIProps<Tag, Slot, any>>;
  defaultTag: React.ElementType;
  name: string;
  slot?: Slot;
  features?: Feature;
  /**
   * @default true
   */
  visible?: boolean;
}

function _render<Tag extends React.ElementType, Slot>(
  props: RootUIProps<Tag, Slot> & { ref?: unknown },
  slot: Slot = {} as Slot,
  tag: React.ElementType,
  name: string,
) {
  const { as: Component = tag, children, refName = 'ref', ...rests } = omit(props, ['unmount', 'static']);

  // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`
  const refRelatedProps = !isUndefined(props.ref) ? { [refName]: props.ref } : {};

  const resolvedChildren = (isFunction(children) ? children(slot) : children) as
    | React.ReactElement
    | React.ReactElement[];

  // Allow for className to be a function with the slot as the contents
  if (rests.className && isFunction(rests.className)) {
    (rests as any).className = rests.className(slot);
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
    if (Object.keys(compact(rests)).length > 0) {
      if (!React.isValidElement(resolvedChildren) || !isEmpty(resolvedChildren)) {
        throw new Error(
          [
            'Passing props on "Fragment"!',
            '',
            `The current component <${name} /> is rendering a "Fragment".`,
            `However we need to passthrough the following props:`,
            Object.keys(rests)
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
          // Filter out undefined values so that they don't override the existing values
          mergeProps(resolvedChildren.props, compact(omit(rests, ['ref']))),
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
      omit(rests, ['ref']),
      Component !== React.Fragment && refRelatedProps,
      Component !== React.Fragment && dataAttributes,
    ),
    resolvedChildren,
  );
}

export function render<Feature extends RenderFeatureEnum, Tag extends React.ElementType, Slot>({
  ourProps,
  theirProps,
  defaultTag,
  name,
  slot,
  features,
  visible = true,
}: RootRenderProps<Feature, Tag, Slot>) {
  const props = mergeProps(theirProps, ourProps);
  // Visible always render
  if (visible) {
    return _render(props, slot, defaultTag, name);
  }

  const featureFlags = features ?? RenderFeatureEnum.None;

  if (featureFlags & RenderFeatureEnum.Static) {
    const { static: isStatic = false, ...rests } = props as FeaturePropsMap<RenderFeatureEnum.Static>;
    // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else
    if (isStatic) {
      return _render(rests, slot, defaultTag, name);
    }
  }

  if (featureFlags & RenderFeatureEnum.RenderStrategy) {
    const { unmount = true, ...rests } = props as FeaturePropsMap<RenderFeatureEnum.RenderStrategy>;
    const strategy = unmount ? RootRenderStrategyEnum.Unmount : RootRenderStrategyEnum.Hidden;

    return match(strategy, {
      [RootRenderStrategyEnum.Unmount]() {
        return null;
      },
      [RootRenderStrategyEnum.Hidden]() {
        const props = {
          ...rests,
          hidden: true,
          style: {
            display: 'none',
          },
        };
        return _render(props, slot, defaultTag, name);
      },
    });
  }

  // No features enabled, just render
  return _render(props, slot, defaultTag, name);
}
