import { MutableRefObject } from 'react';

import { isServer } from './isServer';

export function getOwnerDocumentBy<T extends Element | MutableRefObject<Element | null>>(
  element: T | null | undefined,
) {
  if (isServer) {
    return null;
  }
  if (element instanceof Node) {
    return element.ownerDocument;
  }
  if (element?.current instanceof Node) {
    return element.current.ownerDocument;
  }
  return document;
}
