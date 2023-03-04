import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../system';
import { Box } from '../common';

const CLASSNAME = 'Root__FormHelp';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormHelpProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default neutral
   */
  intent?: RootIntent;
}

export const FormHelp = React.forwardRef<ElementType, FormHelpProps>(
  ({ children, className, scale = 'md', intent = 'neutral', ...others }, ref) => {
    return (
      <Box
        {...others}
        as="p"
        ref={ref}
        scaleClassName={toScaleMatch({
          xs: () => 'text-2 p-1',
          sm: () => 'text-2.5 p-1',
          md: () => 'text-3 p-1',
          lg: () => 'text-3.5 p-1',
          xl: () => 'text-4 p-1',
        })(scale)}
        intentClassName={toIntentMatch({
          neutral: () => clsx('text-neutral dark:text-neutral2'),
          light: () => clsx('text-light dark:text-light2'),
          dark: () => clsx('text-dark dark:text-dark2'),
          primary: () => clsx('text-primary dark:text-primary2'),
          info: () => clsx('text-info dark:text-info2'),
          success: () => clsx('text-success dark:text-success2'),
          accent: () => clsx('text-accent dark:text-accent2'),
          warning: () => clsx('text-warning dark:text-warning2'),
          danger: () => clsx('text-danger dark:text-danger2'),
        })(intent)}
        className={clsx(CLASSNAME, className, 'flex items-center flex-wrap')}
      >
        {children}
      </Box>
    );
  },
);
