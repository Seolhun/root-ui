import clsx from 'clsx';
import * as React from 'react';

import { Box } from '~/components/common/box';

import { textarea, TextareaVariants } from './Textarea.styles';

const CLASSNAME = 'Root__Textarea';
type ElementType = HTMLTextAreaElement;
type ElementProps = React.TextareaHTMLAttributes<ElementType>;

export type TextareaProps = ElementProps & TextareaVariants;

export const Textarea = React.forwardRef<ElementType, TextareaProps>(
  ({ className, intent = 'primary', scale = 'md', ...others }, ref) => {
    return (
      <Box
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          textarea({
            intent,
            scale,
          }),
        )}
        as="textarea"
        id={others.name}
        ref={ref}
      />
    );
  },
);
