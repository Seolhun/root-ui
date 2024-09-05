import clsx from 'clsx';
import * as React from 'react';

import { TagVariants, outlinedTag, solidTag } from './Tag.styles';

const CLASSNAME = 'Root__Tag';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;
export type TagProps = ElementProps & TagVariants;

export const Tag = React.forwardRef<ElementType, TagProps>(
  ({ children, className, intent = 'primary', scale = 'md', variant = 'solid', ...others }, ref) => {
    const styles = variant === 'solid' ? solidTag({ intent, scale }) : outlinedTag({ intent, scale });
    return (
      <button
        role="button"
        tabIndex={0}
        type="button"
        {...others}
        className={clsx(CLASSNAME, className, 'btn', styles)}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
