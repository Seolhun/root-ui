import React from 'react';
import classNames from 'classnames';

import { RootScale, toIntentMatch, toScaleMatch } from '../../system';
import { Box } from '../common';

type ElementProps = React.LabelHTMLAttributes<HTMLLabelElement>;
type ExtensionProps = ElementProps;
export interface FormLabelProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const FormLabel: React.FC<FormLabelProps> = ({
  children,
  className,
  htmlFor,
  scale = 'md',
  intent = 'default',
  ...props
}) => {
  return (
    <Box
      {...props}
      as="label"
      aria-labelledby={htmlFor}
      htmlFor={htmlFor}
      scaleClassName={toScaleMatch({
        xs: () => 'text-2 py-1 px-2',
        sm: () => 'text-2.5 py-1 px-2',
        md: () => 'text-3 py-1 px-2.5',
        lg: () => 'text-3.5 py-1 px-2.5',
        xl: () => 'text-4 py-1 px-3',
      })(scale)}
      className={classNames(className, 'block', 'text-base font-medium text-dark-9 dark:text-light-1')}
    >
      {children}
    </Box>
  );
};

export { FormLabel };
export default FormLabel;
