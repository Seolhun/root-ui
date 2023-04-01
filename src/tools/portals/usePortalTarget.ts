import * as React from 'react';

import { useForcePortalRoot } from './PortalForceRoot';
import { PortalGroupContext } from './PortalGroup';

import { GlobalRootDataAttributeMap } from '../../constants';
import { useOwnerDocument } from '../../hooks';
import { isServer } from '../../utils';

function usePortalTarget(ref: React.MutableRefObject<HTMLElement | null>): HTMLElement | null {
  const forceInRoot = useForcePortalRoot();
  const groupTarget = React.useContext(PortalGroupContext);

  const ownerDocument = useOwnerDocument(ref);

  const [target, setTarget] = React.useState(() => {
    // Group context is used, but still null
    if (!forceInRoot && groupTarget !== null) {
      return null;
    }
    // No group context is used, let's create a default portal root
    if (isServer) {
      return null;
    }

    const existingRoot = ownerDocument?.getElementById(GlobalRootDataAttributeMap.PortalRoot);
    if (existingRoot) {
      return existingRoot;
    }

    if (ownerDocument === null) {
      return null;
    }

    const createdPortalRoot = ownerDocument.createElement('div');
    createdPortalRoot.setAttribute('id', GlobalRootDataAttributeMap.PortalRoot);
    return ownerDocument.body.appendChild(createdPortalRoot);
  });

  // Ensure the portal root is always in the DOM
  React.useEffect(() => {
    if (target === null) {
      return;
    }
    if (!ownerDocument?.body.contains(target)) {
      ownerDocument?.body.appendChild(target);
    }
  }, [target, ownerDocument]);

  React.useEffect(() => {
    if (forceInRoot) {
      return;
    }
    if (groupTarget === null) {
      return;
    }
    setTarget(groupTarget.current);
  }, [groupTarget, setTarget, forceInRoot]);

  return target;
}

export { usePortalTarget };
export default usePortalTarget;
