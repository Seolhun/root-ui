import clsx from 'clsx';
import * as React from 'react';

import { Box } from '~/components/common';
import { RootIntent, RootScale, toIntentMatch } from '~/system';

import { FormLabel } from '../FormLabel';

const CLASSNAME = 'Root__Radio';
type ElementType = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<ElementType>;

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

export const Radio = React.forwardRef<ElementType, RadioProps>(
  ({ className, children, htmlFor, scale = 'md', intent = 'primary', disabled, ...others }, ref) => {
    const htmlForAndID = htmlFor ?? others.name;
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
          {...others}
          ref={ref}
          as="input"
          type="radio"
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
