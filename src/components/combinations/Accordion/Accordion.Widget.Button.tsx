import React from 'react';

import { KeyboardKeyMap } from '../../../constants';
import { forwardRefWithAs, render } from '../../../core';
import { useEvent, useResolveButtonType, useSyncRefs } from '../../../hooks';
import { OpenClosedState } from '../../../tools';
import { RootUIProps, RootUIReactTag } from '../../../types';
import { isDisabledReactIssue7711 } from '../../../utils/bugs';
import { ActionTypes, useAccordionContext, useAccordionPanelContext } from './Accordion.reducer';

const COMPONENT_NAME = 'Root__Accordion__Button';
const DEFAULT_TAG: RootUIReactTag = 'button';

type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface AccordionButtonProps {}
export interface AccordionButtonRenderPropArg {
  open: boolean;
}
type PropsWeControl = keyof Pick<
  ElementProps,
  'id' | 'type' | 'aria-expanded' | 'aria-controls' | 'onKeyDown' | 'onClick'
>;

const _AccordionWidgetButton = <Tag extends React.ElementType = typeof DEFAULT_TAG>(
  props: RootUIProps<Tag, AccordionButtonRenderPropArg, PropsWeControl> & AccordionButtonProps & ElementProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const [state, dispatch] = useAccordionContext(COMPONENT_NAME);
  const panelContext = useAccordionPanelContext();
  const isWithinPanel = panelContext === null ? false : panelContext === state.panelId;

  const internalButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const buttonRef = useSyncRefs(internalButtonRef, ref, !isWithinPanel ? state.buttonRef : null);

  const handleKeyDown = useEvent((event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (isWithinPanel) {
      if (state.accordionState === OpenClosedState.Closed) return;

      switch (event.key) {
        case KeyboardKeyMap.Space:
        case KeyboardKeyMap.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: ActionTypes.ToggleAccordion });
          state.buttonRef.current?.focus();
          break;
      }
    } else {
      switch (event.key) {
        case KeyboardKeyMap.Space:
        case KeyboardKeyMap.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: ActionTypes.ToggleAccordion });
          break;
      }
    }
  });

  const handleKeyUp = useEvent((event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case KeyboardKeyMap.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  });

  const handleClick = useEvent((event: React.MouseEvent) => {
    if (isDisabledReactIssue7711(event.currentTarget)) return;
    if (props.disabled) return;

    if (isWithinPanel) {
      dispatch({ type: ActionTypes.ToggleAccordion });
      state.buttonRef.current?.focus();
    } else {
      dispatch({ type: ActionTypes.ToggleAccordion });
    }
  });

  const type = useResolveButtonType(props, internalButtonRef);

  const ourProps = React.useMemo(() => {
    if (isWithinPanel) {
      return { ref: buttonRef, type, onKeyDown: handleKeyDown, onClick: handleClick };
    }
    return {
      ref: buttonRef,
      id: state.buttonId,
      type,
      'aria-expanded': props.disabled ? undefined : state.accordionState === OpenClosedState.Open,
      'aria-controls': state.linkedPanel ? state.panelId : undefined,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick,
    };
  }, [
    buttonRef,
    handleClick,
    handleKeyDown,
    handleKeyUp,
    isWithinPanel,
    props.disabled,
    state.buttonId,
    state.accordionState,
    state.linkedPanel,
    state.panelId,
    type,
  ]);

  const theirProps = props;

  const slot = React.useMemo<AccordionButtonRenderPropArg>(() => {
    return {
      open: state.accordionState === OpenClosedState.Open,
    };
  }, [state]);

  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TAG,
    name: COMPONENT_NAME,
  });
};

const AccordionWidgetButton = forwardRefWithAs(_AccordionWidgetButton);

export { AccordionWidgetButton };
export default AccordionWidgetButton;
