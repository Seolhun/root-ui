import { Description, DescriptionProps } from '@headlessui/react';
import { RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { toScaleMatch } from '~/system';
import { OmitBy } from '~/types';

const CLASSNAME = 'Root__FormHelp';
type ElementType = HTMLParagraphElement;

export interface FormHelpProps extends OmitBy<DescriptionProps<'p'>, 'as'> {
  /**
   * @default md
   */
  scale?: RootScaleType;
}

export const FormHelp = React.forwardRef<ElementType, FormHelpProps>(
  ({ className, children, scale = 'md', ...others }, ref) => {
    return (
      <Description
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'flex items-center flex-wrap',
          toScaleMatch({
            lg: () => 'scale-text-lg',
            md: () => 'scale-text-md',
            sm: () => 'scale-text-sm',
            xl: () => 'scale-text-xl',
            xs: () => 'scale-text-xs',
          })(scale),
        )}
        as="p"
        ref={ref}
      >
        {children}
      </Description>
    );
  },
);
