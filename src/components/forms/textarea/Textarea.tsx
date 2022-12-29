import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';
import { Box } from '../../common';

const CLASSNAME = 'Root__Textarea';
type ElementType = HTMLTextAreaElement;
type ElementProps = React.TextareaHTMLAttributes<ElementType>;
export interface TextareaProps extends ElementProps {
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

const Textarea = React.forwardRef<ElementType, TextareaProps>(
  ({ className, scale = 'md', intent = 'primary', ...rests }, ref) => {
    return (
      <Box
        {...rests}
        as="textarea"
        ref={ref}
        id={rests.name}
        scaleClassName={toScaleMatch({
          xs: () => 'text-2 py-1 px-2',
          sm: () => 'text-2.5 py-1.5 px-2.5',
          md: () => 'text-3 py-1.5 px-3',
          lg: () => 'text-3.5 py-2 px-3.5',
          xl: () => 'text-4 py-2 px-4',
        })(scale)}
        intentClassName={toIntentMatch({
          default: () => clsx('outline-default dark:outline-default'),
          neutral: () => clsx('outline-neutral dark:outline-neutral'),
          light: () => clsx('outline-light dark:outline-light'),
          dark: () => clsx('outline-dark dark:outline-dark'),
          primary: () => clsx('outline-primary dark:outline-primary'),
          info: () => clsx('outline-info dark:outline-info'),
          success: () => clsx('outline-success dark:outline-success'),
          warning: () => clsx('outline-warning dark:outline-warning'),
          danger: () => clsx('outline-danger dark:outline-danger'),
        })(intent)}
        className={clsx(
          CLASSNAME,
          className,
          'block',
          'w-full',
          'bg-white dark:bg-dark-9',
          'text-dark-9 dark:text-light-1',
          'disabled:bg-neutral-1 disabled:border-neutral-4 disabled:placeholder:text-neutral-light',
          'border border-light-3 dark:border-dark-7',
          'rounded-md',
          'caret-neutral',
        )}
      />
    );
  },
);

export { Textarea };
export default Textarea;
