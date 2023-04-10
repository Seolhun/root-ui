import * as React from 'react';
import { DropdownOption, DropdownWidgetProps } from './Dropdown.Widget.types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export declare function DropdownWidgetRoot<Option extends DropdownOption, ActionOption = Option>({ children, className, disabled, option, onChangeOption, multiple, placement, strategy, offset, ...others }: ElementProps & DropdownWidgetProps<Option, ActionOption>): JSX.Element;
export {};
