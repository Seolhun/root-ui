import * as React from 'react';
import clsx from 'clsx';

import { Card } from '../../atomics';
import { Icon, IconProps } from '../../icons';
import { Input, InputProps } from '../input';

const CLASSNAME = 'Root__TextField';

export interface TextFieldProps extends InputProps {
  /**
   * @default SearchIcon
   */
  icon?: IconProps['icon'];
}

export const TextField = ({ className, scale = 'md', icon = 'SearchIcon', ...rests }: TextFieldProps) => {
  return (
    <Card
      scale={scale}
      className={clsx(
        'flex items-center',
        'shadow-md',
        'border border-light-1',
        'ring-offset-2 focus-within:ring-2 focus-within:ring-primary-6',
        'outline-0',
        CLASSNAME,
      )}
    >
      <Icon icon={icon} intent="light" scale={scale} />
      <Input {...rests} scale={scale} className={clsx('border-none outline-0', className)} />
    </Card>
  );
};
