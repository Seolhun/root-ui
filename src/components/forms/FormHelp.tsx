import React from 'react';
import classNames from 'classnames';

import { RootScale, toScaleMatch } from '../../system';
import { Box } from '../common';

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
    <Box
      {...props}
      as="p"
      scaleClassName={toScaleMatch({
        xs: () => 'text-2 py-1 px-2',
        sm: () => 'text-2.5 py-1 px-2',
        md: () => 'text-3 py-1 px-2.5',
        lg: () => 'text-3.5 py-1 px-2.5',
        xl: () => 'text-4 py-1 px-3',
      })(scale)}
      className={classNames(className, 'text-sm text-dark-7 dark:text-light-3')}
    >
      {children}
    </Box>
  );
};

export { FormHelp };
export default FormHelp;
