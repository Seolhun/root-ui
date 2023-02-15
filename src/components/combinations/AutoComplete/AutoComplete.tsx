import React from 'react';
import clsx from 'clsx';
import { Combobox } from '@headlessui/react';
import isEmpty from 'lodash/isEmpty';

import { Option } from '../../../utils/fx';
import { RootScale, toScaleMatch } from '../../../system';
import { Icon, IconProps } from '../../icons';
import { AutoCompleteIdentify } from './AutoComplete.types';
import * as Styled from './AutoComplete.Styled';

const CLASSNAME = 'Root__AutoComplete';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface AutoCompleteProps<Item> {
  query: string;

  identify: AutoCompleteIdentify<Item>;

  items: Item[];

  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onKeydownInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  onSelectItem: (item: Item) => void;

  selectedItem?: Option<Item>;

  /**
   * To display value by transforming item.
   */
  displayedValue?: (item: Item) => string;

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * To render loading state
   */
  Loader?: React.ReactNode;

  /**
   * To render empty state
   */
  Empty?: React.ReactNode;

  /**
   * @default "SearchIcon"
   */
  icon?: IconProps['icon'];

  /**
   * @default md
   */
  scale?: RootScale;

  /**
   * Autocomplete input placeholder
   */
  placeholder?: string;
}

function _AutoComplete<Item = any>(
  {
    // Root
    scale = 'md',
    // Props
    items,
    identify,
    query,
    onChangeInput,
    onKeydownInput,
    onSelectItem,
    selectedItem,
    displayedValue,
    loading,
    Loader,
    Empty = 'There are no suggestions',
    icon = 'SearchIcon',
    // HTMLAttributes
    className,
    placeholder,
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
      xs: () => 'text-2 py-2 px-3',
      sm: () => 'text-2.5` py-2 px-3',
      md: () => 'text-3 py-2 px-3',
      lg: () => 'text-3.5 py-2.5 px-4',
      xl: () => 'text-4 py-3 px-5',
    })(scale);
  }, [scale]);

  return (
    <div {...others} ref={ref} className={clsx(CLASSNAME, className, 'relative', 'bg-cream-1 dark:bg-space-1')}>
      <Combobox value={selectedItem} onChange={onSelectItem}>
        <div className={clsx(Styled.InputWrapper, 'bg-cream-1 dark:bg-space-1')}>
          <Icon className="mx-3" icon={icon} intent="light" scale={'sm'} />
          <Combobox.Input
            ref={inputRef}
            type="search"
            className={clsx(
              scaleClassName,
              'bg-cream-1 dark:bg-space-1',
              'w-full',
              'focus:caret-primary',
              'pl-0',
              'outline-none',
            )}
            value={query}
            onChange={onChangeInput}
            onKeyDown={onKeydownInput}
            displayValue={displayedValue}
            placeholder={placeholder}
          />
        </div>
        <div className={Styled.OptionGroupWrapper}>
          <Combobox.Options className={clsx(Styled.OptionGroup)}>
            {loading ? (
              <div className={clsx(Styled.BaseOption, scaleClassName)}>{Loader}</div>
            ) : query && isEmpty(items) ? (
              <div className={clsx(Styled.EmptyOption, scaleClassName)}>{Empty}</div>
            ) : (
              <>
                {items.map((item) => {
                  const identifiedItem = identify(item);
                  return (
                    <Combobox.Option key={identifiedItem.key} value={identifiedItem.value}>
                      {({ active, selected, disabled }) => (
                        <div
                          className={clsx(
                            Styled.Option,
                            scaleClassName,
                            clsx({
                              'bg-light-1': selected || active,
                              'text-primary': selected,
                            }),
                          )}
                        >
                          {identifiedItem.children({ active, selected, disabled })}
                        </div>
                      )}
                    </Combobox.Option>
                  );
                })}
              </>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
}

const AutoComplete = React.forwardRef(_AutoComplete) as <Item>(
  props: AutoCompleteProps<Item> &
    ElementProps & {
      ref?: React.ForwardedRef<HTMLDivElement>;
    },
) => ReturnType<typeof _AutoComplete>;

export { AutoComplete };
export default AutoComplete;
