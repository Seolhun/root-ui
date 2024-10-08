import { FloatingPortal } from '@floating-ui/react';
import * as React from 'react';

import { GlobalRootDataAttributeMap } from '../../constants';
import { forwardRefWithAs, render } from '../../core';
import { optionalRef, useIsoMorphicEffect, useOwnerDocument, useServerHandoffComplete, useSyncRefs } from '../../hooks';
import { RootUIProps } from '../../types';
import { isServer, toMicrotask } from '../../utils';
import { PortalGroup } from './PortalGroup';
import { usePortalTarget } from './usePortalTarget';

const DEFAULT_PORTAL_TAG = React.Fragment;
export interface PortalRenderPropArg {
  root?: HTMLElement | null;
}

const _PortalRoot = <Tag extends React.ElementType = typeof DEFAULT_PORTAL_TAG>(
  props: RootUIProps<Tag, PortalRenderPropArg>,
  ref: React.Ref<HTMLElement>,
) => {
  const { root, ...others } = props;
  const internalPortalRootRef = React.useRef<HTMLElement | null>(null);
  const portalRef = useSyncRefs(
    optionalRef<(typeof internalPortalRootRef)['current']>((ref) => {
      internalPortalRootRef.current = ref;
    }),
    ref,
  );

  const ownerDocument = useOwnerDocument(internalPortalRootRef);
  const target = usePortalTarget(internalPortalRootRef);
  const [element] = React.useState<HTMLDivElement | null>(() =>
    isServer ? null : (ownerDocument?.createElement('div') ?? null),
  );

  const isReady = useServerHandoffComplete();
  const trulyUnmounted = React.useRef(false);

  useIsoMorphicEffect(() => {
    trulyUnmounted.current = false;

    if (!target || !element) return;

    // Element already exists in target, always calling target.appendChild(element) will cause a brief unmount/remount.
    if (!target.contains(element)) {
      element.setAttribute(GlobalRootDataAttributeMap.Portal, '');
      target.appendChild(element);
    }

    return () => {
      trulyUnmounted.current = true;
      toMicrotask(() => {
        if (!trulyUnmounted.current) return;
        if (!target || !element) return;

        target.removeChild(element);
        if (target.childNodes.length <= 0) {
          target.parentElement?.removeChild(target);
        }
      });
    };
  }, [target, element]);

  if (!isReady) {
    return null;
  }

  if (!target || !element) {
    return null;
  }

  const ourProps = { ref: portalRef };
  const theirProps = others;
  return (
    <FloatingPortal root={root || element}>
      {render({
        defaultTag: DEFAULT_PORTAL_TAG,
        name: 'Portal',
        ourProps,
        theirProps,
      })}
    </FloatingPortal>
  );
};

export const Portal = Object.assign(forwardRefWithAs(_PortalRoot), { Group: PortalGroup });
