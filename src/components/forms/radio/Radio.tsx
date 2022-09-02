import React from 'react';
import classNames from 'classnames';

import { IntentType, RootScale, toScaleMatch } from '@/system';
import { FormLabel } from '../FormLabel';

const CLASSNAME = 'Root__Radio';
type Element = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface RadioProps extends ExtensionProps {
  htmlFor?: string;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: IntentType;
}

const intentWeight = 600;
const Radio = React.forwardRef<Element, RadioProps>(
  ({ className, children, htmlFor, scale = 'md', intent = 'primary', disabled, ...rests }, ref) => {
    const htmlForAndID = htmlFor ?? rests.name;
    return (
      <FormLabel
        className={classNames(
          'inline-flex items-center cursor-pointer',
          toScaleMatch({
            sm: () => 'text-3',
            md: () => 'text-3.5',
            lg: () => 'text-4',
          })(scale),
          toScaleMatch({
            sm: () => 'py-0.5 px-1',
            md: () => 'py-1 px-1.5',
            lg: () => 'py-1.5 px-2',
          })(scale),
          {
            'cursor-default': disabled,
            'cursor-pointer': !disabled,
          },
        )}
        htmlFor={htmlForAndID}
      >
        <input
          {...rests}
          ref={ref}
          type="radio"
          id={htmlForAndID}
          disabled={disabled}
          className={classNames(
            CLASSNAME,
            className,
            'inline-block',
            `accent-${intent}-${intentWeight}`,
            `hover:ring-offset-${intent}-${intentWeight - 100} focus:ring-offset-${intent}-${intentWeight}`,
          )}
        />
        <span className="ml-2">{children}</span>
      </FormLabel>
    );
  },
);

export { Radio };
export default Radio;
