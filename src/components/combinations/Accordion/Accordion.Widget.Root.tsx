import * as React from 'react';

import {
  AccordionAPIContext,
  AccordionAPIContextValues,
  AccordionContext,
  ActionTypes,
  rootReducer,
  StateDefinition,
} from './Accordion.reducer';
import { AccordionFocusableElement } from './Accordion.Widget.types';

import { forwardRefWithAs, render } from '../../../core';
import { optionalRef, useEvent, useId, useSyncRefs } from '../../../hooks';
import { OpenClosedProvider, OpenClosedState } from '../../../tools';
import { RootUIProps, RootUIReactTag } from '../../../types';
import { getOwnerDocumentBy, match } from '../../../utils';

const COMPONENT_NAME = 'Root__Accordion__Root';
const DEFAULT_TAG: RootUIReactTag = React.Fragment;

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface AccordionRootProps {
  defaultOpen?: boolean;
}
export interface AccordionRootRenderPropArg {
  open: boolean;
  close(focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>): void;
}

export const AccordionWidgetRoot = forwardRefWithAs(function AccordionWidgetRoot<
  Tag extends React.ElementType = typeof DEFAULT_TAG,
>(props: RootUIProps<Tag, AccordionRootRenderPropArg> & AccordionRootProps & ElementProps, ref: React.Ref<Tag>) {
  const { defaultOpen = false, ...rests } = props;
  const buttonId = `rootui-accordion-button-${useId()}`;
  const panelId = `rootui-accordion-panel-${useId()}`;
  const internalAccordionRef = React.useRef<HTMLElement | null>(null);
  const accordionRef = useSyncRefs(
    ref,
    optionalRef((ref) => {
      internalAccordionRef.current = ref as unknown as HTMLElement | null;
      // @ts-expect-error The `as` prop _can_ be a Fragment
    }, props.as === undefined || props.as === Fragment),
  );

  const panelRef = React.useRef<StateDefinition['panelRef']['current']>(null);
  const buttonRef = React.useRef<StateDefinition['buttonRef']['current']>(null);

  const initState = React.useMemo<StateDefinition>(() => {
    return {
      accordionState: defaultOpen ? OpenClosedState.Open : OpenClosedState.Closed,
      linkedPanel: false,
      buttonRef,
      panelRef,
      buttonId,
      panelId,
    };
  }, [buttonId, defaultOpen, panelId]);
  const reducerBag = React.useReducer(rootReducer, initState);
  const [{ accordionState }, dispatch] = reducerBag;

  React.useEffect(() => dispatch({ type: ActionTypes.SetButtonId, buttonId }), [buttonId, dispatch]);
  React.useEffect(() => dispatch({ type: ActionTypes.SetPanelId, panelId }), [panelId, dispatch]);

  const close = useEvent((focusableElement?: AccordionFocusableElement | null) => {
    dispatch({ type: ActionTypes.CloseAccordion });
    const ownerDocument = getOwnerDocumentBy(internalAccordionRef);
    if (!ownerDocument) return;

    const restoreElement = (() => {
      if (!focusableElement) return ownerDocument.getElementById(buttonId);
      if (focusableElement instanceof HTMLElement) {
        return focusableElement;
      }
      if (focusableElement.current instanceof HTMLElement) {
        return focusableElement.current;
      }
      return ownerDocument.getElementById(buttonId);
    })();

    restoreElement?.focus();
  });

  const api = React.useMemo<AccordionAPIContextValues>(() => {
    return {
      close,
    };
  }, [close]);

  const ourProps = React.useMemo(() => {
    return {
      ref: accordionRef,
    };
  }, [accordionRef]);

  const theirProps = rests;

  const slot = React.useMemo<AccordionRootRenderPropArg>(() => {
    return {
      open: accordionState === OpenClosedState.Open,
      close,
    };
  }, [accordionState, close]);

  return (
    <AccordionContext.Provider value={reducerBag}>
      <AccordionAPIContext.Provider value={api}>
        <OpenClosedProvider
          value={match(accordionState, {
            [OpenClosedState.Open]: OpenClosedState.Open,
            [OpenClosedState.Closed]: OpenClosedState.Closed,
          })}
        >
          {render({
            ourProps,
            theirProps,
            slot,
            defaultTag: DEFAULT_TAG,
            name: COMPONENT_NAME,
          })}
        </OpenClosedProvider>
      </AccordionAPIContext.Provider>
    </AccordionContext.Provider>
  );
});
