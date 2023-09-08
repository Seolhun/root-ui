import clsx from 'clsx';
import * as React from 'react';

import { Card } from '~/components/atomics';
import { Icon, IconProps } from '~/components/icons';

import { Input, InputProps } from '../input';

const CLASSNAME = 'Root__TextField';

export interface TextFieldProps extends InputProps {
  /**
   * @default "MagnifyingGlassIcon"
   */
  icon?: IconProps['icon'];
}

export const TextField = ({ className, icon = 'MagnifyingGlassIcon', scale = 'md', ...others }: TextFieldProps) => {
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
      scale={scale}
    >
      <Icon icon={icon} intent="light" scale={scale} />
      <Input {...others} className={clsx('border-none outline-0', className)} scale={scale} />
    </Card>
  );
};
