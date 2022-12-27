import React from 'react';
import clsx from 'clsx';

import { RootScale } from '../../system';
import FormLabel, { FormLabelProps } from './FormLabel';
import FormHelp from './FormHelp';

const CLASSNAME = 'Root__FormItem';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
export interface FormItemProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * Form label
   */
  label?: string;

  /**
   * Form label htmlFor
   */
  htmlFor?: FormLabelProps['htmlFor'];

  /**
   * Form help
   */
  help?: string;
}

const FormItem = ({ children, className, scale = 'md', label, htmlFor, help, ...props }: FormItemProps) => {
  return (
    <div {...props} className={clsx(CLASSNAME, className)}>
      {label && (
        <FormLabel className="mb-2" scale={scale} htmlFor={htmlFor}>
          {label}
        </FormLabel>
      )}
      {children}
      {help && (
        <FormHelp className="mt-2" scale={scale}>
          {help}
        </FormHelp>
      )}
    </div>
  );
};

export { FormItem };
export default FormItem;
