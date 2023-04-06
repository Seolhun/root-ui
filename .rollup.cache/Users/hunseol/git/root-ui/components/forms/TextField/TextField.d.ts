/// <reference types="react" />
import { IconProps } from '../../icons';
import { InputProps } from '../input';
export interface TextFieldProps extends InputProps {
    /**
     * @default "MagnifyingGlassIcon"
     */
    icon?: IconProps['icon'];
}
export declare const TextField: ({ className, scale, icon, ...others }: TextFieldProps) => JSX.Element;
