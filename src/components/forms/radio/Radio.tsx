import React from 'react';
import classNames from 'classnames';

import { RootIntent, RootScale, toIntentMatch } from '../../../system';
import { FormLabel } from '../FormLabel';
import { Box } from '../../common';

const CLASSNAME = 'Root__Radio';
type Element = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<Element>;

export interface RadioProps extends ElementProps {
  htmlFor?: string;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: RootIntent;
}

const Radio = React.forwardRef<Element, RadioProps>(
  ({ className, children, htmlFor, scale = 'md', intent = 'primary', disabled, ...rests }, ref) => {
    const htmlForAndID = htmlFor ?? rests.name;
    return (
      <FormLabel
        className={classNames('inline-flex items-center cursor-pointer', {
          'cursor-default': disabled,
          'cursor-pointer': !disabled,
        })}
        htmlFor={htmlForAndID}
        scale={scale}
      >
        <Box
          {...rests}
          ref={ref}
          as="input"
          type="radio"
          id={htmlForAndID}
          intentClassName={toIntentMatch({
            default: () => classNames('accent-default-6', 'dark:accent-default-6'),
            neutral: () => classNames('accent-neutral-6', 'dark:accent-neutral-6'),
            light: () => classNames('accent-light-6', 'dark:accent-light-6'),
            dark: () => classNames('accent-dark-6', 'dark:accent-dark-6'),
            primary: () => classNames('accent-primary-6', 'dark:accent-primary-6'),
            info: () => classNames('accent-info-6', 'dark:accent-info-6'),
            success: () => classNames('accent-success-6', 'dark:accent-success-6'),
            warning: () => classNames('accent-warning-6', 'dark:accent-warning-6'),
            danger: () => classNames('accent-danger-6', 'dark:accent-danger-6'),
          })(intent)}
          className={classNames(CLASSNAME, className, 'inline-block')}
        />
        <span className="ml-2">{children}</span>
      </FormLabel>
    );
  },
);

export { Radio };
export default Radio;
