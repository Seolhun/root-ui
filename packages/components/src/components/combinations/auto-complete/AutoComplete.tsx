import { isEmpty } from '@fxts/core';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { toScaleMatch } from '~/system';
import { Optional } from '~/types';

import * as Styled from './AutoComplete.Styled';
import { AutoCompleteIdentify } from './AutoComplete.types';

const CLASSNAME = 'Root__AutoComplete';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface AutoCompleteProps<Item> {
  /**
   * To display value by transforming item.
   */
  displayedValue?: (item: Item) => string;
  /**
   * To render empty state
   */
  Empty?: React.ReactNode;
  /**
   * To identify item
   */
  identify: AutoCompleteIdentify<Item>;
  /**
   * Items to render
   */
  items: Item[];
  /**
   * To render loading state
   */
  Loader?: React.ReactNode;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * On change input
   */
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * On keydown input
   */
  onKeydownInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * On select item
   */
  onSelectItem: (item: Item) => void;
  /**
   * Autocomplete input placeholder
   */
  placeholder?: string;
  /**
   * To render prefix element before input
   */
  Prefix?: React.ReactNode;
  /**
   * Query value
   */
  query: string;
  /**
   * @default md
   */
  scale?: RootScaleType;
  /**
   * Selected item
   */
  selectedItem?: Optional<Item>;
  /**
   * To render suffix element after input
   */
  Suffix?: React.ReactNode;
}

function _AutoComplete<Item = any>(
  {
    // HTMLAttributes
    className,
    Empty = 'There are no suggestions',
    Loader,
    Prefix,
    Suffix,
    displayedValue,
    identify,
    // Props
    items,
    loading,
    onChangeInput,
    onKeydownInput,
    onSelectItem,
    placeholder,
    query,
    // Root
    scale = 'md',
    selectedItem,
    ...others
  }: AutoCompleteProps<Item> & ElementProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  /**
   * @todo Don't use useMemo for styles
   */
  const scaleClassName = React.useMemo(() => {
    return toScaleMatch({
      lg: () => 'text-3.5 py-2.5 px-4',
      md: () => 'text-3 py-2 px-3',
      sm: () => 'text-2.5` py-2 px-3',
      xl: () => 'text-4 py-3 px-5',
      xs: () => 'text-2 py-2 px-3',
    })(scale);
  }, [scale]);

  return (
    <div {...others} className={clsx(CLASSNAME, className, 'relative', 'bg-cream-1 dark:bg-space-1')} ref={ref}>
      <Combobox onChange={onSelectItem} value={selectedItem}>
        <div className={clsx(Styled.InputWrapper, 'bg-cream-1 dark:bg-space-1')}>
          {Prefix && Prefix}
          <ComboboxInput
            className={clsx(
              scaleClassName,
              'bg-cream-1 dark:bg-space-1',
              'w-full',
              'focus:caret-primary',
              'pl-0',
              'outline-none',
            )}
            displayValue={displayedValue}
            onChange={onChangeInput}
            onKeyDown={onKeydownInput}
            placeholder={placeholder}
            ref={inputRef}
            type="search"
            value={query}
          />
          {Suffix && Suffix}
        </div>
        <div className={Styled.OptionGroupWrapper}>
          <ComboboxOptions className={clsx(Styled.OptionGroup)}>
            {loading ? (
              <div className={clsx(Styled.BaseOption, scaleClassName)}>{Loader}</div>
            ) : query && isEmpty(items) ? (
              <div className={clsx(Styled.EmptyOption, scaleClassName)}>{Empty}</div>
            ) : (
              <>
                {items.map((item) => {
                  const identifiedItem = identify(item);
                  return (
                    <ComboboxOption
                      className={({ focus, selected }) => {
                        return clsx(
                          Styled.Option,
                          scaleClassName,
                          clsx(selected ? 'text-primary' : 'text-space-2 dark:text-cream-2', {
                            'bg-cream-2 dark:bg-space-2': focus || selected,
                          }),
                        );
                      }}
                      key={identifiedItem.key}
                      value={identifiedItem.value}
                    >
                      {(args) => <>{identifiedItem.children(args)}</>}
                    </ComboboxOption>
                  );
                })}
              </>
            )}
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>
  );
}

export const AutoComplete = React.forwardRef(_AutoComplete) as <Item>(
  props: AutoCompleteProps<Item> &
    ElementProps & {
      ref?: React.ForwardedRef<HTMLDivElement>;
    },
) => ReturnType<typeof _AutoComplete>;
