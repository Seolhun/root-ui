import { TailwindPrefix } from '@/system';

type IntentColorPrefixRecord = Record<TailwindPrefix, boolean>;

export function hasIntentColorPrefix(targetPrefixes: TailwindPrefix | TailwindPrefix[]): IntentColorPrefixRecord {
  const prefixes = ['text', 'bg', 'border', 'outline', 'ring', 'ring-offset', 'fill', 'accent', 'caret'];
  return prefixes.reduce(
    (acc: IntentColorPrefixRecord, prefix) => {
      return {
        ...acc,
        [prefix]: Array.isArray(targetPrefixes)
          ? targetPrefixes.includes(prefix as TailwindPrefix)
          : targetPrefixes === prefix,
      };
    },
    {
      text: false,
      bg: false,
      border: false,
      outline: false,
      ring: false,
      'ring-offset': false,
      fill: false,
      accent: false,
      caret: false,
    },
  );
}
