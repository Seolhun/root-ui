import React from 'react';
import classnames from 'classnames';

import { createColorByIntent, createOptionsColorByIntent } from '@/utils';
import { IntentType } from '@/types';

const CLASSNAME = 'Root__BreadCrumb';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export interface BreadCrumbProps extends ExtensionProps {
  items: BreadCrumbItemProps[];

  /**
   * Color Intent
   */
  intent?: IntentType;
}

export interface BreadCrumbItemProps {
  href: string;

  name: string;

  children: React.ReactNode;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  className,
  items,
  intent = 'dark',
  ...rests
}) => {
  return (
    <div {...rests} className={classnames(CLASSNAME, className)}>
      {items.map(({ href, children }, index) => {
        const isFirst = index === 0;
        return (
          <span
            key={`${href}-${name}`}
            className={createColorByIntent(intent, 400, 'text')}
          >
            {!isFirst && <span>{' / '}</span>}
            <span
              className={createOptionsColorByIntent(
                ['hover'],
                'text',
                intent,
                600,
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
