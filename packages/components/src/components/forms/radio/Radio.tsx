import clsx from 'clsx';
import * as React from 'react';

import { Box } from '../../../components/common/box/Box';
import { RootIntent, RootScale, toIntentMatch } from '../../../system';
import { FormLabel } from '../FormItem/FormLabel';

const CLASSNAME = 'Root__Radio';
type ElementType = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<ElementType>;

export interface RadioProps extends ElementProps {
  htmlFor?: string;

  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const Radio = React.forwardRef<ElementType, RadioProps>(
  ({ className, children, disabled, htmlFor, intent = 'primary', scale = 'md', ...others }, ref) => {
    const htmlForAndID = htmlFor ?? others.name;
    return (
      <FormLabel
        className={clsx('inline-flex items-center cursor-pointer', {
          'cursor-default': disabled,
          'cursor-pointer': !disabled,
        })}
        htmlFor={htmlForAndID}
      >
        <Box
          {...others}
          intentClassName={toIntentMatch({
            accent: () => clsx('accent-accent-6', 'dark:accent-accent-6'),
            danger: () => clsx('accent-danger-6', 'dark:accent-danger-6'),
            info: () => clsx('accent-info-6', 'dark:accent-info-6'),
            neutral: () => clsx('accent-neutral-6', 'dark:accent-neutral-6'),
            primary: () => clsx('accent-primary-6', 'dark:accent-primary-6'),
            success: () => clsx('accent-success-6', 'dark:accent-success-6'),
            warning: () => clsx('accent-warning-6', 'dark:accent-warning-6'),
          })(intent)}
          as="input"
          className={clsx(CLASSNAME, className, 'inline-block')}
          id={htmlForAndID}
          ref={ref}
          type="radio"
        />
        <span className="ml-2">{children}</span>
      </FormLabel>
    );
  },
);
