import React from 'react';
import classNames from 'classnames';

import { RootIntent, RootIntentWeight, RootScale, toIntentMatch, toScaleMatch } from '../../../system';

const CLASSNAME = 'Root__Tag';
type Element = HTMLSpanElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface TagProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
  /**
   * @default primary
   */
  intent?: RootIntent;
  /**
   * @default 600
   */
  intentWeight?: RootIntentWeight;
}

const Tag: React.FC<TagProps> = ({
  className,
  children,
  scale = 'md',
  intent = 'primary',
  intentWeight = 600,
  ...rests
}) => {
  return (
    <span
      {...rests}
      className={classNames(
        CLASSNAME,
        className,
        'inline-block',
        'font-semibold capitalize',
        `bg-${intent}-300 text-${intent}-${intentWeight}`,
        'rounded-full',
        'last:mr-0 mr-1',
        toScaleMatch({
          sm: () => 'text-2.5 py-1 px-2',
          md: () => 'text-3 py-1 px-2.5',
          lg: () => 'text-3.5 py-1 px-3',
        })(scale),
        toIntentMatch({
          neutral: () =>
            classNames(
              'bg-neutral hover:bg-neutral-darker text-neutral-lightest',
              'dark:bg-neutral dark:hover:bg-neutral-darker dark:text-neutral-lightest',
              'focus:ring-offset-neutral',
            ),
          light: () =>
            classNames(
              'bg-light hover:bg-light-darker text-light-lightest',
              'dark:bg-light dark:hover:bg-light-darker dark:text-light-lightest',
              'focus:ring-offset-light',
            ),
          dark: () =>
            classNames(
              'bg-dark hover:bg-dark-darker text-dark-lightest',
              'dark:bg-dark dark:hover:bg-dark-darker dark:text-dark-lightest',
              'focus:ring-offset-dark',
            ),
          primary: () =>
            classNames(
              'bg-primary hover:bg-primary-darker text-primary-lightest',
              'dark:bg-primary dark:hover:bg-primary-darker dark:text-primary-lightest',
              'focus:ring-offset-primary',
            ),
          info: () =>
            classNames(
              'bg-info hover:bg-info-darker text-info-lightest',
              'dark:bg-info dark:hover:bg-info-darker dark:text-info-lightest',
              'focus:ring-offset-info',
            ),
          success: () =>
            classNames(
              'bg-success hover:bg-success-darker text-success-lightest',
              'dark:bg-success dark:hover:bg-success-darker dark:text-success-lightest',
              'focus:ring-offset-success',
            ),
          warning: () =>
            classNames(
              'bg-warning hover:bg-warning-darker text-warning-lightest',
              'dark:bg-warning dark:hover:bg-warning-darker dark:text-warning-lightest',
              'focus:ring-offset-warning',
            ),
          danger: () =>
            classNames(
              'bg-danger hover:bg-danger-darker text-danger-lightest',
              'dark:bg-danger dark:hover:bg-danger-darker dark:text-danger-lightest',
              'focus:ring-offset-danger',
            ),
        })(intent),
      )}
    >
      {children}
    </span>
  );
};

export { Tag };
export default Tag;
