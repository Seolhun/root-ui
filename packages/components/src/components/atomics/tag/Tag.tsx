import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale } from '../../../system';

const CLASSNAME = 'Root__Tag';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;
export interface TagProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * Use outline style
   */
  outlined?: boolean;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const Tag = React.forwardRef<ElementType, TagProps>(
  ({ className, children, intent = 'primary', outlined, scale = 'md', ...others }, ref) => {
    return (
      <button
        role="button"
        tabIndex={0}
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'tag',
          `tag-scale-${scale}`,
          `${outlined ? `outlined-${intent}` : `solid-${intent}`}`,
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
