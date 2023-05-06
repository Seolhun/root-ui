"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[973],{"./components/combinations/Floating/Tooltip/Tooltip.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ScaleTooltips:function(){return ScaleTooltips},Tooltips:function(){return Tooltips},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_components_atomics__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atomics/index.ts"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/index.ts"),_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/combinations/Floating/Tooltip/Tooltip.tsx"),_excluded=["root"];function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"Combination/Tooltip",component:_Tooltip__WEBPACK_IMPORTED_MODULE_3__.u,argTypes:{scale:{control:{type:"select",options:_stories__WEBPACK_IMPORTED_MODULE_2__.Tl}}}};var BaseTemplate=function BaseTemplate(_ref){var root=_ref.root,others=_objectWithoutProperties(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.u,_extends({},others,{root:root}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.u.Trigger,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.zx,null,"Tooltip Trigger")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.u.Content,null,"Tooltip Content"))},Tooltips=function TooltipsTemplate(_ref2){var others=Object.assign({},(_objectDestructuringEmpty(_ref2),_ref2));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI.Light,null,(function(_ref3){var root=_ref3.root;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,_extends({},others,{root:root}))})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI.Dark,null,(function(_ref4){var root=_ref4.root;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,_extends({},others,{root:root}))})))}.bind({});Tooltips.args={};var ScaleTooltips=function ScaleTooltipTemplate(_ref5){var others=Object.assign({},(_objectDestructuringEmpty(_ref5),_ref5));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI.Light,{className:"flex flex-col space-y-2"},(function(_ref6){var root=_ref6.root;return _stories__WEBPACK_IMPORTED_MODULE_2__.Tl.map((function(scale){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,_extends({},others,{key:scale,scale:scale,root:root}))}))})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI.Dark,{className:"flex flex-col space-y-2"},(function(_ref7){var root=_ref7.root;return _stories__WEBPACK_IMPORTED_MODULE_2__.Tl.map((function(scale){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,_extends({},others,{key:scale,scale:scale,root:root}))}))})))}.bind({});ScaleTooltips.args={};var __namedExportsOrder=["Tooltips","ScaleTooltips"]},"./components/combinations/Floating/Tooltip/Tooltip.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:function(){return Tooltip}});var floating_ui_react_esm=__webpack_require__("../node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../node_modules/react/index.js"),hooks=__webpack_require__("./hooks/index.ts"),system=__webpack_require__("./system/index.ts"),floating_ui_dom_browser_min=__webpack_require__("../node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),floating_ui_core_browser_min=__webpack_require__("../node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TooltipContext=react.createContext(null),useTooltipContext=function useTooltipContext(){var context=react.useContext(TooltipContext);if(null==context)throw new Error("Tooltip components must be wrapped in <Tooltip />");return context};function Tooltip_Content_typeof(obj){return Tooltip_Content_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Tooltip_Content_typeof(obj)}var _excluded=["children","className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function Tooltip_Content_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Tooltip_Content_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Tooltip_Content_ownKeys(Object(source),!0).forEach((function(key){Tooltip_Content_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Tooltip_Content_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Tooltip_Content_defineProperty(obj,key,value){return(key=function Tooltip_Content_toPropertyKey(arg){var key=function Tooltip_Content_toPrimitive(input,hint){if("object"!==Tooltip_Content_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Tooltip_Content_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Tooltip_Content_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TooltipContent=react.forwardRef((function(_ref,ref){var _contextValues$y,_contextValues$x,children=_ref.children,className=_ref.className,others=_objectWithoutProperties(_ref,_excluded),scale=(0,system.Tq)().scale,contextValues=useTooltipContext(),setCurrentId=(0,floating_ui_react_esm.tj)().setCurrentId,tooltipId=react.useId(),mergedRef=(0,floating_ui_react_esm.qq)([(null==contextValues?void 0:contextValues.refs.setFloating)||null,ref]);return(0,floating_ui_react_esm.Qu)(contextValues.context,{id:tooltipId}),(0,hooks.er)((function(){contextValues.open&&setCurrentId(tooltipId)}),[contextValues.open,tooltipId,setCurrentId]),react.createElement(floating_ui_react_esm.ll,{root:contextValues.root},(null==contextValues?void 0:contextValues.open)&&react.createElement("div",_extends({},null==contextValues?void 0:contextValues.getFloatingProps(others),{ref:mergedRef,className:(0,clsx_m.Z)(className,"max-w-150","py-1 px-2","rounded","border border-cream-3 dark:border-space-3","bg-cream-1 text-space-1","dark:bg-space-1 dark:text-cream-1",(0,system.i6)({xs:function xs(){return"scale-text-xs scale-p-xs"},sm:function sm(){return"scale-text-sm scale-p-sm"},md:function md(){return"scale-text-md scale-p-md"},lg:function lg(){return"scale-text-lg scale-p-lg"},xl:function xl(){return"scale-text-xl scale-p-xl"}})(scale)),style:Tooltip_Content_objectSpread(Tooltip_Content_objectSpread({},others.style),{},{position:null==contextValues?void 0:contextValues.strategy,top:null!==(_contextValues$y=null==contextValues?void 0:contextValues.y)&&void 0!==_contextValues$y?_contextValues$y:0,left:null!==(_contextValues$x=null==contextValues?void 0:contextValues.x)&&void 0!==_contextValues$x?_contextValues$x:0,visibility:null==(null==contextValues?void 0:contextValues.x)?"hidden":"visible",zIndex:1e7})}),children))}));try{TooltipContent.displayName="TooltipContent",TooltipContent.__docgenInfo={description:"",displayName:"TooltipContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Floating/Tooltip/Tooltip.Content.tsx#TooltipContent"]={docgenInfo:TooltipContent.__docgenInfo,name:"TooltipContent",path:"src/components/combinations/Floating/Tooltip/Tooltip.Content.tsx#TooltipContent"})}catch(__react_docgen_typescript_loader_error){}var Tooltip_Root_excluded=["children","scale"];function Tooltip_Root_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Tooltip_Root_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TooltipRoot=function TooltipRoot(_ref){var children=_ref.children,_ref$scale=_ref.scale,scale=void 0===_ref$scale?"md":_ref$scale,tooltipValues=function useTooltip(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialOpen=_ref.initialOpen,initialOpen=void 0!==_ref$initialOpen&&_ref$initialOpen,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom":_ref$placement,controlledOpen=_ref.open,setControlledOpen=_ref.onOpenChange,disabled=_ref.disabled,root=_ref.root,_React$useState2=_slicedToArray(react.useState(initialOpen),2),uncontrolledOpen=_React$useState2[0],setUncontrolledOpen=_React$useState2[1],open=null!=controlledOpen?controlledOpen:uncontrolledOpen,setOpen=null!=setControlledOpen?setControlledOpen:setUncontrolledOpen,delay=(0,floating_ui_react_esm.tj)().delay,floatingData=(0,floating_ui_react_esm.YF)({placement:placement,open:open,strategy:"fixed",onOpenChange:setOpen,whileElementsMounted:floating_ui_dom_browser_min.Me,middleware:[(0,floating_ui_core_browser_min.cv)(5),(0,floating_ui_core_browser_min.RR)(),(0,floating_ui_core_browser_min.uY)({padding:5})]}),context=floatingData.context,hover=(0,floating_ui_react_esm.XI)(context,{move:!1,enabled:!disabled,delay:delay}),focus=(0,floating_ui_react_esm.KK)(context,{enabled:!disabled}),dismiss=(0,floating_ui_react_esm.bQ)(context),role=(0,floating_ui_react_esm.qs)(context,{role:"tooltip"}),interactions=(0,floating_ui_react_esm.NI)([hover,focus,dismiss,role]);return react.useMemo((function(){return _objectSpread(_objectSpread({open:open,setOpen:setOpen,root:root},interactions),floatingData)}),[open,setOpen,interactions,floatingData,root])}(Tooltip_Root_objectWithoutProperties(_ref,Tooltip_Root_excluded));return react.createElement(TooltipContext.Provider,{value:tooltipValues},react.createElement(system.WR,{scale:scale},children))};try{TooltipRoot.displayName="TooltipRoot",TooltipRoot.__docgenInfo={description:"",displayName:"TooltipRoot",props:{initialOpen:{defaultValue:null,description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},root:{defaultValue:null,description:"Portal target element",name:"root",required:!1,type:{name:"HTMLElement | null"}},scale:{defaultValue:{value:"md"},description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},defaultScale:{defaultValue:null,description:"",name:"defaultScale",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"primary"'},{value:'"info"'},{value:'"success"'},{value:'"accent"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'},{value:'"neutral"'},{value:'"inherit"'}]}},defaultIntent:{defaultValue:null,description:"",name:"defaultIntent",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"primary"'},{value:'"info"'},{value:'"success"'},{value:'"accent"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'},{value:'"neutral"'},{value:'"inherit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Floating/Tooltip/Tooltip.Root.tsx#TooltipRoot"]={docgenInfo:TooltipRoot.__docgenInfo,name:"TooltipRoot",path:"src/components/combinations/Floating/Tooltip/Tooltip.Root.tsx#TooltipRoot"})}catch(__react_docgen_typescript_loader_error){}var Tooltip_Trigger_excluded=["children","className"];function Tooltip_Trigger_extends(){return Tooltip_Trigger_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Tooltip_Trigger_extends.apply(this,arguments)}function Tooltip_Trigger_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Tooltip_Trigger_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TooltipTrigger=react.forwardRef((function(_ref,ref){var children=_ref.children,className=_ref.className,props=Tooltip_Trigger_objectWithoutProperties(_ref,Tooltip_Trigger_excluded),contextValues=useTooltipContext(),childrenRef=null==children?void 0:children.ref,mergedRef=(0,floating_ui_react_esm.qq)([null==contextValues?void 0:contextValues.refs.setReference,ref,childrenRef]);return react.createElement("div",Tooltip_Trigger_extends({ref:mergedRef,className:(0,clsx_m.Z)(className,"inline-block"),"data-state":null!=contextValues&&contextValues.open?"open":"closed"},null==contextValues?void 0:contextValues.getReferenceProps(props)),children)}));try{TooltipTrigger.displayName="TooltipTrigger",TooltipTrigger.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Floating/Tooltip/Tooltip.Trigger.tsx#TooltipTrigger"]={docgenInfo:TooltipTrigger.__docgenInfo,name:"TooltipTrigger",path:"src/components/combinations/Floating/Tooltip/Tooltip.Trigger.tsx#TooltipTrigger"})}catch(__react_docgen_typescript_loader_error){}var Tooltip=Object.assign(TooltipRoot,{Trigger:TooltipTrigger,Content:TooltipContent});try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{initialOpen:{defaultValue:null,description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},root:{defaultValue:null,description:"Portal target element",name:"root",required:!1,type:{name:"HTMLElement | null"}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},defaultScale:{defaultValue:null,description:"",name:"defaultScale",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'}]}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"primary"'},{value:'"info"'},{value:'"success"'},{value:'"accent"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'},{value:'"neutral"'},{value:'"inherit"'}]}},defaultIntent:{defaultValue:null,description:"",name:"defaultIntent",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"primary"'},{value:'"info"'},{value:'"success"'},{value:'"accent"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'},{value:'"neutral"'},{value:'"inherit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Floating/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/combinations/Floating/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}}}]);