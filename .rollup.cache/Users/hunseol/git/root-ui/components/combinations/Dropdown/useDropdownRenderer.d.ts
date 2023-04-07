import * as React from 'react';
import { Optional } from '~/utils/fx';
import { DropdownOption, DropdownOptionState } from './widgets';
export interface UseDropdownRendererProps<Option extends DropdownOption, ActionOption = Option> {
    /**
     * To Identify option uniqueness
     */
    identify: (option: Optional<Option | ActionOption>) => string;
    /**
     * To render option
     */
    renderOption?: (option: Optional<Option | ActionOption>, state?: DropdownOptionState) => React.ReactNode;
    /**
     * To render selected option
     * if this value is empty, used first renderOption. and then raw option
     */
    renderSelectedOption?: (option: Optional<ActionOption>) => React.ReactNode;
}
export type UseDropdownRenderer = ReturnType<typeof useDropdownRenderer>;
export declare function useDropdownRenderer<Option extends DropdownOption, ActionOption = Option>({ identify, renderOption, renderSelectedOption, }: UseDropdownRendererProps<Option, ActionOption>): {
    readonly selectedOptionRenderer: (option: Optional<ActionOption>) => React.ReactNode;
    readonly optionRenderer: (option: Optional<Option>, state: DropdownOptionState) => React.ReactNode;
};
