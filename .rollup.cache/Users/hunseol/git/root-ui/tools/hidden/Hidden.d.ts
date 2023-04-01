import { ElementType, Ref } from 'react';
import { RootUIProps } from '../../types';
export declare enum HiddenFeatures {
    None = 1,
    Focusable = 2,
    Hidden = 4
}
declare const Hidden: (<Tag extends ElementType<any> = "div">(props: Omit<import("../../types").PropsOf<Tag>, "children" | "className" | "as" | "refName"> & import("../../types").RootUIOurProps<Tag, import("../../types").UnknownObject> & (true extends (import("../../types").PropsOf<Tag> extends infer T ? T extends import("../../types").PropsOf<Tag> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
    className?: import("../../types").PropsOf<Tag>["className"] | ((bag: import("../../types").UnknownObject) => string) | undefined;
} : import("../../types").UnknownObject) & {
    features?: HiddenFeatures | undefined;
}, ref: Ref<HTMLElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null) & {
    displayName: string;
};
export { Hidden };
export default Hidden;
