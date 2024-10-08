import * as React from 'react';

import { useEvent } from '../../hooks/useEvent';
import { useIsoMorphicEffect } from '../../hooks/useIsoMorphicEffect';
import { StackContextMessageEnum, StackContextOnUpdateCallback } from './StackContext.types';

const StackContext = React.createContext<StackContextOnUpdateCallback>(() => {});
StackContext.displayName = 'StackContext';

export function useStackContext() {
  return React.useContext(StackContext);
}

export interface StackProviderProps {
  children: React.ReactNode;
  element: React.MutableRefObject<HTMLElement | null>;
  enabled?: boolean;
  onUpdate?: StackContextOnUpdateCallback;
  type: string;
}

export function StackProvider({ children, type, element, enabled, onUpdate }: StackProviderProps) {
  const parentUpdate = useStackContext();

  const notify = useEvent((...args: Parameters<StackContextOnUpdateCallback>) => {
    // Notify our layer
    onUpdate?.(...args);
    // Notify the parent
    parentUpdate(...args);
  });

  useIsoMorphicEffect(() => {
    const shouldNotify = enabled === undefined || enabled === true;
    shouldNotify && notify(StackContextMessageEnum.Add, type, element);
    return () => {
      shouldNotify && notify(StackContextMessageEnum.Remove, type, element);
    };
  }, [notify, type, element, enabled]);

  return <StackContext.Provider value={notify}>{children}</StackContext.Provider>;
}
