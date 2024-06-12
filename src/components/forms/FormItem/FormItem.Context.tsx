import * as React from 'react';
import { RootScale } from 'src/system';

export type FormItemContextValues = {
  /**
   * scale
   * @default 'md'
   */
  scale?: RootScale;
};

export const FormItemContext = React.createContext<FormItemContextValues>({
  scale: 'md',
});

export interface FormItemContextProviderProps extends FormItemContextValues {
  children: React.ReactNode;
}

export const FormItemContextProvider = ({ children, scale }: FormItemContextProviderProps) => {
  const contextValues = React.useMemo(() => ({ scale }), [scale]);

  return <FormItemContext.Provider value={contextValues}>{children}</FormItemContext.Provider>;
};

export function useFormItemContext() {
  return React.useContext(FormItemContext);
}
