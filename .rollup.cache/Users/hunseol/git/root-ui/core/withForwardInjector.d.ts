import React from 'react';
export interface InjectorComponentProps<E extends HTMLElement> extends React.HTMLAttributes<E> {
}
export type InjectorComponentType<P extends InjectorComponentProps<E>, E extends HTMLElement = HTMLElement> = React.ForwardRefExoticComponent<React.PropsWithChildren<P> & React.RefAttributes<E>>;
declare function withForwardInjector<InjectorProps extends InjectorComponentProps<E> = any, P extends InjectorComponentProps<E> = any, E extends HTMLElement = HTMLElement>(Component: InjectorComponentType<InjectorProps & P, E>, useInjectorProps: (ref: React.MutableRefObject<E | null>) => Pick<InjectorProps, keyof InjectorProps>): {
    (props: P): JSX.Element;
    displayName: string;
};
export { withForwardInjector };
export default withForwardInjector;
