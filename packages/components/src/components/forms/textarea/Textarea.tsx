import clsx from 'clsx';
import * as React from 'react';

import { Box } from '../../../components/common/box/Box';
import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../../system';

const CLASSNAME = 'Root__Textarea';
type ElementType = HTMLTextAreaElement;
type ElementProps = React.TextareaHTMLAttributes<ElementType>;
export interface TextareaProps extends ElementProps {
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

export const Textarea = React.forwardRef<ElementType, TextareaProps>(
  ({ className, intent = 'primary', scale = 'md', ...others }, ref) => {
    return (
      <Box
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'block',
          'w-full',
          'px-4',
          'text-space-2 dark:text-cream-2',
          'bg-cream-1 dark:bg-space-1',
          'border-2 border-neutral-2 dark:border-neutral-8',
          'rounded-xl',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'caret-neutral',
        )}
        intentClassName={toIntentMatch({
          accent: () => clsx('outline-accent dark:outline-accent'),
          danger: () => clsx('outline-danger dark:outline-danger'),
          info: () => clsx('outline-info dark:outline-info'),
          neutral: () => clsx('outline-neutral dark:outline-neutral'),
          primary: () => clsx('outline-primary dark:outline-primary'),
          success: () => clsx('outline-success dark:outline-success'),
          warning: () => clsx('outline-warning dark:outline-warning'),
        })(intent)}
        scaleClassName={toScaleMatch({
          lg: () => 'scale-text-lg scale-py-lg',
          md: () => 'scale-text-md scale-py-md',
          sm: () => 'scale-text-sm scale-py-sm',
          xl: () => 'scale-text-xl scale-py-xl',
          xs: () => 'scale-text-xs scale-py-xs',
        })(scale)}
        as="textarea"
        id={others.name}
        ref={ref}
      />
    );
  },
);
