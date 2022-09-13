import React from 'react';
import classNames from 'classnames';

import { RootScale, toScaleMatch } from '../../system';

type ElementProps = React.HTMLAttributes<HTMLParagraphElement>;
type ExtensionProps = ElementProps;
export interface FormHelpProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const FormHelp: React.FC<FormHelpProps> = ({ children, className, scale = 'md', ...props }) => {
  return (
    <p
      {...props}
      className={classNames(
        className,
        'text-sm text-gray-500',
        toScaleMatch({
          xs: () => 'text-2 py-1 px-2',
          sm: () => 'text-2.5 py-1 px-2',
          md: () => 'text-3 py-1 px-2.5',
          lg: () => 'text-3.5 py-1 px-2.5',
          xl: () => 'text-4 py-1 px-3',
        })(scale),
      )}
    >
      {children}
    </p>
  );
};

export { FormHelp };
export default FormHelp;
