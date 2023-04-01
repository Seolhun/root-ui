/// <reference types="react" />
import { UseDropdownRendererProps } from './useDropdownRenderer';
import { DropdownOption, DropdownWidgetButtonClassName, DropdownWidgetOptionClassName } from './widgets';
import { Maybe } from '../../../utils/fx';
export interface DropdownClasses {
    /**
     * Button className
     */
    button?: DropdownWidgetButtonClassName;
    /**
     * Button className
     */
    option?: DropdownWidgetOptionClassName;
}
export interface DropdownProps<Option extends DropdownOption = DropdownOption, ActionOption = Option> extends UseDropdownRendererProps<Option, ActionOption> {
    options: Option[];
    /**
     * Selected option
     */
    selectedOption: Maybe<ActionOption>;
    /**
     * Change option handler
     */
    onChange: (option: Maybe<ActionOption>) => void;
    /**
     * Could be selected multiple options
     */
    multiple?: boolean;
    /**
     * disabled dropdown
     */
    disabled?: boolean;
    /**
     * Atomic component className
     */
    classes?: DropdownClasses;
}
export declare function Dropdown<Option extends DropdownOption = DropdownOption, ActionOption = Option>({ options, selectedOption, onChange, identify, renderSelectedOption, renderOption, multiple, disabled, classes, }: DropdownProps<Option, ActionOption>): JSX.Element;
