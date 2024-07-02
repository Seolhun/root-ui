"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[982],{"../../../node_modules/.pnpm/@tanstack+react-virtual@3.8.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tanstack/react-virtual/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Te:()=>useVirtualizer,XW:()=>useWindowVirtualizer});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),react_dom=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");function memo(getDeps,fn,opts){let result,deps=opts.initialDeps??[];return()=>{var _a,_b,_c,_d;let depTime;opts.key&&(null==(_a=opts.debug)?void 0:_a.call(opts))&&(depTime=Date.now());const newDeps=getDeps();if(!(newDeps.length!==deps.length||newDeps.some(((dep,index)=>deps[index]!==dep))))return result;let resultTime;if(deps=newDeps,opts.key&&(null==(_b=opts.debug)?void 0:_b.call(opts))&&(resultTime=Date.now()),result=fn(...newDeps),opts.key&&(null==(_c=opts.debug)?void 0:_c.call(opts))){const depEndTime=Math.round(100*(Date.now()-depTime))/100,resultEndTime=Math.round(100*(Date.now()-resultTime))/100,resultFpsPercentage=resultEndTime/16,pad=(str,num)=>{for(str=String(str);str.length<num;)str=" "+str;return str};console.info(`%c⏱ ${pad(resultEndTime,5)} /${pad(depEndTime,5)} ms`,`\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0,Math.min(120-120*resultFpsPercentage,120))}deg 100% 31%);`,null==opts?void 0:opts.key)}return null==(_d=null==opts?void 0:opts.onChange)||_d.call(opts,result),result}}function notUndefined(value,msg){if(void 0===value)throw new Error("Unexpected undefined"+(msg?`: ${msg}`:""));return value}const debounce=(targetWindow,fn,ms)=>{let timeoutId;return function(...args){targetWindow.clearTimeout(timeoutId),timeoutId=targetWindow.setTimeout((()=>fn.apply(this,args)),ms)}},defaultKeyExtractor=index=>index,defaultRangeExtractor=range=>{const start=Math.max(range.startIndex-range.overscan,0),end=Math.min(range.endIndex+range.overscan,range.count-1),arr=[];for(let i=start;i<=end;i++)arr.push(i);return arr},observeElementRect=(instance,cb)=>{const element=instance.scrollElement;if(!element)return;const targetWindow=instance.targetWindow;if(!targetWindow)return;const handler=rect=>{const{width,height}=rect;cb({width:Math.round(width),height:Math.round(height)})};if(handler(element.getBoundingClientRect()),!targetWindow.ResizeObserver)return()=>{};const observer=new targetWindow.ResizeObserver((entries=>{const entry=entries[0];if(null==entry?void 0:entry.borderBoxSize){const box=entry.borderBoxSize[0];if(box)return void handler({width:box.inlineSize,height:box.blockSize})}handler(element.getBoundingClientRect())}));return observer.observe(element,{box:"border-box"}),()=>{observer.unobserve(element)}},addEventListenerOptions={passive:!0},observeWindowRect=(instance,cb)=>{const element=instance.scrollElement;if(!element)return;const handler=()=>{cb({width:element.innerWidth,height:element.innerHeight})};return handler(),element.addEventListener("resize",handler,addEventListenerOptions),()=>{element.removeEventListener("resize",handler)}},supportsScrollend="undefined"==typeof window||"onscrollend"in window,observeElementOffset=(instance,cb)=>{const element=instance.scrollElement;if(!element)return;const targetWindow=instance.targetWindow;if(!targetWindow)return;let offset=0;const fallback=supportsScrollend?()=>{}:debounce(targetWindow,(()=>{cb(offset,!1)}),instance.options.isScrollingResetDelay),createHandler=isScrolling=>()=>{offset=element[instance.options.horizontal?"scrollLeft":"scrollTop"],fallback(),cb(offset,isScrolling)},handler=createHandler(!0),endHandler=createHandler(!1);return endHandler(),element.addEventListener("scroll",handler,addEventListenerOptions),element.addEventListener("scrollend",endHandler,addEventListenerOptions),()=>{element.removeEventListener("scroll",handler),element.removeEventListener("scrollend",endHandler)}},observeWindowOffset=(instance,cb)=>{const element=instance.scrollElement;if(!element)return;const targetWindow=instance.targetWindow;if(!targetWindow)return;let offset=0;const fallback=supportsScrollend?()=>{}:debounce(targetWindow,(()=>{cb(offset,!1)}),instance.options.isScrollingResetDelay),createHandler=isScrolling=>()=>{offset=element[instance.options.horizontal?"scrollX":"scrollY"],fallback(),cb(offset,isScrolling)},handler=createHandler(!0),endHandler=createHandler(!1);return endHandler(),element.addEventListener("scroll",handler,addEventListenerOptions),element.addEventListener("scrollend",endHandler,addEventListenerOptions),()=>{element.removeEventListener("scroll",handler),element.removeEventListener("scrollend",endHandler)}},measureElement=(element,entry,instance)=>{if(null==entry?void 0:entry.borderBoxSize){const box=entry.borderBoxSize[0];if(box){return Math.round(box[instance.options.horizontal?"inlineSize":"blockSize"])}}return Math.round(element.getBoundingClientRect()[instance.options.horizontal?"width":"height"])},windowScroll=(offset,{adjustments=0,behavior},instance)=>{var _a,_b;const toOffset=offset+adjustments;null==(_b=null==(_a=instance.scrollElement)?void 0:_a.scrollTo)||_b.call(_a,{[instance.options.horizontal?"left":"top"]:toOffset,behavior})},elementScroll=(offset,{adjustments=0,behavior},instance)=>{var _a,_b;const toOffset=offset+adjustments;null==(_b=null==(_a=instance.scrollElement)?void 0:_a.scrollTo)||_b.call(_a,{[instance.options.horizontal?"left":"top"]:toOffset,behavior})};class Virtualizer{constructor(opts){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let _ro=null;const get=()=>_ro||(this.targetWindow&&this.targetWindow.ResizeObserver?_ro=new this.targetWindow.ResizeObserver((entries=>{entries.forEach((entry=>{this._measureElement(entry.target,entry)}))})):null);return{disconnect:()=>{var _a;return null==(_a=get())?void 0:_a.disconnect()},observe:target=>{var _a;return null==(_a=get())?void 0:_a.observe(target,{box:"border-box"})},unobserve:target=>{var _a;return null==(_a=get())?void 0:_a.unobserve(target)}}})(),this.range=null,this.setOptions=opts2=>{Object.entries(opts2).forEach((([key,value])=>{void 0===value&&delete opts2[key]})),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:defaultKeyExtractor,rangeExtractor:defaultRangeExtractor,onChange:()=>{},measureElement,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,...opts2}},this.notify=(force,sync)=>{var _a,_b;const{startIndex,endIndex}=this.range??{startIndex:void 0,endIndex:void 0},range=this.calculateRange();(force||startIndex!==(null==range?void 0:range.startIndex)||endIndex!==(null==range?void 0:range.endIndex))&&(null==(_b=(_a=this.options).onChange)||_b.call(_a,this,sync))},this.cleanup=()=>{this.unsubs.filter(Boolean).forEach((d=>d())),this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.observer.disconnect(),this.elementsCache.clear()},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var _a;const scrollElement=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==scrollElement){if(this.cleanup(),!scrollElement)return void this.notify(!1,!1);this.scrollElement=scrollElement,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(_a=this.scrollElement)?void 0:_a.window)??null,this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,(rect=>{this.scrollRect=rect,this.notify(!1,!1)}))),this.unsubs.push(this.options.observeElementOffset(this,((offset,isScrolling)=>{this.scrollAdjustments=0,this.scrollDirection=isScrolling?this.getScrollOffset()<offset?"forward":"backward":null,this.scrollOffset=offset;const prevIsScrolling=this.isScrolling;this.isScrolling=isScrolling,this.notify(prevIsScrolling!==isScrolling,isScrolling)})))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(measurements,index)=>{const furthestMeasurementsFound=new Map,furthestMeasurements=new Map;for(let m=index-1;m>=0;m--){const measurement=measurements[m];if(furthestMeasurementsFound.has(measurement.lane))continue;const previousFurthestMeasurement=furthestMeasurements.get(measurement.lane);if(null==previousFurthestMeasurement||measurement.end>previousFurthestMeasurement.end?furthestMeasurements.set(measurement.lane,measurement):measurement.end<previousFurthestMeasurement.end&&furthestMeasurementsFound.set(measurement.lane,!0),furthestMeasurementsFound.size===this.options.lanes)break}return furthestMeasurements.size===this.options.lanes?Array.from(furthestMeasurements.values()).sort(((a,b)=>a.end===b.end?a.index-b.index:a.end-b.end))[0]:void 0},this.getMeasurementOptions=memo((()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled]),((count,paddingStart,scrollMargin,getItemKey,enabled)=>(this.pendingMeasuredCacheIndexes=[],{count,paddingStart,scrollMargin,getItemKey,enabled})),{key:!1}),this.getMeasurements=memo((()=>[this.getMeasurementOptions(),this.itemSizeCache]),(({count,paddingStart,scrollMargin,getItemKey,enabled},itemSizeCache)=>{var _a;if(!enabled)return this.measurementsCache=[],this.itemSizeCache.clear(),[];0===this.measurementsCache.length&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach((item=>{this.itemSizeCache.set(item.key,item.size)})));const min=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const measurements=this.measurementsCache.slice(0,min);for(let i=min;i<count;i++){let measureElement2=null==(_a=this.measurementsCache[i])?void 0:_a.measureElement;measureElement2||(measureElement2=node=>{const key2=getItemKey(i),prevNode=this.elementsCache.get(key2);node?(prevNode!==node&&(prevNode&&this.observer.unobserve(prevNode),this.observer.observe(node),this.elementsCache.set(key2,node)),node.isConnected&&this.resizeItem(i,this.options.measureElement(node,void 0,this))):prevNode&&(this.observer.unobserve(prevNode),this.elementsCache.delete(key2))});const key=getItemKey(i),furthestMeasurement=1===this.options.lanes?measurements[i-1]:this.getFurthestMeasurement(measurements,i),start=furthestMeasurement?furthestMeasurement.end+this.options.gap:paddingStart+scrollMargin,measuredSize=itemSizeCache.get(key),size="number"==typeof measuredSize?measuredSize:this.options.estimateSize(i),end=start+size,lane=furthestMeasurement?furthestMeasurement.lane:i%this.options.lanes;measurements[i]={index:i,start,size,end,key,lane,measureElement:measureElement2}}return this.measurementsCache=measurements,measurements}),{key:!1,debug:()=>this.options.debug}),this.calculateRange=memo((()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()]),((measurements,outerSize,scrollOffset)=>this.range=measurements.length>0&&outerSize>0?function calculateRange({measurements,outerSize,scrollOffset}){const count=measurements.length-1,getOffset=index=>measurements[index].start,startIndex=findNearestBinarySearch(0,count,getOffset,scrollOffset);let endIndex=startIndex;for(;endIndex<count&&measurements[endIndex].end<scrollOffset+outerSize;)endIndex++;return{startIndex,endIndex}}({measurements,outerSize,scrollOffset}):null),{key:!1,debug:()=>this.options.debug}),this.getIndexes=memo((()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count]),((rangeExtractor,range,overscan,count)=>null===range?[]:rangeExtractor({startIndex:range.startIndex,endIndex:range.endIndex,overscan,count})),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=node=>{const attributeName=this.options.indexAttribute,indexStr=node.getAttribute(attributeName);return indexStr?parseInt(indexStr,10):(console.warn(`Missing attribute name '${attributeName}={index}' on measured element.`),-1)},this._measureElement=(node,entry)=>{const i=this.indexFromElement(node),item=this.getMeasurements()[i];if(!item||!node.isConnected)return void this.elementsCache.forEach(((cached,key)=>{cached===node&&(this.observer.unobserve(node),this.elementsCache.delete(key))}));const prevNode=this.elementsCache.get(item.key);prevNode!==node&&(prevNode&&this.observer.unobserve(prevNode),this.observer.observe(node),this.elementsCache.set(item.key,node)),this.resizeItem(i,this.options.measureElement(node,entry,this))},this.resizeItem=(index,size)=>{const item=this.getMeasurements()[index];if(!item)return;const delta=size-(this.itemSizeCache.get(item.key)??item.size);0!==delta&&((void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(item,delta,this):item.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=delta,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(item.index),this.itemSizeCache=new Map(this.itemSizeCache.set(item.key,size)),this.notify(!0,!1))},this.measureElement=node=>{node&&this._measureElement(node,void 0)},this.getVirtualItems=memo((()=>[this.getIndexes(),this.getMeasurements()]),((indexes,measurements)=>{const virtualItems=[];for(let k=0,len=indexes.length;k<len;k++){const measurement=measurements[indexes[k]];virtualItems.push(measurement)}return virtualItems}),{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=offset=>{const measurements=this.getMeasurements();if(0!==measurements.length)return notUndefined(measurements[findNearestBinarySearch(0,measurements.length-1,(index=>notUndefined(measurements[index]).start),offset)])},this.getOffsetForAlignment=(toOffset,align)=>{const size=this.getSize(),scrollOffset=this.getScrollOffset();"auto"===align&&(align=toOffset<=scrollOffset?"start":toOffset>=scrollOffset+size?"end":"start"),"start"===align||("end"===align?toOffset-=size:"center"===align&&(toOffset-=size/2));const scrollSizeProp=this.options.horizontal?"scrollWidth":"scrollHeight",maxOffset=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[scrollSizeProp]:this.scrollElement[scrollSizeProp]:0)-size;return Math.max(Math.min(maxOffset,toOffset),0)},this.getOffsetForIndex=(index,align="auto")=>{index=Math.max(0,Math.min(index,this.options.count-1));const item=this.getMeasurements()[index];if(!item)return;const size=this.getSize(),scrollOffset=this.getScrollOffset();if("auto"===align)if(item.end>=scrollOffset+size-this.options.scrollPaddingEnd)align="end";else{if(!(item.start<=scrollOffset+this.options.scrollPaddingStart))return[scrollOffset,align];align="start"}const toOffset="end"===align?item.end+this.options.scrollPaddingEnd:item.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(toOffset,align),align]},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{null!==this.scrollToIndexTimeoutId&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(toOffset,{align="start",behavior}={})=>{this.cancelScrollToIndex(),"smooth"===behavior&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(toOffset,align),{adjustments:void 0,behavior})},this.scrollToIndex=(index,{align:initialAlign="auto",behavior}={})=>{index=Math.max(0,Math.min(index,this.options.count-1)),this.cancelScrollToIndex(),"smooth"===behavior&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const offsetAndAlign=this.getOffsetForIndex(index,initialAlign);if(!offsetAndAlign)return;const[offset,align]=offsetAndAlign;this._scrollToOffset(offset,{adjustments:void 0,behavior}),"smooth"!==behavior&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout((()=>{this.scrollToIndexTimeoutId=null;if(this.elementsCache.has(this.options.getItemKey(index))){const[latestOffset]=notUndefined(this.getOffsetForIndex(index,align));a=latestOffset,b=this.getScrollOffset(),Math.abs(a-b)<1||this.scrollToIndex(index,{align,behavior})}else this.scrollToIndex(index,{align,behavior});var a,b})))},this.scrollBy=(delta,{behavior}={})=>{this.cancelScrollToIndex(),"smooth"===behavior&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+delta,{adjustments:void 0,behavior})},this.getTotalSize=()=>{var _a;const measurements=this.getMeasurements();let end;return end=0===measurements.length?this.options.paddingStart:1===this.options.lanes?(null==(_a=measurements[measurements.length-1])?void 0:_a.end)??0:Math.max(...measurements.slice(-this.options.lanes).map((m=>m.end))),end-this.options.scrollMargin+this.options.paddingEnd},this._scrollToOffset=(offset,{adjustments,behavior})=>{this.options.scrollToFn(offset,{behavior,adjustments},this)},this.measure=()=>{var _a,_b;this.itemSizeCache=new Map,null==(_b=(_a=this.options).onChange)||_b.call(_a,this,!1)},this.setOptions(opts)}}const findNearestBinarySearch=(low,high,getCurrentValue,value)=>{for(;low<=high;){const middle=(low+high)/2|0,currentValue=getCurrentValue(middle);if(currentValue<value)low=middle+1;else{if(!(currentValue>value))return middle;high=middle-1}}return low>0?low-1:0};const useIsomorphicLayoutEffect="undefined"!=typeof document?react.useLayoutEffect:react.useEffect;function useVirtualizerBase(options){const rerender=react.useReducer((()=>({})),{})[1],resolvedOptions={...options,onChange:(instance2,sync)=>{var _a;sync?(0,react_dom.flushSync)(rerender):rerender(),null==(_a=options.onChange)||_a.call(options,instance2,sync)}},[instance]=react.useState((()=>new Virtualizer(resolvedOptions)));return instance.setOptions(resolvedOptions),react.useEffect((()=>instance._didMount()),[]),useIsomorphicLayoutEffect((()=>instance._willUpdate())),instance}function useVirtualizer(options){return useVirtualizerBase({observeElementRect,observeElementOffset,scrollToFn:elementScroll,...options})}function useWindowVirtualizer(options){return useVirtualizerBase({getScrollElement:()=>"undefined"!=typeof document?window:null,observeElementRect:observeWindowRect,observeElementOffset:observeWindowOffset,scrollToFn:windowScroll,initialOffset:()=>"undefined"!=typeof document?window.scrollY:0,...options})}}}]);