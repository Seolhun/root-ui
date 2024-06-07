import clsx from 'clsx';
import * as React from 'react';

import { Card } from '../../../components/atomics/card/Card';

import { Input, InputProps } from '../input';

const CLASSNAME = 'Root__TextField';

export interface TextFieldProps extends InputProps {
  /**
   * To render prefix element before input
   */
  Prefix?: React.ReactNode;

  /**
   * To render suffix element after input
   */
  Suffix?: React.ReactNode;
}

export const TextField = ({ Prefix, Suffix, className, scale = 'md', ...others }: TextFieldProps) => {
  return (
    <Card
      className={clsx(
        'flex items-center',
        'shadow',
        'border border-cream-3 dark:border-space-3',
        'ring-offset-1 focus-within:ring-1 focus-within:ring-primary-6',
        'outline-0',
        CLASSNAME,
      )}
    >
      {Prefix && Prefix}
      <Input {...others} className={clsx('border-none outline-0', className)} scale={scale} />
      {Suffix && Suffix}
    </Card>
  );
};
