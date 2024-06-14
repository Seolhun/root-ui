import { MutableRefObject, useState } from 'react';

import { useIsoMorphicEffect } from './useIsoMorphicEffect';

function resolveType<Tag>(props: { as?: Tag; type?: string }) {
  if (props.type) return props.type;

  const tag = props.as ?? 'button';
  if (typeof tag === 'string' && tag.toLowerCase() === 'button') return 'button';

  return undefined;
}

export function useResolveButtonType<Tag>(
  props: { as?: Tag; type?: string },
  ref: MutableRefObject<HTMLElement | null>,
) {
  const [type, setType] = useState(() => resolveType(props));

  useIsoMorphicEffect(() => {
    setType(resolveType(props));
  }, [props.type, props.as]);

  useIsoMorphicEffect(() => {
    if (type) return;
    if (!ref.current) return;

    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute('type')) {
      setType('button');
    }
  }, [type, ref]);

  return type;
}
