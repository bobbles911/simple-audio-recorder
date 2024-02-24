/*! For license information please see react.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.ReactAudioRecorder=e(require("react")):t.ReactAudioRecorder=e(t.react)}(self,(t=>(()=>{"use strict";var e={156:e=>{e.exports=t}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{RecorderStates:()=>W,SimpleAudioRecorder:()=>F,preloadWorker:()=>q,useSimpleAudioRecorder:()=>B});var t=n(156);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a=null,u=0,s=[],c={};function l(t){u=t;var e,r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){s=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(s)throw a}}}}(s);try{for(r.s();!(e=r.n()).done;)(0,e.value)()}catch(t){r.e(t)}finally{r.f()}s=[]}function f(t){var e;/^https?:\/\//.test(t)&&(e='importScripts("'.concat(t,'");'),t=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))),a=new Worker(t),u=1,a.onmessage=function(t){switch(t.data.message){case"ready":l(2);break;case"encoded":t.data.jobId in c&&c[t.data.jobId].onencoded(t.data.srcBufLen);break;case"data":t.data.jobId in c&&c[t.data.jobId].ondataavailable(t.data.data);break;case"stopped":t.data.jobId in c&&c[t.data.jobId].onstopped()}},a.onerror=function(t){console.error("mp3worker error event",t),l(3)}}var p=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.jobId=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})),this.options=e,this.queuedData=0,c[this.jobId]={onencoded:function(t){r.queuedData-=t},ondataavailable:function(t){r.ondataavailable&&r.ondataavailable(t)},onstopped:function(){delete c[r.jobId],r.onstopped&&r.onstopped()}}}var e,n,o;return e=t,o=[{key:"preload",value:function(t){0!=u&&3!=u||f(t)}},{key:"waitForWorker",value:function(t){return 2==u?Promise.resolve():(0!=u&&3!=u||f(t),new Promise((function(t,e){s.push((function(){if(2==u)t();else{var r=new Error("MP3 worker failed");r.name="WorkerError",e(r)}}))})))}}],(n=[{key:"start",value:function(){a.postMessage({command:"start",jobId:this.jobId,options:this.options})}},{key:"sendData",value:function(t){t&&t.length>0&&t[0].length>0&&(this.queuedData+=t[0].length,a.postMessage({command:"data",jobId:this.jobId,buffers:t}))}},{key:"getQueuedDataLen",value:function(){return this.queuedData}},{key:"stop",value:function(){a.postMessage({command:"stop",jobId:this.jobId})}}])&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var v=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.reset()}var e,r;return e=t,(r=[{key:"reset",value:function(){this.startTime=null,this.stoppedTime=null}},{key:"start",value:function(){this.startTime||(this.startTime=Date.now()),this.stoppedTime&&(this.startTime+=Date.now()-this.stoppedTime,this.stoppedTime=null)}},{key:"resetAndStart",value:function(){this.reset(),this.start()}},{key:"stop",value:function(){this.stoppedTime||(this.stoppedTime=Date.now())}},{key:"getTime",value:function(){return this.startTime?this.stoppedTime?this.stoppedTime-this.startTime:Date.now()-this.startTime:0}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new N(o||[]);return n(a,"_invoke",{value:j(t,r,u)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function p(){}function d(){}function h(){}var v={};s(v,i,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(x([])));g&&g!==e&&r.call(g,i)&&(v=g);var w=h.prototype=p.prototype=Object.create(v);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(n,i,a,u){var s=l(t[n],t,i);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==y(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return o("throw",t,a,u)}))}u(s.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=h,n(w,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=s(h,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(O.prototype),s(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(w),s(w,u,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=x,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function b(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){b(i,n,o,a,u,"next",t)}function u(t){b(i,n,o,a,u,"throw",t)}a(void 0)}))}}function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return(e=k(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function k(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var E=window.AudioContext||window.webkitAudioContext,P=window.AudioWorklet&&!(["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)&&!/^((?!chrome|android).)*safari/i.test(navigator.userAgent),N={recordingGain:1,encoderBitRate:96,streaming:!1,streamBufferSize:5e4,forceScriptProcessor:!1,constraints:{channelCount:1,autoGainControl:!0,echoCancellation:!0,noiseSuppression:!0}},x=null;function R(t){var e=t.getAudioTracks();if(e.length<1)throw new Error("No audio tracks in user media stream");var r=e[0].getSettings();return"channelCount"in r?r.channelCount:1}var A=URL.createObjectURL(new Blob(['\n\tclass AudioOutputProcessor extends AudioWorkletProcessor {\n\t\tprocess(inputs, outputs) {\n\t\t\tthis.port.postMessage(inputs[0]);\n\t\t\treturn true;\n\t\t}\n\t}\n\n\tregisterProcessor("audio-output-processor", AudioOutputProcessor);\n'],{type:"application/javascript"})),T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=S(S({},N),e),this.state=0,this.audioContext=null,this.encoder=null,this.encodedData=null,this.stopPromiseResolve=null,this.stopPromiseReject=null,this.timer=new v}var e,r,n,o,i;return e=t,r=[{key:"useAudioWorklet",value:function(){return P&&!this.options.forceScriptProcessor}},{key:"createAndStartEncoder",value:function(t){var e=this;this.encoder=new p({originalSampleRate:this.audioContext.sampleRate,numberOfChannels:t,encoderBitRate:this.options.encoderBitRate,streamBufferSize:this.options.streamBufferSize}),this.encoder.ondataavailable=function(t){e.options.streaming?e.ondataavailable&&e.ondataavailable(t):e.encodedData.push(t)},this.encoder.onstopped=function(){e.state=0;var t=e.options.streaming?void 0:new Blob(e.encodedData,{type:"audio/mpeg"});e.onstop&&e.onstop(t),e.stopPromiseResolve(t)},this.encoder.start()}},{key:"createOutputNode",value:function(t){var e=this;this.useAudioWorklet()?(console.log("Using AudioWorklet"),this.outputNode=new AudioWorkletNode(this.audioContext,"audio-output-processor",{numberOfOutputs:0}),this.outputNode.port.onmessage=function(t){var r=t.data;1==e.state&&e.encoder.sendData(r)}):(console.log("Using ScriptProcessorNode"),this.outputNode=this.audioContext.createScriptProcessor(4096,t,t),this.outputNode.connect(this.audioContext.destination),this.outputNode.onaudioprocess=function(t){if(1==e.state){for(var r=t.inputBuffer,n=[],o=0;o<r.numberOfChannels;o++)n.push(r.getChannelData(o));e.encoder.sendData(n)}})}},{key:"createAudioNodes",value:function(t){this.createOutputNode(t),this.recordingGainNode=this.audioContext.createGain(),this.setRecordingGain(this.options.recordingGain),this.recordingGainNode.connect(this.outputNode),this.sourceNode=this.audioContext.createMediaStreamSource(this.stream),this.sourceNode.connect(this.recordingGainNode)}},{key:"cleanupAudioNodes",value:function(){var t;this.stream&&((t=this.stream).getTracks?t.getTracks().forEach((function(t){return t.stop()})):t.stop(),this.stream=null),this.useAudioWorklet()?this.outputNode&&(this.outputNode.port.onmessage=null):this.outputNode&&(this.outputNode.onaudioprocess=null),this.outputNode&&this.outputNode.disconnect(),this.recordingGainNode&&this.recordingGainNode.disconnect(),this.sourceNode&&this.sourceNode.disconnect(),this.audioContext&&this.audioContext.close()}},{key:"setRecordingGain",value:function(t){this.options.recordingGain=t,this.recordingGainNode&&this.recordingGainNode.gain.setTargetAtTime(t,this.audioContext.currentTime,.01)}},{key:"time",get:function(){return this.timer.getTime()}},{key:"getEncodingQueueSize",value:function(){return this.encoder?this.encoder.getQueuedDataLen():0}},{key:"stoppingCheck",value:function(){if(4==this.state)throw(t=new Error("AudioRecorder start cancelled by call to stop")).name="CancelStartError",t;var t}},{key:"__start",value:(i=g(m().mark((function t(e){var r,n,o;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0==this.state){t.next=2;break}throw new Error("Called start when not in stopped state");case 2:if(null!=x){t.next=4;break}throw new Error("preload was not called on AudioRecorder");case 4:return this.state=3,this.encodedData=[],this.stream=null,t.prev=7,t.next=10,p.waitForWorker(x);case 10:return this.stoppingCheck(),r=!(Object.keys(this.options.constraints).length>0)||this.options.constraints,t.next=14,navigator.mediaDevices.getUserMedia({audio:r});case 14:if(this.stream=t.sent,this.stoppingCheck(),this.audioContext=new E,!this.useAudioWorklet()){t.next=21;break}return t.next=20,this.audioContext.audioWorklet.addModule(A,{credentials:"omit"});case 20:this.stoppingCheck();case 21:n=R(this.stream),this.createAndStartEncoder(n),this.createAudioNodes(n),e?(this.timer.reset(),this.state=2):(this.timer.resetAndStart(),this.state=1),this.onstart&&this.onstart(),t.next=35;break;case 28:throw t.prev=28,t.t0=t.catch(7),o=4==this.state,this.cleanupAudioNodes(),this.state=0,o&&this.stopPromiseReject(t.t0),t.t0;case 35:case"end":return t.stop()}}),t,this,[[7,28]])}))),function(t){return i.apply(this,arguments)})},{key:"__stop",value:(o=g(m().mark((function t(){var e=this;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.timer.stop(),1!=this.state&&2!=this.state){t.next=8;break}return this.state=4,this.cleanupAudioNodes(),this.encoder.stop(),t.abrupt("return",new Promise((function(t,r){e.stopPromiseResolve=t})));case 8:if(3!=this.state){t.next=11;break}return this.state=4,t.abrupt("return",new Promise((function(t,r){e.stopPromiseReject=r})));case 11:throw new Error("Called stop when AudioRecorder was not started");case 12:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"start",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.__start(e);if(r.catch((function(e){"CancelStartError"!=e.name&&t.onerror&&t.onerror(e)})),!this.onerror)return r}},{key:"stop",value:function(){var t=this,e=this.__stop();if(e.catch((function(e){"CancelStartError"==e.name?t.onstop&&t.onstop(t.options.streaming?void 0:null):t.onerror&&t.onerror(e)})),!this.onerror)return e}},{key:"pause",value:function(){1==this.state&&(this.state=2,this.timer.stop())}},{key:"resume",value:function(){2==this.state&&(this.state=1,this.timer.start())}}],n=[{key:"isRecordingSupported",value:function(){return E&&navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia}},{key:"preload",value:function(t){x=t,p.preload(x)}}],r&&j(e.prototype,r),n&&j(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function I(t){return function(t){if(Array.isArray(t))return M(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||_(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){G(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function G(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===C(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function U(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],s=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);s=!0);}catch(t){c=!0,o=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||_(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){if(t){if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,e):void 0}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var W={INITIAL:0,STARTING:1,RECORDING:2,PAUSED:3,ENCODING:4,COMPLETE:5,ERROR:6,COUNTDOWN:7};function B(e){var r=e.workerUrl,n=e.onDataAvailable,o=e.onComplete,i=e.onError,a=e.options,u=e.cleanup,s=void 0!==u&&u,c=e.timeUpdateStep,l=void 0===c?111:c,f=e.countdown,p=void 0===f?0:f,d=U((0,t.useState)(W.INITIAL),2),h=d[0],v=d[1],y=U((0,t.useState)([]),2),m=y[0],b=y[1],g=U((0,t.useState)([]),2),w=g[0],S=g[1],O=U((0,t.useState)(null),2),j=O[0],k=O[1],E=U((0,t.useState)(0),2),P=E[0],N=E[1],x=U((0,t.useState)(null),2),R=x[0],A=x[1],C=U((0,t.useState)(0),2),D=C[0],G=C[1],_=(0,t.useRef)(h),M=(0,t.useRef)(0),B=(0,t.useRef)(null),F=(0,t.useRef)(null),q=(0,t.useRef)(null);function z(){null!=q.current&&(clearTimeout(q.current),q.current=null)}_.current=h,M.current=R,(0,t.useEffect)((function(){return r&&T.preload(r),function(){z(),B.current&&(B.current.ondataavailable=null,B.current.onstart=null,B.current.onstop=null,B.current.onerror=null,B.current.stop(),B.current=null),s&&w.forEach(URL.revokeObjectURL)}}),[]),function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3/60,n=(0,t.useRef)(null);(0,t.useEffect)((function(){return n.current=setInterval(e,r),function(){n.current&&clearInterval(n.current)}}),[])}((function(){B.current&&N(B.current.time),_.current==W.COUNTDOWN&&G(Math.max(0,p-(Date.now()-M.current)))}),l);var Q={recorderState:h};return L(L({error:j,errorStr:j?j.toString():null,time:P,countdownTimeLeft:D,mp3Blobs:m,mp3Urls:w,mp3Blob:m.at(-1),mp3Url:w.at(-1),start:function(){F.current=[],B.current=new T(L(L({},a),{},{streaming:!0})),v(W.STARTING),B.current.ondataavailable=function(t){F.current.push(t),n&&n(t)},B.current.onstart=function(){p>0?(v(W.COUNTDOWN),A(Date.now()),q.current=setTimeout((function(){_.current==W.COUNTDOWN&&(B.current.resume(),v(W.RECORDING),G(0))}),p)):v(W.RECORDING),k(null)},B.current.onstop=function(){var t=new Blob(F.current,{type:"audio/mpeg"}),e=URL.createObjectURL(t);v(W.COMPLETE),b([].concat(I(m),[t])),S([].concat(I(w),[e])),o&&o({mp3Blob:t,mp3Url:e})},B.current.onerror=function(t){v(W.ERROR),k(t),i&&i(t)},B.current.start(p>0)},stop:function(){z(),B.current.getEncodingQueueSize()>1e3&&v(W.ENCODING),B.current.stop()},pause:function(){_.current==W.RECORDING&&(B.current.pause(),v(W.PAUSED))},resume:function(){_.current==W.PAUSED&&(B.current.resume(),v(W.RECORDING))}},Q),{},{getProps:function(){return Q}})}function F(t){var e,r,n,o,i,a,u,s,c=t.recorderState,l=t.viewInitial,f=t.viewStarting,p=t.viewCountdown,d=t.viewRecording,h=t.viewPaused,v=t.viewEncoding,y=t.viewComplete,m=t.viewError;f=null!==(e=f)&&void 0!==e?e:null!==(r=p)&&void 0!==r?r:d,p=null!==(n=p)&&void 0!==n?n:d,h=null!==(o=h)&&void 0!==o?o:l,v=null!==(i=v)&&void 0!==i?i:y,y=null!==(a=y)&&void 0!==a?a:l,m=null!==(u=m)&&void 0!==u?u:l;var b=new Map;return b.set(W.INITIAL,l),b.set(W.STARTING,f),b.set(W.COUNTDOWN,p),b.set(W.RECORDING,d),b.set(W.PAUSED,h),b.set(W.ENCODING,v),b.set(W.COMPLETE,y),b.set(W.ERROR,m),null!==(s=b.get(c))&&void 0!==s?s:W.INITIAL}function q(t){T.preload(t)}})(),o})()));