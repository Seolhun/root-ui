import { RadioGroup } from './Radio.Group';
import { RadioInput } from './Radio.Input';

export const Radio = Object.assign(RadioGroup, {
  Input: RadioInput,
});

export * from './Radio.Input';
export * from './Radio.Group';
