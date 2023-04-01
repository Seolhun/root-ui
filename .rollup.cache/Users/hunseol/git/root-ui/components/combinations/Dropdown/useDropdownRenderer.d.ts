import * as React from 'react';
import { DropdownOption, DropdownOptionState } from './widgets';
import { Maybe } from '../../../utils/fx';
export interface UseDropdownRendererProps<Option extends DropdownOption, ActionOption = Option> {
    /**
     * To Identify option uniqueness
     */
    identify: (option: Maybe<Option | ActionOption>) => string;
    /**
     * To render option
     */
    renderOption?: (option: Maybe<Option | ActionOption>, state?: DropdownOptionState) => React.ReactNode;
    /**
     * To render selected option
     * if this value is empty, used first renderOption. and then raw option
     */
    renderSelectedOption?: (option: Maybe<ActionOption>) => React.ReactNode;
}
export type UseDropdownRenderer = ReturnType<typeof useDropdownRenderer>;
export declare function useDropdownRenderer<Option extends DropdownOption, ActionOption = Option>({ identify, renderOption, renderSelectedOption, }: UseDropdownRendererProps<Option, ActionOption>): {
    readonly selectedOptionRenderer: (option: Maybe<ActionOption>) => React.ReactNode;
    readonly optionRenderer: (option: Maybe<Option>, state: DropdownOptionState) => React.ReactNode;
};
