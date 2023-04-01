import * as React from 'react';
import { ModalRenderPropArg } from './Modal.Widget.types';
import { RootUIProps } from '../../../types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalWidgetOverlayProps extends ElementProps {
}
export interface ModalOverlayRenderPropArg extends ModalRenderPropArg {
}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'aria-hidden' | 'onClick'>;
declare const ModalWidgetOverlay: (<Tag extends React.ElementType<any> = "div">(props: RootUIProps<Tag, ModalOverlayRenderPropArg, "id" | "aria-hidden" | "onClick"> & ModalWidgetOverlayProps, ref: React.Ref<ElementType>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    displayName: string;
};
export { ModalWidgetOverlay };
export default ModalWidgetOverlay;
