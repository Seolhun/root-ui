import React from 'react';
import classnames from 'classnames';

import { IntentWeightType, IntentType, RootScale, toFocusIntentColor, toScaleMatch, toIntentColor } from '@/system';

const CLASSNAME = 'Root__Textarea';
type Element = HTMLTextAreaElement;
type ElementProps = React.TextareaHTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface TextareaProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default sm
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
  ({ className, name, rows = 8, intent = 'primary', scale = 'sm', intentWeight = 600, ...rests }, ref) => {
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
          toScaleMatch(() => ['py-1 px-2'])(() => ['py-2 px-3'])(() => ['py-2.5 px-3.5'])(scale),
          'border',
          toIntentColor({
            prefix: 'border',
            intent: 'light',
            intentWeight: 400,
          }),
          toFocusIntentColor({
            prefix: 'outline',
            intent,
            intentWeight,
          }),
          toIntentColor({
            prefix: 'caret',
            intent,
            intentWeight,
          }),
          'rounded-md',
        )}
        rows={rows}
      />
    );
  },
);

export { Textarea };
export default Textarea;
