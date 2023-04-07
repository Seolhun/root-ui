import * as React from 'react';
import { ModalRenderPropArg } from './Modal.Widget.types';
import { RootUIProps } from '~/types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalWidgetPanelProps extends ElementProps {
}
export interface ModalPanelRenderPropArg extends ModalRenderPropArg {
}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'onClick'>;
declare const ModalWidgetPanel: (<Tag extends React.ElementType<any> = "div">(props: RootUIProps<Tag, ModalPanelRenderPropArg, "id" | "onClick"> & ModalWidgetPanelProps, ref: React.Ref<ElementType>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    displayName: string;
};
export { ModalWidgetPanel };
export default ModalWidgetPanel;
