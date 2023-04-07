import * as React from 'react';

import { GlobalRootDataAttributeMap, KeyboardKeyMap } from '~/constants';
import { forwardRefWithAs, render, RenderFeatures } from '~/core';
import {
  useOutsideClick,
  useOwnerDocument,
  useServerHandoffComplete,
  useEvent,
  useEventListener,
  useSyncRefs,
  useId,
} from '~/hooks';
import { FocusTrap, ForcePortalRoot, Portal, StackContextMessageEnum, StackProvider } from '~/tools';
import { RootUIProps, RootUIReactTag } from '~/types';
import { match } from '~/utils';

import { ModalContext, ModalContextValues } from './Modal.Widget.Context';
import { ActionTypes, StateDefinition, rootReducer } from './Modal.Widget.reducer';
import { ModalPosition, ModalProps, ModalRenderPropArg } from './Modal.Widget.types';

const COMPONENT_NAME = 'Modal';
const DEFAULT_TAG: RootUIReactTag = 'div';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

const modalRenderFeatures = RenderFeatures.RenderStrategy | RenderFeatures.Static;
export interface ModalRootRenderPropArg extends ModalRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'role' | 'aria-modal' | 'aria-labelledby'>;

export const ModalWidgetRoot = forwardRefWithAs(
  <Tag extends React.ElementType = typeof DEFAULT_TAG>(
    props: RootUIProps<Tag, ModalRootRenderPropArg, PropsWeControl> & ModalProps,
    ref: React.Ref<ElementType>,
  ) => {
    const { show, onClose, onKeyDown, initialFocus, root, ...others } = props;
    const id = `RootUI__Modal__${useId()}`;

    const containers = React.useRef<Set<React.MutableRefObject<HTMLElement | null>>>(new Set());
    const internalModalRef = React.useRef<ElementType | null>(null);
    const modalRef = useSyncRefs(internalModalRef, ref);
    const mainTreeNode = React.useRef<Element | null>(null);
    const ownerDocument = useOwnerDocument(internalModalRef);

    const initState = React.useMemo<StateDefinition>(
      () => ({
        id: null,
        panelRef: React.createRef(),
      }),
      [],
    );
    const [state, dispatch] = React.useReducer(rootReducer, initState);
    const [nestedModalCount, setNestedModalCount] = React.useState(0);
    const isReady = useServerHandoffComplete();
    const enabled = isReady ? show === true : false;
    const hasNestedModals = nestedModalCount > 1; // 1 is the current modal
    const hasParentModal = React.useContext(ModalContext) !== null;
    const position: ModalPosition = hasParentModal ? 'parent' : 'leaf';

    const setModalTitleId = useEvent((id: string | null) => {
      return dispatch({ type: ActionTypes.SetTitleId, payload: id });
    });

    const onCloseModal = useEvent(() => onClose());

    useOutsideClick(
      () => {
        const rootContainers = Array.from(
          ownerDocument?.querySelectorAll(`body > *, [${GlobalRootDataAttributeMap.Portal}]`) ?? [],
        ).filter((container) => {
          // Skip non-HTMLElements
          if (!(container instanceof HTMLElement)) {
            return false;
          }
          // Skip if it is the main app
          if (container.contains(mainTreeNode.current)) {
            return false;
          }
          if (state.panelRef.current && container.contains(state.panelRef.current)) {
            return false;
          }
          return true;
        });
        return [...rootContainers, state.panelRef.current ?? internalModalRef.current] as HTMLElement[];
      },
      onCloseModal,
      enabled && !hasNestedModals,
    );

    useEventListener(ownerDocument?.defaultView, 'keydown', (event) => {
      if (!show) return;
      if (event.defaultPrevented) return;
      if (hasNestedModals) return;
      if (event.key === KeyboardKeyMap.Escape) {
        event.preventDefault();
        event.stopPropagation();
        onCloseModal();
        return;
      }
      if (onKeyDown) {
        onKeyDown(event as any as React.KeyboardEvent<ElementType>);
        return;
      }
    });

    React.useEffect(() => {
      if (!show) {
        return;
      }
      if (!internalModalRef.current) {
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (
            entry.boundingClientRect.x === 0 &&
            entry.boundingClientRect.y === 0 &&
            entry.boundingClientRect.width === 0 &&
            entry.boundingClientRect.height === 0
          ) {
            onCloseModal();
          }
        }
      });
      observer.observe(internalModalRef.current);
      return () => observer.disconnect();
    }, [show, internalModalRef, onCloseModal]);

    const contextValues = React.useMemo<ModalContextValues>(() => {
      return [
        {
          visible: show,
          setModalTitleId,
          onClose: onCloseModal,
        },
        state,
      ];
    }, [show, state, onCloseModal, setModalTitleId]);

    const ourProps = React.useMemo(() => {
      return {
        ref: modalRef,
        id,
        role: 'modal',
        'aria-modal': show,
        'aria-labelledby': state.id,
      };
    }, [id, modalRef, show, state.id]);

    const theirProps = others;

    const slot = React.useMemo<ModalRootRenderPropArg>(() => ({ visible: show }), [show]);

    const focusTrapFeatures = React.useMemo(() => {
      if (enabled) {
        return match(position, {
          parent: FocusTrap.features.RestoreFocus,
          leaf: FocusTrap.features.All & ~FocusTrap.features.FocusLock,
        });
      }
      return FocusTrap.features.None;
    }, [enabled, position]);

    return (
      <StackProvider
        type={COMPONENT_NAME}
        enabled={enabled}
        element={internalModalRef}
        onUpdate={useEvent((message, type, element) => {
          if (type !== 'Modal') {
            return;
          }
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
          <Portal root={root}>
            <ModalContext.Provider value={contextValues}>
              <Portal.Group target={internalModalRef}>
                <ForcePortalRoot force={false}>
                  <FocusTrap initialFocus={initialFocus} containers={containers} features={focusTrapFeatures}>
                    {render({
                      ourProps,
                      theirProps,
                      defaultTag: DEFAULT_TAG,
                      name: COMPONENT_NAME,
                      slot,
                      features: modalRenderFeatures,
                      visible: show,
                    })}
                  </FocusTrap>
                </ForcePortalRoot>
              </Portal.Group>
            </ModalContext.Provider>
          </Portal>
        </ForcePortalRoot>
      </StackProvider>
    );
  },
);
