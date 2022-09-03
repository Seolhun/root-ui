// If there are multiple modals, then you can be the root, the leaf or one
// in between. We only care about whether you are the top most one or not.
export type ModalPosition = 'leaf' | 'parent';

export interface ModalRenderPropArg {
  visible: boolean;
}
