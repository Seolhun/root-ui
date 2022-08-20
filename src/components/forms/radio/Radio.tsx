import React from 'react';
import classNames from 'classnames';

import {
  IntentType,
  RootScale,
  toHoverIntentColor,
  toScaleMatch,
  toFocusIntentColor,
  toTypography,
  toCheckedIntentColor,
} from '@/system';
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
          toScaleMatch(() => ['py-0.5 px-1'])(() => ['py-1 px-1.5'])(() => ['py-1.5 px-2'])(scale),
          toScaleMatch(() => [toTypography('3')])(() => [toTypography('3.5')])(() => [toTypography('4')])(scale),
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
            toCheckedIntentColor({
              prefix: 'accent',
              intent,
              intentWeight,
            }),
            toHoverIntentColor({
              prefix: 'border',
              intent,
              intentWeight: intentWeight - 100,
            }),
            toFocusIntentColor({
              prefix: 'ring-offset',
              intent,
              intentWeight,
            }),
          )}
        />
        <span className="ml-2">{children}</span>
      </FormLabel>
    );
  },
);

export { Radio };
export default Radio;
