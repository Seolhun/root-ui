import classNames from 'classnames';
import { curry } from '@fxts/core';

import { RootScale, TailwindPrefix, RootIntentWeight, RootIntent, TailwindAppendix } from './RootTheme.types';

const toMatch = <Key extends string, R>(lookup: Record<Key, () => R>, key: Key) => {
  const callback = lookup[key];
  return callback();
};

type IntentAppendixes = TailwindAppendix | TailwindAppendix[];

export interface ToIntentOption {
  prefix: TailwindPrefix;
  intent: RootIntent;
  intentWeight?: RootIntentWeight;
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

export const toIntentMatch = curry((lookup: Record<RootIntent, () => string>, key: RootIntent) => {
  return toMatch(lookup, key);
});

export const toScaleMatch = curry((lookup: Record<RootScale, () => string>, key: RootScale) => {
  return toMatch(lookup, key);
});
