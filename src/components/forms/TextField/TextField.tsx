import React from 'react';
import classNames from 'classnames';

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

const TextField = ({ className, scale = 'md', icon = 'SearchIcon', ...rests }: TextFieldProps) => {
  return (
    <Card
      scale={scale}
      className={classNames(
        'flex items-center',
        'shadow-md',
        'border border-light-1',
        'ring-offset-2 focus-within:ring-2 focus-within:ring-primary-6',
        'outline-0',
        CLASSNAME,
      )}
    >
      <Icon icon={icon} intent="light" scale={scale} />
      <Input {...rests} scale={scale} className={classNames('border-none outline-0', className)} />
    </Card>
  );
};

export { TextField };
export default TextField;
