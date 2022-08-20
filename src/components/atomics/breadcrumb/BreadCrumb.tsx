import React from 'react';
import classnames from 'classnames';

import { IntentType, IntentWeightType, toHoverIntentColor, toIntentColor } from '@/system';

const CLASSNAME = 'Root__BreadCrumb';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export interface BreadCrumbProps extends ExtensionProps {
  items: BreadCrumbItemProps[];

  /**
   * Color Intent
   */
  intent?: IntentType;

  /**
   * @default 600
   */
  intentWeight?: IntentWeightType;
}

export interface BreadCrumbItemProps {
  href: string;

  name: string;

  children: React.ReactNode;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ className, items, intent = 'dark', intentWeight = 600, ...rests }) => {
  return (
    <div {...rests} className={classnames(CLASSNAME, className)}>
      {items.map(({ href, children }, index) => {
        const isFirst = index === 0;
        return (
          <span
            key={href}
            className={classnames(
              toIntentColor({
                prefix: 'text',
                intent,
                intentWeight,
              }),
            )}
          >
            {!isFirst && <span>{' / '}</span>}
            <span
              className={classnames(
                toHoverIntentColor({
                  prefix: 'text',
                  intent,
                  intentWeight: intentWeight + 100,
                }),
              )}
            >
              {children}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export { BreadCrumb };
export default BreadCrumb;
