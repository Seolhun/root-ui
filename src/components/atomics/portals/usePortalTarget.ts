import React from 'react';

import { useForcePortalRoot } from '@/tools';
import { useOwnerDocument } from '@/hooks';
import { isServer } from '@/utils';

import { PortalGroupContext } from './PortalGroup';

function usePortalTarget(ref: React.MutableRefObject<HTMLElement | null>): HTMLElement | null {
  const forceInRoot = useForcePortalRoot();
  const groupTarget = React.useContext(PortalGroupContext);

  const ownerDocument = useOwnerDocument(ref);

  const [target, setTarget] = React.useState(() => {
    // Group context is used, but still null
    if (!forceInRoot && groupTarget !== null) return null;

    // No group context is used, let's create a default portal root
    if (isServer) return null;
    const existingRoot = ownerDocument?.getElementById('headlessui-portal-root');
    if (existingRoot) return existingRoot;

    if (ownerDocument === null) return null;

    const root = ownerDocument.createElement('div');
    root.setAttribute('id', 'headlessui-portal-root');
    return ownerDocument.body.appendChild(root);
  });

  // Ensure the portal root is always in the DOM
  React.useEffect(() => {
    if (target === null) return;

    if (!ownerDocument?.body.contains(target)) {
      ownerDocument?.body.appendChild(target);
    }
  }, [target, ownerDocument]);

  React.useEffect(() => {
    if (forceInRoot) return;
    if (groupTarget === null) return;
    setTarget(groupTarget.current);
  }, [groupTarget, setTarget, forceInRoot]);

  return target;
}

export { usePortalTarget };
export default usePortalTarget;
