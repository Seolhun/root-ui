import { ColorOption, ColorPrefix, ColorWeight, IntentType } from '@/types';

const createPrefix = (prefix: ColorPrefix) => {
  if (prefix) {
    return `${prefix}-`;
  }
  return '';
};

const createColorByIntent = (
  intent: IntentType = 'primary',
  weight: ColorWeight = 600,
  prefix: ColorPrefix = '',
): string => {
  const computedPrefix = createPrefix(prefix);
  const colorClassNames = `${computedPrefix}${intent}-${weight}`;
  return colorClassNames;
};

const createOptionByWeight = (weight: ColorWeight) => {
  if (weight < 100) {
    return 100;
  }
  return weight - 100;
};

const createOptionsColorByIntent = (
  options: ColorOption[],
  prefix: ColorPrefix = '',
  intent: IntentType = 'primary',
  weight: ColorWeight = 500,
): string => {
  const computedPrefix = createPrefix(prefix);
  const optionsColorClassNames = options.reduce((strColor, option) => {
    return `${strColor} ${option}:${computedPrefix}${intent}-${createOptionByWeight(weight)}`;
  }, '');
  return optionsColorClassNames;
};

export { createColorByIntent, createOptionsColorByIntent };
export default { createColorByIntent, createOptionsColorByIntent };
