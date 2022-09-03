import { curry } from '@fxts/core';

import { RootIntent } from './RootTheme.types';
import { match } from './match';

export const toIntentMatch = curry((lookup: Record<RootIntent, () => string>, key: RootIntent) => {
  return match(lookup, key);
});
