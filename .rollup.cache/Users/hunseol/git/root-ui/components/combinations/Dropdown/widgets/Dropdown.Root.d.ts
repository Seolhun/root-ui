import * as React from 'react';
import { Optional } from '~/utils/fx';
import { DropdownOption } from './Dropdown.types';
interface ElementProps {
    children: React.ReactNode;
    disabled?: boolean;
}
export interface DropdownRootProps<Option extends DropdownOption> extends ElementProps {
    /**
     * Selected option
     */
    value: Optional<Option>;
    /**
     * Change option handler
     */
    onChange: (option: Optional<Option>) => void;
}
export declare function DropdownRoot<Option extends DropdownOption>({ children, value, onChange, disabled, }: DropdownRootProps<Option>): JSX.Element;
export {};
