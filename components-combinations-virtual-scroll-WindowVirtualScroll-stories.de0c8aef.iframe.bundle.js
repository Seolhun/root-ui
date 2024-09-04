"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8681],{"./components/combinations/virtual-scroll/WindowVirtualScroll.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>WindowVirtualScroll_stories});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),esm=__webpack_require__("../../../node_modules/.pnpm/@tanstack+react-virtual@3.8.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tanstack/react-virtual/dist/esm/index.js"),hooks=__webpack_require__("./hooks/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DEFAULT_OPTIONS={estimateSize:()=>36,overscan:5},WindowVirtualScroll=react.forwardRef(((_ref,ref)=>{let{children,height,virtualOptions,...others}=_ref;const parentRef=react.useRef(null),mergedRefs=(0,hooks.SV)(parentRef,ref),virtualizer=(0,esm.XW)({...DEFAULT_OPTIONS,...virtualOptions,scrollMargin:parentRef.current?.offsetTop??0}),items=virtualizer.getVirtualItems();return react.createElement("div",_extends({},others,{style:{height:`${virtualizer.getTotalSize()}px`,position:"relative",width:"100%"},ref:mergedRefs}),items.map((item=>react.createElement("div",{style:{height:`${item.size}px`,left:0,position:"absolute",top:0,transform:`translate3d(0, ${item.start-virtualizer.options.scrollMargin}px, 0)`,width:"100%"},key:item.key},children({item,virtualizer})))))}));try{WindowVirtualScroll.displayName="WindowVirtualScroll",WindowVirtualScroll.__docgenInfo={description:"",displayName:"WindowVirtualScroll",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},virtualOptions:{defaultValue:null,description:"",name:"virtualOptions",required:!0,type:{name:"VirtualizerScrollOptions<Window, HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/virtual-scroll/WindowVirtualScroll.tsx#WindowVirtualScroll"]={docgenInfo:WindowVirtualScroll.__docgenInfo,name:"WindowVirtualScroll",path:"src/components/combinations/virtual-scroll/WindowVirtualScroll.tsx#WindowVirtualScroll"})}catch(__react_docgen_typescript_loader_error){}const children=_ref=>{let{item}=_ref;const text=`Item ${item.key}`;return react.createElement("div",{style:{border:"1px solid black",height:"100%"}},text)},Primary={args:{children,height:600,virtualOptions:{count:1e3,overscan:5}}},WindowVirtualScroll_stories={component:args=>react.createElement("div",null,react.createElement("div",{style:{height:"300px"}},"Hello"),react.createElement(WindowVirtualScroll,args,children)),title:"Combination/WindowVirtualScroll"};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children,\n    height: 600,\n    virtualOptions: {\n      count: 1000,\n      overscan: 5\n    }\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);