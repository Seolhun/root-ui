import clsx from 'clsx';
import * as React from 'react';

import { forwardRefWithAs } from '~/core';

import { stepper } from './Stepper.styles';
import { StepperItemProps } from './Stepper.types';

const CLASSNAME = 'Root__StepperItem';

type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export const StepperItem = forwardRefWithAs<ElementType, ElementProps & StepperItemProps>(
  ({ children, className, active, name, step, ...others }, ref) => {
    return (
      <li {...others} className={clsx(CLASSNAME, styles.stepperItem(), className)} ref={ref}>
        <div className={styles.stepperItemStep()}>
          <span className={clsx(styles.stepperItemBadge({ active }))}>{step}</span>
          <div className={styles.stepperItemEdge({ active })} />
        </div>
        <div className={clsx('flex flex-col gap-4', 'grow md:grow-0 md:mt-3 pb-5')}>
          <span className={styles.stepperItemName({ active })}>{name}</span>
          <div className={styles.stepperItemContent({ active })}>{children}</div>
        </div>
      </li>
    );
  },
);

const styles = stepper();
