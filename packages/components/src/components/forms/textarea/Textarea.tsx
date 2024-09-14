import clsx from 'clsx';
import * as React from 'react';

import { textarea, TextareaVariants } from './Textarea.styles';

const CLASSNAME = 'Root__Textarea';
type ElementType = HTMLTextAreaElement;
type ElementProps = React.TextareaHTMLAttributes<ElementType>;

export type TextareaProps = ElementProps & TextareaVariants;

export const Textarea = React.forwardRef<ElementType, TextareaProps>(
  ({ className, intent = 'primary', scale = 'md', ...others }, ref) => {
    return (
      <textarea
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          textarea({
            intent,
            scale,
          }),
        )}
        id={others.name}
        ref={ref}
      />
    );
  },
);
