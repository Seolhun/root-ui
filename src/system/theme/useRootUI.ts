import { RootUIContextValues, useRootUIContext } from './RootUI.Context';

export interface UseRootUIProps extends RootUIContextValues {}

export function useRootUI({ intent, scale }: Partial<UseRootUIProps> = {}) {
  const rootUIValues = useRootUIContext();
  const rootUIGroupValues = useRootUIContext();

  return {
    intent: intent || rootUIGroupValues.intent || rootUIValues.intent,
    scale: scale || rootUIGroupValues.scale || rootUIGroupValues.scale,
  };
}
