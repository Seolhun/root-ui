import * as React from 'react';
import { DropdownOption } from './Dropdown.Widget.types';
import { Maybe } from '../../../../utils/fx';
interface ElementProps {
    children: React.ReactNode;
    disabled?: boolean;
}
export interface DropdownWidgetRootProps<Option extends DropdownOption, ActionOption = Option> extends ElementProps {
    /**
     * Selected option
     */
    value: Maybe<ActionOption>;
    /**
     * Change option handler
     */
    onChange: (option: Maybe<ActionOption>) => void;
    /**
     * Could be multi select
     */
    multiple?: boolean;
}
export declare function DropdownWidgetRoot<Option extends DropdownOption, ActionOption = Option>({ children, value, onChange, disabled, multiple, }: DropdownWidgetRootProps<Option, ActionOption>): JSX.Element;
export {};
