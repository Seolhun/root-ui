import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toIntentMatch } from '../../../system';
import { FormLabel } from '../FormLabel';
import { Box } from '../../common';

const CLASSNAME = 'Root__Checkbox';
type ElementType = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<ElementType>;

export interface CheckboxProps extends ElementProps {
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

const Checkbox = React.forwardRef<ElementType, CheckboxProps>(
  ({ className, children, htmlFor, scale = 'md', intent = 'primary', disabled, ...rests }, ref) => {
    const htmlForAndID = htmlFor ?? rests.name;
    return (
      <FormLabel
        className={clsx('inline-flex items-center cursor-pointer', {
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
          type="checkbox"
          id={htmlForAndID}
          intentClassName={toIntentMatch({
            neutral: () => clsx('accent-neutral-6', 'dark:accent-neutral-6'),
            light: () => clsx('accent-light-6', 'dark:accent-light-6'),
            dark: () => clsx('accent-dark-6', 'dark:accent-dark-6'),
            primary: () => clsx('accent-primary-6', 'dark:accent-primary-6'),
            info: () => clsx('accent-info-6', 'dark:accent-info-6'),
            success: () => clsx('accent-success-6', 'dark:accent-success-6'),
            accent: () => clsx('accent-accent-6', 'dark:accent-accent-6'),
            warning: () => clsx('accent-warning-6', 'dark:accent-warning-6'),
            danger: () => clsx('accent-danger-6', 'dark:accent-danger-6'),
          })(intent)}
          className={clsx(CLASSNAME, className, 'inline-block')}
        />
        <span className="ml-2">{children}</span>
      </FormLabel>
    );
  },
);

export { Checkbox };
export default Checkbox;
