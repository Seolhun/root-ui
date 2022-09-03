import classNames from 'classnames';

import { TailwindPrefix, RootIntentWeightType, RootIntentType, TailwindAppendix } from './RootTheme.types';

type IntentAppendixes = TailwindAppendix | TailwindAppendix[];

export interface ToIntentOption {
  prefix: TailwindPrefix;
  intent: RootIntentType;
  intentWeight?: RootIntentWeightType;
  appendixes?: IntentAppendixes;
}

/**
 * Tailwind optimization can't recognize template literal string
 * Must be exports full class string
 */
export function toIntent({ prefix, intent = 'primary', intentWeight, appendixes }: ToIntentOption) {
  if (Array.isArray(appendixes)) {
    return classNames(
      appendixes.map((appendix) =>
        toIntent({
          prefix,
          appendixes: appendix,
          intent,
          intentWeight,
        }),
      ),
    );
  }

  const intentClassName = [appendixes, prefix, intent, intentWeight];
  return intentClassName.filter(Boolean).join('-');
}
