/// <reference types="react" />
import { Optional } from '~/utils/fx';
import { DropdownOption, DropdownOptionState } from './widgets';
export type DropdownIdentifyFunction<Option extends DropdownOption, ActionOption = Option> = (option: Optional<Option | ActionOption>) => string;
export type DropdownRenderOptionFunction<Option extends DropdownOption, ActionOption = Option> = (option: Optional<Option | ActionOption>, state?: DropdownOptionState) => React.ReactNode;
export type DropdownRenderSelectedOptionFunction<Option extends DropdownOption, ActionOption = Option> = (option: Optional<ActionOption>) => React.ReactNode;
