import React from 'react';
import classNames from 'classnames';

import { RootIntent, RootScale, toIntentMatch } from '../../../system';
import { FormLabel } from '../FormLabel';

const CLASSNAME = 'Root__Checkbox';
type Element = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface CheckboxProps extends ExtensionProps {
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

const Checkbox = React.forwardRef<Element, CheckboxProps>(
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
        <input
          {...rests}
          ref={ref}
          type="checkbox"
          id={htmlForAndID}
          className={classNames(
            CLASSNAME,
            className,
            'inline-block',
            toIntentMatch({
              neutral: () => classNames('accent-neutral-darker', 'dark:accent-neutral-darker'),
              light: () => classNames('accent-light-darker', 'dark:accent-light-darker'),
              dark: () => classNames('accent-dark-darker', 'dark:accent-dark-darker'),
              primary: () => classNames('accent-primary-darker', 'dark:accent-primary-darker'),
              info: () => classNames('accent-info-darker', 'dark:accent-info-darker'),
              success: () => classNames('accent-success-darker', 'dark:accent-success-darker'),
              warning: () => classNames('accent-warning-darker', 'dark:accent-warning-darker'),
              danger: () => classNames('accent-danger-darker', 'dark:accent-danger-darker'),
            })(intent),
          )}
        />
        <span className="ml-2">{children}</span>
      </FormLabel>
    );
  },
);

export { Checkbox };
export default Checkbox;
