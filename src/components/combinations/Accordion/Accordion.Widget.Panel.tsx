import * as React from 'react';

import { forwardRefWithAs, PropsForFeatures, render, RenderFeatures } from '../../../core';
import { useSyncRefs } from '../../../hooks';
import { OpenClosedState, useOpenClosed } from '../../../tools';
import { RootUIProps, RootUIReactTag } from '../../../types';
import { AccordionPanelContext, ActionTypes, useAccordionAPIContext, useAccordionContext } from './Accordion.reducer';

const COMPONENT_NAME = 'Root__Accordion__Panel';
const DEFAULT_TAG: RootUIReactTag = 'div';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface AccordionPanelProps {}
export interface AccordionPanelRenderPropArg {
  open: boolean;
  close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void;
}
type PropsWeControl = keyof Pick<ElementProps, 'id'>;
const PanelRenderFeatures = RenderFeatures.RenderStrategy | RenderFeatures.Static;

const AccordionWidgetPanel = forwardRefWithAs(function AccordionWidgetPanel<
  Tag extends React.ElementType = typeof DEFAULT_TAG,
>(
  props: RootUIProps<Tag, AccordionPanelRenderPropArg, PropsWeControl> &
    PropsForFeatures<typeof PanelRenderFeatures> &
    AccordionPanelProps &
    ElementProps,
  ref: React.Ref<ElementType>,
) {
  const [state, dispatch] = useAccordionContext(COMPONENT_NAME);
  const { close } = useAccordionAPIContext(COMPONENT_NAME);

  const panelRef = useSyncRefs(ref, state.panelRef, (el) => {
    dispatch({ type: el ? ActionTypes.LinkPanel : ActionTypes.UnlinkPanel });
  });

  const usesOpenClosedState = useOpenClosed();

  const visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === OpenClosedState.Open;
    }
    return state.accordionState === OpenClosedState.Open;
  })();

  const ourProps = React.useMemo(() => {
    return {
      ref: panelRef,
      id: state.panelId,
    };
  }, [panelRef, state.panelId]);

  const theirProps = props;

  const slot = React.useMemo<AccordionPanelRenderPropArg>(() => {
    return {
      open: state.accordionState === OpenClosedState.Open,
      close,
    };
  }, [state, close]);

  return (
    <AccordionPanelContext.Provider value={state.panelId}>
      {render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_TAG,
        features: PanelRenderFeatures,
        visible,
        name: COMPONENT_NAME,
      })}
    </AccordionPanelContext.Provider>
  );
});

export { AccordionWidgetPanel };
export default AccordionWidgetPanel;
