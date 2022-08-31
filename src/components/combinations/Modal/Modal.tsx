import React from 'react';
import classNames from 'classnames';

import { Card } from '@/components/atomics';
import { ForcePortalRoot, Portal, StackContextMessageEnum, StackProvider } from '@/tools';
import { RootScale, toIntentColor, toScaleMatch } from '@/system';
import {
  useOutsideClick,
  useLockScroll,
  useOwnerDocument,
  useServerHandoffComplete,
  useEvent,
  useEventListener,
} from '@/hooks';
import { match } from '@/utils';
import { GlobalRootDataAttributeMap, KeyboardKeyMap } from '@/constants';

import { ModalContext, ModalContextValues } from './Modal.Context';
import { ModalActionTypeMap, ModalReducerState, rootModalReducer } from './Modal.reducer';

const CLASSNAME = 'Root__Modal';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface ModalProps extends ExtensionProps {
  children: React.ReactNode;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * To show modal
   */
  show: boolean;

  /**
   * To close modal (Escape)
   */
  onHide: () => void;

  /**
   * To confirm modal (Enter)
   */
  onConfirm?: () => void;
}

const initState: ModalReducerState = {
  id: null,
  panelRef: React.createRef(),
};

const Modal = ({ className, children, scale = 'md', show, onHide, onConfirm, ...rests }: ModalProps) => {
  const ref = React.useRef<Element>(null);
  const containers = React.useRef<Set<React.MutableRefObject<HTMLElement | null>>>(new Set());
  const internalModalRef = React.useRef<HTMLDivElement | null>(null);
  const mainTreeNode = React.useRef<HTMLDivElement | null>(null);
  const ownerDocument = useOwnerDocument(internalModalRef);
  const [state, dispatch] = React.useReducer(rootModalReducer, initState);
  const [nestedModalCount, setNestedModalCount] = React.useState(0);

  const isReady = useServerHandoffComplete();
  const enabled = isReady ? show === true : false;
  const hasNestedModals = nestedModalCount > 1; // 1 is the current modal
  const setModalId = useEvent((id: string | null) => dispatch({ type: ModalActionTypeMap.SET_MODAL_ID, payload: id }));
  const onHideModal = useEvent(() => onHide());
  const contextValues = React.useMemo<ModalContextValues>(() => {
    return {
      visible: show,
      state,
      setModalId,
      onHide: onHideModal,
    };
  }, [show, state, onHideModal, setModalId]);

  useLockScroll(show);
  useOutsideClick(
    () => {
      const rootContainers = Array.from(
        ownerDocument?.querySelectorAll(`body > *, [${GlobalRootDataAttributeMap.Portal}]`) ?? [],
      ).filter((container) => {
        if (!(container instanceof HTMLElement)) return false; // Skip non-HTMLElements
        if (container.contains(mainTreeNode.current)) return false; // Skip if it is the main app
        if (state.panelRef.current && container.contains(state.panelRef.current)) return false;
        return true; // Keep
      });
      return [...rootContainers, state.panelRef.current ?? internalModalRef.current] as HTMLElement[];
    },
    close,
    enabled && !hasNestedModals,
  );

  useEventListener(ownerDocument?.defaultView, 'keydown', (event) => {
    if (event.defaultPrevented) return;
    if (!show) return;
    if (hasNestedModals) return;
    if (event.key === KeyboardKeyMap.Escape) {
      event.preventDefault();
      event.stopPropagation();
      close();
      return;
    }
    if (event.key === KeyboardKeyMap.Enter && onConfirm) {
      event.preventDefault();
      event.stopPropagation();
      onConfirm();
      close();
      return;
    }
  });

  return (
    <StackProvider
      type="Modal"
      enabled={enabled}
      element={internalModalRef}
      onUpdate={useEvent((message, type, element) => {
        if (type !== 'Modal') return;

        match(message, {
          [StackContextMessageEnum.Add]() {
            containers.current.add(element);
            setNestedModalCount((count) => count + 1);
          },
          [StackContextMessageEnum.Remove]() {
            containers.current.add(element);
            setNestedModalCount((count) => count - 1);
          },
        });
      })}
    >
      <ForcePortalRoot force={true}>
        <Portal>
          <ModalContext.Provider value={contextValues}>
            <div
              ref={ref}
              className={classNames(
                CLASSNAME,
                className,
                {
                  hidden: !show,
                },
                'fixed',
                'inset-0 md:inset-0',
                'w-full h-full',
                'overflow-y-auto',
                'z-50',
              )}
            >
              <div
                tabIndex={-1}
                aria-hidden={show ? 'true' : 'false'}
                className={classNames(
                  CLASSNAME,
                  className,
                  'fixed',
                  'inset-0 md:inset-0',
                  'w-full h-full',
                  toIntentColor({
                    prefix: 'bg',
                    intent: 'dark',
                    intentWeight: 300,
                  }),
                  'opacity-60',
                )}
              />
              <Card
                {...rests}
                ref={ref}
                className={classNames(
                  'relative',
                  'm-auto',
                  toScaleMatch(() => 'w-full md:w-4/12')(() => 'w-full md:w-6/12')(() => 'w-full md:w-8/12')(scale),
                  'h-full md:h-auto',
                  'md:my-12',
                  'rounded-none md:rounded-lg',
                  {
                    'animate-[scale-up_0.2s_ease-in-out]': show,
                  },
                )}
              >
                {children}
              </Card>
            </div>
          </ModalContext.Provider>
        </Portal>
      </ForcePortalRoot>
    </StackProvider>
  );
};

export { Modal };
export default Modal;
