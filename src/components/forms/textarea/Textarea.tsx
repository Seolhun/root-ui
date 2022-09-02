import React from 'react';
import classnames from 'classnames';

import { IntentWeightType, IntentType, RootScale, toScaleMatch } from '@/system';

const CLASSNAME = 'Root__Textarea';
type Element = HTMLTextAreaElement;
type ElementProps = React.TextareaHTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface TextareaProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: IntentType;

  /**
   * @default 600
   */
  intentWeight?: IntentWeightType;
}

const Textarea = React.forwardRef<Element, TextareaProps>(
  ({ className, name, rows = 8, intent = 'primary', scale = 'md', intentWeight = 600, ...rests }, ref) => {
    return (
      <textarea
        {...rests}
        ref={ref}
        id={name}
        name={name}
        className={classnames(
          CLASSNAME,
          className,
          'block',
          'w-full',
          toScaleMatch({
            sm: () => 'py-1 px-2',
            md: () => 'py-2 px-3',
            lg: () => 'py-2.5 px-3.5',
          })(scale),
          'border border-light-400',
          `outline-${intent}-${intentWeight}`,
          `caret-${intent}-${intentWeight}`,
          'disabled:bg-dark-100 disabled:border-dark-100',
          'rounded-md',
        )}
        rows={rows}
      />
    );
  },
);

export { Textarea };
export default Textarea;
