export type StepperProps = {};

export type StepperItemProps = {
  /**
   * If `true`, the step is active styles
   */
  active?: boolean;
  /**
   * Step name
   */
  name: React.ReactNode;
  /**
   * Step badge
   */
  step: React.ReactNode;
};
