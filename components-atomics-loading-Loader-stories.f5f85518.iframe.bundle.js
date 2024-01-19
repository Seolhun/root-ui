"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[985],{"./components/atomics/loading/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IntentLoaders:()=>IntentLoaders,ScaleLoader:()=>ScaleLoader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/index.ts"),_Loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atomics/loading/Loader.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={argTypes:{intent:{control:{options:_stories__WEBPACK_IMPORTED_MODULE_1__.vn,type:"select"}},scale:{control:{options:_stories__WEBPACK_IMPORTED_MODULE_1__.Tl,type:"select"}}},component:_Loader__WEBPACK_IMPORTED_MODULE_2__.a,title:"Atomic/Loader"},BaseTemplate=_ref=>{let{children,...others}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_2__.a,others,children)},ScaleLoader=(_ref2=>{let{...others}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_1__.fI,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_1__.fI.Light,{className:"flex flex-col"},_stories__WEBPACK_IMPORTED_MODULE_1__.Tl.map((scale=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,_extends({},others,{key:scale,scale}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_1__.fI.Dark,{className:"flex flex-col"},_stories__WEBPACK_IMPORTED_MODULE_1__.Tl.map((scale=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,_extends({},others,{key:scale,scale}))))))}).bind({});ScaleLoader.args={};const IntentLoaders=(_ref3=>{let{children,...others}=_ref3;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_1__.fI,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_1__.fI.Light,{className:"flex flex-col"},_stories__WEBPACK_IMPORTED_MODULE_1__.vn.map((intent=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,_extends({},others,{intent,key:intent}))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_1__.fI.Dark,{className:"flex flex-col"},_stories__WEBPACK_IMPORTED_MODULE_1__.vn.map((intent=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,_extends({},others,{intent,key:intent}))))))}).bind({});IntentLoaders.args={};const __namedExportsOrder=["ScaleLoader","IntentLoaders"];try{ScaleLoader.displayName="ScaleLoader",ScaleLoader.__docgenInfo={description:"",displayName:"ScaleLoader",props:{intent:{defaultValue:{value:"primary"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"none"'}]}},scale:{defaultValue:{value:"md"},description:"Set this to change scale",name:"scale",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"xs"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atomics/loading/Loader.stories.tsx#ScaleLoader"]={docgenInfo:ScaleLoader.__docgenInfo,name:"ScaleLoader",path:"src/components/atomics/loading/Loader.stories.tsx#ScaleLoader"})}catch(__react_docgen_typescript_loader_error){}try{IntentLoaders.displayName="IntentLoaders",IntentLoaders.__docgenInfo={description:"",displayName:"IntentLoaders",props:{intent:{defaultValue:{value:"primary"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"none"'}]}},scale:{defaultValue:{value:"md"},description:"Set this to change scale",name:"scale",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"xs"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atomics/loading/Loader.stories.tsx#IntentLoaders"]={docgenInfo:IntentLoaders.__docgenInfo,name:"IntentLoaders",path:"src/components/atomics/loading/Loader.stories.tsx#IntentLoaders"})}catch(__react_docgen_typescript_loader_error){}},"./components/atomics/loading/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./system/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Loader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,...others}=_ref;const{intent,scale}=(0,_system__WEBPACK_IMPORTED_MODULE_1__.Tq)({defaultIntent:"primary",defaultScale:"md",intent:null==others?void 0:others.intent,scale:null==others?void 0:others.scale});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},others,{className:"inline-block",ref}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("Root__Loader",className,"animate-spin",(0,_system__WEBPACK_IMPORTED_MODULE_1__.i6)({lg:()=>"scale-lg",md:()=>"scale-md",sm:()=>"scale-sm",xl:()=>"scale-xl",xs:()=>"scale-xs"})(scale),(0,_system__WEBPACK_IMPORTED_MODULE_1__.tV)({accent:()=>(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-accent-2 fill-accent dark:text-accent-2 dark:fill-accent"),danger:()=>(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-danger-2 fill-danger dark:text-danger-2 dark:fill-danger"),info:()=>(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-info-2 fill-info dark:text-info-2 dark:fill-info"),neutral:()=>(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-neutral-2 fill-neutral dark:text-neutral-2 dark:fill-neutral"),primary:()=>(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-primary-2 fill-primary dark:text-primary-2 dark:fill-primary"),success:()=>(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-success-2 fill-success dark:text-success-2 dark:fill-success"),warning:()=>(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-warning-2 fill-warning dark:text-warning-2 dark:fill-warning")})(intent)),"aria-hidden":"true",fill:"none",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"sr-only"},"Loading..."))}));try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{intent:{defaultValue:{value:"primary"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"none"'}]}},scale:{defaultValue:{value:"md"},description:"Set this to change scale",name:"scale",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"xs"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atomics/loading/Loader.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/components/atomics/loading/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}},"./stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fI:()=>StorybookContent,vn:()=>storiesIntentOptions,_T:()=>storiesPlacements,Tl:()=>storiesScaleOptions});const storiesScaleOptions=["xs","sm","md","lg","xl"],storiesIntentOptions=["primary","info","success","accent","warning","danger","neutral","none"],storiesPlacements=["top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","top","bottom","right","left"];var clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const StorybookContentItem=_ref=>{let{children,className,noAlign,noGap,...others}=_ref;const[root,setRoot]=react.useState(null);return react.createElement("div",_extends({},others,{className:(0,clsx_m.Z)(className,"StorybookContentItem","flex flex-1 ","min-h-full",{"gap-2":!noGap,"items-center justify-center":!noAlign},"p-4"),ref:setRoot}),(args={root},"function"==typeof children?children(args):children));var args},createStorybookContentItem=hocProps=>_ref2=>{let{children,className,...others}=_ref2;return react.createElement(StorybookContentItem,_extends({},hocProps,others,{className:(0,clsx_m.Z)(hocProps.className,className)}),children)};try{StorybookContentItem.displayName="StorybookContentItem",StorybookContentItem.__docgenInfo={description:"",displayName:"StorybookContentItem",props:{noAlign:{defaultValue:null,description:"",name:"noAlign",required:!1,type:{name:"boolean"}},noGap:{defaultValue:null,description:"",name:"noGap",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/descriptor/StorybookContent.Item.tsx#StorybookContentItem"]={docgenInfo:StorybookContentItem.__docgenInfo,name:"StorybookContentItem",path:"src/stories/descriptor/StorybookContent.Item.tsx#StorybookContentItem"})}catch(__react_docgen_typescript_loader_error){}try{createStorybookContentItem.displayName="createStorybookContentItem",createStorybookContentItem.__docgenInfo={description:"",displayName:"createStorybookContentItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/descriptor/StorybookContent.Item.tsx#createStorybookContentItem"]={docgenInfo:createStorybookContentItem.__docgenInfo,name:"createStorybookContentItem",path:"src/stories/descriptor/StorybookContent.Item.tsx#createStorybookContentItem"})}catch(__react_docgen_typescript_loader_error){}function StorybookContent_Root_extends(){return StorybookContent_Root_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},StorybookContent_Root_extends.apply(this,arguments)}const StorybookContentRoot=react.forwardRef(((_ref,ref)=>{let{children,className,...others}=_ref;return react.createElement("div",StorybookContent_Root_extends({},others,{className:(0,clsx_m.Z)(className,"flex w-full h-full min-h-screen"),ref}),children)}));try{StorybookContentRoot.displayName="StorybookContentRoot",StorybookContentRoot.__docgenInfo={description:"",displayName:"StorybookContentRoot",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/descriptor/StorybookContent.Root.tsx#StorybookContentRoot"]={docgenInfo:StorybookContentRoot.__docgenInfo,name:"StorybookContentRoot",path:"src/stories/descriptor/StorybookContent.Root.tsx#StorybookContentRoot"})}catch(__react_docgen_typescript_loader_error){}const StorybookContent=Object.assign(StorybookContentRoot,{Dark:createStorybookContentItem({className:"dark bg-space"}),Light:createStorybookContentItem({className:"bg-white"})});try{StorybookContent.displayName="StorybookContent",StorybookContent.__docgenInfo={description:"",displayName:"StorybookContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/descriptor/StorybookContent.tsx#StorybookContent"]={docgenInfo:StorybookContent.__docgenInfo,name:"StorybookContent",path:"src/stories/descriptor/StorybookContent.tsx#StorybookContent"})}catch(__react_docgen_typescript_loader_error){}},"./system/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WR:()=>RootUIGroup_Context.WR,tV:()=>toIntentMatch,i6:()=>toScaleMatch,Tq:()=>useRootUI});var RootUI_Context=__webpack_require__("./system/theme/RootUI.Context.tsx"),RootUIGroup_Context=__webpack_require__("./system/theme/RootUIGroup.Context.tsx"),react=__webpack_require__("../node_modules/react/index.js");function hasScale(scale){return!!scale&&"none"!==scale}function hasIntent(intent){return!!intent&&"none"!==intent}function useRootUI(){let{defaultIntent,defaultScale,intent,scale}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const rootUIGroupValues=(0,RootUIGroup_Context.Rw)(),rootUIValues=(0,RootUI_Context.mt)(),rootScale=react.useMemo((()=>hasScale(scale)?scale:hasScale(rootUIGroupValues.scale)?rootUIGroupValues.scale:hasScale(rootUIValues.scale)?rootUIValues.scale:hasScale(rootUIGroupValues.defaultScale)?rootUIGroupValues.defaultScale:hasScale(rootUIValues.defaultScale)?rootUIValues.defaultScale:defaultScale||"md"),[defaultScale,rootUIGroupValues.defaultScale,rootUIGroupValues.scale,rootUIValues.defaultScale,rootUIValues.scale,scale]);return{intent:react.useMemo((()=>hasIntent(intent)?intent:hasIntent(rootUIGroupValues.intent)?rootUIGroupValues.intent:hasIntent(rootUIValues.intent)?rootUIValues.intent:hasIntent(rootUIGroupValues.defaultIntent)?rootUIGroupValues.defaultIntent:hasIntent(rootUIValues.defaultIntent)?rootUIValues.defaultIntent:defaultIntent||"none"),[defaultIntent,intent,rootUIGroupValues.defaultIntent,rootUIGroupValues.intent,rootUIValues.defaultIntent,rootUIValues.intent]),scale:rootScale}}var esm=__webpack_require__("../node_modules/@fxts/core/dist/esm/index.js");const toMatch=(lookup,key)=>{const callback=lookup[key];return callback?callback():null},toIntentMatch=(0,esm.WA)(((lookup,key)=>{const result=toMatch(lookup,key);return result||""})),toScaleMatch=(0,esm.WA)(((lookup,key)=>{const result=toMatch(lookup,key);return result||""}))},"./system/theme/RootUI.Context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iM:()=>RootUIProvider,mt:()=>useRootUIContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const RootUIContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function RootUIProvider(_ref){let{children,defaultIntent,defaultScale,intent,scale}=_ref;const contextValues=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({defaultIntent,defaultScale,intent,scale})),[intent,defaultIntent,scale,defaultScale]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RootUIContext.Provider,{value:contextValues},children)}function useRootUIContext(){return react__WEBPACK_IMPORTED_MODULE_0__.useContext(RootUIContext)}RootUIContext.displayName="RootUIContext";try{RootUIProvider.displayName="RootUIContext",RootUIProvider.__docgenInfo={description:"",displayName:"RootUIContext",props:{defaultIntent:{defaultValue:null,description:"",name:"defaultIntent",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"none"'}]}},defaultScale:{defaultValue:null,description:"",name:"defaultScale",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"xs"'}]}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"none"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"xs"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/system/theme/RootUI.Context.tsx#RootUIContext"]={docgenInfo:RootUIContext.__docgenInfo,name:"RootUIContext",path:"src/system/theme/RootUI.Context.tsx#RootUIContext"})}catch(__react_docgen_typescript_loader_error){}},"./system/theme/RootUIGroup.Context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Rw:()=>useRootUIGroupContext,WR:()=>RootUIGroupProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const RootUIGroupContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function RootUIGroupProvider(_ref){let{children,defaultIntent,defaultScale,intent,scale}=_ref;const contextValues=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({defaultIntent,defaultScale,intent,scale})),[intent,defaultIntent,scale,defaultScale]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RootUIGroupContext.Provider,{value:contextValues},children)}function useRootUIGroupContext(){return react__WEBPACK_IMPORTED_MODULE_0__.useContext(RootUIGroupContext)}RootUIGroupContext.displayName="RootUIGroupContext";try{RootUIGroupProvider.displayName="RootUIGroupContext",RootUIGroupProvider.__docgenInfo={description:"",displayName:"RootUIGroupContext",props:{defaultIntent:{defaultValue:null,description:"",name:"defaultIntent",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"none"'}]}},defaultScale:{defaultValue:null,description:"",name:"defaultScale",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"xs"'}]}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"none"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"xs"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/system/theme/RootUIGroup.Context.tsx#RootUIGroupContext"]={docgenInfo:RootUIGroupContext.__docgenInfo,name:"RootUIGroupContext",path:"src/system/theme/RootUIGroup.Context.tsx#RootUIGroupContext"})}catch(__react_docgen_typescript_loader_error){}}}]);