import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '~/system';

const CLASSNAME = 'Root__Loader';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface LoaderProps extends ElementProps {
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

export const Loader = React.forwardRef<ElementType, LoaderProps>(
  ({ className, scale = 'md', intent = 'primary', ...others }, ref) => {
    return (
      <div {...others} ref={ref} className="inline-block">
        <svg
          className={clsx(
            CLASSNAME,
            className,
            'animate-spin',
            toScaleMatch({
              xs: () => 'scale-xs',
              sm: () => 'scale-sm',
              md: () => 'scale-md',
              lg: () => 'scale-lg',
              xl: () => 'scale-xl',
            })(scale),
            toIntentMatch({
              neutral: () => clsx('text-neutral-2 fill-neutral dark:text-neutral2-2 dark:fill-neutral2'),
              light: () => clsx('text-light-2 fill-light dark:text-light2-2 dark:fill-light2'),
              dark: () => clsx('text-dark-2 fill-dark dark:text-dark2-2 dark:fill-dark2'),
              primary: () => clsx('text-primary-2 fill-primary dark:text-primary2-2 dark:fill-primary2'),
              info: () => clsx('text-info-2 fill-info dark:text-info2-2 dark:fill-info2'),
              success: () => clsx('text-success-2 fill-success dark:text-success2-2 dark:fill-success2'),
              accent: () => clsx('text-accent-2 fill-accent dark:text-accent2-2 dark:fill-accent2'),
              warning: () => clsx('text-warning-2 fill-warning dark:text-warning2-2 dark:fill-warning2'),
              danger: () => clsx('text-danger-2 fill-danger dark:text-danger2-2 dark:fill-danger2'),
            })(intent),
          )}
          aria-hidden="true"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);
