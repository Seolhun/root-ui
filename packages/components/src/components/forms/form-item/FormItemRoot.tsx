import { Field, FieldProps } from '@headlessui/react';
import { RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { toScaleMatch } from '~/system';

const CLASSNAME = 'Root__FormItemRoot';

export interface FormItemProps extends FieldProps<'div'> {
  /**
   * @default md
   */
  scale?: RootScaleType;
}

export const FormItemRoot = ({ children, className, scale = 'md', ...others }: FormItemProps) => {
  return (
    <Field
      {...others}
      className={clsx(
        CLASSNAME,
        className,
        'space-y-1',
        toScaleMatch({
          lg: () => 'scale-text-lg',
          md: () => 'scale-text-md',
          sm: () => 'scale-text-sm',
          xl: () => 'scale-text-xl',
          xs: () => 'scale-text-xs',
        })(scale),
      )}
      as="div"
    >
      {children}
    </Field>
  );
};
