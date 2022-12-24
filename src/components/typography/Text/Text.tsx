import React from 'react';
import classNames from 'classnames';

import { Box } from '../../common';
import { AgnosticTagProps } from '../../../system';

const CLASSNAME = 'Root__Text';

export interface TextProps extends AgnosticTagProps {}

const Text = <Tag extends keyof JSX.IntrinsicElements>({
  className,
  children,
  as = 'div',
  ...rests
}: TextProps & JSX.IntrinsicElements[Tag]) => {
  return (
    <Box
      {...rests}
      as={as}
      className={classNames(CLASSNAME, className, 'text-base leading-relaxed', 'text-dark-9 dark:text-light-1')}
    >
      {children}
    </Box>
  );
};

export { Text };
export default Text;
