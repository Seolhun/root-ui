import * as React from 'react';
import { ModalRenderPropArg } from './Modal.Widget.types';
import { RootUIProps } from '~/types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalBackdropProps extends ElementProps {
}
export interface ModalBackdropRenderPropArg extends ModalRenderPropArg {
}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'aria-hidden'>;
declare const ModalWidgetBackdrop: (<Tag extends React.ElementType<any> = "div">(props: RootUIProps<Tag, ModalBackdropRenderPropArg, "id" | "aria-hidden"> & ModalBackdropProps, ref: React.Ref<ElementType>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    displayName: string;
};
export { ModalWidgetBackdrop };
export default ModalWidgetBackdrop;
