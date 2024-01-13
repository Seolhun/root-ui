"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20],{"./components/combinations/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dropdowns:()=>Dropdowns,MultiDropdowns:()=>MultiDropdowns,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_components_atomics__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atomics/index.ts"),_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/index.ts"),_Dropdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/combinations/Dropdown/Dropdown.tsx"),_useDropdownRenderer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/combinations/Dropdown/useDropdownRenderer.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={component:_Dropdown__WEBPACK_IMPORTED_MODULE_3__.L,title:"Combination/Dropdown"},DEFAULT_OPTIONS=Array.from(Array(10),((_,i)=>({avatar:"https://avatars.githubusercontent.com/u/16330024?v=4",value:"value-".concat(i,"_").concat(i,"_").concat(i,"_").concat(i,"_").concat(i,"_").concat(i)}))),DropdownTemplate=_ref=>{let{...others}=_ref;const[selectedOption,setSelectedOption]=react__WEBPACK_IMPORTED_MODULE_0__.useState(DEFAULT_OPTIONS[0]),identify=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((option=>(null==option?void 0:option.value)||""),[]),renderOption=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((option,_state)=>option?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-x-2 truncate"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.qE,{src:option.avatar}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"truncate"},option.value)):null),[]),{optionRenderer,selectedOptionRenderer}=(0,_useDropdownRenderer__WEBPACK_IMPORTED_MODULE_4__.y)({identify,renderOption}),onChangeOption=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextOption=>{nextOption&&setSelectedOption(nextOption)}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__.L,_extends({},others,{onChangeOption,option:selectedOption,placement:"right"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__.L.Button,{className:"min-w-120"},selectedOptionRenderer(selectedOption)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__.L.OptionList,null,DEFAULT_OPTIONS.map((option=>{const{disabled}=option,key=identify(option);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__.L.Option,{disabled,key,value:option},(state=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,optionRenderer(option,state))))}))))},Dropdowns=(props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI.Light,{noAlign:!0,noGap:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownTemplate,props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI.Dark,{noAlign:!0,noGap:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownTemplate,props)))).bind({});Dropdowns.args={};const MultiDropdownTemplate=_ref2=>{let{...others}=_ref2;const[selectedOption,setSelectedOption]=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),identify=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((options=>Array.isArray(options)?options.reduce(((acc,option)=>"".concat(acc,", ").concat(option.value)),""):(null==options?void 0:options.value)||""),[]),renderOption=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((option,_state)=>option?Array.isArray(option)?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-wrap gap-2"},option.map((o=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-x-2 truncate mt-1 mr-2",key:o.value},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.qE,{src:o.avatar}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"truncate"},o.value))))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-x-2 truncate"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atomics__WEBPACK_IMPORTED_MODULE_1__.qE,{src:option.avatar}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"truncate"},option.value)):null),[]),onChangeOption=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextOption=>{nextOption&&setSelectedOption(nextOption)}),[]),{optionRenderer,selectedOptionRenderer}=(0,_useDropdownRenderer__WEBPACK_IMPORTED_MODULE_4__.y)({identify,renderOption});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__.L,_extends({},others,{onChangeOption,option:selectedOption}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__.L.Button,{className:"min-w-120"},selectedOptionRenderer(selectedOption)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__.L.OptionList,null,DEFAULT_OPTIONS.map((option=>{const{disabled}=option,key=identify(option);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__.L.Option,{disabled,key,value:option},(state=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,optionRenderer(option,state))))}))))},MultiDropdowns=(props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI.Light,{noAlign:!0,noGap:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MultiDropdownTemplate,props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stories__WEBPACK_IMPORTED_MODULE_2__.fI.Dark,{noAlign:!0,noGap:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MultiDropdownTemplate,props)))).bind({});MultiDropdowns.args={multiple:!0};const __namedExportsOrder=["Dropdowns","MultiDropdowns"]},"./components/combinations/Dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Dropdown});const Dropdown=__webpack_require__("./components/combinations/Dropdown/widgets/index.ts").l;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{disabled:{defaultValue:null,description:"Dropdown disabled state",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Could be multi select",name:"multiple",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"5"},description:"Dropdown floating offset",name:"offset",required:!1,type:{name:"number"}},onChangeOption:{defaultValue:null,description:"Change option handler",name:"onChangeOption",required:!0,type:{name:"(option: Optional<ActionOption>) => void"}},option:{defaultValue:null,description:"Selected option",name:"option",required:!0,type:{name:"Optional<ActionOption>"}},placement:{defaultValue:null,description:"Dropdown floating placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom-start"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-end"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},strategy:{defaultValue:null,description:"Dropdown floating strategy",name:"strategy",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/combinations/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./components/combinations/Dropdown/useDropdownRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useDropdownRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const useDropdownRenderer=_ref=>{let{identify,renderOption,renderSelectedOption}=_ref;return{optionRenderer:react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((option,state)=>renderOption?renderOption(option,state):identify(option)),[identify,renderOption]),selectedOptionRenderer:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((option=>{if(option){if(renderSelectedOption)return renderSelectedOption(option);if(renderOption)return renderOption(option)}return identify(option)}),[identify,renderOption,renderSelectedOption])}};try{useDropdownRenderer.displayName="useDropdownRenderer",useDropdownRenderer.__docgenInfo={description:"",displayName:"useDropdownRenderer",props:{identify:{defaultValue:null,description:"To Identify option uniqueness",name:"identify",required:!0,type:{name:"DropdownIdentifyFunction<Option, ActionOption>"}},renderOption:{defaultValue:null,description:"To render option",name:"renderOption",required:!1,type:{name:"DropdownRenderOptionFunction<Option, ActionOption>"}},renderSelectedOption:{defaultValue:null,description:"To render selected option\nif this value is empty, used first renderOption. and then raw option",name:"renderSelectedOption",required:!1,type:{name:"DropdownRenderSelectedOptionFunction<Option, ActionOption>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Dropdown/useDropdownRenderer.tsx#useDropdownRenderer"]={docgenInfo:useDropdownRenderer.__docgenInfo,name:"useDropdownRenderer",path:"src/components/combinations/Dropdown/useDropdownRenderer.tsx#useDropdownRenderer"})}catch(__react_docgen_typescript_loader_error){}},"./components/combinations/Dropdown/widgets/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>DropdownWidget});var listbox=__webpack_require__("../node_modules/@headlessui/react/dist/components/listbox/listbox.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("../node_modules/react/index.js");const BaseItem=(0,clsx_m.Z)("flex flex-1 items-center","w-full min-h-20","py-2 px-4","cursor-pointer");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const DropdownWidgetButton=react.forwardRef(((_ref,ref)=>{let{children,className,...others}=_ref;return react.createElement(listbox.R.Button,_extends({},others,{className:state=>{const{disabled}=state;return(0,clsx_m.Z)("function"==typeof className?className(state):className,BaseItem,"relative","text-space-1 dark:text-cream-1","bg-cream-1 dark:bg-space-1","shadow rounded",{"bg-neutral-1 dark:bg-neutral2-1 opacity-70 cursor-not-allowed":disabled})},ref}),children)}));try{DropdownWidgetButton.displayName="DropdownWidgetButton",DropdownWidgetButton.__docgenInfo={description:"",displayName:"DropdownWidgetButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"DropdownWidgetButtonClassName"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Dropdown/widgets/Dropdown.Widget.Button.tsx#DropdownWidgetButton"]={docgenInfo:DropdownWidgetButton.__docgenInfo,name:"DropdownWidgetButton",path:"src/components/combinations/Dropdown/widgets/Dropdown.Widget.Button.tsx#DropdownWidgetButton"})}catch(__react_docgen_typescript_loader_error){}const DropdownWidgetOption=react.forwardRef(((_ref,ref)=>{let{children,className,disabled,value}=_ref;return react.createElement(listbox.R.Option,{className:state=>{const{active,disabled,selected}=state;return(0,clsx_m.Z)(className,BaseItem,{"bg-neutral-1 dark:bg-neutral2-1 text-space-1 dark:text-cream-1":active&&!selected,"bg-primary dark:bg-primary2 text-cream-1 dark:text-cream-1":selected},disabled?"bg-neutral dark:bg-neutral2 opacity-70 cursor-not-allowed":"cursor-pointer")},disabled,ref,value},(state=>react.createElement(react.Fragment,null,children(state))))}));try{DropdownWidgetOption.displayName="DropdownWidgetOption",DropdownWidgetOption.__docgenInfo={description:"",displayName:"DropdownWidgetOption",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"DropdownWidgetOptionClassName"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"DropdownOption"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Dropdown/widgets/Dropdown.Widget.Option.tsx#DropdownWidgetOption"]={docgenInfo:DropdownWidgetOption.__docgenInfo,name:"DropdownWidgetOption",path:"src/components/combinations/Dropdown/widgets/Dropdown.Widget.Option.tsx#DropdownWidgetOption"})}catch(__react_docgen_typescript_loader_error){}var transition=__webpack_require__("../node_modules/@headlessui/react/dist/components/transitions/transition.js");function Dropdown_Widget_OptionList_extends(){return Dropdown_Widget_OptionList_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Dropdown_Widget_OptionList_extends.apply(this,arguments)}const DropdownWidgetOptionList=react.forwardRef(((_ref,ref)=>{let{children,className,...others}=_ref;return react.createElement(transition.u,{as:react.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0"},react.createElement(listbox.R.Options,Dropdown_Widget_OptionList_extends({},others,{className:(0,clsx_m.Z)(className,"absolute","flex flex-1 flex-col","w-full","bg-cream-1 dark:bg-space-1","text-space-1 dark:text-cream-1","shadow rounded","overflow-y-auto overflow-x-hidden","focus:outline-none","list-none"),ref}),children))}));try{DropdownWidgetOptionList.displayName="DropdownWidgetOptionList",DropdownWidgetOptionList.__docgenInfo={description:"",displayName:"DropdownWidgetOptionList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Dropdown/widgets/Dropdown.Widget.OptionList.tsx#DropdownWidgetOptionList"]={docgenInfo:DropdownWidgetOptionList.__docgenInfo,name:"DropdownWidgetOptionList",path:"src/components/combinations/Dropdown/widgets/Dropdown.Widget.OptionList.tsx#DropdownWidgetOptionList"})}catch(__react_docgen_typescript_loader_error){}function Dropdown_Widget_Root_extends(){return Dropdown_Widget_Root_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Dropdown_Widget_Root_extends.apply(this,arguments)}function DropdownWidgetRoot(_ref){let{children,className,disabled,multiple,offset=5,onChangeOption,option,placement,strategy,...others}=_ref;return react.createElement(listbox.R,{disabled,multiple,onChange:onChangeOption,value:option},react.createElement("div",Dropdown_Widget_Root_extends({},others,{className:(0,clsx_m.Z)(className,"relative")}),children))}try{DropdownWidgetRoot.displayName="DropdownWidgetRoot",DropdownWidgetRoot.__docgenInfo={description:"",displayName:"DropdownWidgetRoot",props:{disabled:{defaultValue:null,description:"Dropdown disabled state",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Could be multi select",name:"multiple",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"5"},description:"Dropdown floating offset",name:"offset",required:!1,type:{name:"number"}},onChangeOption:{defaultValue:null,description:"Change option handler",name:"onChangeOption",required:!0,type:{name:"(option: Optional<ActionOption>) => void"}},option:{defaultValue:null,description:"Selected option",name:"option",required:!0,type:{name:"Optional<ActionOption>"}},placement:{defaultValue:null,description:"Dropdown floating placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom-start"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-end"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},strategy:{defaultValue:null,description:"Dropdown floating strategy",name:"strategy",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Dropdown/widgets/Dropdown.Widget.Root.tsx#DropdownWidgetRoot"]={docgenInfo:DropdownWidgetRoot.__docgenInfo,name:"DropdownWidgetRoot",path:"src/components/combinations/Dropdown/widgets/Dropdown.Widget.Root.tsx#DropdownWidgetRoot"})}catch(__react_docgen_typescript_loader_error){}const DropdownWidget=Object.assign(DropdownWidgetRoot,{Button:DropdownWidgetButton,Option:DropdownWidgetOption,OptionList:DropdownWidgetOptionList});try{DropdownWidget.displayName="DropdownWidget",DropdownWidget.__docgenInfo={description:"",displayName:"DropdownWidget",props:{disabled:{defaultValue:null,description:"Dropdown disabled state",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Could be multi select",name:"multiple",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"5"},description:"Dropdown floating offset",name:"offset",required:!1,type:{name:"number"}},onChangeOption:{defaultValue:null,description:"Change option handler",name:"onChangeOption",required:!0,type:{name:"(option: Optional<ActionOption>) => void"}},option:{defaultValue:null,description:"Selected option",name:"option",required:!0,type:{name:"Optional<ActionOption>"}},placement:{defaultValue:null,description:"Dropdown floating placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom-start"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom-end"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},strategy:{defaultValue:null,description:"Dropdown floating strategy",name:"strategy",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/combinations/Dropdown/widgets/Dropdown.Widget.tsx#DropdownWidget"]={docgenInfo:DropdownWidget.__docgenInfo,name:"DropdownWidget",path:"src/components/combinations/Dropdown/widgets/Dropdown.Widget.tsx#DropdownWidget"})}catch(__react_docgen_typescript_loader_error){}}}]);