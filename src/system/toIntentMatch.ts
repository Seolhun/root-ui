import { curry } from '@fxts/core';

import { RootIntentType } from './RootTheme.types';
import { match } from './match';

export const toIntentMatch = curry((lookup: Record<RootIntentType, () => string>, key: RootIntentType) => {
  return match(lookup, key);
});
