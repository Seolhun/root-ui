import * as React from 'react';
type Container = React.MutableRefObject<HTMLElement | null> | HTMLElement | null;
type ContainerCollection = Container[] | Set<Container>;
type ContainerInput = Container | ContainerCollection;
export declare function useOutsideClick(containers: ContainerInput | (() => ContainerInput), callback: (event: MouseEvent | PointerEvent | FocusEvent, target: HTMLElement) => void, enabled?: boolean): void;
export {};
