import React from 'react';

import { RootUIProps, RootUIReactTag } from '../../../types';
import { useEvent, useSyncRefs } from '../../../hooks';
import { forwardRefWithAs, render } from '../../../core';
import { getOwnerDocumentBy } from '../../../utils';
import { PopoverRenderPropArg } from './Popover.Widget.types';
import { PopoverGroupContext, PopoverGroupContextValues, PopoverRegisterBag } from './Popover.Widget.Context';

const COMPONENT_NAME = 'Root__Popover__Group';
const DEFAULT_TAG: RootUIReactTag = 'div';

type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface PopoverGroupProps {}
export interface PopoverGroupRenderPropArg extends PopoverRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id'>;

const _PopoverWidgetGroup = <TTag extends React.ElementType = typeof DEFAULT_TAG>(
  props: RootUIProps<TTag, PopoverGroupRenderPropArg, PropsWeControl> & PopoverGroupProps & ElementProps,
  ref: React.Ref<HTMLElement>,
) => {
  const internalGroupRef = React.useRef<HTMLElement | null>(null);
  const groupRef = useSyncRefs(internalGroupRef, ref);
  const [popovers, setPopovers] = React.useState<PopoverRegisterBag[]>([]);

  const unregisterPopover = useEvent((registerBag: PopoverRegisterBag) => {
    setPopovers((existing) => {
      const idx = existing.indexOf(registerBag);
      if (idx !== -1) {
        const clone = existing.slice();
        clone.splice(idx, 1);
        return clone;
      }
      return existing;
    });
  });

  const registerPopover = useEvent((registerBag: PopoverRegisterBag) => {
    setPopovers((existing) => [...existing, registerBag]);
    return () => unregisterPopover(registerBag);
  });

  const isFocusWithinPopoverGroup = useEvent(() => {
    const ownerDocument = getOwnerDocumentBy(internalGroupRef);
    if (!ownerDocument) return false;
    const element = ownerDocument.activeElement;

    if (internalGroupRef.current?.contains(element)) return true;

    // Check if the focus is in one of the button or panel elements. This is important in case you are rendering inside a Portal.
    return popovers.some((bag) => {
      return (
        ownerDocument!.getElementById(bag.buttonId)?.contains(element) ||
        ownerDocument!.getElementById(bag.panelId)?.contains(element)
      );
    });
  });

  const closeOthers = useEvent((buttonId: string) => {
    for (const popover of popovers) {
      if (popover.buttonId !== buttonId) popover.close();
    }
  });

  const contextBag = React.useMemo<PopoverGroupContextValues>(
    () => ({
      registerPopover: registerPopover,
      unregisterPopover: unregisterPopover,
      isFocusWithinPopoverGroup,
      closeOthers,
    }),
    [registerPopover, unregisterPopover, isFocusWithinPopoverGroup, closeOthers],
  );

  const slot = React.useMemo(() => ({}), []);

  const theirProps = props;
  const ourProps = { ref: groupRef };

  return (
    <PopoverGroupContext.Provider value={contextBag}>
      {render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_TAG,
        name: COMPONENT_NAME,
      })}
    </PopoverGroupContext.Provider>
  );
};

const PopoverWidgetGroup = forwardRefWithAs(_PopoverWidgetGroup);

export { PopoverWidgetGroup };
export default PopoverWidgetGroup;
