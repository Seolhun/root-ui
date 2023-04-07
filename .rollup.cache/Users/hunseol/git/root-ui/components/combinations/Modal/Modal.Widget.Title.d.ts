import * as React from 'react';
import { ModalRenderPropArg } from './Modal.Widget.types';
import { RootUIProps } from '~/types';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalTitleProps extends ElementProps {
}
export interface ModalTitleRenderPropArg extends ModalRenderPropArg {
}
type PropsWeControl = keyof Pick<ElementProps, 'id'>;
declare const ModalWidgetTitle: (<Tag extends React.ElementType<any> = "h2">(props: Omit<import("../../../types").PropsOf<Tag>, "id" | ("children" | "className" | "as" | "refName")> & import("../../../types").RootUIOurProps<Tag, ModalTitleRenderPropArg> & (true extends (import("../../../types").PropsOf<Tag> extends infer T ? T extends import("../../../types").PropsOf<Tag> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
    className?: import("../../../types").PropsOf<Tag>["className"] | ((bag: ModalTitleRenderPropArg) => string) | undefined;
} : import("../../../types").UnknownObject) & ModalTitleProps, ref: React.Ref<ElementType>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    displayName: string;
};
export { ModalWidgetTitle };
export default ModalWidgetTitle;
