import { MutableRefObject } from 'react';
export declare function getOwnerDocumentBy<T extends Element | MutableRefObject<Element | null>>(element: T | null | undefined): Document | null;
