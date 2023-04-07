import clsx from 'clsx';
import * as React from 'react';

import { Icon, IconProps } from '~/components/atomic';
import { Card } from '~/components/atomics';

import { Input, InputProps } from '../input';

const CLASSNAME = 'Root__TextField';

export interface TextFieldProps extends InputProps {
  /**
   * @default "MagnifyingGlassIcon"
   */
  icon?: IconProps['icon'];
}

export const TextField = ({ className, scale = 'md', icon = 'MagnifyingGlassIcon', ...others }: TextFieldProps) => {
  return (
    <Card
      scale={scale}
      className={clsx(
        'flex items-center',
        'shadow',
        'border border-cream-3 dark:border-space-3',
        'ring-offset-1 focus-within:ring-1 focus-within:ring-primary-6',
        'outline-0',
        CLASSNAME,
      )}
    >
      <Icon icon={icon} intent="light" scale={scale} />
      <Input {...others} scale={scale} className={clsx('border-none outline-0', className)} />
    </Card>
  );
};
