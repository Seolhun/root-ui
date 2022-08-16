import { ColorOption, ColorPrefix, ColorWeight, IntentType } from '@/system';

const createPrefix = (prefix: ColorPrefix) => {
  if (prefix) {
    return `${prefix}-`;
  }
  return '';
};

const toColorWeightBy = (weight: ColorWeight) => {
  if (weight < 100) {
    return 100;
  }
  return weight - 100;
};

export const toIntentColorBy = (
  intent: IntentType = 'primary',
  weight: ColorWeight = 600,
  prefix: ColorPrefix = '',
): string => {
  const computedPrefix = createPrefix(prefix);
  const colorClassNames = `${computedPrefix}${intent}-${weight}`;
  return colorClassNames;
};

export const toIntentColorByOptions = (
  options: ColorOption[],
  prefix: ColorPrefix = '',
  intent: IntentType = 'primary',
  weight: ColorWeight = 500,
): string => {
  const computedPrefix = createPrefix(prefix);
  const optionsColorClassNames = options.reduce((strColor, option) => {
    return `${strColor} ${option}:${computedPrefix}${intent}-${toColorWeightBy(weight)}`;
  }, '');
  return optionsColorClassNames;
};
