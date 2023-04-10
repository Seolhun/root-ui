import * as React from 'react';
import { Optional } from '~/utils/fx';
import { DropdownIdentifyFunction, DropdownRenderOptionFunction, DropdownRenderSelectedOptionFunction } from './Dropdown.types';
import { DropdownOption, DropdownOptionState } from './widgets';
export interface UseDropdownRendererProps<Option extends DropdownOption, ActionOption = Option> {
    /**
     * To Identify option uniqueness
     */
    identify: DropdownIdentifyFunction<Option, ActionOption>;
    /**
     * To render option
     */
    renderOption?: DropdownRenderOptionFunction<Option, ActionOption>;
    /**
     * To render selected option
     * if this value is empty, used first renderOption. and then raw option
     */
    renderSelectedOption?: DropdownRenderSelectedOptionFunction<Option, ActionOption>;
}
export interface UseDropdownRendererReturns<Option extends DropdownOption, ActionOption = Option> {
    optionRenderer: (option: Optional<Option>, state: DropdownOptionState) => React.ReactNode;
    selectedOptionRenderer: (option: Optional<ActionOption>) => React.ReactNode;
}
export declare const useDropdownRenderer: <Option extends DropdownOption, ActionOption = Option>({ identify, renderOption, renderSelectedOption, }: UseDropdownRendererProps<Option, ActionOption>) => UseDropdownRendererReturns<Option, ActionOption>;
