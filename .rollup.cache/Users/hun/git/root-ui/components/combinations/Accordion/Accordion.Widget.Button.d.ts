import * as React from 'react';
import { RootUIProps } from '~/types';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;
export interface AccordionButtonProps {
}
export interface AccordionButtonRenderPropArg {
    open: boolean;
}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'type' | 'aria-expanded' | 'aria-controls' | 'onKeyDown' | 'onClick'>;
export declare const AccordionWidgetButton: (<Tag extends React.ElementType<any> = "button">(props: RootUIProps<Tag, AccordionButtonRenderPropArg, "id" | "aria-controls" | "aria-expanded" | "onKeyDown" | "onClick" | "type"> & AccordionButtonProps & ElementProps, ref: React.Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    displayName: string;
};
export {};
