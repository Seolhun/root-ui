import * as React from 'react';
import { ModalRenderPropArg } from './Modal.Widget.types';
import { RootUIProps } from '../../../types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalRootProps extends ElementProps {
    /**
     * To show modal
     */
    show: boolean;
    /**
     * To close modal (Escape Key)
     */
    onClose: () => void;
    /**
     * Keydown event handler
     */
    onKeyDown?: (e: React.KeyboardEvent<Element>) => void;
    /**
     * Init focus element
     */
    initialFocus?: React.MutableRefObject<HTMLElement | null>;
}
export interface ModalRootRenderPropArg extends ModalRenderPropArg {
}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'role' | 'aria-modal' | 'aria-labelledby'>;
declare const ModalWidgetRoot: (<Tag extends React.ElementType<any> = "div">(props: RootUIProps<Tag, ModalRootRenderPropArg, "id" | "role" | "aria-labelledby" | "aria-modal"> & ModalRootProps, ref: React.Ref<ElementType>) => JSX.Element) & {
    displayName: string;
};
export { ModalWidgetRoot };
export default ModalWidgetRoot;
