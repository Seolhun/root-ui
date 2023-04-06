import * as React from 'react';
import { RootUIProps } from '~/types';
import { ModalProps, ModalRenderPropArg } from './Modal.Widget.types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalRootRenderPropArg extends ModalRenderPropArg {
}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'role' | 'aria-modal' | 'aria-labelledby'>;
export declare const ModalWidgetRoot: (<Tag extends React.ElementType<any> = "div">(props: RootUIProps<Tag, ModalRootRenderPropArg, "id" | "role" | "aria-labelledby" | "aria-modal"> & ModalProps, ref: React.Ref<ElementType>) => JSX.Element) & {
    displayName: string;
};
export {};
