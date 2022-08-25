import { useMemo } from 'react';

import { getOwnerDocument } from '@/utils/getOwnerDocument';

export function useOwnerDocument(...args: Parameters<typeof getOwnerDocument>) {
  return useMemo(() => getOwnerDocument(...args), args);
}
