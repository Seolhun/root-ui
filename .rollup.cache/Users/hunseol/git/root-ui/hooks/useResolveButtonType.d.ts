import { MutableRefObject } from 'react';
export declare function useResolveButtonType<Tag>(props: {
    type?: string;
    as?: Tag;
}, ref: MutableRefObject<HTMLElement | null>): string | undefined;
