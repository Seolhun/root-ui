import clsx from 'clsx';
import React from 'react';

export interface InjectorComponentProps<E extends HTMLElement> extends React.HTMLAttributes<E> {}

export type InjectorComponentType<
  P extends InjectorComponentProps<E>,
  E extends HTMLElement = HTMLElement,
> = React.ForwardRefExoticComponent<React.PropsWithChildren<P> & React.RefAttributes<E>>;

/**
 * TODO: Completed below jobs
 * - 1. merge OnEvent Handler
 *
 */
function mergeProps<
  InjectorProps extends InjectorComponentProps<E> = any,
  P extends InjectorComponentProps<E> = any,
  E extends HTMLElement = HTMLElement,
>(props: P, injectorProps: InjectorProps) {
  const mergedProps = Object.assign({}, props, {
    ...injectorProps,
    className: clsx(injectorProps?.className, props?.className),
    style: Object.assign({}, injectorProps?.style, props?.style),
  });
  return mergedProps;
}

function withForwardInjector<
  InjectorProps extends InjectorComponentProps<E> = any,
  P extends InjectorComponentProps<E> = any,
  E extends HTMLElement = HTMLElement,
>(
  Component: InjectorComponentType<InjectorProps & P, E>,
  useInjectorProps: (ref: React.MutableRefObject<E | null>) => Pick<InjectorProps, keyof InjectorProps>,
) {
  /**
   * "InjectedComponent" must be rendered as React.forwardRef.
   * The reason why is that HoC is rendered lazily, so, The forwarded ref can't be computed in HoC Component with useInjectorProps function.
   */
  const InjectedComponent = (props: P) => {
    const ref = React.useRef<E | null>(null);
    const injectedProps = useInjectorProps(ref);

    return <Component ref={ref} {...mergeProps(props, injectedProps)} />;
  };

  const displayName = Component.displayName || Component?.name || 'InjectedComponent';
  InjectedComponent.displayName = `withInjector(${displayName})`;

  return InjectedComponent;
}

export { withForwardInjector };
export default withForwardInjector;
