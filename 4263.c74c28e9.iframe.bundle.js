"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4263],{"./hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Z:()=>TabDirection,aN:()=>optionalRef,j1:()=>useDisclosure,Su:()=>useEffectOnce_useEffectOnce,_q:()=>useEvent._,ML:()=>useEventListener,Bi:()=>useId,aq:()=>useIsMounted,s5:()=>hooks_useIsoMorphicEffect.s,SV:()=>useMergeRefs,jz:()=>useOutsideClick,g6:()=>useOwnerDocument,g7:()=>useServerHandoffComplete,P$:()=>useSyncRefs,uG:()=>useTabDirection,FH:()=>useWatch});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const useDisclosure=()=>{const[isShow,setShow]=react.useState(!1),onToggle=react.useCallback((()=>{setShow((prevShow=>!prevShow))}),[]);return{isShow,onClose:react.useCallback((()=>{setShow(!1)}),[]),onShow:react.useCallback((()=>{setShow(!0)}),[]),onToggle}};function useDocumentEvent(type,callback,options){react.useEffect((function initEvent(){return document.addEventListener(type,callback,options),function cleanup(){document.removeEventListener(type,callback,options)}}),[])}const useEffectOnce_useEffectOnce=effect=>{react.useEffect(effect,[])};var useEvent=__webpack_require__("./hooks/useEvent.ts"),useLatestValue=__webpack_require__("./hooks/useLatestValue.ts");function useEventListener(element,type,listener,options){const listenerRef=(0,useLatestValue.Y)(listener);react.useEffect((()=>{function eventHandler(event){listenerRef.current(event)}return(element=element??window).addEventListener(type,eventHandler,options),()=>{element?.removeEventListener(type,eventHandler,options)}}),[element,type,options])}var esm=__webpack_require__("../../../node_modules/.pnpm/@fxts+core@1.0.0/node_modules/@fxts/core/dist/esm/index.js"),hooks_useIsoMorphicEffect=__webpack_require__("./hooks/useIsoMorphicEffect.ts");const state={serverHandoffComplete:!1};function useServerHandoffComplete(){const[serverHandoffComplete,setServerHandoffComplete]=react.useState(state.serverHandoffComplete);return react.useEffect((()=>{!0!==serverHandoffComplete&&setServerHandoffComplete(!0)}),[serverHandoffComplete]),react.useEffect((()=>{!1===state.serverHandoffComplete&&(state.serverHandoffComplete=!0)}),[]),serverHandoffComplete}let id=0;function generateId(){return++id}const useId=react.useId??function _useId(){const ready=useServerHandoffComplete(),[id,setId]=react.useState(ready?generateId:null);return(0,hooks_useIsoMorphicEffect.s)((()=>{null===id&&setId(generateId())}),[id]),(0,esm.gD)(id)?void 0:`${id}`};function useIsMounted(){const mounted=(0,react.useRef)(!1);return(0,hooks_useIsoMorphicEffect.s)((()=>(mounted.current=!0,()=>{mounted.current=!1})),[]),mounted}function useMergeRefs(){for(var _len2=arguments.length,refs=new Array(_len2),_key2=0;_key2<_len2;_key2++)refs[_key2]=arguments[_key2];return react.useMemo((()=>function mergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return value=>{refs.forEach((ref=>{ref&&("function"==typeof ref?ref(value):ref.current=value)}))}}(...refs)),[refs])}var isFunction=__webpack_require__("../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js"),FocusManagements=__webpack_require__("./tools/focus-trap/FocusManagements.ts");function useOutsideClick(containers,callback){let enabled=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const enabledRef=react.useRef(!1),initialClickTarget=react.useRef(null);react.useEffect((()=>{requestAnimationFrame((()=>{enabledRef.current=enabled}))}),[enabled]);const handleOutsideClick=react.useCallback(((event,resolveTarget)=>{if(!enabledRef.current)return;if(event.defaultPrevented)return;const typedContainers=function resolve(containers){return(0,isFunction.A)(containers)?resolve(containers()):Array.isArray(containers)||containers instanceof Set?containers:[containers]}(containers),target=resolveTarget(event);if(null===target)return;if(target.ownerDocument.documentElement.contains(target)){for(const container of typedContainers){if(null===container)continue;const containerDomNode=container instanceof HTMLElement?container:container.current;if(containerDomNode?.contains(target))return}return(0,FocusManagements.Bm)(target,FocusManagements.MZ.Loose)||-1===target.tabIndex||event.preventDefault(),callback(event,target)}}),[callback,containers]);useDocumentEvent("mousedown",(event=>{enabledRef.current&&(initialClickTarget.current=event.target)}),!0),useDocumentEvent("click",(event=>{initialClickTarget.current&&(handleOutsideClick(event,(()=>initialClickTarget.current)),initialClickTarget.current=null)}),!0),useDocumentEvent("blur",(event=>handleOutsideClick(event,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}var getOwnerDocumentBy=__webpack_require__("./utils/getOwnerDocumentBy.ts");function useOwnerDocument(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,react.useMemo)((()=>(0,getOwnerDocumentBy.M)(...args)),[args])}__webpack_require__("../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");function usePortal(_ref){let{children,show,targetElement}=_ref;return show?null:ReactDOM.createPortal(children,targetElement)}try{usePortal.displayName="usePortal",usePortal.__docgenInfo={description:"",displayName:"usePortal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"",name:"targetElement",required:!0,type:{name:"HTMLElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/usePortal.tsx#usePortal"]={docgenInfo:usePortal.__docgenInfo,name:"usePortal",path:"src/hooks/usePortal.tsx#usePortal"})}catch(__react_docgen_typescript_loader_error){}const Optional=Symbol();function optionalRef(cb){let isOptional=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object.assign(cb,{[Optional]:isOptional})}function useSyncRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];const cache=react.useRef(refs);react.useEffect((()=>{cache.current=refs}),[refs]);const syncRefs=(0,useEvent._)((value=>{for(const ref of cache.current)null!=ref&&("function"==typeof ref?ref(value):ref.current=value)}));return refs.every((ref=>null==ref||ref?.[Optional]))?void 0:syncRefs}let TabDirection=function(TabDirection){return TabDirection[TabDirection.Forwards=0]="Forwards",TabDirection[TabDirection.Backwards=1]="Backwards",TabDirection}({});function useTabDirection(){const direction=(0,react.useRef)(TabDirection.Forwards);return function useWindowEvent(type,listener,options){const listenerRef=(0,useLatestValue.Y)(listener);react.useEffect((()=>{function handler(event){listenerRef.current(event)}return window.addEventListener(type,handler,options),()=>window.removeEventListener(type,handler,options)}),[type,options])}("keydown",(event=>{"Tab"===event.key&&(direction.current=event.shiftKey?TabDirection.Backwards:TabDirection.Forwards)}),!0),direction}function useWatch(cb,dependencies){const track=react.useRef([]),action=(0,useEvent._)(cb);react.useEffect((()=>{const oldValues=[...track.current];for(const[idx,value]of dependencies.entries())if(track.current[idx]!==value){const returnValue=action(dependencies,oldValues);return track.current=dependencies,returnValue}}),[action,dependencies])}},"./hooks/useEvent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_useLatestValue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/useLatestValue.ts");function useEvent(cb){const cache=(0,_useLatestValue__WEBPACK_IMPORTED_MODULE_1__.Y)(cb);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(){return cache.current(...arguments)}),[cache])}},"./hooks/useIsoMorphicEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useIsoMorphicEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const useIsoMorphicEffect=__webpack_require__("./utils/index.ts").S$?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},"./hooks/useLatestValue.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useLatestValue});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_useIsoMorphicEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/useIsoMorphicEffect.ts");function useLatestValue(value){const cache=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_useIsoMorphicEffect__WEBPACK_IMPORTED_MODULE_1__.s)((()=>{cache.current=value}),[value]),cache}},"./tools/focus-trap/FocusManagements.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BD:()=>Focus,Bm:()=>isFocusableElement,CU:()=>focusIn,MZ:()=>FocusableMode,Me:()=>FocusResult,pW:()=>focusElement});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./utils/index.ts");const FOCUSABLE_SELECTORS=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((selector=>`${selector}:not([tabindex='-1'])`)).join(",");let Focus=function(Focus){return Focus[Focus.First=1]="First",Focus[Focus.Last=8]="Last",Focus[Focus.Next=4]="Next",Focus[Focus.NoScroll=32]="NoScroll",Focus[Focus.Previous=2]="Previous",Focus[Focus.WrapAround=16]="WrapAround",Focus}({}),FocusResult=function(FocusResult){return FocusResult[FocusResult.Error=0]="Error",FocusResult[FocusResult.Overflow=1]="Overflow",FocusResult[FocusResult.Success=2]="Success",FocusResult[FocusResult.Underflow=3]="Underflow",FocusResult}({});var Direction=function(Direction){return Direction[Direction.Next=1]="Next",Direction[Direction.Previous=-1]="Previous",Direction}(Direction||{});function getFocusableElements(){let container=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==container?[]:Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS))}let FocusableMode=function(FocusableMode){return FocusableMode[FocusableMode.Strict=0]="Strict",FocusableMode[FocusableMode.Loose=1]="Loose",FocusableMode}({});function isFocusableElement(element){let mode=arguments.length>1&&void 0!==arguments[1]?arguments[1]:FocusableMode.Strict;return element!==(0,_utils__WEBPACK_IMPORTED_MODULE_0__.MS)(element)?.body&&(0,_utils__WEBPACK_IMPORTED_MODULE_0__.YW)(mode,{[FocusableMode.Loose](){let next=element;for(;null!==next;){if(next.matches(FOCUSABLE_SELECTORS))return!0;next=next.parentElement}return!1},[FocusableMode.Strict]:()=>element.matches(FOCUSABLE_SELECTORS)})}function focusElement(element){element?.focus({preventScroll:!0})}const selectableSelector=["textarea","input"].join(",");function focusIn(container,focus){let sorted=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],active=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const isArrayContainer=Array.isArray(container),ownerDocument=isArrayContainer?container.length>0?container[0].ownerDocument:document:container.ownerDocument,elements=isArrayContainer?sorted?function sortByDomNode(nodes){let resolveKey=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i=>i;return nodes.slice().sort(((aItem,zItem)=>{const a=resolveKey(aItem),z=resolveKey(zItem);if(null===a||null===z)return 0;const position=a.compareDocumentPosition(z);return position&Node.DOCUMENT_POSITION_FOLLOWING?-1:position&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(container):container:getFocusableElements(container);active=active??ownerDocument.activeElement;const direction=(()=>{if(focus&(Focus.First|Focus.Next))return Direction.Next;if(focus&(Focus.Previous|Focus.Last))return Direction.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),startIndex=(()=>{if(focus&Focus.First)return 0;if(focus&Focus.Previous)return Math.max(0,elements.indexOf(active))-1;if(focus&Focus.Next)return Math.max(0,elements.indexOf(active))+1;if(focus&Focus.Last)return elements.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),focusOptions=focus&Focus.NoScroll?{preventScroll:!0}:{};let offset=0;const totalElementsCount=elements.length;let next;do{if(offset>=totalElementsCount||offset+totalElementsCount<=0)return FocusResult.Error;let nextIdx=startIndex+offset;if(focus&Focus.WrapAround)nextIdx=(nextIdx+totalElementsCount)%totalElementsCount;else{if(nextIdx<0)return FocusResult.Underflow;if(nextIdx>=totalElementsCount)return FocusResult.Overflow}next=elements[nextIdx],next?.focus(focusOptions),offset+=direction}while(next!==ownerDocument.activeElement);return focus&(Focus.Next|Focus.Previous)&&function isSelectableElement(element){return element?.matches?.(selectableSelector)??!1}(next)&&next.select(),next.hasAttribute("tabindex")||next.setAttribute("tabindex","0"),FocusResult.Success}},"./utils/getOwnerDocumentBy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>getOwnerDocumentBy});var _isServer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./utils/isServer.ts");function getOwnerDocumentBy(element){return _isServer__WEBPACK_IMPORTED_MODULE_0__.S?null:element instanceof Node?element.ownerDocument:element?.current instanceof Node?element.current.ownerDocument:document}},"./utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{oE:()=>compact,MS:()=>getOwnerDocumentBy.M,S$:()=>isServer.S,b0:()=>isUndefined,YW:()=>match,ft:()=>toMicrotask});const isUndefined=v=>void 0===v;function compact(object){let predicate=arguments.length>1&&void 0!==arguments[1]?arguments[1]:isUndefined;const clone=Object.assign({},object);for(const key in clone)predicate(clone[key])&&delete clone[key];return clone}var getOwnerDocumentBy=__webpack_require__("./utils/getOwnerDocumentBy.ts"),isServer=__webpack_require__("./utils/isServer.ts");function match(key,lookup){for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)args[_key-2]=arguments[_key];if(key in lookup){const returnValue=lookup[key];return"function"==typeof returnValue?returnValue(...args):returnValue}const errorKeys=Object.keys(lookup).map((key=>`"${key}"`)),joinedErrorKeys=errorKeys.join(", ");throw new Error(`Tried to handle "${key}" but there is no handler defined. Only defined handlers are: ${joinedErrorKeys}.`)}function toMicrotask(cb){"function"==typeof queueMicrotask?queueMicrotask(cb):Promise.resolve().then(cb).catch((e=>setTimeout((()=>{throw e}))))}},"./utils/isServer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>isServer});const isServer="undefined"==typeof window||"undefined"==typeof document}}]);