import React from 'react';
import classnames from 'classnames';

import { IntentWeightType, IntentType, RootScale, toFocusIntentColor, toScaleStyles } from '@/system';

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
   * @default 500
   */
  intentWeight?: IntentWeightType;
}

const Textarea = React.forwardRef<Element, TextareaProps>(
  ({ className, name, rows = 8, intent = 'primary', scale = 'md', intentWeight = 500, ...rests }, ref) => {
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
          toScaleStyles(() => ['py-1 px-2'])(() => ['py-2 px-3'])(() => ['py-2.5 px-4'])(scale),
          'sm:text-sm',
          'border border-gray-400 rounded-md',
          'border border-gray-400 rounded-md',
          toFocusIntentColor({
            prefix: 'outline',
            intent,
            intentWeight,
          }),
        )}
        rows={rows}
      />
    );
  },
);

export { Textarea };
export default Textarea;
