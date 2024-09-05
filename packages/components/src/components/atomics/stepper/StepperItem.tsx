import clsx from 'clsx';
import * as React from 'react';

import { stepper } from './Stepper.styles';
import { StepperItemProps } from './Stepper.types';

const CLASSNAME = 'Root__StepperItem';

type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export const StepperItem = React.forwardRef<ElementType, ElementProps & StepperItemProps>(
  ({ children, className, active, name, step, ...others }, ref) => {
    return (
      <li {...others} className={clsx(CLASSNAME, styles.stepperItem(), className)} ref={ref}>
        <div className={styles.stepperItemStep()}>
          <span className={styles.stepperItemBadge({ active })}>{step}</span>
          <div className={styles.stepperItemEdge({ active })} />
        </div>
        <div className={styles.stepperItemMeta()}>
          <span className={styles.stepperItemName({ active })}>{name}</span>
          <div className={styles.stepperItemContent({ active })}>{children}</div>
        </div>
      </li>
    );
  },
);

const styles = stepper();
