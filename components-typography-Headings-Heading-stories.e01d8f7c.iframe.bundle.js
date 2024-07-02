"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[580],{"./components/typography/Headings/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Headings:()=>Headings,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/index.ts"),_H1__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/typography/Headings/H1.tsx"),_H2__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/typography/Headings/H2.tsx"),_H3__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/typography/Headings/H3.tsx"),_H4__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/typography/Headings/H4.tsx"),_H5__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./components/typography/Headings/H5.tsx"),_H6__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./components/typography/Headings/H6.tsx"),_Heading__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./components/typography/Headings/Heading.tsx");const BaseTemplate=_ref=>{let{children,...others}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_H1__WEBPACK_IMPORTED_MODULE_2__.H1,others,children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_H2__WEBPACK_IMPORTED_MODULE_3__.H2,others,children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_H3__WEBPACK_IMPORTED_MODULE_4__.H3,others,children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_H4__WEBPACK_IMPORTED_MODULE_5__.H4,others,children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_H5__WEBPACK_IMPORTED_MODULE_6__.H5,others,children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_H6__WEBPACK_IMPORTED_MODULE_7__.H6,others,children))},Headings={args:{className:"text-space-1 dark:text-cream-1",children:"Heading is for title"},render:_ref2=>{let{children,...others}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_1__.EB,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_1__.EB.Light,{className:"flex flex-col space-y-2",noAlign:!0,noGap:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,others,children)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_1__.EB.Dark,{className:"flex flex-col space-y-2",noAlign:!0,noGap:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseTemplate,others,children)))}},__WEBPACK_DEFAULT_EXPORT__={component:_Heading__WEBPACK_IMPORTED_MODULE_8__.D,parameters:{controls:{expanded:!0}},title:"TypoGraphy/Heading"};Headings.parameters={...Headings.parameters,docs:{...Headings.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'text-space-1 dark:text-cream-1',\n    children: 'Heading is for title'\n  },\n  render: HeadingsTemplate\n}",...Headings.parameters?.docs?.source}}};const __namedExportsOrder=["Headings"]},"./components/common/box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./core/index.ts"),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./hooks/index.ts");const Box=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Box(_ref,ref){let{className,intentClassName,scaleClassName,...others}=_ref;const id=`Root__Box-${(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.Bi)()}`,rootRef=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.P$)(ref),ourProps=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({id,ref:rootRef})),[rootRef,id]);return(0,_core__WEBPACK_IMPORTED_MODULE_1__.XX)({defaultTag:"div",name:"Root__Box",ourProps,slot:{},theirProps:{...others,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.A)(scaleClassName,intentClassName,className)}})}))},"./components/common/box/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.a});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/common/box/Box.tsx")},"./components/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_box__WEBPACK_IMPORTED_MODULE_0__.a});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/common/box/index.ts")},"./components/typography/Headings/H1.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>H1});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/typography/Headings/Heading.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const H1=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,...others}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Heading__WEBPACK_IMPORTED_MODULE_1__.D,_extends({},others,{as:"h1",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("Root__H1",className,"mt-0 mb-3"),ref}),children)}));try{H1.displayName="H1",H1.__docgenInfo={description:"",displayName:"H1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Headings/H1.tsx#H1"]={docgenInfo:H1.__docgenInfo,name:"H1",path:"src/components/typography/Headings/H1.tsx#H1"})}catch(__react_docgen_typescript_loader_error){}},"./components/typography/Headings/H2.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H2:()=>H2});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/typography/Headings/Heading.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const H2=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,...others}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Heading__WEBPACK_IMPORTED_MODULE_1__.D,_extends({},others,{as:"h2",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("Root__H2",className,"mt-1 mb-2"),ref}),children)}));try{H2.displayName="H2",H2.__docgenInfo={description:"",displayName:"H2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Headings/H2.tsx#H2"]={docgenInfo:H2.__docgenInfo,name:"H2",path:"src/components/typography/Headings/H2.tsx#H2"})}catch(__react_docgen_typescript_loader_error){}},"./components/typography/Headings/H3.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H3:()=>H3});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/typography/Headings/Heading.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const H3=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,...others}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Heading__WEBPACK_IMPORTED_MODULE_1__.D,_extends({},others,{as:"h3",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("Root__H3",className,"mt-1 mb-2"),ref}),children)}));try{H3.displayName="H3",H3.__docgenInfo={description:"",displayName:"H3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Headings/H3.tsx#H3"]={docgenInfo:H3.__docgenInfo,name:"H3",path:"src/components/typography/Headings/H3.tsx#H3"})}catch(__react_docgen_typescript_loader_error){}},"./components/typography/Headings/H4.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H4:()=>H4});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/typography/Headings/Heading.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const H4=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,...others}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Heading__WEBPACK_IMPORTED_MODULE_1__.D,_extends({},others,{as:"h4",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("Root__H4",className,"mt-1 mb-2"),ref}),children)}));try{H4.displayName="H4",H4.__docgenInfo={description:"",displayName:"H4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Headings/H4.tsx#H4"]={docgenInfo:H4.__docgenInfo,name:"H4",path:"src/components/typography/Headings/H4.tsx#H4"})}catch(__react_docgen_typescript_loader_error){}},"./components/typography/Headings/H5.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H5:()=>H5});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/typography/Headings/Heading.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const H5=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,...others}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Heading__WEBPACK_IMPORTED_MODULE_1__.D,_extends({},others,{as:"h5",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("Root__H5",className,"mt-1 mb-2"),ref}),children)}));try{H5.displayName="H5",H5.__docgenInfo={description:"",displayName:"H5",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Headings/H5.tsx#H5"]={docgenInfo:H5.__docgenInfo,name:"H5",path:"src/components/typography/Headings/H5.tsx#H5"})}catch(__react_docgen_typescript_loader_error){}},"./components/typography/Headings/H6.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H6:()=>H6});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/typography/Headings/Heading.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const H6=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,...others}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Heading__WEBPACK_IMPORTED_MODULE_1__.D,_extends({},others,{as:"h6",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("Root__H6",className,"mt-1 mb-2"),ref}),children)}));try{H6.displayName="H6",H6.__docgenInfo={description:"",displayName:"H6",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Headings/H6.tsx#H6"]={docgenInfo:H6.__docgenInfo,name:"H6",path:"src/components/typography/Headings/H6.tsx#H6"})}catch(__react_docgen_typescript_loader_error){}},"./components/typography/Headings/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Heading});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_components_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/common/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Heading=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,as,children,...others}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common__WEBPACK_IMPORTED_MODULE_1__.a,_extends({},others,{as,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("Root__Heading",className),ref}),children)}));try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"form"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"option"'},{value:'"search"'},{value:'"switch"'},{value:'"table"'},{value:'"text"'},{value:'"time"'},{value:'"select"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/Headings/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/typography/Headings/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./core/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ac:()=>RenderFeatures,FX:()=>forwardRefWithAs,XX:()=>render});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function forwardRefWithAs(component){return Object.assign(react.forwardRef(component),{displayName:component.displayName??component.name})}var utils=__webpack_require__("./utils/index.ts");function mergeProps(){for(var _len=arguments.length,listOfProps=new Array(_len),_key=0;_key<_len;_key++)listOfProps[_key]=arguments[_key];if(0===listOfProps.length)return{};if(1===listOfProps.length)return listOfProps[0];const target={},eventHandlers={};for(const props of listOfProps)for(const prop in props)prop.startsWith("on")&&(0,utils.Tn)(props[prop])?(eventHandlers[prop]??=[],eventHandlers[prop].push(props[prop])):target[prop]=props[prop];if(target.disabled||target["aria-disabled"])return Object.assign(target,Object.fromEntries(Object.keys(eventHandlers).map((eventName=>[eventName,void 0]))));for(const eventName in eventHandlers)Object.assign(target,{[eventName](event){const handlers=eventHandlers[eventName];for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];for(const handler of handlers){if((event instanceof Event||event?.nativeEvent instanceof Event)&&event.defaultPrevented)return;handler(event,...args)}}});return target}var omit=__webpack_require__("../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js"),constants=__webpack_require__("./constants/index.ts");let RenderFeatures=function(RenderFeatures){return RenderFeatures[RenderFeatures.None=0]="None",RenderFeatures[RenderFeatures.RenderStrategy=1]="RenderStrategy",RenderFeatures[RenderFeatures.Static=2]="Static",RenderFeatures}({}),RootRenderStrategyEnum=function(RootRenderStrategyEnum){return RootRenderStrategyEnum[RootRenderStrategyEnum.Unmount=0]="Unmount",RootRenderStrategyEnum[RootRenderStrategyEnum.Hidden=1]="Hidden",RootRenderStrategyEnum}({});function privateRender(props){let slot=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},tag=arguments.length>2?arguments[2]:void 0,name=arguments.length>3?arguments[3]:void 0;const{as:Component=tag,children,refName="ref",...others}=(0,omit.A)(props,["unmount","static"]),refRelatedProps=(0,utils.b0)(props.ref)?{}:{[refName]:props.ref},resolvedChildren=(0,utils.Tn)(children)?children(slot):children;others.className&&(0,utils.Tn)(others.className)&&(others.className=others.className(slot));const dataAttributes={};if(slot){let exposeState=!1;const states=[];for(const[k,v]of Object.entries(slot))"boolean"==typeof v&&(exposeState=!0),!0===v&&states.push(k);exposeState&&(dataAttributes[constants.yC.State]=states.join(" "))}if(Component===react.Fragment&&Object.keys((0,utils.oE)(others)).length>0){if(!react.isValidElement(resolvedChildren)||!(0,utils.Im)(resolvedChildren))throw new Error(['Passing props on "Fragment"!',"",`The current component <${name} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(others).map((line=>`  - ${line}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((line=>`  - ${line}`)).join("\n")].join("\n"));return react.cloneElement(resolvedChildren,Object.assign({},mergeProps(resolvedChildren.props,(0,utils.oE)((0,omit.A)(others,["ref"]))),dataAttributes,refRelatedProps))}return react.createElement(Component,Object.assign({},(0,omit.A)(others,["ref"]),Component!==react.Fragment&&refRelatedProps,Component!==react.Fragment&&dataAttributes),resolvedChildren)}function render(_ref){let{defaultTag,features,name,ourProps,slot,theirProps,visible=!0}=_ref;const props=mergeProps(theirProps,ourProps);if(visible)return privateRender(props,slot,defaultTag,name);const featureFlags=features??RenderFeatures.None;if(featureFlags&RenderFeatures.Static){const{static:isStatic=!1,...others}=props;if(isStatic)return privateRender(others,slot,defaultTag,name)}if(featureFlags&RenderFeatures.RenderStrategy){const{unmount=!0,...others}=props,strategy=unmount?RootRenderStrategyEnum.Unmount:RootRenderStrategyEnum.Hidden;return(0,utils.YW)(strategy,{[RootRenderStrategyEnum.Hidden]:()=>privateRender({...others,hidden:!0,style:{display:"none"}},slot,defaultTag,name),[RootRenderStrategyEnum.Unmount]:()=>null})}return privateRender(props,slot,defaultTag,name)}},"./stories/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EB:()=>StorybookContent,UU:()=>storiesIntentOptions,AY:()=>storiesPlacements,cG:()=>storiesScaleOptions});const storiesScaleOptions=["xs","sm","md","lg","xl"],storiesIntentOptions=["primary","info","success","accent","warning","danger","neutral"],storiesPlacements=["top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","top","bottom","right","left"];var clsx_m=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StorybookContentItem=_ref=>{let{className,children,noAlign,noGap,...others}=_ref;const[root,setRoot]=react.useState(null);return react.createElement("div",_extends({},others,{className:(0,clsx_m.A)(className,"StorybookContentItem","relative","flex flex-1 ","min-h-full",{"gap-4":!noGap,"items-center justify-center":!noAlign}),ref:setRoot}),(args={root},"function"==typeof children?children(args):children));var args},createStorybookContentItem=hocProps=>_ref2=>{let{className,children,...others}=_ref2;return react.createElement(StorybookContentItem,_extends({},hocProps,others,{className:(0,clsx_m.A)(hocProps.className,className)}),children)};try{StorybookContentItem.displayName="StorybookContentItem",StorybookContentItem.__docgenInfo={description:"",displayName:"StorybookContentItem",props:{noAlign:{defaultValue:null,description:"",name:"noAlign",required:!1,type:{name:"boolean"}},noGap:{defaultValue:null,description:"",name:"noGap",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/descriptor/StorybookContent.Item.tsx#StorybookContentItem"]={docgenInfo:StorybookContentItem.__docgenInfo,name:"StorybookContentItem",path:"src/stories/descriptor/StorybookContent.Item.tsx#StorybookContentItem"})}catch(__react_docgen_typescript_loader_error){}try{createStorybookContentItem.displayName="createStorybookContentItem",createStorybookContentItem.__docgenInfo={description:"",displayName:"createStorybookContentItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/descriptor/StorybookContent.Item.tsx#createStorybookContentItem"]={docgenInfo:createStorybookContentItem.__docgenInfo,name:"createStorybookContentItem",path:"src/stories/descriptor/StorybookContent.Item.tsx#createStorybookContentItem"})}catch(__react_docgen_typescript_loader_error){}function StorybookContent_Root_extends(){return StorybookContent_Root_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},StorybookContent_Root_extends.apply(null,arguments)}const StorybookContentRoot=react.forwardRef(((_ref,ref)=>{let{className,children,...others}=_ref;return react.createElement("div",StorybookContent_Root_extends({},others,{className:(0,clsx_m.A)(className,"flex w-full h-full min-h-screen"),ref}),children)}));try{StorybookContentRoot.displayName="StorybookContentRoot",StorybookContentRoot.__docgenInfo={description:"",displayName:"StorybookContentRoot",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/descriptor/StorybookContent.Root.tsx#StorybookContentRoot"]={docgenInfo:StorybookContentRoot.__docgenInfo,name:"StorybookContentRoot",path:"src/stories/descriptor/StorybookContent.Root.tsx#StorybookContentRoot"})}catch(__react_docgen_typescript_loader_error){}const StorybookContent=Object.assign(StorybookContentRoot,{Dark:createStorybookContentItem({className:"dark bg-space"}),Light:createStorybookContentItem({className:"bg-cream"})});try{StorybookContent.displayName="StorybookContent",StorybookContent.__docgenInfo={description:"",displayName:"StorybookContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/descriptor/StorybookContent.tsx#StorybookContent"]={docgenInfo:StorybookContent.__docgenInfo,name:"StorybookContent",path:"src/stories/descriptor/StorybookContent.tsx#StorybookContent"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);