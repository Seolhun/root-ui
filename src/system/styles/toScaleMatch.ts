import { curry } from '@fxts/core';
import { RootScale } from './RootScale';

type RootScaleStyle = string;
type ScaleCallback = () => RootScaleStyle;

export const toScaleMatch = curry(
  (
    smScaleCallback: ScaleCallback,
    mdScaleCallback: ScaleCallback,
    lgScaleCallback: ScaleCallback,
    targetScale: RootScale,
  ) => {
    switch (targetScale) {
      case 'sm': {
        return smScaleCallback();
      }
      case 'lg': {
        return lgScaleCallback();
      }
      case 'md':
      default: {
        return mdScaleCallback();
      }
    }
  },
);
