import * as React from 'react';

import { forwardRefWithAs, render } from '../../../core';
import { optionalRef, useEvent, useId, useSyncRefs } from '../../../hooks';
import { OpenClosedProvider, OpenClosedState } from '../../../tools';
import { RootUIProps, RootUIReactTag } from '../../../types';
import { getOwnerDocumentBy, match } from '../../../utils';

import { AccordionFocusableElement } from './Accordion.Widget.types';
import {
  AccordionAPIContext,
  AccordionAPIContextValues,
  AccordionContext,
  ActionTypes,
  rootReducer,
  StateDefinition,
} from './Accordion.reducer';

const COMPONENT_NAME = 'Root__Accordion__Root';
const DEFAULT_TAG: RootUIReactTag = React.Fragment;

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface AccordionRootProps {
  defaultOpen?: boolean;
}
export interface AccordionRootRenderPropArg {
  close(focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>): void;
  open: boolean;
}

export const AccordionWidgetRoot = forwardRefWithAs(function AccordionWidgetRoot<
  Tag extends React.ElementType = typeof DEFAULT_TAG,
>(props: RootUIProps<Tag, AccordionRootRenderPropArg> & AccordionRootProps & ElementProps, ref: React.Ref<Tag>) {
  const { defaultOpen = false, ...others } = props;
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
      buttonId,
      buttonRef,
      linkedPanel: false,
      panelId,
      panelRef,
    };
  }, [buttonId, defaultOpen, panelId]);
  const reducerBag = React.useReducer(rootReducer, initState);
  const [{ accordionState }, dispatch] = reducerBag;

  React.useEffect(() => dispatch({ buttonId, type: ActionTypes.SetButtonId }), [buttonId, dispatch]);
  React.useEffect(() => dispatch({ panelId, type: ActionTypes.SetPanelId }), [panelId, dispatch]);

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

  const theirProps = others;

  const slot = React.useMemo<AccordionRootRenderPropArg>(() => {
    return {
      close,
      open: accordionState === OpenClosedState.Open,
    };
  }, [accordionState, close]);

  return (
    <AccordionContext.Provider value={reducerBag}>
      <AccordionAPIContext.Provider value={api}>
        <OpenClosedProvider
          value={match(accordionState, {
            [OpenClosedState.Closed]: OpenClosedState.Closed,
            [OpenClosedState.Open]: OpenClosedState.Open,
          })}
        >
          {render({
            defaultTag: DEFAULT_TAG,
            name: COMPONENT_NAME,
            ourProps,
            slot,
            theirProps,
          })}
        </OpenClosedProvider>
      </AccordionAPIContext.Provider>
    </AccordionContext.Provider>
  );
});
