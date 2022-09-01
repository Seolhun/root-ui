import React from 'react';

import { isServer } from '@/utils';

export const useIsoMorphicEffect = isServer ? React.useEffect : React.useLayoutEffect;
