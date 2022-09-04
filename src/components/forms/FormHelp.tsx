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
          sm: () => 'text-3 py-0.5 px-1',
          md: () => 'text-3.5 py-1 px-1.5',
          lg: () => 'text-4 py-1.5 px-2',
        })(scale),
      )}
    >
      {children}
    </p>
  );
};

export { FormHelp };
export default FormHelp;
