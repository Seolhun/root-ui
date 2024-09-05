import clsx from 'clsx';
import * as React from 'react';

import { stepper } from './Stepper.styles';
import { StepperProps } from './Stepper.types';

const CLASSNAME = 'Root__Stepper';

type ElementType = HTMLUListElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const StepperRoot = React.forwardRef<ElementType, ElementProps & StepperProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <ul {...others} className={clsx(CLASSNAME, stepperStyles.root(), className)} ref={ref}>
        {children}
      </ul>
    );
  },
);

const stepperStyles = stepper();
