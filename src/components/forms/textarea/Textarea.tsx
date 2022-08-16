import React from 'react';
import classnames from 'classnames';

import { ColorWeight, IntentType, RootScale } from '@/system';
import { toIntentColorByOptions } from '@/utils';

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
  intentWeight?: ColorWeight;
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
          {
            'py-1 px-1.5': scale === 'sm',
            'py-2 px-3': scale === 'md',
            'py-3 px-4': scale === 'lg',
          },
          'sm:text-sm',
          'border border-gray-400 rounded-md',
          toIntentColorByOptions(['focus'], 'ring', intent, intentWeight),
          'shadow-sm ',
        )}
        rows={rows}
      />
    );
  },
);

export { Textarea };
export default Textarea;
