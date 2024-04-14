"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[880],{"./components/combinations/Popover/Popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_PopoverGroups:()=>_PopoverGroups,_Popovers:()=>_Popovers,_PopoversCloseButton:()=>_PopoversCloseButton,_PopoversOverlay:()=>_PopoversOverlay,_PopoversPositionWithPopper:()=>_PopoversPositionWithPopper,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/.pnpm/@heroicons+react@2.1.3_react@18.2.0/node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../node_modules/.pnpm/@heroicons+react@2.1.3_react@18.2.0/node_modules/@heroicons/react/24/outline/esm/BookmarkIcon.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../node_modules/.pnpm/@heroicons+react@2.1.3_react@18.2.0/node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.8_react-dom@18.2.0_react@18.2.0/node_modules/react-popper/lib/esm/usePopper.js"),_components_atomics__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atomics/index.ts"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/index.ts"),_Popover__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/combinations/Popover/Popover.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={argTypes:{onClick:{action:"clicked"},placement:{control:{defaultValue:"bottom-start",options:_stories__WEBPACK_IMPORTED_MODULE_2__.AY,type:"select"}}},component:_Popover__WEBPACK_IMPORTED_MODULE_3__.A,title:"Combination/Popover"},PopoversTemplate=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A,{className:"relative mt-8"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Button,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Show Popover")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Panel,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("absolute z-10")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"First Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Second Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Third Item")))),_Popovers=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Light,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoversTemplate,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Dark,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoversTemplate,null)))).bind({}),PopoversCloseButtonTemplate=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A,{className:"relative mt-8"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Button,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Show Popover")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Panel,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("absolute z-10")},(_ref=>{let{close}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"First Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Second Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Third Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-end mt-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.$n,{onClick:()=>close()},"Close Popover Button")))}))),_PopoversCloseButton=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Light,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoversCloseButtonTemplate,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Dark,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoversCloseButtonTemplate,null)))).bind({}),PopoversOverlayTemplate=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.Zp,{className:"mt-8 min-h-180"},"The Popover over test on the Card"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A,{className:"relative mt-8"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Button,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Show Popover")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Overlay,{className:"fixed inset-0 bg-dark opacity-30"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Panel,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("absolute z-10")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"First Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Second Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Third Item")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.Zp,{className:"mt-8"},"The Popover over test on the Card")),_PopoversOverlay=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Light,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoversOverlayTemplate,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Dark,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoversOverlayTemplate,null)))).bind({}),PopoverGroupTemplate=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Group,{className:"flex gap-x-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A,{className:"relative mt-8"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Button,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Show Popover")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Panel,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("absolute z-10 min-w-100")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"First Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Second Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Third Item")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A,{className:"relative mt-8"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Button,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Show Popover")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Panel,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("absolute z-10 min-w-100")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"First Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Second Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Third Item"))))),_PopoverGroups=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Light,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoverGroupTemplate,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Dark,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoverGroupTemplate,null)))).bind({}),PopoversPositionWithPopperTemplate=_ref2=>{let{placement}=_ref2;const[referenceElement,setReferenceElement]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[popperElement,setPopperElement]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),{attributes,styles}=(0,react_popper__WEBPACK_IMPORTED_MODULE_8__.E)(referenceElement,popperElement,{modifiers:[{name:"offset",options:{offset:[0,8]}}],placement});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"w-full",style:{minHeight:"2000px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.Zp,{className:"mt-8 min-h-180"},"The Popover over test on the Card"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.Zp,{className:"mt-8 min-h-180"},"The Popover over test on the Card"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A,{className:"relative mt-8"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Button,{ref:setReferenceElement},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Show Popover")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__.A.Panel,_extends({},attributes.popper,{className:"absolute z-10",ref:setPopperElement,style:styles.popper}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"First Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Second Item")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Third Item")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.Zp,{className:"mt-8"},"The Popover over test on the Card"))},_PopoversPositionWithPopper=(_ref3=>{let{placement}=_ref3;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Light,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoversPositionWithPopperTemplate,{placement})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.EB.Dark,{className:"flex flex-col",noAlign:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopoversPositionWithPopperTemplate,{placement})))}).bind({}),__namedExportsOrder=["_Popovers","_PopoversCloseButton","_PopoversOverlay","_PopoverGroups","_PopoversPositionWithPopper"];try{_PopoversPositionWithPopper.displayName="_PopoversPositionWithPopper",_PopoversPositionWithPopper.__docgenInfo={description:"",displayName:"_PopoversPositionWithPopper",props:{placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Popover/Popover.stories.tsx#_PopoversPositionWithPopper"]={docgenInfo:_PopoversPositionWithPopper.__docgenInfo,name:"_PopoversPositionWithPopper",path:"src/components/combinations/Popover/Popover.stories.tsx#_PopoversPositionWithPopper"})}catch(__react_docgen_typescript_loader_error){}},"./components/combinations/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Popover});var popover=__webpack_require__("../node_modules/.pnpm/@headlessui+react@1.7.18_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/components/popover/popover.js"),clsx_m=__webpack_require__("../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const PopoverButton=react.forwardRef(((_ref,ref)=>{let{children,className,...others}=_ref;return react.createElement(popover.A.Button,_extends({},others,{className:(0,clsx_m.A)("Root__Popover__Button",className),ref}),children)}));try{PopoverButton.displayName="PopoverButton",PopoverButton.__docgenInfo={description:"",displayName:"PopoverButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Popover/Popover.Button.tsx#PopoverButton"]={docgenInfo:PopoverButton.__docgenInfo,name:"PopoverButton",path:"src/components/combinations/Popover/Popover.Button.tsx#PopoverButton"})}catch(__react_docgen_typescript_loader_error){}function Popover_Group_extends(){return Popover_Group_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Popover_Group_extends.apply(this,arguments)}const PopoverGroup=react.forwardRef(((_ref,ref)=>{let{children,className,...others}=_ref;return react.createElement(popover.A.Group,Popover_Group_extends({},others,{className:(0,clsx_m.A)("Root__Popover__Group",className),ref}),children)}));try{PopoverGroup.displayName="PopoverGroup",PopoverGroup.__docgenInfo={description:"",displayName:"PopoverGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Popover/Popover.Group.tsx#PopoverGroup"]={docgenInfo:PopoverGroup.__docgenInfo,name:"PopoverGroup",path:"src/components/combinations/Popover/Popover.Group.tsx#PopoverGroup"})}catch(__react_docgen_typescript_loader_error){}function Popover_Overlay_extends(){return Popover_Overlay_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Popover_Overlay_extends.apply(this,arguments)}const PopoverOverlay=react.forwardRef(((_ref,ref)=>{let{children,className,...others}=_ref;return react.createElement(popover.A.Overlay,Popover_Overlay_extends({},others,{className:(0,clsx_m.A)("Root__Popover__Overlay",className,"fixed inset-0 bg-black opacity-30"),ref}),children)}));try{PopoverOverlay.displayName="PopoverOverlay",PopoverOverlay.__docgenInfo={description:"",displayName:"PopoverOverlay",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Popover/Popover.Overlay.tsx#PopoverOverlay"]={docgenInfo:PopoverOverlay.__docgenInfo,name:"PopoverOverlay",path:"src/components/combinations/Popover/Popover.Overlay.tsx#PopoverOverlay"})}catch(__react_docgen_typescript_loader_error){}function Popover_Panel_extends(){return Popover_Panel_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Popover_Panel_extends.apply(this,arguments)}const PopoverPanel=react.forwardRef(((_ref,ref)=>{let{children,className,...others}=_ref;return react.createElement(popover.A.Panel,Popover_Panel_extends({},others,{className:(0,clsx_m.A)("Root__Popover__Panel",className,"block","bg-cream-1 dark:bg-space-1","text-space-1 dark:text-cream-1","rounded shadow"),ref}),children)}));try{PopoverPanel.displayName="PopoverPanel",PopoverPanel.__docgenInfo={description:"",displayName:"PopoverPanel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Popover/Popover.Panel.tsx#PopoverPanel"]={docgenInfo:PopoverPanel.__docgenInfo,name:"PopoverPanel",path:"src/components/combinations/Popover/Popover.Panel.tsx#PopoverPanel"})}catch(__react_docgen_typescript_loader_error){}function Popover_Root_extends(){return Popover_Root_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Popover_Root_extends.apply(this,arguments)}const PopoverRoot=react.forwardRef(((_ref,ref)=>{let{children,className,...others}=_ref;return react.createElement(popover.A,Popover_Root_extends({},others,{className:(0,clsx_m.A)("Root__Popover",className,"relative"),ref}),"function"==typeof children?_ref2=>{let{close,open}=_ref2;return children({close,open})}:children)}));try{PopoverRoot.displayName="PopoverRoot",PopoverRoot.__docgenInfo={description:"",displayName:"PopoverRoot",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Popover/Popover.Root.tsx#PopoverRoot"]={docgenInfo:PopoverRoot.__docgenInfo,name:"PopoverRoot",path:"src/components/combinations/Popover/Popover.Root.tsx#PopoverRoot"})}catch(__react_docgen_typescript_loader_error){}const Popover=Object.assign(PopoverRoot,{Button:PopoverButton,Group:PopoverGroup,Overlay:PopoverOverlay,Panel:PopoverPanel});try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/combinations/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}}}]);