import * as React from 'react';
import clsx from 'clsx';

import { Maybe } from '../../../utils/fx';
import { useDropdownRenderer, UseDropdownRendererProps } from './useDropdownRenderer';
import {
  DropdownWidget,
  DropdownOptionState,
  DropdownOption,
  DropdownWidgetButtonClassName,
  DropdownWidgetOptionClassName,
} from './widgets';

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

export interface DropdownProps<Option extends DropdownOption = DropdownOption, ActionOption = Option>
  extends UseDropdownRendererProps<Option, ActionOption> {
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

export function Dropdown<Option extends DropdownOption = DropdownOption, ActionOption = Option>({
  options,
  selectedOption,
  onChange,
  identify,
  renderSelectedOption,
  renderOption,
  multiple,
  disabled,
  classes,
}: DropdownProps<Option, ActionOption>) {
  const { optionRenderer, selectedOptionRenderer } = useDropdownRenderer<Option, ActionOption>({
    identify,
    renderSelectedOption,
    renderOption,
  });

  return (
    <DropdownWidget<Option, ActionOption>
      value={selectedOption}
      onChange={onChange}
      disabled={disabled}
      multiple={multiple}
    >
      <DropdownWidget.Button className={clsx(classes?.button)}>
        {selectedOptionRenderer(selectedOption)}
      </DropdownWidget.Button>
      <DropdownWidget.Options>
        {options.map((option) => {
          const { disabled } = option;
          const key = identify(option);
          return (
            <DropdownWidget.Option key={key} className={clsx(classes?.option)} value={option} disabled={disabled}>
              {(state: DropdownOptionState) => <>{optionRenderer(option, state)}</>}
            </DropdownWidget.Option>
          );
        })}
      </DropdownWidget.Options>
    </DropdownWidget>
  );
}
