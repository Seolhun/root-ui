import React from 'react';

import { Props, UnknownObject } from '@/types';
import { useSyncRefs } from '@/hooks';
import { forwardRefWithAs, render } from '@/utils';

const DEFAULT_GROUP_TAG = React.Fragment;
type PortalGroupRenderPropArg = UnknownObject;

export const PortalGroupContext = React.createContext<React.MutableRefObject<HTMLElement | null> | null>(null);

const PortalGroup = forwardRefWithAs(function Group<TTag extends React.ElementType = typeof DEFAULT_GROUP_TAG>(
  props: Props<TTag, PortalGroupRenderPropArg> & {
    target: React.MutableRefObject<HTMLElement | null>;
  },
  ref: React.Ref<HTMLElement>,
) {
  const { target, ...theirProps } = props;
  const groupRef = useSyncRefs(ref);
  const ourProps = { ref: groupRef };

  return (
    <PortalGroupContext.Provider value={target}>
      {render({
        ourProps,
        theirProps,
        defaultTag: DEFAULT_GROUP_TAG,
        name: 'Popover.Group',
      })}
    </PortalGroupContext.Provider>
  );
});

export { PortalGroup };
export default PortalGroup;
