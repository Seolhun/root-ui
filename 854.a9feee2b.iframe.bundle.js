"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[854],{"./components/combinations/Overlays/Widgets/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KM:()=>ModalWidgetBackdrop,K7:()=>ModalWidgetOverlay,E7:()=>ModalWidgetPanel,Q8:()=>ModalWidgetRoot,Uv:()=>ModalWidgetTitle,k3:()=>useModalContext});var react=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),core=__webpack_require__("./core/index.ts"),hooks=__webpack_require__("./hooks/index.ts");const ModalContext=react.createContext(null);function useModalContext(component){const context=react.useContext(ModalContext);if(null===context){const err=new Error("<".concat(component," /> is missing a parent <Modal /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(err,useModalContext),err}return context}ModalContext.displayName="ModalContext";try{useModalContext.displayName="ModalContext",useModalContext.__docgenInfo={description:"",displayName:"ModalContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Overlays/Widgets/Modal.Widget.Context.tsx#ModalContext"]={docgenInfo:ModalContext.__docgenInfo,name:"ModalContext",path:"src/components/combinations/Overlays/Widgets/Modal.Widget.Context.tsx#ModalContext"})}catch(__react_docgen_typescript_loader_error){}const ModalWidgetBackdrop=(0,core.FX)(((props,ref)=>{const id="RootUI__Modal__Backdrop-".concat((0,hooks.Bi)()),[{visible},state]=useModalContext("Root__Modal__Backdrop"),backdropRef=(0,hooks.P$)(ref);react.useEffect((()=>{if(null===state.panelRef.current)throw new Error("A <Modal.Backdrop /> component is being used, but a <Modal.Panel /> component is missing.")}),[state.panelRef]);const ourProps=react.useMemo((()=>({id,"aria-hidden":!0,ref:backdropRef})),[id,backdropRef]),theirProps=props,slot=react.useMemo((()=>({visible})),[visible]);return(0,core.XX)({defaultTag:"div",name:"Root__Modal__Backdrop",ourProps,slot,theirProps})}));try{ModalWidgetBackdrop.displayName="ModalWidgetBackdrop",ModalWidgetBackdrop.__docgenInfo={description:"",displayName:"ModalWidgetBackdrop",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Overlays/Widgets/Modal.Widget.Backdrop.tsx#ModalWidgetBackdrop"]={docgenInfo:ModalWidgetBackdrop.__docgenInfo,name:"ModalWidgetBackdrop",path:"src/components/combinations/Overlays/Widgets/Modal.Widget.Backdrop.tsx#ModalWidgetBackdrop"})}catch(__react_docgen_typescript_loader_error){}var isDisabledReactIssue7711=__webpack_require__("./utils/bugs/isDisabledReactIssue7711.ts");const ModalWidgetOverlay=(0,core.FX)(((props,ref)=>{const id="RootUI__Modal__Overlay-".concat((0,hooks.Bi)()),[{onClose,visible}]=useModalContext("Root__Modal__Overlay"),overlayRef=(0,hooks.P$)(ref),handleClick=(0,hooks._q)((event=>{if(event.target===event.currentTarget){if((0,isDisabledReactIssue7711.l)(event.currentTarget))return event.preventDefault();event.preventDefault(),event.stopPropagation(),onClose()}})),ourProps=react.useMemo((()=>({id,"aria-hidden":!0,onClick:handleClick,ref:overlayRef})),[handleClick,id,overlayRef]),theirProps=props,slot=react.useMemo((()=>({visible})),[visible]);return(0,core.XX)({defaultTag:"div",name:"Root__Modal__Overlay",ourProps,slot,theirProps})}));try{ModalWidgetOverlay.displayName="ModalWidgetOverlay",ModalWidgetOverlay.__docgenInfo={description:"",displayName:"ModalWidgetOverlay",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Overlays/Widgets/Modal.Widget.Overlay.tsx#ModalWidgetOverlay"]={docgenInfo:ModalWidgetOverlay.__docgenInfo,name:"ModalWidgetOverlay",path:"src/components/combinations/Overlays/Widgets/Modal.Widget.Overlay.tsx#ModalWidgetOverlay"})}catch(__react_docgen_typescript_loader_error){}const ModalWidgetPanel=(0,core.FX)(((props,ref)=>{const id="RootUI__Modal__Panel-".concat((0,hooks.Bi)()),[{visible},state]=useModalContext("Root__Modal__Panel"),panelRef=(0,hooks.P$)(ref,state.panelRef),handleClick=(0,hooks._q)((event=>{event.stopPropagation()})),ourProps=react.useMemo((()=>({id,onClick:handleClick,ref:panelRef})),[id,panelRef,handleClick]),theirProps=props,slot=react.useMemo((()=>({visible})),[visible]);return(0,core.XX)({defaultTag:"div",name:"Root__Modal__Panel",ourProps,slot,theirProps})}));try{ModalWidgetPanel.displayName="ModalWidgetPanel",ModalWidgetPanel.__docgenInfo={description:"",displayName:"ModalWidgetPanel",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Overlays/Widgets/Modal.Widget.Panel.tsx#ModalWidgetPanel"]={docgenInfo:ModalWidgetPanel.__docgenInfo,name:"ModalWidgetPanel",path:"src/components/combinations/Overlays/Widgets/Modal.Widget.Panel.tsx#ModalWidgetPanel"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./constants/index.ts"),tools=__webpack_require__("./tools/index.ts"),utils=__webpack_require__("./utils/index.ts");let ActionTypes=function(ActionTypes){return ActionTypes[ActionTypes.SetTitleId=0]="SetTitleId",ActionTypes}({});const rootReducer=(state,action)=>action.type===ActionTypes.SetTitleId?state.id===action.payload?state:{...state,id:action.payload}:state,modalRenderFeatures=core.Ac.RenderStrategy|core.Ac.Static,ModalWidgetRoot=(0,core.FX)(((props,ref)=>{const{initialFocus,onClose,onKeyDown,root,show,...others}=props,id="RootUI__Modal__".concat((0,hooks.Bi)()),containers=react.useRef(new Set),internalModalRef=react.useRef(null),modalRef=(0,hooks.P$)(internalModalRef,ref),mainTreeNode=react.useRef(null),ownerDocument=(0,hooks.g6)(internalModalRef),initState=react.useMemo((()=>({id:null,panelRef:react.createRef()})),[]),[state,dispatch]=react.useReducer(rootReducer,initState),[nestedModalCount,setNestedModalCount]=react.useState(0),enabled=!!(0,hooks.g7)()&&!0===show,hasNestedModals=nestedModalCount>1,position=null!==react.useContext(ModalContext)?"parent":"leaf",setModalTitleId=(0,hooks._q)((id=>dispatch({payload:id,type:ActionTypes.SetTitleId}))),onCloseModal=(0,hooks._q)((()=>onClose()));(0,hooks.jz)((()=>{var _ownerDocument$queryS,_state$panelRef$curre;return[...Array.from(null!==(_ownerDocument$queryS=null==ownerDocument?void 0:ownerDocument.querySelectorAll("body > *, [".concat(constants.yC.Portal,"]")))&&void 0!==_ownerDocument$queryS?_ownerDocument$queryS:[]).filter((container=>container instanceof HTMLElement&&(!container.contains(mainTreeNode.current)&&(!state.panelRef.current||!container.contains(state.panelRef.current))))),null!==(_state$panelRef$curre=state.panelRef.current)&&void 0!==_state$panelRef$curre?_state$panelRef$curre:internalModalRef.current]}),onCloseModal,enabled&&!hasNestedModals),(0,hooks.ML)(null==ownerDocument?void 0:ownerDocument.defaultView,"keydown",(event=>{if(show&&!event.defaultPrevented&&!hasNestedModals)return event.key===constants.Lg.Escape?(event.preventDefault(),event.stopPropagation(),void onCloseModal()):void(onKeyDown&&onKeyDown(event))})),react.useEffect((()=>{if(!show)return;if(!internalModalRef.current)return;const observer=new IntersectionObserver((entries=>{for(const entry of entries)0===entry.boundingClientRect.x&&0===entry.boundingClientRect.y&&0===entry.boundingClientRect.width&&0===entry.boundingClientRect.height&&onCloseModal()}));return observer.observe(internalModalRef.current),()=>observer.disconnect()}),[show,internalModalRef,onCloseModal]);const contextValues=react.useMemo((()=>[{onClose:onCloseModal,setModalTitleId,visible:show},state]),[show,state,onCloseModal,setModalTitleId]),ourProps=react.useMemo((()=>({id,"aria-labelledby":state.id,"aria-modal":show,ref:modalRef,role:"modal"})),[id,modalRef,show,state.id]),theirProps=others,slot=react.useMemo((()=>({visible:show})),[show]),focusTrapFeatures=react.useMemo((()=>enabled?(0,utils.YW)(position,{leaf:tools.sp.features.All&~tools.sp.features.FocusLock,parent:tools.sp.features.RestoreFocus}):tools.sp.features.None),[enabled,position]);return react.createElement(tools.M_,{onUpdate:(0,hooks._q)(((message,type,element)=>{"Modal"===type&&(0,utils.YW)(message,{[tools.CE.Add](){containers.current.add(element),setNestedModalCount((count=>count+1))},[tools.CE.Remove](){containers.current.add(element),setNestedModalCount((count=>count-1))}})})),element:internalModalRef,enabled,type:"Modal"},react.createElement(tools.ad,{force:!0},react.createElement(tools.ZL,{root},react.createElement(ModalContext.Provider,{value:contextValues},react.createElement(tools.ZL.Group,{target:internalModalRef},react.createElement(tools.ad,{force:!1},react.createElement(tools.sp,{containers,features:focusTrapFeatures,initialFocus},(0,core.XX)({defaultTag:"div",features:modalRenderFeatures,name:"Modal",ourProps,slot,theirProps,visible:show}))))))))}));try{ModalWidgetRoot.displayName="ModalWidgetRoot",ModalWidgetRoot.__docgenInfo={description:"",displayName:"ModalWidgetRoot",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},initialFocus:{defaultValue:null,description:"Init focus element",name:"initialFocus",required:!1,type:{name:"MutableRefObject<HTMLElement | null>"}},onClose:{defaultValue:null,description:"To close modal (Escape Key)",name:"onClose",required:!0,type:{name:"() => void"}},onKeyDown:{defaultValue:null,description:"Keydown event handler",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLElement>) => void)"}},root:{defaultValue:null,description:"Portal element",name:"root",required:!1,type:{name:"HTMLElement | null"}},show:{defaultValue:null,description:"To show modal",name:"show",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Overlays/Widgets/Modal.Widget.Root.tsx#ModalWidgetRoot"]={docgenInfo:ModalWidgetRoot.__docgenInfo,name:"ModalWidgetRoot",path:"src/components/combinations/Overlays/Widgets/Modal.Widget.Root.tsx#ModalWidgetRoot"})}catch(__react_docgen_typescript_loader_error){}const ModalWidgetTitle=(0,core.FX)(((props,ref)=>{const id="RootUI__Modal__Title-".concat((0,hooks.Bi)()),[{setModalTitleId,visible}]=useModalContext("Root__Modal__Title"),titleRef=(0,hooks.P$)(ref);react.useEffect((()=>(setModalTitleId(id),()=>setModalTitleId(null))),[id,setModalTitleId]);const ourProps=react.useMemo((()=>({id,ref:titleRef})),[id,titleRef]),theirProps=props,slot=react.useMemo((()=>({visible})),[visible]);return(0,core.XX)({defaultTag:"h5",name:"Root__Modal__Title",ourProps,slot,theirProps})}));try{ModalWidgetTitle.displayName="ModalWidgetTitle",ModalWidgetTitle.__docgenInfo={description:"",displayName:"ModalWidgetTitle",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Overlays/Widgets/Modal.Widget.Title.tsx#ModalWidgetTitle"]={docgenInfo:ModalWidgetTitle.__docgenInfo,name:"ModalWidgetTitle",path:"src/components/combinations/Overlays/Widgets/Modal.Widget.Title.tsx#ModalWidgetTitle"})}catch(__react_docgen_typescript_loader_error){}},"./tools/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sp:()=>FocusTrap,ad:()=>ForcePortalRoot,El:()=>OpenClosedProvider,KN:()=>OpenClosedState,ZL:()=>Portal,CE:()=>StackContextMessageEnum,M_:()=>StackProvider,O_:()=>useOpenClosed});var FocusManagements=__webpack_require__("./tools/focus-trap/FocusManagements.ts"),react=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),core=__webpack_require__("./core/index.ts"),hooks=__webpack_require__("./hooks/index.ts");let HiddenFeatures=function(HiddenFeatures){return HiddenFeatures[HiddenFeatures.Focusable=2]="Focusable",HiddenFeatures[HiddenFeatures.Hidden=4]="Hidden",HiddenFeatures[HiddenFeatures.None=1]="None",HiddenFeatures}({});const Hidden=(0,core.FX)(((props,ref)=>{const{features=HiddenFeatures.None,...theirProps}=props,ourProps={"aria-hidden":(features&HiddenFeatures.Focusable)===HiddenFeatures.Focusable||void 0,ref,style:{borderWidth:"0",clip:"rect(0, 0, 0, 0)",height:0,left:1,margin:-1,overflow:"hidden",padding:0,position:"fixed",top:1,whiteSpace:"nowrap",width:1,...(features&HiddenFeatures.Hidden)===HiddenFeatures.Hidden&&!((features&HiddenFeatures.Focusable)===HiddenFeatures.Focusable)&&{display:"none"}}};return(0,core.XX)({defaultTag:"div",name:"Hidden",ourProps,slot:{},theirProps})}));try{Hidden.displayName="Hidden",Hidden.__docgenInfo={description:"",displayName:"Hidden",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},features:{defaultValue:null,description:"",name:"features",required:!1,type:{name:"HiddenFeatures"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/hidden/Hidden.tsx#Hidden"]={docgenInfo:Hidden.__docgenInfo,name:"Hidden",path:"src/tools/hidden/Hidden.tsx#Hidden"})}catch(__react_docgen_typescript_loader_error){}var utils=__webpack_require__("./utils/index.ts");let FocusTrapFeatures=function(FocusTrapFeatures){return FocusTrapFeatures[FocusTrapFeatures.None=1]="None",FocusTrapFeatures[FocusTrapFeatures.InitialFocus=2]="InitialFocus",FocusTrapFeatures[FocusTrapFeatures.TabLock=4]="TabLock",FocusTrapFeatures[FocusTrapFeatures.FocusLock=8]="FocusLock",FocusTrapFeatures[FocusTrapFeatures.RestoreFocus=16]="RestoreFocus",FocusTrapFeatures[FocusTrapFeatures.AutoFocus=32]="AutoFocus",FocusTrapFeatures[FocusTrapFeatures.All=30]="All",FocusTrapFeatures}({});const FocusTrap=Object.assign((0,core.FX)(((_ref,ref)=>{let{containers,features=FocusTrapFeatures.All,initialFocus,...theirProps}=_ref;const container=react.useRef(null),focusTrapRef=(0,hooks.P$)(container,ref),ownerDocument=(0,hooks.g6)(container),direction=(0,hooks.uG)();(0,hooks.g7)()||(features=FocusTrapFeatures.None),function useRestoreFocus(_ref,enabled){let{ownerDocument}=_ref;const restoreElement=react.useRef(null);(0,hooks.ML)(null==ownerDocument?void 0:ownerDocument.defaultView,"focusout",(event=>{enabled&&(restoreElement.current||(restoreElement.current=event.target))}),!0),(0,hooks.FH)((()=>{enabled||((null==ownerDocument?void 0:ownerDocument.activeElement)===(null==ownerDocument?void 0:ownerDocument.body)&&(0,FocusManagements.pW)(restoreElement.current),restoreElement.current=null)}),[enabled]);const trulyUnmounted=react.useRef(!1);react.useEffect((()=>(trulyUnmounted.current=!1,()=>{trulyUnmounted.current=!0,(0,utils.ft)((()=>{trulyUnmounted.current&&((0,FocusManagements.pW)(restoreElement.current),restoreElement.current=null)}))})),[])}({ownerDocument},Boolean(features&FocusTrapFeatures.RestoreFocus));const previousActiveElement=function useInitialFocus(_ref,enabled){let{container,initialFocus,ownerDocument}=_ref;const isMounted=(0,hooks.aq)(),previousActiveElement=react.useRef(null);return(0,hooks.FH)((()=>{if(!enabled)return;const containerElement=container.current;containerElement&&(0,utils.ft)((()=>{if(!isMounted.current)return;const activeElement=null==ownerDocument?void 0:ownerDocument.activeElement;if(null!=initialFocus&&initialFocus.current){if((null==initialFocus?void 0:initialFocus.current)===activeElement)return void(previousActiveElement.current=activeElement)}else if(containerElement.contains(activeElement))return void(previousActiveElement.current=activeElement);null!=initialFocus&&initialFocus.current?(0,FocusManagements.pW)(initialFocus.current):(0,FocusManagements.CU)(containerElement,FocusManagements.BD.First)===FocusManagements.Me.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),previousActiveElement.current=null==ownerDocument?void 0:ownerDocument.activeElement}))}),[enabled]),previousActiveElement}({container,initialFocus,ownerDocument},Boolean(features&FocusTrapFeatures.InitialFocus));!function useFocusLock(_ref,enabled){let{container,containers,ownerDocument,previousActiveElement}=_ref;const mounted=(0,hooks.aq)();(0,hooks.ML)(null==ownerDocument?void 0:ownerDocument.defaultView,"focus",(event=>{if(!enabled)return;if(!mounted.current)return;const allContainerSet=new Set(null==containers?void 0:containers.current);allContainerSet.add(container);const previous=previousActiveElement.current;if(!previous)return;const toElement=event.target;toElement&&toElement instanceof HTMLElement?function contains(containers,element){for(const container of containers){var _container$current;if(null!==(_container$current=container.current)&&void 0!==_container$current&&_container$current.contains(element))return!0}return!1}(allContainerSet,toElement)?(previousActiveElement.current=toElement,(0,FocusManagements.pW)(toElement)):(event.preventDefault(),event.stopPropagation(),(0,FocusManagements.pW)(previous)):(0,FocusManagements.pW)(previousActiveElement.current)}),!0)}({container,containers,ownerDocument,previousActiveElement},Boolean(features&FocusTrapFeatures.FocusLock));const handleFocus=(0,hooks._q)((()=>{const el=container.current;el&&(0,utils.YW)(direction.current,{[hooks.$Z.Backwards]:()=>(0,FocusManagements.CU)(el,FocusManagements.BD.Last),[hooks.$Z.Forwards]:()=>(0,FocusManagements.CU)(el,FocusManagements.BD.First)})})),ourProps=react.useMemo((()=>({ref:focusTrapRef})),[focusTrapRef]);return react.createElement(react.Fragment,null,Boolean(features&FocusTrapFeatures.TabLock)&&react.createElement(Hidden,{as:"button",features:HiddenFeatures.Focusable,onFocus:handleFocus,type:"button"}),(0,core.XX)({defaultTag:"div",name:"FocusTrap",ourProps,theirProps}),Boolean(features&FocusTrapFeatures.TabLock)&&react.createElement(Hidden,{as:"button",features:HiddenFeatures.Focusable,onFocus:handleFocus,type:"button"}))})),{features:FocusTrapFeatures});try{None.displayName="FocusTrapFeatures.None",None.__docgenInfo={description:"No features enabled for the focus trap.",displayName:"FocusTrapFeatures.None",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.None"]={docgenInfo:FocusTrapFeatures.None.__docgenInfo,name:"FocusTrapFeatures.None",path:"src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.None"})}catch(__react_docgen_typescript_loader_error){}try{InitialFocus.displayName="FocusTrapFeatures.InitialFocus",InitialFocus.__docgenInfo={description:"Ensure that we move focus initially into the container.",displayName:"FocusTrapFeatures.InitialFocus",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.InitialFocus"]={docgenInfo:FocusTrapFeatures.InitialFocus.__docgenInfo,name:"FocusTrapFeatures.InitialFocus",path:"src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.InitialFocus"})}catch(__react_docgen_typescript_loader_error){}try{TabLock.displayName="FocusTrapFeatures.TabLock",TabLock.__docgenInfo={description:"Ensure that pressing `Tab` and `Shift+Tab` is trapped within the container.",displayName:"FocusTrapFeatures.TabLock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.TabLock"]={docgenInfo:FocusTrapFeatures.TabLock.__docgenInfo,name:"FocusTrapFeatures.TabLock",path:"src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.TabLock"})}catch(__react_docgen_typescript_loader_error){}try{FocusLock.displayName="FocusTrapFeatures.FocusLock",FocusLock.__docgenInfo={description:"Ensure that programmatically moving focus outside of the container is disallowed.",displayName:"FocusTrapFeatures.FocusLock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.FocusLock"]={docgenInfo:FocusTrapFeatures.FocusLock.__docgenInfo,name:"FocusTrapFeatures.FocusLock",path:"src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.FocusLock"})}catch(__react_docgen_typescript_loader_error){}try{RestoreFocus.displayName="FocusTrapFeatures.RestoreFocus",RestoreFocus.__docgenInfo={description:"Ensure that we restore the focus when unmounting the focus trap.",displayName:"FocusTrapFeatures.RestoreFocus",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.RestoreFocus"]={docgenInfo:FocusTrapFeatures.RestoreFocus.__docgenInfo,name:"FocusTrapFeatures.RestoreFocus",path:"src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.RestoreFocus"})}catch(__react_docgen_typescript_loader_error){}try{AutoFocus.displayName="FocusTrapFeatures.AutoFocus",AutoFocus.__docgenInfo={description:"Initial focus should look for the `data-autofocus`",displayName:"FocusTrapFeatures.AutoFocus",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.AutoFocus"]={docgenInfo:FocusTrapFeatures.AutoFocus.__docgenInfo,name:"FocusTrapFeatures.AutoFocus",path:"src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.AutoFocus"})}catch(__react_docgen_typescript_loader_error){}try{All.displayName="FocusTrapFeatures.All",All.__docgenInfo={description:"Enable all features.",displayName:"FocusTrapFeatures.All",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.All"]={docgenInfo:FocusTrapFeatures.All.__docgenInfo,name:"FocusTrapFeatures.All",path:"src/tools/focus-trap/FocusTrap.tsx#FocusTrapFeatures.All"})}catch(__react_docgen_typescript_loader_error){}const OpenClosedContext=react.createContext(null);OpenClosedContext.displayName="OpenClosedContext";let OpenClosedState=function(OpenClosedState){return OpenClosedState[OpenClosedState.Open=0]="Open",OpenClosedState[OpenClosedState.Closed=1]="Closed",OpenClosedState}({});function useOpenClosed(){return react.useContext(OpenClosedContext)}function OpenClosedProvider(_ref){let{children,value}=_ref;return react.createElement(OpenClosedContext.Provider,{value},children)}try{OpenClosedProvider.displayName="OpenClosedContext",OpenClosedProvider.__docgenInfo={description:"",displayName:"OpenClosedContext",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/open-closed/OpenClosed.tsx#OpenClosedContext"]={docgenInfo:OpenClosedContext.__docgenInfo,name:"OpenClosedContext",path:"src/tools/open-closed/OpenClosed.tsx#OpenClosedContext"})}catch(__react_docgen_typescript_loader_error){}var floating_ui_react=__webpack_require__("../node_modules/.pnpm/@floating-ui+react@0.26.12_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),constants=__webpack_require__("./constants/index.ts");const DEFAULT_GROUP_TAG=react.Fragment,PortalGroupContext=react.createContext(null);PortalGroupContext.displayName="PortalGroupContext";const PortalGroup=(0,core.FX)(((props,ref)=>{const{target,...others}=props,ourProps={ref:(0,hooks.P$)(ref)},theirProps=others;return react.createElement(PortalGroupContext.Provider,{value:target},(0,core.XX)({defaultTag:DEFAULT_GROUP_TAG,name:"Popover.Group",ourProps,theirProps}))}));try{PortalGroup.displayName="PortalGroupContext",PortalGroup.__docgenInfo={description:"",displayName:"PortalGroupContext",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"MutableRefObject<HTMLElement | null>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/portals/PortalGroup.tsx#PortalGroupContext"]={docgenInfo:PortalGroupContext.__docgenInfo,name:"PortalGroupContext",path:"src/tools/portals/PortalGroup.tsx#PortalGroupContext"})}catch(__react_docgen_typescript_loader_error){}const ForcePortalRootContext=react.createContext(!1);function ForcePortalRoot(_ref){let{children,force}=_ref;return react.createElement(ForcePortalRootContext.Provider,{value:force},children)}try{ForcePortalRoot.displayName="ForcePortalRoot",ForcePortalRoot.__docgenInfo={description:"",displayName:"ForcePortalRoot",props:{force:{defaultValue:null,description:"",name:"force",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/portals/PortalForceRoot.tsx#ForcePortalRoot"]={docgenInfo:ForcePortalRoot.__docgenInfo,name:"ForcePortalRoot",path:"src/tools/portals/PortalForceRoot.tsx#ForcePortalRoot"})}catch(__react_docgen_typescript_loader_error){}function usePortalTarget(ref){const forceInRoot=function useForcePortalRoot(){return react.useContext(ForcePortalRootContext)}(),groupTarget=react.useContext(PortalGroupContext),ownerDocument=(0,hooks.g6)(ref),[target,setTarget]=react.useState((()=>{if(!forceInRoot&&null!==groupTarget)return null;if(utils.S$)return null;const existingRoot=null==ownerDocument?void 0:ownerDocument.getElementById(constants.yC.PortalRoot);if(existingRoot)return existingRoot;if(null===ownerDocument)return null;const createdPortalRoot=ownerDocument.createElement("div");return createdPortalRoot.setAttribute("id",constants.yC.PortalRoot),ownerDocument.body.appendChild(createdPortalRoot)}));return react.useEffect((()=>{null!==target&&(null!=ownerDocument&&ownerDocument.body.contains(target)||null==ownerDocument||ownerDocument.body.appendChild(target))}),[target,ownerDocument]),react.useEffect((()=>{forceInRoot||null!==groupTarget&&setTarget(groupTarget.current)}),[groupTarget,setTarget,forceInRoot]),target}const DEFAULT_PORTAL_TAG=react.Fragment,Portal=Object.assign((0,core.FX)(((props,ref)=>{const{root,...others}=props,internalPortalRootRef=react.useRef(null),portalRef=(0,hooks.P$)((0,hooks.aN)((ref=>{internalPortalRootRef.current=ref})),ref),ownerDocument=(0,hooks.g6)(internalPortalRootRef),target=usePortalTarget(internalPortalRootRef),[element]=react.useState((()=>{var _ownerDocument$create;return utils.S$?null:null!==(_ownerDocument$create=null==ownerDocument?void 0:ownerDocument.createElement("div"))&&void 0!==_ownerDocument$create?_ownerDocument$create:null})),isReady=(0,hooks.g7)(),trulyUnmounted=react.useRef(!1);if((0,hooks.s5)((()=>{if(trulyUnmounted.current=!1,target&&element)return target.contains(element)||(element.setAttribute(constants.yC.Portal,""),target.appendChild(element)),()=>{trulyUnmounted.current=!0,(0,utils.ft)((()=>{var _target$parentElement;trulyUnmounted.current&&(target&&element&&(target.removeChild(element),target.childNodes.length<=0&&(null===(_target$parentElement=target.parentElement)||void 0===_target$parentElement||_target$parentElement.removeChild(target))))}))}}),[target,element]),!isReady)return null;if(!target||!element)return null;const ourProps={ref:portalRef},theirProps=others;return react.createElement(floating_ui_react.XF,{root:root||element},(0,core.XX)({defaultTag:DEFAULT_PORTAL_TAG,name:"Portal",ourProps,theirProps}))})),{Group:PortalGroup});try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/portals/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/tools/portals/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}var useEvent=__webpack_require__("./hooks/useEvent.ts"),useIsoMorphicEffect=__webpack_require__("./hooks/useIsoMorphicEffect.ts");let StackContextMessageEnum=function(StackContextMessageEnum){return StackContextMessageEnum[StackContextMessageEnum.Add=0]="Add",StackContextMessageEnum[StackContextMessageEnum.Remove=1]="Remove",StackContextMessageEnum}({});const StackContext=react.createContext((()=>{}));function StackProvider(_ref){let{children,element,enabled,onUpdate,type}=_ref;const parentUpdate=function useStackContext(){return react.useContext(StackContext)}(),notify=(0,useEvent._)((function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];null==onUpdate||onUpdate(...args),parentUpdate(...args)}));return(0,useIsoMorphicEffect.s)((()=>{const shouldNotify=void 0===enabled||!0===enabled;return shouldNotify&&notify(StackContextMessageEnum.Add,type,element),()=>{shouldNotify&&notify(StackContextMessageEnum.Remove,type,element)}}),[notify,type,element,enabled]),react.createElement(StackContext.Provider,{value:notify},children)}StackContext.displayName="StackContext";try{StackProvider.displayName="StackContext",StackProvider.__docgenInfo={description:"",displayName:"StackContext",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"MutableRefObject<HTMLElement | null>"}},enabled:{defaultValue:null,description:"",name:"enabled",required:!1,type:{name:"boolean"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"StackContextOnUpdateCallback"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tools/stacks/StackContext.tsx#StackContext"]={docgenInfo:StackContext.__docgenInfo,name:"StackContext",path:"src/tools/stacks/StackContext.tsx#StackContext"})}catch(__react_docgen_typescript_loader_error){}},"./utils/bugs/isDisabledReactIssue7711.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isDisabledReactIssue7711(element){var _ref,_parent;let parent=element.parentElement,legend=null;for(;parent&&!(parent instanceof HTMLFieldSetElement);)parent instanceof HTMLLegendElement&&(legend=parent),parent=parent.parentElement;const isParentDisabled=null!==(_ref=""===(null===(_parent=parent)||void 0===_parent?void 0:_parent.getAttribute("disabled")))&&void 0!==_ref&&_ref;return(!isParentDisabled||!function isFirstLegend(element){if(!element)return!1;let previous=element.previousElementSibling;for(;null!==previous;){if(previous instanceof HTMLLegendElement)return!1;previous=previous.previousElementSibling}return!0}(legend))&&isParentDisabled}__webpack_require__.d(__webpack_exports__,{l:()=>isDisabledReactIssue7711})}}]);