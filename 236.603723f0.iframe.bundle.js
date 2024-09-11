(self.webpackChunk=self.webpackChunk||[]).push([[236],{"../../../node_modules/.pnpm/@fxts+core@1.0.0/node_modules/@fxts/core/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function utils_isIterable(a){return"function"==typeof(null==a?void 0:a[Symbol.iterator])}function utils_isAsyncIterable(a){return"function"==typeof(null==a?void 0:a[Symbol.asyncIterator])}__webpack_require__.d(__webpack_exports__,{cF:()=>esm_curry,__:()=>esm_each,jO:()=>Lazy_entries,Im:()=>esm_isEmpty,gD:()=>esm_isNil,HP:()=>Lazy_keys,Tj:()=>Lazy_map,Fs:()=>esm_pipe,y1:()=>Lazy_range,TS:()=>esm_reduce,$r:()=>esm_toArray});const utils_isPromise=a=>a instanceof Promise||null!==a&&"object"==typeof a&&"function"==typeof a.then&&"function"==typeof a.catch;class error_AsyncFunctionException extends Error{constructor(message=error_AsyncFunctionException.MESSAGE){super(message)}}error_AsyncFunctionException.MESSAGE="'Iterable' can not used with async function.\nIf you want to deal with async function, see: [toAsync](https://fxts.dev/docs/toAsync)";const Lazy_map=function map_map(f,iterable){if(void 0===iterable)return iterable=>map_map(f,iterable);if(utils_isIterable(iterable))return function sync(f,iterable){const iterator=iterable[Symbol.iterator]();return{next(){const{done,value}=iterator.next();if(done)return{done:!0,value:void 0};const res=f(value);if(utils_isPromise(res))throw new error_AsyncFunctionException;return{done:!1,value:res}},[Symbol.iterator](){return this}}}(f,iterable);if(utils_isAsyncIterable(iterable))return function map_async(f,iterable){const iterator=iterable[Symbol.asyncIterator]();return{async next(_concurrent){const{done,value}=await iterator.next(_concurrent);return done?{done,value}:{done:!1,value:await f(value)}},[Symbol.asyncIterator](){return this}}}(f,iterable);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")};const esm_curry=function curry(f){const arity=f.length;return function resolver(...args){const memory=[...args];return function(...innerArgs){const local=[...memory,...innerArgs];return(local.length>=arity?f:resolver)(...local)}}()};const esm_each=function each(f,iterable){if(void 0===iterable)return iterable=>each(f,iterable);if(utils_isIterable(iterable))return function each_sync(f,iterable){for(const a of iterable)f(a)}(f,iterable);if(utils_isAsyncIterable(iterable))return async function each_async(f,iterable){for await(const item of iterable){const value=f(item);utils_isPromise(value)&&await value}}(f,iterable);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")};const esm_pipe1=(a,f)=>utils_isPromise(a)?a.then(f):f(a);function reduce_sync(f,acc,iterable){for(const a of iterable)acc=f(acc,a);return acc}async function reduce_async(f,acc,iterable){for await(const a of iterable)acc=await esm_pipe1(acc,(acc=>f(acc,a)));return acc}const esm_reduce=function reduce_reduce(f,seed,iterable){if(void 0===iterable){if(void 0===seed)return iterable=>reduce_reduce(f,iterable);if(utils_isIterable(seed)){const iterator=seed[Symbol.iterator](),{done,value}=iterator.next();if(done)throw new TypeError("'reduce' of empty iterable with no initial value");return reduce_sync(f,value,{[Symbol.iterator]:()=>iterator})}if(utils_isAsyncIterable(seed)){const iterator=seed[Symbol.asyncIterator]();return iterator.next().then((({done,value})=>{if(done)throw new TypeError("'reduce' of empty iterable with no initial value");return reduce_async(f,value,{[Symbol.asyncIterator]:()=>iterator})}))}throw new TypeError("'iterable' must be type of Iterable or AsyncIterable. Are you looking for 'reduceLazy'?")}if(utils_isIterable(iterable))return reduce_sync(f,seed,iterable);if(utils_isAsyncIterable(iterable))return reduce_async(f,Promise.resolve(seed),iterable);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")};const esm_pipe=function pipe_pipe(a,...fns){return esm_reduce(esm_pipe1,a,fns)};const esm_toArray=function toArray_toArray(iter){return utils_isAsyncIterable(iter)?async function toArray_async(iterable){const res=[];for await(const item of iterable)res.push(item);return res}(iter):utils_isIterable(iter)?Array.from(iter):[]};const esm_isArray=a=>Array.isArray(a),esm_isNull=input=>null===input,esm_isUndefined=a=>void 0===a,esm_isNil=a=>esm_isUndefined(a)||esm_isNull(a),esm_isEmpty=value=>!!esm_isNil(value)||("object"==typeof value&&value.constructor===Object&&0===Object.getOwnPropertyNames(value).length||(!(!esm_isArray(value)||0!==value.length)||(""===value||(value instanceof Map||value instanceof Set)&&0===value.size)));const rsAstral="[\\ud800-\\udfff]",rsCombo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsNonAstral="[^\\ud800-\\udfff]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",reOptMod=`${`(?:${rsCombo}|${rsFitz})`}?`,rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+`(?:\\u200d(?:${[rsNonAstral,rsRegional,rsSurrPair].join("|")})${"[\\ufe0e\\ufe0f]?"+reOptMod})*`,rsSymbol=`(?:${[`${rsNonAstral}${rsCombo}?`,rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")})`;RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol+rsSeq}`,"g");const Lazy_entries=function*entries(obj){for(const k in obj)Object.prototype.hasOwnProperty.call(obj,k)&&(yield[k,obj[k]])};const Lazy_range=function*range_range(start,end,step=1){if(void 0===end)return yield*range_range(0,start);if(step<0)for(;start>end;)yield start,start+=step;else for(;start<end;)yield start,start+=step};Symbol.asyncIterator;Symbol.iterator;const Lazy_keys=function*keys(obj){for(const k in obj)Object.prototype.hasOwnProperty.call(obj,k)&&(yield k)}},"../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js":module=>{var cachedSetTimeout,cachedClearTimeout,process=module.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(fun){if(cachedSetTimeout===setTimeout)return setTimeout(fun,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(fun,0);try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var currentQueue,queue=[],draining=!1,queueIndex=-1;function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var timeout=runTimeout(cleanUpNextTick);draining=!0;for(var len=queue.length;len;){for(currentQueue=queue,queue=[];++queueIndex<len;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,len=queue.length}currentQueue=null,draining=!1,function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout)return clearTimeout(marker);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(marker);try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}(timeout)}}function Item(fun,array){this.fun=fun,this.array=array}function noop(){}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)args[i-1]=arguments[i];queue.push(new Item(fun,args)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(name){return[]},process.binding=function(name){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(dir){throw new Error("process.chdir is not supported")},process.umask=function(){return 0}}}]);