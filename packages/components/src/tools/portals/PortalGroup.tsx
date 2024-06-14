import * as React from 'react';

import { forwardRefWithAs, render } from '../../core';
import { useSyncRefs } from '../../hooks';
import { RootUIProps, UnknownObject } from '../../types';

const DEFAULT_GROUP_TAG = React.Fragment;
type PortalGroupRenderPropArg = UnknownObject;

export const PortalGroupContext = React.createContext<null | React.MutableRefObject<HTMLElement | null>>(null);
PortalGroupContext.displayName = 'PortalGroupContext';

export const PortalGroup = forwardRefWithAs(
  <Tag extends React.ElementType = typeof DEFAULT_GROUP_TAG>(
    props: RootUIProps<Tag, PortalGroupRenderPropArg> & {
      target: React.MutableRefObject<HTMLElement | null>;
    },
    ref: React.Ref<HTMLElement>,
  ) => {
    const { target, ...others } = props;
    const groupRef = useSyncRefs(ref);
    const ourProps = { ref: groupRef };
    const theirProps = others;

    return (
      <PortalGroupContext.Provider value={target}>
        {render({
          defaultTag: DEFAULT_GROUP_TAG,
          name: 'Popover.Group',
          ourProps,
          theirProps,
        })}
      </PortalGroupContext.Provider>
    );
  },
);
