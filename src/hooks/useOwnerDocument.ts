import { useMemo } from 'react';

import { getOwnerDocumentBy } from '@/utils/getOwnerDocumentBy';

export function useOwnerDocument(...args: Parameters<typeof getOwnerDocumentBy>) {
  return useMemo(() => getOwnerDocumentBy(...args), [args]);
}
