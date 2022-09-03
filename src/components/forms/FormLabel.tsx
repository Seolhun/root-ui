import React from 'react';
import classNames from 'classnames';

import { RootScale, toScaleMatch } from '../../system';

type ElementProps = React.LabelHTMLAttributes<HTMLLabelElement>;
type ExtensionProps = ElementProps;
export interface FormLabelProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const FormLabel: React.FC<FormLabelProps> = ({ children, className, htmlFor, scale = 'md', ...props }) => {
  return (
    <label
      {...props}
      aria-labelledby={htmlFor}
      htmlFor={htmlFor}
      className={classNames(
        className,
        'block',
        'text-base font-medium text-gray-700',
        toScaleMatch({
          sm: () => 'text-3 py-0.5 px-1',
          md: () => 'text-3.5 py-1 px-1.5',
          lg: () => 'text-4 py-1.5 px-2',
        })(scale),
      )}
    >
      {children}
    </label>
  );
};

export { FormLabel };
export default FormLabel;
