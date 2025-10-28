(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();function su(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Kr={exports:{}},ae={},Vr={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=Symbol.for("react.element"),ru=Symbol.for("react.portal"),lu=Symbol.for("react.fragment"),mu=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),cu=Symbol.for("react.provider"),du=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),wu=Symbol.for("react.memo"),gu=Symbol.for("react.lazy"),Ds=Symbol.iterator;function bu(n){return n===null||typeof n!="object"?null:(n=Ds&&n[Ds]||n["@@iterator"],typeof n=="function"?n:null)}var qr={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yr=Object.assign,$r={};function et(n,a,t){this.props=n,this.context=a,this.refs=$r,this.updater=t||qr}et.prototype.isReactComponent={};et.prototype.setState=function(n,a){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,a,"setState")};et.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Zr(){}Zr.prototype=et.prototype;function Fi(n,a,t){this.props=n,this.context=a,this.refs=$r,this.updater=t||qr}var Hi=Fi.prototype=new Zr;Hi.constructor=Fi;Yr(Hi,et.prototype);Hi.isPureReactComponent=!0;var Ns=Array.isArray,Qr=Object.prototype.hasOwnProperty,Gi={current:null},Jr={key:!0,ref:!0,__self:!0,__source:!0};function Xr(n,a,t){var o,e={},i=null,s=null;if(a!=null)for(o in a.ref!==void 0&&(s=a.ref),a.key!==void 0&&(i=""+a.key),a)Qr.call(a,o)&&!Jr.hasOwnProperty(o)&&(e[o]=a[o]);var r=arguments.length-2;if(r===1)e.children=t;else if(1<r){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+2];e.children=l}if(n&&n.defaultProps)for(o in r=n.defaultProps,r)e[o]===void 0&&(e[o]=r[o]);return{$$typeof:Yt,type:n,key:i,ref:s,props:e,_owner:Gi.current}}function ku(n,a){return{$$typeof:Yt,type:n.type,key:a,ref:n.ref,props:n.props,_owner:n._owner}}function Wi(n){return typeof n=="object"&&n!==null&&n.$$typeof===Yt}function fu(n){var a={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return a[t]})}var Ps=/\/+/g;function ye(n,a){return typeof n=="object"&&n!==null&&n.key!=null?fu(""+n.key):a.toString(36)}function fo(n,a,t,o,e){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var s=!1;if(n===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case Yt:case ru:s=!0}}if(s)return s=n,e=e(s),n=o===""?"."+ye(s,0):o,Ns(e)?(t="",n!=null&&(t=n.replace(Ps,"$&/")+"/"),fo(e,a,t,"",function(u){return u})):e!=null&&(Wi(e)&&(e=ku(e,t+(!e.key||s&&s.key===e.key?"":(""+e.key).replace(Ps,"$&/")+"/")+n)),a.push(e)),1;if(s=0,o=o===""?".":o+":",Ns(n))for(var r=0;r<n.length;r++){i=n[r];var l=o+ye(i,r);s+=fo(i,a,t,l,e)}else if(l=bu(n),typeof l=="function")for(n=l.call(n),r=0;!(i=n.next()).done;)i=i.value,l=o+ye(i,r++),s+=fo(i,a,t,l,e);else if(i==="object")throw a=String(n),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return s}function ao(n,a,t){if(n==null)return n;var o=[],e=0;return fo(n,o,"","",function(i){return a.call(t,i,e++)}),o}function yu(n){if(n._status===-1){var a=n._result;a=a(),a.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=a)}if(n._status===1)return n._result.default;throw n._result}var rn={current:null},yo={transition:null},vu={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:yo,ReactCurrentOwner:Gi};function nl(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:ao,forEach:function(n,a,t){ao(n,function(){a.apply(this,arguments)},t)},count:function(n){var a=0;return ao(n,function(){a++}),a},toArray:function(n){return ao(n,function(a){return a})||[]},only:function(n){if(!Wi(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};A.Component=et;A.Fragment=lu;A.Profiler=uu;A.PureComponent=Fi;A.StrictMode=mu;A.Suspense=hu;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vu;A.act=nl;A.cloneElement=function(n,a,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var o=Yr({},n.props),e=n.key,i=n.ref,s=n._owner;if(a!=null){if(a.ref!==void 0&&(i=a.ref,s=Gi.current),a.key!==void 0&&(e=""+a.key),n.type&&n.type.defaultProps)var r=n.type.defaultProps;for(l in a)Qr.call(a,l)&&!Jr.hasOwnProperty(l)&&(o[l]=a[l]===void 0&&r!==void 0?r[l]:a[l])}var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){r=Array(l);for(var u=0;u<l;u++)r[u]=arguments[u+2];o.children=r}return{$$typeof:Yt,type:n.type,key:e,ref:i,props:o,_owner:s}};A.createContext=function(n){return n={$$typeof:du,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:cu,_context:n},n.Consumer=n};A.createElement=Xr;A.createFactory=function(n){var a=Xr.bind(null,n);return a.type=n,a};A.createRef=function(){return{current:null}};A.forwardRef=function(n){return{$$typeof:pu,render:n}};A.isValidElement=Wi;A.lazy=function(n){return{$$typeof:gu,_payload:{_status:-1,_result:n},_init:yu}};A.memo=function(n,a){return{$$typeof:wu,type:n,compare:a===void 0?null:a}};A.startTransition=function(n){var a=yo.transition;yo.transition={};try{n()}finally{yo.transition=a}};A.unstable_act=nl;A.useCallback=function(n,a){return rn.current.useCallback(n,a)};A.useContext=function(n){return rn.current.useContext(n)};A.useDebugValue=function(){};A.useDeferredValue=function(n){return rn.current.useDeferredValue(n)};A.useEffect=function(n,a){return rn.current.useEffect(n,a)};A.useId=function(){return rn.current.useId()};A.useImperativeHandle=function(n,a,t){return rn.current.useImperativeHandle(n,a,t)};A.useInsertionEffect=function(n,a){return rn.current.useInsertionEffect(n,a)};A.useLayoutEffect=function(n,a){return rn.current.useLayoutEffect(n,a)};A.useMemo=function(n,a){return rn.current.useMemo(n,a)};A.useReducer=function(n,a,t){return rn.current.useReducer(n,a,t)};A.useRef=function(n){return rn.current.useRef(n)};A.useState=function(n){return rn.current.useState(n)};A.useSyncExternalStore=function(n,a,t){return rn.current.useSyncExternalStore(n,a,t)};A.useTransition=function(){return rn.current.useTransition()};A.version="18.3.1";Vr.exports=A;var Rt=Vr.exports;const ju=su(Rt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su=Rt,zu=Symbol.for("react.element"),Lu=Symbol.for("react.fragment"),Cu=Object.prototype.hasOwnProperty,xu=Su.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iu={key:!0,ref:!0,__self:!0,__source:!0};function al(n,a,t){var o,e={},i=null,s=null;t!==void 0&&(i=""+t),a.key!==void 0&&(i=""+a.key),a.ref!==void 0&&(s=a.ref);for(o in a)Cu.call(a,o)&&!Iu.hasOwnProperty(o)&&(e[o]=a[o]);if(n&&n.defaultProps)for(o in a=n.defaultProps,a)e[o]===void 0&&(e[o]=a[o]);return{$$typeof:zu,type:n,key:i,ref:s,props:e,_owner:xu.current}}ae.Fragment=Lu;ae.jsx=al;ae.jsxs=al;Kr.exports=ae;var tl=Kr.exports;const fa=tl.jsx,ve=tl.jsxs;var qe={},ol={exports:{}},kn={},el={exports:{}},il={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function a(S,x){var I=S.length;S.push(x);n:for(;0<I;){var W=I-1>>>1,Y=S[W];if(0<e(Y,x))S[W]=x,S[I]=Y,I=W;else break n}}function t(S){return S.length===0?null:S[0]}function o(S){if(S.length===0)return null;var x=S[0],I=S.pop();if(I!==x){S[0]=I;n:for(var W=0,Y=S.length,Xt=Y>>>1;W<Xt;){var wa=2*(W+1)-1,fe=S[wa],ga=wa+1,no=S[ga];if(0>e(fe,I))ga<Y&&0>e(no,fe)?(S[W]=no,S[ga]=I,W=ga):(S[W]=fe,S[wa]=I,W=wa);else if(ga<Y&&0>e(no,I))S[W]=no,S[ga]=I,W=ga;else break n}}return x}function e(S,x){var I=S.sortIndex-x.sortIndex;return I!==0?I:S.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var s=Date,r=s.now();n.unstable_now=function(){return s.now()-r}}var l=[],u=[],w=1,h=null,p=3,k=!1,f=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(S){for(var x=t(u);x!==null;){if(x.callback===null)o(u);else if(x.startTime<=S)o(u),x.sortIndex=x.expirationTime,a(l,x);else break;x=t(u)}}function g(S){if(y=!1,d(S),!f)if(t(l)!==null)f=!0,be(j);else{var x=t(u);x!==null&&ke(g,x.startTime-S)}}function j(S,x){f=!1,y&&(y=!1,c(C),C=-1),k=!0;var I=p;try{for(d(x),h=t(l);h!==null&&(!(h.expirationTime>x)||S&&!Cn());){var W=h.callback;if(typeof W=="function"){h.callback=null,p=h.priorityLevel;var Y=W(h.expirationTime<=x);x=n.unstable_now(),typeof Y=="function"?h.callback=Y:h===t(l)&&o(l),d(x)}else o(l);h=t(l)}if(h!==null)var Xt=!0;else{var wa=t(u);wa!==null&&ke(g,wa.startTime-x),Xt=!1}return Xt}finally{h=null,p=I,k=!1}}var z=!1,L=null,C=-1,G=5,R=-1;function Cn(){return!(n.unstable_now()-R<G)}function rt(){if(L!==null){var S=n.unstable_now();R=S;var x=!0;try{x=L(!0,S)}finally{x?lt():(z=!1,L=null)}}else z=!1}var lt;if(typeof m=="function")lt=function(){m(rt)};else if(typeof MessageChannel<"u"){var Bs=new MessageChannel,iu=Bs.port2;Bs.port1.onmessage=rt,lt=function(){iu.postMessage(null)}}else lt=function(){N(rt,0)};function be(S){L=S,z||(z=!0,lt())}function ke(S,x){C=N(function(){S(n.unstable_now())},x)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(S){S.callback=null},n.unstable_continueExecution=function(){f||k||(f=!0,be(j))},n.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<S?Math.floor(1e3/S):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(S){switch(p){case 1:case 2:case 3:var x=3;break;default:x=p}var I=p;p=x;try{return S()}finally{p=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(S,x){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var I=p;p=S;try{return x()}finally{p=I}},n.unstable_scheduleCallback=function(S,x,I){var W=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?W+I:W):I=W,S){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=I+Y,S={id:w++,callback:x,priorityLevel:S,startTime:I,expirationTime:Y,sortIndex:-1},I>W?(S.sortIndex=I,a(u,S),t(l)===null&&S===t(u)&&(y?(c(C),C=-1):y=!0,ke(g,I-W))):(S.sortIndex=Y,a(l,S),f||k||(f=!0,be(j))),S},n.unstable_shouldYield=Cn,n.unstable_wrapCallback=function(S){var x=p;return function(){var I=p;p=x;try{return S.apply(this,arguments)}finally{p=I}}}})(il);el.exports=il;var Au=el.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru=Rt,bn=Au;function b(n){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sl=new Set,Mt={};function Ra(n,a){Qa(n,a),Qa(n+"Capture",a)}function Qa(n,a){for(Mt[n]=a,n=0;n<a.length;n++)sl.add(a[n])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ye=Object.prototype.hasOwnProperty,Mu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Os={},_s={};function Tu(n){return Ye.call(_s,n)?!0:Ye.call(Os,n)?!1:Mu.test(n)?_s[n]=!0:(Os[n]=!0,!1)}function Eu(n,a,t,o){if(t!==null&&t.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Bu(n,a,t,o){if(a===null||typeof a>"u"||Eu(n,a,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function ln(n,a,t,o,e,i,s){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=o,this.attributeNamespace=e,this.mustUseProperty=t,this.propertyName=n,this.type=a,this.sanitizeURL=i,this.removeEmptyString=s}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){X[n]=new ln(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var a=n[0];X[a]=new ln(a,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){X[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){X[n]=new ln(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){X[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){X[n]=new ln(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){X[n]=new ln(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){X[n]=new ln(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){X[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ui=/[\-:]([a-z])/g;function Ki(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var a=n.replace(Ui,Ki);X[a]=new ln(a,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var a=n.replace(Ui,Ki);X[a]=new ln(a,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var a=n.replace(Ui,Ki);X[a]=new ln(a,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){X[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)});X.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){X[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function Vi(n,a,t,o){var e=X.hasOwnProperty(a)?X[a]:null;(e!==null?e.type!==0:o||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(Bu(a,t,e,o)&&(t=null),o||e===null?Tu(a)&&(t===null?n.removeAttribute(a):n.setAttribute(a,""+t)):e.mustUseProperty?n[e.propertyName]=t===null?e.type===3?!1:"":t:(a=e.attributeName,o=e.attributeNamespace,t===null?n.removeAttribute(a):(e=e.type,t=e===3||e===4&&t===!0?"":""+t,o?n.setAttributeNS(o,a,t):n.setAttribute(a,t))))}var Yn=Ru.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Ea=Symbol.for("react.portal"),Ba=Symbol.for("react.fragment"),qi=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),rl=Symbol.for("react.provider"),ll=Symbol.for("react.context"),Yi=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),$i=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),ml=Symbol.for("react.offscreen"),Fs=Symbol.iterator;function mt(n){return n===null||typeof n!="object"?null:(n=Fs&&n[Fs]||n["@@iterator"],typeof n=="function"?n:null)}var F=Object.assign,je;function bt(n){if(je===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);je=a&&a[1]||""}return`
`+je+n}var Se=!1;function ze(n,a){if(!n||Se)return"";Se=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(u){var o=u}Reflect.construct(n,[],a)}else{try{a.call()}catch(u){o=u}n.call(a.prototype)}else{try{throw Error()}catch(u){o=u}n()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var e=u.stack.split(`
`),i=o.stack.split(`
`),s=e.length-1,r=i.length-1;1<=s&&0<=r&&e[s]!==i[r];)r--;for(;1<=s&&0<=r;s--,r--)if(e[s]!==i[r]){if(s!==1||r!==1)do if(s--,r--,0>r||e[s]!==i[r]){var l=`
`+e[s].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=s&&0<=r);break}}}finally{Se=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?bt(n):""}function Du(n){switch(n.tag){case 5:return bt(n.type);case 16:return bt("Lazy");case 13:return bt("Suspense");case 19:return bt("SuspenseList");case 0:case 2:case 15:return n=ze(n.type,!1),n;case 11:return n=ze(n.type.render,!1),n;case 1:return n=ze(n.type,!0),n;default:return""}}function Je(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ba:return"Fragment";case Ea:return"Portal";case $e:return"Profiler";case qi:return"StrictMode";case Ze:return"Suspense";case Qe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ll:return(n.displayName||"Context")+".Consumer";case rl:return(n._context.displayName||"Context")+".Provider";case Yi:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $i:return a=n.displayName||null,a!==null?a:Je(n.type)||"Memo";case Zn:a=n._payload,n=n._init;try{return Je(n(a))}catch{}}return null}function Nu(n){var a=n.type;switch(n.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=a.render,n=n.displayName||n.name||"",a.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Je(a);case 8:return a===qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function ua(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ul(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Pu(n){var a=ul(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),o=""+n[a];if(!n.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var e=t.get,i=t.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return e.call(this)},set:function(s){o=""+s,i.call(this,s)}}),Object.defineProperty(n,a,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function oo(n){n._valueTracker||(n._valueTracker=Pu(n))}function cl(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var t=a.getValue(),o="";return n&&(o=ul(n)?n.checked?"true":"false":n.value),n=o,n!==t?(a.setValue(n),!0):!1}function Mo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,a){var t=a.checked;return F({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Hs(n,a){var t=a.defaultValue==null?"":a.defaultValue,o=a.checked!=null?a.checked:a.defaultChecked;t=ua(a.value!=null?a.value:t),n._wrapperState={initialChecked:o,initialValue:t,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function dl(n,a){a=a.checked,a!=null&&Vi(n,"checked",a,!1)}function ni(n,a){dl(n,a);var t=ua(a.value),o=a.type;if(t!=null)o==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(o==="submit"||o==="reset"){n.removeAttribute("value");return}a.hasOwnProperty("value")?ai(n,a.type,t):a.hasOwnProperty("defaultValue")&&ai(n,a.type,ua(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(n.defaultChecked=!!a.defaultChecked)}function Gs(n,a,t){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var o=a.type;if(!(o!=="submit"&&o!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+n._wrapperState.initialValue,t||a===n.value||(n.value=a),n.defaultValue=a}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ai(n,a,t){(a!=="number"||Mo(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var kt=Array.isArray;function Ka(n,a,t,o){if(n=n.options,a){a={};for(var e=0;e<t.length;e++)a["$"+t[e]]=!0;for(t=0;t<n.length;t++)e=a.hasOwnProperty("$"+n[t].value),n[t].selected!==e&&(n[t].selected=e),e&&o&&(n[t].defaultSelected=!0)}else{for(t=""+ua(t),a=null,e=0;e<n.length;e++){if(n[e].value===t){n[e].selected=!0,o&&(n[e].defaultSelected=!0);return}a!==null||n[e].disabled||(a=n[e])}a!==null&&(a.selected=!0)}}function ti(n,a){if(a.dangerouslySetInnerHTML!=null)throw Error(b(91));return F({},a,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ws(n,a){var t=a.value;if(t==null){if(t=a.children,a=a.defaultValue,t!=null){if(a!=null)throw Error(b(92));if(kt(t)){if(1<t.length)throw Error(b(93));t=t[0]}a=t}a==null&&(a=""),t=a}n._wrapperState={initialValue:ua(t)}}function pl(n,a){var t=ua(a.value),o=ua(a.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),a.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),o!=null&&(n.defaultValue=""+o)}function Us(n){var a=n.textContent;a===n._wrapperState.initialValue&&a!==""&&a!==null&&(n.value=a)}function hl(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oi(n,a){return n==null||n==="http://www.w3.org/1999/xhtml"?hl(a):n==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var eo,wl=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,t,o,e){MSApp.execUnsafeLocalFunction(function(){return n(a,t,o,e)})}:n}(function(n,a){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=a;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=eo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;a.firstChild;)n.appendChild(a.firstChild)}});function Tt(n,a){if(a){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=a;return}}n.textContent=a}var vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ou=["Webkit","ms","Moz","O"];Object.keys(vt).forEach(function(n){Ou.forEach(function(a){a=a+n.charAt(0).toUpperCase()+n.substring(1),vt[a]=vt[n]})});function gl(n,a,t){return a==null||typeof a=="boolean"||a===""?"":t||typeof a!="number"||a===0||vt.hasOwnProperty(n)&&vt[n]?(""+a).trim():a+"px"}function bl(n,a){n=n.style;for(var t in a)if(a.hasOwnProperty(t)){var o=t.indexOf("--")===0,e=gl(t,a[t],o);t==="float"&&(t="cssFloat"),o?n.setProperty(t,e):n[t]=e}}var _u=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ei(n,a){if(a){if(_u[n]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(b(137,n));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(b(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(b(61))}if(a.style!=null&&typeof a.style!="object")throw Error(b(62))}}function ii(n,a){if(n.indexOf("-")===-1)return typeof a.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function Zi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ri=null,Va=null,qa=null;function Ks(n){if(n=Qt(n)){if(typeof ri!="function")throw Error(b(280));var a=n.stateNode;a&&(a=se(a),ri(n.stateNode,n.type,a))}}function kl(n){Va?qa?qa.push(n):qa=[n]:Va=n}function fl(){if(Va){var n=Va,a=qa;if(qa=Va=null,Ks(n),a)for(n=0;n<a.length;n++)Ks(a[n])}}function yl(n,a){return n(a)}function vl(){}var Le=!1;function jl(n,a,t){if(Le)return n(a,t);Le=!0;try{return yl(n,a,t)}finally{Le=!1,(Va!==null||qa!==null)&&(vl(),fl())}}function Et(n,a){var t=n.stateNode;if(t===null)return null;var o=se(t);if(o===null)return null;t=o[a];n:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(n=n.type,o=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!o;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(b(231,a,typeof t));return t}var li=!1;if(Un)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){li=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{li=!1}function Fu(n,a,t,o,e,i,s,r,l){var u=Array.prototype.slice.call(arguments,3);try{a.apply(t,u)}catch(w){this.onError(w)}}var jt=!1,To=null,Eo=!1,mi=null,Hu={onError:function(n){jt=!0,To=n}};function Gu(n,a,t,o,e,i,s,r,l){jt=!1,To=null,Fu.apply(Hu,arguments)}function Wu(n,a,t,o,e,i,s,r,l){if(Gu.apply(this,arguments),jt){if(jt){var u=To;jt=!1,To=null}else throw Error(b(198));Eo||(Eo=!0,mi=u)}}function Ma(n){var a=n,t=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,a.flags&4098&&(t=a.return),n=a.return;while(n)}return a.tag===3?t:null}function Sl(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function Vs(n){if(Ma(n)!==n)throw Error(b(188))}function Uu(n){var a=n.alternate;if(!a){if(a=Ma(n),a===null)throw Error(b(188));return a!==n?null:n}for(var t=n,o=a;;){var e=t.return;if(e===null)break;var i=e.alternate;if(i===null){if(o=e.return,o!==null){t=o;continue}break}if(e.child===i.child){for(i=e.child;i;){if(i===t)return Vs(e),n;if(i===o)return Vs(e),a;i=i.sibling}throw Error(b(188))}if(t.return!==o.return)t=e,o=i;else{for(var s=!1,r=e.child;r;){if(r===t){s=!0,t=e,o=i;break}if(r===o){s=!0,o=e,t=i;break}r=r.sibling}if(!s){for(r=i.child;r;){if(r===t){s=!0,t=i,o=e;break}if(r===o){s=!0,o=i,t=e;break}r=r.sibling}if(!s)throw Error(b(189))}}if(t.alternate!==o)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?n:a}function zl(n){return n=Uu(n),n!==null?Ll(n):null}function Ll(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var a=Ll(n);if(a!==null)return a;n=n.sibling}return null}var Cl=bn.unstable_scheduleCallback,qs=bn.unstable_cancelCallback,Ku=bn.unstable_shouldYield,Vu=bn.unstable_requestPaint,U=bn.unstable_now,qu=bn.unstable_getCurrentPriorityLevel,Qi=bn.unstable_ImmediatePriority,xl=bn.unstable_UserBlockingPriority,Bo=bn.unstable_NormalPriority,Yu=bn.unstable_LowPriority,Il=bn.unstable_IdlePriority,te=null,Pn=null;function $u(n){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:Ju,Zu=Math.log,Qu=Math.LN2;function Ju(n){return n>>>=0,n===0?32:31-(Zu(n)/Qu|0)|0}var io=64,so=4194304;function ft(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Do(n,a){var t=n.pendingLanes;if(t===0)return 0;var o=0,e=n.suspendedLanes,i=n.pingedLanes,s=t&268435455;if(s!==0){var r=s&~e;r!==0?o=ft(r):(i&=s,i!==0&&(o=ft(i)))}else s=t&~e,s!==0?o=ft(s):i!==0&&(o=ft(i));if(o===0)return 0;if(a!==0&&a!==o&&!(a&e)&&(e=o&-o,i=a&-a,e>=i||e===16&&(i&4194240)!==0))return a;if(o&4&&(o|=t&16),a=n.entangledLanes,a!==0)for(n=n.entanglements,a&=o;0<a;)t=31-Mn(a),e=1<<t,o|=n[t],a&=~e;return o}function Xu(n,a){switch(n){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nc(n,a){for(var t=n.suspendedLanes,o=n.pingedLanes,e=n.expirationTimes,i=n.pendingLanes;0<i;){var s=31-Mn(i),r=1<<s,l=e[s];l===-1?(!(r&t)||r&o)&&(e[s]=Xu(r,a)):l<=a&&(n.expiredLanes|=r),i&=~r}}function ui(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Al(){var n=io;return io<<=1,!(io&4194240)&&(io=64),n}function Ce(n){for(var a=[],t=0;31>t;t++)a.push(n);return a}function $t(n,a,t){n.pendingLanes|=a,a!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,a=31-Mn(a),n[a]=t}function ac(n,a){var t=n.pendingLanes&~a;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=a,n.mutableReadLanes&=a,n.entangledLanes&=a,a=n.entanglements;var o=n.eventTimes;for(n=n.expirationTimes;0<t;){var e=31-Mn(t),i=1<<e;a[e]=0,o[e]=-1,n[e]=-1,t&=~i}}function Ji(n,a){var t=n.entangledLanes|=a;for(n=n.entanglements;t;){var o=31-Mn(t),e=1<<o;e&a|n[o]&a&&(n[o]|=a),t&=~e}}var T=0;function Rl(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ml,Xi,Tl,El,Bl,ci=!1,ro=[],ta=null,oa=null,ea=null,Bt=new Map,Dt=new Map,Jn=[],tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ys(n,a){switch(n){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":ea=null;break;case"pointerover":case"pointerout":Bt.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dt.delete(a.pointerId)}}function ct(n,a,t,o,e,i){return n===null||n.nativeEvent!==i?(n={blockedOn:a,domEventName:t,eventSystemFlags:o,nativeEvent:i,targetContainers:[e]},a!==null&&(a=Qt(a),a!==null&&Xi(a)),n):(n.eventSystemFlags|=o,a=n.targetContainers,e!==null&&a.indexOf(e)===-1&&a.push(e),n)}function oc(n,a,t,o,e){switch(a){case"focusin":return ta=ct(ta,n,a,t,o,e),!0;case"dragenter":return oa=ct(oa,n,a,t,o,e),!0;case"mouseover":return ea=ct(ea,n,a,t,o,e),!0;case"pointerover":var i=e.pointerId;return Bt.set(i,ct(Bt.get(i)||null,n,a,t,o,e)),!0;case"gotpointercapture":return i=e.pointerId,Dt.set(i,ct(Dt.get(i)||null,n,a,t,o,e)),!0}return!1}function Dl(n){var a=ya(n.target);if(a!==null){var t=Ma(a);if(t!==null){if(a=t.tag,a===13){if(a=Sl(t),a!==null){n.blockedOn=a,Bl(n.priority,function(){Tl(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vo(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var t=di(n.domEventName,n.eventSystemFlags,a[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var o=new t.constructor(t.type,t);si=o,t.target.dispatchEvent(o),si=null}else return a=Qt(t),a!==null&&Xi(a),n.blockedOn=t,!1;a.shift()}return!0}function $s(n,a,t){vo(n)&&t.delete(a)}function ec(){ci=!1,ta!==null&&vo(ta)&&(ta=null),oa!==null&&vo(oa)&&(oa=null),ea!==null&&vo(ea)&&(ea=null),Bt.forEach($s),Dt.forEach($s)}function dt(n,a){n.blockedOn===a&&(n.blockedOn=null,ci||(ci=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,ec)))}function Nt(n){function a(e){return dt(e,n)}if(0<ro.length){dt(ro[0],n);for(var t=1;t<ro.length;t++){var o=ro[t];o.blockedOn===n&&(o.blockedOn=null)}}for(ta!==null&&dt(ta,n),oa!==null&&dt(oa,n),ea!==null&&dt(ea,n),Bt.forEach(a),Dt.forEach(a),t=0;t<Jn.length;t++)o=Jn[t],o.blockedOn===n&&(o.blockedOn=null);for(;0<Jn.length&&(t=Jn[0],t.blockedOn===null);)Dl(t),t.blockedOn===null&&Jn.shift()}var Ya=Yn.ReactCurrentBatchConfig,No=!0;function ic(n,a,t,o){var e=T,i=Ya.transition;Ya.transition=null;try{T=1,ns(n,a,t,o)}finally{T=e,Ya.transition=i}}function sc(n,a,t,o){var e=T,i=Ya.transition;Ya.transition=null;try{T=4,ns(n,a,t,o)}finally{T=e,Ya.transition=i}}function ns(n,a,t,o){if(No){var e=di(n,a,t,o);if(e===null)Ne(n,a,o,Po,t),Ys(n,o);else if(oc(e,n,a,t,o))o.stopPropagation();else if(Ys(n,o),a&4&&-1<tc.indexOf(n)){for(;e!==null;){var i=Qt(e);if(i!==null&&Ml(i),i=di(n,a,t,o),i===null&&Ne(n,a,o,Po,t),i===e)break;e=i}e!==null&&o.stopPropagation()}else Ne(n,a,o,null,t)}}var Po=null;function di(n,a,t,o){if(Po=null,n=Zi(o),n=ya(n),n!==null)if(a=Ma(n),a===null)n=null;else if(t=a.tag,t===13){if(n=Sl(a),n!==null)return n;n=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null);return Po=n,null}function Nl(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qu()){case Qi:return 1;case xl:return 4;case Bo:case Yu:return 16;case Il:return 536870912;default:return 16}default:return 16}}var na=null,as=null,jo=null;function Pl(){if(jo)return jo;var n,a=as,t=a.length,o,e="value"in na?na.value:na.textContent,i=e.length;for(n=0;n<t&&a[n]===e[n];n++);var s=t-n;for(o=1;o<=s&&a[t-o]===e[i-o];o++);return jo=e.slice(n,1<o?1-o:void 0)}function So(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function lo(){return!0}function Zs(){return!1}function fn(n){function a(t,o,e,i,s){this._reactName=t,this._targetInst=e,this.type=o,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],this[r]=t?t(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?lo:Zs,this.isPropagationStopped=Zs,this}return F(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),a}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=fn(it),Zt=F({},it,{view:0,detail:0}),rc=fn(Zt),xe,Ie,pt,oe=F({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:os,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pt&&(pt&&n.type==="mousemove"?(xe=n.screenX-pt.screenX,Ie=n.screenY-pt.screenY):Ie=xe=0,pt=n),xe)},movementY:function(n){return"movementY"in n?n.movementY:Ie}}),Qs=fn(oe),lc=F({},oe,{dataTransfer:0}),mc=fn(lc),uc=F({},Zt,{relatedTarget:0}),Ae=fn(uc),cc=F({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=fn(cc),pc=F({},it,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hc=fn(pc),wc=F({},it,{data:0}),Js=fn(wc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fc(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=kc[n])?!!a[n]:!1}function os(){return fc}var yc=F({},Zt,{key:function(n){if(n.key){var a=gc[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=So(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:os,charCode:function(n){return n.type==="keypress"?So(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?So(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vc=fn(yc),jc=F({},oe,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=fn(jc),Sc=F({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:os}),zc=fn(Sc),Lc=F({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cc=fn(Lc),xc=F({},oe,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ic=fn(xc),Ac=[9,13,27,32],es=Un&&"CompositionEvent"in window,St=null;Un&&"documentMode"in document&&(St=document.documentMode);var Rc=Un&&"TextEvent"in window&&!St,Ol=Un&&(!es||St&&8<St&&11>=St),nr=String.fromCharCode(32),ar=!1;function _l(n,a){switch(n){case"keyup":return Ac.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fl(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Da=!1;function Mc(n,a){switch(n){case"compositionend":return Fl(a);case"keypress":return a.which!==32?null:(ar=!0,nr);case"textInput":return n=a.data,n===nr&&ar?null:n;default:return null}}function Tc(n,a){if(Da)return n==="compositionend"||!es&&_l(n,a)?(n=Pl(),jo=as=na=null,Da=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Ol&&a.locale!=="ko"?null:a.data;default:return null}}var Ec={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tr(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!Ec[n.type]:a==="textarea"}function Hl(n,a,t,o){kl(o),a=Oo(a,"onChange"),0<a.length&&(t=new ts("onChange","change",null,t,o),n.push({event:t,listeners:a}))}var zt=null,Pt=null;function Bc(n){Jl(n,0)}function ee(n){var a=Oa(n);if(cl(a))return n}function Dc(n,a){if(n==="change")return a}var Gl=!1;if(Un){var Re;if(Un){var Me="oninput"in document;if(!Me){var or=document.createElement("div");or.setAttribute("oninput","return;"),Me=typeof or.oninput=="function"}Re=Me}else Re=!1;Gl=Re&&(!document.documentMode||9<document.documentMode)}function er(){zt&&(zt.detachEvent("onpropertychange",Wl),Pt=zt=null)}function Wl(n){if(n.propertyName==="value"&&ee(Pt)){var a=[];Hl(a,Pt,n,Zi(n)),jl(Bc,a)}}function Nc(n,a,t){n==="focusin"?(er(),zt=a,Pt=t,zt.attachEvent("onpropertychange",Wl)):n==="focusout"&&er()}function Pc(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ee(Pt)}function Oc(n,a){if(n==="click")return ee(a)}function _c(n,a){if(n==="input"||n==="change")return ee(a)}function Fc(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var En=typeof Object.is=="function"?Object.is:Fc;function Ot(n,a){if(En(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var t=Object.keys(n),o=Object.keys(a);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var e=t[o];if(!Ye.call(a,e)||!En(n[e],a[e]))return!1}return!0}function ir(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sr(n,a){var t=ir(n);n=0;for(var o;t;){if(t.nodeType===3){if(o=n+t.textContent.length,n<=a&&o>=a)return{node:t,offset:a-n};n=o}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=ir(t)}}function Ul(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Ul(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function Kl(){for(var n=window,a=Mo();a instanceof n.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)n=a.contentWindow;else break;a=Mo(n.document)}return a}function is(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}function Hc(n){var a=Kl(),t=n.focusedElem,o=n.selectionRange;if(a!==t&&t&&t.ownerDocument&&Ul(t.ownerDocument.documentElement,t)){if(o!==null&&is(t)){if(a=o.start,n=o.end,n===void 0&&(n=a),"selectionStart"in t)t.selectionStart=a,t.selectionEnd=Math.min(n,t.value.length);else if(n=(a=t.ownerDocument||document)&&a.defaultView||window,n.getSelection){n=n.getSelection();var e=t.textContent.length,i=Math.min(o.start,e);o=o.end===void 0?i:Math.min(o.end,e),!n.extend&&i>o&&(e=o,o=i,i=e),e=sr(t,i);var s=sr(t,o);e&&s&&(n.rangeCount!==1||n.anchorNode!==e.node||n.anchorOffset!==e.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(a=a.createRange(),a.setStart(e.node,e.offset),n.removeAllRanges(),i>o?(n.addRange(a),n.extend(s.node,s.offset)):(a.setEnd(s.node,s.offset),n.addRange(a)))}}for(a=[],n=t;n=n.parentNode;)n.nodeType===1&&a.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<a.length;t++)n=a[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Gc=Un&&"documentMode"in document&&11>=document.documentMode,Na=null,pi=null,Lt=null,hi=!1;function rr(n,a,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hi||Na==null||Na!==Mo(o)||(o=Na,"selectionStart"in o&&is(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Lt&&Ot(Lt,o)||(Lt=o,o=Oo(pi,"onSelect"),0<o.length&&(a=new ts("onSelect","select",null,a,t),n.push({event:a,listeners:o}),a.target=Na)))}function mo(n,a){var t={};return t[n.toLowerCase()]=a.toLowerCase(),t["Webkit"+n]="webkit"+a,t["Moz"+n]="moz"+a,t}var Pa={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Te={},Vl={};Un&&(Vl=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function ie(n){if(Te[n])return Te[n];if(!Pa[n])return n;var a=Pa[n],t;for(t in a)if(a.hasOwnProperty(t)&&t in Vl)return Te[n]=a[t];return n}var ql=ie("animationend"),Yl=ie("animationiteration"),$l=ie("animationstart"),Zl=ie("transitionend"),Ql=new Map,lr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function da(n,a){Ql.set(n,a),Ra(a,[n])}for(var Ee=0;Ee<lr.length;Ee++){var Be=lr[Ee],Wc=Be.toLowerCase(),Uc=Be[0].toUpperCase()+Be.slice(1);da(Wc,"on"+Uc)}da(ql,"onAnimationEnd");da(Yl,"onAnimationIteration");da($l,"onAnimationStart");da("dblclick","onDoubleClick");da("focusin","onFocus");da("focusout","onBlur");da(Zl,"onTransitionEnd");Qa("onMouseEnter",["mouseout","mouseover"]);Qa("onMouseLeave",["mouseout","mouseover"]);Qa("onPointerEnter",["pointerout","pointerover"]);Qa("onPointerLeave",["pointerout","pointerover"]);Ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ra("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kc=new Set("cancel close invalid load scroll toggle".split(" ").concat(yt));function mr(n,a,t){var o=n.type||"unknown-event";n.currentTarget=t,Wu(o,a,void 0,n),n.currentTarget=null}function Jl(n,a){a=(a&4)!==0;for(var t=0;t<n.length;t++){var o=n[t],e=o.event;o=o.listeners;n:{var i=void 0;if(a)for(var s=o.length-1;0<=s;s--){var r=o[s],l=r.instance,u=r.currentTarget;if(r=r.listener,l!==i&&e.isPropagationStopped())break n;mr(e,r,u),i=l}else for(s=0;s<o.length;s++){if(r=o[s],l=r.instance,u=r.currentTarget,r=r.listener,l!==i&&e.isPropagationStopped())break n;mr(e,r,u),i=l}}}if(Eo)throw n=mi,Eo=!1,mi=null,n}function B(n,a){var t=a[fi];t===void 0&&(t=a[fi]=new Set);var o=n+"__bubble";t.has(o)||(Xl(a,n,2,!1),t.add(o))}function De(n,a,t){var o=0;a&&(o|=4),Xl(t,n,o,a)}var uo="_reactListening"+Math.random().toString(36).slice(2);function _t(n){if(!n[uo]){n[uo]=!0,sl.forEach(function(t){t!=="selectionchange"&&(Kc.has(t)||De(t,!1,n),De(t,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[uo]||(a[uo]=!0,De("selectionchange",!1,a))}}function Xl(n,a,t,o){switch(Nl(a)){case 1:var e=ic;break;case 4:e=sc;break;default:e=ns}t=e.bind(null,a,t,n),e=void 0,!li||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(e=!0),o?e!==void 0?n.addEventListener(a,t,{capture:!0,passive:e}):n.addEventListener(a,t,!0):e!==void 0?n.addEventListener(a,t,{passive:e}):n.addEventListener(a,t,!1)}function Ne(n,a,t,o,e){var i=o;if(!(a&1)&&!(a&2)&&o!==null)n:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var r=o.stateNode.containerInfo;if(r===e||r.nodeType===8&&r.parentNode===e)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===e||l.nodeType===8&&l.parentNode===e))return;s=s.return}for(;r!==null;){if(s=ya(r),s===null)return;if(l=s.tag,l===5||l===6){o=i=s;continue n}r=r.parentNode}}o=o.return}jl(function(){var u=i,w=Zi(t),h=[];n:{var p=Ql.get(n);if(p!==void 0){var k=ts,f=n;switch(n){case"keypress":if(So(t)===0)break n;case"keydown":case"keyup":k=vc;break;case"focusin":f="focus",k=Ae;break;case"focusout":f="blur",k=Ae;break;case"beforeblur":case"afterblur":k=Ae;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=mc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=zc;break;case ql:case Yl:case $l:k=dc;break;case Zl:k=Cc;break;case"scroll":k=rc;break;case"wheel":k=Ic;break;case"copy":case"cut":case"paste":k=hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Xs}var y=(a&4)!==0,N=!y&&n==="scroll",c=y?p!==null?p+"Capture":null:p;y=[];for(var m=u,d;m!==null;){d=m;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,c!==null&&(g=Et(m,c),g!=null&&y.push(Ft(m,g,d)))),N)break;m=m.return}0<y.length&&(p=new k(p,f,null,t,w),h.push({event:p,listeners:y}))}}if(!(a&7)){n:{if(p=n==="mouseover"||n==="pointerover",k=n==="mouseout"||n==="pointerout",p&&t!==si&&(f=t.relatedTarget||t.fromElement)&&(ya(f)||f[Kn]))break n;if((k||p)&&(p=w.window===w?w:(p=w.ownerDocument)?p.defaultView||p.parentWindow:window,k?(f=t.relatedTarget||t.toElement,k=u,f=f?ya(f):null,f!==null&&(N=Ma(f),f!==N||f.tag!==5&&f.tag!==6)&&(f=null)):(k=null,f=u),k!==f)){if(y=Qs,g="onMouseLeave",c="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(y=Xs,g="onPointerLeave",c="onPointerEnter",m="pointer"),N=k==null?p:Oa(k),d=f==null?p:Oa(f),p=new y(g,m+"leave",k,t,w),p.target=N,p.relatedTarget=d,g=null,ya(w)===u&&(y=new y(c,m+"enter",f,t,w),y.target=d,y.relatedTarget=N,g=y),N=g,k&&f)a:{for(y=k,c=f,m=0,d=y;d;d=Ta(d))m++;for(d=0,g=c;g;g=Ta(g))d++;for(;0<m-d;)y=Ta(y),m--;for(;0<d-m;)c=Ta(c),d--;for(;m--;){if(y===c||c!==null&&y===c.alternate)break a;y=Ta(y),c=Ta(c)}y=null}else y=null;k!==null&&ur(h,p,k,y,!1),f!==null&&N!==null&&ur(h,N,f,y,!0)}}n:{if(p=u?Oa(u):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var j=Dc;else if(tr(p))if(Gl)j=_c;else{j=Pc;var z=Nc}else(k=p.nodeName)&&k.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=Oc);if(j&&(j=j(n,u))){Hl(h,j,t,w);break n}z&&z(n,p,u),n==="focusout"&&(z=p._wrapperState)&&z.controlled&&p.type==="number"&&ai(p,"number",p.value)}switch(z=u?Oa(u):window,n){case"focusin":(tr(z)||z.contentEditable==="true")&&(Na=z,pi=u,Lt=null);break;case"focusout":Lt=pi=Na=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,rr(h,t,w);break;case"selectionchange":if(Gc)break;case"keydown":case"keyup":rr(h,t,w)}var L;if(es)n:{switch(n){case"compositionstart":var C="onCompositionStart";break n;case"compositionend":C="onCompositionEnd";break n;case"compositionupdate":C="onCompositionUpdate";break n}C=void 0}else Da?_l(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Ol&&t.locale!=="ko"&&(Da||C!=="onCompositionStart"?C==="onCompositionEnd"&&Da&&(L=Pl()):(na=w,as="value"in na?na.value:na.textContent,Da=!0)),z=Oo(u,C),0<z.length&&(C=new Js(C,n,null,t,w),h.push({event:C,listeners:z}),L?C.data=L:(L=Fl(t),L!==null&&(C.data=L)))),(L=Rc?Mc(n,t):Tc(n,t))&&(u=Oo(u,"onBeforeInput"),0<u.length&&(w=new Js("onBeforeInput","beforeinput",null,t,w),h.push({event:w,listeners:u}),w.data=L))}Jl(h,a)})}function Ft(n,a,t){return{instance:n,listener:a,currentTarget:t}}function Oo(n,a){for(var t=a+"Capture",o=[];n!==null;){var e=n,i=e.stateNode;e.tag===5&&i!==null&&(e=i,i=Et(n,t),i!=null&&o.unshift(Ft(n,i,e)),i=Et(n,a),i!=null&&o.push(Ft(n,i,e))),n=n.return}return o}function Ta(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ur(n,a,t,o,e){for(var i=a._reactName,s=[];t!==null&&t!==o;){var r=t,l=r.alternate,u=r.stateNode;if(l!==null&&l===o)break;r.tag===5&&u!==null&&(r=u,e?(l=Et(t,i),l!=null&&s.unshift(Ft(t,l,r))):e||(l=Et(t,i),l!=null&&s.push(Ft(t,l,r)))),t=t.return}s.length!==0&&n.push({event:a,listeners:s})}var Vc=/\r\n?/g,qc=/\u0000|\uFFFD/g;function cr(n){return(typeof n=="string"?n:""+n).replace(Vc,`
`).replace(qc,"")}function co(n,a,t){if(a=cr(a),cr(n)!==a&&t)throw Error(b(425))}function _o(){}var wi=null,gi=null;function bi(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ki=typeof setTimeout=="function"?setTimeout:void 0,Yc=typeof clearTimeout=="function"?clearTimeout:void 0,dr=typeof Promise=="function"?Promise:void 0,$c=typeof queueMicrotask=="function"?queueMicrotask:typeof dr<"u"?function(n){return dr.resolve(null).then(n).catch(Zc)}:ki;function Zc(n){setTimeout(function(){throw n})}function Pe(n,a){var t=a,o=0;do{var e=t.nextSibling;if(n.removeChild(t),e&&e.nodeType===8)if(t=e.data,t==="/$"){if(o===0){n.removeChild(e),Nt(a);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=e}while(t);Nt(a)}function ia(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return n}function pr(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(a===0)return n;a--}else t==="/$"&&a++}n=n.previousSibling}return null}var st=Math.random().toString(36).slice(2),Nn="__reactFiber$"+st,Ht="__reactProps$"+st,Kn="__reactContainer$"+st,fi="__reactEvents$"+st,Qc="__reactListeners$"+st,Jc="__reactHandles$"+st;function ya(n){var a=n[Nn];if(a)return a;for(var t=n.parentNode;t;){if(a=t[Kn]||t[Nn]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(n=pr(n);n!==null;){if(t=n[Nn])return t;n=pr(n)}return a}n=t,t=n.parentNode}return null}function Qt(n){return n=n[Nn]||n[Kn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Oa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(b(33))}function se(n){return n[Ht]||null}var yi=[],_a=-1;function pa(n){return{current:n}}function D(n){0>_a||(n.current=yi[_a],yi[_a]=null,_a--)}function E(n,a){_a++,yi[_a]=n.current,n.current=a}var ca={},on=pa(ca),cn=pa(!1),La=ca;function Ja(n,a){var t=n.type.contextTypes;if(!t)return ca;var o=n.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===a)return o.__reactInternalMemoizedMaskedChildContext;var e={},i;for(i in t)e[i]=a[i];return o&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=a,n.__reactInternalMemoizedMaskedChildContext=e),e}function dn(n){return n=n.childContextTypes,n!=null}function Fo(){D(cn),D(on)}function hr(n,a,t){if(on.current!==ca)throw Error(b(168));E(on,a),E(cn,t)}function nm(n,a,t){var o=n.stateNode;if(a=a.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var e in o)if(!(e in a))throw Error(b(108,Nu(n)||"Unknown",e));return F({},t,o)}function Ho(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ca,La=on.current,E(on,n),E(cn,cn.current),!0}function wr(n,a,t){var o=n.stateNode;if(!o)throw Error(b(169));t?(n=nm(n,a,La),o.__reactInternalMemoizedMergedChildContext=n,D(cn),D(on),E(on,n)):D(cn),E(cn,t)}var Fn=null,re=!1,Oe=!1;function am(n){Fn===null?Fn=[n]:Fn.push(n)}function Xc(n){re=!0,am(n)}function ha(){if(!Oe&&Fn!==null){Oe=!0;var n=0,a=T;try{var t=Fn;for(T=1;n<t.length;n++){var o=t[n];do o=o(!0);while(o!==null)}Fn=null,re=!1}catch(e){throw Fn!==null&&(Fn=Fn.slice(n+1)),Cl(Qi,ha),e}finally{T=a,Oe=!1}}return null}var Fa=[],Ha=0,Go=null,Wo=0,yn=[],vn=0,Ca=null,Hn=1,Gn="";function ba(n,a){Fa[Ha++]=Wo,Fa[Ha++]=Go,Go=n,Wo=a}function tm(n,a,t){yn[vn++]=Hn,yn[vn++]=Gn,yn[vn++]=Ca,Ca=n;var o=Hn;n=Gn;var e=32-Mn(o)-1;o&=~(1<<e),t+=1;var i=32-Mn(a)+e;if(30<i){var s=e-e%5;i=(o&(1<<s)-1).toString(32),o>>=s,e-=s,Hn=1<<32-Mn(a)+e|t<<e|o,Gn=i+n}else Hn=1<<i|t<<e|o,Gn=n}function ss(n){n.return!==null&&(ba(n,1),tm(n,1,0))}function rs(n){for(;n===Go;)Go=Fa[--Ha],Fa[Ha]=null,Wo=Fa[--Ha],Fa[Ha]=null;for(;n===Ca;)Ca=yn[--vn],yn[vn]=null,Gn=yn[--vn],yn[vn]=null,Hn=yn[--vn],yn[vn]=null}var gn=null,wn=null,P=!1,Rn=null;function om(n,a){var t=jn(5,null,null,0);t.elementType="DELETED",t.stateNode=a,t.return=n,a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)}function gr(n,a){switch(n.tag){case 5:var t=n.type;return a=a.nodeType!==1||t.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(n.stateNode=a,gn=n,wn=ia(a.firstChild),!0):!1;case 6:return a=n.pendingProps===""||a.nodeType!==3?null:a,a!==null?(n.stateNode=a,gn=n,wn=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(t=Ca!==null?{id:Hn,overflow:Gn}:null,n.memoizedState={dehydrated:a,treeContext:t,retryLane:1073741824},t=jn(18,null,null,0),t.stateNode=a,t.return=n,n.child=t,gn=n,wn=null,!0):!1;default:return!1}}function vi(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ji(n){if(P){var a=wn;if(a){var t=a;if(!gr(n,a)){if(vi(n))throw Error(b(418));a=ia(t.nextSibling);var o=gn;a&&gr(n,a)?om(o,t):(n.flags=n.flags&-4097|2,P=!1,gn=n)}}else{if(vi(n))throw Error(b(418));n.flags=n.flags&-4097|2,P=!1,gn=n}}}function br(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;gn=n}function po(n){if(n!==gn)return!1;if(!P)return br(n),P=!0,!1;var a;if((a=n.tag!==3)&&!(a=n.tag!==5)&&(a=n.type,a=a!=="head"&&a!=="body"&&!bi(n.type,n.memoizedProps)),a&&(a=wn)){if(vi(n))throw em(),Error(b(418));for(;a;)om(n,a),a=ia(a.nextSibling)}if(br(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));n:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(a===0){wn=ia(n.nextSibling);break n}a--}else t!=="$"&&t!=="$!"&&t!=="$?"||a++}n=n.nextSibling}wn=null}}else wn=gn?ia(n.stateNode.nextSibling):null;return!0}function em(){for(var n=wn;n;)n=ia(n.nextSibling)}function Xa(){wn=gn=null,P=!1}function ls(n){Rn===null?Rn=[n]:Rn.push(n)}var nd=Yn.ReactCurrentBatchConfig;function ht(n,a,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var o=t.stateNode}if(!o)throw Error(b(147,n));var e=o,i=""+n;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===i?a.ref:(a=function(s){var r=e.refs;s===null?delete r[i]:r[i]=s},a._stringRef=i,a)}if(typeof n!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,n))}return n}function ho(n,a){throw n=Object.prototype.toString.call(a),Error(b(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n))}function kr(n){var a=n._init;return a(n._payload)}function im(n){function a(c,m){if(n){var d=c.deletions;d===null?(c.deletions=[m],c.flags|=16):d.push(m)}}function t(c,m){if(!n)return null;for(;m!==null;)a(c,m),m=m.sibling;return null}function o(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function e(c,m){return c=ma(c,m),c.index=0,c.sibling=null,c}function i(c,m,d){return c.index=d,n?(d=c.alternate,d!==null?(d=d.index,d<m?(c.flags|=2,m):d):(c.flags|=2,m)):(c.flags|=1048576,m)}function s(c){return n&&c.alternate===null&&(c.flags|=2),c}function r(c,m,d,g){return m===null||m.tag!==6?(m=Ke(d,c.mode,g),m.return=c,m):(m=e(m,d),m.return=c,m)}function l(c,m,d,g){var j=d.type;return j===Ba?w(c,m,d.props.children,g,d.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Zn&&kr(j)===m.type)?(g=e(m,d.props),g.ref=ht(c,m,d),g.return=c,g):(g=Ro(d.type,d.key,d.props,null,c.mode,g),g.ref=ht(c,m,d),g.return=c,g)}function u(c,m,d,g){return m===null||m.tag!==4||m.stateNode.containerInfo!==d.containerInfo||m.stateNode.implementation!==d.implementation?(m=Ve(d,c.mode,g),m.return=c,m):(m=e(m,d.children||[]),m.return=c,m)}function w(c,m,d,g,j){return m===null||m.tag!==7?(m=za(d,c.mode,g,j),m.return=c,m):(m=e(m,d),m.return=c,m)}function h(c,m,d){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ke(""+m,c.mode,d),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case to:return d=Ro(m.type,m.key,m.props,null,c.mode,d),d.ref=ht(c,null,m),d.return=c,d;case Ea:return m=Ve(m,c.mode,d),m.return=c,m;case Zn:var g=m._init;return h(c,g(m._payload),d)}if(kt(m)||mt(m))return m=za(m,c.mode,d,null),m.return=c,m;ho(c,m)}return null}function p(c,m,d,g){var j=m!==null?m.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return j!==null?null:r(c,m,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case to:return d.key===j?l(c,m,d,g):null;case Ea:return d.key===j?u(c,m,d,g):null;case Zn:return j=d._init,p(c,m,j(d._payload),g)}if(kt(d)||mt(d))return j!==null?null:w(c,m,d,g,null);ho(c,d)}return null}function k(c,m,d,g,j){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(d)||null,r(m,c,""+g,j);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case to:return c=c.get(g.key===null?d:g.key)||null,l(m,c,g,j);case Ea:return c=c.get(g.key===null?d:g.key)||null,u(m,c,g,j);case Zn:var z=g._init;return k(c,m,d,z(g._payload),j)}if(kt(g)||mt(g))return c=c.get(d)||null,w(m,c,g,j,null);ho(m,g)}return null}function f(c,m,d,g){for(var j=null,z=null,L=m,C=m=0,G=null;L!==null&&C<d.length;C++){L.index>C?(G=L,L=null):G=L.sibling;var R=p(c,L,d[C],g);if(R===null){L===null&&(L=G);break}n&&L&&R.alternate===null&&a(c,L),m=i(R,m,C),z===null?j=R:z.sibling=R,z=R,L=G}if(C===d.length)return t(c,L),P&&ba(c,C),j;if(L===null){for(;C<d.length;C++)L=h(c,d[C],g),L!==null&&(m=i(L,m,C),z===null?j=L:z.sibling=L,z=L);return P&&ba(c,C),j}for(L=o(c,L);C<d.length;C++)G=k(L,c,C,d[C],g),G!==null&&(n&&G.alternate!==null&&L.delete(G.key===null?C:G.key),m=i(G,m,C),z===null?j=G:z.sibling=G,z=G);return n&&L.forEach(function(Cn){return a(c,Cn)}),P&&ba(c,C),j}function y(c,m,d,g){var j=mt(d);if(typeof j!="function")throw Error(b(150));if(d=j.call(d),d==null)throw Error(b(151));for(var z=j=null,L=m,C=m=0,G=null,R=d.next();L!==null&&!R.done;C++,R=d.next()){L.index>C?(G=L,L=null):G=L.sibling;var Cn=p(c,L,R.value,g);if(Cn===null){L===null&&(L=G);break}n&&L&&Cn.alternate===null&&a(c,L),m=i(Cn,m,C),z===null?j=Cn:z.sibling=Cn,z=Cn,L=G}if(R.done)return t(c,L),P&&ba(c,C),j;if(L===null){for(;!R.done;C++,R=d.next())R=h(c,R.value,g),R!==null&&(m=i(R,m,C),z===null?j=R:z.sibling=R,z=R);return P&&ba(c,C),j}for(L=o(c,L);!R.done;C++,R=d.next())R=k(L,c,C,R.value,g),R!==null&&(n&&R.alternate!==null&&L.delete(R.key===null?C:R.key),m=i(R,m,C),z===null?j=R:z.sibling=R,z=R);return n&&L.forEach(function(rt){return a(c,rt)}),P&&ba(c,C),j}function N(c,m,d,g){if(typeof d=="object"&&d!==null&&d.type===Ba&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case to:n:{for(var j=d.key,z=m;z!==null;){if(z.key===j){if(j=d.type,j===Ba){if(z.tag===7){t(c,z.sibling),m=e(z,d.props.children),m.return=c,c=m;break n}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Zn&&kr(j)===z.type){t(c,z.sibling),m=e(z,d.props),m.ref=ht(c,z,d),m.return=c,c=m;break n}t(c,z);break}else a(c,z);z=z.sibling}d.type===Ba?(m=za(d.props.children,c.mode,g,d.key),m.return=c,c=m):(g=Ro(d.type,d.key,d.props,null,c.mode,g),g.ref=ht(c,m,d),g.return=c,c=g)}return s(c);case Ea:n:{for(z=d.key;m!==null;){if(m.key===z)if(m.tag===4&&m.stateNode.containerInfo===d.containerInfo&&m.stateNode.implementation===d.implementation){t(c,m.sibling),m=e(m,d.children||[]),m.return=c,c=m;break n}else{t(c,m);break}else a(c,m);m=m.sibling}m=Ve(d,c.mode,g),m.return=c,c=m}return s(c);case Zn:return z=d._init,N(c,m,z(d._payload),g)}if(kt(d))return f(c,m,d,g);if(mt(d))return y(c,m,d,g);ho(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,m!==null&&m.tag===6?(t(c,m.sibling),m=e(m,d),m.return=c,c=m):(t(c,m),m=Ke(d,c.mode,g),m.return=c,c=m),s(c)):t(c,m)}return N}var nt=im(!0),sm=im(!1),Uo=pa(null),Ko=null,Ga=null,ms=null;function us(){ms=Ga=Ko=null}function cs(n){var a=Uo.current;D(Uo),n._currentValue=a}function Si(n,a,t){for(;n!==null;){var o=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,o!==null&&(o.childLanes|=a)):o!==null&&(o.childLanes&a)!==a&&(o.childLanes|=a),n===t)break;n=n.return}}function $a(n,a){Ko=n,ms=Ga=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&a&&(un=!0),n.firstContext=null)}function zn(n){var a=n._currentValue;if(ms!==n)if(n={context:n,memoizedValue:a,next:null},Ga===null){if(Ko===null)throw Error(b(308));Ga=n,Ko.dependencies={lanes:0,firstContext:n}}else Ga=Ga.next=n;return a}var va=null;function ds(n){va===null?va=[n]:va.push(n)}function rm(n,a,t,o){var e=a.interleaved;return e===null?(t.next=t,ds(a)):(t.next=e.next,e.next=t),a.interleaved=t,Vn(n,o)}function Vn(n,a){n.lanes|=a;var t=n.alternate;for(t!==null&&(t.lanes|=a),t=n,n=n.return;n!==null;)n.childLanes|=a,t=n.alternate,t!==null&&(t.childLanes|=a),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Qn=!1;function ps(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lm(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wn(n,a){return{eventTime:n,lane:a,tag:0,payload:null,callback:null,next:null}}function sa(n,a,t){var o=n.updateQueue;if(o===null)return null;if(o=o.shared,M&2){var e=o.pending;return e===null?a.next=a:(a.next=e.next,e.next=a),o.pending=a,Vn(n,t)}return e=o.interleaved,e===null?(a.next=a,ds(o)):(a.next=e.next,e.next=a),o.interleaved=a,Vn(n,t)}function zo(n,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194240)!==0)){var o=a.lanes;o&=n.pendingLanes,t|=o,a.lanes=t,Ji(n,t)}}function fr(n,a){var t=n.updateQueue,o=n.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var e=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?e=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?e=i=a:i=i.next=a}else e=i=a;t={baseState:o.baseState,firstBaseUpdate:e,lastBaseUpdate:i,shared:o.shared,effects:o.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=a:n.next=a,t.lastBaseUpdate=a}function Vo(n,a,t,o){var e=n.updateQueue;Qn=!1;var i=e.firstBaseUpdate,s=e.lastBaseUpdate,r=e.shared.pending;if(r!==null){e.shared.pending=null;var l=r,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var w=n.alternate;w!==null&&(w=w.updateQueue,r=w.lastBaseUpdate,r!==s&&(r===null?w.firstBaseUpdate=u:r.next=u,w.lastBaseUpdate=l))}if(i!==null){var h=e.baseState;s=0,w=u=l=null,r=i;do{var p=r.lane,k=r.eventTime;if((o&p)===p){w!==null&&(w=w.next={eventTime:k,lane:0,tag:r.tag,payload:r.payload,callback:r.callback,next:null});n:{var f=n,y=r;switch(p=a,k=t,y.tag){case 1:if(f=y.payload,typeof f=="function"){h=f.call(k,h,p);break n}h=f;break n;case 3:f.flags=f.flags&-65537|128;case 0:if(f=y.payload,p=typeof f=="function"?f.call(k,h,p):f,p==null)break n;h=F({},h,p);break n;case 2:Qn=!0}}r.callback!==null&&r.lane!==0&&(n.flags|=64,p=e.effects,p===null?e.effects=[r]:p.push(r))}else k={eventTime:k,lane:p,tag:r.tag,payload:r.payload,callback:r.callback,next:null},w===null?(u=w=k,l=h):w=w.next=k,s|=p;if(r=r.next,r===null){if(r=e.shared.pending,r===null)break;p=r,r=p.next,p.next=null,e.lastBaseUpdate=p,e.shared.pending=null}}while(1);if(w===null&&(l=h),e.baseState=l,e.firstBaseUpdate=u,e.lastBaseUpdate=w,a=e.shared.interleaved,a!==null){e=a;do s|=e.lane,e=e.next;while(e!==a)}else i===null&&(e.shared.lanes=0);Ia|=s,n.lanes=s,n.memoizedState=h}}function yr(n,a,t){if(n=a.effects,a.effects=null,n!==null)for(a=0;a<n.length;a++){var o=n[a],e=o.callback;if(e!==null){if(o.callback=null,o=t,typeof e!="function")throw Error(b(191,e));e.call(o)}}}var Jt={},On=pa(Jt),Gt=pa(Jt),Wt=pa(Jt);function ja(n){if(n===Jt)throw Error(b(174));return n}function hs(n,a){switch(E(Wt,a),E(Gt,n),E(On,Jt),n=a.nodeType,n){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:oi(null,"");break;default:n=n===8?a.parentNode:a,a=n.namespaceURI||null,n=n.tagName,a=oi(a,n)}D(On),E(On,a)}function at(){D(On),D(Gt),D(Wt)}function mm(n){ja(Wt.current);var a=ja(On.current),t=oi(a,n.type);a!==t&&(E(Gt,n),E(On,t))}function ws(n){Gt.current===n&&(D(On),D(Gt))}var O=pa(0);function qo(n){for(var a=n;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var _e=[];function gs(){for(var n=0;n<_e.length;n++)_e[n]._workInProgressVersionPrimary=null;_e.length=0}var Lo=Yn.ReactCurrentDispatcher,Fe=Yn.ReactCurrentBatchConfig,xa=0,_=null,V=null,$=null,Yo=!1,Ct=!1,Ut=0,ad=0;function nn(){throw Error(b(321))}function bs(n,a){if(a===null)return!1;for(var t=0;t<a.length&&t<n.length;t++)if(!En(n[t],a[t]))return!1;return!0}function ks(n,a,t,o,e,i){if(xa=i,_=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Lo.current=n===null||n.memoizedState===null?id:sd,n=t(o,e),Ct){i=0;do{if(Ct=!1,Ut=0,25<=i)throw Error(b(301));i+=1,$=V=null,a.updateQueue=null,Lo.current=rd,n=t(o,e)}while(Ct)}if(Lo.current=$o,a=V!==null&&V.next!==null,xa=0,$=V=_=null,Yo=!1,a)throw Error(b(300));return n}function fs(){var n=Ut!==0;return Ut=0,n}function Dn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $===null?_.memoizedState=$=n:$=$.next=n,$}function Ln(){if(V===null){var n=_.alternate;n=n!==null?n.memoizedState:null}else n=V.next;var a=$===null?_.memoizedState:$.next;if(a!==null)$=a,V=n;else{if(n===null)throw Error(b(310));V=n,n={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},$===null?_.memoizedState=$=n:$=$.next=n}return $}function Kt(n,a){return typeof a=="function"?a(n):a}function He(n){var a=Ln(),t=a.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=n;var o=V,e=o.baseQueue,i=t.pending;if(i!==null){if(e!==null){var s=e.next;e.next=i.next,i.next=s}o.baseQueue=e=i,t.pending=null}if(e!==null){i=e.next,o=o.baseState;var r=s=null,l=null,u=i;do{var w=u.lane;if((xa&w)===w)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:n(o,u.action);else{var h={lane:w,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(r=l=h,s=o):l=l.next=h,_.lanes|=w,Ia|=w}u=u.next}while(u!==null&&u!==i);l===null?s=o:l.next=r,En(o,a.memoizedState)||(un=!0),a.memoizedState=o,a.baseState=s,a.baseQueue=l,t.lastRenderedState=o}if(n=t.interleaved,n!==null){e=n;do i=e.lane,_.lanes|=i,Ia|=i,e=e.next;while(e!==n)}else e===null&&(t.lanes=0);return[a.memoizedState,t.dispatch]}function Ge(n){var a=Ln(),t=a.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=n;var o=t.dispatch,e=t.pending,i=a.memoizedState;if(e!==null){t.pending=null;var s=e=e.next;do i=n(i,s.action),s=s.next;while(s!==e);En(i,a.memoizedState)||(un=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,o]}function um(){}function cm(n,a){var t=_,o=Ln(),e=a(),i=!En(o.memoizedState,e);if(i&&(o.memoizedState=e,un=!0),o=o.queue,ys(hm.bind(null,t,o,n),[n]),o.getSnapshot!==a||i||$!==null&&$.memoizedState.tag&1){if(t.flags|=2048,Vt(9,pm.bind(null,t,o,e,a),void 0,null),Z===null)throw Error(b(349));xa&30||dm(t,a,e)}return e}function dm(n,a,t){n.flags|=16384,n={getSnapshot:a,value:t},a=_.updateQueue,a===null?(a={lastEffect:null,stores:null},_.updateQueue=a,a.stores=[n]):(t=a.stores,t===null?a.stores=[n]:t.push(n))}function pm(n,a,t,o){a.value=t,a.getSnapshot=o,wm(a)&&gm(n)}function hm(n,a,t){return t(function(){wm(a)&&gm(n)})}function wm(n){var a=n.getSnapshot;n=n.value;try{var t=a();return!En(n,t)}catch{return!0}}function gm(n){var a=Vn(n,1);a!==null&&Tn(a,n,1,-1)}function vr(n){var a=Dn();return typeof n=="function"&&(n=n()),a.memoizedState=a.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:n},a.queue=n,n=n.dispatch=ed.bind(null,_,n),[a.memoizedState,n]}function Vt(n,a,t,o){return n={tag:n,create:a,destroy:t,deps:o,next:null},a=_.updateQueue,a===null?(a={lastEffect:null,stores:null},_.updateQueue=a,a.lastEffect=n.next=n):(t=a.lastEffect,t===null?a.lastEffect=n.next=n:(o=t.next,t.next=n,n.next=o,a.lastEffect=n)),n}function bm(){return Ln().memoizedState}function Co(n,a,t,o){var e=Dn();_.flags|=n,e.memoizedState=Vt(1|a,t,void 0,o===void 0?null:o)}function le(n,a,t,o){var e=Ln();o=o===void 0?null:o;var i=void 0;if(V!==null){var s=V.memoizedState;if(i=s.destroy,o!==null&&bs(o,s.deps)){e.memoizedState=Vt(a,t,i,o);return}}_.flags|=n,e.memoizedState=Vt(1|a,t,i,o)}function jr(n,a){return Co(8390656,8,n,a)}function ys(n,a){return le(2048,8,n,a)}function km(n,a){return le(4,2,n,a)}function fm(n,a){return le(4,4,n,a)}function ym(n,a){if(typeof a=="function")return n=n(),a(n),function(){a(null)};if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function vm(n,a,t){return t=t!=null?t.concat([n]):null,le(4,4,ym.bind(null,a,n),t)}function vs(){}function jm(n,a){var t=Ln();a=a===void 0?null:a;var o=t.memoizedState;return o!==null&&a!==null&&bs(a,o[1])?o[0]:(t.memoizedState=[n,a],n)}function Sm(n,a){var t=Ln();a=a===void 0?null:a;var o=t.memoizedState;return o!==null&&a!==null&&bs(a,o[1])?o[0]:(n=n(),t.memoizedState=[n,a],n)}function zm(n,a,t){return xa&21?(En(t,a)||(t=Al(),_.lanes|=t,Ia|=t,n.baseState=!0),a):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=t)}function td(n,a){var t=T;T=t!==0&&4>t?t:4,n(!0);var o=Fe.transition;Fe.transition={};try{n(!1),a()}finally{T=t,Fe.transition=o}}function Lm(){return Ln().memoizedState}function od(n,a,t){var o=la(n);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},Cm(n))xm(a,t);else if(t=rm(n,a,t,o),t!==null){var e=sn();Tn(t,n,o,e),Im(t,a,o)}}function ed(n,a,t){var o=la(n),e={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cm(n))xm(a,e);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var s=a.lastRenderedState,r=i(s,t);if(e.hasEagerState=!0,e.eagerState=r,En(r,s)){var l=a.interleaved;l===null?(e.next=e,ds(a)):(e.next=l.next,l.next=e),a.interleaved=e;return}}catch{}finally{}t=rm(n,a,e,o),t!==null&&(e=sn(),Tn(t,n,o,e),Im(t,a,o))}}function Cm(n){var a=n.alternate;return n===_||a!==null&&a===_}function xm(n,a){Ct=Yo=!0;var t=n.pending;t===null?a.next=a:(a.next=t.next,t.next=a),n.pending=a}function Im(n,a,t){if(t&4194240){var o=a.lanes;o&=n.pendingLanes,t|=o,a.lanes=t,Ji(n,t)}}var $o={readContext:zn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},id={readContext:zn,useCallback:function(n,a){return Dn().memoizedState=[n,a===void 0?null:a],n},useContext:zn,useEffect:jr,useImperativeHandle:function(n,a,t){return t=t!=null?t.concat([n]):null,Co(4194308,4,ym.bind(null,a,n),t)},useLayoutEffect:function(n,a){return Co(4194308,4,n,a)},useInsertionEffect:function(n,a){return Co(4,2,n,a)},useMemo:function(n,a){var t=Dn();return a=a===void 0?null:a,n=n(),t.memoizedState=[n,a],n},useReducer:function(n,a,t){var o=Dn();return a=t!==void 0?t(a):a,o.memoizedState=o.baseState=a,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},o.queue=n,n=n.dispatch=od.bind(null,_,n),[o.memoizedState,n]},useRef:function(n){var a=Dn();return n={current:n},a.memoizedState=n},useState:vr,useDebugValue:vs,useDeferredValue:function(n){return Dn().memoizedState=n},useTransition:function(){var n=vr(!1),a=n[0];return n=td.bind(null,n[1]),Dn().memoizedState=n,[a,n]},useMutableSource:function(){},useSyncExternalStore:function(n,a,t){var o=_,e=Dn();if(P){if(t===void 0)throw Error(b(407));t=t()}else{if(t=a(),Z===null)throw Error(b(349));xa&30||dm(o,a,t)}e.memoizedState=t;var i={value:t,getSnapshot:a};return e.queue=i,jr(hm.bind(null,o,i,n),[n]),o.flags|=2048,Vt(9,pm.bind(null,o,i,t,a),void 0,null),t},useId:function(){var n=Dn(),a=Z.identifierPrefix;if(P){var t=Gn,o=Hn;t=(o&~(1<<32-Mn(o)-1)).toString(32)+t,a=":"+a+"R"+t,t=Ut++,0<t&&(a+="H"+t.toString(32)),a+=":"}else t=ad++,a=":"+a+"r"+t.toString(32)+":";return n.memoizedState=a},unstable_isNewReconciler:!1},sd={readContext:zn,useCallback:jm,useContext:zn,useEffect:ys,useImperativeHandle:vm,useInsertionEffect:km,useLayoutEffect:fm,useMemo:Sm,useReducer:He,useRef:bm,useState:function(){return He(Kt)},useDebugValue:vs,useDeferredValue:function(n){var a=Ln();return zm(a,V.memoizedState,n)},useTransition:function(){var n=He(Kt)[0],a=Ln().memoizedState;return[n,a]},useMutableSource:um,useSyncExternalStore:cm,useId:Lm,unstable_isNewReconciler:!1},rd={readContext:zn,useCallback:jm,useContext:zn,useEffect:ys,useImperativeHandle:vm,useInsertionEffect:km,useLayoutEffect:fm,useMemo:Sm,useReducer:Ge,useRef:bm,useState:function(){return Ge(Kt)},useDebugValue:vs,useDeferredValue:function(n){var a=Ln();return V===null?a.memoizedState=n:zm(a,V.memoizedState,n)},useTransition:function(){var n=Ge(Kt)[0],a=Ln().memoizedState;return[n,a]},useMutableSource:um,useSyncExternalStore:cm,useId:Lm,unstable_isNewReconciler:!1};function In(n,a){if(n&&n.defaultProps){a=F({},a),n=n.defaultProps;for(var t in n)a[t]===void 0&&(a[t]=n[t]);return a}return a}function zi(n,a,t,o){a=n.memoizedState,t=t(o,a),t=t==null?a:F({},a,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var me={isMounted:function(n){return(n=n._reactInternals)?Ma(n)===n:!1},enqueueSetState:function(n,a,t){n=n._reactInternals;var o=sn(),e=la(n),i=Wn(o,e);i.payload=a,t!=null&&(i.callback=t),a=sa(n,i,e),a!==null&&(Tn(a,n,e,o),zo(a,n,e))},enqueueReplaceState:function(n,a,t){n=n._reactInternals;var o=sn(),e=la(n),i=Wn(o,e);i.tag=1,i.payload=a,t!=null&&(i.callback=t),a=sa(n,i,e),a!==null&&(Tn(a,n,e,o),zo(a,n,e))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var t=sn(),o=la(n),e=Wn(t,o);e.tag=2,a!=null&&(e.callback=a),a=sa(n,e,o),a!==null&&(Tn(a,n,o,t),zo(a,n,o))}};function Sr(n,a,t,o,e,i,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(o,i,s):a.prototype&&a.prototype.isPureReactComponent?!Ot(t,o)||!Ot(e,i):!0}function Am(n,a,t){var o=!1,e=ca,i=a.contextType;return typeof i=="object"&&i!==null?i=zn(i):(e=dn(a)?La:on.current,o=a.contextTypes,i=(o=o!=null)?Ja(n,e):ca),a=new a(t,i),n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=me,n.stateNode=a,a._reactInternals=n,o&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),a}function zr(n,a,t,o){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,o),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,o),a.state!==n&&me.enqueueReplaceState(a,a.state,null)}function Li(n,a,t,o){var e=n.stateNode;e.props=t,e.state=n.memoizedState,e.refs={},ps(n);var i=a.contextType;typeof i=="object"&&i!==null?e.context=zn(i):(i=dn(a)?La:on.current,e.context=Ja(n,i)),e.state=n.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(zi(n,a,i,t),e.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof e.getSnapshotBeforeUpdate=="function"||typeof e.UNSAFE_componentWillMount!="function"&&typeof e.componentWillMount!="function"||(a=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),a!==e.state&&me.enqueueReplaceState(e,e.state,null),Vo(n,t,e,o),e.state=n.memoizedState),typeof e.componentDidMount=="function"&&(n.flags|=4194308)}function tt(n,a){try{var t="",o=a;do t+=Du(o),o=o.return;while(o);var e=t}catch(i){e=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:a,stack:e,digest:null}}function We(n,a,t){return{value:n,source:null,stack:t??null,digest:a??null}}function Ci(n,a){try{console.error(a.value)}catch(t){setTimeout(function(){throw t})}}var ld=typeof WeakMap=="function"?WeakMap:Map;function Rm(n,a,t){t=Wn(-1,t),t.tag=3,t.payload={element:null};var o=a.value;return t.callback=function(){Qo||(Qo=!0,Ni=o),Ci(n,a)},t}function Mm(n,a,t){t=Wn(-1,t),t.tag=3;var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var e=a.value;t.payload=function(){return o(e)},t.callback=function(){Ci(n,a)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ci(n,a),typeof o!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})}),t}function Lr(n,a,t){var o=n.pingCache;if(o===null){o=n.pingCache=new ld;var e=new Set;o.set(a,e)}else e=o.get(a),e===void 0&&(e=new Set,o.set(a,e));e.has(t)||(e.add(t),n=jd.bind(null,n,a,t),a.then(n,n))}function Cr(n){do{var a;if((a=n.tag===13)&&(a=n.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return n;n=n.return}while(n!==null);return null}function xr(n,a,t,o,e){return n.mode&1?(n.flags|=65536,n.lanes=e,n):(n===a?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(a=Wn(-1,1),a.tag=2,sa(t,a,1))),t.lanes|=1),n)}var md=Yn.ReactCurrentOwner,un=!1;function en(n,a,t,o){a.child=n===null?sm(a,null,t,o):nt(a,n.child,t,o)}function Ir(n,a,t,o,e){t=t.render;var i=a.ref;return $a(a,e),o=ks(n,a,t,o,i,e),t=fs(),n!==null&&!un?(a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~e,qn(n,a,e)):(P&&t&&ss(a),a.flags|=1,en(n,a,o,e),a.child)}function Ar(n,a,t,o,e){if(n===null){var i=t.type;return typeof i=="function"&&!As(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(a.tag=15,a.type=i,Tm(n,a,i,o,e)):(n=Ro(t.type,null,o,a,a.mode,e),n.ref=a.ref,n.return=a,a.child=n)}if(i=n.child,!(n.lanes&e)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ot,t(s,o)&&n.ref===a.ref)return qn(n,a,e)}return a.flags|=1,n=ma(i,o),n.ref=a.ref,n.return=a,a.child=n}function Tm(n,a,t,o,e){if(n!==null){var i=n.memoizedProps;if(Ot(i,o)&&n.ref===a.ref)if(un=!1,a.pendingProps=o=i,(n.lanes&e)!==0)n.flags&131072&&(un=!0);else return a.lanes=n.lanes,qn(n,a,e)}return xi(n,a,t,o,e)}function Em(n,a,t){var o=a.pendingProps,e=o.children,i=n!==null?n.memoizedState:null;if(o.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},E(Ua,hn),hn|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:n,cachePool:null,transitions:null},a.updateQueue=null,E(Ua,hn),hn|=n,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:t,E(Ua,hn),hn|=o}else i!==null?(o=i.baseLanes|t,a.memoizedState=null):o=t,E(Ua,hn),hn|=o;return en(n,a,e,t),a.child}function Bm(n,a){var t=a.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(a.flags|=512,a.flags|=2097152)}function xi(n,a,t,o,e){var i=dn(t)?La:on.current;return i=Ja(a,i),$a(a,e),t=ks(n,a,t,o,i,e),o=fs(),n!==null&&!un?(a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~e,qn(n,a,e)):(P&&o&&ss(a),a.flags|=1,en(n,a,t,e),a.child)}function Rr(n,a,t,o,e){if(dn(t)){var i=!0;Ho(a)}else i=!1;if($a(a,e),a.stateNode===null)xo(n,a),Am(a,t,o),Li(a,t,o,e),o=!0;else if(n===null){var s=a.stateNode,r=a.memoizedProps;s.props=r;var l=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=dn(t)?La:on.current,u=Ja(a,u));var w=t.getDerivedStateFromProps,h=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==o||l!==u)&&zr(a,s,o,u),Qn=!1;var p=a.memoizedState;s.state=p,Vo(a,o,s,e),l=a.memoizedState,r!==o||p!==l||cn.current||Qn?(typeof w=="function"&&(zi(a,t,w,o),l=a.memoizedState),(r=Qn||Sr(a,t,r,o,p,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=o,a.memoizedState=l),s.props=o,s.state=l,s.context=u,o=r):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),o=!1)}else{s=a.stateNode,lm(n,a),r=a.memoizedProps,u=a.type===a.elementType?r:In(a.type,r),s.props=u,h=a.pendingProps,p=s.context,l=t.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=dn(t)?La:on.current,l=Ja(a,l));var k=t.getDerivedStateFromProps;(w=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==h||p!==l)&&zr(a,s,o,l),Qn=!1,p=a.memoizedState,s.state=p,Vo(a,o,s,e);var f=a.memoizedState;r!==h||p!==f||cn.current||Qn?(typeof k=="function"&&(zi(a,t,k,o),f=a.memoizedState),(u=Qn||Sr(a,t,u,o,p,f,l)||!1)?(w||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,f,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,f,l)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===n.memoizedProps&&p===n.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&p===n.memoizedState||(a.flags|=1024),a.memoizedProps=o,a.memoizedState=f),s.props=o,s.state=f,s.context=l,o=u):(typeof s.componentDidUpdate!="function"||r===n.memoizedProps&&p===n.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&p===n.memoizedState||(a.flags|=1024),o=!1)}return Ii(n,a,t,o,i,e)}function Ii(n,a,t,o,e,i){Bm(n,a);var s=(a.flags&128)!==0;if(!o&&!s)return e&&wr(a,t,!1),qn(n,a,i);o=a.stateNode,md.current=a;var r=s&&typeof t.getDerivedStateFromError!="function"?null:o.render();return a.flags|=1,n!==null&&s?(a.child=nt(a,n.child,null,i),a.child=nt(a,null,r,i)):en(n,a,r,i),a.memoizedState=o.state,e&&wr(a,t,!0),a.child}function Dm(n){var a=n.stateNode;a.pendingContext?hr(n,a.pendingContext,a.pendingContext!==a.context):a.context&&hr(n,a.context,!1),hs(n,a.containerInfo)}function Mr(n,a,t,o,e){return Xa(),ls(e),a.flags|=256,en(n,a,t,o),a.child}var Ai={dehydrated:null,treeContext:null,retryLane:0};function Ri(n){return{baseLanes:n,cachePool:null,transitions:null}}function Nm(n,a,t){var o=a.pendingProps,e=O.current,i=!1,s=(a.flags&128)!==0,r;if((r=s)||(r=n!==null&&n.memoizedState===null?!1:(e&2)!==0),r?(i=!0,a.flags&=-129):(n===null||n.memoizedState!==null)&&(e|=1),E(O,e&1),n===null)return ji(a),n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(a.mode&1?n.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(s=o.children,n=o.fallback,i?(o=a.mode,i=a.child,s={mode:"hidden",children:s},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=de(s,o,0,null),n=za(n,o,t,null),i.return=a,n.return=a,i.sibling=n,a.child=i,a.child.memoizedState=Ri(t),a.memoizedState=Ai,n):js(a,s));if(e=n.memoizedState,e!==null&&(r=e.dehydrated,r!==null))return ud(n,a,s,o,r,e,t);if(i){i=o.fallback,s=a.mode,e=n.child,r=e.sibling;var l={mode:"hidden",children:o.children};return!(s&1)&&a.child!==e?(o=a.child,o.childLanes=0,o.pendingProps=l,a.deletions=null):(o=ma(e,l),o.subtreeFlags=e.subtreeFlags&14680064),r!==null?i=ma(r,i):(i=za(i,s,t,null),i.flags|=2),i.return=a,o.return=a,o.sibling=i,a.child=o,o=i,i=a.child,s=n.child.memoizedState,s=s===null?Ri(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=n.childLanes&~t,a.memoizedState=Ai,o}return i=n.child,n=i.sibling,o=ma(i,{mode:"visible",children:o.children}),!(a.mode&1)&&(o.lanes=t),o.return=a,o.sibling=null,n!==null&&(t=a.deletions,t===null?(a.deletions=[n],a.flags|=16):t.push(n)),a.child=o,a.memoizedState=null,o}function js(n,a){return a=de({mode:"visible",children:a},n.mode,0,null),a.return=n,n.child=a}function wo(n,a,t,o){return o!==null&&ls(o),nt(a,n.child,null,t),n=js(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function ud(n,a,t,o,e,i,s){if(t)return a.flags&256?(a.flags&=-257,o=We(Error(b(422))),wo(n,a,s,o)):a.memoizedState!==null?(a.child=n.child,a.flags|=128,null):(i=o.fallback,e=a.mode,o=de({mode:"visible",children:o.children},e,0,null),i=za(i,e,s,null),i.flags|=2,o.return=a,i.return=a,o.sibling=i,a.child=o,a.mode&1&&nt(a,n.child,null,s),a.child.memoizedState=Ri(s),a.memoizedState=Ai,i);if(!(a.mode&1))return wo(n,a,s,null);if(e.data==="$!"){if(o=e.nextSibling&&e.nextSibling.dataset,o)var r=o.dgst;return o=r,i=Error(b(419)),o=We(i,o,void 0),wo(n,a,s,o)}if(r=(s&n.childLanes)!==0,un||r){if(o=Z,o!==null){switch(s&-s){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=e&(o.suspendedLanes|s)?0:e,e!==0&&e!==i.retryLane&&(i.retryLane=e,Vn(n,e),Tn(o,n,e,-1))}return Is(),o=We(Error(b(421))),wo(n,a,s,o)}return e.data==="$?"?(a.flags|=128,a.child=n.child,a=Sd.bind(null,n),e._reactRetry=a,null):(n=i.treeContext,wn=ia(e.nextSibling),gn=a,P=!0,Rn=null,n!==null&&(yn[vn++]=Hn,yn[vn++]=Gn,yn[vn++]=Ca,Hn=n.id,Gn=n.overflow,Ca=a),a=js(a,o.children),a.flags|=4096,a)}function Tr(n,a,t){n.lanes|=a;var o=n.alternate;o!==null&&(o.lanes|=a),Si(n.return,a,t)}function Ue(n,a,t,o,e){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:e}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=t,i.tailMode=e)}function Pm(n,a,t){var o=a.pendingProps,e=o.revealOrder,i=o.tail;if(en(n,a,o.children,t),o=O.current,o&2)o=o&1|2,a.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tr(n,t,a);else if(n.tag===19)Tr(n,t,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break n;for(;n.sibling===null;){if(n.return===null||n.return===a)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}o&=1}if(E(O,o),!(a.mode&1))a.memoizedState=null;else switch(e){case"forwards":for(t=a.child,e=null;t!==null;)n=t.alternate,n!==null&&qo(n)===null&&(e=t),t=t.sibling;t=e,t===null?(e=a.child,a.child=null):(e=t.sibling,t.sibling=null),Ue(a,!1,e,t,i);break;case"backwards":for(t=null,e=a.child,a.child=null;e!==null;){if(n=e.alternate,n!==null&&qo(n)===null){a.child=e;break}n=e.sibling,e.sibling=t,t=e,e=n}Ue(a,!0,t,null,i);break;case"together":Ue(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function xo(n,a){!(a.mode&1)&&n!==null&&(n.alternate=null,a.alternate=null,a.flags|=2)}function qn(n,a,t){if(n!==null&&(a.dependencies=n.dependencies),Ia|=a.lanes,!(t&a.childLanes))return null;if(n!==null&&a.child!==n.child)throw Error(b(153));if(a.child!==null){for(n=a.child,t=ma(n,n.pendingProps),a.child=t,t.return=a;n.sibling!==null;)n=n.sibling,t=t.sibling=ma(n,n.pendingProps),t.return=a;t.sibling=null}return a.child}function cd(n,a,t){switch(a.tag){case 3:Dm(a),Xa();break;case 5:mm(a);break;case 1:dn(a.type)&&Ho(a);break;case 4:hs(a,a.stateNode.containerInfo);break;case 10:var o=a.type._context,e=a.memoizedProps.value;E(Uo,o._currentValue),o._currentValue=e;break;case 13:if(o=a.memoizedState,o!==null)return o.dehydrated!==null?(E(O,O.current&1),a.flags|=128,null):t&a.child.childLanes?Nm(n,a,t):(E(O,O.current&1),n=qn(n,a,t),n!==null?n.sibling:null);E(O,O.current&1);break;case 19:if(o=(t&a.childLanes)!==0,n.flags&128){if(o)return Pm(n,a,t);a.flags|=128}if(e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),E(O,O.current),o)break;return null;case 22:case 23:return a.lanes=0,Em(n,a,t)}return qn(n,a,t)}var Om,Mi,_m,Fm;Om=function(n,a){for(var t=a.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Mi=function(){};_m=function(n,a,t,o){var e=n.memoizedProps;if(e!==o){n=a.stateNode,ja(On.current);var i=null;switch(t){case"input":e=Xe(n,e),o=Xe(n,o),i=[];break;case"select":e=F({},e,{value:void 0}),o=F({},o,{value:void 0}),i=[];break;case"textarea":e=ti(n,e),o=ti(n,o),i=[];break;default:typeof e.onClick!="function"&&typeof o.onClick=="function"&&(n.onclick=_o)}ei(t,o);var s;t=null;for(u in e)if(!o.hasOwnProperty(u)&&e.hasOwnProperty(u)&&e[u]!=null)if(u==="style"){var r=e[u];for(s in r)r.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mt.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in o){var l=o[u];if(r=e!=null?e[u]:void 0,o.hasOwnProperty(u)&&l!==r&&(l!=null||r!=null))if(u==="style")if(r){for(s in r)!r.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in l)l.hasOwnProperty(s)&&r[s]!==l[s]&&(t||(t={}),t[s]=l[s])}else t||(i||(i=[]),i.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,r=r?r.__html:void 0,l!=null&&r!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mt.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",n),i||r===l||(i=[])):(i=i||[]).push(u,l))}t&&(i=i||[]).push("style",t);var u=i;(a.updateQueue=u)&&(a.flags|=4)}};Fm=function(n,a,t,o){t!==o&&(a.flags|=4)};function wt(n,a){if(!P)switch(n.tailMode){case"hidden":a=n.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:o.sibling=null}}function an(n){var a=n.alternate!==null&&n.alternate.child===n.child,t=0,o=0;if(a)for(var e=n.child;e!==null;)t|=e.lanes|e.childLanes,o|=e.subtreeFlags&14680064,o|=e.flags&14680064,e.return=n,e=e.sibling;else for(e=n.child;e!==null;)t|=e.lanes|e.childLanes,o|=e.subtreeFlags,o|=e.flags,e.return=n,e=e.sibling;return n.subtreeFlags|=o,n.childLanes=t,a}function dd(n,a,t){var o=a.pendingProps;switch(rs(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(a),null;case 1:return dn(a.type)&&Fo(),an(a),null;case 3:return o=a.stateNode,at(),D(cn),D(on),gs(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(po(a)?a.flags|=4:n===null||n.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Rn!==null&&(_i(Rn),Rn=null))),Mi(n,a),an(a),null;case 5:ws(a);var e=ja(Wt.current);if(t=a.type,n!==null&&a.stateNode!=null)_m(n,a,t,o,e),n.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!o){if(a.stateNode===null)throw Error(b(166));return an(a),null}if(n=ja(On.current),po(a)){o=a.stateNode,t=a.type;var i=a.memoizedProps;switch(o[Nn]=a,o[Ht]=i,n=(a.mode&1)!==0,t){case"dialog":B("cancel",o),B("close",o);break;case"iframe":case"object":case"embed":B("load",o);break;case"video":case"audio":for(e=0;e<yt.length;e++)B(yt[e],o);break;case"source":B("error",o);break;case"img":case"image":case"link":B("error",o),B("load",o);break;case"details":B("toggle",o);break;case"input":Hs(o,i),B("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},B("invalid",o);break;case"textarea":Ws(o,i),B("invalid",o)}ei(t,i),e=null;for(var s in i)if(i.hasOwnProperty(s)){var r=i[s];s==="children"?typeof r=="string"?o.textContent!==r&&(i.suppressHydrationWarning!==!0&&co(o.textContent,r,n),e=["children",r]):typeof r=="number"&&o.textContent!==""+r&&(i.suppressHydrationWarning!==!0&&co(o.textContent,r,n),e=["children",""+r]):Mt.hasOwnProperty(s)&&r!=null&&s==="onScroll"&&B("scroll",o)}switch(t){case"input":oo(o),Gs(o,i,!0);break;case"textarea":oo(o),Us(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=_o)}o=e,a.updateQueue=o,o!==null&&(a.flags|=4)}else{s=e.nodeType===9?e:e.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=hl(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof o.is=="string"?n=s.createElement(t,{is:o.is}):(n=s.createElement(t),t==="select"&&(s=n,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):n=s.createElementNS(n,t),n[Nn]=a,n[Ht]=o,Om(n,a,!1,!1),a.stateNode=n;n:{switch(s=ii(t,o),t){case"dialog":B("cancel",n),B("close",n),e=o;break;case"iframe":case"object":case"embed":B("load",n),e=o;break;case"video":case"audio":for(e=0;e<yt.length;e++)B(yt[e],n);e=o;break;case"source":B("error",n),e=o;break;case"img":case"image":case"link":B("error",n),B("load",n),e=o;break;case"details":B("toggle",n),e=o;break;case"input":Hs(n,o),e=Xe(n,o),B("invalid",n);break;case"option":e=o;break;case"select":n._wrapperState={wasMultiple:!!o.multiple},e=F({},o,{value:void 0}),B("invalid",n);break;case"textarea":Ws(n,o),e=ti(n,o),B("invalid",n);break;default:e=o}ei(t,e),r=e;for(i in r)if(r.hasOwnProperty(i)){var l=r[i];i==="style"?bl(n,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wl(n,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Tt(n,l):typeof l=="number"&&Tt(n,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mt.hasOwnProperty(i)?l!=null&&i==="onScroll"&&B("scroll",n):l!=null&&Vi(n,i,l,s))}switch(t){case"input":oo(n),Gs(n,o,!1);break;case"textarea":oo(n),Us(n);break;case"option":o.value!=null&&n.setAttribute("value",""+ua(o.value));break;case"select":n.multiple=!!o.multiple,i=o.value,i!=null?Ka(n,!!o.multiple,i,!1):o.defaultValue!=null&&Ka(n,!!o.multiple,o.defaultValue,!0);break;default:typeof e.onClick=="function"&&(n.onclick=_o)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break n;case"img":o=!0;break n;default:o=!1}}o&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return an(a),null;case 6:if(n&&a.stateNode!=null)Fm(n,a,n.memoizedProps,o);else{if(typeof o!="string"&&a.stateNode===null)throw Error(b(166));if(t=ja(Wt.current),ja(On.current),po(a)){if(o=a.stateNode,t=a.memoizedProps,o[Nn]=a,(i=o.nodeValue!==t)&&(n=gn,n!==null))switch(n.tag){case 3:co(o.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&co(o.nodeValue,t,(n.mode&1)!==0)}i&&(a.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Nn]=a,a.stateNode=o}return an(a),null;case 13:if(D(O),o=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(P&&wn!==null&&a.mode&1&&!(a.flags&128))em(),Xa(),a.flags|=98560,i=!1;else if(i=po(a),o!==null&&o.dehydrated!==null){if(n===null){if(!i)throw Error(b(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[Nn]=a}else Xa(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;an(a),i=!1}else Rn!==null&&(_i(Rn),Rn=null),i=!0;if(!i)return a.flags&65536?a:null}return a.flags&128?(a.lanes=t,a):(o=o!==null,o!==(n!==null&&n.memoizedState!==null)&&o&&(a.child.flags|=8192,a.mode&1&&(n===null||O.current&1?q===0&&(q=3):Is())),a.updateQueue!==null&&(a.flags|=4),an(a),null);case 4:return at(),Mi(n,a),n===null&&_t(a.stateNode.containerInfo),an(a),null;case 10:return cs(a.type._context),an(a),null;case 17:return dn(a.type)&&Fo(),an(a),null;case 19:if(D(O),i=a.memoizedState,i===null)return an(a),null;if(o=(a.flags&128)!==0,s=i.rendering,s===null)if(o)wt(i,!1);else{if(q!==0||n!==null&&n.flags&128)for(n=a.child;n!==null;){if(s=qo(n),s!==null){for(a.flags|=128,wt(i,!1),o=s.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),a.subtreeFlags=0,o=t,t=a.child;t!==null;)i=t,n=o,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,n=s.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return E(O,O.current&1|2),a.child}n=n.sibling}i.tail!==null&&U()>ot&&(a.flags|=128,o=!0,wt(i,!1),a.lanes=4194304)}else{if(!o)if(n=qo(s),n!==null){if(a.flags|=128,o=!0,t=n.updateQueue,t!==null&&(a.updateQueue=t,a.flags|=4),wt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!P)return an(a),null}else 2*U()-i.renderingStartTime>ot&&t!==1073741824&&(a.flags|=128,o=!0,wt(i,!1),a.lanes=4194304);i.isBackwards?(s.sibling=a.child,a.child=s):(t=i.last,t!==null?t.sibling=s:a.child=s,i.last=s)}return i.tail!==null?(a=i.tail,i.rendering=a,i.tail=a.sibling,i.renderingStartTime=U(),a.sibling=null,t=O.current,E(O,o?t&1|2:t&1),a):(an(a),null);case 22:case 23:return xs(),o=a.memoizedState!==null,n!==null&&n.memoizedState!==null!==o&&(a.flags|=8192),o&&a.mode&1?hn&1073741824&&(an(a),a.subtreeFlags&6&&(a.flags|=8192)):an(a),null;case 24:return null;case 25:return null}throw Error(b(156,a.tag))}function pd(n,a){switch(rs(a),a.tag){case 1:return dn(a.type)&&Fo(),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return at(),D(cn),D(on),gs(),n=a.flags,n&65536&&!(n&128)?(a.flags=n&-65537|128,a):null;case 5:return ws(a),null;case 13:if(D(O),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(b(340));Xa()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return D(O),null;case 4:return at(),null;case 10:return cs(a.type._context),null;case 22:case 23:return xs(),null;case 24:return null;default:return null}}var go=!1,tn=!1,hd=typeof WeakSet=="function"?WeakSet:Set,v=null;function Wa(n,a){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){H(n,a,o)}else t.current=null}function Ti(n,a,t){try{t()}catch(o){H(n,a,o)}}var Er=!1;function wd(n,a){if(wi=No,n=Kl(),is(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var e=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var s=0,r=-1,l=-1,u=0,w=0,h=n,p=null;a:for(;;){for(var k;h!==t||e!==0&&h.nodeType!==3||(r=s+e),h!==i||o!==0&&h.nodeType!==3||(l=s+o),h.nodeType===3&&(s+=h.nodeValue.length),(k=h.firstChild)!==null;)p=h,h=k;for(;;){if(h===n)break a;if(p===t&&++u===e&&(r=s),p===i&&++w===o&&(l=s),(k=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=k}t=r===-1||l===-1?null:{start:r,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(gi={focusedElem:n,selectionRange:t},No=!1,v=a;v!==null;)if(a=v,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,v=n;else for(;v!==null;){a=v;try{var f=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var y=f.memoizedProps,N=f.memoizedState,c=a.stateNode,m=c.getSnapshotBeforeUpdate(a.elementType===a.type?y:In(a.type,y),N);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var d=a.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(g){H(a,a.return,g)}if(n=a.sibling,n!==null){n.return=a.return,v=n;break}v=a.return}return f=Er,Er=!1,f}function xt(n,a,t){var o=a.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var e=o=o.next;do{if((e.tag&n)===n){var i=e.destroy;e.destroy=void 0,i!==void 0&&Ti(a,t,i)}e=e.next}while(e!==o)}}function ue(n,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&n)===n){var o=t.create;t.destroy=o()}t=t.next}while(t!==a)}}function Ei(n){var a=n.ref;if(a!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof a=="function"?a(n):a.current=n}}function Hm(n){var a=n.alternate;a!==null&&(n.alternate=null,Hm(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&(delete a[Nn],delete a[Ht],delete a[fi],delete a[Qc],delete a[Jc])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Gm(n){return n.tag===5||n.tag===3||n.tag===4}function Br(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Gm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bi(n,a,t){var o=n.tag;if(o===5||o===6)n=n.stateNode,a?t.nodeType===8?t.parentNode.insertBefore(n,a):t.insertBefore(n,a):(t.nodeType===8?(a=t.parentNode,a.insertBefore(n,t)):(a=t,a.appendChild(n)),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=_o));else if(o!==4&&(n=n.child,n!==null))for(Bi(n,a,t),n=n.sibling;n!==null;)Bi(n,a,t),n=n.sibling}function Di(n,a,t){var o=n.tag;if(o===5||o===6)n=n.stateNode,a?t.insertBefore(n,a):t.appendChild(n);else if(o!==4&&(n=n.child,n!==null))for(Di(n,a,t),n=n.sibling;n!==null;)Di(n,a,t),n=n.sibling}var Q=null,An=!1;function $n(n,a,t){for(t=t.child;t!==null;)Wm(n,a,t),t=t.sibling}function Wm(n,a,t){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(te,t)}catch{}switch(t.tag){case 5:tn||Wa(t,a);case 6:var o=Q,e=An;Q=null,$n(n,a,t),Q=o,An=e,Q!==null&&(An?(n=Q,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Q.removeChild(t.stateNode));break;case 18:Q!==null&&(An?(n=Q,t=t.stateNode,n.nodeType===8?Pe(n.parentNode,t):n.nodeType===1&&Pe(n,t),Nt(n)):Pe(Q,t.stateNode));break;case 4:o=Q,e=An,Q=t.stateNode.containerInfo,An=!0,$n(n,a,t),Q=o,An=e;break;case 0:case 11:case 14:case 15:if(!tn&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){e=o=o.next;do{var i=e,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Ti(t,a,s),e=e.next}while(e!==o)}$n(n,a,t);break;case 1:if(!tn&&(Wa(t,a),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(r){H(t,a,r)}$n(n,a,t);break;case 21:$n(n,a,t);break;case 22:t.mode&1?(tn=(o=tn)||t.memoizedState!==null,$n(n,a,t),tn=o):$n(n,a,t);break;default:$n(n,a,t)}}function Dr(n){var a=n.updateQueue;if(a!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new hd),a.forEach(function(o){var e=zd.bind(null,n,o);t.has(o)||(t.add(o),o.then(e,e))})}}function xn(n,a){var t=a.deletions;if(t!==null)for(var o=0;o<t.length;o++){var e=t[o];try{var i=n,s=a,r=s;n:for(;r!==null;){switch(r.tag){case 5:Q=r.stateNode,An=!1;break n;case 3:Q=r.stateNode.containerInfo,An=!0;break n;case 4:Q=r.stateNode.containerInfo,An=!0;break n}r=r.return}if(Q===null)throw Error(b(160));Wm(i,s,e),Q=null,An=!1;var l=e.alternate;l!==null&&(l.return=null),e.return=null}catch(u){H(e,a,u)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Um(a,n),a=a.sibling}function Um(n,a){var t=n.alternate,o=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(a,n),Bn(n),o&4){try{xt(3,n,n.return),ue(3,n)}catch(y){H(n,n.return,y)}try{xt(5,n,n.return)}catch(y){H(n,n.return,y)}}break;case 1:xn(a,n),Bn(n),o&512&&t!==null&&Wa(t,t.return);break;case 5:if(xn(a,n),Bn(n),o&512&&t!==null&&Wa(t,t.return),n.flags&32){var e=n.stateNode;try{Tt(e,"")}catch(y){H(n,n.return,y)}}if(o&4&&(e=n.stateNode,e!=null)){var i=n.memoizedProps,s=t!==null?t.memoizedProps:i,r=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{r==="input"&&i.type==="radio"&&i.name!=null&&dl(e,i),ii(r,s);var u=ii(r,i);for(s=0;s<l.length;s+=2){var w=l[s],h=l[s+1];w==="style"?bl(e,h):w==="dangerouslySetInnerHTML"?wl(e,h):w==="children"?Tt(e,h):Vi(e,w,h,u)}switch(r){case"input":ni(e,i);break;case"textarea":pl(e,i);break;case"select":var p=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Ka(e,!!i.multiple,k,!1):p!==!!i.multiple&&(i.defaultValue!=null?Ka(e,!!i.multiple,i.defaultValue,!0):Ka(e,!!i.multiple,i.multiple?[]:"",!1))}e[Ht]=i}catch(y){H(n,n.return,y)}}break;case 6:if(xn(a,n),Bn(n),o&4){if(n.stateNode===null)throw Error(b(162));e=n.stateNode,i=n.memoizedProps;try{e.nodeValue=i}catch(y){H(n,n.return,y)}}break;case 3:if(xn(a,n),Bn(n),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Nt(a.containerInfo)}catch(y){H(n,n.return,y)}break;case 4:xn(a,n),Bn(n);break;case 13:xn(a,n),Bn(n),e=n.child,e.flags&8192&&(i=e.memoizedState!==null,e.stateNode.isHidden=i,!i||e.alternate!==null&&e.alternate.memoizedState!==null||(Ls=U())),o&4&&Dr(n);break;case 22:if(w=t!==null&&t.memoizedState!==null,n.mode&1?(tn=(u=tn)||w,xn(a,n),tn=u):xn(a,n),Bn(n),o&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!w&&n.mode&1)for(v=n,w=n.child;w!==null;){for(h=v=w;v!==null;){switch(p=v,k=p.child,p.tag){case 0:case 11:case 14:case 15:xt(4,p,p.return);break;case 1:Wa(p,p.return);var f=p.stateNode;if(typeof f.componentWillUnmount=="function"){o=p,t=p.return;try{a=o,f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(y){H(o,t,y)}}break;case 5:Wa(p,p.return);break;case 22:if(p.memoizedState!==null){Pr(h);continue}}k!==null?(k.return=p,v=k):Pr(h)}w=w.sibling}n:for(w=null,h=n;;){if(h.tag===5){if(w===null){w=h;try{e=h.stateNode,u?(i=e.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(r=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,r.style.display=gl("display",s))}catch(y){H(n,n.return,y)}}}else if(h.tag===6){if(w===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){H(n,n.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break n;for(;h.sibling===null;){if(h.return===null||h.return===n)break n;w===h&&(w=null),h=h.return}w===h&&(w=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xn(a,n),Bn(n),o&4&&Dr(n);break;case 21:break;default:xn(a,n),Bn(n)}}function Bn(n){var a=n.flags;if(a&2){try{n:{for(var t=n.return;t!==null;){if(Gm(t)){var o=t;break n}t=t.return}throw Error(b(160))}switch(o.tag){case 5:var e=o.stateNode;o.flags&32&&(Tt(e,""),o.flags&=-33);var i=Br(n);Di(n,i,e);break;case 3:case 4:var s=o.stateNode.containerInfo,r=Br(n);Bi(n,r,s);break;default:throw Error(b(161))}}catch(l){H(n,n.return,l)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function gd(n,a,t){v=n,Km(n)}function Km(n,a,t){for(var o=(n.mode&1)!==0;v!==null;){var e=v,i=e.child;if(e.tag===22&&o){var s=e.memoizedState!==null||go;if(!s){var r=e.alternate,l=r!==null&&r.memoizedState!==null||tn;r=go;var u=tn;if(go=s,(tn=l)&&!u)for(v=e;v!==null;)s=v,l=s.child,s.tag===22&&s.memoizedState!==null?Or(e):l!==null?(l.return=s,v=l):Or(e);for(;i!==null;)v=i,Km(i),i=i.sibling;v=e,go=r,tn=u}Nr(n)}else e.subtreeFlags&8772&&i!==null?(i.return=e,v=i):Nr(n)}}function Nr(n){for(;v!==null;){var a=v;if(a.flags&8772){var t=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:tn||ue(5,a);break;case 1:var o=a.stateNode;if(a.flags&4&&!tn)if(t===null)o.componentDidMount();else{var e=a.elementType===a.type?t.memoizedProps:In(a.type,t.memoizedProps);o.componentDidUpdate(e,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=a.updateQueue;i!==null&&yr(a,i,o);break;case 3:var s=a.updateQueue;if(s!==null){if(t=null,a.child!==null)switch(a.child.tag){case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}yr(a,s,t)}break;case 5:var r=a.stateNode;if(t===null&&a.flags&4){t=r;var l=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var u=a.alternate;if(u!==null){var w=u.memoizedState;if(w!==null){var h=w.dehydrated;h!==null&&Nt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}tn||a.flags&512&&Ei(a)}catch(p){H(a,a.return,p)}}if(a===n){v=null;break}if(t=a.sibling,t!==null){t.return=a.return,v=t;break}v=a.return}}function Pr(n){for(;v!==null;){var a=v;if(a===n){v=null;break}var t=a.sibling;if(t!==null){t.return=a.return,v=t;break}v=a.return}}function Or(n){for(;v!==null;){var a=v;try{switch(a.tag){case 0:case 11:case 15:var t=a.return;try{ue(4,a)}catch(l){H(a,t,l)}break;case 1:var o=a.stateNode;if(typeof o.componentDidMount=="function"){var e=a.return;try{o.componentDidMount()}catch(l){H(a,e,l)}}var i=a.return;try{Ei(a)}catch(l){H(a,i,l)}break;case 5:var s=a.return;try{Ei(a)}catch(l){H(a,s,l)}}}catch(l){H(a,a.return,l)}if(a===n){v=null;break}var r=a.sibling;if(r!==null){r.return=a.return,v=r;break}v=a.return}}var bd=Math.ceil,Zo=Yn.ReactCurrentDispatcher,Ss=Yn.ReactCurrentOwner,Sn=Yn.ReactCurrentBatchConfig,M=0,Z=null,K=null,J=0,hn=0,Ua=pa(0),q=0,qt=null,Ia=0,ce=0,zs=0,It=null,mn=null,Ls=0,ot=1/0,_n=null,Qo=!1,Ni=null,ra=null,bo=!1,aa=null,Jo=0,At=0,Pi=null,Io=-1,Ao=0;function sn(){return M&6?U():Io!==-1?Io:Io=U()}function la(n){return n.mode&1?M&2&&J!==0?J&-J:nd.transition!==null?(Ao===0&&(Ao=Al()),Ao):(n=T,n!==0||(n=window.event,n=n===void 0?16:Nl(n.type)),n):1}function Tn(n,a,t,o){if(50<At)throw At=0,Pi=null,Error(b(185));$t(n,t,o),(!(M&2)||n!==Z)&&(n===Z&&(!(M&2)&&(ce|=t),q===4&&Xn(n,J)),pn(n,o),t===1&&M===0&&!(a.mode&1)&&(ot=U()+500,re&&ha()))}function pn(n,a){var t=n.callbackNode;nc(n,a);var o=Do(n,n===Z?J:0);if(o===0)t!==null&&qs(t),n.callbackNode=null,n.callbackPriority=0;else if(a=o&-o,n.callbackPriority!==a){if(t!=null&&qs(t),a===1)n.tag===0?Xc(_r.bind(null,n)):am(_r.bind(null,n)),$c(function(){!(M&6)&&ha()}),t=null;else{switch(Rl(o)){case 1:t=Qi;break;case 4:t=xl;break;case 16:t=Bo;break;case 536870912:t=Il;break;default:t=Bo}t=Xm(t,Vm.bind(null,n))}n.callbackPriority=a,n.callbackNode=t}}function Vm(n,a){if(Io=-1,Ao=0,M&6)throw Error(b(327));var t=n.callbackNode;if(Za()&&n.callbackNode!==t)return null;var o=Do(n,n===Z?J:0);if(o===0)return null;if(o&30||o&n.expiredLanes||a)a=Xo(n,o);else{a=o;var e=M;M|=2;var i=Ym();(Z!==n||J!==a)&&(_n=null,ot=U()+500,Sa(n,a));do try{yd();break}catch(r){qm(n,r)}while(1);us(),Zo.current=i,M=e,K!==null?a=0:(Z=null,J=0,a=q)}if(a!==0){if(a===2&&(e=ui(n),e!==0&&(o=e,a=Oi(n,e))),a===1)throw t=qt,Sa(n,0),Xn(n,o),pn(n,U()),t;if(a===6)Xn(n,o);else{if(e=n.current.alternate,!(o&30)&&!kd(e)&&(a=Xo(n,o),a===2&&(i=ui(n),i!==0&&(o=i,a=Oi(n,i))),a===1))throw t=qt,Sa(n,0),Xn(n,o),pn(n,U()),t;switch(n.finishedWork=e,n.finishedLanes=o,a){case 0:case 1:throw Error(b(345));case 2:ka(n,mn,_n);break;case 3:if(Xn(n,o),(o&130023424)===o&&(a=Ls+500-U(),10<a)){if(Do(n,0)!==0)break;if(e=n.suspendedLanes,(e&o)!==o){sn(),n.pingedLanes|=n.suspendedLanes&e;break}n.timeoutHandle=ki(ka.bind(null,n,mn,_n),a);break}ka(n,mn,_n);break;case 4:if(Xn(n,o),(o&4194240)===o)break;for(a=n.eventTimes,e=-1;0<o;){var s=31-Mn(o);i=1<<s,s=a[s],s>e&&(e=s),o&=~i}if(o=e,o=U()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*bd(o/1960))-o,10<o){n.timeoutHandle=ki(ka.bind(null,n,mn,_n),o);break}ka(n,mn,_n);break;case 5:ka(n,mn,_n);break;default:throw Error(b(329))}}}return pn(n,U()),n.callbackNode===t?Vm.bind(null,n):null}function Oi(n,a){var t=It;return n.current.memoizedState.isDehydrated&&(Sa(n,a).flags|=256),n=Xo(n,a),n!==2&&(a=mn,mn=t,a!==null&&_i(a)),n}function _i(n){mn===null?mn=n:mn.push.apply(mn,n)}function kd(n){for(var a=n;;){if(a.flags&16384){var t=a.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var e=t[o],i=e.getSnapshot;e=e.value;try{if(!En(i(),e))return!1}catch{return!1}}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Xn(n,a){for(a&=~zs,a&=~ce,n.suspendedLanes|=a,n.pingedLanes&=~a,n=n.expirationTimes;0<a;){var t=31-Mn(a),o=1<<t;n[t]=-1,a&=~o}}function _r(n){if(M&6)throw Error(b(327));Za();var a=Do(n,0);if(!(a&1))return pn(n,U()),null;var t=Xo(n,a);if(n.tag!==0&&t===2){var o=ui(n);o!==0&&(a=o,t=Oi(n,o))}if(t===1)throw t=qt,Sa(n,0),Xn(n,a),pn(n,U()),t;if(t===6)throw Error(b(345));return n.finishedWork=n.current.alternate,n.finishedLanes=a,ka(n,mn,_n),pn(n,U()),null}function Cs(n,a){var t=M;M|=1;try{return n(a)}finally{M=t,M===0&&(ot=U()+500,re&&ha())}}function Aa(n){aa!==null&&aa.tag===0&&!(M&6)&&Za();var a=M;M|=1;var t=Sn.transition,o=T;try{if(Sn.transition=null,T=1,n)return n()}finally{T=o,Sn.transition=t,M=a,!(M&6)&&ha()}}function xs(){hn=Ua.current,D(Ua)}function Sa(n,a){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Yc(t)),K!==null)for(t=K.return;t!==null;){var o=t;switch(rs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fo();break;case 3:at(),D(cn),D(on),gs();break;case 5:ws(o);break;case 4:at();break;case 13:D(O);break;case 19:D(O);break;case 10:cs(o.type._context);break;case 22:case 23:xs()}t=t.return}if(Z=n,K=n=ma(n.current,null),J=hn=a,q=0,qt=null,zs=ce=Ia=0,mn=It=null,va!==null){for(a=0;a<va.length;a++)if(t=va[a],o=t.interleaved,o!==null){t.interleaved=null;var e=o.next,i=t.pending;if(i!==null){var s=i.next;i.next=e,o.next=s}t.pending=o}va=null}return n}function qm(n,a){do{var t=K;try{if(us(),Lo.current=$o,Yo){for(var o=_.memoizedState;o!==null;){var e=o.queue;e!==null&&(e.pending=null),o=o.next}Yo=!1}if(xa=0,$=V=_=null,Ct=!1,Ut=0,Ss.current=null,t===null||t.return===null){q=1,qt=a,K=null;break}n:{var i=n,s=t.return,r=t,l=a;if(a=J,r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,w=r,h=w.tag;if(!(w.mode&1)&&(h===0||h===11||h===15)){var p=w.alternate;p?(w.updateQueue=p.updateQueue,w.memoizedState=p.memoizedState,w.lanes=p.lanes):(w.updateQueue=null,w.memoizedState=null)}var k=Cr(s);if(k!==null){k.flags&=-257,xr(k,s,r,i,a),k.mode&1&&Lr(i,u,a),a=k,l=u;var f=a.updateQueue;if(f===null){var y=new Set;y.add(l),a.updateQueue=y}else f.add(l);break n}else{if(!(a&1)){Lr(i,u,a),Is();break n}l=Error(b(426))}}else if(P&&r.mode&1){var N=Cr(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),xr(N,s,r,i,a),ls(tt(l,r));break n}}i=l=tt(l,r),q!==4&&(q=2),It===null?It=[i]:It.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,a&=-a,i.lanes|=a;var c=Rm(i,l,a);fr(i,c);break n;case 1:r=l;var m=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ra===null||!ra.has(d)))){i.flags|=65536,a&=-a,i.lanes|=a;var g=Mm(i,r,a);fr(i,g);break n}}i=i.return}while(i!==null)}Zm(t)}catch(j){a=j,K===t&&t!==null&&(K=t=t.return);continue}break}while(1)}function Ym(){var n=Zo.current;return Zo.current=$o,n===null?$o:n}function Is(){(q===0||q===3||q===2)&&(q=4),Z===null||!(Ia&268435455)&&!(ce&268435455)||Xn(Z,J)}function Xo(n,a){var t=M;M|=2;var o=Ym();(Z!==n||J!==a)&&(_n=null,Sa(n,a));do try{fd();break}catch(e){qm(n,e)}while(1);if(us(),M=t,Zo.current=o,K!==null)throw Error(b(261));return Z=null,J=0,q}function fd(){for(;K!==null;)$m(K)}function yd(){for(;K!==null&&!Ku();)$m(K)}function $m(n){var a=Jm(n.alternate,n,hn);n.memoizedProps=n.pendingProps,a===null?Zm(n):K=a,Ss.current=null}function Zm(n){var a=n;do{var t=a.alternate;if(n=a.return,a.flags&32768){if(t=pd(t,a),t!==null){t.flags&=32767,K=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{q=6,K=null;return}}else if(t=dd(t,a,hn),t!==null){K=t;return}if(a=a.sibling,a!==null){K=a;return}K=a=n}while(a!==null);q===0&&(q=5)}function ka(n,a,t){var o=T,e=Sn.transition;try{Sn.transition=null,T=1,vd(n,a,t,o)}finally{Sn.transition=e,T=o}return null}function vd(n,a,t,o){do Za();while(aa!==null);if(M&6)throw Error(b(327));t=n.finishedWork;var e=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(b(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(ac(n,i),n===Z&&(K=Z=null,J=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||bo||(bo=!0,Xm(Bo,function(){return Za(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Sn.transition,Sn.transition=null;var s=T;T=1;var r=M;M|=4,Ss.current=null,wd(n,t),Um(t,n),Hc(gi),No=!!wi,gi=wi=null,n.current=t,gd(t),Vu(),M=r,T=s,Sn.transition=i}else n.current=t;if(bo&&(bo=!1,aa=n,Jo=e),i=n.pendingLanes,i===0&&(ra=null),$u(t.stateNode),pn(n,U()),a!==null)for(o=n.onRecoverableError,t=0;t<a.length;t++)e=a[t],o(e.value,{componentStack:e.stack,digest:e.digest});if(Qo)throw Qo=!1,n=Ni,Ni=null,n;return Jo&1&&n.tag!==0&&Za(),i=n.pendingLanes,i&1?n===Pi?At++:(At=0,Pi=n):At=0,ha(),null}function Za(){if(aa!==null){var n=Rl(Jo),a=Sn.transition,t=T;try{if(Sn.transition=null,T=16>n?16:n,aa===null)var o=!1;else{if(n=aa,aa=null,Jo=0,M&6)throw Error(b(331));var e=M;for(M|=4,v=n.current;v!==null;){var i=v,s=i.child;if(v.flags&16){var r=i.deletions;if(r!==null){for(var l=0;l<r.length;l++){var u=r[l];for(v=u;v!==null;){var w=v;switch(w.tag){case 0:case 11:case 15:xt(8,w,i)}var h=w.child;if(h!==null)h.return=w,v=h;else for(;v!==null;){w=v;var p=w.sibling,k=w.return;if(Hm(w),w===u){v=null;break}if(p!==null){p.return=k,v=p;break}v=k}}}var f=i.alternate;if(f!==null){var y=f.child;if(y!==null){f.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}v=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,v=s;else n:for(;v!==null;){if(i=v,i.flags&2048)switch(i.tag){case 0:case 11:case 15:xt(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,v=c;break n}v=i.return}}var m=n.current;for(v=m;v!==null;){s=v;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,v=d;else n:for(s=m;v!==null;){if(r=v,r.flags&2048)try{switch(r.tag){case 0:case 11:case 15:ue(9,r)}}catch(j){H(r,r.return,j)}if(r===s){v=null;break n}var g=r.sibling;if(g!==null){g.return=r.return,v=g;break n}v=r.return}}if(M=e,ha(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(te,n)}catch{}o=!0}return o}finally{T=t,Sn.transition=a}}return!1}function Fr(n,a,t){a=tt(t,a),a=Rm(n,a,1),n=sa(n,a,1),a=sn(),n!==null&&($t(n,1,a),pn(n,a))}function H(n,a,t){if(n.tag===3)Fr(n,n,t);else for(;a!==null;){if(a.tag===3){Fr(a,n,t);break}else if(a.tag===1){var o=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ra===null||!ra.has(o))){n=tt(t,n),n=Mm(a,n,1),a=sa(a,n,1),n=sn(),a!==null&&($t(a,1,n),pn(a,n));break}}a=a.return}}function jd(n,a,t){var o=n.pingCache;o!==null&&o.delete(a),a=sn(),n.pingedLanes|=n.suspendedLanes&t,Z===n&&(J&t)===t&&(q===4||q===3&&(J&130023424)===J&&500>U()-Ls?Sa(n,0):zs|=t),pn(n,a)}function Qm(n,a){a===0&&(n.mode&1?(a=so,so<<=1,!(so&130023424)&&(so=4194304)):a=1);var t=sn();n=Vn(n,a),n!==null&&($t(n,a,t),pn(n,t))}function Sd(n){var a=n.memoizedState,t=0;a!==null&&(t=a.retryLane),Qm(n,t)}function zd(n,a){var t=0;switch(n.tag){case 13:var o=n.stateNode,e=n.memoizedState;e!==null&&(t=e.retryLane);break;case 19:o=n.stateNode;break;default:throw Error(b(314))}o!==null&&o.delete(a),Qm(n,t)}var Jm;Jm=function(n,a,t){if(n!==null)if(n.memoizedProps!==a.pendingProps||cn.current)un=!0;else{if(!(n.lanes&t)&&!(a.flags&128))return un=!1,cd(n,a,t);un=!!(n.flags&131072)}else un=!1,P&&a.flags&1048576&&tm(a,Wo,a.index);switch(a.lanes=0,a.tag){case 2:var o=a.type;xo(n,a),n=a.pendingProps;var e=Ja(a,on.current);$a(a,t),e=ks(null,a,o,n,e,t);var i=fs();return a.flags|=1,typeof e=="object"&&e!==null&&typeof e.render=="function"&&e.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,dn(o)?(i=!0,Ho(a)):i=!1,a.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,ps(a),e.updater=me,a.stateNode=e,e._reactInternals=a,Li(a,o,n,t),a=Ii(null,a,o,!0,i,t)):(a.tag=0,P&&i&&ss(a),en(null,a,e,t),a=a.child),a;case 16:o=a.elementType;n:{switch(xo(n,a),n=a.pendingProps,e=o._init,o=e(o._payload),a.type=o,e=a.tag=Cd(o),n=In(o,n),e){case 0:a=xi(null,a,o,n,t);break n;case 1:a=Rr(null,a,o,n,t);break n;case 11:a=Ir(null,a,o,n,t);break n;case 14:a=Ar(null,a,o,In(o.type,n),t);break n}throw Error(b(306,o,""))}return a;case 0:return o=a.type,e=a.pendingProps,e=a.elementType===o?e:In(o,e),xi(n,a,o,e,t);case 1:return o=a.type,e=a.pendingProps,e=a.elementType===o?e:In(o,e),Rr(n,a,o,e,t);case 3:n:{if(Dm(a),n===null)throw Error(b(387));o=a.pendingProps,i=a.memoizedState,e=i.element,lm(n,a),Vo(a,o,null,t);var s=a.memoizedState;if(o=s.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){e=tt(Error(b(423)),a),a=Mr(n,a,o,t,e);break n}else if(o!==e){e=tt(Error(b(424)),a),a=Mr(n,a,o,t,e);break n}else for(wn=ia(a.stateNode.containerInfo.firstChild),gn=a,P=!0,Rn=null,t=sm(a,null,o,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Xa(),o===e){a=qn(n,a,t);break n}en(n,a,o,t)}a=a.child}return a;case 5:return mm(a),n===null&&ji(a),o=a.type,e=a.pendingProps,i=n!==null?n.memoizedProps:null,s=e.children,bi(o,e)?s=null:i!==null&&bi(o,i)&&(a.flags|=32),Bm(n,a),en(n,a,s,t),a.child;case 6:return n===null&&ji(a),null;case 13:return Nm(n,a,t);case 4:return hs(a,a.stateNode.containerInfo),o=a.pendingProps,n===null?a.child=nt(a,null,o,t):en(n,a,o,t),a.child;case 11:return o=a.type,e=a.pendingProps,e=a.elementType===o?e:In(o,e),Ir(n,a,o,e,t);case 7:return en(n,a,a.pendingProps,t),a.child;case 8:return en(n,a,a.pendingProps.children,t),a.child;case 12:return en(n,a,a.pendingProps.children,t),a.child;case 10:n:{if(o=a.type._context,e=a.pendingProps,i=a.memoizedProps,s=e.value,E(Uo,o._currentValue),o._currentValue=s,i!==null)if(En(i.value,s)){if(i.children===e.children&&!cn.current){a=qn(n,a,t);break n}}else for(i=a.child,i!==null&&(i.return=a);i!==null;){var r=i.dependencies;if(r!==null){s=i.child;for(var l=r.firstContext;l!==null;){if(l.context===o){if(i.tag===1){l=Wn(-1,t&-t),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var w=u.pending;w===null?l.next=l:(l.next=w.next,w.next=l),u.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Si(i.return,t,a),r.lanes|=t;break}l=l.next}}else if(i.tag===10)s=i.type===a.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(b(341));s.lanes|=t,r=s.alternate,r!==null&&(r.lanes|=t),Si(s,t,a),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===a){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}en(n,a,e.children,t),a=a.child}return a;case 9:return e=a.type,o=a.pendingProps.children,$a(a,t),e=zn(e),o=o(e),a.flags|=1,en(n,a,o,t),a.child;case 14:return o=a.type,e=In(o,a.pendingProps),e=In(o.type,e),Ar(n,a,o,e,t);case 15:return Tm(n,a,a.type,a.pendingProps,t);case 17:return o=a.type,e=a.pendingProps,e=a.elementType===o?e:In(o,e),xo(n,a),a.tag=1,dn(o)?(n=!0,Ho(a)):n=!1,$a(a,t),Am(a,o,e),Li(a,o,e,t),Ii(null,a,o,!0,n,t);case 19:return Pm(n,a,t);case 22:return Em(n,a,t)}throw Error(b(156,a.tag))};function Xm(n,a){return Cl(n,a)}function Ld(n,a,t,o){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(n,a,t,o){return new Ld(n,a,t,o)}function As(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Cd(n){if(typeof n=="function")return As(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Yi)return 11;if(n===$i)return 14}return 2}function ma(n,a){var t=n.alternate;return t===null?(t=jn(n.tag,a,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=a,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,a=n.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ro(n,a,t,o,e,i){var s=2;if(o=n,typeof n=="function")As(n)&&(s=1);else if(typeof n=="string")s=5;else n:switch(n){case Ba:return za(t.children,e,i,a);case qi:s=8,e|=8;break;case $e:return n=jn(12,t,a,e|2),n.elementType=$e,n.lanes=i,n;case Ze:return n=jn(13,t,a,e),n.elementType=Ze,n.lanes=i,n;case Qe:return n=jn(19,t,a,e),n.elementType=Qe,n.lanes=i,n;case ml:return de(t,e,i,a);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case rl:s=10;break n;case ll:s=9;break n;case Yi:s=11;break n;case $i:s=14;break n;case Zn:s=16,o=null;break n}throw Error(b(130,n==null?n:typeof n,""))}return a=jn(s,t,a,e),a.elementType=n,a.type=o,a.lanes=i,a}function za(n,a,t,o){return n=jn(7,n,o,a),n.lanes=t,n}function de(n,a,t,o){return n=jn(22,n,o,a),n.elementType=ml,n.lanes=t,n.stateNode={isHidden:!1},n}function Ke(n,a,t){return n=jn(6,n,null,a),n.lanes=t,n}function Ve(n,a,t){return a=jn(4,n.children!==null?n.children:[],n.key,a),a.lanes=t,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}function xd(n,a,t,o,e){this.tag=a,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ce(0),this.expirationTimes=Ce(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.identifierPrefix=o,this.onRecoverableError=e,this.mutableSourceEagerHydrationData=null}function Rs(n,a,t,o,e,i,s,r,l){return n=new xd(n,a,t,r,l),a===1?(a=1,i===!0&&(a|=8)):a=0,i=jn(3,null,null,a),n.current=i,i.stateNode=n,i.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(i),n}function Id(n,a,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ea,key:o==null?null:""+o,children:n,containerInfo:a,implementation:t}}function nu(n){if(!n)return ca;n=n._reactInternals;n:{if(Ma(n)!==n||n.tag!==1)throw Error(b(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break n;case 1:if(dn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break n}}a=a.return}while(a!==null);throw Error(b(171))}if(n.tag===1){var t=n.type;if(dn(t))return nm(n,t,a)}return a}function au(n,a,t,o,e,i,s,r,l){return n=Rs(t,o,!0,n,e,i,s,r,l),n.context=nu(null),t=n.current,o=sn(),e=la(t),i=Wn(o,e),i.callback=a??null,sa(t,i,e),n.current.lanes=e,$t(n,e,o),pn(n,o),n}function pe(n,a,t,o){var e=a.current,i=sn(),s=la(e);return t=nu(t),a.context===null?a.context=t:a.pendingContext=t,a=Wn(i,s),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=sa(e,a,s),n!==null&&(Tn(n,e,s,i),zo(n,e,s)),s}function ne(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hr(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<a?t:a}}function Ms(n,a){Hr(n,a),(n=n.alternate)&&Hr(n,a)}function Ad(){return null}var tu=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ts(n){this._internalRoot=n}he.prototype.render=Ts.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(b(409));pe(n,a,null,null)};he.prototype.unmount=Ts.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;Aa(function(){pe(null,n,null,null)}),a[Kn]=null}};function he(n){this._internalRoot=n}he.prototype.unstable_scheduleHydration=function(n){if(n){var a=El();n={blockedOn:null,target:n,priority:a};for(var t=0;t<Jn.length&&a!==0&&a<Jn[t].priority;t++);Jn.splice(t,0,n),t===0&&Dl(n)}};function Es(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function we(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gr(){}function Rd(n,a,t,o,e){if(e){if(typeof o=="function"){var i=o;o=function(){var u=ne(s);i.call(u)}}var s=au(a,o,n,0,null,!1,!1,"",Gr);return n._reactRootContainer=s,n[Kn]=s.current,_t(n.nodeType===8?n.parentNode:n),Aa(),s}for(;e=n.lastChild;)n.removeChild(e);if(typeof o=="function"){var r=o;o=function(){var u=ne(l);r.call(u)}}var l=Rs(n,0,!1,null,null,!1,!1,"",Gr);return n._reactRootContainer=l,n[Kn]=l.current,_t(n.nodeType===8?n.parentNode:n),Aa(function(){pe(a,l,t,o)}),l}function ge(n,a,t,o,e){var i=t._reactRootContainer;if(i){var s=i;if(typeof e=="function"){var r=e;e=function(){var l=ne(s);r.call(l)}}pe(a,s,n,e)}else s=Rd(t,a,n,e,o);return ne(s)}Ml=function(n){switch(n.tag){case 3:var a=n.stateNode;if(a.current.memoizedState.isDehydrated){var t=ft(a.pendingLanes);t!==0&&(Ji(a,t|1),pn(a,U()),!(M&6)&&(ot=U()+500,ha()))}break;case 13:Aa(function(){var o=Vn(n,1);if(o!==null){var e=sn();Tn(o,n,1,e)}}),Ms(n,1)}};Xi=function(n){if(n.tag===13){var a=Vn(n,134217728);if(a!==null){var t=sn();Tn(a,n,134217728,t)}Ms(n,134217728)}};Tl=function(n){if(n.tag===13){var a=la(n),t=Vn(n,a);if(t!==null){var o=sn();Tn(t,n,a,o)}Ms(n,a)}};El=function(){return T};Bl=function(n,a){var t=T;try{return T=n,a()}finally{T=t}};ri=function(n,a,t){switch(a){case"input":if(ni(n,t),a=t.name,t.type==="radio"&&a!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<t.length;a++){var o=t[a];if(o!==n&&o.form===n.form){var e=se(o);if(!e)throw Error(b(90));cl(o),ni(o,e)}}}break;case"textarea":pl(n,t);break;case"select":a=t.value,a!=null&&Ka(n,!!t.multiple,a,!1)}};yl=Cs;vl=Aa;var Md={usingClientEntryPoint:!1,Events:[Qt,Oa,se,kl,fl,Cs]},gt={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Td={bundleType:gt.bundleType,version:gt.version,rendererPackageName:gt.rendererPackageName,rendererConfig:gt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zl(n),n===null?null:n.stateNode},findFiberByHostInstance:gt.findFiberByHostInstance||Ad,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{te=ko.inject(Td),Pn=ko}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md;kn.createPortal=function(n,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Es(a))throw Error(b(200));return Id(n,a,null,t)};kn.createRoot=function(n,a){if(!Es(n))throw Error(b(299));var t=!1,o="",e=tu;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onRecoverableError!==void 0&&(e=a.onRecoverableError)),a=Rs(n,1,!1,null,null,t,!1,o,e),n[Kn]=a.current,_t(n.nodeType===8?n.parentNode:n),new Ts(a)};kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(b(188)):(n=Object.keys(n).join(","),Error(b(268,n)));return n=zl(a),n=n===null?null:n.stateNode,n};kn.flushSync=function(n){return Aa(n)};kn.hydrate=function(n,a,t){if(!we(a))throw Error(b(200));return ge(null,n,a,!0,t)};kn.hydrateRoot=function(n,a,t){if(!Es(n))throw Error(b(405));var o=t!=null&&t.hydratedSources||null,e=!1,i="",s=tu;if(t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),a=au(a,null,n,1,t??null,e,!1,i,s),n[Kn]=a.current,_t(n),o)for(n=0;n<o.length;n++)t=o[n],e=t._getVersion,e=e(t._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[t,e]:a.mutableSourceEagerHydrationData.push(t,e);return new he(a)};kn.render=function(n,a,t){if(!we(a))throw Error(b(200));return ge(null,n,a,!1,t)};kn.unmountComponentAtNode=function(n){if(!we(n))throw Error(b(40));return n._reactRootContainer?(Aa(function(){ge(null,null,n,!1,function(){n._reactRootContainer=null,n[Kn]=null})}),!0):!1};kn.unstable_batchedUpdates=Cs;kn.unstable_renderSubtreeIntoContainer=function(n,a,t,o){if(!we(t))throw Error(b(200));if(n==null||n._reactInternals===void 0)throw Error(b(38));return ge(n,a,t,!1,o)};kn.version="18.3.1-next-f1338f8080-20240426";function ou(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ou)}catch(n){console.error(n)}}ou(),ol.exports=kn;var Ed=ol.exports,Wr=Ed;qe.createRoot=Wr.createRoot,qe.hydrateRoot=Wr.hydrateRoot;var Bd=`// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

// Please pull this list from, and only from https://publicsuffix.org/list/public_suffix_list.dat,
// rather than any other VCS sites. Pulling from any other URL is not guaranteed to be supported.

// VERSION: 2025-10-16_17-43-33_UTC
// COMMIT: 399792921792cacc483219997697443b49b6976f

// Instructions on pulling and using this list can be found at https://publicsuffix.org/list/.

// ===BEGIN ICANN DOMAINS===

// ac : http://nic.ac/rules.htm
ac
com.ac
edu.ac
gov.ac
mil.ac
net.ac
org.ac

// ad : https://www.iana.org/domains/root/db/ad.html
// Confirmed by Amadeu Abril i Abril (CORE) <amadeu.abril@corenic.org> 2024-11-17
ad

// ae : https://www.iana.org/domains/root/db/ae.html
ae
ac.ae
co.ae
gov.ae
mil.ae
net.ae
org.ae
sch.ae

// aero : https://information.aero/registration/policies/dmp
aero
// 2LDs
airline.aero
airport.aero
// 2LDs (currently not accepting registration, seemingly never have)
// As of 2024-07, these are marked as reserved for potential 3LD
// registrations (clause 11 "allocated subdomains" in the 2006 TLD
// policy), but the relevant industry partners have not opened them up
// for registration. Current status can be determined from the TLD's
// policy document: 2LDs that are open for registration must list
// their policy in the TLD's policy. Any 2LD without such a policy is
// not open for registrations.
accident-investigation.aero
accident-prevention.aero
aerobatic.aero
aeroclub.aero
aerodrome.aero
agents.aero
air-surveillance.aero
air-traffic-control.aero
aircraft.aero
airtraffic.aero
ambulance.aero
association.aero
author.aero
ballooning.aero
broker.aero
caa.aero
cargo.aero
catering.aero
certification.aero
championship.aero
charter.aero
civilaviation.aero
club.aero
conference.aero
consultant.aero
consulting.aero
control.aero
council.aero
crew.aero
design.aero
dgca.aero
educator.aero
emergency.aero
engine.aero
engineer.aero
entertainment.aero
equipment.aero
exchange.aero
express.aero
federation.aero
flight.aero
freight.aero
fuel.aero
gliding.aero
government.aero
groundhandling.aero
group.aero
hanggliding.aero
homebuilt.aero
insurance.aero
journal.aero
journalist.aero
leasing.aero
logistics.aero
magazine.aero
maintenance.aero
marketplace.aero
media.aero
microlight.aero
modelling.aero
navigation.aero
parachuting.aero
paragliding.aero
passenger-association.aero
pilot.aero
press.aero
production.aero
recreation.aero
repbody.aero
res.aero
research.aero
rotorcraft.aero
safety.aero
scientist.aero
services.aero
show.aero
skydiving.aero
software.aero
student.aero
taxi.aero
trader.aero
trading.aero
trainer.aero
union.aero
workinggroup.aero
works.aero

// af : https://www.nic.af/domain-price
af
com.af
edu.af
gov.af
net.af
org.af

// ag : http://www.nic.ag/prices.htm
ag
co.ag
com.ag
net.ag
nom.ag
org.ag

// ai : http://nic.com.ai/
ai
com.ai
net.ai
off.ai
org.ai

// al : http://www.ert.gov.al/ert_alb/faq_det.html?Id=31
al
com.al
edu.al
gov.al
mil.al
net.al
org.al

// am : https://www.amnic.net/policy/en/Policy_EN.pdf
// Confirmed by ISOC AM <isoc@isoc.am> 2024-11-18
am
co.am
com.am
commune.am
net.am
org.am

// ao : https://www.iana.org/domains/root/db/ao.html
// https://www.dns.ao/ao/
ao
co.ao
ed.ao
edu.ao
gov.ao
gv.ao
it.ao
og.ao
org.ao
pb.ao

// aq : https://www.iana.org/domains/root/db/aq.html
aq

// ar : https://nic.ar/es/nic-argentina/normativa
ar
bet.ar
com.ar
coop.ar
edu.ar
gob.ar
gov.ar
int.ar
mil.ar
musica.ar
mutual.ar
net.ar
org.ar
seg.ar
senasa.ar
tur.ar

// arpa : https://www.iana.org/domains/root/db/arpa.html
// Confirmed by registry <iana-questions@icann.org> 2008-06-18
arpa
e164.arpa
home.arpa
in-addr.arpa
ip6.arpa
iris.arpa
uri.arpa
urn.arpa

// as : https://www.iana.org/domains/root/db/as.html
as
gov.as

// asia : https://www.iana.org/domains/root/db/asia.html
asia

// at : https://www.iana.org/domains/root/db/at.html
// Confirmed by registry <it@nic.at> 2008-06-17
at
ac.at
sth.ac.at
co.at
gv.at
or.at

// au : https://www.iana.org/domains/root/db/au.html
// https://www.auda.org.au/
// Confirmed by registry <general@auda.org.au> 2025-07-16
au
// 2LDs
asn.au
com.au
edu.au
gov.au
id.au
net.au
org.au
// Historic 2LDs (closed to new registration, but sites still exist)
conf.au
oz.au
// CGDNs : https://www.auda.org.au/au-domain-names/the-different-au-domain-names/state-and-territory-domain-names/
act.au
nsw.au
nt.au
qld.au
sa.au
tas.au
vic.au
wa.au
// 3LDs
act.edu.au
catholic.edu.au
// eq.edu.au - Removed at the request of the Queensland Department of Education
nsw.edu.au
nt.edu.au
qld.edu.au
sa.edu.au
tas.edu.au
vic.edu.au
wa.edu.au
// act.gov.au - Bug 984824 - Removed at request of Greg Tankard
// nsw.gov.au - Bug 547985 - Removed at request of <Shae.Donelan@services.nsw.gov.au>
// nt.gov.au - Bug 940478 - Removed at request of Greg Connors <Greg.Connors@nt.gov.au>
qld.gov.au
sa.gov.au
tas.gov.au
vic.gov.au
wa.gov.au
// 4LDs
// education.tas.edu.au - Removed at the request of the Department of Education Tasmania
// schools.nsw.edu.au - Removed at the request of the New South Wales Department of Education.

// aw : https://www.iana.org/domains/root/db/aw.html
aw
com.aw

// ax : https://www.iana.org/domains/root/db/ax.html
ax

// az : https://www.iana.org/domains/root/db/az.html
// Confirmed via https://whois.az/?page_id=10 2024-12-11
az
biz.az
co.az
com.az
edu.az
gov.az
info.az
int.az
mil.az
name.az
net.az
org.az
pp.az
// No longer available for registration, however domains exist as of 2024-12-11
// see https://whois.az/?page_id=783
pro.az

// ba : https://www.iana.org/domains/root/db/ba.html
ba
com.ba
edu.ba
gov.ba
mil.ba
net.ba
org.ba

// bb : https://www.iana.org/domains/root/db/bb.html
bb
biz.bb
co.bb
com.bb
edu.bb
gov.bb
info.bb
net.bb
org.bb
store.bb
tv.bb

// bd : https://www.iana.org/domains/root/db/bd.html
*.bd

// be : https://www.iana.org/domains/root/db/be.html
// Confirmed by registry <tech@dns.be> 2008-06-08
be
ac.be

// bf : https://www.iana.org/domains/root/db/bf.html
bf
gov.bf

// bg : https://www.iana.org/domains/root/db/bg.html
// https://www.register.bg/user/static/rules/en/index.html
bg
0.bg
1.bg
2.bg
3.bg
4.bg
5.bg
6.bg
7.bg
8.bg
9.bg
a.bg
b.bg
c.bg
d.bg
e.bg
f.bg
g.bg
h.bg
i.bg
j.bg
k.bg
l.bg
m.bg
n.bg
o.bg
p.bg
q.bg
r.bg
s.bg
t.bg
u.bg
v.bg
w.bg
x.bg
y.bg
z.bg

// bh : https://www.iana.org/domains/root/db/bh.html
bh
com.bh
edu.bh
gov.bh
net.bh
org.bh

// bi : https://www.iana.org/domains/root/db/bi.html
// http://whois.nic.bi/
bi
co.bi
com.bi
edu.bi
or.bi
org.bi

// biz : https://www.iana.org/domains/root/db/biz.html
biz

// bj : https://nic.bj/bj-suffixes.txt
// Submitted by registry <contact@nic.bj>
bj
africa.bj
agro.bj
architectes.bj
assur.bj
avocats.bj
co.bj
com.bj
eco.bj
econo.bj
edu.bj
info.bj
loisirs.bj
money.bj
net.bj
org.bj
ote.bj
restaurant.bj
resto.bj
tourism.bj
univ.bj

// bm : https://www.bermudanic.bm/domain-registration/index.php
bm
com.bm
edu.bm
gov.bm
net.bm
org.bm

// bn : http://www.bnnic.bn/faqs
bn
com.bn
edu.bn
gov.bn
net.bn
org.bn

// bo : https://nic.bo
// Confirmed by registry <soporte@nic.bo> 2024-11-19
bo
com.bo
edu.bo
gob.bo
int.bo
mil.bo
net.bo
org.bo
tv.bo
web.bo
// Social Domains
academia.bo
agro.bo
arte.bo
blog.bo
bolivia.bo
ciencia.bo
cooperativa.bo
democracia.bo
deporte.bo
ecologia.bo
economia.bo
empresa.bo
indigena.bo
industria.bo
info.bo
medicina.bo
movimiento.bo
musica.bo
natural.bo
nombre.bo
noticias.bo
patria.bo
plurinacional.bo
politica.bo
profesional.bo
pueblo.bo
revista.bo
salud.bo
tecnologia.bo
tksat.bo
transporte.bo
wiki.bo

// br : http://registro.br/dominio/categoria.html
// Submitted by registry <fneves@registro.br>
br
9guacu.br
abc.br
adm.br
adv.br
agr.br
aju.br
am.br
anani.br
aparecida.br
api.br
app.br
arq.br
art.br
ato.br
b.br
barueri.br
belem.br
bet.br
bhz.br
bib.br
bio.br
blog.br
bmd.br
boavista.br
bsb.br
campinagrande.br
campinas.br
caxias.br
cim.br
cng.br
cnt.br
com.br
contagem.br
coop.br
coz.br
cri.br
cuiaba.br
curitiba.br
def.br
des.br
det.br
dev.br
ecn.br
eco.br
edu.br
emp.br
enf.br
eng.br
esp.br
etc.br
eti.br
far.br
feira.br
flog.br
floripa.br
fm.br
fnd.br
fortal.br
fot.br
foz.br
fst.br
g12.br
geo.br
ggf.br
goiania.br
gov.br
// gov.br 26 states + df https://en.wikipedia.org/wiki/States_of_Brazil
ac.gov.br
al.gov.br
am.gov.br
ap.gov.br
ba.gov.br
ce.gov.br
df.gov.br
es.gov.br
go.gov.br
ma.gov.br
mg.gov.br
ms.gov.br
mt.gov.br
pa.gov.br
pb.gov.br
pe.gov.br
pi.gov.br
pr.gov.br
rj.gov.br
rn.gov.br
ro.gov.br
rr.gov.br
rs.gov.br
sc.gov.br
se.gov.br
sp.gov.br
to.gov.br
gru.br
ia.br
imb.br
ind.br
inf.br
jab.br
jampa.br
jdf.br
joinville.br
jor.br
jus.br
leg.br
leilao.br
lel.br
log.br
londrina.br
macapa.br
maceio.br
manaus.br
maringa.br
mat.br
med.br
mil.br
morena.br
mp.br
mus.br
natal.br
net.br
niteroi.br
*.nom.br
not.br
ntr.br
odo.br
ong.br
org.br
osasco.br
palmas.br
poa.br
ppg.br
pro.br
psc.br
psi.br
pvh.br
qsl.br
radio.br
rec.br
recife.br
rep.br
ribeirao.br
rio.br
riobranco.br
riopreto.br
salvador.br
sampa.br
santamaria.br
santoandre.br
saobernardo.br
saogonca.br
seg.br
sjc.br
slg.br
slz.br
social.br
sorocaba.br
srv.br
taxi.br
tc.br
tec.br
teo.br
the.br
tmp.br
trd.br
tur.br
tv.br
udi.br
vet.br
vix.br
vlog.br
wiki.br
xyz.br
zlg.br

// bs : http://www.nic.bs/rules.html
bs
com.bs
edu.bs
gov.bs
net.bs
org.bs

// bt : https://www.iana.org/domains/root/db/bt.html
bt
com.bt
edu.bt
gov.bt
net.bt
org.bt

// bv : No registrations at this time.
// Submitted by registry <jarle@uninett.no>
bv

// bw : https://www.iana.org/domains/root/db/bw.html
// https://nic.net.bw/bw-name-structure
bw
ac.bw
co.bw
gov.bw
net.bw
org.bw

// by : https://www.iana.org/domains/root/db/by.html
// http://tld.by/rules_2006_en.html
// list of other 2nd level tlds ?
by
gov.by
mil.by
// Official information does not indicate that com.by is a reserved
// second-level domain, but it's being used as one (see www.google.com.by and
// www.yahoo.com.by, for example), so we list it here for safety's sake.
com.by
// http://hoster.by/
of.by

// bz : https://www.iana.org/domains/root/db/bz.html
// http://www.belizenic.bz/
bz
co.bz
com.bz
edu.bz
gov.bz
net.bz
org.bz

// ca : https://www.iana.org/domains/root/db/ca.html
ca
// ca geographical names
ab.ca
bc.ca
mb.ca
nb.ca
nf.ca
nl.ca
ns.ca
nt.ca
nu.ca
on.ca
pe.ca
qc.ca
sk.ca
yk.ca
// gc.ca: https://en.wikipedia.org/wiki/.gc.ca
// see also: http://registry.gc.ca/en/SubdomainFAQ
gc.ca

// cat : https://www.iana.org/domains/root/db/cat.html
cat

// cc : https://www.iana.org/domains/root/db/cc.html
cc

// cd : https://www.iana.org/domains/root/db/cd.html
// https://www.nic.cd
cd
gov.cd

// cf : https://www.iana.org/domains/root/db/cf.html
cf

// cg : https://www.iana.org/domains/root/db/cg.html
cg

// ch : https://www.iana.org/domains/root/db/ch.html
ch

// ci : https://www.iana.org/domains/root/db/ci.html
ci
ac.ci
aéroport.ci
asso.ci
co.ci
com.ci
ed.ci
edu.ci
go.ci
gouv.ci
int.ci
net.ci
or.ci
org.ci

// ck : https://www.iana.org/domains/root/db/ck.html
*.ck
!www.ck

// cl : https://www.nic.cl
// Confirmed by .CL registry <hsalgado@nic.cl>
cl
co.cl
gob.cl
gov.cl
mil.cl

// cm : https://www.iana.org/domains/root/db/cm.html plus bug 981927
cm
co.cm
com.cm
gov.cm
net.cm

// cn : https://www.iana.org/domains/root/db/cn.html
// Submitted by registry <tanyaling@cnnic.cn>
cn
ac.cn
com.cn
edu.cn
gov.cn
mil.cn
net.cn
org.cn
公司.cn
網絡.cn
网络.cn
// cn geographic names
ah.cn
bj.cn
cq.cn
fj.cn
gd.cn
gs.cn
gx.cn
gz.cn
ha.cn
hb.cn
he.cn
hi.cn
hk.cn
hl.cn
hn.cn
jl.cn
js.cn
jx.cn
ln.cn
mo.cn
nm.cn
nx.cn
qh.cn
sc.cn
sd.cn
sh.cn
sn.cn
sx.cn
tj.cn
tw.cn
xj.cn
xz.cn
yn.cn
zj.cn

// co : https://www.iana.org/domains/root/db/co.html
// https://www.cointernet.com.co/como-funciona-un-dominio-restringido
// Confirmed by registry <gonzalo@cointernet.com.co> 2024-11-18
co
com.co
edu.co
gov.co
mil.co
net.co
nom.co
org.co

// com : https://www.iana.org/domains/root/db/com.html
com

// coop : https://www.iana.org/domains/root/db/coop.html
coop

// cr : https://nic.cr/capitulo-1-registro-de-un-nombre-de-dominio/
cr
ac.cr
co.cr
ed.cr
fi.cr
go.cr
or.cr
sa.cr

// cu : https://www.iana.org/domains/root/db/cu.html
cu
com.cu
edu.cu
gob.cu
inf.cu
nat.cu
net.cu
org.cu

// cv : https://www.iana.org/domains/root/db/cv.html
// https://ola.cv/domain-extensions-under-cv/
// Confirmed by registry <support@ola.cv> 2024-11-26
cv
com.cv
edu.cv
id.cv
int.cv
net.cv
nome.cv
org.cv
publ.cv

// cw : https://www.uoc.cw/cw-registry
// Confirmed by registry <registry@uoc.cw> 2024-11-19
cw
com.cw
edu.cw
net.cw
org.cw

// cx : https://www.iana.org/domains/root/db/cx.html
// list of other 2nd level tlds ?
cx
gov.cx

// cy : http://www.nic.cy/
// Submitted by Panayiotou Fotia <cydns@ucy.ac.cy>
// https://nic.cy/wp-content/uploads/2024/01/Create-Request-for-domain-name-registration-1.pdf
cy
ac.cy
biz.cy
com.cy
ekloges.cy
gov.cy
ltd.cy
mil.cy
net.cy
org.cy
press.cy
pro.cy
tm.cy

// cz : https://www.iana.org/domains/root/db/cz.html
// Confirmed by registry <tech@nic.cz> 2025-08-06
cz
gov.cz

// de : https://www.iana.org/domains/root/db/de.html
// Confirmed by registry <ops@denic.de> (with technical
// reservations) 2008-07-01
de

// dj : https://www.iana.org/domains/root/db/dj.html
dj

// dk : https://www.iana.org/domains/root/db/dk.html
// Confirmed by registry <robert@dk-hostmaster.dk> 2008-06-17
dk

// dm : https://www.iana.org/domains/root/db/dm.html
// https://nic.dm/policies/pdf/DMRulesandGuidelines2024v1.pdf
// Confirmed by registry <admin@dotdm.dm> 2024-11-19
dm
co.dm
com.dm
edu.dm
gov.dm
net.dm
org.dm

// do : https://www.iana.org/domains/root/db/do.html
do
art.do
com.do
edu.do
gob.do
gov.do
mil.do
net.do
org.do
sld.do
web.do

// dz : http://www.nic.dz/images/pdf_nic/charte.pdf
dz
art.dz
asso.dz
com.dz
edu.dz
gov.dz
net.dz
org.dz
pol.dz
soc.dz
tm.dz

// ec : https://www.nic.ec/
// Submitted by registry <infraestructura@nic.ec>
ec
abg.ec
adm.ec
agron.ec
arqt.ec
art.ec
bar.ec
chef.ec
com.ec
cont.ec
cpa.ec
cue.ec
dent.ec
dgn.ec
disco.ec
doc.ec
edu.ec
eng.ec
esm.ec
fin.ec
fot.ec
gal.ec
gob.ec
gov.ec
gye.ec
ibr.ec
info.ec
k12.ec
lat.ec
loj.ec
med.ec
mil.ec
mktg.ec
mon.ec
net.ec
ntr.ec
odont.ec
org.ec
pro.ec
prof.ec
psic.ec
psiq.ec
pub.ec
rio.ec
rrpp.ec
sal.ec
tech.ec
tul.ec
tur.ec
uio.ec
vet.ec
xxx.ec

// edu : https://www.iana.org/domains/root/db/edu.html
edu

// ee : https://www.internet.ee/domains/general-domains-and-procedure-for-registration-of-sub-domains-under-general-domains
ee
aip.ee
com.ee
edu.ee
fie.ee
gov.ee
lib.ee
med.ee
org.ee
pri.ee
riik.ee

// eg : https://www.iana.org/domains/root/db/eg.html
// https://domain.eg/en/domain-rules/subdomain-names-types/
eg
ac.eg
com.eg
edu.eg
eun.eg
gov.eg
info.eg
me.eg
mil.eg
name.eg
net.eg
org.eg
sci.eg
sport.eg
tv.eg

// er : https://www.iana.org/domains/root/db/er.html
*.er

// es : https://www.dominios.es/en
es
com.es
edu.es
gob.es
nom.es
org.es

// et : https://www.iana.org/domains/root/db/et.html
et
biz.et
com.et
edu.et
gov.et
info.et
name.et
net.et
org.et

// eu : https://www.iana.org/domains/root/db/eu.html
eu

// fi : https://www.iana.org/domains/root/db/fi.html
fi
// aland.fi : https://www.iana.org/domains/root/db/ax.html
// This domain is being phased out in favor of .ax. As there are still many
// domains under aland.fi, we still keep it on the list until aland.fi is
// completely removed.
aland.fi

// fj : http://domains.fj/
// Submitted by registry <garth.miller@cocca.org.nz> 2020-02-11
fj
ac.fj
biz.fj
com.fj
gov.fj
info.fj
mil.fj
name.fj
net.fj
org.fj
pro.fj

// fk : https://www.iana.org/domains/root/db/fk.html
*.fk

// fm : https://www.iana.org/domains/root/db/fm.html
fm
com.fm
edu.fm
net.fm
org.fm

// fo : https://www.iana.org/domains/root/db/fo.html
fo

// fr : https://www.afnic.fr/ https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
fr
asso.fr
com.fr
gouv.fr
nom.fr
prd.fr
tm.fr
// Other SLDs now selfmanaged out of AFNIC range. Former "domaines sectoriels", still registration suffixes
avoues.fr
cci.fr
greta.fr
huissier-justice.fr

// ga : https://www.iana.org/domains/root/db/ga.html
ga

// gb : This registry is effectively dormant
// Submitted by registry <Damien.Shaw@ja.net>
gb

// gd : https://www.iana.org/domains/root/db/gd.html
gd
edu.gd
gov.gd

// ge : https://nic.ge/en/administrator/the-ge-domain-regulations
// Confirmed by registry <info@nic.ge> 2024-11-20
ge
com.ge
edu.ge
gov.ge
net.ge
org.ge
pvt.ge
school.ge

// gf : https://www.iana.org/domains/root/db/gf.html
gf

// gg : https://www.channelisles.net/register-1/register-direct
// Confirmed by registry <nigel@channelisles.net> 2013-11-28
gg
co.gg
net.gg
org.gg

// gh : https://www.iana.org/domains/root/db/gh.html
// https://www.nic.gh/
// Although domains directly at second level are not possible at the moment,
// they have been possible for some time and may come back.
gh
biz.gh
com.gh
edu.gh
gov.gh
mil.gh
net.gh
org.gh

// gi : http://www.nic.gi/rules.html
gi
com.gi
edu.gi
gov.gi
ltd.gi
mod.gi
org.gi

// gl : https://www.iana.org/domains/root/db/gl.html
// http://nic.gl
gl
co.gl
com.gl
edu.gl
net.gl
org.gl

// gm : http://www.nic.gm/htmlpages%5Cgm-policy.htm
gm

// gn : http://psg.com/dns/gn/gn.txt
// Submitted by registry <randy@psg.com>
gn
ac.gn
com.gn
edu.gn
gov.gn
net.gn
org.gn

// gov : https://www.iana.org/domains/root/db/gov.html
gov

// gp : http://www.nic.gp/index.php?lang=en
gp
asso.gp
com.gp
edu.gp
mobi.gp
net.gp
org.gp

// gq : https://www.iana.org/domains/root/db/gq.html
gq

// gr : https://www.iana.org/domains/root/db/gr.html
// Submitted by registry <segred@ics.forth.gr>
gr
com.gr
edu.gr
gov.gr
net.gr
org.gr

// gs : https://www.iana.org/domains/root/db/gs.html
gs

// gt : https://www.gt/sitio/registration_policy.php?lang=en
gt
com.gt
edu.gt
gob.gt
ind.gt
mil.gt
net.gt
org.gt

// gu : http://gadao.gov.gu/register.html
// University of Guam : https://www.uog.edu
// Submitted by uognoc@triton.uog.edu
gu
com.gu
edu.gu
gov.gu
guam.gu
info.gu
net.gu
org.gu
web.gu

// gw : https://www.iana.org/domains/root/db/gw.html
// gw : https://nic.gw/regras/
gw

// gy : https://www.iana.org/domains/root/db/gy.html
// http://registry.gy/
gy
co.gy
com.gy
edu.gy
gov.gy
net.gy
org.gy

// hk : https://www.hkirc.hk
// Submitted by registry <hk.tech@hkirc.hk>
hk
com.hk
edu.hk
gov.hk
idv.hk
net.hk
org.hk
个人.hk
個人.hk
公司.hk
政府.hk
敎育.hk
教育.hk
箇人.hk
組織.hk
組织.hk
網絡.hk
網络.hk
组織.hk
组织.hk
网絡.hk
网络.hk

// hm : https://www.iana.org/domains/root/db/hm.html
hm

// hn : https://www.iana.org/domains/root/db/hn.html
hn
com.hn
edu.hn
gob.hn
mil.hn
net.hn
org.hn

// hr : http://www.dns.hr/documents/pdf/HRTLD-regulations.pdf
hr
com.hr
from.hr
iz.hr
name.hr

// ht : http://www.nic.ht/info/charte.cfm
ht
adult.ht
art.ht
asso.ht
com.ht
coop.ht
edu.ht
firm.ht
gouv.ht
info.ht
med.ht
net.ht
org.ht
perso.ht
pol.ht
pro.ht
rel.ht
shop.ht

// hu : https://www.iana.org/domains/root/db/hu.html
// Confirmed by registry <pasztor@iszt.hu> 2008-06-12
hu
2000.hu
agrar.hu
bolt.hu
casino.hu
city.hu
co.hu
erotica.hu
erotika.hu
film.hu
forum.hu
games.hu
hotel.hu
info.hu
ingatlan.hu
jogasz.hu
konyvelo.hu
lakas.hu
media.hu
news.hu
org.hu
priv.hu
reklam.hu
sex.hu
shop.hu
sport.hu
suli.hu
szex.hu
tm.hu
tozsde.hu
utazas.hu
video.hu

// id : https://www.iana.org/domains/root/db/id.html
id
ac.id
biz.id
co.id
desa.id
go.id
kop.id
mil.id
my.id
net.id
or.id
ponpes.id
sch.id
web.id

// ie : https://www.iana.org/domains/root/db/ie.html
ie
gov.ie

// il : http://www.isoc.org.il/domains/
// see also: https://en.isoc.org.il/il-cctld/registration-rules
// ISOC-IL (operated by .il Registry)
il
ac.il
co.il
gov.il
idf.il
k12.il
muni.il
net.il
org.il
// xn--4dbrk0ce ("Israel", Hebrew) : IL
ישראל
// xn--4dbgdty6c.xn--4dbrk0ce.
אקדמיה.ישראל
// xn--5dbhl8d.xn--4dbrk0ce.
ישוב.ישראל
// xn--8dbq2a.xn--4dbrk0ce.
צהל.ישראל
// xn--hebda8b.xn--4dbrk0ce.
ממשל.ישראל

// im : https://www.nic.im/
// Submitted by registry <info@nic.im>
im
ac.im
co.im
ltd.co.im
plc.co.im
com.im
net.im
org.im
tt.im
tv.im

// in : https://www.iana.org/domains/root/db/in.html
// see also: https://registry.in/policies
// Please note, that nic.in is not an official eTLD, but used by most
// government institutions.
in
5g.in
6g.in
ac.in
ai.in
am.in
bihar.in
biz.in
business.in
ca.in
cn.in
co.in
com.in
coop.in
cs.in
delhi.in
dr.in
edu.in
er.in
firm.in
gen.in
gov.in
gujarat.in
ind.in
info.in
int.in
internet.in
io.in
me.in
mil.in
net.in
nic.in
org.in
pg.in
post.in
pro.in
res.in
travel.in
tv.in
uk.in
up.in
us.in

// info : https://www.iana.org/domains/root/db/info.html
info

// int : https://www.iana.org/domains/root/db/int.html
// Confirmed by registry <iana-questions@icann.org> 2008-06-18
int
eu.int

// io : http://www.nic.io/rules.htm
io
co.io
com.io
edu.io
gov.io
mil.io
net.io
nom.io
org.io

// iq : http://www.cmc.iq/english/iq/iqregister1.htm
iq
com.iq
edu.iq
gov.iq
mil.iq
net.iq
org.iq

// ir : http://www.nic.ir/Terms_and_Conditions_ir,_Appendix_1_Domain_Rules
// Also see http://www.nic.ir/Internationalized_Domain_Names
// Two <iran>.ir entries added at request of <tech-team@nic.ir>, 2010-04-16
ir
ac.ir
co.ir
gov.ir
id.ir
net.ir
org.ir
sch.ir
// xn--mgba3a4f16a.ir (<iran>.ir, Persian YEH)
ایران.ir
// xn--mgba3a4fra.ir (<iran>.ir, Arabic YEH)
ايران.ir

// is : http://www.isnic.is/domain/rules.php
// Confirmed by registry <marius@isgate.is> 2024-11-17
is

// it : https://www.iana.org/domains/root/db/it.html
// https://www.nic.it/
it
edu.it
gov.it
// Regions (3.3.1)
// https://www.nic.it/en/manage-your-it/forms-and-docs -> "Assignment and Management of domain names"
abr.it
abruzzo.it
aosta-valley.it
aostavalley.it
bas.it
basilicata.it
cal.it
calabria.it
cam.it
campania.it
emilia-romagna.it
emiliaromagna.it
emr.it
friuli-v-giulia.it
friuli-ve-giulia.it
friuli-vegiulia.it
friuli-venezia-giulia.it
friuli-veneziagiulia.it
friuli-vgiulia.it
friuliv-giulia.it
friulive-giulia.it
friulivegiulia.it
friulivenezia-giulia.it
friuliveneziagiulia.it
friulivgiulia.it
fvg.it
laz.it
lazio.it
lig.it
liguria.it
lom.it
lombardia.it
lombardy.it
lucania.it
mar.it
marche.it
mol.it
molise.it
piedmont.it
piemonte.it
pmn.it
pug.it
puglia.it
sar.it
sardegna.it
sardinia.it
sic.it
sicilia.it
sicily.it
taa.it
tos.it
toscana.it
trentin-sud-tirol.it
trentin-süd-tirol.it
trentin-sudtirol.it
trentin-südtirol.it
trentin-sued-tirol.it
trentin-suedtirol.it
trentino.it
trentino-a-adige.it
trentino-aadige.it
trentino-alto-adige.it
trentino-altoadige.it
trentino-s-tirol.it
trentino-stirol.it
trentino-sud-tirol.it
trentino-süd-tirol.it
trentino-sudtirol.it
trentino-südtirol.it
trentino-sued-tirol.it
trentino-suedtirol.it
trentinoa-adige.it
trentinoaadige.it
trentinoalto-adige.it
trentinoaltoadige.it
trentinos-tirol.it
trentinostirol.it
trentinosud-tirol.it
trentinosüd-tirol.it
trentinosudtirol.it
trentinosüdtirol.it
trentinosued-tirol.it
trentinosuedtirol.it
trentinsud-tirol.it
trentinsüd-tirol.it
trentinsudtirol.it
trentinsüdtirol.it
trentinsued-tirol.it
trentinsuedtirol.it
tuscany.it
umb.it
umbria.it
val-d-aosta.it
val-daosta.it
vald-aosta.it
valdaosta.it
valle-aosta.it
valle-d-aosta.it
valle-daosta.it
valleaosta.it
valled-aosta.it
valledaosta.it
vallee-aoste.it
vallée-aoste.it
vallee-d-aoste.it
vallée-d-aoste.it
valleeaoste.it
valléeaoste.it
valleedaoste.it
valléedaoste.it
vao.it
vda.it
ven.it
veneto.it
// Provinces (3.3.2)
ag.it
agrigento.it
al.it
alessandria.it
alto-adige.it
altoadige.it
an.it
ancona.it
andria-barletta-trani.it
andria-trani-barletta.it
andriabarlettatrani.it
andriatranibarletta.it
ao.it
aosta.it
aoste.it
ap.it
aq.it
aquila.it
ar.it
arezzo.it
ascoli-piceno.it
ascolipiceno.it
asti.it
at.it
av.it
avellino.it
ba.it
balsan.it
balsan-sudtirol.it
balsan-südtirol.it
balsan-suedtirol.it
bari.it
barletta-trani-andria.it
barlettatraniandria.it
belluno.it
benevento.it
bergamo.it
bg.it
bi.it
biella.it
bl.it
bn.it
bo.it
bologna.it
bolzano.it
bolzano-altoadige.it
bozen.it
bozen-sudtirol.it
bozen-südtirol.it
bozen-suedtirol.it
br.it
brescia.it
brindisi.it
bs.it
bt.it
bulsan.it
bulsan-sudtirol.it
bulsan-südtirol.it
bulsan-suedtirol.it
bz.it
ca.it
cagliari.it
caltanissetta.it
campidano-medio.it
campidanomedio.it
campobasso.it
carbonia-iglesias.it
carboniaiglesias.it
carrara-massa.it
carraramassa.it
caserta.it
catania.it
catanzaro.it
cb.it
ce.it
cesena-forli.it
cesena-forlì.it
cesenaforli.it
cesenaforlì.it
ch.it
chieti.it
ci.it
cl.it
cn.it
co.it
como.it
cosenza.it
cr.it
cremona.it
crotone.it
cs.it
ct.it
cuneo.it
cz.it
dell-ogliastra.it
dellogliastra.it
en.it
enna.it
fc.it
fe.it
fermo.it
ferrara.it
fg.it
fi.it
firenze.it
florence.it
fm.it
foggia.it
forli-cesena.it
forlì-cesena.it
forlicesena.it
forlìcesena.it
fr.it
frosinone.it
ge.it
genoa.it
genova.it
go.it
gorizia.it
gr.it
grosseto.it
iglesias-carbonia.it
iglesiascarbonia.it
im.it
imperia.it
is.it
isernia.it
kr.it
la-spezia.it
laquila.it
laspezia.it
latina.it
lc.it
le.it
lecce.it
lecco.it
li.it
livorno.it
lo.it
lodi.it
lt.it
lu.it
lucca.it
macerata.it
mantova.it
massa-carrara.it
massacarrara.it
matera.it
mb.it
mc.it
me.it
medio-campidano.it
mediocampidano.it
messina.it
mi.it
milan.it
milano.it
mn.it
mo.it
modena.it
monza.it
monza-brianza.it
monza-e-della-brianza.it
monzabrianza.it
monzaebrianza.it
monzaedellabrianza.it
ms.it
mt.it
na.it
naples.it
napoli.it
no.it
novara.it
nu.it
nuoro.it
og.it
ogliastra.it
olbia-tempio.it
olbiatempio.it
or.it
oristano.it
ot.it
pa.it
padova.it
padua.it
palermo.it
parma.it
pavia.it
pc.it
pd.it
pe.it
perugia.it
pesaro-urbino.it
pesarourbino.it
pescara.it
pg.it
pi.it
piacenza.it
pisa.it
pistoia.it
pn.it
po.it
pordenone.it
potenza.it
pr.it
prato.it
pt.it
pu.it
pv.it
pz.it
ra.it
ragusa.it
ravenna.it
rc.it
re.it
reggio-calabria.it
reggio-emilia.it
reggiocalabria.it
reggioemilia.it
rg.it
ri.it
rieti.it
rimini.it
rm.it
rn.it
ro.it
roma.it
rome.it
rovigo.it
sa.it
salerno.it
sassari.it
savona.it
si.it
siena.it
siracusa.it
so.it
sondrio.it
sp.it
sr.it
ss.it
südtirol.it
suedtirol.it
sv.it
ta.it
taranto.it
te.it
tempio-olbia.it
tempioolbia.it
teramo.it
terni.it
tn.it
to.it
torino.it
tp.it
tr.it
trani-andria-barletta.it
trani-barletta-andria.it
traniandriabarletta.it
tranibarlettaandria.it
trapani.it
trento.it
treviso.it
trieste.it
ts.it
turin.it
tv.it
ud.it
udine.it
urbino-pesaro.it
urbinopesaro.it
va.it
varese.it
vb.it
vc.it
ve.it
venezia.it
venice.it
verbania.it
vercelli.it
verona.it
vi.it
vibo-valentia.it
vibovalentia.it
vicenza.it
viterbo.it
vr.it
vs.it
vt.it
vv.it

// je : https://www.iana.org/domains/root/db/je.html
// Confirmed by registry <nigel@channelisles.net> 2013-11-28
je
co.je
net.je
org.je

// jm : http://www.com.jm/register.html
*.jm

// jo : https://www.dns.jo/JoFamily.aspx
// Confirmed by registry <DNS@modee.gov.jo> 2024-11-17
jo
agri.jo
ai.jo
com.jo
edu.jo
eng.jo
fm.jo
gov.jo
mil.jo
net.jo
org.jo
per.jo
phd.jo
sch.jo
tv.jo

// jobs : https://www.iana.org/domains/root/db/jobs.html
jobs

// jp : https://www.iana.org/domains/root/db/jp.html
// http://jprs.co.jp/en/jpdomain.html
// Confirmed by registry <info@jprs.jp> 2024-11-22
jp
// jp organizational type names
ac.jp
ad.jp
co.jp
ed.jp
go.jp
gr.jp
lg.jp
ne.jp
or.jp
// jp prefecture type names
aichi.jp
akita.jp
aomori.jp
chiba.jp
ehime.jp
fukui.jp
fukuoka.jp
fukushima.jp
gifu.jp
gunma.jp
hiroshima.jp
hokkaido.jp
hyogo.jp
ibaraki.jp
ishikawa.jp
iwate.jp
kagawa.jp
kagoshima.jp
kanagawa.jp
kochi.jp
kumamoto.jp
kyoto.jp
mie.jp
miyagi.jp
miyazaki.jp
nagano.jp
nagasaki.jp
nara.jp
niigata.jp
oita.jp
okayama.jp
okinawa.jp
osaka.jp
saga.jp
saitama.jp
shiga.jp
shimane.jp
shizuoka.jp
tochigi.jp
tokushima.jp
tokyo.jp
tottori.jp
toyama.jp
wakayama.jp
yamagata.jp
yamaguchi.jp
yamanashi.jp
三重.jp
京都.jp
佐賀.jp
兵庫.jp
北海道.jp
千葉.jp
和歌山.jp
埼玉.jp
大分.jp
大阪.jp
奈良.jp
宮城.jp
宮崎.jp
富山.jp
山口.jp
山形.jp
山梨.jp
岐阜.jp
岡山.jp
岩手.jp
島根.jp
広島.jp
徳島.jp
愛媛.jp
愛知.jp
新潟.jp
東京.jp
栃木.jp
沖縄.jp
滋賀.jp
熊本.jp
石川.jp
神奈川.jp
福井.jp
福岡.jp
福島.jp
秋田.jp
群馬.jp
茨城.jp
長崎.jp
長野.jp
青森.jp
静岡.jp
香川.jp
高知.jp
鳥取.jp
鹿児島.jp
// jp geographic type names
// http://jprs.jp/doc/rule/saisoku-1.html
// 2024-11-22: JPRS confirmed that jp geographic type names no longer accept new registrations.
// Once all existing registrations expire (marking full discontinuation), these suffixes
// will be removed from the PSL.
*.kawasaki.jp
!city.kawasaki.jp
*.kitakyushu.jp
!city.kitakyushu.jp
*.kobe.jp
!city.kobe.jp
*.nagoya.jp
!city.nagoya.jp
*.sapporo.jp
!city.sapporo.jp
*.sendai.jp
!city.sendai.jp
*.yokohama.jp
!city.yokohama.jp
// 4th level registration
aisai.aichi.jp
ama.aichi.jp
anjo.aichi.jp
asuke.aichi.jp
chiryu.aichi.jp
chita.aichi.jp
fuso.aichi.jp
gamagori.aichi.jp
handa.aichi.jp
hazu.aichi.jp
hekinan.aichi.jp
higashiura.aichi.jp
ichinomiya.aichi.jp
inazawa.aichi.jp
inuyama.aichi.jp
isshiki.aichi.jp
iwakura.aichi.jp
kanie.aichi.jp
kariya.aichi.jp
kasugai.aichi.jp
kira.aichi.jp
kiyosu.aichi.jp
komaki.aichi.jp
konan.aichi.jp
kota.aichi.jp
mihama.aichi.jp
miyoshi.aichi.jp
nishio.aichi.jp
nisshin.aichi.jp
obu.aichi.jp
oguchi.aichi.jp
oharu.aichi.jp
okazaki.aichi.jp
owariasahi.aichi.jp
seto.aichi.jp
shikatsu.aichi.jp
shinshiro.aichi.jp
shitara.aichi.jp
tahara.aichi.jp
takahama.aichi.jp
tobishima.aichi.jp
toei.aichi.jp
togo.aichi.jp
tokai.aichi.jp
tokoname.aichi.jp
toyoake.aichi.jp
toyohashi.aichi.jp
toyokawa.aichi.jp
toyone.aichi.jp
toyota.aichi.jp
tsushima.aichi.jp
yatomi.aichi.jp
akita.akita.jp
daisen.akita.jp
fujisato.akita.jp
gojome.akita.jp
hachirogata.akita.jp
happou.akita.jp
higashinaruse.akita.jp
honjo.akita.jp
honjyo.akita.jp
ikawa.akita.jp
kamikoani.akita.jp
kamioka.akita.jp
katagami.akita.jp
kazuno.akita.jp
kitaakita.akita.jp
kosaka.akita.jp
kyowa.akita.jp
misato.akita.jp
mitane.akita.jp
moriyoshi.akita.jp
nikaho.akita.jp
noshiro.akita.jp
odate.akita.jp
oga.akita.jp
ogata.akita.jp
semboku.akita.jp
yokote.akita.jp
yurihonjo.akita.jp
aomori.aomori.jp
gonohe.aomori.jp
hachinohe.aomori.jp
hashikami.aomori.jp
hiranai.aomori.jp
hirosaki.aomori.jp
itayanagi.aomori.jp
kuroishi.aomori.jp
misawa.aomori.jp
mutsu.aomori.jp
nakadomari.aomori.jp
noheji.aomori.jp
oirase.aomori.jp
owani.aomori.jp
rokunohe.aomori.jp
sannohe.aomori.jp
shichinohe.aomori.jp
shingo.aomori.jp
takko.aomori.jp
towada.aomori.jp
tsugaru.aomori.jp
tsuruta.aomori.jp
abiko.chiba.jp
asahi.chiba.jp
chonan.chiba.jp
chosei.chiba.jp
choshi.chiba.jp
chuo.chiba.jp
funabashi.chiba.jp
futtsu.chiba.jp
hanamigawa.chiba.jp
ichihara.chiba.jp
ichikawa.chiba.jp
ichinomiya.chiba.jp
inzai.chiba.jp
isumi.chiba.jp
kamagaya.chiba.jp
kamogawa.chiba.jp
kashiwa.chiba.jp
katori.chiba.jp
katsuura.chiba.jp
kimitsu.chiba.jp
kisarazu.chiba.jp
kozaki.chiba.jp
kujukuri.chiba.jp
kyonan.chiba.jp
matsudo.chiba.jp
midori.chiba.jp
mihama.chiba.jp
minamiboso.chiba.jp
mobara.chiba.jp
mutsuzawa.chiba.jp
nagara.chiba.jp
nagareyama.chiba.jp
narashino.chiba.jp
narita.chiba.jp
noda.chiba.jp
oamishirasato.chiba.jp
omigawa.chiba.jp
onjuku.chiba.jp
otaki.chiba.jp
sakae.chiba.jp
sakura.chiba.jp
shimofusa.chiba.jp
shirako.chiba.jp
shiroi.chiba.jp
shisui.chiba.jp
sodegaura.chiba.jp
sosa.chiba.jp
tako.chiba.jp
tateyama.chiba.jp
togane.chiba.jp
tohnosho.chiba.jp
tomisato.chiba.jp
urayasu.chiba.jp
yachimata.chiba.jp
yachiyo.chiba.jp
yokaichiba.chiba.jp
yokoshibahikari.chiba.jp
yotsukaido.chiba.jp
ainan.ehime.jp
honai.ehime.jp
ikata.ehime.jp
imabari.ehime.jp
iyo.ehime.jp
kamijima.ehime.jp
kihoku.ehime.jp
kumakogen.ehime.jp
masaki.ehime.jp
matsuno.ehime.jp
matsuyama.ehime.jp
namikata.ehime.jp
niihama.ehime.jp
ozu.ehime.jp
saijo.ehime.jp
seiyo.ehime.jp
shikokuchuo.ehime.jp
tobe.ehime.jp
toon.ehime.jp
uchiko.ehime.jp
uwajima.ehime.jp
yawatahama.ehime.jp
echizen.fukui.jp
eiheiji.fukui.jp
fukui.fukui.jp
ikeda.fukui.jp
katsuyama.fukui.jp
mihama.fukui.jp
minamiechizen.fukui.jp
obama.fukui.jp
ohi.fukui.jp
ono.fukui.jp
sabae.fukui.jp
sakai.fukui.jp
takahama.fukui.jp
tsuruga.fukui.jp
wakasa.fukui.jp
ashiya.fukuoka.jp
buzen.fukuoka.jp
chikugo.fukuoka.jp
chikuho.fukuoka.jp
chikujo.fukuoka.jp
chikushino.fukuoka.jp
chikuzen.fukuoka.jp
chuo.fukuoka.jp
dazaifu.fukuoka.jp
fukuchi.fukuoka.jp
hakata.fukuoka.jp
higashi.fukuoka.jp
hirokawa.fukuoka.jp
hisayama.fukuoka.jp
iizuka.fukuoka.jp
inatsuki.fukuoka.jp
kaho.fukuoka.jp
kasuga.fukuoka.jp
kasuya.fukuoka.jp
kawara.fukuoka.jp
keisen.fukuoka.jp
koga.fukuoka.jp
kurate.fukuoka.jp
kurogi.fukuoka.jp
kurume.fukuoka.jp
minami.fukuoka.jp
miyako.fukuoka.jp
miyama.fukuoka.jp
miyawaka.fukuoka.jp
mizumaki.fukuoka.jp
munakata.fukuoka.jp
nakagawa.fukuoka.jp
nakama.fukuoka.jp
nishi.fukuoka.jp
nogata.fukuoka.jp
ogori.fukuoka.jp
okagaki.fukuoka.jp
okawa.fukuoka.jp
oki.fukuoka.jp
omuta.fukuoka.jp
onga.fukuoka.jp
onojo.fukuoka.jp
oto.fukuoka.jp
saigawa.fukuoka.jp
sasaguri.fukuoka.jp
shingu.fukuoka.jp
shinyoshitomi.fukuoka.jp
shonai.fukuoka.jp
soeda.fukuoka.jp
sue.fukuoka.jp
tachiarai.fukuoka.jp
tagawa.fukuoka.jp
takata.fukuoka.jp
toho.fukuoka.jp
toyotsu.fukuoka.jp
tsuiki.fukuoka.jp
ukiha.fukuoka.jp
umi.fukuoka.jp
usui.fukuoka.jp
yamada.fukuoka.jp
yame.fukuoka.jp
yanagawa.fukuoka.jp
yukuhashi.fukuoka.jp
aizubange.fukushima.jp
aizumisato.fukushima.jp
aizuwakamatsu.fukushima.jp
asakawa.fukushima.jp
bandai.fukushima.jp
date.fukushima.jp
fukushima.fukushima.jp
furudono.fukushima.jp
futaba.fukushima.jp
hanawa.fukushima.jp
higashi.fukushima.jp
hirata.fukushima.jp
hirono.fukushima.jp
iitate.fukushima.jp
inawashiro.fukushima.jp
ishikawa.fukushima.jp
iwaki.fukushima.jp
izumizaki.fukushima.jp
kagamiishi.fukushima.jp
kaneyama.fukushima.jp
kawamata.fukushima.jp
kitakata.fukushima.jp
kitashiobara.fukushima.jp
koori.fukushima.jp
koriyama.fukushima.jp
kunimi.fukushima.jp
miharu.fukushima.jp
mishima.fukushima.jp
namie.fukushima.jp
nango.fukushima.jp
nishiaizu.fukushima.jp
nishigo.fukushima.jp
okuma.fukushima.jp
omotego.fukushima.jp
ono.fukushima.jp
otama.fukushima.jp
samegawa.fukushima.jp
shimogo.fukushima.jp
shirakawa.fukushima.jp
showa.fukushima.jp
soma.fukushima.jp
sukagawa.fukushima.jp
taishin.fukushima.jp
tamakawa.fukushima.jp
tanagura.fukushima.jp
tenei.fukushima.jp
yabuki.fukushima.jp
yamato.fukushima.jp
yamatsuri.fukushima.jp
yanaizu.fukushima.jp
yugawa.fukushima.jp
anpachi.gifu.jp
ena.gifu.jp
gifu.gifu.jp
ginan.gifu.jp
godo.gifu.jp
gujo.gifu.jp
hashima.gifu.jp
hichiso.gifu.jp
hida.gifu.jp
higashishirakawa.gifu.jp
ibigawa.gifu.jp
ikeda.gifu.jp
kakamigahara.gifu.jp
kani.gifu.jp
kasahara.gifu.jp
kasamatsu.gifu.jp
kawaue.gifu.jp
kitagata.gifu.jp
mino.gifu.jp
minokamo.gifu.jp
mitake.gifu.jp
mizunami.gifu.jp
motosu.gifu.jp
nakatsugawa.gifu.jp
ogaki.gifu.jp
sakahogi.gifu.jp
seki.gifu.jp
sekigahara.gifu.jp
shirakawa.gifu.jp
tajimi.gifu.jp
takayama.gifu.jp
tarui.gifu.jp
toki.gifu.jp
tomika.gifu.jp
wanouchi.gifu.jp
yamagata.gifu.jp
yaotsu.gifu.jp
yoro.gifu.jp
annaka.gunma.jp
chiyoda.gunma.jp
fujioka.gunma.jp
higashiagatsuma.gunma.jp
isesaki.gunma.jp
itakura.gunma.jp
kanna.gunma.jp
kanra.gunma.jp
katashina.gunma.jp
kawaba.gunma.jp
kiryu.gunma.jp
kusatsu.gunma.jp
maebashi.gunma.jp
meiwa.gunma.jp
midori.gunma.jp
minakami.gunma.jp
naganohara.gunma.jp
nakanojo.gunma.jp
nanmoku.gunma.jp
numata.gunma.jp
oizumi.gunma.jp
ora.gunma.jp
ota.gunma.jp
shibukawa.gunma.jp
shimonita.gunma.jp
shinto.gunma.jp
showa.gunma.jp
takasaki.gunma.jp
takayama.gunma.jp
tamamura.gunma.jp
tatebayashi.gunma.jp
tomioka.gunma.jp
tsukiyono.gunma.jp
tsumagoi.gunma.jp
ueno.gunma.jp
yoshioka.gunma.jp
asaminami.hiroshima.jp
daiwa.hiroshima.jp
etajima.hiroshima.jp
fuchu.hiroshima.jp
fukuyama.hiroshima.jp
hatsukaichi.hiroshima.jp
higashihiroshima.hiroshima.jp
hongo.hiroshima.jp
jinsekikogen.hiroshima.jp
kaita.hiroshima.jp
kui.hiroshima.jp
kumano.hiroshima.jp
kure.hiroshima.jp
mihara.hiroshima.jp
miyoshi.hiroshima.jp
naka.hiroshima.jp
onomichi.hiroshima.jp
osakikamijima.hiroshima.jp
otake.hiroshima.jp
saka.hiroshima.jp
sera.hiroshima.jp
seranishi.hiroshima.jp
shinichi.hiroshima.jp
shobara.hiroshima.jp
takehara.hiroshima.jp
abashiri.hokkaido.jp
abira.hokkaido.jp
aibetsu.hokkaido.jp
akabira.hokkaido.jp
akkeshi.hokkaido.jp
asahikawa.hokkaido.jp
ashibetsu.hokkaido.jp
ashoro.hokkaido.jp
assabu.hokkaido.jp
atsuma.hokkaido.jp
bibai.hokkaido.jp
biei.hokkaido.jp
bifuka.hokkaido.jp
bihoro.hokkaido.jp
biratori.hokkaido.jp
chippubetsu.hokkaido.jp
chitose.hokkaido.jp
date.hokkaido.jp
ebetsu.hokkaido.jp
embetsu.hokkaido.jp
eniwa.hokkaido.jp
erimo.hokkaido.jp
esan.hokkaido.jp
esashi.hokkaido.jp
fukagawa.hokkaido.jp
fukushima.hokkaido.jp
furano.hokkaido.jp
furubira.hokkaido.jp
haboro.hokkaido.jp
hakodate.hokkaido.jp
hamatonbetsu.hokkaido.jp
hidaka.hokkaido.jp
higashikagura.hokkaido.jp
higashikawa.hokkaido.jp
hiroo.hokkaido.jp
hokuryu.hokkaido.jp
hokuto.hokkaido.jp
honbetsu.hokkaido.jp
horokanai.hokkaido.jp
horonobe.hokkaido.jp
ikeda.hokkaido.jp
imakane.hokkaido.jp
ishikari.hokkaido.jp
iwamizawa.hokkaido.jp
iwanai.hokkaido.jp
kamifurano.hokkaido.jp
kamikawa.hokkaido.jp
kamishihoro.hokkaido.jp
kamisunagawa.hokkaido.jp
kamoenai.hokkaido.jp
kayabe.hokkaido.jp
kembuchi.hokkaido.jp
kikonai.hokkaido.jp
kimobetsu.hokkaido.jp
kitahiroshima.hokkaido.jp
kitami.hokkaido.jp
kiyosato.hokkaido.jp
koshimizu.hokkaido.jp
kunneppu.hokkaido.jp
kuriyama.hokkaido.jp
kuromatsunai.hokkaido.jp
kushiro.hokkaido.jp
kutchan.hokkaido.jp
kyowa.hokkaido.jp
mashike.hokkaido.jp
matsumae.hokkaido.jp
mikasa.hokkaido.jp
minamifurano.hokkaido.jp
mombetsu.hokkaido.jp
moseushi.hokkaido.jp
mukawa.hokkaido.jp
muroran.hokkaido.jp
naie.hokkaido.jp
nakagawa.hokkaido.jp
nakasatsunai.hokkaido.jp
nakatombetsu.hokkaido.jp
nanae.hokkaido.jp
nanporo.hokkaido.jp
nayoro.hokkaido.jp
nemuro.hokkaido.jp
niikappu.hokkaido.jp
niki.hokkaido.jp
nishiokoppe.hokkaido.jp
noboribetsu.hokkaido.jp
numata.hokkaido.jp
obihiro.hokkaido.jp
obira.hokkaido.jp
oketo.hokkaido.jp
okoppe.hokkaido.jp
otaru.hokkaido.jp
otobe.hokkaido.jp
otofuke.hokkaido.jp
otoineppu.hokkaido.jp
oumu.hokkaido.jp
ozora.hokkaido.jp
pippu.hokkaido.jp
rankoshi.hokkaido.jp
rebun.hokkaido.jp
rikubetsu.hokkaido.jp
rishiri.hokkaido.jp
rishirifuji.hokkaido.jp
saroma.hokkaido.jp
sarufutsu.hokkaido.jp
shakotan.hokkaido.jp
shari.hokkaido.jp
shibecha.hokkaido.jp
shibetsu.hokkaido.jp
shikabe.hokkaido.jp
shikaoi.hokkaido.jp
shimamaki.hokkaido.jp
shimizu.hokkaido.jp
shimokawa.hokkaido.jp
shinshinotsu.hokkaido.jp
shintoku.hokkaido.jp
shiranuka.hokkaido.jp
shiraoi.hokkaido.jp
shiriuchi.hokkaido.jp
sobetsu.hokkaido.jp
sunagawa.hokkaido.jp
taiki.hokkaido.jp
takasu.hokkaido.jp
takikawa.hokkaido.jp
takinoue.hokkaido.jp
teshikaga.hokkaido.jp
tobetsu.hokkaido.jp
tohma.hokkaido.jp
tomakomai.hokkaido.jp
tomari.hokkaido.jp
toya.hokkaido.jp
toyako.hokkaido.jp
toyotomi.hokkaido.jp
toyoura.hokkaido.jp
tsubetsu.hokkaido.jp
tsukigata.hokkaido.jp
urakawa.hokkaido.jp
urausu.hokkaido.jp
uryu.hokkaido.jp
utashinai.hokkaido.jp
wakkanai.hokkaido.jp
wassamu.hokkaido.jp
yakumo.hokkaido.jp
yoichi.hokkaido.jp
aioi.hyogo.jp
akashi.hyogo.jp
ako.hyogo.jp
amagasaki.hyogo.jp
aogaki.hyogo.jp
asago.hyogo.jp
ashiya.hyogo.jp
awaji.hyogo.jp
fukusaki.hyogo.jp
goshiki.hyogo.jp
harima.hyogo.jp
himeji.hyogo.jp
ichikawa.hyogo.jp
inagawa.hyogo.jp
itami.hyogo.jp
kakogawa.hyogo.jp
kamigori.hyogo.jp
kamikawa.hyogo.jp
kasai.hyogo.jp
kasuga.hyogo.jp
kawanishi.hyogo.jp
miki.hyogo.jp
minamiawaji.hyogo.jp
nishinomiya.hyogo.jp
nishiwaki.hyogo.jp
ono.hyogo.jp
sanda.hyogo.jp
sannan.hyogo.jp
sasayama.hyogo.jp
sayo.hyogo.jp
shingu.hyogo.jp
shinonsen.hyogo.jp
shiso.hyogo.jp
sumoto.hyogo.jp
taishi.hyogo.jp
taka.hyogo.jp
takarazuka.hyogo.jp
takasago.hyogo.jp
takino.hyogo.jp
tamba.hyogo.jp
tatsuno.hyogo.jp
toyooka.hyogo.jp
yabu.hyogo.jp
yashiro.hyogo.jp
yoka.hyogo.jp
yokawa.hyogo.jp
ami.ibaraki.jp
asahi.ibaraki.jp
bando.ibaraki.jp
chikusei.ibaraki.jp
daigo.ibaraki.jp
fujishiro.ibaraki.jp
hitachi.ibaraki.jp
hitachinaka.ibaraki.jp
hitachiomiya.ibaraki.jp
hitachiota.ibaraki.jp
ibaraki.ibaraki.jp
ina.ibaraki.jp
inashiki.ibaraki.jp
itako.ibaraki.jp
iwama.ibaraki.jp
joso.ibaraki.jp
kamisu.ibaraki.jp
kasama.ibaraki.jp
kashima.ibaraki.jp
kasumigaura.ibaraki.jp
koga.ibaraki.jp
miho.ibaraki.jp
mito.ibaraki.jp
moriya.ibaraki.jp
naka.ibaraki.jp
namegata.ibaraki.jp
oarai.ibaraki.jp
ogawa.ibaraki.jp
omitama.ibaraki.jp
ryugasaki.ibaraki.jp
sakai.ibaraki.jp
sakuragawa.ibaraki.jp
shimodate.ibaraki.jp
shimotsuma.ibaraki.jp
shirosato.ibaraki.jp
sowa.ibaraki.jp
suifu.ibaraki.jp
takahagi.ibaraki.jp
tamatsukuri.ibaraki.jp
tokai.ibaraki.jp
tomobe.ibaraki.jp
tone.ibaraki.jp
toride.ibaraki.jp
tsuchiura.ibaraki.jp
tsukuba.ibaraki.jp
uchihara.ibaraki.jp
ushiku.ibaraki.jp
yachiyo.ibaraki.jp
yamagata.ibaraki.jp
yawara.ibaraki.jp
yuki.ibaraki.jp
anamizu.ishikawa.jp
hakui.ishikawa.jp
hakusan.ishikawa.jp
kaga.ishikawa.jp
kahoku.ishikawa.jp
kanazawa.ishikawa.jp
kawakita.ishikawa.jp
komatsu.ishikawa.jp
nakanoto.ishikawa.jp
nanao.ishikawa.jp
nomi.ishikawa.jp
nonoichi.ishikawa.jp
noto.ishikawa.jp
shika.ishikawa.jp
suzu.ishikawa.jp
tsubata.ishikawa.jp
tsurugi.ishikawa.jp
uchinada.ishikawa.jp
wajima.ishikawa.jp
fudai.iwate.jp
fujisawa.iwate.jp
hanamaki.iwate.jp
hiraizumi.iwate.jp
hirono.iwate.jp
ichinohe.iwate.jp
ichinoseki.iwate.jp
iwaizumi.iwate.jp
iwate.iwate.jp
joboji.iwate.jp
kamaishi.iwate.jp
kanegasaki.iwate.jp
karumai.iwate.jp
kawai.iwate.jp
kitakami.iwate.jp
kuji.iwate.jp
kunohe.iwate.jp
kuzumaki.iwate.jp
miyako.iwate.jp
mizusawa.iwate.jp
morioka.iwate.jp
ninohe.iwate.jp
noda.iwate.jp
ofunato.iwate.jp
oshu.iwate.jp
otsuchi.iwate.jp
rikuzentakata.iwate.jp
shiwa.iwate.jp
shizukuishi.iwate.jp
sumita.iwate.jp
tanohata.iwate.jp
tono.iwate.jp
yahaba.iwate.jp
yamada.iwate.jp
ayagawa.kagawa.jp
higashikagawa.kagawa.jp
kanonji.kagawa.jp
kotohira.kagawa.jp
manno.kagawa.jp
marugame.kagawa.jp
mitoyo.kagawa.jp
naoshima.kagawa.jp
sanuki.kagawa.jp
tadotsu.kagawa.jp
takamatsu.kagawa.jp
tonosho.kagawa.jp
uchinomi.kagawa.jp
utazu.kagawa.jp
zentsuji.kagawa.jp
akune.kagoshima.jp
amami.kagoshima.jp
hioki.kagoshima.jp
isa.kagoshima.jp
isen.kagoshima.jp
izumi.kagoshima.jp
kagoshima.kagoshima.jp
kanoya.kagoshima.jp
kawanabe.kagoshima.jp
kinko.kagoshima.jp
kouyama.kagoshima.jp
makurazaki.kagoshima.jp
matsumoto.kagoshima.jp
minamitane.kagoshima.jp
nakatane.kagoshima.jp
nishinoomote.kagoshima.jp
satsumasendai.kagoshima.jp
soo.kagoshima.jp
tarumizu.kagoshima.jp
yusui.kagoshima.jp
aikawa.kanagawa.jp
atsugi.kanagawa.jp
ayase.kanagawa.jp
chigasaki.kanagawa.jp
ebina.kanagawa.jp
fujisawa.kanagawa.jp
hadano.kanagawa.jp
hakone.kanagawa.jp
hiratsuka.kanagawa.jp
isehara.kanagawa.jp
kaisei.kanagawa.jp
kamakura.kanagawa.jp
kiyokawa.kanagawa.jp
matsuda.kanagawa.jp
minamiashigara.kanagawa.jp
miura.kanagawa.jp
nakai.kanagawa.jp
ninomiya.kanagawa.jp
odawara.kanagawa.jp
oi.kanagawa.jp
oiso.kanagawa.jp
sagamihara.kanagawa.jp
samukawa.kanagawa.jp
tsukui.kanagawa.jp
yamakita.kanagawa.jp
yamato.kanagawa.jp
yokosuka.kanagawa.jp
yugawara.kanagawa.jp
zama.kanagawa.jp
zushi.kanagawa.jp
aki.kochi.jp
geisei.kochi.jp
hidaka.kochi.jp
higashitsuno.kochi.jp
ino.kochi.jp
kagami.kochi.jp
kami.kochi.jp
kitagawa.kochi.jp
kochi.kochi.jp
mihara.kochi.jp
motoyama.kochi.jp
muroto.kochi.jp
nahari.kochi.jp
nakamura.kochi.jp
nankoku.kochi.jp
nishitosa.kochi.jp
niyodogawa.kochi.jp
ochi.kochi.jp
okawa.kochi.jp
otoyo.kochi.jp
otsuki.kochi.jp
sakawa.kochi.jp
sukumo.kochi.jp
susaki.kochi.jp
tosa.kochi.jp
tosashimizu.kochi.jp
toyo.kochi.jp
tsuno.kochi.jp
umaji.kochi.jp
yasuda.kochi.jp
yusuhara.kochi.jp
amakusa.kumamoto.jp
arao.kumamoto.jp
aso.kumamoto.jp
choyo.kumamoto.jp
gyokuto.kumamoto.jp
kamiamakusa.kumamoto.jp
kikuchi.kumamoto.jp
kumamoto.kumamoto.jp
mashiki.kumamoto.jp
mifune.kumamoto.jp
minamata.kumamoto.jp
minamioguni.kumamoto.jp
nagasu.kumamoto.jp
nishihara.kumamoto.jp
oguni.kumamoto.jp
ozu.kumamoto.jp
sumoto.kumamoto.jp
takamori.kumamoto.jp
uki.kumamoto.jp
uto.kumamoto.jp
yamaga.kumamoto.jp
yamato.kumamoto.jp
yatsushiro.kumamoto.jp
ayabe.kyoto.jp
fukuchiyama.kyoto.jp
higashiyama.kyoto.jp
ide.kyoto.jp
ine.kyoto.jp
joyo.kyoto.jp
kameoka.kyoto.jp
kamo.kyoto.jp
kita.kyoto.jp
kizu.kyoto.jp
kumiyama.kyoto.jp
kyotamba.kyoto.jp
kyotanabe.kyoto.jp
kyotango.kyoto.jp
maizuru.kyoto.jp
minami.kyoto.jp
minamiyamashiro.kyoto.jp
miyazu.kyoto.jp
muko.kyoto.jp
nagaokakyo.kyoto.jp
nakagyo.kyoto.jp
nantan.kyoto.jp
oyamazaki.kyoto.jp
sakyo.kyoto.jp
seika.kyoto.jp
tanabe.kyoto.jp
uji.kyoto.jp
ujitawara.kyoto.jp
wazuka.kyoto.jp
yamashina.kyoto.jp
yawata.kyoto.jp
asahi.mie.jp
inabe.mie.jp
ise.mie.jp
kameyama.mie.jp
kawagoe.mie.jp
kiho.mie.jp
kisosaki.mie.jp
kiwa.mie.jp
komono.mie.jp
kumano.mie.jp
kuwana.mie.jp
matsusaka.mie.jp
meiwa.mie.jp
mihama.mie.jp
minamiise.mie.jp
misugi.mie.jp
miyama.mie.jp
nabari.mie.jp
shima.mie.jp
suzuka.mie.jp
tado.mie.jp
taiki.mie.jp
taki.mie.jp
tamaki.mie.jp
toba.mie.jp
tsu.mie.jp
udono.mie.jp
ureshino.mie.jp
watarai.mie.jp
yokkaichi.mie.jp
furukawa.miyagi.jp
higashimatsushima.miyagi.jp
ishinomaki.miyagi.jp
iwanuma.miyagi.jp
kakuda.miyagi.jp
kami.miyagi.jp
kawasaki.miyagi.jp
marumori.miyagi.jp
matsushima.miyagi.jp
minamisanriku.miyagi.jp
misato.miyagi.jp
murata.miyagi.jp
natori.miyagi.jp
ogawara.miyagi.jp
ohira.miyagi.jp
onagawa.miyagi.jp
osaki.miyagi.jp
rifu.miyagi.jp
semine.miyagi.jp
shibata.miyagi.jp
shichikashuku.miyagi.jp
shikama.miyagi.jp
shiogama.miyagi.jp
shiroishi.miyagi.jp
tagajo.miyagi.jp
taiwa.miyagi.jp
tome.miyagi.jp
tomiya.miyagi.jp
wakuya.miyagi.jp
watari.miyagi.jp
yamamoto.miyagi.jp
zao.miyagi.jp
aya.miyazaki.jp
ebino.miyazaki.jp
gokase.miyazaki.jp
hyuga.miyazaki.jp
kadogawa.miyazaki.jp
kawaminami.miyazaki.jp
kijo.miyazaki.jp
kitagawa.miyazaki.jp
kitakata.miyazaki.jp
kitaura.miyazaki.jp
kobayashi.miyazaki.jp
kunitomi.miyazaki.jp
kushima.miyazaki.jp
mimata.miyazaki.jp
miyakonojo.miyazaki.jp
miyazaki.miyazaki.jp
morotsuka.miyazaki.jp
nichinan.miyazaki.jp
nishimera.miyazaki.jp
nobeoka.miyazaki.jp
saito.miyazaki.jp
shiiba.miyazaki.jp
shintomi.miyazaki.jp
takaharu.miyazaki.jp
takanabe.miyazaki.jp
takazaki.miyazaki.jp
tsuno.miyazaki.jp
achi.nagano.jp
agematsu.nagano.jp
anan.nagano.jp
aoki.nagano.jp
asahi.nagano.jp
azumino.nagano.jp
chikuhoku.nagano.jp
chikuma.nagano.jp
chino.nagano.jp
fujimi.nagano.jp
hakuba.nagano.jp
hara.nagano.jp
hiraya.nagano.jp
iida.nagano.jp
iijima.nagano.jp
iiyama.nagano.jp
iizuna.nagano.jp
ikeda.nagano.jp
ikusaka.nagano.jp
ina.nagano.jp
karuizawa.nagano.jp
kawakami.nagano.jp
kiso.nagano.jp
kisofukushima.nagano.jp
kitaaiki.nagano.jp
komagane.nagano.jp
komoro.nagano.jp
matsukawa.nagano.jp
matsumoto.nagano.jp
miasa.nagano.jp
minamiaiki.nagano.jp
minamimaki.nagano.jp
minamiminowa.nagano.jp
minowa.nagano.jp
miyada.nagano.jp
miyota.nagano.jp
mochizuki.nagano.jp
nagano.nagano.jp
nagawa.nagano.jp
nagiso.nagano.jp
nakagawa.nagano.jp
nakano.nagano.jp
nozawaonsen.nagano.jp
obuse.nagano.jp
ogawa.nagano.jp
okaya.nagano.jp
omachi.nagano.jp
omi.nagano.jp
ookuwa.nagano.jp
ooshika.nagano.jp
otaki.nagano.jp
otari.nagano.jp
sakae.nagano.jp
sakaki.nagano.jp
saku.nagano.jp
sakuho.nagano.jp
shimosuwa.nagano.jp
shinanomachi.nagano.jp
shiojiri.nagano.jp
suwa.nagano.jp
suzaka.nagano.jp
takagi.nagano.jp
takamori.nagano.jp
takayama.nagano.jp
tateshina.nagano.jp
tatsuno.nagano.jp
togakushi.nagano.jp
togura.nagano.jp
tomi.nagano.jp
ueda.nagano.jp
wada.nagano.jp
yamagata.nagano.jp
yamanouchi.nagano.jp
yasaka.nagano.jp
yasuoka.nagano.jp
chijiwa.nagasaki.jp
futsu.nagasaki.jp
goto.nagasaki.jp
hasami.nagasaki.jp
hirado.nagasaki.jp
iki.nagasaki.jp
isahaya.nagasaki.jp
kawatana.nagasaki.jp
kuchinotsu.nagasaki.jp
matsuura.nagasaki.jp
nagasaki.nagasaki.jp
obama.nagasaki.jp
omura.nagasaki.jp
oseto.nagasaki.jp
saikai.nagasaki.jp
sasebo.nagasaki.jp
seihi.nagasaki.jp
shimabara.nagasaki.jp
shinkamigoto.nagasaki.jp
togitsu.nagasaki.jp
tsushima.nagasaki.jp
unzen.nagasaki.jp
ando.nara.jp
gose.nara.jp
heguri.nara.jp
higashiyoshino.nara.jp
ikaruga.nara.jp
ikoma.nara.jp
kamikitayama.nara.jp
kanmaki.nara.jp
kashiba.nara.jp
kashihara.nara.jp
katsuragi.nara.jp
kawai.nara.jp
kawakami.nara.jp
kawanishi.nara.jp
koryo.nara.jp
kurotaki.nara.jp
mitsue.nara.jp
miyake.nara.jp
nara.nara.jp
nosegawa.nara.jp
oji.nara.jp
ouda.nara.jp
oyodo.nara.jp
sakurai.nara.jp
sango.nara.jp
shimoichi.nara.jp
shimokitayama.nara.jp
shinjo.nara.jp
soni.nara.jp
takatori.nara.jp
tawaramoto.nara.jp
tenkawa.nara.jp
tenri.nara.jp
uda.nara.jp
yamatokoriyama.nara.jp
yamatotakada.nara.jp
yamazoe.nara.jp
yoshino.nara.jp
aga.niigata.jp
agano.niigata.jp
gosen.niigata.jp
itoigawa.niigata.jp
izumozaki.niigata.jp
joetsu.niigata.jp
kamo.niigata.jp
kariwa.niigata.jp
kashiwazaki.niigata.jp
minamiuonuma.niigata.jp
mitsuke.niigata.jp
muika.niigata.jp
murakami.niigata.jp
myoko.niigata.jp
nagaoka.niigata.jp
niigata.niigata.jp
ojiya.niigata.jp
omi.niigata.jp
sado.niigata.jp
sanjo.niigata.jp
seiro.niigata.jp
seirou.niigata.jp
sekikawa.niigata.jp
shibata.niigata.jp
tagami.niigata.jp
tainai.niigata.jp
tochio.niigata.jp
tokamachi.niigata.jp
tsubame.niigata.jp
tsunan.niigata.jp
uonuma.niigata.jp
yahiko.niigata.jp
yoita.niigata.jp
yuzawa.niigata.jp
beppu.oita.jp
bungoono.oita.jp
bungotakada.oita.jp
hasama.oita.jp
hiji.oita.jp
himeshima.oita.jp
hita.oita.jp
kamitsue.oita.jp
kokonoe.oita.jp
kuju.oita.jp
kunisaki.oita.jp
kusu.oita.jp
oita.oita.jp
saiki.oita.jp
taketa.oita.jp
tsukumi.oita.jp
usa.oita.jp
usuki.oita.jp
yufu.oita.jp
akaiwa.okayama.jp
asakuchi.okayama.jp
bizen.okayama.jp
hayashima.okayama.jp
ibara.okayama.jp
kagamino.okayama.jp
kasaoka.okayama.jp
kibichuo.okayama.jp
kumenan.okayama.jp
kurashiki.okayama.jp
maniwa.okayama.jp
misaki.okayama.jp
nagi.okayama.jp
niimi.okayama.jp
nishiawakura.okayama.jp
okayama.okayama.jp
satosho.okayama.jp
setouchi.okayama.jp
shinjo.okayama.jp
shoo.okayama.jp
soja.okayama.jp
takahashi.okayama.jp
tamano.okayama.jp
tsuyama.okayama.jp
wake.okayama.jp
yakage.okayama.jp
aguni.okinawa.jp
ginowan.okinawa.jp
ginoza.okinawa.jp
gushikami.okinawa.jp
haebaru.okinawa.jp
higashi.okinawa.jp
hirara.okinawa.jp
iheya.okinawa.jp
ishigaki.okinawa.jp
ishikawa.okinawa.jp
itoman.okinawa.jp
izena.okinawa.jp
kadena.okinawa.jp
kin.okinawa.jp
kitadaito.okinawa.jp
kitanakagusuku.okinawa.jp
kumejima.okinawa.jp
kunigami.okinawa.jp
minamidaito.okinawa.jp
motobu.okinawa.jp
nago.okinawa.jp
naha.okinawa.jp
nakagusuku.okinawa.jp
nakijin.okinawa.jp
nanjo.okinawa.jp
nishihara.okinawa.jp
ogimi.okinawa.jp
okinawa.okinawa.jp
onna.okinawa.jp
shimoji.okinawa.jp
taketomi.okinawa.jp
tarama.okinawa.jp
tokashiki.okinawa.jp
tomigusuku.okinawa.jp
tonaki.okinawa.jp
urasoe.okinawa.jp
uruma.okinawa.jp
yaese.okinawa.jp
yomitan.okinawa.jp
yonabaru.okinawa.jp
yonaguni.okinawa.jp
zamami.okinawa.jp
abeno.osaka.jp
chihayaakasaka.osaka.jp
chuo.osaka.jp
daito.osaka.jp
fujiidera.osaka.jp
habikino.osaka.jp
hannan.osaka.jp
higashiosaka.osaka.jp
higashisumiyoshi.osaka.jp
higashiyodogawa.osaka.jp
hirakata.osaka.jp
ibaraki.osaka.jp
ikeda.osaka.jp
izumi.osaka.jp
izumiotsu.osaka.jp
izumisano.osaka.jp
kadoma.osaka.jp
kaizuka.osaka.jp
kanan.osaka.jp
kashiwara.osaka.jp
katano.osaka.jp
kawachinagano.osaka.jp
kishiwada.osaka.jp
kita.osaka.jp
kumatori.osaka.jp
matsubara.osaka.jp
minato.osaka.jp
minoh.osaka.jp
misaki.osaka.jp
moriguchi.osaka.jp
neyagawa.osaka.jp
nishi.osaka.jp
nose.osaka.jp
osakasayama.osaka.jp
sakai.osaka.jp
sayama.osaka.jp
sennan.osaka.jp
settsu.osaka.jp
shijonawate.osaka.jp
shimamoto.osaka.jp
suita.osaka.jp
tadaoka.osaka.jp
taishi.osaka.jp
tajiri.osaka.jp
takaishi.osaka.jp
takatsuki.osaka.jp
tondabayashi.osaka.jp
toyonaka.osaka.jp
toyono.osaka.jp
yao.osaka.jp
ariake.saga.jp
arita.saga.jp
fukudomi.saga.jp
genkai.saga.jp
hamatama.saga.jp
hizen.saga.jp
imari.saga.jp
kamimine.saga.jp
kanzaki.saga.jp
karatsu.saga.jp
kashima.saga.jp
kitagata.saga.jp
kitahata.saga.jp
kiyama.saga.jp
kouhoku.saga.jp
kyuragi.saga.jp
nishiarita.saga.jp
ogi.saga.jp
omachi.saga.jp
ouchi.saga.jp
saga.saga.jp
shiroishi.saga.jp
taku.saga.jp
tara.saga.jp
tosu.saga.jp
yoshinogari.saga.jp
arakawa.saitama.jp
asaka.saitama.jp
chichibu.saitama.jp
fujimi.saitama.jp
fujimino.saitama.jp
fukaya.saitama.jp
hanno.saitama.jp
hanyu.saitama.jp
hasuda.saitama.jp
hatogaya.saitama.jp
hatoyama.saitama.jp
hidaka.saitama.jp
higashichichibu.saitama.jp
higashimatsuyama.saitama.jp
honjo.saitama.jp
ina.saitama.jp
iruma.saitama.jp
iwatsuki.saitama.jp
kamiizumi.saitama.jp
kamikawa.saitama.jp
kamisato.saitama.jp
kasukabe.saitama.jp
kawagoe.saitama.jp
kawaguchi.saitama.jp
kawajima.saitama.jp
kazo.saitama.jp
kitamoto.saitama.jp
koshigaya.saitama.jp
kounosu.saitama.jp
kuki.saitama.jp
kumagaya.saitama.jp
matsubushi.saitama.jp
minano.saitama.jp
misato.saitama.jp
miyashiro.saitama.jp
miyoshi.saitama.jp
moroyama.saitama.jp
nagatoro.saitama.jp
namegawa.saitama.jp
niiza.saitama.jp
ogano.saitama.jp
ogawa.saitama.jp
ogose.saitama.jp
okegawa.saitama.jp
omiya.saitama.jp
otaki.saitama.jp
ranzan.saitama.jp
ryokami.saitama.jp
saitama.saitama.jp
sakado.saitama.jp
satte.saitama.jp
sayama.saitama.jp
shiki.saitama.jp
shiraoka.saitama.jp
soka.saitama.jp
sugito.saitama.jp
toda.saitama.jp
tokigawa.saitama.jp
tokorozawa.saitama.jp
tsurugashima.saitama.jp
urawa.saitama.jp
warabi.saitama.jp
yashio.saitama.jp
yokoze.saitama.jp
yono.saitama.jp
yorii.saitama.jp
yoshida.saitama.jp
yoshikawa.saitama.jp
yoshimi.saitama.jp
aisho.shiga.jp
gamo.shiga.jp
higashiomi.shiga.jp
hikone.shiga.jp
koka.shiga.jp
konan.shiga.jp
kosei.shiga.jp
koto.shiga.jp
kusatsu.shiga.jp
maibara.shiga.jp
moriyama.shiga.jp
nagahama.shiga.jp
nishiazai.shiga.jp
notogawa.shiga.jp
omihachiman.shiga.jp
otsu.shiga.jp
ritto.shiga.jp
ryuoh.shiga.jp
takashima.shiga.jp
takatsuki.shiga.jp
torahime.shiga.jp
toyosato.shiga.jp
yasu.shiga.jp
akagi.shimane.jp
ama.shimane.jp
gotsu.shimane.jp
hamada.shimane.jp
higashiizumo.shimane.jp
hikawa.shimane.jp
hikimi.shimane.jp
izumo.shimane.jp
kakinoki.shimane.jp
masuda.shimane.jp
matsue.shimane.jp
misato.shimane.jp
nishinoshima.shimane.jp
ohda.shimane.jp
okinoshima.shimane.jp
okuizumo.shimane.jp
shimane.shimane.jp
tamayu.shimane.jp
tsuwano.shimane.jp
unnan.shimane.jp
yakumo.shimane.jp
yasugi.shimane.jp
yatsuka.shimane.jp
arai.shizuoka.jp
atami.shizuoka.jp
fuji.shizuoka.jp
fujieda.shizuoka.jp
fujikawa.shizuoka.jp
fujinomiya.shizuoka.jp
fukuroi.shizuoka.jp
gotemba.shizuoka.jp
haibara.shizuoka.jp
hamamatsu.shizuoka.jp
higashiizu.shizuoka.jp
ito.shizuoka.jp
iwata.shizuoka.jp
izu.shizuoka.jp
izunokuni.shizuoka.jp
kakegawa.shizuoka.jp
kannami.shizuoka.jp
kawanehon.shizuoka.jp
kawazu.shizuoka.jp
kikugawa.shizuoka.jp
kosai.shizuoka.jp
makinohara.shizuoka.jp
matsuzaki.shizuoka.jp
minamiizu.shizuoka.jp
mishima.shizuoka.jp
morimachi.shizuoka.jp
nishiizu.shizuoka.jp
numazu.shizuoka.jp
omaezaki.shizuoka.jp
shimada.shizuoka.jp
shimizu.shizuoka.jp
shimoda.shizuoka.jp
shizuoka.shizuoka.jp
susono.shizuoka.jp
yaizu.shizuoka.jp
yoshida.shizuoka.jp
ashikaga.tochigi.jp
bato.tochigi.jp
haga.tochigi.jp
ichikai.tochigi.jp
iwafune.tochigi.jp
kaminokawa.tochigi.jp
kanuma.tochigi.jp
karasuyama.tochigi.jp
kuroiso.tochigi.jp
mashiko.tochigi.jp
mibu.tochigi.jp
moka.tochigi.jp
motegi.tochigi.jp
nasu.tochigi.jp
nasushiobara.tochigi.jp
nikko.tochigi.jp
nishikata.tochigi.jp
nogi.tochigi.jp
ohira.tochigi.jp
ohtawara.tochigi.jp
oyama.tochigi.jp
sakura.tochigi.jp
sano.tochigi.jp
shimotsuke.tochigi.jp
shioya.tochigi.jp
takanezawa.tochigi.jp
tochigi.tochigi.jp
tsuga.tochigi.jp
ujiie.tochigi.jp
utsunomiya.tochigi.jp
yaita.tochigi.jp
aizumi.tokushima.jp
anan.tokushima.jp
ichiba.tokushima.jp
itano.tokushima.jp
kainan.tokushima.jp
komatsushima.tokushima.jp
matsushige.tokushima.jp
mima.tokushima.jp
minami.tokushima.jp
miyoshi.tokushima.jp
mugi.tokushima.jp
nakagawa.tokushima.jp
naruto.tokushima.jp
sanagochi.tokushima.jp
shishikui.tokushima.jp
tokushima.tokushima.jp
wajiki.tokushima.jp
adachi.tokyo.jp
akiruno.tokyo.jp
akishima.tokyo.jp
aogashima.tokyo.jp
arakawa.tokyo.jp
bunkyo.tokyo.jp
chiyoda.tokyo.jp
chofu.tokyo.jp
chuo.tokyo.jp
edogawa.tokyo.jp
fuchu.tokyo.jp
fussa.tokyo.jp
hachijo.tokyo.jp
hachioji.tokyo.jp
hamura.tokyo.jp
higashikurume.tokyo.jp
higashimurayama.tokyo.jp
higashiyamato.tokyo.jp
hino.tokyo.jp
hinode.tokyo.jp
hinohara.tokyo.jp
inagi.tokyo.jp
itabashi.tokyo.jp
katsushika.tokyo.jp
kita.tokyo.jp
kiyose.tokyo.jp
kodaira.tokyo.jp
koganei.tokyo.jp
kokubunji.tokyo.jp
komae.tokyo.jp
koto.tokyo.jp
kouzushima.tokyo.jp
kunitachi.tokyo.jp
machida.tokyo.jp
meguro.tokyo.jp
minato.tokyo.jp
mitaka.tokyo.jp
mizuho.tokyo.jp
musashimurayama.tokyo.jp
musashino.tokyo.jp
nakano.tokyo.jp
nerima.tokyo.jp
ogasawara.tokyo.jp
okutama.tokyo.jp
ome.tokyo.jp
oshima.tokyo.jp
ota.tokyo.jp
setagaya.tokyo.jp
shibuya.tokyo.jp
shinagawa.tokyo.jp
shinjuku.tokyo.jp
suginami.tokyo.jp
sumida.tokyo.jp
tachikawa.tokyo.jp
taito.tokyo.jp
tama.tokyo.jp
toshima.tokyo.jp
chizu.tottori.jp
hino.tottori.jp
kawahara.tottori.jp
koge.tottori.jp
kotoura.tottori.jp
misasa.tottori.jp
nanbu.tottori.jp
nichinan.tottori.jp
sakaiminato.tottori.jp
tottori.tottori.jp
wakasa.tottori.jp
yazu.tottori.jp
yonago.tottori.jp
asahi.toyama.jp
fuchu.toyama.jp
fukumitsu.toyama.jp
funahashi.toyama.jp
himi.toyama.jp
imizu.toyama.jp
inami.toyama.jp
johana.toyama.jp
kamiichi.toyama.jp
kurobe.toyama.jp
nakaniikawa.toyama.jp
namerikawa.toyama.jp
nanto.toyama.jp
nyuzen.toyama.jp
oyabe.toyama.jp
taira.toyama.jp
takaoka.toyama.jp
tateyama.toyama.jp
toga.toyama.jp
tonami.toyama.jp
toyama.toyama.jp
unazuki.toyama.jp
uozu.toyama.jp
yamada.toyama.jp
arida.wakayama.jp
aridagawa.wakayama.jp
gobo.wakayama.jp
hashimoto.wakayama.jp
hidaka.wakayama.jp
hirogawa.wakayama.jp
inami.wakayama.jp
iwade.wakayama.jp
kainan.wakayama.jp
kamitonda.wakayama.jp
katsuragi.wakayama.jp
kimino.wakayama.jp
kinokawa.wakayama.jp
kitayama.wakayama.jp
koya.wakayama.jp
koza.wakayama.jp
kozagawa.wakayama.jp
kudoyama.wakayama.jp
kushimoto.wakayama.jp
mihama.wakayama.jp
misato.wakayama.jp
nachikatsuura.wakayama.jp
shingu.wakayama.jp
shirahama.wakayama.jp
taiji.wakayama.jp
tanabe.wakayama.jp
wakayama.wakayama.jp
yuasa.wakayama.jp
yura.wakayama.jp
asahi.yamagata.jp
funagata.yamagata.jp
higashine.yamagata.jp
iide.yamagata.jp
kahoku.yamagata.jp
kaminoyama.yamagata.jp
kaneyama.yamagata.jp
kawanishi.yamagata.jp
mamurogawa.yamagata.jp
mikawa.yamagata.jp
murayama.yamagata.jp
nagai.yamagata.jp
nakayama.yamagata.jp
nanyo.yamagata.jp
nishikawa.yamagata.jp
obanazawa.yamagata.jp
oe.yamagata.jp
oguni.yamagata.jp
ohkura.yamagata.jp
oishida.yamagata.jp
sagae.yamagata.jp
sakata.yamagata.jp
sakegawa.yamagata.jp
shinjo.yamagata.jp
shirataka.yamagata.jp
shonai.yamagata.jp
takahata.yamagata.jp
tendo.yamagata.jp
tozawa.yamagata.jp
tsuruoka.yamagata.jp
yamagata.yamagata.jp
yamanobe.yamagata.jp
yonezawa.yamagata.jp
yuza.yamagata.jp
abu.yamaguchi.jp
hagi.yamaguchi.jp
hikari.yamaguchi.jp
hofu.yamaguchi.jp
iwakuni.yamaguchi.jp
kudamatsu.yamaguchi.jp
mitou.yamaguchi.jp
nagato.yamaguchi.jp
oshima.yamaguchi.jp
shimonoseki.yamaguchi.jp
shunan.yamaguchi.jp
tabuse.yamaguchi.jp
tokuyama.yamaguchi.jp
toyota.yamaguchi.jp
ube.yamaguchi.jp
yuu.yamaguchi.jp
chuo.yamanashi.jp
doshi.yamanashi.jp
fuefuki.yamanashi.jp
fujikawa.yamanashi.jp
fujikawaguchiko.yamanashi.jp
fujiyoshida.yamanashi.jp
hayakawa.yamanashi.jp
hokuto.yamanashi.jp
ichikawamisato.yamanashi.jp
kai.yamanashi.jp
kofu.yamanashi.jp
koshu.yamanashi.jp
kosuge.yamanashi.jp
minami-alps.yamanashi.jp
minobu.yamanashi.jp
nakamichi.yamanashi.jp
nanbu.yamanashi.jp
narusawa.yamanashi.jp
nirasaki.yamanashi.jp
nishikatsura.yamanashi.jp
oshino.yamanashi.jp
otsuki.yamanashi.jp
showa.yamanashi.jp
tabayama.yamanashi.jp
tsuru.yamanashi.jp
uenohara.yamanashi.jp
yamanakako.yamanashi.jp
yamanashi.yamanashi.jp

// ke : http://www.kenic.or.ke/index.php/en/ke-domains/ke-domains
ke
ac.ke
co.ke
go.ke
info.ke
me.ke
mobi.ke
ne.ke
or.ke
sc.ke

// kg : http://www.domain.kg/dmn_n.html
kg
com.kg
edu.kg
gov.kg
mil.kg
net.kg
org.kg

// kh : http://www.mptc.gov.kh/dns_registration.htm
*.kh

// ki : https://www.iana.org/domains/root/db/ki.html
ki
biz.ki
com.ki
edu.ki
gov.ki
info.ki
net.ki
org.ki

// km : https://www.iana.org/domains/root/db/km.html
// http://www.domaine.km/documents/charte.doc
km
ass.km
com.km
edu.km
gov.km
mil.km
nom.km
org.km
prd.km
tm.km
// These are only mentioned as proposed suggestions at domaine.km, but
// https://www.iana.org/domains/root/db/km.html says they're available for registration:
asso.km
coop.km
gouv.km
medecin.km
notaires.km
pharmaciens.km
presse.km
veterinaire.km

// kn : https://www.iana.org/domains/root/db/kn.html
// http://www.dot.kn/domainRules.html
kn
edu.kn
gov.kn
net.kn
org.kn

// kp : http://www.kcce.kp/en_index.php
kp
com.kp
edu.kp
gov.kp
org.kp
rep.kp
tra.kp

// kr : https://www.iana.org/domains/root/db/kr.html
// see also: https://krnic.kisa.or.kr/jsp/infoboard/law/domBylawsReg.jsp
kr
ac.kr
ai.kr
co.kr
es.kr
go.kr
hs.kr
io.kr
it.kr
kg.kr
me.kr
mil.kr
ms.kr
ne.kr
or.kr
pe.kr
re.kr
sc.kr
// kr geographical names
busan.kr
chungbuk.kr
chungnam.kr
daegu.kr
daejeon.kr
gangwon.kr
gwangju.kr
gyeongbuk.kr
gyeonggi.kr
gyeongnam.kr
incheon.kr
jeju.kr
jeonbuk.kr
jeonnam.kr
seoul.kr
ulsan.kr

// kw : https://www.nic.kw/policies/
// Confirmed by registry <nic.tech@citra.gov.kw>
kw
com.kw
edu.kw
emb.kw
gov.kw
ind.kw
net.kw
org.kw

// ky : http://www.icta.ky/da_ky_reg_dom.php
// Confirmed by registry <kysupport@perimeterusa.com> 2008-06-17
ky
com.ky
edu.ky
net.ky
org.ky

// kz : https://www.iana.org/domains/root/db/kz.html
// see also: http://www.nic.kz/rules/index.jsp
kz
com.kz
edu.kz
gov.kz
mil.kz
net.kz
org.kz

// la : https://www.iana.org/domains/root/db/la.html
// Submitted by registry <gavin.brown@nic.la>
la
com.la
edu.la
gov.la
info.la
int.la
net.la
org.la
per.la

// lb : https://www.iana.org/domains/root/db/lb.html
// Submitted by registry <randy@psg.com>
lb
com.lb
edu.lb
gov.lb
net.lb
org.lb

// lc : https://www.iana.org/domains/root/db/lc.html
// see also: http://www.nic.lc/rules.htm
lc
co.lc
com.lc
edu.lc
gov.lc
net.lc
org.lc

// li : https://www.iana.org/domains/root/db/li.html
li

// lk : https://www.iana.org/domains/root/db/lk.html
lk
ac.lk
assn.lk
com.lk
edu.lk
gov.lk
grp.lk
hotel.lk
int.lk
ltd.lk
net.lk
ngo.lk
org.lk
sch.lk
soc.lk
web.lk

// lr : http://psg.com/dns/lr/lr.txt
// Submitted by registry <randy@psg.com>
lr
com.lr
edu.lr
gov.lr
net.lr
org.lr

// ls : http://www.nic.ls/
// Confirmed by registry <lsadmin@nic.ls>
ls
ac.ls
biz.ls
co.ls
edu.ls
gov.ls
info.ls
net.ls
org.ls
sc.ls

// lt : https://www.iana.org/domains/root/db/lt.html
lt
// gov.lt : http://www.gov.lt/index_en.php
gov.lt

// lu : http://www.dns.lu/en/
lu

// lv : https://www.iana.org/domains/root/db/lv.html
lv
asn.lv
com.lv
conf.lv
edu.lv
gov.lv
id.lv
mil.lv
net.lv
org.lv

// ly : http://www.nic.ly/regulations.php
ly
com.ly
edu.ly
gov.ly
id.ly
med.ly
net.ly
org.ly
plc.ly
sch.ly

// ma : https://www.iana.org/domains/root/db/ma.html
// http://www.anrt.ma/fr/admin/download/upload/file_fr782.pdf
ma
ac.ma
co.ma
gov.ma
net.ma
org.ma
press.ma

// mc : http://www.nic.mc/
mc
asso.mc
tm.mc

// md : https://www.iana.org/domains/root/db/md.html
md

// me : https://www.iana.org/domains/root/db/me.html
me
ac.me
co.me
edu.me
gov.me
its.me
net.me
org.me
priv.me

// mg : https://nic.mg
mg
co.mg
com.mg
edu.mg
gov.mg
mil.mg
nom.mg
org.mg
prd.mg

// mh : https://www.iana.org/domains/root/db/mh.html
mh

// mil : https://www.iana.org/domains/root/db/mil.html
mil

// mk : https://www.iana.org/domains/root/db/mk.html
// see also: http://dns.marnet.net.mk/postapka.php
mk
com.mk
edu.mk
gov.mk
inf.mk
name.mk
net.mk
org.mk

// ml : https://www.iana.org/domains/root/db/ml.html
// Confirmed by Boubacar NDIAYE <bndiaye@agetic.gouv.ml> 2024-12-31
ml
ac.ml
art.ml
asso.ml
com.ml
edu.ml
gouv.ml
gov.ml
info.ml
inst.ml
net.ml
org.ml
pr.ml
presse.ml

// mm : https://www.iana.org/domains/root/db/mm.html
*.mm

// mn : https://www.iana.org/domains/root/db/mn.html
mn
edu.mn
gov.mn
org.mn

// mo : http://www.monic.net.mo/
mo
com.mo
edu.mo
gov.mo
net.mo
org.mo

// mobi : https://www.iana.org/domains/root/db/mobi.html
mobi

// mp : http://www.dot.mp/
// Confirmed by registry <dcamacho@saipan.com> 2008-06-17
mp

// mq : https://www.iana.org/domains/root/db/mq.html
mq

// mr : https://www.iana.org/domains/root/db/mr.html
mr
gov.mr

// ms : https://www.iana.org/domains/root/db/ms.html
ms
com.ms
edu.ms
gov.ms
net.ms
org.ms

// mt : https://www.nic.org.mt/go/policy
// Submitted by registry <help@nic.org.mt>
mt
com.mt
edu.mt
net.mt
org.mt

// mu : https://www.iana.org/domains/root/db/mu.html
mu
ac.mu
co.mu
com.mu
gov.mu
net.mu
or.mu
org.mu

// museum : https://welcome.museum/wp-content/uploads/2018/05/20180525-Registration-Policy-MUSEUM-EN_VF-2.pdf https://welcome.museum/buy-your-dot-museum-2/
museum

// mv : https://www.iana.org/domains/root/db/mv.html
// "mv" included because, contra Wikipedia, google.mv exists.
mv
aero.mv
biz.mv
com.mv
coop.mv
edu.mv
gov.mv
info.mv
int.mv
mil.mv
museum.mv
name.mv
net.mv
org.mv
pro.mv

// mw : http://www.registrar.mw/
mw
ac.mw
biz.mw
co.mw
com.mw
coop.mw
edu.mw
gov.mw
int.mw
net.mw
org.mw

// mx : http://www.nic.mx/
// Submitted by registry <farias@nic.mx>
mx
com.mx
edu.mx
gob.mx
net.mx
org.mx

// my : http://www.mynic.my/
// Available strings: https://mynic.my/resources/domains/buying-a-domain/
my
biz.my
com.my
edu.my
gov.my
mil.my
name.my
net.my
org.my

// mz : http://www.uem.mz/
// Submitted by registry <antonio@uem.mz>
mz
ac.mz
adv.mz
co.mz
edu.mz
gov.mz
mil.mz
net.mz
org.mz

// na : http://www.na-nic.com.na/
na
alt.na
co.na
com.na
gov.na
net.na
org.na

// name : http://www.nic.name/
// Regarding 2LDs: https://github.com/publicsuffix/list/issues/2306
name

// nc : http://www.cctld.nc/
nc
asso.nc
nom.nc

// ne : https://www.iana.org/domains/root/db/ne.html
ne

// net : https://www.iana.org/domains/root/db/net.html
net

// nf : https://www.iana.org/domains/root/db/nf.html
nf
arts.nf
com.nf
firm.nf
info.nf
net.nf
other.nf
per.nf
rec.nf
store.nf
web.nf

// ng : http://www.nira.org.ng/index.php/join-us/register-ng-domain/189-nira-slds
ng
com.ng
edu.ng
gov.ng
i.ng
mil.ng
mobi.ng
name.ng
net.ng
org.ng
sch.ng

// ni : http://www.nic.ni/
ni
ac.ni
biz.ni
co.ni
com.ni
edu.ni
gob.ni
in.ni
info.ni
int.ni
mil.ni
net.ni
nom.ni
org.ni
web.ni

// nl : https://www.iana.org/domains/root/db/nl.html
// https://www.sidn.nl/
nl

// no : https://www.norid.no/en/om-domenenavn/regelverk-for-no/
// Norid geographical second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-b/
// Norid category second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-c/
// Norid category second-level domains managed by parties other than Norid : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-d/
// RSS feed: https://teknisk.norid.no/en/feed/
no
// Norid category second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-c/
fhs.no
folkebibl.no
fylkesbibl.no
idrett.no
museum.no
priv.no
vgs.no
// Norid category second-level domains managed by parties other than Norid : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-d/
dep.no
herad.no
kommune.no
mil.no
stat.no
// Norid geographical second level domains : https://www.norid.no/en/om-domenenavn/regelverk-for-no/vedlegg-b/
// counties
aa.no
ah.no
bu.no
fm.no
hl.no
hm.no
jan-mayen.no
mr.no
nl.no
nt.no
of.no
ol.no
oslo.no
rl.no
sf.no
st.no
svalbard.no
tm.no
tr.no
va.no
vf.no
// primary and lower secondary schools per county
gs.aa.no
gs.ah.no
gs.bu.no
gs.fm.no
gs.hl.no
gs.hm.no
gs.jan-mayen.no
gs.mr.no
gs.nl.no
gs.nt.no
gs.of.no
gs.ol.no
gs.oslo.no
gs.rl.no
gs.sf.no
gs.st.no
gs.svalbard.no
gs.tm.no
gs.tr.no
gs.va.no
gs.vf.no
// cities
akrehamn.no
åkrehamn.no
algard.no
ålgård.no
arna.no
bronnoysund.no
brønnøysund.no
brumunddal.no
bryne.no
drobak.no
drøbak.no
egersund.no
fetsund.no
floro.no
florø.no
fredrikstad.no
hokksund.no
honefoss.no
hønefoss.no
jessheim.no
jorpeland.no
jørpeland.no
kirkenes.no
kopervik.no
krokstadelva.no
langevag.no
langevåg.no
leirvik.no
mjondalen.no
mjøndalen.no
mo-i-rana.no
mosjoen.no
mosjøen.no
nesoddtangen.no
orkanger.no
osoyro.no
osøyro.no
raholt.no
råholt.no
sandnessjoen.no
sandnessjøen.no
skedsmokorset.no
slattum.no
spjelkavik.no
stathelle.no
stavern.no
stjordalshalsen.no
stjørdalshalsen.no
tananger.no
tranby.no
vossevangen.no
// communities
aarborte.no
aejrie.no
afjord.no
åfjord.no
agdenes.no
nes.akershus.no
aknoluokta.no
ákŋoluokta.no
al.no
ål.no
alaheadju.no
álaheadju.no
alesund.no
ålesund.no
alstahaug.no
alta.no
áltá.no
alvdal.no
amli.no
åmli.no
amot.no
åmot.no
andasuolo.no
andebu.no
andoy.no
andøy.no
ardal.no
årdal.no
aremark.no
arendal.no
ås.no
aseral.no
åseral.no
asker.no
askim.no
askoy.no
askøy.no
askvoll.no
asnes.no
åsnes.no
audnedaln.no
aukra.no
aure.no
aurland.no
aurskog-holand.no
aurskog-høland.no
austevoll.no
austrheim.no
averoy.no
averøy.no
badaddja.no
bådåddjå.no
bærum.no
bahcavuotna.no
báhcavuotna.no
bahccavuotna.no
báhccavuotna.no
baidar.no
báidár.no
bajddar.no
bájddar.no
balat.no
bálát.no
balestrand.no
ballangen.no
balsfjord.no
bamble.no
bardu.no
barum.no
batsfjord.no
båtsfjord.no
bearalvahki.no
bearalváhki.no
beardu.no
beiarn.no
berg.no
bergen.no
berlevag.no
berlevåg.no
bievat.no
bievát.no
bindal.no
birkenes.no
bjarkoy.no
bjarkøy.no
bjerkreim.no
bjugn.no
bodo.no
bodø.no
bokn.no
bomlo.no
bømlo.no
bremanger.no
bronnoy.no
brønnøy.no
budejju.no
nes.buskerud.no
bygland.no
bykle.no
cahcesuolo.no
čáhcesuolo.no
davvenjarga.no
davvenjárga.no
davvesiida.no
deatnu.no
dielddanuorri.no
divtasvuodna.no
divttasvuotna.no
donna.no
dønna.no
dovre.no
drammen.no
drangedal.no
dyroy.no
dyrøy.no
eid.no
eidfjord.no
eidsberg.no
eidskog.no
eidsvoll.no
eigersund.no
elverum.no
enebakk.no
engerdal.no
etne.no
etnedal.no
evenassi.no
evenášši.no
evenes.no
evje-og-hornnes.no
farsund.no
fauske.no
fedje.no
fet.no
finnoy.no
finnøy.no
fitjar.no
fjaler.no
fjell.no
fla.no
flå.no
flakstad.no
flatanger.no
flekkefjord.no
flesberg.no
flora.no
folldal.no
forde.no
førde.no
forsand.no
fosnes.no
fræna.no
frana.no
frei.no
frogn.no
froland.no
frosta.no
froya.no
frøya.no
fuoisku.no
fuossko.no
fusa.no
fyresdal.no
gaivuotna.no
gáivuotna.no
galsa.no
gálsá.no
gamvik.no
gangaviika.no
gáŋgaviika.no
gaular.no
gausdal.no
giehtavuoatna.no
gildeskal.no
gildeskål.no
giske.no
gjemnes.no
gjerdrum.no
gjerstad.no
gjesdal.no
gjovik.no
gjøvik.no
gloppen.no
gol.no
gran.no
grane.no
granvin.no
gratangen.no
grimstad.no
grong.no
grue.no
gulen.no
guovdageaidnu.no
ha.no
hå.no
habmer.no
hábmer.no
hadsel.no
hægebostad.no
hagebostad.no
halden.no
halsa.no
hamar.no
hamaroy.no
hammarfeasta.no
hámmárfeasta.no
hammerfest.no
hapmir.no
hápmir.no
haram.no
hareid.no
harstad.no
hasvik.no
hattfjelldal.no
haugesund.no
os.hedmark.no
valer.hedmark.no
våler.hedmark.no
hemne.no
hemnes.no
hemsedal.no
hitra.no
hjartdal.no
hjelmeland.no
hobol.no
hobøl.no
hof.no
hol.no
hole.no
holmestrand.no
holtalen.no
holtålen.no
os.hordaland.no
hornindal.no
horten.no
hoyanger.no
høyanger.no
hoylandet.no
høylandet.no
hurdal.no
hurum.no
hvaler.no
hyllestad.no
ibestad.no
inderoy.no
inderøy.no
iveland.no
ivgu.no
jevnaker.no
jolster.no
jølster.no
jondal.no
kafjord.no
kåfjord.no
karasjohka.no
kárášjohka.no
karasjok.no
karlsoy.no
karmoy.no
karmøy.no
kautokeino.no
klabu.no
klæbu.no
klepp.no
kongsberg.no
kongsvinger.no
kraanghke.no
kråanghke.no
kragero.no
kragerø.no
kristiansand.no
kristiansund.no
krodsherad.no
krødsherad.no
kvæfjord.no
kvænangen.no
kvafjord.no
kvalsund.no
kvam.no
kvanangen.no
kvinesdal.no
kvinnherad.no
kviteseid.no
kvitsoy.no
kvitsøy.no
laakesvuemie.no
lærdal.no
lahppi.no
láhppi.no
lardal.no
larvik.no
lavagis.no
lavangen.no
leangaviika.no
leaŋgaviika.no
lebesby.no
leikanger.no
leirfjord.no
leka.no
leksvik.no
lenvik.no
lerdal.no
lesja.no
levanger.no
lier.no
lierne.no
lillehammer.no
lillesand.no
lindas.no
lindås.no
lindesnes.no
loabat.no
loabát.no
lodingen.no
lødingen.no
lom.no
loppa.no
lorenskog.no
lørenskog.no
loten.no
løten.no
lund.no
lunner.no
luroy.no
lurøy.no
luster.no
lyngdal.no
lyngen.no
malatvuopmi.no
málatvuopmi.no
malselv.no
målselv.no
malvik.no
mandal.no
marker.no
marnardal.no
masfjorden.no
masoy.no
måsøy.no
matta-varjjat.no
mátta-várjjat.no
meland.no
meldal.no
melhus.no
meloy.no
meløy.no
meraker.no
meråker.no
midsund.no
midtre-gauldal.no
moareke.no
moåreke.no
modalen.no
modum.no
molde.no
heroy.more-og-romsdal.no
sande.more-og-romsdal.no
herøy.møre-og-romsdal.no
sande.møre-og-romsdal.no
moskenes.no
moss.no
mosvik.no
muosat.no
muosát.no
naamesjevuemie.no
nååmesjevuemie.no
nærøy.no
namdalseid.no
namsos.no
namsskogan.no
nannestad.no
naroy.no
narviika.no
narvik.no
naustdal.no
navuotna.no
návuotna.no
nedre-eiker.no
nesna.no
nesodden.no
nesseby.no
nesset.no
nissedal.no
nittedal.no
nord-aurdal.no
nord-fron.no
nord-odal.no
norddal.no
nordkapp.no
bo.nordland.no
bø.nordland.no
heroy.nordland.no
herøy.nordland.no
nordre-land.no
nordreisa.no
nore-og-uvdal.no
notodden.no
notteroy.no
nøtterøy.no
odda.no
oksnes.no
øksnes.no
omasvuotna.no
oppdal.no
oppegard.no
oppegård.no
orkdal.no
orland.no
ørland.no
orskog.no
ørskog.no
orsta.no
ørsta.no
osen.no
osteroy.no
osterøy.no
valer.ostfold.no
våler.østfold.no
ostre-toten.no
østre-toten.no
overhalla.no
ovre-eiker.no
øvre-eiker.no
oyer.no
øyer.no
oygarden.no
øygarden.no
oystre-slidre.no
øystre-slidre.no
porsanger.no
porsangu.no
porsáŋgu.no
porsgrunn.no
rade.no
råde.no
radoy.no
radøy.no
rælingen.no
rahkkeravju.no
ráhkkerávju.no
raisa.no
ráisa.no
rakkestad.no
ralingen.no
rana.no
randaberg.no
rauma.no
rendalen.no
rennebu.no
rennesoy.no
rennesøy.no
rindal.no
ringebu.no
ringerike.no
ringsaker.no
risor.no
risør.no
rissa.no
roan.no
rodoy.no
rødøy.no
rollag.no
romsa.no
romskog.no
rømskog.no
roros.no
røros.no
rost.no
røst.no
royken.no
røyken.no
royrvik.no
røyrvik.no
ruovat.no
rygge.no
salangen.no
salat.no
sálat.no
sálát.no
saltdal.no
samnanger.no
sandefjord.no
sandnes.no
sandoy.no
sandøy.no
sarpsborg.no
sauda.no
sauherad.no
sel.no
selbu.no
selje.no
seljord.no
siellak.no
sigdal.no
siljan.no
sirdal.no
skanit.no
skánit.no
skanland.no
skånland.no
skaun.no
skedsmo.no
ski.no
skien.no
skierva.no
skiervá.no
skiptvet.no
skjak.no
skjåk.no
skjervoy.no
skjervøy.no
skodje.no
smola.no
smøla.no
snaase.no
snåase.no
snasa.no
snåsa.no
snillfjord.no
snoasa.no
sogndal.no
sogne.no
søgne.no
sokndal.no
sola.no
solund.no
somna.no
sømna.no
sondre-land.no
søndre-land.no
songdalen.no
sor-aurdal.no
sør-aurdal.no
sor-fron.no
sør-fron.no
sor-odal.no
sør-odal.no
sor-varanger.no
sør-varanger.no
sorfold.no
sørfold.no
sorreisa.no
sørreisa.no
sortland.no
sorum.no
sørum.no
spydeberg.no
stange.no
stavanger.no
steigen.no
steinkjer.no
stjordal.no
stjørdal.no
stokke.no
stor-elvdal.no
stord.no
stordal.no
storfjord.no
strand.no
stranda.no
stryn.no
sula.no
suldal.no
sund.no
sunndal.no
surnadal.no
sveio.no
svelvik.no
sykkylven.no
tana.no
bo.telemark.no
bø.telemark.no
time.no
tingvoll.no
tinn.no
tjeldsund.no
tjome.no
tjøme.no
tokke.no
tolga.no
tonsberg.no
tønsberg.no
torsken.no
træna.no
trana.no
tranoy.no
tranøy.no
troandin.no
trogstad.no
trøgstad.no
tromsa.no
tromso.no
tromsø.no
trondheim.no
trysil.no
tvedestrand.no
tydal.no
tynset.no
tysfjord.no
tysnes.no
tysvær.no
tysvar.no
ullensaker.no
ullensvang.no
ulvik.no
unjarga.no
unjárga.no
utsira.no
vaapste.no
vadso.no
vadsø.no
værøy.no
vaga.no
vågå.no
vagan.no
vågan.no
vagsoy.no
vågsøy.no
vaksdal.no
valle.no
vang.no
vanylven.no
vardo.no
vardø.no
varggat.no
várggát.no
varoy.no
vefsn.no
vega.no
vegarshei.no
vegårshei.no
vennesla.no
verdal.no
verran.no
vestby.no
sande.vestfold.no
vestnes.no
vestre-slidre.no
vestre-toten.no
vestvagoy.no
vestvågøy.no
vevelstad.no
vik.no
vikna.no
vindafjord.no
voagat.no
volda.no
voss.no

// np : http://www.mos.com.np/register.html
*.np

// nr : http://cenpac.net.nr/dns/index.html
// Submitted by registry <technician@cenpac.net.nr>
nr
biz.nr
com.nr
edu.nr
gov.nr
info.nr
net.nr
org.nr

// nu : https://www.iana.org/domains/root/db/nu.html
nu

// nz : https://www.iana.org/domains/root/db/nz.html
// Submitted by registry <jay@nzrs.net.nz>
nz
ac.nz
co.nz
cri.nz
geek.nz
gen.nz
govt.nz
health.nz
iwi.nz
kiwi.nz
maori.nz
māori.nz
mil.nz
net.nz
org.nz
parliament.nz
school.nz

// om : https://www.iana.org/domains/root/db/om.html
om
co.om
com.om
edu.om
gov.om
med.om
museum.om
net.om
org.om
pro.om

// onion : https://tools.ietf.org/html/rfc7686
onion

// org : https://www.iana.org/domains/root/db/org.html
org

// pa : http://www.nic.pa/
// Some additional second level "domains" resolve directly as hostnames, such as
// pannet.pa, so we add a rule for "pa".
pa
abo.pa
ac.pa
com.pa
edu.pa
gob.pa
ing.pa
med.pa
net.pa
nom.pa
org.pa
sld.pa

// pe : https://www.nic.pe/InformeFinalComision.pdf
pe
com.pe
edu.pe
gob.pe
mil.pe
net.pe
nom.pe
org.pe

// pf : http://www.gobin.info/domainname/formulaire-pf.pdf
pf
com.pf
edu.pf
org.pf

// pg : https://www.iana.org/domains/root/db/pg.html
*.pg

// ph : https://www.iana.org/domains/root/db/ph.html
// Submitted by registry <jed@email.com.ph>
ph
com.ph
edu.ph
gov.ph
i.ph
mil.ph
net.ph
ngo.ph
org.ph

// pk : https://pk5.pknic.net.pk/pk5/msgNamepk.PK
// Contact Email: staff@pknic.net.pk
pk
ac.pk
biz.pk
com.pk
edu.pk
fam.pk
gkp.pk
gob.pk
gog.pk
gok.pk
gop.pk
gos.pk
gov.pk
net.pk
org.pk
web.pk

// pl : https://www.dns.pl/en/
// Confirmed by registry <info@dns.pl> 2024-11-18
pl
com.pl
net.pl
org.pl
// pl functional domains : https://www.dns.pl/en/list_of_functional_domain_names
agro.pl
aid.pl
atm.pl
auto.pl
biz.pl
edu.pl
gmina.pl
gsm.pl
info.pl
mail.pl
media.pl
miasta.pl
mil.pl
nieruchomosci.pl
nom.pl
pc.pl
powiat.pl
priv.pl
realestate.pl
rel.pl
sex.pl
shop.pl
sklep.pl
sos.pl
szkola.pl
targi.pl
tm.pl
tourism.pl
travel.pl
turystyka.pl
// Government domains : https://www.dns.pl/informacje_o_rejestracji_domen_gov_pl
// In accordance with the .gov.pl Domain Name Regulations : https://www.dns.pl/regulamin_gov_pl
gov.pl
ap.gov.pl
griw.gov.pl
ic.gov.pl
is.gov.pl
kmpsp.gov.pl
konsulat.gov.pl
kppsp.gov.pl
kwp.gov.pl
kwpsp.gov.pl
mup.gov.pl
mw.gov.pl
oia.gov.pl
oirm.gov.pl
oke.gov.pl
oow.gov.pl
oschr.gov.pl
oum.gov.pl
pa.gov.pl
pinb.gov.pl
piw.gov.pl
po.gov.pl
pr.gov.pl
psp.gov.pl
psse.gov.pl
pup.gov.pl
rzgw.gov.pl
sa.gov.pl
sdn.gov.pl
sko.gov.pl
so.gov.pl
sr.gov.pl
starostwo.gov.pl
ug.gov.pl
ugim.gov.pl
um.gov.pl
umig.gov.pl
upow.gov.pl
uppo.gov.pl
us.gov.pl
uw.gov.pl
uzs.gov.pl
wif.gov.pl
wiih.gov.pl
winb.gov.pl
wios.gov.pl
witd.gov.pl
wiw.gov.pl
wkz.gov.pl
wsa.gov.pl
wskr.gov.pl
wsse.gov.pl
wuoz.gov.pl
wzmiuw.gov.pl
zp.gov.pl
zpisdn.gov.pl
// pl regional domains : https://www.dns.pl/en/list_of_regional_domain_names
augustow.pl
babia-gora.pl
bedzin.pl
beskidy.pl
bialowieza.pl
bialystok.pl
bielawa.pl
bieszczady.pl
boleslawiec.pl
bydgoszcz.pl
bytom.pl
cieszyn.pl
czeladz.pl
czest.pl
dlugoleka.pl
elblag.pl
elk.pl
glogow.pl
gniezno.pl
gorlice.pl
grajewo.pl
ilawa.pl
jaworzno.pl
jelenia-gora.pl
jgora.pl
kalisz.pl
karpacz.pl
kartuzy.pl
kaszuby.pl
katowice.pl
kazimierz-dolny.pl
kepno.pl
ketrzyn.pl
klodzko.pl
kobierzyce.pl
kolobrzeg.pl
konin.pl
konskowola.pl
kutno.pl
lapy.pl
lebork.pl
legnica.pl
lezajsk.pl
limanowa.pl
lomza.pl
lowicz.pl
lubin.pl
lukow.pl
malbork.pl
malopolska.pl
mazowsze.pl
mazury.pl
mielec.pl
mielno.pl
mragowo.pl
naklo.pl
nowaruda.pl
nysa.pl
olawa.pl
olecko.pl
olkusz.pl
olsztyn.pl
opoczno.pl
opole.pl
ostroda.pl
ostroleka.pl
ostrowiec.pl
ostrowwlkp.pl
pila.pl
pisz.pl
podhale.pl
podlasie.pl
polkowice.pl
pomorskie.pl
pomorze.pl
prochowice.pl
pruszkow.pl
przeworsk.pl
pulawy.pl
radom.pl
rawa-maz.pl
rybnik.pl
rzeszow.pl
sanok.pl
sejny.pl
skoczow.pl
slask.pl
slupsk.pl
sosnowiec.pl
stalowa-wola.pl
starachowice.pl
stargard.pl
suwalki.pl
swidnica.pl
swiebodzin.pl
swinoujscie.pl
szczecin.pl
szczytno.pl
tarnobrzeg.pl
tgory.pl
turek.pl
tychy.pl
ustka.pl
walbrzych.pl
warmia.pl
warszawa.pl
waw.pl
wegrow.pl
wielun.pl
wlocl.pl
wloclawek.pl
wodzislaw.pl
wolomin.pl
wroclaw.pl
zachpomor.pl
zagan.pl
zarow.pl
zgora.pl
zgorzelec.pl

// pm : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
pm

// pn : https://www.iana.org/domains/root/db/pn.html
pn
co.pn
edu.pn
gov.pn
net.pn
org.pn

// post : https://www.iana.org/domains/root/db/post.html
post

// pr : http://www.nic.pr/index.asp?f=1
pr
biz.pr
com.pr
edu.pr
gov.pr
info.pr
isla.pr
name.pr
net.pr
org.pr
pro.pr
// these aren't mentioned on nic.pr, but on https://www.iana.org/domains/root/db/pr.html
ac.pr
est.pr
prof.pr

// pro : http://registry.pro/get-pro
pro
aaa.pro
aca.pro
acct.pro
avocat.pro
bar.pro
cpa.pro
eng.pro
jur.pro
law.pro
med.pro
recht.pro

// ps : https://www.iana.org/domains/root/db/ps.html
// http://www.nic.ps/registration/policy.html#reg
ps
com.ps
edu.ps
gov.ps
net.ps
org.ps
plo.ps
sec.ps

// pt : https://www.dns.pt/en/domain/pt-terms-and-conditions-registration-rules/
pt
com.pt
edu.pt
gov.pt
int.pt
net.pt
nome.pt
org.pt
publ.pt

// pw : https://www.iana.org/domains/root/db/pw.html
// Confirmed by registry in private correspondence with @dnsguru 2024-12-09
pw
gov.pw

// py : https://www.iana.org/domains/root/db/py.html
// Submitted by registry
py
com.py
coop.py
edu.py
gov.py
mil.py
net.py
org.py

// qa : http://domains.qa/en/
qa
com.qa
edu.qa
gov.qa
mil.qa
name.qa
net.qa
org.qa
sch.qa

// re : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
// Confirmed by registry <support@afnic.fr> 2024-11-18
re
// Closed for registration on 2013-03-15 but domains are still maintained
asso.re
com.re

// ro : http://www.rotld.ro/
ro
arts.ro
com.ro
firm.ro
info.ro
nom.ro
nt.ro
org.ro
rec.ro
store.ro
tm.ro
www.ro

// rs : https://www.rnids.rs/en/domains/national-domains
rs
ac.rs
co.rs
edu.rs
gov.rs
in.rs
org.rs

// ru : https://cctld.ru/files/pdf/docs/en/rules_ru-rf.pdf
// Submitted by George Georgievsky <gug@cctld.ru>
ru

// rw : https://www.iana.org/domains/root/db/rw.html
rw
ac.rw
co.rw
coop.rw
gov.rw
mil.rw
net.rw
org.rw

// sa : http://www.nic.net.sa/
sa
com.sa
edu.sa
gov.sa
med.sa
net.sa
org.sa
pub.sa
sch.sa

// sb : http://www.sbnic.net.sb/
// Submitted by registry <lee.humphries@telekom.com.sb>
sb
com.sb
edu.sb
gov.sb
net.sb
org.sb

// sc : http://www.nic.sc/
sc
com.sc
edu.sc
gov.sc
net.sc
org.sc

// sd : https://www.iana.org/domains/root/db/sd.html
// Submitted by registry <admin@isoc.sd>
sd
com.sd
edu.sd
gov.sd
info.sd
med.sd
net.sd
org.sd
tv.sd

// se : https://www.iana.org/domains/root/db/se.html
// https://data.internetstiftelsen.se/barred_domains_list.txt -> Second level domains & Sub-domains
// Confirmed by Registry Services <registry@internetstiftelsen.se> 2024-11-20
se
a.se
ac.se
b.se
bd.se
brand.se
c.se
d.se
e.se
f.se
fh.se
fhsk.se
fhv.se
g.se
h.se
i.se
k.se
komforb.se
kommunalforbund.se
komvux.se
l.se
lanbib.se
m.se
n.se
naturbruksgymn.se
o.se
org.se
p.se
parti.se
pp.se
press.se
r.se
s.se
t.se
tm.se
u.se
w.se
x.se
y.se
z.se

// sg : https://www.sgnic.sg/domain-registration/sg-categories-rules
// Confirmed by registry <dnq@sgnic.sg> 2024-11-19
sg
com.sg
edu.sg
gov.sg
net.sg
org.sg

// sh : http://nic.sh/rules.htm
sh
com.sh
gov.sh
mil.sh
net.sh
org.sh

// si : https://www.iana.org/domains/root/db/si.html
si

// sj : No registrations at this time.
// Submitted by registry <jarle@uninett.no>
sj

// sk : https://www.iana.org/domains/root/db/sk.html
sk

// sl : http://www.nic.sl
// Submitted by registry <adam@neoip.com>
sl
com.sl
edu.sl
gov.sl
net.sl
org.sl

// sm : https://www.iana.org/domains/root/db/sm.html
sm

// sn : https://www.iana.org/domains/root/db/sn.html
sn
art.sn
com.sn
edu.sn
gouv.sn
org.sn
perso.sn
univ.sn

// so : http://sonic.so/policies/
so
com.so
edu.so
gov.so
me.so
net.so
org.so

// sr : https://www.iana.org/domains/root/db/sr.html
sr

// ss : https://registry.nic.ss/
// Submitted by registry <technical@nic.ss>
ss
biz.ss
co.ss
com.ss
edu.ss
gov.ss
me.ss
net.ss
org.ss
sch.ss

// st : http://www.nic.st/html/policyrules/
st
co.st
com.st
consulado.st
edu.st
embaixada.st
mil.st
net.st
org.st
principe.st
saotome.st
store.st

// su : https://www.iana.org/domains/root/db/su.html
su

// sv : https://www.iana.org/domains/root/db/sv.html
sv
com.sv
edu.sv
gob.sv
org.sv
red.sv

// sx : https://www.iana.org/domains/root/db/sx.html
// Submitted by registry <jcvignes@openregistry.com>
sx
gov.sx

// sy : https://www.iana.org/domains/root/db/sy.html
sy
com.sy
edu.sy
gov.sy
mil.sy
net.sy
org.sy

// sz : https://www.iana.org/domains/root/db/sz.html
// http://www.sispa.org.sz/
sz
ac.sz
co.sz
org.sz

// tc : https://www.iana.org/domains/root/db/tc.html
tc

// td : https://www.iana.org/domains/root/db/td.html
td

// tel : https://www.iana.org/domains/root/db/tel.html
// http://www.telnic.org/
tel

// tf : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
tf

// tg : https://www.iana.org/domains/root/db/tg.html
// http://www.nic.tg/
tg

// th : https://www.iana.org/domains/root/db/th.html
// Submitted by registry <krit@thains.co.th>
th
ac.th
co.th
go.th
in.th
mi.th
net.th
or.th

// tj : http://www.nic.tj/policy.html
tj
ac.tj
biz.tj
co.tj
com.tj
edu.tj
go.tj
gov.tj
int.tj
mil.tj
name.tj
net.tj
nic.tj
org.tj
test.tj
web.tj

// tk : https://www.iana.org/domains/root/db/tk.html
tk

// tl : https://www.iana.org/domains/root/db/tl.html
tl
gov.tl

// tm : https://www.nic.tm/local.html
// Confirmed by registry <admin@nic.TM> 2024-11-19
tm
co.tm
com.tm
edu.tm
gov.tm
mil.tm
net.tm
nom.tm
org.tm

// tn : http://www.registre.tn/fr/
// https://whois.ati.tn/
tn
com.tn
ens.tn
fin.tn
gov.tn
ind.tn
info.tn
intl.tn
mincom.tn
nat.tn
net.tn
org.tn
perso.tn
tourism.tn

// to : https://www.iana.org/domains/root/db/to.html
// Submitted by registry <egullich@colo.to>
to
com.to
edu.to
gov.to
mil.to
net.to
org.to

// tr : https://nic.tr/
// https://nic.tr/forms/eng/policies.pdf
// https://nic.tr/index.php?USRACTN=PRICELST
tr
av.tr
bbs.tr
bel.tr
biz.tr
com.tr
dr.tr
edu.tr
gen.tr
gov.tr
info.tr
k12.tr
kep.tr
mil.tr
name.tr
net.tr
org.tr
pol.tr
tel.tr
tsk.tr
tv.tr
web.tr
// Used by Northern Cyprus
nc.tr
// Used by government agencies of Northern Cyprus
gov.nc.tr

// tt : https://www.nic.tt/
// Confirmed by registry <admin@nic.tt> 2024-11-19
tt
biz.tt
co.tt
com.tt
edu.tt
gov.tt
info.tt
mil.tt
name.tt
net.tt
org.tt
pro.tt

// tv : https://www.iana.org/domains/root/db/tv.html
// Not listing any 2LDs as reserved since none seem to exist in practice,
// Wikipedia notwithstanding.
tv

// tw : https://www.iana.org/domains/root/db/tw.html
// https://twnic.tw/dnservice_catag.php
// Confirmed by registry <dns@twnic.tw> 2024-11-26
tw
club.tw
com.tw
ebiz.tw
edu.tw
game.tw
gov.tw
idv.tw
mil.tw
net.tw
org.tw

// tz : http://www.tznic.or.tz/index.php/domains
// Submitted by registry <manager@tznic.or.tz>
tz
ac.tz
co.tz
go.tz
hotel.tz
info.tz
me.tz
mil.tz
mobi.tz
ne.tz
or.tz
sc.tz
tv.tz

// ua : https://hostmaster.ua/policy/?ua
// Submitted by registry <dk@cctld.ua>
ua
// ua 2LD
com.ua
edu.ua
gov.ua
in.ua
net.ua
org.ua
// ua geographic names
// https://hostmaster.ua/2ld/
cherkassy.ua
cherkasy.ua
chernigov.ua
chernihiv.ua
chernivtsi.ua
chernovtsy.ua
ck.ua
cn.ua
cr.ua
crimea.ua
cv.ua
dn.ua
dnepropetrovsk.ua
dnipropetrovsk.ua
donetsk.ua
dp.ua
if.ua
ivano-frankivsk.ua
kh.ua
kharkiv.ua
kharkov.ua
kherson.ua
khmelnitskiy.ua
khmelnytskyi.ua
kiev.ua
kirovograd.ua
km.ua
kr.ua
kropyvnytskyi.ua
krym.ua
ks.ua
kv.ua
kyiv.ua
lg.ua
lt.ua
lugansk.ua
luhansk.ua
lutsk.ua
lv.ua
lviv.ua
mk.ua
mykolaiv.ua
nikolaev.ua
od.ua
odesa.ua
odessa.ua
pl.ua
poltava.ua
rivne.ua
rovno.ua
rv.ua
sb.ua
sebastopol.ua
sevastopol.ua
sm.ua
sumy.ua
te.ua
ternopil.ua
uz.ua
uzhgorod.ua
uzhhorod.ua
vinnica.ua
vinnytsia.ua
vn.ua
volyn.ua
yalta.ua
zakarpattia.ua
zaporizhzhe.ua
zaporizhzhia.ua
zhitomir.ua
zhytomyr.ua
zp.ua
zt.ua

// ug : https://www.registry.co.ug/
// https://www.registry.co.ug, https://whois.co.ug
// Confirmed by registry <support@i3c.co.ug> 2025-01-20
ug
ac.ug
co.ug
com.ug
edu.ug
go.ug
gov.ug
mil.ug
ne.ug
or.ug
org.ug
sc.ug
us.ug

// uk : https://www.iana.org/domains/root/db/uk.html
// Submitted by registry <Michael.Daly@nominet.org.uk>
uk
ac.uk
co.uk
gov.uk
ltd.uk
me.uk
net.uk
nhs.uk
org.uk
plc.uk
police.uk
*.sch.uk

// us : https://www.iana.org/domains/root/db/us.html
// Confirmed via the .us zone file by William Harrison 2024-12-10
us
dni.us
isa.us
nsn.us
// Geographic Names
ak.us
al.us
ar.us
as.us
az.us
ca.us
co.us
ct.us
dc.us
de.us
fl.us
ga.us
gu.us
hi.us
ia.us
id.us
il.us
in.us
ks.us
ky.us
la.us
ma.us
md.us
me.us
mi.us
mn.us
mo.us
ms.us
mt.us
nc.us
nd.us
ne.us
nh.us
nj.us
nm.us
nv.us
ny.us
oh.us
ok.us
or.us
pa.us
pr.us
ri.us
sc.us
sd.us
tn.us
tx.us
ut.us
va.us
vi.us
vt.us
wa.us
wi.us
wv.us
wy.us
// The registrar notes several more specific domains available in each state,
// such as state.*.us, dst.*.us, etc., but resolution of these is somewhat
// haphazard; in some states these domains resolve as addresses, while in others
// only subdomains are available, or even nothing at all. We include the
// most common ones where it's clear that different sites are different
// entities.
k12.ak.us
k12.al.us
k12.ar.us
k12.as.us
k12.az.us
k12.ca.us
k12.co.us
k12.ct.us
k12.dc.us
k12.fl.us
k12.ga.us
k12.gu.us
// k12.hi.us - Bug 614565 - Hawaii has a state-wide DOE login
k12.ia.us
k12.id.us
k12.il.us
k12.in.us
k12.ks.us
k12.ky.us
k12.la.us
k12.ma.us
k12.md.us
k12.me.us
k12.mi.us
k12.mn.us
k12.mo.us
k12.ms.us
k12.mt.us
k12.nc.us
// k12.nd.us - Bug 1028347 - Removed at request of Travis Rosso <trossow@nd.gov>
k12.ne.us
k12.nh.us
k12.nj.us
k12.nm.us
k12.nv.us
k12.ny.us
k12.oh.us
k12.ok.us
k12.or.us
k12.pa.us
k12.pr.us
// k12.ri.us - Removed at request of Kim Cournoyer <netsupport@staff.ri.net>
k12.sc.us
// k12.sd.us - Bug 934131 - Removed at request of James Booze <James.Booze@k12.sd.us>
k12.tn.us
k12.tx.us
k12.ut.us
k12.va.us
k12.vi.us
k12.vt.us
k12.wa.us
k12.wi.us
// k12.wv.us - Bug 947705 - Removed at request of Verne Britton <verne@wvnet.edu>
cc.ak.us
lib.ak.us
cc.al.us
lib.al.us
cc.ar.us
lib.ar.us
cc.as.us
lib.as.us
cc.az.us
lib.az.us
cc.ca.us
lib.ca.us
cc.co.us
lib.co.us
cc.ct.us
lib.ct.us
cc.dc.us
lib.dc.us
cc.de.us
cc.fl.us
lib.fl.us
cc.ga.us
lib.ga.us
cc.gu.us
lib.gu.us
cc.hi.us
lib.hi.us
cc.ia.us
lib.ia.us
cc.id.us
lib.id.us
cc.il.us
lib.il.us
cc.in.us
lib.in.us
cc.ks.us
lib.ks.us
cc.ky.us
lib.ky.us
cc.la.us
lib.la.us
cc.ma.us
lib.ma.us
cc.md.us
lib.md.us
cc.me.us
lib.me.us
cc.mi.us
lib.mi.us
cc.mn.us
lib.mn.us
cc.mo.us
lib.mo.us
cc.ms.us
cc.mt.us
lib.mt.us
cc.nc.us
lib.nc.us
cc.nd.us
lib.nd.us
cc.ne.us
lib.ne.us
cc.nh.us
lib.nh.us
cc.nj.us
lib.nj.us
cc.nm.us
lib.nm.us
cc.nv.us
lib.nv.us
cc.ny.us
lib.ny.us
cc.oh.us
lib.oh.us
cc.ok.us
lib.ok.us
cc.or.us
lib.or.us
cc.pa.us
lib.pa.us
cc.pr.us
lib.pr.us
cc.ri.us
lib.ri.us
cc.sc.us
lib.sc.us
cc.sd.us
lib.sd.us
cc.tn.us
lib.tn.us
cc.tx.us
lib.tx.us
cc.ut.us
lib.ut.us
cc.va.us
lib.va.us
cc.vi.us
lib.vi.us
cc.vt.us
lib.vt.us
cc.wa.us
lib.wa.us
cc.wi.us
lib.wi.us
cc.wv.us
cc.wy.us
k12.wy.us
// lib.wv.us - Bug 941670 - Removed at request of Larry W Arnold <arnold@wvlc.lib.wv.us>
lib.wy.us
// k12.ma.us contains school districts in Massachusetts. The 4LDs are
// managed independently except for private (PVT), charter (CHTR) and
// parochial (PAROCH) schools. Those are delegated directly to the
// 5LD operators. <k12-ma-hostmaster@rsuc.gweep.net>
chtr.k12.ma.us
paroch.k12.ma.us
pvt.k12.ma.us
// Merit Network, Inc. maintains the registry for =~ /(k12|cc|lib).mi.us/ and the following
// see also: https://domreg.merit.edu : domreg@merit.edu
// see also: whois -h whois.domreg.merit.edu help
ann-arbor.mi.us
cog.mi.us
dst.mi.us
eaton.mi.us
gen.mi.us
mus.mi.us
tec.mi.us
washtenaw.mi.us

// uy : http://www.nic.org.uy/
uy
com.uy
edu.uy
gub.uy
mil.uy
net.uy
org.uy

// uz : http://www.reg.uz/
uz
co.uz
com.uz
net.uz
org.uz

// va : https://www.iana.org/domains/root/db/va.html
va

// vc : https://www.iana.org/domains/root/db/vc.html
// Submitted by registry <kshah@ca.afilias.info>
vc
com.vc
edu.vc
gov.vc
mil.vc
net.vc
org.vc

// ve : https://registro.nic.ve/
// Submitted by registry nic@nic.ve and nicve@conatel.gob.ve
ve
arts.ve
bib.ve
co.ve
com.ve
e12.ve
edu.ve
emprende.ve
firm.ve
gob.ve
gov.ve
info.ve
int.ve
mil.ve
net.ve
nom.ve
org.ve
rar.ve
rec.ve
store.ve
tec.ve
web.ve

// vg : https://www.iana.org/domains/root/db/vg.html
// Confirmed by registry <tld.ops@centralnic.com> 2025-01-10
vg
edu.vg

// vi : https://www.iana.org/domains/root/db/vi.html
vi
co.vi
com.vi
k12.vi
net.vi
org.vi

// vn : https://www.vnnic.vn/en/domain/cctld-vn
// https://vnnic.vn/sites/default/files/tailieu/vn.cctld.domains.txt
vn
ac.vn
ai.vn
biz.vn
com.vn
edu.vn
gov.vn
health.vn
id.vn
info.vn
int.vn
io.vn
name.vn
net.vn
org.vn
pro.vn

// vn geographical names
angiang.vn
bacgiang.vn
backan.vn
baclieu.vn
bacninh.vn
baria-vungtau.vn
bentre.vn
binhdinh.vn
binhduong.vn
binhphuoc.vn
binhthuan.vn
camau.vn
cantho.vn
caobang.vn
daklak.vn
daknong.vn
danang.vn
dienbien.vn
dongnai.vn
dongthap.vn
gialai.vn
hagiang.vn
haiduong.vn
haiphong.vn
hanam.vn
hanoi.vn
hatinh.vn
haugiang.vn
hoabinh.vn
hungyen.vn
khanhhoa.vn
kiengiang.vn
kontum.vn
laichau.vn
lamdong.vn
langson.vn
laocai.vn
longan.vn
namdinh.vn
nghean.vn
ninhbinh.vn
ninhthuan.vn
phutho.vn
phuyen.vn
quangbinh.vn
quangnam.vn
quangngai.vn
quangninh.vn
quangtri.vn
soctrang.vn
sonla.vn
tayninh.vn
thaibinh.vn
thainguyen.vn
thanhhoa.vn
thanhphohochiminh.vn
thuathienhue.vn
tiengiang.vn
travinh.vn
tuyenquang.vn
vinhlong.vn
vinhphuc.vn
yenbai.vn

// vu : https://www.iana.org/domains/root/db/vu.html
// http://www.vunic.vu/
vu
com.vu
edu.vu
net.vu
org.vu

// wf : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
wf

// ws : https://www.iana.org/domains/root/db/ws.html
// http://samoanic.ws/index.dhtml
ws
com.ws
edu.ws
gov.ws
net.ws
org.ws

// yt : https://www.afnic.fr/wp-media/uploads/2022/12/afnic-naming-policy-2023-01-01.pdf
yt

// IDN ccTLDs
// When submitting patches, please maintain a sort by ISO 3166 ccTLD, then
// U-label, and follow this format:
// // A-Label ("<Latin renderings>", <language name>[, variant info]) : <ISO 3166 ccTLD>
// // [sponsoring org]
// U-Label

// xn--mgbaam7a8h ("Emerat", Arabic) : AE
// http://nic.ae/english/arabicdomain/rules.jsp
امارات

// xn--y9a3aq ("hye", Armenian) : AM
// ISOC AM (operated by .am Registry)
հայ

// xn--54b7fta0cc ("Bangla", Bangla) : BD
বাংলা

// xn--90ae ("bg", Bulgarian) : BG
бг

// xn--mgbcpq6gpa1a ("albahrain", Arabic) : BH
البحرين

// xn--90ais ("bel", Belarusian/Russian Cyrillic) : BY
// Operated by .by registry
бел

// xn--fiqs8s ("Zhongguo/China", Chinese, Simplified) : CN
// CNNIC
// https://www.cnnic.cn/11/192/index.html
中国

// xn--fiqz9s ("Zhongguo/China", Chinese, Traditional) : CN
// CNNIC
// https://www.cnnic.com.cn/AU/MediaC/Announcement/201609/t20160905_54470.htm
中國

// xn--lgbbat1ad8j ("Algeria/Al Jazair", Arabic) : DZ
الجزائر

// xn--wgbh1c ("Egypt/Masr", Arabic) : EG
// http://www.dotmasr.eg/
مصر

// xn--e1a4c ("eu", Cyrillic) : EU
// https://eurid.eu
ею

// xn--qxa6a ("eu", Greek) : EU
// https://eurid.eu
ευ

// xn--mgbah1a3hjkrd ("Mauritania", Arabic) : MR
موريتانيا

// xn--node ("ge", Georgian Mkhedruli) : GE
გე

// xn--qxam ("el", Greek) : GR
// Hellenic Ministry of Infrastructure, Transport, and Networks
ελ

// xn--j6w193g ("Hong Kong", Chinese) : HK
// https://www.hkirc.hk
// Submitted by registry <hk.tech@hkirc.hk>
// https://www.hkirc.hk/content.jsp?id=30#!/34
香港
個人.香港
公司.香港
政府.香港
教育.香港
組織.香港
網絡.香港

// xn--2scrj9c ("Bharat", Kannada) : IN
// India
ಭಾರತ

// xn--3hcrj9c ("Bharat", Oriya) : IN
// India
ଭାରତ

// xn--45br5cyl ("Bharatam", Assamese) : IN
// India
ভাৰত

// xn--h2breg3eve ("Bharatam", Sanskrit) : IN
// India
भारतम्

// xn--h2brj9c8c ("Bharot", Santali) : IN
// India
भारोत

// xn--mgbgu82a ("Bharat", Sindhi) : IN
// India
ڀارت

// xn--rvc1e0am3e ("Bharatam", Malayalam) : IN
// India
ഭാരതം

// xn--h2brj9c ("Bharat", Devanagari) : IN
// India
भारत

// xn--mgbbh1a ("Bharat", Kashmiri) : IN
// India
بارت

// xn--mgbbh1a71e ("Bharat", Arabic) : IN
// India
بھارت

// xn--fpcrj9c3d ("Bharat", Telugu) : IN
// India
భారత్

// xn--gecrj9c ("Bharat", Gujarati) : IN
// India
ભારત

// xn--s9brj9c ("Bharat", Gurmukhi) : IN
// India
ਭਾਰਤ

// xn--45brj9c ("Bharat", Bengali) : IN
// India
ভারত

// xn--xkc2dl3a5ee0h ("India", Tamil) : IN
// India
இந்தியா

// xn--mgba3a4f16a ("Iran", Persian) : IR
ایران

// xn--mgba3a4fra ("Iran", Arabic) : IR
ايران

// xn--mgbtx2b ("Iraq", Arabic) : IQ
// Communications and Media Commission
عراق

// xn--mgbayh7gpa ("al-Ordon", Arabic) : JO
// National Information Technology Center (NITC)
// Royal Scientific Society, Al-Jubeiha
الاردن

// xn--3e0b707e ("Republic of Korea", Hangul) : KR
한국

// xn--80ao21a ("Kaz", Kazakh) : KZ
қаз

// xn--q7ce6a ("Lao", Lao) : LA
ລາວ

// xn--fzc2c9e2c ("Lanka", Sinhalese-Sinhala) : LK
// https://nic.lk
ලංකා

// xn--xkc2al3hye2a ("Ilangai", Tamil) : LK
// https://nic.lk
இலங்கை

// xn--mgbc0a9azcg ("Morocco/al-Maghrib", Arabic) : MA
المغرب

// xn--d1alf ("mkd", Macedonian) : MK
// MARnet
мкд

// xn--l1acc ("mon", Mongolian) : MN
мон

// xn--mix891f ("Macao", Chinese, Traditional) : MO
// MONIC / HNET Asia (Registry Operator for .mo)
澳門

// xn--mix082f ("Macao", Chinese, Simplified) : MO
澳门

// xn--mgbx4cd0ab ("Malaysia", Malay) : MY
مليسيا

// xn--mgb9awbf ("Oman", Arabic) : OM
عمان

// xn--mgbai9azgqp6j ("Pakistan", Urdu/Arabic) : PK
پاکستان

// xn--mgbai9a5eva00b ("Pakistan", Urdu/Arabic, variant) : PK
پاكستان

// xn--ygbi2ammx ("Falasteen", Arabic) : PS
// The Palestinian National Internet Naming Authority (PNINA)
// http://www.pnina.ps
فلسطين

// xn--90a3ac ("srb", Cyrillic) : RS
// https://www.rnids.rs/en/domains/national-domains
срб
ак.срб
обр.срб
од.срб
орг.срб
пр.срб
упр.срб

// xn--p1ai ("rf", Russian-Cyrillic) : RU
// https://cctld.ru/files/pdf/docs/en/rules_ru-rf.pdf
// Submitted by George Georgievsky <gug@cctld.ru>
рф

// xn--wgbl6a ("Qatar", Arabic) : QA
// http://www.ict.gov.qa/
قطر

// xn--mgberp4a5d4ar ("AlSaudiah", Arabic) : SA
// http://www.nic.net.sa/
السعودية

// xn--mgberp4a5d4a87g ("AlSaudiah", Arabic, variant): SA
السعودیة

// xn--mgbqly7c0a67fbc ("AlSaudiah", Arabic, variant) : SA
السعودیۃ

// xn--mgbqly7cvafr ("AlSaudiah", Arabic, variant) : SA
السعوديه

// xn--mgbpl2fh ("sudan", Arabic) : SD
// Operated by .sd registry
سودان

// xn--yfro4i67o Singapore ("Singapore", Chinese) : SG
新加坡

// xn--clchc0ea0b2g2a9gcd ("Singapore", Tamil) : SG
சிங்கப்பூர்

// xn--ogbpf8fl ("Syria", Arabic) : SY
سورية

// xn--mgbtf8fl ("Syria", Arabic, variant) : SY
سوريا

// xn--o3cw4h ("Thai", Thai) : TH
// http://www.thnic.co.th
ไทย
ทหาร.ไทย
ธุรกิจ.ไทย
เน็ต.ไทย
รัฐบาล.ไทย
ศึกษา.ไทย
องค์กร.ไทย

// xn--pgbs0dh ("Tunisia", Arabic) : TN
// http://nic.tn
تونس

// xn--kpry57d ("Taiwan", Chinese, Traditional) : TW
// https://twnic.tw/dnservice_catag.php
台灣

// xn--kprw13d ("Taiwan", Chinese, Simplified) : TW
// http://www.twnic.net/english/dn/dn_07a.htm
台湾

// xn--nnx388a ("Taiwan", Chinese, variant) : TW
臺灣

// xn--j1amh ("ukr", Cyrillic) : UA
укр

// xn--mgb2ddes ("AlYemen", Arabic) : YE
اليمن

// xxx : http://icmregistry.com
xxx

// ye : http://www.y.net.ye/services/domain_name.htm
ye
com.ye
edu.ye
gov.ye
mil.ye
net.ye
org.ye

// za : https://www.iana.org/domains/root/db/za.html
ac.za
agric.za
alt.za
co.za
edu.za
gov.za
grondar.za
law.za
mil.za
net.za
ngo.za
nic.za
nis.za
nom.za
org.za
school.za
tm.za
web.za

// zm : https://zicta.zm/
// Submitted by registry <info@zicta.zm>
zm
ac.zm
biz.zm
co.zm
com.zm
edu.zm
gov.zm
info.zm
mil.zm
net.zm
org.zm
sch.zm

// zw : https://www.potraz.gov.zw/
// Confirmed by registry <bmtengwa@potraz.gov.zw> 2017-01-25
zw
ac.zw
co.zw
gov.zw
mil.zw
org.zw

// newGTLDs

// List of new gTLDs imported from https://www.icann.org/resources/registries/gtlds/v2/gtlds.json on 2025-10-01T15:18:26Z
// This list is auto-generated, don't edit it manually.
// aaa : American Automobile Association, Inc.
// https://www.iana.org/domains/root/db/aaa.html
aaa

// aarp : AARP
// https://www.iana.org/domains/root/db/aarp.html
aarp

// abb : ABB Ltd
// https://www.iana.org/domains/root/db/abb.html
abb

// abbott : Abbott Laboratories, Inc.
// https://www.iana.org/domains/root/db/abbott.html
abbott

// abbvie : AbbVie Inc.
// https://www.iana.org/domains/root/db/abbvie.html
abbvie

// abc : Disney Enterprises, Inc.
// https://www.iana.org/domains/root/db/abc.html
abc

// able : Able Inc.
// https://www.iana.org/domains/root/db/able.html
able

// abogado : Registry Services, LLC
// https://www.iana.org/domains/root/db/abogado.html
abogado

// abudhabi : Abu Dhabi Systems and Information Centre
// https://www.iana.org/domains/root/db/abudhabi.html
abudhabi

// academy : Binky Moon, LLC
// https://www.iana.org/domains/root/db/academy.html
academy

// accenture : Accenture plc
// https://www.iana.org/domains/root/db/accenture.html
accenture

// accountant : dot Accountant Limited
// https://www.iana.org/domains/root/db/accountant.html
accountant

// accountants : Binky Moon, LLC
// https://www.iana.org/domains/root/db/accountants.html
accountants

// aco : ACO Severin Ahlmann GmbH & Co. KG
// https://www.iana.org/domains/root/db/aco.html
aco

// actor : Dog Beach, LLC
// https://www.iana.org/domains/root/db/actor.html
actor

// ads : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/ads.html
ads

// adult : ICM Registry AD LLC
// https://www.iana.org/domains/root/db/adult.html
adult

// aeg : Aktiebolaget Electrolux
// https://www.iana.org/domains/root/db/aeg.html
aeg

// aetna : Aetna Life Insurance Company
// https://www.iana.org/domains/root/db/aetna.html
aetna

// afl : Australian Football League
// https://www.iana.org/domains/root/db/afl.html
afl

// africa : ZA Central Registry NPC trading as Registry.Africa
// https://www.iana.org/domains/root/db/africa.html
africa

// agakhan : Fondation Aga Khan (Aga Khan Foundation)
// https://www.iana.org/domains/root/db/agakhan.html
agakhan

// agency : Binky Moon, LLC
// https://www.iana.org/domains/root/db/agency.html
agency

// aig : American International Group, Inc.
// https://www.iana.org/domains/root/db/aig.html
aig

// airbus : Airbus S.A.S.
// https://www.iana.org/domains/root/db/airbus.html
airbus

// airforce : Dog Beach, LLC
// https://www.iana.org/domains/root/db/airforce.html
airforce

// airtel : Bharti Airtel Limited
// https://www.iana.org/domains/root/db/airtel.html
airtel

// akdn : Fondation Aga Khan (Aga Khan Foundation)
// https://www.iana.org/domains/root/db/akdn.html
akdn

// alibaba : Alibaba Group Holding Limited
// https://www.iana.org/domains/root/db/alibaba.html
alibaba

// alipay : Alibaba Group Holding Limited
// https://www.iana.org/domains/root/db/alipay.html
alipay

// allfinanz : Allfinanz Deutsche Vermögensberatung Aktiengesellschaft
// https://www.iana.org/domains/root/db/allfinanz.html
allfinanz

// allstate : Allstate Fire and Casualty Insurance Company
// https://www.iana.org/domains/root/db/allstate.html
allstate

// ally : Ally Financial Inc.
// https://www.iana.org/domains/root/db/ally.html
ally

// alsace : Region Grand Est
// https://www.iana.org/domains/root/db/alsace.html
alsace

// alstom : ALSTOM
// https://www.iana.org/domains/root/db/alstom.html
alstom

// amazon : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/amazon.html
amazon

// americanexpress : American Express Travel Related Services Company, Inc.
// https://www.iana.org/domains/root/db/americanexpress.html
americanexpress

// americanfamily : AmFam, Inc.
// https://www.iana.org/domains/root/db/americanfamily.html
americanfamily

// amex : American Express Travel Related Services Company, Inc.
// https://www.iana.org/domains/root/db/amex.html
amex

// amfam : AmFam, Inc.
// https://www.iana.org/domains/root/db/amfam.html
amfam

// amica : Amica Mutual Insurance Company
// https://www.iana.org/domains/root/db/amica.html
amica

// amsterdam : Gemeente Amsterdam
// https://www.iana.org/domains/root/db/amsterdam.html
amsterdam

// analytics : Campus IP LLC
// https://www.iana.org/domains/root/db/analytics.html
analytics

// android : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/android.html
android

// anquan : Beijing Qihu Keji Co., Ltd.
// https://www.iana.org/domains/root/db/anquan.html
anquan

// anz : Australia and New Zealand Banking Group Limited
// https://www.iana.org/domains/root/db/anz.html
anz

// aol : Yahoo Inc.
// https://www.iana.org/domains/root/db/aol.html
aol

// apartments : Binky Moon, LLC
// https://www.iana.org/domains/root/db/apartments.html
apartments

// app : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/app.html
app

// apple : Apple Inc.
// https://www.iana.org/domains/root/db/apple.html
apple

// aquarelle : Aquarelle.com
// https://www.iana.org/domains/root/db/aquarelle.html
aquarelle

// arab : League of Arab States
// https://www.iana.org/domains/root/db/arab.html
arab

// aramco : Aramco Services Company
// https://www.iana.org/domains/root/db/aramco.html
aramco

// archi : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/archi.html
archi

// army : Dog Beach, LLC
// https://www.iana.org/domains/root/db/army.html
army

// art : UK Creative Ideas Limited
// https://www.iana.org/domains/root/db/art.html
art

// arte : Association Relative à la Télévision Européenne G.E.I.E.
// https://www.iana.org/domains/root/db/arte.html
arte

// asda : Asda Stores Limited
// https://www.iana.org/domains/root/db/asda.html
asda

// associates : Binky Moon, LLC
// https://www.iana.org/domains/root/db/associates.html
associates

// athleta : The Gap, Inc.
// https://www.iana.org/domains/root/db/athleta.html
athleta

// attorney : Dog Beach, LLC
// https://www.iana.org/domains/root/db/attorney.html
attorney

// auction : Dog Beach, LLC
// https://www.iana.org/domains/root/db/auction.html
auction

// audi : AUDI Aktiengesellschaft
// https://www.iana.org/domains/root/db/audi.html
audi

// audible : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/audible.html
audible

// audio : XYZ.COM LLC
// https://www.iana.org/domains/root/db/audio.html
audio

// auspost : Australian Postal Corporation
// https://www.iana.org/domains/root/db/auspost.html
auspost

// author : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/author.html
author

// auto : XYZ.COM LLC
// https://www.iana.org/domains/root/db/auto.html
auto

// autos : XYZ.COM LLC
// https://www.iana.org/domains/root/db/autos.html
autos

// aws : AWS Registry LLC
// https://www.iana.org/domains/root/db/aws.html
aws

// axa : AXA Group Operations SAS
// https://www.iana.org/domains/root/db/axa.html
axa

// azure : Microsoft Corporation
// https://www.iana.org/domains/root/db/azure.html
azure

// baby : XYZ.COM LLC
// https://www.iana.org/domains/root/db/baby.html
baby

// baidu : Baidu, Inc.
// https://www.iana.org/domains/root/db/baidu.html
baidu

// banamex : Citigroup Inc.
// https://www.iana.org/domains/root/db/banamex.html
banamex

// band : Dog Beach, LLC
// https://www.iana.org/domains/root/db/band.html
band

// bank : fTLD Registry Services LLC
// https://www.iana.org/domains/root/db/bank.html
bank

// bar : Punto 2012 Sociedad Anonima Promotora de Inversion de Capital Variable
// https://www.iana.org/domains/root/db/bar.html
bar

// barcelona : Municipi de Barcelona
// https://www.iana.org/domains/root/db/barcelona.html
barcelona

// barclaycard : Barclays Bank PLC
// https://www.iana.org/domains/root/db/barclaycard.html
barclaycard

// barclays : Barclays Bank PLC
// https://www.iana.org/domains/root/db/barclays.html
barclays

// barefoot : Gallo Vineyards, Inc.
// https://www.iana.org/domains/root/db/barefoot.html
barefoot

// bargains : Binky Moon, LLC
// https://www.iana.org/domains/root/db/bargains.html
bargains

// baseball : MLB Advanced Media DH, LLC
// https://www.iana.org/domains/root/db/baseball.html
baseball

// basketball : Fédération Internationale de Basketball (FIBA)
// https://www.iana.org/domains/root/db/basketball.html
basketball

// bauhaus : Werkhaus GmbH
// https://www.iana.org/domains/root/db/bauhaus.html
bauhaus

// bayern : Bayern Connect GmbH
// https://www.iana.org/domains/root/db/bayern.html
bayern

// bbc : British Broadcasting Corporation
// https://www.iana.org/domains/root/db/bbc.html
bbc

// bbt : BB&T Corporation
// https://www.iana.org/domains/root/db/bbt.html
bbt

// bbva : BANCO BILBAO VIZCAYA ARGENTARIA, S.A.
// https://www.iana.org/domains/root/db/bbva.html
bbva

// bcg : The Boston Consulting Group, Inc.
// https://www.iana.org/domains/root/db/bcg.html
bcg

// bcn : Municipi de Barcelona
// https://www.iana.org/domains/root/db/bcn.html
bcn

// beats : Beats Electronics, LLC
// https://www.iana.org/domains/root/db/beats.html
beats

// beauty : XYZ.COM LLC
// https://www.iana.org/domains/root/db/beauty.html
beauty

// beer : Registry Services, LLC
// https://www.iana.org/domains/root/db/beer.html
beer

// berlin : dotBERLIN GmbH & Co. KG
// https://www.iana.org/domains/root/db/berlin.html
berlin

// best : BestTLD Pty Ltd
// https://www.iana.org/domains/root/db/best.html
best

// bestbuy : BBY Solutions, Inc.
// https://www.iana.org/domains/root/db/bestbuy.html
bestbuy

// bet : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/bet.html
bet

// bharti : Bharti Enterprises (Holding) Private Limited
// https://www.iana.org/domains/root/db/bharti.html
bharti

// bible : American Bible Society
// https://www.iana.org/domains/root/db/bible.html
bible

// bid : dot Bid Limited
// https://www.iana.org/domains/root/db/bid.html
bid

// bike : Binky Moon, LLC
// https://www.iana.org/domains/root/db/bike.html
bike

// bing : Microsoft Corporation
// https://www.iana.org/domains/root/db/bing.html
bing

// bingo : Binky Moon, LLC
// https://www.iana.org/domains/root/db/bingo.html
bingo

// bio : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/bio.html
bio

// black : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/black.html
black

// blackfriday : Registry Services, LLC
// https://www.iana.org/domains/root/db/blackfriday.html
blackfriday

// blockbuster : Dish DBS Corporation
// https://www.iana.org/domains/root/db/blockbuster.html
blockbuster

// blog : Knock Knock WHOIS There, LLC
// https://www.iana.org/domains/root/db/blog.html
blog

// bloomberg : Bloomberg IP Holdings LLC
// https://www.iana.org/domains/root/db/bloomberg.html
bloomberg

// blue : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/blue.html
blue

// bms : Bristol-Myers Squibb Company
// https://www.iana.org/domains/root/db/bms.html
bms

// bmw : Bayerische Motoren Werke Aktiengesellschaft
// https://www.iana.org/domains/root/db/bmw.html
bmw

// bnpparibas : BNP Paribas
// https://www.iana.org/domains/root/db/bnpparibas.html
bnpparibas

// boats : XYZ.COM LLC
// https://www.iana.org/domains/root/db/boats.html
boats

// boehringer : Boehringer Ingelheim International GmbH
// https://www.iana.org/domains/root/db/boehringer.html
boehringer

// bofa : Bank of America Corporation
// https://www.iana.org/domains/root/db/bofa.html
bofa

// bom : Núcleo de Informação e Coordenação do Ponto BR - NIC.br
// https://www.iana.org/domains/root/db/bom.html
bom

// bond : ShortDot SA
// https://www.iana.org/domains/root/db/bond.html
bond

// boo : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/boo.html
boo

// book : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/book.html
book

// booking : Booking.com B.V.
// https://www.iana.org/domains/root/db/booking.html
booking

// bosch : Robert Bosch GMBH
// https://www.iana.org/domains/root/db/bosch.html
bosch

// bostik : Bostik SA
// https://www.iana.org/domains/root/db/bostik.html
bostik

// boston : Registry Services, LLC
// https://www.iana.org/domains/root/db/boston.html
boston

// bot : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/bot.html
bot

// boutique : Binky Moon, LLC
// https://www.iana.org/domains/root/db/boutique.html
boutique

// box : Intercap Registry Inc.
// https://www.iana.org/domains/root/db/box.html
box

// bradesco : Banco Bradesco S.A.
// https://www.iana.org/domains/root/db/bradesco.html
bradesco

// bridgestone : Bridgestone Corporation
// https://www.iana.org/domains/root/db/bridgestone.html
bridgestone

// broadway : Celebrate Broadway, Inc.
// https://www.iana.org/domains/root/db/broadway.html
broadway

// broker : Dog Beach, LLC
// https://www.iana.org/domains/root/db/broker.html
broker

// brother : Brother Industries, Ltd.
// https://www.iana.org/domains/root/db/brother.html
brother

// brussels : DNS.be vzw
// https://www.iana.org/domains/root/db/brussels.html
brussels

// build : Plan Bee LLC
// https://www.iana.org/domains/root/db/build.html
build

// builders : Binky Moon, LLC
// https://www.iana.org/domains/root/db/builders.html
builders

// business : Binky Moon, LLC
// https://www.iana.org/domains/root/db/business.html
business

// buy : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/buy.html
buy

// buzz : DOTSTRATEGY CO.
// https://www.iana.org/domains/root/db/buzz.html
buzz

// bzh : Association www.bzh
// https://www.iana.org/domains/root/db/bzh.html
bzh

// cab : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cab.html
cab

// cafe : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cafe.html
cafe

// cal : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/cal.html
cal

// call : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/call.html
call

// calvinklein : PVH gTLD Holdings LLC
// https://www.iana.org/domains/root/db/calvinklein.html
calvinklein

// cam : Cam Connecting SARL
// https://www.iana.org/domains/root/db/cam.html
cam

// camera : Binky Moon, LLC
// https://www.iana.org/domains/root/db/camera.html
camera

// camp : Binky Moon, LLC
// https://www.iana.org/domains/root/db/camp.html
camp

// canon : Canon Inc.
// https://www.iana.org/domains/root/db/canon.html
canon

// capetown : ZA Central Registry NPC trading as ZA Central Registry
// https://www.iana.org/domains/root/db/capetown.html
capetown

// capital : Binky Moon, LLC
// https://www.iana.org/domains/root/db/capital.html
capital

// capitalone : Capital One Financial Corporation
// https://www.iana.org/domains/root/db/capitalone.html
capitalone

// car : XYZ.COM LLC
// https://www.iana.org/domains/root/db/car.html
car

// caravan : Caravan International, Inc.
// https://www.iana.org/domains/root/db/caravan.html
caravan

// cards : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cards.html
cards

// care : Binky Moon, LLC
// https://www.iana.org/domains/root/db/care.html
care

// career : dotCareer LLC
// https://www.iana.org/domains/root/db/career.html
career

// careers : Binky Moon, LLC
// https://www.iana.org/domains/root/db/careers.html
careers

// cars : XYZ.COM LLC
// https://www.iana.org/domains/root/db/cars.html
cars

// casa : Registry Services, LLC
// https://www.iana.org/domains/root/db/casa.html
casa

// case : Digity, LLC
// https://www.iana.org/domains/root/db/case.html
case

// cash : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cash.html
cash

// casino : Binky Moon, LLC
// https://www.iana.org/domains/root/db/casino.html
casino

// catering : Binky Moon, LLC
// https://www.iana.org/domains/root/db/catering.html
catering

// catholic : Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)
// https://www.iana.org/domains/root/db/catholic.html
catholic

// cba : COMMONWEALTH BANK OF AUSTRALIA
// https://www.iana.org/domains/root/db/cba.html
cba

// cbn : The Christian Broadcasting Network, Inc.
// https://www.iana.org/domains/root/db/cbn.html
cbn

// cbre : CBRE, Inc.
// https://www.iana.org/domains/root/db/cbre.html
cbre

// center : Binky Moon, LLC
// https://www.iana.org/domains/root/db/center.html
center

// ceo : XYZ.COM LLC
// https://www.iana.org/domains/root/db/ceo.html
ceo

// cern : European Organization for Nuclear Research ("CERN")
// https://www.iana.org/domains/root/db/cern.html
cern

// cfa : CFA Institute
// https://www.iana.org/domains/root/db/cfa.html
cfa

// cfd : ShortDot SA
// https://www.iana.org/domains/root/db/cfd.html
cfd

// chanel : Chanel International B.V.
// https://www.iana.org/domains/root/db/chanel.html
chanel

// channel : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/channel.html
channel

// charity : Public Interest Registry
// https://www.iana.org/domains/root/db/charity.html
charity

// chase : JPMorgan Chase Bank, National Association
// https://www.iana.org/domains/root/db/chase.html
chase

// chat : Binky Moon, LLC
// https://www.iana.org/domains/root/db/chat.html
chat

// cheap : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cheap.html
cheap

// chintai : CHINTAI Corporation
// https://www.iana.org/domains/root/db/chintai.html
chintai

// christmas : XYZ.COM LLC
// https://www.iana.org/domains/root/db/christmas.html
christmas

// chrome : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/chrome.html
chrome

// church : Binky Moon, LLC
// https://www.iana.org/domains/root/db/church.html
church

// cipriani : Hotel Cipriani Srl
// https://www.iana.org/domains/root/db/cipriani.html
cipriani

// circle : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/circle.html
circle

// cisco : Cisco Technology, Inc.
// https://www.iana.org/domains/root/db/cisco.html
cisco

// citadel : Citadel Domain LLC
// https://www.iana.org/domains/root/db/citadel.html
citadel

// citi : Citigroup Inc.
// https://www.iana.org/domains/root/db/citi.html
citi

// citic : CITIC Group Corporation
// https://www.iana.org/domains/root/db/citic.html
citic

// city : Binky Moon, LLC
// https://www.iana.org/domains/root/db/city.html
city

// claims : Binky Moon, LLC
// https://www.iana.org/domains/root/db/claims.html
claims

// cleaning : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cleaning.html
cleaning

// click : Waterford Limited
// https://www.iana.org/domains/root/db/click.html
click

// clinic : Binky Moon, LLC
// https://www.iana.org/domains/root/db/clinic.html
clinic

// clinique : The Estée Lauder Companies Inc.
// https://www.iana.org/domains/root/db/clinique.html
clinique

// clothing : Binky Moon, LLC
// https://www.iana.org/domains/root/db/clothing.html
clothing

// cloud : Aruba PEC S.p.A.
// https://www.iana.org/domains/root/db/cloud.html
cloud

// club : Registry Services, LLC
// https://www.iana.org/domains/root/db/club.html
club

// clubmed : Club Méditerranée S.A.
// https://www.iana.org/domains/root/db/clubmed.html
clubmed

// coach : Binky Moon, LLC
// https://www.iana.org/domains/root/db/coach.html
coach

// codes : Binky Moon, LLC
// https://www.iana.org/domains/root/db/codes.html
codes

// coffee : Binky Moon, LLC
// https://www.iana.org/domains/root/db/coffee.html
coffee

// college : XYZ.COM LLC
// https://www.iana.org/domains/root/db/college.html
college

// cologne : dotKoeln GmbH
// https://www.iana.org/domains/root/db/cologne.html
cologne

// commbank : COMMONWEALTH BANK OF AUSTRALIA
// https://www.iana.org/domains/root/db/commbank.html
commbank

// community : Binky Moon, LLC
// https://www.iana.org/domains/root/db/community.html
community

// company : Binky Moon, LLC
// https://www.iana.org/domains/root/db/company.html
company

// compare : Registry Services, LLC
// https://www.iana.org/domains/root/db/compare.html
compare

// computer : Binky Moon, LLC
// https://www.iana.org/domains/root/db/computer.html
computer

// comsec : VeriSign, Inc.
// https://www.iana.org/domains/root/db/comsec.html
comsec

// condos : Binky Moon, LLC
// https://www.iana.org/domains/root/db/condos.html
condos

// construction : Binky Moon, LLC
// https://www.iana.org/domains/root/db/construction.html
construction

// consulting : Dog Beach, LLC
// https://www.iana.org/domains/root/db/consulting.html
consulting

// contact : Dog Beach, LLC
// https://www.iana.org/domains/root/db/contact.html
contact

// contractors : Binky Moon, LLC
// https://www.iana.org/domains/root/db/contractors.html
contractors

// cooking : Registry Services, LLC
// https://www.iana.org/domains/root/db/cooking.html
cooking

// cool : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cool.html
cool

// corsica : Collectivité de Corse
// https://www.iana.org/domains/root/db/corsica.html
corsica

// country : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/country.html
country

// coupon : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/coupon.html
coupon

// coupons : Binky Moon, LLC
// https://www.iana.org/domains/root/db/coupons.html
coupons

// courses : Registry Services, LLC
// https://www.iana.org/domains/root/db/courses.html
courses

// cpa : American Institute of Certified Public Accountants
// https://www.iana.org/domains/root/db/cpa.html
cpa

// credit : Binky Moon, LLC
// https://www.iana.org/domains/root/db/credit.html
credit

// creditcard : Binky Moon, LLC
// https://www.iana.org/domains/root/db/creditcard.html
creditcard

// creditunion : DotCooperation LLC
// https://www.iana.org/domains/root/db/creditunion.html
creditunion

// cricket : dot Cricket Limited
// https://www.iana.org/domains/root/db/cricket.html
cricket

// crown : Crown Equipment Corporation
// https://www.iana.org/domains/root/db/crown.html
crown

// crs : Federated Co-operatives Limited
// https://www.iana.org/domains/root/db/crs.html
crs

// cruise : Viking River Cruises (Bermuda) Ltd.
// https://www.iana.org/domains/root/db/cruise.html
cruise

// cruises : Binky Moon, LLC
// https://www.iana.org/domains/root/db/cruises.html
cruises

// cuisinella : SCHMIDT GROUPE S.A.S.
// https://www.iana.org/domains/root/db/cuisinella.html
cuisinella

// cymru : Nominet UK
// https://www.iana.org/domains/root/db/cymru.html
cymru

// cyou : ShortDot SA
// https://www.iana.org/domains/root/db/cyou.html
cyou

// dad : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/dad.html
dad

// dance : Dog Beach, LLC
// https://www.iana.org/domains/root/db/dance.html
dance

// data : Dish DBS Corporation
// https://www.iana.org/domains/root/db/data.html
data

// date : dot Date Limited
// https://www.iana.org/domains/root/db/date.html
date

// dating : Binky Moon, LLC
// https://www.iana.org/domains/root/db/dating.html
dating

// datsun : NISSAN MOTOR CO., LTD.
// https://www.iana.org/domains/root/db/datsun.html
datsun

// day : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/day.html
day

// dclk : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/dclk.html
dclk

// dds : Registry Services, LLC
// https://www.iana.org/domains/root/db/dds.html
dds

// deal : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/deal.html
deal

// dealer : Intercap Registry Inc.
// https://www.iana.org/domains/root/db/dealer.html
dealer

// deals : Binky Moon, LLC
// https://www.iana.org/domains/root/db/deals.html
deals

// degree : Dog Beach, LLC
// https://www.iana.org/domains/root/db/degree.html
degree

// delivery : Binky Moon, LLC
// https://www.iana.org/domains/root/db/delivery.html
delivery

// dell : Dell Inc.
// https://www.iana.org/domains/root/db/dell.html
dell

// deloitte : Deloitte Touche Tohmatsu
// https://www.iana.org/domains/root/db/deloitte.html
deloitte

// delta : Delta Air Lines, Inc.
// https://www.iana.org/domains/root/db/delta.html
delta

// democrat : Dog Beach, LLC
// https://www.iana.org/domains/root/db/democrat.html
democrat

// dental : Binky Moon, LLC
// https://www.iana.org/domains/root/db/dental.html
dental

// dentist : Dog Beach, LLC
// https://www.iana.org/domains/root/db/dentist.html
dentist

// desi
// https://www.iana.org/domains/root/db/desi.html
desi

// design : Registry Services, LLC
// https://www.iana.org/domains/root/db/design.html
design

// dev : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/dev.html
dev

// dhl : Deutsche Post AG
// https://www.iana.org/domains/root/db/dhl.html
dhl

// diamonds : Binky Moon, LLC
// https://www.iana.org/domains/root/db/diamonds.html
diamonds

// diet : XYZ.COM LLC
// https://www.iana.org/domains/root/db/diet.html
diet

// digital : Binky Moon, LLC
// https://www.iana.org/domains/root/db/digital.html
digital

// direct : Binky Moon, LLC
// https://www.iana.org/domains/root/db/direct.html
direct

// directory : Binky Moon, LLC
// https://www.iana.org/domains/root/db/directory.html
directory

// discount : Binky Moon, LLC
// https://www.iana.org/domains/root/db/discount.html
discount

// discover : Discover Financial Services
// https://www.iana.org/domains/root/db/discover.html
discover

// dish : Dish DBS Corporation
// https://www.iana.org/domains/root/db/dish.html
dish

// diy : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/diy.html
diy

// dnp : Dai Nippon Printing Co., Ltd.
// https://www.iana.org/domains/root/db/dnp.html
dnp

// docs : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/docs.html
docs

// doctor : Binky Moon, LLC
// https://www.iana.org/domains/root/db/doctor.html
doctor

// dog : Binky Moon, LLC
// https://www.iana.org/domains/root/db/dog.html
dog

// domains : Binky Moon, LLC
// https://www.iana.org/domains/root/db/domains.html
domains

// dot : Dish DBS Corporation
// https://www.iana.org/domains/root/db/dot.html
dot

// download : dot Support Limited
// https://www.iana.org/domains/root/db/download.html
download

// drive : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/drive.html
drive

// dtv : Dish DBS Corporation
// https://www.iana.org/domains/root/db/dtv.html
dtv

// dubai : Dubai Smart Government Department
// https://www.iana.org/domains/root/db/dubai.html
dubai

// dunlop : The Goodyear Tire & Rubber Company
// https://www.iana.org/domains/root/db/dunlop.html
dunlop

// dupont : DuPont Specialty Products USA, LLC
// https://www.iana.org/domains/root/db/dupont.html
dupont

// durban : ZA Central Registry NPC trading as ZA Central Registry
// https://www.iana.org/domains/root/db/durban.html
durban

// dvag : Deutsche Vermögensberatung Aktiengesellschaft DVAG
// https://www.iana.org/domains/root/db/dvag.html
dvag

// dvr : DISH Technologies L.L.C.
// https://www.iana.org/domains/root/db/dvr.html
dvr

// earth : Interlink Systems Innovation Institute K.K.
// https://www.iana.org/domains/root/db/earth.html
earth

// eat : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/eat.html
eat

// eco : Big Room Inc.
// https://www.iana.org/domains/root/db/eco.html
eco

// edeka : EDEKA Verband kaufmännischer Genossenschaften e.V.
// https://www.iana.org/domains/root/db/edeka.html
edeka

// education : Binky Moon, LLC
// https://www.iana.org/domains/root/db/education.html
education

// email : Binky Moon, LLC
// https://www.iana.org/domains/root/db/email.html
email

// emerck : Merck KGaA
// https://www.iana.org/domains/root/db/emerck.html
emerck

// energy : Binky Moon, LLC
// https://www.iana.org/domains/root/db/energy.html
energy

// engineer : Dog Beach, LLC
// https://www.iana.org/domains/root/db/engineer.html
engineer

// engineering : Binky Moon, LLC
// https://www.iana.org/domains/root/db/engineering.html
engineering

// enterprises : Binky Moon, LLC
// https://www.iana.org/domains/root/db/enterprises.html
enterprises

// epson : Seiko Epson Corporation
// https://www.iana.org/domains/root/db/epson.html
epson

// equipment : Binky Moon, LLC
// https://www.iana.org/domains/root/db/equipment.html
equipment

// ericsson : Telefonaktiebolaget L M Ericsson
// https://www.iana.org/domains/root/db/ericsson.html
ericsson

// erni : ERNI Group Holding AG
// https://www.iana.org/domains/root/db/erni.html
erni

// esq : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/esq.html
esq

// estate : Binky Moon, LLC
// https://www.iana.org/domains/root/db/estate.html
estate

// eurovision : European Broadcasting Union (EBU)
// https://www.iana.org/domains/root/db/eurovision.html
eurovision

// eus : Puntueus Fundazioa
// https://www.iana.org/domains/root/db/eus.html
eus

// events : Binky Moon, LLC
// https://www.iana.org/domains/root/db/events.html
events

// exchange : Binky Moon, LLC
// https://www.iana.org/domains/root/db/exchange.html
exchange

// expert : Binky Moon, LLC
// https://www.iana.org/domains/root/db/expert.html
expert

// exposed : Binky Moon, LLC
// https://www.iana.org/domains/root/db/exposed.html
exposed

// express : Binky Moon, LLC
// https://www.iana.org/domains/root/db/express.html
express

// extraspace : Extra Space Storage LLC
// https://www.iana.org/domains/root/db/extraspace.html
extraspace

// fage : Fage International S.A.
// https://www.iana.org/domains/root/db/fage.html
fage

// fail : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fail.html
fail

// fairwinds : FairWinds Partners, LLC
// https://www.iana.org/domains/root/db/fairwinds.html
fairwinds

// faith : dot Faith Limited
// https://www.iana.org/domains/root/db/faith.html
faith

// family : Dog Beach, LLC
// https://www.iana.org/domains/root/db/family.html
family

// fan : Dog Beach, LLC
// https://www.iana.org/domains/root/db/fan.html
fan

// fans : ZDNS International Limited
// https://www.iana.org/domains/root/db/fans.html
fans

// farm : Binky Moon, LLC
// https://www.iana.org/domains/root/db/farm.html
farm

// farmers : Farmers Insurance Exchange
// https://www.iana.org/domains/root/db/farmers.html
farmers

// fashion : Registry Services, LLC
// https://www.iana.org/domains/root/db/fashion.html
fashion

// fast : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/fast.html
fast

// fedex : Federal Express Corporation
// https://www.iana.org/domains/root/db/fedex.html
fedex

// feedback : Top Level Spectrum, Inc.
// https://www.iana.org/domains/root/db/feedback.html
feedback

// ferrari : Fiat Chrysler Automobiles N.V.
// https://www.iana.org/domains/root/db/ferrari.html
ferrari

// ferrero : Ferrero Trading Lux S.A.
// https://www.iana.org/domains/root/db/ferrero.html
ferrero

// fidelity : Fidelity Brokerage Services LLC
// https://www.iana.org/domains/root/db/fidelity.html
fidelity

// fido : Rogers Communications Canada Inc.
// https://www.iana.org/domains/root/db/fido.html
fido

// film : Motion Picture Domain Registry Pty Ltd
// https://www.iana.org/domains/root/db/film.html
film

// final : Núcleo de Informação e Coordenação do Ponto BR - NIC.br
// https://www.iana.org/domains/root/db/final.html
final

// finance : Binky Moon, LLC
// https://www.iana.org/domains/root/db/finance.html
finance

// financial : Binky Moon, LLC
// https://www.iana.org/domains/root/db/financial.html
financial

// fire : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/fire.html
fire

// firestone : Bridgestone Licensing Services, Inc
// https://www.iana.org/domains/root/db/firestone.html
firestone

// firmdale : Firmdale Holdings Limited
// https://www.iana.org/domains/root/db/firmdale.html
firmdale

// fish : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fish.html
fish

// fishing : Registry Services, LLC
// https://www.iana.org/domains/root/db/fishing.html
fishing

// fit : Registry Services, LLC
// https://www.iana.org/domains/root/db/fit.html
fit

// fitness : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fitness.html
fitness

// flickr : Flickr, Inc.
// https://www.iana.org/domains/root/db/flickr.html
flickr

// flights : Binky Moon, LLC
// https://www.iana.org/domains/root/db/flights.html
flights

// flir : FLIR Systems, Inc.
// https://www.iana.org/domains/root/db/flir.html
flir

// florist : Binky Moon, LLC
// https://www.iana.org/domains/root/db/florist.html
florist

// flowers : XYZ.COM LLC
// https://www.iana.org/domains/root/db/flowers.html
flowers

// fly : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/fly.html
fly

// foo : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/foo.html
foo

// food : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/food.html
food

// football : Binky Moon, LLC
// https://www.iana.org/domains/root/db/football.html
football

// ford : Ford Motor Company
// https://www.iana.org/domains/root/db/ford.html
ford

// forex : Dog Beach, LLC
// https://www.iana.org/domains/root/db/forex.html
forex

// forsale : Dog Beach, LLC
// https://www.iana.org/domains/root/db/forsale.html
forsale

// forum : Waterford Limited
// https://www.iana.org/domains/root/db/forum.html
forum

// foundation : Public Interest Registry
// https://www.iana.org/domains/root/db/foundation.html
foundation

// fox : FOX Registry, LLC
// https://www.iana.org/domains/root/db/fox.html
fox

// free : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/free.html
free

// fresenius : Fresenius Immobilien-Verwaltungs-GmbH
// https://www.iana.org/domains/root/db/fresenius.html
fresenius

// frl : FRLregistry B.V.
// https://www.iana.org/domains/root/db/frl.html
frl

// frogans : OP3FT
// https://www.iana.org/domains/root/db/frogans.html
frogans

// frontier : Frontier Communications Corporation
// https://www.iana.org/domains/root/db/frontier.html
frontier

// ftr : Frontier Communications Corporation
// https://www.iana.org/domains/root/db/ftr.html
ftr

// fujitsu : Fujitsu Limited
// https://www.iana.org/domains/root/db/fujitsu.html
fujitsu

// fun : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/fun.html
fun

// fund : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fund.html
fund

// furniture : Binky Moon, LLC
// https://www.iana.org/domains/root/db/furniture.html
furniture

// futbol : Dog Beach, LLC
// https://www.iana.org/domains/root/db/futbol.html
futbol

// fyi : Binky Moon, LLC
// https://www.iana.org/domains/root/db/fyi.html
fyi

// gal : Asociación puntoGAL
// https://www.iana.org/domains/root/db/gal.html
gal

// gallery : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gallery.html
gallery

// gallo : Gallo Vineyards, Inc.
// https://www.iana.org/domains/root/db/gallo.html
gallo

// gallup : Gallup, Inc.
// https://www.iana.org/domains/root/db/gallup.html
gallup

// game : XYZ.COM LLC
// https://www.iana.org/domains/root/db/game.html
game

// games : Dog Beach, LLC
// https://www.iana.org/domains/root/db/games.html
games

// gap : The Gap, Inc.
// https://www.iana.org/domains/root/db/gap.html
gap

// garden : Registry Services, LLC
// https://www.iana.org/domains/root/db/garden.html
garden

// gay : Registry Services, LLC
// https://www.iana.org/domains/root/db/gay.html
gay

// gbiz : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/gbiz.html
gbiz

// gdn : Joint Stock Company "Navigation-information systems"
// https://www.iana.org/domains/root/db/gdn.html
gdn

// gea : GEA Group Aktiengesellschaft
// https://www.iana.org/domains/root/db/gea.html
gea

// gent : Easyhost BV
// https://www.iana.org/domains/root/db/gent.html
gent

// genting : Resorts World Inc Pte. Ltd.
// https://www.iana.org/domains/root/db/genting.html
genting

// george : Wal-Mart Stores, Inc.
// https://www.iana.org/domains/root/db/george.html
george

// ggee : GMO Internet, Inc.
// https://www.iana.org/domains/root/db/ggee.html
ggee

// gift : DotGift, LLC
// https://www.iana.org/domains/root/db/gift.html
gift

// gifts : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gifts.html
gifts

// gives : Public Interest Registry
// https://www.iana.org/domains/root/db/gives.html
gives

// giving : Public Interest Registry
// https://www.iana.org/domains/root/db/giving.html
giving

// glass : Binky Moon, LLC
// https://www.iana.org/domains/root/db/glass.html
glass

// gle : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/gle.html
gle

// global : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/global.html
global

// globo : Globo Comunicação e Participações S.A
// https://www.iana.org/domains/root/db/globo.html
globo

// gmail : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/gmail.html
gmail

// gmbh : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gmbh.html
gmbh

// gmo : GMO Internet, Inc.
// https://www.iana.org/domains/root/db/gmo.html
gmo

// gmx : 1&1 Mail & Media GmbH
// https://www.iana.org/domains/root/db/gmx.html
gmx

// godaddy : Go Daddy East, LLC
// https://www.iana.org/domains/root/db/godaddy.html
godaddy

// gold : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gold.html
gold

// goldpoint : YODOBASHI CAMERA CO.,LTD.
// https://www.iana.org/domains/root/db/goldpoint.html
goldpoint

// golf : Binky Moon, LLC
// https://www.iana.org/domains/root/db/golf.html
golf

// goo : NTT DOCOMO, INC.
// https://www.iana.org/domains/root/db/goo.html
goo

// goodyear : The Goodyear Tire & Rubber Company
// https://www.iana.org/domains/root/db/goodyear.html
goodyear

// goog : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/goog.html
goog

// google : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/google.html
google

// gop : Republican State Leadership Committee, Inc.
// https://www.iana.org/domains/root/db/gop.html
gop

// got : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/got.html
got

// grainger : Grainger Registry Services, LLC
// https://www.iana.org/domains/root/db/grainger.html
grainger

// graphics : Binky Moon, LLC
// https://www.iana.org/domains/root/db/graphics.html
graphics

// gratis : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gratis.html
gratis

// green : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/green.html
green

// gripe : Binky Moon, LLC
// https://www.iana.org/domains/root/db/gripe.html
gripe

// grocery : Wal-Mart Stores, Inc.
// https://www.iana.org/domains/root/db/grocery.html
grocery

// group : Binky Moon, LLC
// https://www.iana.org/domains/root/db/group.html
group

// gucci : Guccio Gucci S.p.a.
// https://www.iana.org/domains/root/db/gucci.html
gucci

// guge : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/guge.html
guge

// guide : Binky Moon, LLC
// https://www.iana.org/domains/root/db/guide.html
guide

// guitars : XYZ.COM LLC
// https://www.iana.org/domains/root/db/guitars.html
guitars

// guru : Binky Moon, LLC
// https://www.iana.org/domains/root/db/guru.html
guru

// hair : XYZ.COM LLC
// https://www.iana.org/domains/root/db/hair.html
hair

// hamburg : Hamburg Top-Level-Domain GmbH
// https://www.iana.org/domains/root/db/hamburg.html
hamburg

// hangout : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/hangout.html
hangout

// haus : Dog Beach, LLC
// https://www.iana.org/domains/root/db/haus.html
haus

// hbo : HBO Registry Services, Inc.
// https://www.iana.org/domains/root/db/hbo.html
hbo

// hdfc : HDFC BANK LIMITED
// https://www.iana.org/domains/root/db/hdfc.html
hdfc

// hdfcbank : HDFC BANK LIMITED
// https://www.iana.org/domains/root/db/hdfcbank.html
hdfcbank

// health : Registry Services, LLC
// https://www.iana.org/domains/root/db/health.html
health

// healthcare : Binky Moon, LLC
// https://www.iana.org/domains/root/db/healthcare.html
healthcare

// help : Innovation service Limited
// https://www.iana.org/domains/root/db/help.html
help

// helsinki : City of Helsinki
// https://www.iana.org/domains/root/db/helsinki.html
helsinki

// here : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/here.html
here

// hermes : HERMES INTERNATIONAL
// https://www.iana.org/domains/root/db/hermes.html
hermes

// hiphop : Dot Hip Hop, LLC
// https://www.iana.org/domains/root/db/hiphop.html
hiphop

// hisamitsu : Hisamitsu Pharmaceutical Co.,Inc.
// https://www.iana.org/domains/root/db/hisamitsu.html
hisamitsu

// hitachi : Hitachi, Ltd.
// https://www.iana.org/domains/root/db/hitachi.html
hitachi

// hiv : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/hiv.html
hiv

// hkt : PCCW-HKT DataCom Services Limited
// https://www.iana.org/domains/root/db/hkt.html
hkt

// hockey : Binky Moon, LLC
// https://www.iana.org/domains/root/db/hockey.html
hockey

// holdings : Binky Moon, LLC
// https://www.iana.org/domains/root/db/holdings.html
holdings

// holiday : Binky Moon, LLC
// https://www.iana.org/domains/root/db/holiday.html
holiday

// homedepot : Home Depot Product Authority, LLC
// https://www.iana.org/domains/root/db/homedepot.html
homedepot

// homegoods : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/homegoods.html
homegoods

// homes : XYZ.COM LLC
// https://www.iana.org/domains/root/db/homes.html
homes

// homesense : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/homesense.html
homesense

// honda : Honda Motor Co., Ltd.
// https://www.iana.org/domains/root/db/honda.html
honda

// horse : Registry Services, LLC
// https://www.iana.org/domains/root/db/horse.html
horse

// hospital : Binky Moon, LLC
// https://www.iana.org/domains/root/db/hospital.html
hospital

// host : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/host.html
host

// hosting : XYZ.COM LLC
// https://www.iana.org/domains/root/db/hosting.html
hosting

// hot : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/hot.html
hot

// hotel : HOTEL Top-Level-Domain S.a.r.l
// https://www.iana.org/domains/root/db/hotel.html
hotel

// hotels : Booking.com B.V.
// https://www.iana.org/domains/root/db/hotels.html
hotels

// hotmail : Microsoft Corporation
// https://www.iana.org/domains/root/db/hotmail.html
hotmail

// house : Binky Moon, LLC
// https://www.iana.org/domains/root/db/house.html
house

// how : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/how.html
how

// hsbc : HSBC Global Services (UK) Limited
// https://www.iana.org/domains/root/db/hsbc.html
hsbc

// hughes : Hughes Satellite Systems Corporation
// https://www.iana.org/domains/root/db/hughes.html
hughes

// hyatt : Hyatt GTLD, L.L.C.
// https://www.iana.org/domains/root/db/hyatt.html
hyatt

// hyundai : Hyundai Motor Company
// https://www.iana.org/domains/root/db/hyundai.html
hyundai

// ibm : International Business Machines Corporation
// https://www.iana.org/domains/root/db/ibm.html
ibm

// icbc : Industrial and Commercial Bank of China Limited
// https://www.iana.org/domains/root/db/icbc.html
icbc

// ice : IntercontinentalExchange, Inc.
// https://www.iana.org/domains/root/db/ice.html
ice

// icu : ShortDot SA
// https://www.iana.org/domains/root/db/icu.html
icu

// ieee : IEEE Global LLC
// https://www.iana.org/domains/root/db/ieee.html
ieee

// ifm : ifm electronic gmbh
// https://www.iana.org/domains/root/db/ifm.html
ifm

// ikano : Ikano S.A.
// https://www.iana.org/domains/root/db/ikano.html
ikano

// imamat : Fondation Aga Khan (Aga Khan Foundation)
// https://www.iana.org/domains/root/db/imamat.html
imamat

// imdb : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/imdb.html
imdb

// immo : Binky Moon, LLC
// https://www.iana.org/domains/root/db/immo.html
immo

// immobilien : Dog Beach, LLC
// https://www.iana.org/domains/root/db/immobilien.html
immobilien

// inc : Intercap Registry Inc.
// https://www.iana.org/domains/root/db/inc.html
inc

// industries : Binky Moon, LLC
// https://www.iana.org/domains/root/db/industries.html
industries

// infiniti : NISSAN MOTOR CO., LTD.
// https://www.iana.org/domains/root/db/infiniti.html
infiniti

// ing : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/ing.html
ing

// ink : Registry Services, LLC
// https://www.iana.org/domains/root/db/ink.html
ink

// institute : Binky Moon, LLC
// https://www.iana.org/domains/root/db/institute.html
institute

// insurance : fTLD Registry Services LLC
// https://www.iana.org/domains/root/db/insurance.html
insurance

// insure : Binky Moon, LLC
// https://www.iana.org/domains/root/db/insure.html
insure

// international : Binky Moon, LLC
// https://www.iana.org/domains/root/db/international.html
international

// intuit : Intuit Administrative Services, Inc.
// https://www.iana.org/domains/root/db/intuit.html
intuit

// investments : Binky Moon, LLC
// https://www.iana.org/domains/root/db/investments.html
investments

// ipiranga : Ipiranga Produtos de Petroleo S.A.
// https://www.iana.org/domains/root/db/ipiranga.html
ipiranga

// irish : Binky Moon, LLC
// https://www.iana.org/domains/root/db/irish.html
irish

// ismaili : Fondation Aga Khan (Aga Khan Foundation)
// https://www.iana.org/domains/root/db/ismaili.html
ismaili

// ist : Istanbul Metropolitan Municipality
// https://www.iana.org/domains/root/db/ist.html
ist

// istanbul : Istanbul Metropolitan Municipality
// https://www.iana.org/domains/root/db/istanbul.html
istanbul

// itau : Itau Unibanco Holding S.A.
// https://www.iana.org/domains/root/db/itau.html
itau

// itv : ITV Services Limited
// https://www.iana.org/domains/root/db/itv.html
itv

// jaguar : Jaguar Land Rover Ltd
// https://www.iana.org/domains/root/db/jaguar.html
jaguar

// java : Oracle Corporation
// https://www.iana.org/domains/root/db/java.html
java

// jcb : JCB Co., Ltd.
// https://www.iana.org/domains/root/db/jcb.html
jcb

// jeep : FCA US LLC.
// https://www.iana.org/domains/root/db/jeep.html
jeep

// jetzt : Binky Moon, LLC
// https://www.iana.org/domains/root/db/jetzt.html
jetzt

// jewelry : Binky Moon, LLC
// https://www.iana.org/domains/root/db/jewelry.html
jewelry

// jio : Reliance Industries Limited
// https://www.iana.org/domains/root/db/jio.html
jio

// jll : Jones Lang LaSalle Incorporated
// https://www.iana.org/domains/root/db/jll.html
jll

// jmp : Matrix IP LLC
// https://www.iana.org/domains/root/db/jmp.html
jmp

// jnj : Johnson & Johnson Services, Inc.
// https://www.iana.org/domains/root/db/jnj.html
jnj

// joburg : ZA Central Registry NPC trading as ZA Central Registry
// https://www.iana.org/domains/root/db/joburg.html
joburg

// jot : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/jot.html
jot

// joy : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/joy.html
joy

// jpmorgan : JPMorgan Chase Bank, National Association
// https://www.iana.org/domains/root/db/jpmorgan.html
jpmorgan

// jprs : Japan Registry Services Co., Ltd.
// https://www.iana.org/domains/root/db/jprs.html
jprs

// juegos : Dog Beach, LLC
// https://www.iana.org/domains/root/db/juegos.html
juegos

// juniper : JUNIPER NETWORKS, INC.
// https://www.iana.org/domains/root/db/juniper.html
juniper

// kaufen : Dog Beach, LLC
// https://www.iana.org/domains/root/db/kaufen.html
kaufen

// kddi : KDDI CORPORATION
// https://www.iana.org/domains/root/db/kddi.html
kddi

// kerryhotels : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/kerryhotels.html
kerryhotels

// kerryproperties : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/kerryproperties.html
kerryproperties

// kfh : Kuwait Finance House
// https://www.iana.org/domains/root/db/kfh.html
kfh

// kia : KIA MOTORS CORPORATION
// https://www.iana.org/domains/root/db/kia.html
kia

// kids : DotKids Foundation Limited
// https://www.iana.org/domains/root/db/kids.html
kids

// kim : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/kim.html
kim

// kindle : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/kindle.html
kindle

// kitchen : Binky Moon, LLC
// https://www.iana.org/domains/root/db/kitchen.html
kitchen

// kiwi : DOT KIWI LIMITED
// https://www.iana.org/domains/root/db/kiwi.html
kiwi

// koeln : dotKoeln GmbH
// https://www.iana.org/domains/root/db/koeln.html
koeln

// komatsu : Komatsu Ltd.
// https://www.iana.org/domains/root/db/komatsu.html
komatsu

// kosher : Kosher Marketing Assets LLC
// https://www.iana.org/domains/root/db/kosher.html
kosher

// kpmg : KPMG International Cooperative (KPMG International Genossenschaft)
// https://www.iana.org/domains/root/db/kpmg.html
kpmg

// kpn : Koninklijke KPN N.V.
// https://www.iana.org/domains/root/db/kpn.html
kpn

// krd : KRG Department of Information Technology
// https://www.iana.org/domains/root/db/krd.html
krd

// kred : KredTLD Pty Ltd
// https://www.iana.org/domains/root/db/kred.html
kred

// kuokgroup : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/kuokgroup.html
kuokgroup

// kyoto : Academic Institution: Kyoto Jyoho Gakuen
// https://www.iana.org/domains/root/db/kyoto.html
kyoto

// lacaixa : Fundación Bancaria Caixa d’Estalvis i Pensions de Barcelona, “la Caixa”
// https://www.iana.org/domains/root/db/lacaixa.html
lacaixa

// lamborghini : Automobili Lamborghini S.p.A.
// https://www.iana.org/domains/root/db/lamborghini.html
lamborghini

// lamer : The Estée Lauder Companies Inc.
// https://www.iana.org/domains/root/db/lamer.html
lamer

// land : Binky Moon, LLC
// https://www.iana.org/domains/root/db/land.html
land

// landrover : Jaguar Land Rover Ltd
// https://www.iana.org/domains/root/db/landrover.html
landrover

// lanxess : LANXESS Corporation
// https://www.iana.org/domains/root/db/lanxess.html
lanxess

// lasalle : Jones Lang LaSalle Incorporated
// https://www.iana.org/domains/root/db/lasalle.html
lasalle

// lat : XYZ.COM LLC
// https://www.iana.org/domains/root/db/lat.html
lat

// latino : Dish DBS Corporation
// https://www.iana.org/domains/root/db/latino.html
latino

// latrobe : La Trobe University
// https://www.iana.org/domains/root/db/latrobe.html
latrobe

// law : Registry Services, LLC
// https://www.iana.org/domains/root/db/law.html
law

// lawyer : Dog Beach, LLC
// https://www.iana.org/domains/root/db/lawyer.html
lawyer

// lds : IRI Domain Management, LLC
// https://www.iana.org/domains/root/db/lds.html
lds

// lease : Binky Moon, LLC
// https://www.iana.org/domains/root/db/lease.html
lease

// leclerc : A.C.D. LEC Association des Centres Distributeurs Edouard Leclerc
// https://www.iana.org/domains/root/db/leclerc.html
leclerc

// lefrak : LeFrak Organization, Inc.
// https://www.iana.org/domains/root/db/lefrak.html
lefrak

// legal : Binky Moon, LLC
// https://www.iana.org/domains/root/db/legal.html
legal

// lego : LEGO Juris A/S
// https://www.iana.org/domains/root/db/lego.html
lego

// lexus : TOYOTA MOTOR CORPORATION
// https://www.iana.org/domains/root/db/lexus.html
lexus

// lgbt : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/lgbt.html
lgbt

// lidl : Schwarz Domains und Services GmbH & Co. KG
// https://www.iana.org/domains/root/db/lidl.html
lidl

// life : Binky Moon, LLC
// https://www.iana.org/domains/root/db/life.html
life

// lifeinsurance : American Council of Life Insurers
// https://www.iana.org/domains/root/db/lifeinsurance.html
lifeinsurance

// lifestyle : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/lifestyle.html
lifestyle

// lighting : Binky Moon, LLC
// https://www.iana.org/domains/root/db/lighting.html
lighting

// like : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/like.html
like

// lilly : Eli Lilly and Company
// https://www.iana.org/domains/root/db/lilly.html
lilly

// limited : Binky Moon, LLC
// https://www.iana.org/domains/root/db/limited.html
limited

// limo : Binky Moon, LLC
// https://www.iana.org/domains/root/db/limo.html
limo

// lincoln : Ford Motor Company
// https://www.iana.org/domains/root/db/lincoln.html
lincoln

// link : Nova Registry Ltd
// https://www.iana.org/domains/root/db/link.html
link

// live : Dog Beach, LLC
// https://www.iana.org/domains/root/db/live.html
live

// living : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/living.html
living

// llc : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/llc.html
llc

// llp : Intercap Registry Inc.
// https://www.iana.org/domains/root/db/llp.html
llp

// loan : dot Loan Limited
// https://www.iana.org/domains/root/db/loan.html
loan

// loans : Binky Moon, LLC
// https://www.iana.org/domains/root/db/loans.html
loans

// locker : Orange Domains LLC
// https://www.iana.org/domains/root/db/locker.html
locker

// locus : Locus Analytics LLC
// https://www.iana.org/domains/root/db/locus.html
locus

// lol : XYZ.COM LLC
// https://www.iana.org/domains/root/db/lol.html
lol

// london : Dot London Domains Limited
// https://www.iana.org/domains/root/db/london.html
london

// lotte : Lotte Holdings Co., Ltd.
// https://www.iana.org/domains/root/db/lotte.html
lotte

// lotto : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/lotto.html
lotto

// love : Waterford Limited
// https://www.iana.org/domains/root/db/love.html
love

// lpl : LPL Holdings, Inc.
// https://www.iana.org/domains/root/db/lpl.html
lpl

// lplfinancial : LPL Holdings, Inc.
// https://www.iana.org/domains/root/db/lplfinancial.html
lplfinancial

// ltd : Binky Moon, LLC
// https://www.iana.org/domains/root/db/ltd.html
ltd

// ltda : InterNetX, Corp
// https://www.iana.org/domains/root/db/ltda.html
ltda

// lundbeck : H. Lundbeck A/S
// https://www.iana.org/domains/root/db/lundbeck.html
lundbeck

// luxe : Registry Services, LLC
// https://www.iana.org/domains/root/db/luxe.html
luxe

// luxury : Luxury Partners, LLC
// https://www.iana.org/domains/root/db/luxury.html
luxury

// madrid : Comunidad de Madrid
// https://www.iana.org/domains/root/db/madrid.html
madrid

// maif : Mutuelle Assurance Instituteur France (MAIF)
// https://www.iana.org/domains/root/db/maif.html
maif

// maison : Binky Moon, LLC
// https://www.iana.org/domains/root/db/maison.html
maison

// makeup : XYZ.COM LLC
// https://www.iana.org/domains/root/db/makeup.html
makeup

// man : MAN Truck & Bus SE
// https://www.iana.org/domains/root/db/man.html
man

// management : Binky Moon, LLC
// https://www.iana.org/domains/root/db/management.html
management

// mango : PUNTO FA S.L.
// https://www.iana.org/domains/root/db/mango.html
mango

// map : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/map.html
map

// market : Dog Beach, LLC
// https://www.iana.org/domains/root/db/market.html
market

// marketing : Binky Moon, LLC
// https://www.iana.org/domains/root/db/marketing.html
marketing

// markets : Dog Beach, LLC
// https://www.iana.org/domains/root/db/markets.html
markets

// marriott : Marriott Worldwide Corporation
// https://www.iana.org/domains/root/db/marriott.html
marriott

// marshalls : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/marshalls.html
marshalls

// mattel : Mattel IT Services, Inc.
// https://www.iana.org/domains/root/db/mattel.html
mattel

// mba : Binky Moon, LLC
// https://www.iana.org/domains/root/db/mba.html
mba

// mckinsey : McKinsey Holdings, Inc.
// https://www.iana.org/domains/root/db/mckinsey.html
mckinsey

// med : Medistry LLC
// https://www.iana.org/domains/root/db/med.html
med

// media : Binky Moon, LLC
// https://www.iana.org/domains/root/db/media.html
media

// meet : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/meet.html
meet

// melbourne : The Crown in right of the State of Victoria, represented by its Department of State Development, Business and Innovation
// https://www.iana.org/domains/root/db/melbourne.html
melbourne

// meme : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/meme.html
meme

// memorial : Dog Beach, LLC
// https://www.iana.org/domains/root/db/memorial.html
memorial

// men : Exclusive Registry Limited
// https://www.iana.org/domains/root/db/men.html
men

// menu : Dot Menu Registry, LLC
// https://www.iana.org/domains/root/db/menu.html
menu

// merck : Merck Registry Holdings, Inc.
// https://www.iana.org/domains/root/db/merck.html
merck

// merckmsd : MSD Registry Holdings, Inc.
// https://www.iana.org/domains/root/db/merckmsd.html
merckmsd

// miami : Registry Services, LLC
// https://www.iana.org/domains/root/db/miami.html
miami

// microsoft : Microsoft Corporation
// https://www.iana.org/domains/root/db/microsoft.html
microsoft

// mini : Bayerische Motoren Werke Aktiengesellschaft
// https://www.iana.org/domains/root/db/mini.html
mini

// mint : Intuit Administrative Services, Inc.
// https://www.iana.org/domains/root/db/mint.html
mint

// mit : Massachusetts Institute of Technology
// https://www.iana.org/domains/root/db/mit.html
mit

// mitsubishi : Mitsubishi Corporation
// https://www.iana.org/domains/root/db/mitsubishi.html
mitsubishi

// mlb : MLB Advanced Media DH, LLC
// https://www.iana.org/domains/root/db/mlb.html
mlb

// mls : The Canadian Real Estate Association
// https://www.iana.org/domains/root/db/mls.html
mls

// mma : MMA IARD
// https://www.iana.org/domains/root/db/mma.html
mma

// mobile : Dish DBS Corporation
// https://www.iana.org/domains/root/db/mobile.html
mobile

// moda : Dog Beach, LLC
// https://www.iana.org/domains/root/db/moda.html
moda

// moe : Interlink Systems Innovation Institute K.K.
// https://www.iana.org/domains/root/db/moe.html
moe

// moi : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/moi.html
moi

// mom : XYZ.COM LLC
// https://www.iana.org/domains/root/db/mom.html
mom

// monash : Monash University
// https://www.iana.org/domains/root/db/monash.html
monash

// money : Binky Moon, LLC
// https://www.iana.org/domains/root/db/money.html
money

// monster : XYZ.COM LLC
// https://www.iana.org/domains/root/db/monster.html
monster

// mormon : IRI Domain Management, LLC
// https://www.iana.org/domains/root/db/mormon.html
mormon

// mortgage : Dog Beach, LLC
// https://www.iana.org/domains/root/db/mortgage.html
mortgage

// moscow : Foundation for Assistance for Internet Technologies and Infrastructure Development (FAITID)
// https://www.iana.org/domains/root/db/moscow.html
moscow

// moto : Motorola Trademark Holdings, LLC
// https://www.iana.org/domains/root/db/moto.html
moto

// motorcycles : XYZ.COM LLC
// https://www.iana.org/domains/root/db/motorcycles.html
motorcycles

// mov : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/mov.html
mov

// movie : Binky Moon, LLC
// https://www.iana.org/domains/root/db/movie.html
movie

// msd : MSD Registry Holdings, Inc.
// https://www.iana.org/domains/root/db/msd.html
msd

// mtn : MTN Dubai Limited
// https://www.iana.org/domains/root/db/mtn.html
mtn

// mtr : MTR Corporation Limited
// https://www.iana.org/domains/root/db/mtr.html
mtr

// music : DotMusic Limited
// https://www.iana.org/domains/root/db/music.html
music

// nab : National Australia Bank Limited
// https://www.iana.org/domains/root/db/nab.html
nab

// nagoya : GMO Registry, Inc.
// https://www.iana.org/domains/root/db/nagoya.html
nagoya

// navy : Dog Beach, LLC
// https://www.iana.org/domains/root/db/navy.html
navy

// nba : NBA REGISTRY, LLC
// https://www.iana.org/domains/root/db/nba.html
nba

// nec : NEC Corporation
// https://www.iana.org/domains/root/db/nec.html
nec

// netbank : COMMONWEALTH BANK OF AUSTRALIA
// https://www.iana.org/domains/root/db/netbank.html
netbank

// netflix : Netflix, Inc.
// https://www.iana.org/domains/root/db/netflix.html
netflix

// network : Binky Moon, LLC
// https://www.iana.org/domains/root/db/network.html
network

// neustar : NeuStar, Inc.
// https://www.iana.org/domains/root/db/neustar.html
neustar

// new : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/new.html
new

// news : Dog Beach, LLC
// https://www.iana.org/domains/root/db/news.html
news

// next : Next plc
// https://www.iana.org/domains/root/db/next.html
next

// nextdirect : Next plc
// https://www.iana.org/domains/root/db/nextdirect.html
nextdirect

// nexus : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/nexus.html
nexus

// nfl : NFL Reg Ops LLC
// https://www.iana.org/domains/root/db/nfl.html
nfl

// ngo : Public Interest Registry
// https://www.iana.org/domains/root/db/ngo.html
ngo

// nhk : Japan Broadcasting Corporation (NHK)
// https://www.iana.org/domains/root/db/nhk.html
nhk

// nico : DWANGO Co., Ltd.
// https://www.iana.org/domains/root/db/nico.html
nico

// nike : NIKE, Inc.
// https://www.iana.org/domains/root/db/nike.html
nike

// nikon : NIKON CORPORATION
// https://www.iana.org/domains/root/db/nikon.html
nikon

// ninja : Dog Beach, LLC
// https://www.iana.org/domains/root/db/ninja.html
ninja

// nissan : NISSAN MOTOR CO., LTD.
// https://www.iana.org/domains/root/db/nissan.html
nissan

// nissay : Nippon Life Insurance Company
// https://www.iana.org/domains/root/db/nissay.html
nissay

// nokia : Nokia Corporation
// https://www.iana.org/domains/root/db/nokia.html
nokia

// norton : Gen Digital Inc.
// https://www.iana.org/domains/root/db/norton.html
norton

// now : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/now.html
now

// nowruz
// https://www.iana.org/domains/root/db/nowruz.html
nowruz

// nowtv : Starbucks (HK) Limited
// https://www.iana.org/domains/root/db/nowtv.html
nowtv

// nra : National Rifle Association of America
// https://www.iana.org/domains/root/db/nra.html
nra

// nrw : Minds + Machines GmbH
// https://www.iana.org/domains/root/db/nrw.html
nrw

// ntt : NIPPON TELEGRAPH AND TELEPHONE CORPORATION
// https://www.iana.org/domains/root/db/ntt.html
ntt

// nyc : The City of New York by and through the New York City Department of Information Technology & Telecommunications
// https://www.iana.org/domains/root/db/nyc.html
nyc

// obi : OBI Group Holding SE & Co. KGaA
// https://www.iana.org/domains/root/db/obi.html
obi

// observer : Fegistry, LLC
// https://www.iana.org/domains/root/db/observer.html
observer

// office : Microsoft Corporation
// https://www.iana.org/domains/root/db/office.html
office

// okinawa : BRregistry, Inc.
// https://www.iana.org/domains/root/db/okinawa.html
okinawa

// olayan : Competrol (Luxembourg) Sarl
// https://www.iana.org/domains/root/db/olayan.html
olayan

// olayangroup : Competrol (Luxembourg) Sarl
// https://www.iana.org/domains/root/db/olayangroup.html
olayangroup

// ollo : Dish DBS Corporation
// https://www.iana.org/domains/root/db/ollo.html
ollo

// omega : The Swatch Group Ltd
// https://www.iana.org/domains/root/db/omega.html
omega

// one : One.com A/S
// https://www.iana.org/domains/root/db/one.html
one

// ong : Public Interest Registry
// https://www.iana.org/domains/root/db/ong.html
ong

// onl : iRegistry GmbH
// https://www.iana.org/domains/root/db/onl.html
onl

// online : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/online.html
online

// ooo : INFIBEAM AVENUES LIMITED
// https://www.iana.org/domains/root/db/ooo.html
ooo

// open : American Express Travel Related Services Company, Inc.
// https://www.iana.org/domains/root/db/open.html
open

// oracle : Oracle Corporation
// https://www.iana.org/domains/root/db/oracle.html
oracle

// orange : Orange Brand Services Limited
// https://www.iana.org/domains/root/db/orange.html
orange

// organic : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/organic.html
organic

// origins : The Estée Lauder Companies Inc.
// https://www.iana.org/domains/root/db/origins.html
origins

// osaka : Osaka Registry Co., Ltd.
// https://www.iana.org/domains/root/db/osaka.html
osaka

// otsuka : Otsuka Holdings Co., Ltd.
// https://www.iana.org/domains/root/db/otsuka.html
otsuka

// ott : Dish DBS Corporation
// https://www.iana.org/domains/root/db/ott.html
ott

// ovh : MédiaBC
// https://www.iana.org/domains/root/db/ovh.html
ovh

// page : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/page.html
page

// panasonic : Panasonic Holdings Corporation
// https://www.iana.org/domains/root/db/panasonic.html
panasonic

// paris : City of Paris
// https://www.iana.org/domains/root/db/paris.html
paris

// pars
// https://www.iana.org/domains/root/db/pars.html
pars

// partners : Binky Moon, LLC
// https://www.iana.org/domains/root/db/partners.html
partners

// parts : Binky Moon, LLC
// https://www.iana.org/domains/root/db/parts.html
parts

// party : Blue Sky Registry Limited
// https://www.iana.org/domains/root/db/party.html
party

// pay : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/pay.html
pay

// pccw : PCCW Enterprises Limited
// https://www.iana.org/domains/root/db/pccw.html
pccw

// pet : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/pet.html
pet

// pfizer : Pfizer Inc.
// https://www.iana.org/domains/root/db/pfizer.html
pfizer

// pharmacy : National Association of Boards of Pharmacy
// https://www.iana.org/domains/root/db/pharmacy.html
pharmacy

// phd : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/phd.html
phd

// philips : Koninklijke Philips N.V.
// https://www.iana.org/domains/root/db/philips.html
philips

// phone : Dish DBS Corporation
// https://www.iana.org/domains/root/db/phone.html
phone

// photo : Registry Services, LLC
// https://www.iana.org/domains/root/db/photo.html
photo

// photography : Binky Moon, LLC
// https://www.iana.org/domains/root/db/photography.html
photography

// photos : Binky Moon, LLC
// https://www.iana.org/domains/root/db/photos.html
photos

// physio : PhysBiz Pty Ltd
// https://www.iana.org/domains/root/db/physio.html
physio

// pics : XYZ.COM LLC
// https://www.iana.org/domains/root/db/pics.html
pics

// pictet : Banque Pictet & Cie SA
// https://www.iana.org/domains/root/db/pictet.html
pictet

// pictures : Binky Moon, LLC
// https://www.iana.org/domains/root/db/pictures.html
pictures

// pid : Top Level Spectrum, Inc.
// https://www.iana.org/domains/root/db/pid.html
pid

// pin : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/pin.html
pin

// ping : Ping Registry Provider, Inc.
// https://www.iana.org/domains/root/db/ping.html
ping

// pink : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/pink.html
pink

// pioneer : Pioneer Corporation
// https://www.iana.org/domains/root/db/pioneer.html
pioneer

// pizza : Binky Moon, LLC
// https://www.iana.org/domains/root/db/pizza.html
pizza

// place : Binky Moon, LLC
// https://www.iana.org/domains/root/db/place.html
place

// play : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/play.html
play

// playstation : Sony Interactive Entertainment Inc.
// https://www.iana.org/domains/root/db/playstation.html
playstation

// plumbing : Binky Moon, LLC
// https://www.iana.org/domains/root/db/plumbing.html
plumbing

// plus : Binky Moon, LLC
// https://www.iana.org/domains/root/db/plus.html
plus

// pnc : PNC Domain Co., LLC
// https://www.iana.org/domains/root/db/pnc.html
pnc

// pohl : Deutsche Vermögensberatung Aktiengesellschaft DVAG
// https://www.iana.org/domains/root/db/pohl.html
pohl

// poker : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/poker.html
poker

// politie : Politie Nederland
// https://www.iana.org/domains/root/db/politie.html
politie

// porn : ICM Registry PN LLC
// https://www.iana.org/domains/root/db/porn.html
porn

// praxi : Praxi S.p.A.
// https://www.iana.org/domains/root/db/praxi.html
praxi

// press : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/press.html
press

// prime : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/prime.html
prime

// prod : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/prod.html
prod

// productions : Binky Moon, LLC
// https://www.iana.org/domains/root/db/productions.html
productions

// prof : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/prof.html
prof

// progressive : Progressive Casualty Insurance Company
// https://www.iana.org/domains/root/db/progressive.html
progressive

// promo : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/promo.html
promo

// properties : Binky Moon, LLC
// https://www.iana.org/domains/root/db/properties.html
properties

// property : Digital Property Infrastructure Limited
// https://www.iana.org/domains/root/db/property.html
property

// protection : XYZ.COM LLC
// https://www.iana.org/domains/root/db/protection.html
protection

// pru : Prudential Financial, Inc.
// https://www.iana.org/domains/root/db/pru.html
pru

// prudential : Prudential Financial, Inc.
// https://www.iana.org/domains/root/db/prudential.html
prudential

// pub : Dog Beach, LLC
// https://www.iana.org/domains/root/db/pub.html
pub

// pwc : PricewaterhouseCoopers LLP
// https://www.iana.org/domains/root/db/pwc.html
pwc

// qpon : dotQPON LLC
// https://www.iana.org/domains/root/db/qpon.html
qpon

// quebec : PointQuébec Inc
// https://www.iana.org/domains/root/db/quebec.html
quebec

// quest : XYZ.COM LLC
// https://www.iana.org/domains/root/db/quest.html
quest

// racing : Premier Registry Limited
// https://www.iana.org/domains/root/db/racing.html
racing

// radio : European Broadcasting Union (EBU)
// https://www.iana.org/domains/root/db/radio.html
radio

// read : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/read.html
read

// realestate : dotRealEstate LLC
// https://www.iana.org/domains/root/db/realestate.html
realestate

// realtor : Real Estate Domains LLC
// https://www.iana.org/domains/root/db/realtor.html
realtor

// realty : Waterford Limited
// https://www.iana.org/domains/root/db/realty.html
realty

// recipes : Binky Moon, LLC
// https://www.iana.org/domains/root/db/recipes.html
recipes

// red : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/red.html
red

// redumbrella : Travelers TLD, LLC
// https://www.iana.org/domains/root/db/redumbrella.html
redumbrella

// rehab : Dog Beach, LLC
// https://www.iana.org/domains/root/db/rehab.html
rehab

// reise : Binky Moon, LLC
// https://www.iana.org/domains/root/db/reise.html
reise

// reisen : Binky Moon, LLC
// https://www.iana.org/domains/root/db/reisen.html
reisen

// reit : National Association of Real Estate Investment Trusts, Inc.
// https://www.iana.org/domains/root/db/reit.html
reit

// reliance : Reliance Industries Limited
// https://www.iana.org/domains/root/db/reliance.html
reliance

// ren : ZDNS International Limited
// https://www.iana.org/domains/root/db/ren.html
ren

// rent : XYZ.COM LLC
// https://www.iana.org/domains/root/db/rent.html
rent

// rentals : Binky Moon, LLC
// https://www.iana.org/domains/root/db/rentals.html
rentals

// repair : Binky Moon, LLC
// https://www.iana.org/domains/root/db/repair.html
repair

// report : Binky Moon, LLC
// https://www.iana.org/domains/root/db/report.html
report

// republican : Dog Beach, LLC
// https://www.iana.org/domains/root/db/republican.html
republican

// rest : Punto 2012 Sociedad Anonima Promotora de Inversion de Capital Variable
// https://www.iana.org/domains/root/db/rest.html
rest

// restaurant : Binky Moon, LLC
// https://www.iana.org/domains/root/db/restaurant.html
restaurant

// review : dot Review Limited
// https://www.iana.org/domains/root/db/review.html
review

// reviews : Dog Beach, LLC
// https://www.iana.org/domains/root/db/reviews.html
reviews

// rexroth : Robert Bosch GMBH
// https://www.iana.org/domains/root/db/rexroth.html
rexroth

// rich : iRegistry GmbH
// https://www.iana.org/domains/root/db/rich.html
rich

// richardli : Pacific Century Asset Management (HK) Limited
// https://www.iana.org/domains/root/db/richardli.html
richardli

// ricoh : Ricoh Company, Ltd.
// https://www.iana.org/domains/root/db/ricoh.html
ricoh

// ril : Reliance Industries Limited
// https://www.iana.org/domains/root/db/ril.html
ril

// rio : Empresa Municipal de Informática SA - IPLANRIO
// https://www.iana.org/domains/root/db/rio.html
rio

// rip : Dog Beach, LLC
// https://www.iana.org/domains/root/db/rip.html
rip

// rocks : Dog Beach, LLC
// https://www.iana.org/domains/root/db/rocks.html
rocks

// rodeo : Registry Services, LLC
// https://www.iana.org/domains/root/db/rodeo.html
rodeo

// rogers : Rogers Communications Canada Inc.
// https://www.iana.org/domains/root/db/rogers.html
rogers

// room : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/room.html
room

// rsvp : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/rsvp.html
rsvp

// rugby : World Rugby Strategic Developments Limited
// https://www.iana.org/domains/root/db/rugby.html
rugby

// ruhr : dotSaarland GmbH
// https://www.iana.org/domains/root/db/ruhr.html
ruhr

// run : Binky Moon, LLC
// https://www.iana.org/domains/root/db/run.html
run

// rwe : RWE AG
// https://www.iana.org/domains/root/db/rwe.html
rwe

// ryukyu : BRregistry, Inc.
// https://www.iana.org/domains/root/db/ryukyu.html
ryukyu

// saarland : dotSaarland GmbH
// https://www.iana.org/domains/root/db/saarland.html
saarland

// safe : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/safe.html
safe

// safety : Safety Registry Services, LLC.
// https://www.iana.org/domains/root/db/safety.html
safety

// sakura : SAKURA Internet Inc.
// https://www.iana.org/domains/root/db/sakura.html
sakura

// sale : Dog Beach, LLC
// https://www.iana.org/domains/root/db/sale.html
sale

// salon : Binky Moon, LLC
// https://www.iana.org/domains/root/db/salon.html
salon

// samsclub : Wal-Mart Stores, Inc.
// https://www.iana.org/domains/root/db/samsclub.html
samsclub

// samsung : SAMSUNG SDS CO., LTD
// https://www.iana.org/domains/root/db/samsung.html
samsung

// sandvik : Sandvik AB
// https://www.iana.org/domains/root/db/sandvik.html
sandvik

// sandvikcoromant : Sandvik AB
// https://www.iana.org/domains/root/db/sandvikcoromant.html
sandvikcoromant

// sanofi : Sanofi
// https://www.iana.org/domains/root/db/sanofi.html
sanofi

// sap : SAP AG
// https://www.iana.org/domains/root/db/sap.html
sap

// sarl : Binky Moon, LLC
// https://www.iana.org/domains/root/db/sarl.html
sarl

// sas : Research IP LLC
// https://www.iana.org/domains/root/db/sas.html
sas

// save : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/save.html
save

// saxo : Saxo Bank A/S
// https://www.iana.org/domains/root/db/saxo.html
saxo

// sbi : STATE BANK OF INDIA
// https://www.iana.org/domains/root/db/sbi.html
sbi

// sbs : ShortDot SA
// https://www.iana.org/domains/root/db/sbs.html
sbs

// scb : The Siam Commercial Bank Public Company Limited ("SCB")
// https://www.iana.org/domains/root/db/scb.html
scb

// schaeffler : Schaeffler Technologies AG & Co. KG
// https://www.iana.org/domains/root/db/schaeffler.html
schaeffler

// schmidt : SCHMIDT GROUPE S.A.S.
// https://www.iana.org/domains/root/db/schmidt.html
schmidt

// scholarships : Scholarships.com, LLC
// https://www.iana.org/domains/root/db/scholarships.html
scholarships

// school : Binky Moon, LLC
// https://www.iana.org/domains/root/db/school.html
school

// schule : Binky Moon, LLC
// https://www.iana.org/domains/root/db/schule.html
schule

// schwarz : Schwarz Domains und Services GmbH & Co. KG
// https://www.iana.org/domains/root/db/schwarz.html
schwarz

// science : dot Science Limited
// https://www.iana.org/domains/root/db/science.html
science

// scot : Dot Scot Registry Limited
// https://www.iana.org/domains/root/db/scot.html
scot

// search : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/search.html
search

// seat : SEAT, S.A. (Sociedad Unipersonal)
// https://www.iana.org/domains/root/db/seat.html
seat

// secure : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/secure.html
secure

// security : XYZ.COM LLC
// https://www.iana.org/domains/root/db/security.html
security

// seek : Seek Limited
// https://www.iana.org/domains/root/db/seek.html
seek

// select : Registry Services, LLC
// https://www.iana.org/domains/root/db/select.html
select

// sener : Sener Ingeniería y Sistemas, S.A.
// https://www.iana.org/domains/root/db/sener.html
sener

// services : Binky Moon, LLC
// https://www.iana.org/domains/root/db/services.html
services

// seven : Seven West Media Ltd
// https://www.iana.org/domains/root/db/seven.html
seven

// sew : SEW-EURODRIVE GmbH & Co KG
// https://www.iana.org/domains/root/db/sew.html
sew

// sex : ICM Registry SX LLC
// https://www.iana.org/domains/root/db/sex.html
sex

// sexy : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/sexy.html
sexy

// sfr : Societe Francaise du Radiotelephone - SFR
// https://www.iana.org/domains/root/db/sfr.html
sfr

// shangrila : Shangri‐La International Hotel Management Limited
// https://www.iana.org/domains/root/db/shangrila.html
shangrila

// sharp : Sharp Corporation
// https://www.iana.org/domains/root/db/sharp.html
sharp

// shell : Shell Information Technology International Inc
// https://www.iana.org/domains/root/db/shell.html
shell

// shia
// https://www.iana.org/domains/root/db/shia.html
shia

// shiksha : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/shiksha.html
shiksha

// shoes : Binky Moon, LLC
// https://www.iana.org/domains/root/db/shoes.html
shoes

// shop : GMO Registry, Inc.
// https://www.iana.org/domains/root/db/shop.html
shop

// shopping : Binky Moon, LLC
// https://www.iana.org/domains/root/db/shopping.html
shopping

// shouji : Beijing Qihu Keji Co., Ltd.
// https://www.iana.org/domains/root/db/shouji.html
shouji

// show : Binky Moon, LLC
// https://www.iana.org/domains/root/db/show.html
show

// silk : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/silk.html
silk

// sina : Sina Corporation
// https://www.iana.org/domains/root/db/sina.html
sina

// singles : Binky Moon, LLC
// https://www.iana.org/domains/root/db/singles.html
singles

// site : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/site.html
site

// ski : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/ski.html
ski

// skin : XYZ.COM LLC
// https://www.iana.org/domains/root/db/skin.html
skin

// sky : Sky UK Limited
// https://www.iana.org/domains/root/db/sky.html
sky

// skype : Microsoft Corporation
// https://www.iana.org/domains/root/db/skype.html
skype

// sling : DISH Technologies L.L.C.
// https://www.iana.org/domains/root/db/sling.html
sling

// smart : Smart Communications, Inc. (SMART)
// https://www.iana.org/domains/root/db/smart.html
smart

// smile : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/smile.html
smile

// sncf : Société Nationale SNCF
// https://www.iana.org/domains/root/db/sncf.html
sncf

// soccer : Binky Moon, LLC
// https://www.iana.org/domains/root/db/soccer.html
soccer

// social : Dog Beach, LLC
// https://www.iana.org/domains/root/db/social.html
social

// softbank : SoftBank Group Corp.
// https://www.iana.org/domains/root/db/softbank.html
softbank

// software : Dog Beach, LLC
// https://www.iana.org/domains/root/db/software.html
software

// sohu : Sohu.com Limited
// https://www.iana.org/domains/root/db/sohu.html
sohu

// solar : Binky Moon, LLC
// https://www.iana.org/domains/root/db/solar.html
solar

// solutions : Binky Moon, LLC
// https://www.iana.org/domains/root/db/solutions.html
solutions

// song : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/song.html
song

// sony : Sony Corporation
// https://www.iana.org/domains/root/db/sony.html
sony

// soy : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/soy.html
soy

// spa : Asia Spa and Wellness Promotion Council Limited
// https://www.iana.org/domains/root/db/spa.html
spa

// space : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/space.html
space

// sport : SportAccord
// https://www.iana.org/domains/root/db/sport.html
sport

// spot : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/spot.html
spot

// srl : InterNetX, Corp
// https://www.iana.org/domains/root/db/srl.html
srl

// stada : STADA Arzneimittel AG
// https://www.iana.org/domains/root/db/stada.html
stada

// staples : Staples, Inc.
// https://www.iana.org/domains/root/db/staples.html
staples

// star : Star India Private Limited
// https://www.iana.org/domains/root/db/star.html
star

// statebank : STATE BANK OF INDIA
// https://www.iana.org/domains/root/db/statebank.html
statebank

// statefarm : State Farm Mutual Automobile Insurance Company
// https://www.iana.org/domains/root/db/statefarm.html
statefarm

// stc : Saudi Telecom Company
// https://www.iana.org/domains/root/db/stc.html
stc

// stcgroup : Saudi Telecom Company
// https://www.iana.org/domains/root/db/stcgroup.html
stcgroup

// stockholm : Stockholms kommun
// https://www.iana.org/domains/root/db/stockholm.html
stockholm

// storage : XYZ.COM LLC
// https://www.iana.org/domains/root/db/storage.html
storage

// store : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/store.html
store

// stream : dot Stream Limited
// https://www.iana.org/domains/root/db/stream.html
stream

// studio : Dog Beach, LLC
// https://www.iana.org/domains/root/db/studio.html
studio

// study : Registry Services, LLC
// https://www.iana.org/domains/root/db/study.html
study

// style : Binky Moon, LLC
// https://www.iana.org/domains/root/db/style.html
style

// sucks : Vox Populi Registry Ltd.
// https://www.iana.org/domains/root/db/sucks.html
sucks

// supplies : Binky Moon, LLC
// https://www.iana.org/domains/root/db/supplies.html
supplies

// supply : Binky Moon, LLC
// https://www.iana.org/domains/root/db/supply.html
supply

// support : Binky Moon, LLC
// https://www.iana.org/domains/root/db/support.html
support

// surf : Registry Services, LLC
// https://www.iana.org/domains/root/db/surf.html
surf

// surgery : Binky Moon, LLC
// https://www.iana.org/domains/root/db/surgery.html
surgery

// suzuki : SUZUKI MOTOR CORPORATION
// https://www.iana.org/domains/root/db/suzuki.html
suzuki

// swatch : The Swatch Group Ltd
// https://www.iana.org/domains/root/db/swatch.html
swatch

// swiss : Swiss Confederation
// https://www.iana.org/domains/root/db/swiss.html
swiss

// sydney : State of New South Wales, Department of Premier and Cabinet
// https://www.iana.org/domains/root/db/sydney.html
sydney

// systems : Binky Moon, LLC
// https://www.iana.org/domains/root/db/systems.html
systems

// tab : Tabcorp Holdings Limited
// https://www.iana.org/domains/root/db/tab.html
tab

// taipei : Taipei City Government
// https://www.iana.org/domains/root/db/taipei.html
taipei

// talk : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/talk.html
talk

// taobao : Alibaba Group Holding Limited
// https://www.iana.org/domains/root/db/taobao.html
taobao

// target : Target Domain Holdings, LLC
// https://www.iana.org/domains/root/db/target.html
target

// tatamotors : Tata Motors Ltd
// https://www.iana.org/domains/root/db/tatamotors.html
tatamotors

// tatar : Limited Liability Company "Coordination Center of Regional Domain of Tatarstan Republic"
// https://www.iana.org/domains/root/db/tatar.html
tatar

// tattoo : Registry Services, LLC
// https://www.iana.org/domains/root/db/tattoo.html
tattoo

// tax : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tax.html
tax

// taxi : Binky Moon, LLC
// https://www.iana.org/domains/root/db/taxi.html
taxi

// tci
// https://www.iana.org/domains/root/db/tci.html
tci

// tdk : TDK Corporation
// https://www.iana.org/domains/root/db/tdk.html
tdk

// team : Binky Moon, LLC
// https://www.iana.org/domains/root/db/team.html
team

// tech : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/tech.html
tech

// technology : Binky Moon, LLC
// https://www.iana.org/domains/root/db/technology.html
technology

// temasek : Temasek Holdings (Private) Limited
// https://www.iana.org/domains/root/db/temasek.html
temasek

// tennis : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tennis.html
tennis

// teva : Teva Pharmaceutical Industries Limited
// https://www.iana.org/domains/root/db/teva.html
teva

// thd : Home Depot Product Authority, LLC
// https://www.iana.org/domains/root/db/thd.html
thd

// theater : Binky Moon, LLC
// https://www.iana.org/domains/root/db/theater.html
theater

// theatre : XYZ.COM LLC
// https://www.iana.org/domains/root/db/theatre.html
theatre

// tiaa : Teachers Insurance and Annuity Association of America
// https://www.iana.org/domains/root/db/tiaa.html
tiaa

// tickets : XYZ.COM LLC
// https://www.iana.org/domains/root/db/tickets.html
tickets

// tienda : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tienda.html
tienda

// tips : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tips.html
tips

// tires : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tires.html
tires

// tirol : punkt Tirol GmbH
// https://www.iana.org/domains/root/db/tirol.html
tirol

// tjmaxx : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/tjmaxx.html
tjmaxx

// tjx : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/tjx.html
tjx

// tkmaxx : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/tkmaxx.html
tkmaxx

// tmall : Alibaba Group Holding Limited
// https://www.iana.org/domains/root/db/tmall.html
tmall

// today : Binky Moon, LLC
// https://www.iana.org/domains/root/db/today.html
today

// tokyo : GMO Registry, Inc.
// https://www.iana.org/domains/root/db/tokyo.html
tokyo

// tools : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tools.html
tools

// top : .TOP Registry
// https://www.iana.org/domains/root/db/top.html
top

// toray : Toray Industries, Inc.
// https://www.iana.org/domains/root/db/toray.html
toray

// toshiba : TOSHIBA Corporation
// https://www.iana.org/domains/root/db/toshiba.html
toshiba

// total : TotalEnergies SE
// https://www.iana.org/domains/root/db/total.html
total

// tours : Binky Moon, LLC
// https://www.iana.org/domains/root/db/tours.html
tours

// town : Binky Moon, LLC
// https://www.iana.org/domains/root/db/town.html
town

// toyota : TOYOTA MOTOR CORPORATION
// https://www.iana.org/domains/root/db/toyota.html
toyota

// toys : Binky Moon, LLC
// https://www.iana.org/domains/root/db/toys.html
toys

// trade : Elite Registry Limited
// https://www.iana.org/domains/root/db/trade.html
trade

// trading : Dog Beach, LLC
// https://www.iana.org/domains/root/db/trading.html
trading

// training : Binky Moon, LLC
// https://www.iana.org/domains/root/db/training.html
training

// travel : Dog Beach, LLC
// https://www.iana.org/domains/root/db/travel.html
travel

// travelers : Travelers TLD, LLC
// https://www.iana.org/domains/root/db/travelers.html
travelers

// travelersinsurance : Travelers TLD, LLC
// https://www.iana.org/domains/root/db/travelersinsurance.html
travelersinsurance

// trust : Internet Naming Company LLC
// https://www.iana.org/domains/root/db/trust.html
trust

// trv : Travelers TLD, LLC
// https://www.iana.org/domains/root/db/trv.html
trv

// tube : Latin American Telecom LLC
// https://www.iana.org/domains/root/db/tube.html
tube

// tui : TUI AG
// https://www.iana.org/domains/root/db/tui.html
tui

// tunes : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/tunes.html
tunes

// tushu : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/tushu.html
tushu

// tvs : T V SUNDRAM IYENGAR  & SONS LIMITED
// https://www.iana.org/domains/root/db/tvs.html
tvs

// ubank : National Australia Bank Limited
// https://www.iana.org/domains/root/db/ubank.html
ubank

// ubs : UBS AG
// https://www.iana.org/domains/root/db/ubs.html
ubs

// unicom : China United Network Communications Corporation Limited
// https://www.iana.org/domains/root/db/unicom.html
unicom

// university : Binky Moon, LLC
// https://www.iana.org/domains/root/db/university.html
university

// uno : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/uno.html
uno

// uol : UBN INTERNET LTDA.
// https://www.iana.org/domains/root/db/uol.html
uol

// ups : UPS Market Driver, Inc.
// https://www.iana.org/domains/root/db/ups.html
ups

// vacations : Binky Moon, LLC
// https://www.iana.org/domains/root/db/vacations.html
vacations

// vana : D3 Registry LLC
// https://www.iana.org/domains/root/db/vana.html
vana

// vanguard : The Vanguard Group, Inc.
// https://www.iana.org/domains/root/db/vanguard.html
vanguard

// vegas : Dot Vegas, Inc.
// https://www.iana.org/domains/root/db/vegas.html
vegas

// ventures : Binky Moon, LLC
// https://www.iana.org/domains/root/db/ventures.html
ventures

// verisign : VeriSign, Inc.
// https://www.iana.org/domains/root/db/verisign.html
verisign

// versicherung : tldbox GmbH
// https://www.iana.org/domains/root/db/versicherung.html
versicherung

// vet : Dog Beach, LLC
// https://www.iana.org/domains/root/db/vet.html
vet

// viajes : Binky Moon, LLC
// https://www.iana.org/domains/root/db/viajes.html
viajes

// video : Dog Beach, LLC
// https://www.iana.org/domains/root/db/video.html
video

// vig : VIENNA INSURANCE GROUP AG Wiener Versicherung Gruppe
// https://www.iana.org/domains/root/db/vig.html
vig

// viking : Viking River Cruises (Bermuda) Ltd.
// https://www.iana.org/domains/root/db/viking.html
viking

// villas : Binky Moon, LLC
// https://www.iana.org/domains/root/db/villas.html
villas

// vin : Binky Moon, LLC
// https://www.iana.org/domains/root/db/vin.html
vin

// vip : Registry Services, LLC
// https://www.iana.org/domains/root/db/vip.html
vip

// virgin : Virgin Enterprises Limited
// https://www.iana.org/domains/root/db/virgin.html
virgin

// visa : Visa Worldwide Pte. Limited
// https://www.iana.org/domains/root/db/visa.html
visa

// vision : Binky Moon, LLC
// https://www.iana.org/domains/root/db/vision.html
vision

// viva : Saudi Telecom Company
// https://www.iana.org/domains/root/db/viva.html
viva

// vivo : Telefonica Brasil S.A.
// https://www.iana.org/domains/root/db/vivo.html
vivo

// vlaanderen : DNS.be vzw
// https://www.iana.org/domains/root/db/vlaanderen.html
vlaanderen

// vodka : Registry Services, LLC
// https://www.iana.org/domains/root/db/vodka.html
vodka

// volvo : Volvo Holding Sverige Aktiebolag
// https://www.iana.org/domains/root/db/volvo.html
volvo

// vote : Monolith Registry LLC
// https://www.iana.org/domains/root/db/vote.html
vote

// voting : Valuetainment Corp.
// https://www.iana.org/domains/root/db/voting.html
voting

// voto : Monolith Registry LLC
// https://www.iana.org/domains/root/db/voto.html
voto

// voyage : Binky Moon, LLC
// https://www.iana.org/domains/root/db/voyage.html
voyage

// wales : Nominet UK
// https://www.iana.org/domains/root/db/wales.html
wales

// walmart : Wal-Mart Stores, Inc.
// https://www.iana.org/domains/root/db/walmart.html
walmart

// walter : Sandvik AB
// https://www.iana.org/domains/root/db/walter.html
walter

// wang : Zodiac Wang Limited
// https://www.iana.org/domains/root/db/wang.html
wang

// wanggou : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/wanggou.html
wanggou

// watch : Binky Moon, LLC
// https://www.iana.org/domains/root/db/watch.html
watch

// watches : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/watches.html
watches

// weather : International Business Machines Corporation
// https://www.iana.org/domains/root/db/weather.html
weather

// weatherchannel : The Weather Company, LLC
// https://www.iana.org/domains/root/db/weatherchannel.html
weatherchannel

// webcam : dot Webcam Limited
// https://www.iana.org/domains/root/db/webcam.html
webcam

// weber : Saint-Gobain Weber SA
// https://www.iana.org/domains/root/db/weber.html
weber

// website : Radix Technologies Inc SEZC
// https://www.iana.org/domains/root/db/website.html
website

// wed
// https://www.iana.org/domains/root/db/wed.html
wed

// wedding : Registry Services, LLC
// https://www.iana.org/domains/root/db/wedding.html
wedding

// weibo : Sina Corporation
// https://www.iana.org/domains/root/db/weibo.html
weibo

// weir : Weir Group IP Limited
// https://www.iana.org/domains/root/db/weir.html
weir

// whoswho : Who's Who Registry
// https://www.iana.org/domains/root/db/whoswho.html
whoswho

// wien : punkt.wien GmbH
// https://www.iana.org/domains/root/db/wien.html
wien

// wiki : Registry Services, LLC
// https://www.iana.org/domains/root/db/wiki.html
wiki

// williamhill : William Hill Organization Limited
// https://www.iana.org/domains/root/db/williamhill.html
williamhill

// win : First Registry Limited
// https://www.iana.org/domains/root/db/win.html
win

// windows : Microsoft Corporation
// https://www.iana.org/domains/root/db/windows.html
windows

// wine : Binky Moon, LLC
// https://www.iana.org/domains/root/db/wine.html
wine

// winners : The TJX Companies, Inc.
// https://www.iana.org/domains/root/db/winners.html
winners

// wme : William Morris Endeavor Entertainment, LLC
// https://www.iana.org/domains/root/db/wme.html
wme

// wolterskluwer : Wolters Kluwer N.V.
// https://www.iana.org/domains/root/db/wolterskluwer.html
wolterskluwer

// woodside : Woodside Petroleum Limited
// https://www.iana.org/domains/root/db/woodside.html
woodside

// work : Registry Services, LLC
// https://www.iana.org/domains/root/db/work.html
work

// works : Binky Moon, LLC
// https://www.iana.org/domains/root/db/works.html
works

// world : Binky Moon, LLC
// https://www.iana.org/domains/root/db/world.html
world

// wow : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/wow.html
wow

// wtc : World Trade Centers Association, Inc.
// https://www.iana.org/domains/root/db/wtc.html
wtc

// wtf : Binky Moon, LLC
// https://www.iana.org/domains/root/db/wtf.html
wtf

// xbox : Microsoft Corporation
// https://www.iana.org/domains/root/db/xbox.html
xbox

// xerox : Xerox DNHC LLC
// https://www.iana.org/domains/root/db/xerox.html
xerox

// xihuan : Beijing Qihu Keji Co., Ltd.
// https://www.iana.org/domains/root/db/xihuan.html
xihuan

// xin : Elegant Leader Limited
// https://www.iana.org/domains/root/db/xin.html
xin

// xn--11b4c3d : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--11b4c3d.html
कॉम

// xn--1ck2e1b : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--1ck2e1b.html
セール

// xn--1qqw23a : Guangzhou YU Wei Information Technology Co., Ltd.
// https://www.iana.org/domains/root/db/xn--1qqw23a.html
佛山

// xn--30rr7y : Excellent First Limited
// https://www.iana.org/domains/root/db/xn--30rr7y.html
慈善

// xn--3bst00m : Eagle Horizon Limited
// https://www.iana.org/domains/root/db/xn--3bst00m.html
集团

// xn--3ds443g : Beijing TLD Registry Technology Limited
// https://www.iana.org/domains/root/db/xn--3ds443g.html
在线

// xn--3pxu8k : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--3pxu8k.html
点看

// xn--42c2d9a : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--42c2d9a.html
คอม

// xn--45q11c : Zodiac Gemini Ltd
// https://www.iana.org/domains/root/db/xn--45q11c.html
八卦

// xn--4gbrim : Helium TLDs Ltd
// https://www.iana.org/domains/root/db/xn--4gbrim.html
موقع

// xn--55qw42g : China Organizational Name Administration Center
// https://www.iana.org/domains/root/db/xn--55qw42g.html
公益

// xn--55qx5d : China Internet Network Information Center (CNNIC)
// https://www.iana.org/domains/root/db/xn--55qx5d.html
公司

// xn--5su34j936bgsg : Shangri‐La International Hotel Management Limited
// https://www.iana.org/domains/root/db/xn--5su34j936bgsg.html
香格里拉

// xn--5tzm5g : Global Website TLD Asia Limited
// https://www.iana.org/domains/root/db/xn--5tzm5g.html
网站

// xn--6frz82g : Identity Digital Domains Limited
// https://www.iana.org/domains/root/db/xn--6frz82g.html
移动

// xn--6qq986b3xl : Tycoon Treasure Limited
// https://www.iana.org/domains/root/db/xn--6qq986b3xl.html
我爱你

// xn--80adxhks : Foundation for Assistance for Internet Technologies and Infrastructure Development (FAITID)
// https://www.iana.org/domains/root/db/xn--80adxhks.html
москва

// xn--80aqecdr1a : Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)
// https://www.iana.org/domains/root/db/xn--80aqecdr1a.html
католик

// xn--80asehdb : CORE Association
// https://www.iana.org/domains/root/db/xn--80asehdb.html
онлайн

// xn--80aswg : CORE Association
// https://www.iana.org/domains/root/db/xn--80aswg.html
сайт

// xn--8y0a063a : China United Network Communications Corporation Limited
// https://www.iana.org/domains/root/db/xn--8y0a063a.html
联通

// xn--9dbq2a : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--9dbq2a.html
קום

// xn--9et52u : RISE VICTORY LIMITED
// https://www.iana.org/domains/root/db/xn--9et52u.html
时尚

// xn--9krt00a : Sina Corporation
// https://www.iana.org/domains/root/db/xn--9krt00a.html
微博

// xn--b4w605ferd : Temasek Holdings (Private) Limited
// https://www.iana.org/domains/root/db/xn--b4w605ferd.html
淡马锡

// xn--bck1b9a5dre4c : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--bck1b9a5dre4c.html
ファッション

// xn--c1avg : Public Interest Registry
// https://www.iana.org/domains/root/db/xn--c1avg.html
орг

// xn--c2br7g : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--c2br7g.html
नेट

// xn--cck2b3b : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--cck2b3b.html
ストア

// xn--cckwcxetd : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--cckwcxetd.html
アマゾン

// xn--cg4bki : SAMSUNG SDS CO., LTD
// https://www.iana.org/domains/root/db/xn--cg4bki.html
삼성

// xn--czr694b : Internet DotTrademark Organisation Limited
// https://www.iana.org/domains/root/db/xn--czr694b.html
商标

// xn--czrs0t : Binky Moon, LLC
// https://www.iana.org/domains/root/db/xn--czrs0t.html
商店

// xn--czru2d : Zodiac Aquarius Limited
// https://www.iana.org/domains/root/db/xn--czru2d.html
商城

// xn--d1acj3b : The Foundation for Network Initiatives “The Smart Internet”
// https://www.iana.org/domains/root/db/xn--d1acj3b.html
дети

// xn--eckvdtc9d : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--eckvdtc9d.html
ポイント

// xn--efvy88h : Guangzhou YU Wei Information Technology Co., Ltd.
// https://www.iana.org/domains/root/db/xn--efvy88h.html
新闻

// xn--fct429k : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--fct429k.html
家電

// xn--fhbei : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--fhbei.html
كوم

// xn--fiq228c5hs : TLD REGISTRY LIMITED OY
// https://www.iana.org/domains/root/db/xn--fiq228c5hs.html
中文网

// xn--fiq64b : CITIC Group Corporation
// https://www.iana.org/domains/root/db/xn--fiq64b.html
中信

// xn--fjq720a : Binky Moon, LLC
// https://www.iana.org/domains/root/db/xn--fjq720a.html
娱乐

// xn--flw351e : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/xn--flw351e.html
谷歌

// xn--fzys8d69uvgm : PCCW Enterprises Limited
// https://www.iana.org/domains/root/db/xn--fzys8d69uvgm.html
電訊盈科

// xn--g2xx48c : Nawang Heli(Xiamen) Network Service Co., LTD.
// https://www.iana.org/domains/root/db/xn--g2xx48c.html
购物

// xn--gckr3f0f : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--gckr3f0f.html
クラウド

// xn--gk3at1e : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--gk3at1e.html
通販

// xn--hxt814e : Zodiac Taurus Limited
// https://www.iana.org/domains/root/db/xn--hxt814e.html
网店

// xn--i1b6b1a6a2e : Public Interest Registry
// https://www.iana.org/domains/root/db/xn--i1b6b1a6a2e.html
संगठन

// xn--imr513n : Internet DotTrademark Organisation Limited
// https://www.iana.org/domains/root/db/xn--imr513n.html
餐厅

// xn--io0a7i : China Internet Network Information Center (CNNIC)
// https://www.iana.org/domains/root/db/xn--io0a7i.html
网络

// xn--j1aef : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--j1aef.html
ком

// xn--jlq480n2rg : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--jlq480n2rg.html
亚马逊

// xn--jvr189m : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--jvr189m.html
食品

// xn--kcrx77d1x4a : Koninklijke Philips N.V.
// https://www.iana.org/domains/root/db/xn--kcrx77d1x4a.html
飞利浦

// xn--kput3i : Beijing RITT-Net Technology Development Co., Ltd
// https://www.iana.org/domains/root/db/xn--kput3i.html
手机

// xn--mgba3a3ejt : Aramco Services Company
// https://www.iana.org/domains/root/db/xn--mgba3a3ejt.html
ارامكو

// xn--mgba7c0bbn0a : Competrol (Luxembourg) Sarl
// https://www.iana.org/domains/root/db/xn--mgba7c0bbn0a.html
العليان

// xn--mgbab2bd : CORE Association
// https://www.iana.org/domains/root/db/xn--mgbab2bd.html
بازار

// xn--mgbca7dzdo : Abu Dhabi Systems and Information Centre
// https://www.iana.org/domains/root/db/xn--mgbca7dzdo.html
ابوظبي

// xn--mgbi4ecexp : Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)
// https://www.iana.org/domains/root/db/xn--mgbi4ecexp.html
كاثوليك

// xn--mgbt3dhd
// https://www.iana.org/domains/root/db/xn--mgbt3dhd.html
همراه

// xn--mk1bu44c : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--mk1bu44c.html
닷컴

// xn--mxtq1m : Net-Chinese Co., Ltd.
// https://www.iana.org/domains/root/db/xn--mxtq1m.html
政府

// xn--ngbc5azd : International Domain Registry Pty. Ltd.
// https://www.iana.org/domains/root/db/xn--ngbc5azd.html
شبكة

// xn--ngbe9e0a : Kuwait Finance House
// https://www.iana.org/domains/root/db/xn--ngbe9e0a.html
بيتك

// xn--ngbrx : League of Arab States
// https://www.iana.org/domains/root/db/xn--ngbrx.html
عرب

// xn--nqv7f : Public Interest Registry
// https://www.iana.org/domains/root/db/xn--nqv7f.html
机构

// xn--nqv7fs00ema : Public Interest Registry
// https://www.iana.org/domains/root/db/xn--nqv7fs00ema.html
组织机构

// xn--nyqy26a : Stable Tone Limited
// https://www.iana.org/domains/root/db/xn--nyqy26a.html
健康

// xn--otu796d : Jiang Yu Liang Cai Technology Company Limited
// https://www.iana.org/domains/root/db/xn--otu796d.html
招聘

// xn--p1acf : Rusnames Limited
// https://www.iana.org/domains/root/db/xn--p1acf.html
рус

// xn--pssy2u : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--pssy2u.html
大拿

// xn--q9jyb4c : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/xn--q9jyb4c.html
みんな

// xn--qcka1pmc : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/xn--qcka1pmc.html
グーグル

// xn--rhqv96g : Stable Tone Limited
// https://www.iana.org/domains/root/db/xn--rhqv96g.html
世界

// xn--rovu88b : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/xn--rovu88b.html
書籍

// xn--ses554g : KNET Co., Ltd.
// https://www.iana.org/domains/root/db/xn--ses554g.html
网址

// xn--t60b56a : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--t60b56a.html
닷넷

// xn--tckwe : VeriSign Sarl
// https://www.iana.org/domains/root/db/xn--tckwe.html
コム

// xn--tiq49xqyj : Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)
// https://www.iana.org/domains/root/db/xn--tiq49xqyj.html
天主教

// xn--unup4y : Binky Moon, LLC
// https://www.iana.org/domains/root/db/xn--unup4y.html
游戏

// xn--vermgensberater-ctb : Deutsche Vermögensberatung Aktiengesellschaft DVAG
// https://www.iana.org/domains/root/db/xn--vermgensberater-ctb.html
vermögensberater

// xn--vermgensberatung-pwb : Deutsche Vermögensberatung Aktiengesellschaft DVAG
// https://www.iana.org/domains/root/db/xn--vermgensberatung-pwb.html
vermögensberatung

// xn--vhquv : Binky Moon, LLC
// https://www.iana.org/domains/root/db/xn--vhquv.html
企业

// xn--vuq861b : Beijing Tele-info Technology Co., Ltd.
// https://www.iana.org/domains/root/db/xn--vuq861b.html
信息

// xn--w4r85el8fhu5dnra : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/xn--w4r85el8fhu5dnra.html
嘉里大酒店

// xn--w4rs40l : Kerry Trading Co. Limited
// https://www.iana.org/domains/root/db/xn--w4rs40l.html
嘉里

// xn--xhq521b : Guangzhou YU Wei Information Technology Co., Ltd.
// https://www.iana.org/domains/root/db/xn--xhq521b.html
广东

// xn--zfr164b : China Organizational Name Administration Center
// https://www.iana.org/domains/root/db/xn--zfr164b.html
政务

// xyz : XYZ.COM LLC
// https://www.iana.org/domains/root/db/xyz.html
xyz

// yachts : XYZ.COM LLC
// https://www.iana.org/domains/root/db/yachts.html
yachts

// yahoo : Yahoo Inc.
// https://www.iana.org/domains/root/db/yahoo.html
yahoo

// yamaxun : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/yamaxun.html
yamaxun

// yandex : YANDEX, LLC
// https://www.iana.org/domains/root/db/yandex.html
yandex

// yodobashi : YODOBASHI CAMERA CO.,LTD.
// https://www.iana.org/domains/root/db/yodobashi.html
yodobashi

// yoga : Registry Services, LLC
// https://www.iana.org/domains/root/db/yoga.html
yoga

// yokohama : GMO Registry, Inc.
// https://www.iana.org/domains/root/db/yokohama.html
yokohama

// you : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/you.html
you

// youtube : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/youtube.html
youtube

// yun : Beijing Qihu Keji Co., Ltd.
// https://www.iana.org/domains/root/db/yun.html
yun

// zappos : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/zappos.html
zappos

// zara : Industria de Diseño Textil, S.A. (INDITEX, S.A.)
// https://www.iana.org/domains/root/db/zara.html
zara

// zero : Amazon Registry Services, Inc.
// https://www.iana.org/domains/root/db/zero.html
zero

// zip : Charleston Road Registry Inc.
// https://www.iana.org/domains/root/db/zip.html
zip

// zone : Binky Moon, LLC
// https://www.iana.org/domains/root/db/zone.html
zone

// zuerich : Kanton Zürich (Canton of Zurich)
// https://www.iana.org/domains/root/db/zuerich.html
zuerich

// ===END ICANN DOMAINS===

// ===BEGIN PRIVATE DOMAINS===

// (Note: these are in alphabetical order by company name)

// .KRD : https://nic.krd
co.krd
edu.krd

// .pl domains (grandfathered)
art.pl
gliwice.pl
krakow.pl
poznan.pl
wroc.pl
zakopane.pl

// 12CHARS : https://12chars.com
// Submitted by Kenny Niehage <psl@12chars.com>
12chars.dev
12chars.it
12chars.pro

// 1GB LLC : https://www.1gb.ua/
// Submitted by 1GB LLC <noc@1gb.com.ua>
cc.ua
inf.ua
ltd.ua

// 611 blockchain domain name system : https://sixone.one/
611.to

// A2 Hosting
// Submitted by Tyler Hall <sysadmin@a2hosting.com>
a2hosted.com
cpserver.com

// Acorn Labs : https://acorn.io
// Submitted by Craig Jellick <domains@acorn.io>
*.on-acorn.io

// ActiveTrail : https://www.activetrail.biz/
// Submitted by Ofer Kalaora <postmaster@activetrail.com>
activetrail.biz

// Adaptable.io : https://adaptable.io
// Submitted by Mark Terrel <support@adaptable.io>
adaptable.app

// addr.tools : https://addr.tools/
// Submitted by Brian Shea <publicsuffixlist@addr.tools>
myaddr.dev
myaddr.io
dyn.addr.tools
myaddr.tools

// Adobe : https://www.adobe.com/
// Submitted by Ian Boston <boston@adobe.com> and Lars Trieloff <trieloff@adobe.com>
adobeaemcloud.com
*.dev.adobeaemcloud.com
aem.live
hlx.live
adobeaemcloud.net
aem.network
aem.page
hlx.page
aem.reviews

// Adobe Developer Platform : https://developer.adobe.com
// Submitted by Jesse MacFadyen<jessem@adobe.com>
adobeio-static.net
adobeioruntime.net

// Africa.com Web Solutions Ltd : https://registry.africa.com
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
africa.com

// Agnat sp. z o.o. : https://domena.pl
// Submitted by Przemyslaw Plewa <it-admin@domena.pl>
beep.pl

// Aiven : https://aiven.io/
// Submitted by Aiven Security Team <security+appdomains@aiven.io>
aiven.app
aivencloud.com

// Akamai : https://www.akamai.com/
// Submitted by Akamai Team <publicsuffixlist@akamai.com>
akadns.net
akamai.net
akamai-staging.net
akamaiedge.net
akamaiedge-staging.net
akamaihd.net
akamaihd-staging.net
akamaiorigin.net
akamaiorigin-staging.net
akamaized.net
akamaized-staging.net
edgekey.net
edgekey-staging.net
edgesuite.net
edgesuite-staging.net

// alboto.ca : http://alboto.ca
// Submitted by Anton Avramov <avramov@alboto.ca>
barsy.ca

// Alces Software Ltd : http://alces-software.com
// Submitted by Mark J. Titorenko <mark.titorenko@alces-software.com>
*.compute.estate
*.alces.network

// Alibaba Cloud API Gateway
// Submitted by Alibaba Cloud Security <cloud_product_security_team@alibaba-inc.com>
alibabacloudcs.com

// all-inkl.com : https://all-inkl.com
// Submitted by Werner Kaltofen <wk@all-inkl.com>
kasserver.com

// Altervista : https://www.altervista.org
// Submitted by Carlo Cannas <tech_staff@altervista.it>
altervista.org

// alwaysdata : https://www.alwaysdata.com
// Submitted by Cyril <admin@alwaysdata.com>
alwaysdata.net

// Amaze Software : https://amaze.co
// Submitted by Domain Admin <domainadmin@amaze.co>
myamaze.net

// Amazon : https://www.amazon.com/
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Subsections of Amazon/subsidiaries will appear until "concludes" tag

// Amazon API Gateway
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: 6a4f5a95-8c7d-4077-a7af-9cf1abec0a53
execute-api.cn-north-1.amazonaws.com.cn
execute-api.cn-northwest-1.amazonaws.com.cn
execute-api.af-south-1.amazonaws.com
execute-api.ap-east-1.amazonaws.com
execute-api.ap-northeast-1.amazonaws.com
execute-api.ap-northeast-2.amazonaws.com
execute-api.ap-northeast-3.amazonaws.com
execute-api.ap-south-1.amazonaws.com
execute-api.ap-south-2.amazonaws.com
execute-api.ap-southeast-1.amazonaws.com
execute-api.ap-southeast-2.amazonaws.com
execute-api.ap-southeast-3.amazonaws.com
execute-api.ap-southeast-4.amazonaws.com
execute-api.ap-southeast-5.amazonaws.com
execute-api.ca-central-1.amazonaws.com
execute-api.ca-west-1.amazonaws.com
execute-api.eu-central-1.amazonaws.com
execute-api.eu-central-2.amazonaws.com
execute-api.eu-north-1.amazonaws.com
execute-api.eu-south-1.amazonaws.com
execute-api.eu-south-2.amazonaws.com
execute-api.eu-west-1.amazonaws.com
execute-api.eu-west-2.amazonaws.com
execute-api.eu-west-3.amazonaws.com
execute-api.il-central-1.amazonaws.com
execute-api.me-central-1.amazonaws.com
execute-api.me-south-1.amazonaws.com
execute-api.sa-east-1.amazonaws.com
execute-api.us-east-1.amazonaws.com
execute-api.us-east-2.amazonaws.com
execute-api.us-gov-east-1.amazonaws.com
execute-api.us-gov-west-1.amazonaws.com
execute-api.us-west-1.amazonaws.com
execute-api.us-west-2.amazonaws.com

// Amazon CloudFront
// Submitted by Donavan Miller <donavanm@amazon.com>
// Reference: 54144616-fd49-4435-8535-19c6a601bdb3
cloudfront.net

// Amazon Cognito
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: e7c02dc1-02f4-4a23-bde3-a8527c830127
auth.af-south-1.amazoncognito.com
auth.ap-east-1.amazoncognito.com
auth.ap-northeast-1.amazoncognito.com
auth.ap-northeast-2.amazoncognito.com
auth.ap-northeast-3.amazoncognito.com
auth.ap-south-1.amazoncognito.com
auth.ap-south-2.amazoncognito.com
auth.ap-southeast-1.amazoncognito.com
auth.ap-southeast-2.amazoncognito.com
auth.ap-southeast-3.amazoncognito.com
auth.ap-southeast-4.amazoncognito.com
auth.ap-southeast-5.amazoncognito.com
auth.ap-southeast-7.amazoncognito.com
auth.ca-central-1.amazoncognito.com
auth.ca-west-1.amazoncognito.com
auth.eu-central-1.amazoncognito.com
auth.eu-central-2.amazoncognito.com
auth.eu-north-1.amazoncognito.com
auth.eu-south-1.amazoncognito.com
auth.eu-south-2.amazoncognito.com
auth.eu-west-1.amazoncognito.com
auth.eu-west-2.amazoncognito.com
auth.eu-west-3.amazoncognito.com
auth.il-central-1.amazoncognito.com
auth.me-central-1.amazoncognito.com
auth.me-south-1.amazoncognito.com
auth.mx-central-1.amazoncognito.com
auth.sa-east-1.amazoncognito.com
auth.us-east-1.amazoncognito.com
auth-fips.us-east-1.amazoncognito.com
auth.us-east-2.amazoncognito.com
auth-fips.us-east-2.amazoncognito.com
auth-fips.us-gov-east-1.amazoncognito.com
auth-fips.us-gov-west-1.amazoncognito.com
auth.us-west-1.amazoncognito.com
auth-fips.us-west-1.amazoncognito.com
auth.us-west-2.amazoncognito.com
auth-fips.us-west-2.amazoncognito.com

// Amazon EC2
// Submitted by Luke Wells <psl-maintainers@amazon.com>
// Reference: 4c38fa71-58ac-4768-99e5-689c1767e537
*.compute.amazonaws.com.cn
*.compute.amazonaws.com
*.compute-1.amazonaws.com
us-east-1.amazonaws.com

// Amazon EMR
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: 82f43f9f-bbb8-400e-8349-854f5a62f20d
emrappui-prod.cn-north-1.amazonaws.com.cn
emrnotebooks-prod.cn-north-1.amazonaws.com.cn
emrstudio-prod.cn-north-1.amazonaws.com.cn
emrappui-prod.cn-northwest-1.amazonaws.com.cn
emrnotebooks-prod.cn-northwest-1.amazonaws.com.cn
emrstudio-prod.cn-northwest-1.amazonaws.com.cn
emrappui-prod.af-south-1.amazonaws.com
emrnotebooks-prod.af-south-1.amazonaws.com
emrstudio-prod.af-south-1.amazonaws.com
emrappui-prod.ap-east-1.amazonaws.com
emrnotebooks-prod.ap-east-1.amazonaws.com
emrstudio-prod.ap-east-1.amazonaws.com
emrappui-prod.ap-northeast-1.amazonaws.com
emrnotebooks-prod.ap-northeast-1.amazonaws.com
emrstudio-prod.ap-northeast-1.amazonaws.com
emrappui-prod.ap-northeast-2.amazonaws.com
emrnotebooks-prod.ap-northeast-2.amazonaws.com
emrstudio-prod.ap-northeast-2.amazonaws.com
emrappui-prod.ap-northeast-3.amazonaws.com
emrnotebooks-prod.ap-northeast-3.amazonaws.com
emrstudio-prod.ap-northeast-3.amazonaws.com
emrappui-prod.ap-south-1.amazonaws.com
emrnotebooks-prod.ap-south-1.amazonaws.com
emrstudio-prod.ap-south-1.amazonaws.com
emrappui-prod.ap-south-2.amazonaws.com
emrnotebooks-prod.ap-south-2.amazonaws.com
emrstudio-prod.ap-south-2.amazonaws.com
emrappui-prod.ap-southeast-1.amazonaws.com
emrnotebooks-prod.ap-southeast-1.amazonaws.com
emrstudio-prod.ap-southeast-1.amazonaws.com
emrappui-prod.ap-southeast-2.amazonaws.com
emrnotebooks-prod.ap-southeast-2.amazonaws.com
emrstudio-prod.ap-southeast-2.amazonaws.com
emrappui-prod.ap-southeast-3.amazonaws.com
emrnotebooks-prod.ap-southeast-3.amazonaws.com
emrstudio-prod.ap-southeast-3.amazonaws.com
emrappui-prod.ap-southeast-4.amazonaws.com
emrnotebooks-prod.ap-southeast-4.amazonaws.com
emrstudio-prod.ap-southeast-4.amazonaws.com
emrappui-prod.ca-central-1.amazonaws.com
emrnotebooks-prod.ca-central-1.amazonaws.com
emrstudio-prod.ca-central-1.amazonaws.com
emrappui-prod.ca-west-1.amazonaws.com
emrnotebooks-prod.ca-west-1.amazonaws.com
emrstudio-prod.ca-west-1.amazonaws.com
emrappui-prod.eu-central-1.amazonaws.com
emrnotebooks-prod.eu-central-1.amazonaws.com
emrstudio-prod.eu-central-1.amazonaws.com
emrappui-prod.eu-central-2.amazonaws.com
emrnotebooks-prod.eu-central-2.amazonaws.com
emrstudio-prod.eu-central-2.amazonaws.com
emrappui-prod.eu-north-1.amazonaws.com
emrnotebooks-prod.eu-north-1.amazonaws.com
emrstudio-prod.eu-north-1.amazonaws.com
emrappui-prod.eu-south-1.amazonaws.com
emrnotebooks-prod.eu-south-1.amazonaws.com
emrstudio-prod.eu-south-1.amazonaws.com
emrappui-prod.eu-south-2.amazonaws.com
emrnotebooks-prod.eu-south-2.amazonaws.com
emrstudio-prod.eu-south-2.amazonaws.com
emrappui-prod.eu-west-1.amazonaws.com
emrnotebooks-prod.eu-west-1.amazonaws.com
emrstudio-prod.eu-west-1.amazonaws.com
emrappui-prod.eu-west-2.amazonaws.com
emrnotebooks-prod.eu-west-2.amazonaws.com
emrstudio-prod.eu-west-2.amazonaws.com
emrappui-prod.eu-west-3.amazonaws.com
emrnotebooks-prod.eu-west-3.amazonaws.com
emrstudio-prod.eu-west-3.amazonaws.com
emrappui-prod.il-central-1.amazonaws.com
emrnotebooks-prod.il-central-1.amazonaws.com
emrstudio-prod.il-central-1.amazonaws.com
emrappui-prod.me-central-1.amazonaws.com
emrnotebooks-prod.me-central-1.amazonaws.com
emrstudio-prod.me-central-1.amazonaws.com
emrappui-prod.me-south-1.amazonaws.com
emrnotebooks-prod.me-south-1.amazonaws.com
emrstudio-prod.me-south-1.amazonaws.com
emrappui-prod.sa-east-1.amazonaws.com
emrnotebooks-prod.sa-east-1.amazonaws.com
emrstudio-prod.sa-east-1.amazonaws.com
emrappui-prod.us-east-1.amazonaws.com
emrnotebooks-prod.us-east-1.amazonaws.com
emrstudio-prod.us-east-1.amazonaws.com
emrappui-prod.us-east-2.amazonaws.com
emrnotebooks-prod.us-east-2.amazonaws.com
emrstudio-prod.us-east-2.amazonaws.com
emrappui-prod.us-gov-east-1.amazonaws.com
emrnotebooks-prod.us-gov-east-1.amazonaws.com
emrstudio-prod.us-gov-east-1.amazonaws.com
emrappui-prod.us-gov-west-1.amazonaws.com
emrnotebooks-prod.us-gov-west-1.amazonaws.com
emrstudio-prod.us-gov-west-1.amazonaws.com
emrappui-prod.us-west-1.amazonaws.com
emrnotebooks-prod.us-west-1.amazonaws.com
emrstudio-prod.us-west-1.amazonaws.com
emrappui-prod.us-west-2.amazonaws.com
emrnotebooks-prod.us-west-2.amazonaws.com
emrstudio-prod.us-west-2.amazonaws.com

// Amazon Managed Workflows for Apache Airflow
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: 2f697e23-58d6-4b97-be6b-77a26e811dad
*.airflow.af-south-1.on.aws
*.airflow.ap-east-1.on.aws
*.airflow.ap-northeast-1.on.aws
*.airflow.ap-northeast-2.on.aws
*.airflow.ap-northeast-3.on.aws
*.airflow.ap-south-1.on.aws
*.airflow.ap-south-2.on.aws
*.airflow.ap-southeast-1.on.aws
*.airflow.ap-southeast-2.on.aws
*.airflow.ap-southeast-3.on.aws
*.airflow.ap-southeast-4.on.aws
*.airflow.ap-southeast-5.on.aws
*.airflow.ca-central-1.on.aws
*.airflow.ca-west-1.on.aws
*.airflow.eu-central-1.on.aws
*.airflow.eu-central-2.on.aws
*.airflow.eu-north-1.on.aws
*.airflow.eu-south-1.on.aws
*.airflow.eu-south-2.on.aws
*.airflow.eu-west-1.on.aws
*.airflow.eu-west-2.on.aws
*.airflow.eu-west-3.on.aws
*.airflow.il-central-1.on.aws
*.airflow.me-central-1.on.aws
*.airflow.me-south-1.on.aws
*.airflow.sa-east-1.on.aws
*.airflow.us-east-1.on.aws
*.airflow.us-east-2.on.aws
*.airflow.us-west-1.on.aws
*.airflow.us-west-2.on.aws
*.cn-north-1.airflow.amazonaws.com.cn
*.cn-northwest-1.airflow.amazonaws.com.cn
*.airflow.cn-north-1.on.amazonwebservices.com.cn
*.airflow.cn-northwest-1.on.amazonwebservices.com.cn
*.af-south-1.airflow.amazonaws.com
*.ap-east-1.airflow.amazonaws.com
*.ap-northeast-1.airflow.amazonaws.com
*.ap-northeast-2.airflow.amazonaws.com
*.ap-northeast-3.airflow.amazonaws.com
*.ap-south-1.airflow.amazonaws.com
*.ap-south-2.airflow.amazonaws.com
*.ap-southeast-1.airflow.amazonaws.com
*.ap-southeast-2.airflow.amazonaws.com
*.ap-southeast-3.airflow.amazonaws.com
*.ap-southeast-4.airflow.amazonaws.com
*.ap-southeast-5.airflow.amazonaws.com
*.ca-central-1.airflow.amazonaws.com
*.ca-west-1.airflow.amazonaws.com
*.eu-central-1.airflow.amazonaws.com
*.eu-central-2.airflow.amazonaws.com
*.eu-north-1.airflow.amazonaws.com
*.eu-south-1.airflow.amazonaws.com
*.eu-south-2.airflow.amazonaws.com
*.eu-west-1.airflow.amazonaws.com
*.eu-west-2.airflow.amazonaws.com
*.eu-west-3.airflow.amazonaws.com
*.il-central-1.airflow.amazonaws.com
*.me-central-1.airflow.amazonaws.com
*.me-south-1.airflow.amazonaws.com
*.sa-east-1.airflow.amazonaws.com
*.us-east-1.airflow.amazonaws.com
*.us-east-2.airflow.amazonaws.com
*.us-west-1.airflow.amazonaws.com
*.us-west-2.airflow.amazonaws.com

// Amazon S3
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: ada5c9df-55e1-4195-a1ce-732d6c81e357
s3.dualstack.cn-north-1.amazonaws.com.cn
s3-accesspoint.dualstack.cn-north-1.amazonaws.com.cn
s3-website.dualstack.cn-north-1.amazonaws.com.cn
s3.cn-north-1.amazonaws.com.cn
s3-accesspoint.cn-north-1.amazonaws.com.cn
s3-deprecated.cn-north-1.amazonaws.com.cn
s3-object-lambda.cn-north-1.amazonaws.com.cn
s3-website.cn-north-1.amazonaws.com.cn
s3.dualstack.cn-northwest-1.amazonaws.com.cn
s3-accesspoint.dualstack.cn-northwest-1.amazonaws.com.cn
s3.cn-northwest-1.amazonaws.com.cn
s3-accesspoint.cn-northwest-1.amazonaws.com.cn
s3-object-lambda.cn-northwest-1.amazonaws.com.cn
s3-website.cn-northwest-1.amazonaws.com.cn
s3.dualstack.af-south-1.amazonaws.com
s3-accesspoint.dualstack.af-south-1.amazonaws.com
s3-website.dualstack.af-south-1.amazonaws.com
s3.af-south-1.amazonaws.com
s3-accesspoint.af-south-1.amazonaws.com
s3-object-lambda.af-south-1.amazonaws.com
s3-website.af-south-1.amazonaws.com
s3.dualstack.ap-east-1.amazonaws.com
s3-accesspoint.dualstack.ap-east-1.amazonaws.com
s3.ap-east-1.amazonaws.com
s3-accesspoint.ap-east-1.amazonaws.com
s3-object-lambda.ap-east-1.amazonaws.com
s3-website.ap-east-1.amazonaws.com
s3.dualstack.ap-northeast-1.amazonaws.com
s3-accesspoint.dualstack.ap-northeast-1.amazonaws.com
s3-website.dualstack.ap-northeast-1.amazonaws.com
s3.ap-northeast-1.amazonaws.com
s3-accesspoint.ap-northeast-1.amazonaws.com
s3-object-lambda.ap-northeast-1.amazonaws.com
s3-website.ap-northeast-1.amazonaws.com
s3.dualstack.ap-northeast-2.amazonaws.com
s3-accesspoint.dualstack.ap-northeast-2.amazonaws.com
s3-website.dualstack.ap-northeast-2.amazonaws.com
s3.ap-northeast-2.amazonaws.com
s3-accesspoint.ap-northeast-2.amazonaws.com
s3-object-lambda.ap-northeast-2.amazonaws.com
s3-website.ap-northeast-2.amazonaws.com
s3.dualstack.ap-northeast-3.amazonaws.com
s3-accesspoint.dualstack.ap-northeast-3.amazonaws.com
s3-website.dualstack.ap-northeast-3.amazonaws.com
s3.ap-northeast-3.amazonaws.com
s3-accesspoint.ap-northeast-3.amazonaws.com
s3-object-lambda.ap-northeast-3.amazonaws.com
s3-website.ap-northeast-3.amazonaws.com
s3.dualstack.ap-south-1.amazonaws.com
s3-accesspoint.dualstack.ap-south-1.amazonaws.com
s3-website.dualstack.ap-south-1.amazonaws.com
s3.ap-south-1.amazonaws.com
s3-accesspoint.ap-south-1.amazonaws.com
s3-object-lambda.ap-south-1.amazonaws.com
s3-website.ap-south-1.amazonaws.com
s3.dualstack.ap-south-2.amazonaws.com
s3-accesspoint.dualstack.ap-south-2.amazonaws.com
s3-website.dualstack.ap-south-2.amazonaws.com
s3.ap-south-2.amazonaws.com
s3-accesspoint.ap-south-2.amazonaws.com
s3-object-lambda.ap-south-2.amazonaws.com
s3-website.ap-south-2.amazonaws.com
s3.dualstack.ap-southeast-1.amazonaws.com
s3-accesspoint.dualstack.ap-southeast-1.amazonaws.com
s3-website.dualstack.ap-southeast-1.amazonaws.com
s3.ap-southeast-1.amazonaws.com
s3-accesspoint.ap-southeast-1.amazonaws.com
s3-object-lambda.ap-southeast-1.amazonaws.com
s3-website.ap-southeast-1.amazonaws.com
s3.dualstack.ap-southeast-2.amazonaws.com
s3-accesspoint.dualstack.ap-southeast-2.amazonaws.com
s3-website.dualstack.ap-southeast-2.amazonaws.com
s3.ap-southeast-2.amazonaws.com
s3-accesspoint.ap-southeast-2.amazonaws.com
s3-object-lambda.ap-southeast-2.amazonaws.com
s3-website.ap-southeast-2.amazonaws.com
s3.dualstack.ap-southeast-3.amazonaws.com
s3-accesspoint.dualstack.ap-southeast-3.amazonaws.com
s3-website.dualstack.ap-southeast-3.amazonaws.com
s3.ap-southeast-3.amazonaws.com
s3-accesspoint.ap-southeast-3.amazonaws.com
s3-object-lambda.ap-southeast-3.amazonaws.com
s3-website.ap-southeast-3.amazonaws.com
s3.dualstack.ap-southeast-4.amazonaws.com
s3-accesspoint.dualstack.ap-southeast-4.amazonaws.com
s3-website.dualstack.ap-southeast-4.amazonaws.com
s3.ap-southeast-4.amazonaws.com
s3-accesspoint.ap-southeast-4.amazonaws.com
s3-object-lambda.ap-southeast-4.amazonaws.com
s3-website.ap-southeast-4.amazonaws.com
s3.dualstack.ap-southeast-5.amazonaws.com
s3-accesspoint.dualstack.ap-southeast-5.amazonaws.com
s3-website.dualstack.ap-southeast-5.amazonaws.com
s3.ap-southeast-5.amazonaws.com
s3-accesspoint.ap-southeast-5.amazonaws.com
s3-deprecated.ap-southeast-5.amazonaws.com
s3-object-lambda.ap-southeast-5.amazonaws.com
s3-website.ap-southeast-5.amazonaws.com
s3.dualstack.ca-central-1.amazonaws.com
s3-accesspoint.dualstack.ca-central-1.amazonaws.com
s3-accesspoint-fips.dualstack.ca-central-1.amazonaws.com
s3-fips.dualstack.ca-central-1.amazonaws.com
s3-website.dualstack.ca-central-1.amazonaws.com
s3.ca-central-1.amazonaws.com
s3-accesspoint.ca-central-1.amazonaws.com
s3-accesspoint-fips.ca-central-1.amazonaws.com
s3-fips.ca-central-1.amazonaws.com
s3-object-lambda.ca-central-1.amazonaws.com
s3-website.ca-central-1.amazonaws.com
s3.dualstack.ca-west-1.amazonaws.com
s3-accesspoint.dualstack.ca-west-1.amazonaws.com
s3-accesspoint-fips.dualstack.ca-west-1.amazonaws.com
s3-fips.dualstack.ca-west-1.amazonaws.com
s3-website.dualstack.ca-west-1.amazonaws.com
s3.ca-west-1.amazonaws.com
s3-accesspoint.ca-west-1.amazonaws.com
s3-accesspoint-fips.ca-west-1.amazonaws.com
s3-fips.ca-west-1.amazonaws.com
s3-object-lambda.ca-west-1.amazonaws.com
s3-website.ca-west-1.amazonaws.com
s3.dualstack.eu-central-1.amazonaws.com
s3-accesspoint.dualstack.eu-central-1.amazonaws.com
s3-website.dualstack.eu-central-1.amazonaws.com
s3.eu-central-1.amazonaws.com
s3-accesspoint.eu-central-1.amazonaws.com
s3-object-lambda.eu-central-1.amazonaws.com
s3-website.eu-central-1.amazonaws.com
s3.dualstack.eu-central-2.amazonaws.com
s3-accesspoint.dualstack.eu-central-2.amazonaws.com
s3-website.dualstack.eu-central-2.amazonaws.com
s3.eu-central-2.amazonaws.com
s3-accesspoint.eu-central-2.amazonaws.com
s3-object-lambda.eu-central-2.amazonaws.com
s3-website.eu-central-2.amazonaws.com
s3.dualstack.eu-north-1.amazonaws.com
s3-accesspoint.dualstack.eu-north-1.amazonaws.com
s3.eu-north-1.amazonaws.com
s3-accesspoint.eu-north-1.amazonaws.com
s3-object-lambda.eu-north-1.amazonaws.com
s3-website.eu-north-1.amazonaws.com
s3.dualstack.eu-south-1.amazonaws.com
s3-accesspoint.dualstack.eu-south-1.amazonaws.com
s3-website.dualstack.eu-south-1.amazonaws.com
s3.eu-south-1.amazonaws.com
s3-accesspoint.eu-south-1.amazonaws.com
s3-object-lambda.eu-south-1.amazonaws.com
s3-website.eu-south-1.amazonaws.com
s3.dualstack.eu-south-2.amazonaws.com
s3-accesspoint.dualstack.eu-south-2.amazonaws.com
s3-website.dualstack.eu-south-2.amazonaws.com
s3.eu-south-2.amazonaws.com
s3-accesspoint.eu-south-2.amazonaws.com
s3-object-lambda.eu-south-2.amazonaws.com
s3-website.eu-south-2.amazonaws.com
s3.dualstack.eu-west-1.amazonaws.com
s3-accesspoint.dualstack.eu-west-1.amazonaws.com
s3-website.dualstack.eu-west-1.amazonaws.com
s3.eu-west-1.amazonaws.com
s3-accesspoint.eu-west-1.amazonaws.com
s3-deprecated.eu-west-1.amazonaws.com
s3-object-lambda.eu-west-1.amazonaws.com
s3-website.eu-west-1.amazonaws.com
s3.dualstack.eu-west-2.amazonaws.com
s3-accesspoint.dualstack.eu-west-2.amazonaws.com
s3.eu-west-2.amazonaws.com
s3-accesspoint.eu-west-2.amazonaws.com
s3-object-lambda.eu-west-2.amazonaws.com
s3-website.eu-west-2.amazonaws.com
s3.dualstack.eu-west-3.amazonaws.com
s3-accesspoint.dualstack.eu-west-3.amazonaws.com
s3-website.dualstack.eu-west-3.amazonaws.com
s3.eu-west-3.amazonaws.com
s3-accesspoint.eu-west-3.amazonaws.com
s3-object-lambda.eu-west-3.amazonaws.com
s3-website.eu-west-3.amazonaws.com
s3.dualstack.il-central-1.amazonaws.com
s3-accesspoint.dualstack.il-central-1.amazonaws.com
s3-website.dualstack.il-central-1.amazonaws.com
s3.il-central-1.amazonaws.com
s3-accesspoint.il-central-1.amazonaws.com
s3-object-lambda.il-central-1.amazonaws.com
s3-website.il-central-1.amazonaws.com
s3.dualstack.me-central-1.amazonaws.com
s3-accesspoint.dualstack.me-central-1.amazonaws.com
s3-website.dualstack.me-central-1.amazonaws.com
s3.me-central-1.amazonaws.com
s3-accesspoint.me-central-1.amazonaws.com
s3-object-lambda.me-central-1.amazonaws.com
s3-website.me-central-1.amazonaws.com
s3.dualstack.me-south-1.amazonaws.com
s3-accesspoint.dualstack.me-south-1.amazonaws.com
s3.me-south-1.amazonaws.com
s3-accesspoint.me-south-1.amazonaws.com
s3-object-lambda.me-south-1.amazonaws.com
s3-website.me-south-1.amazonaws.com
s3.amazonaws.com
s3-1.amazonaws.com
s3-ap-east-1.amazonaws.com
s3-ap-northeast-1.amazonaws.com
s3-ap-northeast-2.amazonaws.com
s3-ap-northeast-3.amazonaws.com
s3-ap-south-1.amazonaws.com
s3-ap-southeast-1.amazonaws.com
s3-ap-southeast-2.amazonaws.com
s3-ca-central-1.amazonaws.com
s3-eu-central-1.amazonaws.com
s3-eu-north-1.amazonaws.com
s3-eu-west-1.amazonaws.com
s3-eu-west-2.amazonaws.com
s3-eu-west-3.amazonaws.com
s3-external-1.amazonaws.com
s3-fips-us-gov-east-1.amazonaws.com
s3-fips-us-gov-west-1.amazonaws.com
mrap.accesspoint.s3-global.amazonaws.com
s3-me-south-1.amazonaws.com
s3-sa-east-1.amazonaws.com
s3-us-east-2.amazonaws.com
s3-us-gov-east-1.amazonaws.com
s3-us-gov-west-1.amazonaws.com
s3-us-west-1.amazonaws.com
s3-us-west-2.amazonaws.com
s3-website-ap-northeast-1.amazonaws.com
s3-website-ap-southeast-1.amazonaws.com
s3-website-ap-southeast-2.amazonaws.com
s3-website-eu-west-1.amazonaws.com
s3-website-sa-east-1.amazonaws.com
s3-website-us-east-1.amazonaws.com
s3-website-us-gov-west-1.amazonaws.com
s3-website-us-west-1.amazonaws.com
s3-website-us-west-2.amazonaws.com
s3.dualstack.sa-east-1.amazonaws.com
s3-accesspoint.dualstack.sa-east-1.amazonaws.com
s3-website.dualstack.sa-east-1.amazonaws.com
s3.sa-east-1.amazonaws.com
s3-accesspoint.sa-east-1.amazonaws.com
s3-object-lambda.sa-east-1.amazonaws.com
s3-website.sa-east-1.amazonaws.com
s3.dualstack.us-east-1.amazonaws.com
s3-accesspoint.dualstack.us-east-1.amazonaws.com
s3-accesspoint-fips.dualstack.us-east-1.amazonaws.com
s3-fips.dualstack.us-east-1.amazonaws.com
s3-website.dualstack.us-east-1.amazonaws.com
s3.us-east-1.amazonaws.com
s3-accesspoint.us-east-1.amazonaws.com
s3-accesspoint-fips.us-east-1.amazonaws.com
s3-deprecated.us-east-1.amazonaws.com
s3-fips.us-east-1.amazonaws.com
s3-object-lambda.us-east-1.amazonaws.com
s3-website.us-east-1.amazonaws.com
s3.dualstack.us-east-2.amazonaws.com
s3-accesspoint.dualstack.us-east-2.amazonaws.com
s3-accesspoint-fips.dualstack.us-east-2.amazonaws.com
s3-fips.dualstack.us-east-2.amazonaws.com
s3-website.dualstack.us-east-2.amazonaws.com
s3.us-east-2.amazonaws.com
s3-accesspoint.us-east-2.amazonaws.com
s3-accesspoint-fips.us-east-2.amazonaws.com
s3-deprecated.us-east-2.amazonaws.com
s3-fips.us-east-2.amazonaws.com
s3-object-lambda.us-east-2.amazonaws.com
s3-website.us-east-2.amazonaws.com
s3.dualstack.us-gov-east-1.amazonaws.com
s3-accesspoint.dualstack.us-gov-east-1.amazonaws.com
s3-accesspoint-fips.dualstack.us-gov-east-1.amazonaws.com
s3-fips.dualstack.us-gov-east-1.amazonaws.com
s3.us-gov-east-1.amazonaws.com
s3-accesspoint.us-gov-east-1.amazonaws.com
s3-accesspoint-fips.us-gov-east-1.amazonaws.com
s3-fips.us-gov-east-1.amazonaws.com
s3-object-lambda.us-gov-east-1.amazonaws.com
s3-website.us-gov-east-1.amazonaws.com
s3.dualstack.us-gov-west-1.amazonaws.com
s3-accesspoint.dualstack.us-gov-west-1.amazonaws.com
s3-accesspoint-fips.dualstack.us-gov-west-1.amazonaws.com
s3-fips.dualstack.us-gov-west-1.amazonaws.com
s3.us-gov-west-1.amazonaws.com
s3-accesspoint.us-gov-west-1.amazonaws.com
s3-accesspoint-fips.us-gov-west-1.amazonaws.com
s3-fips.us-gov-west-1.amazonaws.com
s3-object-lambda.us-gov-west-1.amazonaws.com
s3-website.us-gov-west-1.amazonaws.com
s3.dualstack.us-west-1.amazonaws.com
s3-accesspoint.dualstack.us-west-1.amazonaws.com
s3-accesspoint-fips.dualstack.us-west-1.amazonaws.com
s3-fips.dualstack.us-west-1.amazonaws.com
s3-website.dualstack.us-west-1.amazonaws.com
s3.us-west-1.amazonaws.com
s3-accesspoint.us-west-1.amazonaws.com
s3-accesspoint-fips.us-west-1.amazonaws.com
s3-fips.us-west-1.amazonaws.com
s3-object-lambda.us-west-1.amazonaws.com
s3-website.us-west-1.amazonaws.com
s3.dualstack.us-west-2.amazonaws.com
s3-accesspoint.dualstack.us-west-2.amazonaws.com
s3-accesspoint-fips.dualstack.us-west-2.amazonaws.com
s3-fips.dualstack.us-west-2.amazonaws.com
s3-website.dualstack.us-west-2.amazonaws.com
s3.us-west-2.amazonaws.com
s3-accesspoint.us-west-2.amazonaws.com
s3-accesspoint-fips.us-west-2.amazonaws.com
s3-deprecated.us-west-2.amazonaws.com
s3-fips.us-west-2.amazonaws.com
s3-object-lambda.us-west-2.amazonaws.com
s3-website.us-west-2.amazonaws.com

// Amazon SageMaker Ground Truth
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: 98dbfde4-7802-48c3-8751-b60f204e0d9c
labeling.ap-northeast-1.sagemaker.aws
labeling.ap-northeast-2.sagemaker.aws
labeling.ap-south-1.sagemaker.aws
labeling.ap-southeast-1.sagemaker.aws
labeling.ap-southeast-2.sagemaker.aws
labeling.ca-central-1.sagemaker.aws
labeling.eu-central-1.sagemaker.aws
labeling.eu-west-1.sagemaker.aws
labeling.eu-west-2.sagemaker.aws
labeling.us-east-1.sagemaker.aws
labeling.us-east-2.sagemaker.aws
labeling.us-west-2.sagemaker.aws

// Amazon SageMaker Notebook Instances
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: b5ea56df-669e-43cc-9537-14aa172f5dfc
notebook.af-south-1.sagemaker.aws
notebook.ap-east-1.sagemaker.aws
notebook.ap-northeast-1.sagemaker.aws
notebook.ap-northeast-2.sagemaker.aws
notebook.ap-northeast-3.sagemaker.aws
notebook.ap-south-1.sagemaker.aws
notebook.ap-south-2.sagemaker.aws
notebook.ap-southeast-1.sagemaker.aws
notebook.ap-southeast-2.sagemaker.aws
notebook.ap-southeast-3.sagemaker.aws
notebook.ap-southeast-4.sagemaker.aws
notebook.ca-central-1.sagemaker.aws
notebook-fips.ca-central-1.sagemaker.aws
notebook.ca-west-1.sagemaker.aws
notebook-fips.ca-west-1.sagemaker.aws
notebook.eu-central-1.sagemaker.aws
notebook.eu-central-2.sagemaker.aws
notebook.eu-north-1.sagemaker.aws
notebook.eu-south-1.sagemaker.aws
notebook.eu-south-2.sagemaker.aws
notebook.eu-west-1.sagemaker.aws
notebook.eu-west-2.sagemaker.aws
notebook.eu-west-3.sagemaker.aws
notebook.il-central-1.sagemaker.aws
notebook.me-central-1.sagemaker.aws
notebook.me-south-1.sagemaker.aws
notebook.sa-east-1.sagemaker.aws
notebook.us-east-1.sagemaker.aws
notebook-fips.us-east-1.sagemaker.aws
notebook.us-east-2.sagemaker.aws
notebook-fips.us-east-2.sagemaker.aws
notebook.us-gov-east-1.sagemaker.aws
notebook-fips.us-gov-east-1.sagemaker.aws
notebook.us-gov-west-1.sagemaker.aws
notebook-fips.us-gov-west-1.sagemaker.aws
notebook.us-west-1.sagemaker.aws
notebook-fips.us-west-1.sagemaker.aws
notebook.us-west-2.sagemaker.aws
notebook-fips.us-west-2.sagemaker.aws
notebook.cn-north-1.sagemaker.com.cn
notebook.cn-northwest-1.sagemaker.com.cn

// Amazon SageMaker Studio
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: 475f237e-ab88-4041-9f41-7cfccdf66aeb
studio.af-south-1.sagemaker.aws
studio.ap-east-1.sagemaker.aws
studio.ap-northeast-1.sagemaker.aws
studio.ap-northeast-2.sagemaker.aws
studio.ap-northeast-3.sagemaker.aws
studio.ap-south-1.sagemaker.aws
studio.ap-southeast-1.sagemaker.aws
studio.ap-southeast-2.sagemaker.aws
studio.ap-southeast-3.sagemaker.aws
studio.ca-central-1.sagemaker.aws
studio.eu-central-1.sagemaker.aws
studio.eu-central-2.sagemaker.aws
studio.eu-north-1.sagemaker.aws
studio.eu-south-1.sagemaker.aws
studio.eu-south-2.sagemaker.aws
studio.eu-west-1.sagemaker.aws
studio.eu-west-2.sagemaker.aws
studio.eu-west-3.sagemaker.aws
studio.il-central-1.sagemaker.aws
studio.me-central-1.sagemaker.aws
studio.me-south-1.sagemaker.aws
studio.sa-east-1.sagemaker.aws
studio.us-east-1.sagemaker.aws
studio.us-east-2.sagemaker.aws
studio.us-gov-east-1.sagemaker.aws
studio-fips.us-gov-east-1.sagemaker.aws
studio.us-gov-west-1.sagemaker.aws
studio-fips.us-gov-west-1.sagemaker.aws
studio.us-west-1.sagemaker.aws
studio.us-west-2.sagemaker.aws
studio.cn-north-1.sagemaker.com.cn
studio.cn-northwest-1.sagemaker.com.cn

// Amazon SageMaker with MLflow
// Submited by: AWS Security <psl-maintainers@amazon.com>
// Reference: c19f92b3-a82a-452d-8189-831b572eea7e
*.experiments.sagemaker.aws

// Analytics on AWS
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: 955f9f40-a495-4e73-ae85-67b77ac9cadd
analytics-gateway.ap-northeast-1.amazonaws.com
analytics-gateway.ap-northeast-2.amazonaws.com
analytics-gateway.ap-south-1.amazonaws.com
analytics-gateway.ap-southeast-1.amazonaws.com
analytics-gateway.ap-southeast-2.amazonaws.com
analytics-gateway.eu-central-1.amazonaws.com
analytics-gateway.eu-west-1.amazonaws.com
analytics-gateway.us-east-1.amazonaws.com
analytics-gateway.us-east-2.amazonaws.com
analytics-gateway.us-west-2.amazonaws.com

// AWS Amplify
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: c35bed18-6f4f-424f-9298-5756f2f7d72b
amplifyapp.com

// AWS App Runner
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: 6828c008-ba5d-442f-ade5-48da4e7c2316
*.awsapprunner.com

// AWS Cloud9
// Submitted by: AWS Security <psl-maintainers@amazon.com>
// Reference: 30717f72-4007-4f0f-8ed4-864c6f2efec9
webview-assets.aws-cloud9.af-south-1.amazonaws.com
vfs.cloud9.af-south-1.amazonaws.com
webview-assets.cloud9.af-south-1.amazonaws.com
webview-assets.aws-cloud9.ap-east-1.amazonaws.com
vfs.cloud9.ap-east-1.amazonaws.com
webview-assets.cloud9.ap-east-1.amazonaws.com
webview-assets.aws-cloud9.ap-northeast-1.amazonaws.com
vfs.cloud9.ap-northeast-1.amazonaws.com
webview-assets.cloud9.ap-northeast-1.amazonaws.com
webview-assets.aws-cloud9.ap-northeast-2.amazonaws.com
vfs.cloud9.ap-northeast-2.amazonaws.com
webview-assets.cloud9.ap-northeast-2.amazonaws.com
webview-assets.aws-cloud9.ap-northeast-3.amazonaws.com
vfs.cloud9.ap-northeast-3.amazonaws.com
webview-assets.cloud9.ap-northeast-3.amazonaws.com
webview-assets.aws-cloud9.ap-south-1.amazonaws.com
vfs.cloud9.ap-south-1.amazonaws.com
webview-assets.cloud9.ap-south-1.amazonaws.com
webview-assets.aws-cloud9.ap-southeast-1.amazonaws.com
vfs.cloud9.ap-southeast-1.amazonaws.com
webview-assets.cloud9.ap-southeast-1.amazonaws.com
webview-assets.aws-cloud9.ap-southeast-2.amazonaws.com
vfs.cloud9.ap-southeast-2.amazonaws.com
webview-assets.cloud9.ap-southeast-2.amazonaws.com
webview-assets.aws-cloud9.ca-central-1.amazonaws.com
vfs.cloud9.ca-central-1.amazonaws.com
webview-assets.cloud9.ca-central-1.amazonaws.com
webview-assets.aws-cloud9.eu-central-1.amazonaws.com
vfs.cloud9.eu-central-1.amazonaws.com
webview-assets.cloud9.eu-central-1.amazonaws.com
webview-assets.aws-cloud9.eu-north-1.amazonaws.com
vfs.cloud9.eu-north-1.amazonaws.com
webview-assets.cloud9.eu-north-1.amazonaws.com
webview-assets.aws-cloud9.eu-south-1.amazonaws.com
vfs.cloud9.eu-south-1.amazonaws.com
webview-assets.cloud9.eu-south-1.amazonaws.com
webview-assets.aws-cloud9.eu-west-1.amazonaws.com
vfs.cloud9.eu-west-1.amazonaws.com
webview-assets.cloud9.eu-west-1.amazonaws.com
webview-assets.aws-cloud9.eu-west-2.amazonaws.com
vfs.cloud9.eu-west-2.amazonaws.com
webview-assets.cloud9.eu-west-2.amazonaws.com
webview-assets.aws-cloud9.eu-west-3.amazonaws.com
vfs.cloud9.eu-west-3.amazonaws.com
webview-assets.cloud9.eu-west-3.amazonaws.com
webview-assets.aws-cloud9.il-central-1.amazonaws.com
vfs.cloud9.il-central-1.amazonaws.com
webview-assets.aws-cloud9.me-south-1.amazonaws.com
vfs.cloud9.me-south-1.amazonaws.com
webview-assets.cloud9.me-south-1.amazonaws.com
webview-assets.aws-cloud9.sa-east-1.amazonaws.com
vfs.cloud9.sa-east-1.amazonaws.com
webview-assets.cloud9.sa-east-1.amazonaws.com
webview-assets.aws-cloud9.us-east-1.amazonaws.com
vfs.cloud9.us-east-1.amazonaws.com
webview-assets.cloud9.us-east-1.amazonaws.com
webview-assets.aws-cloud9.us-east-2.amazonaws.com
vfs.cloud9.us-east-2.amazonaws.com
webview-assets.cloud9.us-east-2.amazonaws.com
webview-assets.aws-cloud9.us-west-1.amazonaws.com
vfs.cloud9.us-west-1.amazonaws.com
webview-assets.cloud9.us-west-1.amazonaws.com
webview-assets.aws-cloud9.us-west-2.amazonaws.com
vfs.cloud9.us-west-2.amazonaws.com
webview-assets.cloud9.us-west-2.amazonaws.com

// AWS Directory Service
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: a13203e8-42dc-4045-a0d2-2ee67bed1068
awsapps.com

// AWS Elastic Beanstalk
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: bb5a965c-dec3-4967-aa22-e306ad064797
cn-north-1.eb.amazonaws.com.cn
cn-northwest-1.eb.amazonaws.com.cn
elasticbeanstalk.com
af-south-1.elasticbeanstalk.com
ap-east-1.elasticbeanstalk.com
ap-northeast-1.elasticbeanstalk.com
ap-northeast-2.elasticbeanstalk.com
ap-northeast-3.elasticbeanstalk.com
ap-south-1.elasticbeanstalk.com
ap-southeast-1.elasticbeanstalk.com
ap-southeast-2.elasticbeanstalk.com
ap-southeast-3.elasticbeanstalk.com
ca-central-1.elasticbeanstalk.com
eu-central-1.elasticbeanstalk.com
eu-north-1.elasticbeanstalk.com
eu-south-1.elasticbeanstalk.com
eu-west-1.elasticbeanstalk.com
eu-west-2.elasticbeanstalk.com
eu-west-3.elasticbeanstalk.com
il-central-1.elasticbeanstalk.com
me-south-1.elasticbeanstalk.com
sa-east-1.elasticbeanstalk.com
us-east-1.elasticbeanstalk.com
us-east-2.elasticbeanstalk.com
us-gov-east-1.elasticbeanstalk.com
us-gov-west-1.elasticbeanstalk.com
us-west-1.elasticbeanstalk.com
us-west-2.elasticbeanstalk.com

// (AWS) Elastic Load Balancing
// Submitted by Luke Wells <psl-maintainers@amazon.com>
// Reference: 12a3d528-1bac-4433-a359-a395867ffed2
*.elb.amazonaws.com.cn
*.elb.amazonaws.com

// AWS Global Accelerator
// Submitted by Daniel Massaguer <psl-maintainers@amazon.com>
// Reference: d916759d-a08b-4241-b536-4db887383a6a
awsglobalaccelerator.com

// AWS re:Post Private
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: 83385945-225f-416e-9aa0-ad0632bfdcee
*.private.repost.aws

// AWS Transfer Family web apps
// Submitted by AWS Security <psl-maintainers@amazon.com>
// Reference: 57a658c4-8899-410c-aa24-5b01e4a178d2
transfer-webapp.af-south-1.on.aws
transfer-webapp.ap-east-1.on.aws
transfer-webapp.ap-northeast-1.on.aws
transfer-webapp.ap-northeast-2.on.aws
transfer-webapp.ap-northeast-3.on.aws
transfer-webapp.ap-south-1.on.aws
transfer-webapp.ap-south-2.on.aws
transfer-webapp.ap-southeast-1.on.aws
transfer-webapp.ap-southeast-2.on.aws
transfer-webapp.ap-southeast-3.on.aws
transfer-webapp.ap-southeast-4.on.aws
transfer-webapp.ap-southeast-5.on.aws
transfer-webapp.ca-central-1.on.aws
transfer-webapp.ca-west-1.on.aws
transfer-webapp.eu-central-1.on.aws
transfer-webapp.eu-central-2.on.aws
transfer-webapp.eu-north-1.on.aws
transfer-webapp.eu-south-1.on.aws
transfer-webapp.eu-south-2.on.aws
transfer-webapp.eu-west-1.on.aws
transfer-webapp.eu-west-2.on.aws
transfer-webapp.eu-west-3.on.aws
transfer-webapp.il-central-1.on.aws
transfer-webapp.me-central-1.on.aws
transfer-webapp.me-south-1.on.aws
transfer-webapp.sa-east-1.on.aws
transfer-webapp.us-east-1.on.aws
transfer-webapp.us-east-2.on.aws
transfer-webapp.us-gov-east-1.on.aws
transfer-webapp-fips.us-gov-east-1.on.aws
transfer-webapp.us-gov-west-1.on.aws
transfer-webapp-fips.us-gov-west-1.on.aws
transfer-webapp.us-west-1.on.aws
transfer-webapp.us-west-2.on.aws
transfer-webapp.cn-north-1.on.amazonwebservices.com.cn
transfer-webapp.cn-northwest-1.on.amazonwebservices.com.cn

// eero
// Submitted by Yue Kang <eero-dynamic-dns@amazon.com>
// Reference: 264afe70-f62c-4c02-8ab9-b5281ed24461
eero.online
eero-stage.online

// concludes Amazon

// Apigee : https://apigee.com/
// Submitted by Apigee Security Team <security@apigee.com>
apigee.io

// Apis Networks : https://apisnetworks.com
// Submitted by Matt Saladna <matt@apisnetworks.com>
panel.dev

// Apphud : https://apphud.com
// Submitted by Alexander Selivanov <alex@apphud.com>
siiites.com

// Appspace : https://www.appspace.com
// Submitted by Appspace Security Team <security@appspace.com>
appspacehosted.com
appspaceusercontent.com

// Appudo UG (haftungsbeschränkt) : https://www.appudo.com
// Submitted by Alexander Hochbaum <admin@appudo.com>
appudo.net

// Appwrite : https://appwrite.io
// Submitted by Steven Nguyen <security@appwrite.io>
appwrite.global
*.appwrite.run

// Aptible : https://www.aptible.com/
// Submitted by Thomas Orozco <thomas@aptible.com>
on-aptible.com

// Aquapal : https://aquapal.net/
// Submitted by Aki Ueno <admin@aquapal.net>
f5.si

// ArvanCloud EdgeCompute
// Submitted by ArvanCloud CDN <cdn@arvancloud.ir>
arvanedge.ir

// ASEINet : https://www.aseinet.com/
// Submitted by Asei SEKIGUCHI <mail@aseinet.com>
user.aseinet.ne.jp
gv.vc
d.gv.vc

// Asociación Amigos de la Informática "Euskalamiga" : http://encounter.eus/
// Submitted by Hector Martin <marcan@euskalencounter.org>
user.party.eus

// Association potager.org : https://potager.org/
// Submitted by Lunar <jardiniers@potager.org>
pimienta.org
poivron.org
potager.org
sweetpepper.org

// ASUSTOR Inc. : http://www.asustor.com
// Submitted by Vincent Tseng <vincenttseng@asustor.com>
myasustor.com

// Atlassian : https://atlassian.com
// Submitted by Sam Smyth <devloop@atlassian.com>
cdn.prod.atlassian-dev.net

// Authentick UG (haftungsbeschränkt) : https://authentick.net
// Submitted by Lukas Reschke <lukas@authentick.net>
translated.page

// AVM : https://avm.de
// Submitted by Andreas Weise <a.weise@avm.de>
myfritz.link
myfritz.net

// AVStack Pte. Ltd. : https://avstack.io
// Submitted by Jasper Hugo <jasper@avstack.io>
onavstack.net

// AW AdvisorWebsites.com Software Inc : https://advisorwebsites.com
// Submitted by James Kennedy <domains@advisorwebsites.com>
*.awdev.ca
*.advisor.ws

// AZ.pl sp. z.o.o : https://az.pl
// Submitted by Krzysztof Wolski <krzysztof.wolski@home.eu>
ecommerce-shop.pl

// b-data GmbH : https://www.b-data.io
// Submitted by Olivier Benz <olivier.benz@b-data.ch>
b-data.io

// Balena : https://www.balena.io
// Submitted by Petros Angelatos <petrosagg@balena.io>
balena-devices.com

// BASE, Inc. : https://binc.jp
// Submitted by Yuya NAGASAWA <public-suffix-list@binc.jp>
base.ec
official.ec
buyshop.jp
fashionstore.jp
handcrafted.jp
kawaiishop.jp
supersale.jp
theshop.jp
shopselect.net
base.shop

// BeagleBoard.org Foundation : https://beagleboard.org
// Submitted by Jason Kridner <jkridner@beagleboard.org>
beagleboard.io

// Beget Ltd
// Submitted by Lev Nekrasov <lnekrasov@beget.com>
*.beget.app

// Besties : https://besties.house
// Submitted by Hazel Cora <hazy@besties.house>
pages.gay

// BinaryLane : http://www.binarylane.com
// Submitted by Nathan O'Sullivan <nathan@mammoth.com.au>
bnr.la

// Bitbucket : http://bitbucket.org
// Submitted by Andy Ortlieb <aortlieb@atlassian.com>
bitbucket.io

// Blackbaud, Inc. : https://www.blackbaud.com
// Submitted by Paul Crowder <paul.crowder@blackbaud.com>
blackbaudcdn.net

// Blatech : http://www.blatech.net
// Submitted by Luke Bratch <luke@bratch.co.uk>
of.je

// Block, Inc. : https://block.xyz
// Submitted by Jonathan Boice <security@block.xyz>
square.site

// Blue Bite, LLC : https://bluebite.com
// Submitted by Joshua Weiss <admin.engineering@bluebite.com>
bluebite.io

// Boomla : https://boomla.com
// Submitted by Tibor Halter <thalter@boomla.com>
boomla.net

// Boutir : https://www.boutir.com
// Submitted by Eric Ng Ka Ka <ngkaka@boutir.com>
boutir.com

// Boxfuse : https://boxfuse.com
// Submitted by Axel Fontaine <axel@boxfuse.com>
boxfuse.io

// bplaced : https://www.bplaced.net/
// Submitted by Miroslav Bozic <security@bplaced.net>
square7.ch
bplaced.com
bplaced.de
square7.de
bplaced.net
square7.net

// Brave : https://brave.com
// Submitted by Andrea Brancaleoni <abrancaleoni@brave.com>
brave.app
*.s.brave.app
brave.io
*.s.brave.io

// Brendly : https://brendly.rs
// Submitted by Dusan Radovanovic <administracija@brendly.rs>
shop.brendly.ba
shop.brendly.hr
shop.brendly.rs

// BrowserSafetyMark
// Submitted by Dave Tharp <browsersafetymark.io@quicinc.com>
browsersafetymark.io

// BRS Media : https://brsmedia.com/
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
radio.am
radio.fm

// Bubble : https://bubble.io/
// Submitted by Merlin Zhao <devops@bubble.io>
cdn.bubble.io
bubbleapps.io

// Bytemark Hosting : https://www.bytemark.co.uk
// Submitted by Paul Cammish <paul.cammish@bytemark.co.uk>
uk0.bigv.io
dh.bytemark.co.uk
vm.bytemark.co.uk

// Caf.js Labs LLC : https://www.cafjs.com
// Submitted by Antonio Lain <antlai@cafjs.com>
cafjs.com

// Canva Pty Ltd : https://canva.com/
// Submitted by Joel Aquilina <publicsuffixlist@canva.com>
canva-apps.cn
my.canvasite.cn
canva-apps.com
canva-hosted-embed.com
canvacode.com
rice-labs.com
canva.run
my.canva.site

// Carrd : https://carrd.co
// Submitted by AJ <aj@carrd.co>
drr.ac
uwu.ai
carrd.co
crd.co
ju.mp

// CDDO : https://www.gov.uk/guidance/get-an-api-domain-on-govuk
// Submitted by Jamie Tanna <jamie.tanna@digital.cabinet-office.gov.uk>
api.gov.uk

// CDN77.com : http://www.cdn77.com
// Submitted by Jan Krpes <jan.krpes@cdn77.com>
cdn77-storage.com
rsc.contentproxy9.cz
r.cdn77.net
cdn77-ssl.net
c.cdn77.org
rsc.cdn77.org
ssl.origin.cdn77-secure.org

// CentralNic : https://teaminternet.com/
// Submitted by registry <gavin.brown@centralnic.com>
za.bz
br.com
cn.com
de.com
eu.com
jpn.com
mex.com
ru.com
sa.com
uk.com
us.com
za.com
com.de
gb.net
hu.net
jp.net
se.net
uk.net
ae.org
com.se

// Cityhost LLC : https://cityhost.ua
// Submitted by Maksym Rivtin <support@cityhost.net.ua>
cx.ua

// Civilized Discourse Construction Kit, Inc. : https://www.discourse.org/
// Submitted by Rishabh Nambiar & Michael Brown <team@discourse.org>
discourse.group
discourse.team

// Clerk : https://www.clerk.dev
// Submitted by Colin Sidoti <systems@clerk.dev>
clerk.app
clerkstage.app
*.lcl.dev
*.lclstage.dev
*.stg.dev
*.stgstage.dev

// Clever Cloud : https://www.clever-cloud.com/
// Submitted by Quentin Adam <noc@clever-cloud.com>
cleverapps.cc
*.services.clever-cloud.com
cleverapps.io
cleverapps.tech

// ClickRising : https://clickrising.com/
// Submitted by Umut Gumeli <infrastructure-publicsuffixlist@clickrising.com>
clickrising.net

// Cloud DNS Ltd : http://www.cloudns.net
// Submitted by Aleksander Hristov <noc@cloudns.net> & Boyan Peychev <boyan@cloudns.net>
cloudns.asia
cloudns.be
cloud-ip.biz
cloudns.biz
cloud-ip.cc
cloudns.cc
cloudns.ch
cloudns.cl
cloudns.club
abrdns.com
dnsabr.com
ip-ddns.com
cloudns.cx
cloudns.eu
cloudns.in
cloudns.info
ddns-ip.net
dns-cloud.net
dns-dynamic.net
cloudns.nz
cloudns.org
ip-dynamic.org
cloudns.ph
cloudns.pro
cloudns.pw
cloudns.us

// Cloud66 : https://www.cloud66.com/
// Submitted by Khash Sajadi <khash@cloud66.com>
c66.me
cloud66.ws

// CloudAccess.net : https://www.cloudaccess.net/
// Submitted by Pawel Panek <noc@cloudaccess.net>
jdevcloud.com
wpdevcloud.com
cloudaccess.host
freesite.host
cloudaccess.net

// Cloudbees, Inc. : https://www.cloudbees.com/
// Submitted by Mohideen Shajith <jaas-sre-infra@cloudbees.com>
cloudbeesusercontent.io

// Cloudera, Inc. : https://www.cloudera.com/
// Submitted by Kedarnath Waikar <security@cloudera.com>
*.cloudera.site

// Cloudflare, Inc. : https://www.cloudflare.com/
// Submitted by Cloudflare Team <publicsuffixlist@cloudflare.com>
cf-ipfs.com
cloudflare-ipfs.com
trycloudflare.com
pages.dev
r2.dev
workers.dev
cloudflare.net
cdn.cloudflare.net
cdn.cloudflareanycast.net
cdn.cloudflarecn.net
cdn.cloudflareglobal.net

// cloudscale.ch AG : https://www.cloudscale.ch/
// Submitted by Gaudenz Steinlin <support@cloudscale.ch>
cust.cloudscale.ch
objects.lpg.cloudscale.ch
objects.rma.cloudscale.ch
lpg.objectstorage.ch
rma.objectstorage.ch

// Clovyr : https://clovyr.io
// Submitted by Patrick Nielsen <patrick@clovyr.io>
wnext.app

// CNPY : https://cnpy.gdn
// Submitted by Angelo Gladding <angelo@lahacker.net>
cnpy.gdn

// Co & Co : https://co-co.nl/
// Submitted by Govert Versluis <govert@co-co.nl>
*.otap.co

// co.ca : http://registry.co.ca/
co.ca

// co.com Registry, LLC : https://registry.co.com
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
co.com

// Codeberg e. V. : https://codeberg.org
// Submitted by Moritz Marquardt <git@momar.de>
codeberg.page

// CodeSandbox B.V. : https://codesandbox.io
// Submitted by Ives van Hoorne <abuse@codesandbox.io>
csb.app
preview.csb.app

// CoDNS B.V.
co.nl
co.no

// Cognition AI, Inc. : https://cognition.ai
// Submitted by Philip Papurt <domains@cognition.ai>
*.devinapps.com

// Combell.com : https://www.combell.com
// Submitted by Thomas Wouters <thomas.wouters@combellgroup.com>
webhosting.be
hosting-cluster.nl

// Contentful GmbH : https://www.contentful.com
// Submitted by Contentful Developer Experience Team <prd-ecosystem-dx@contentful.com>
ctfcloud.net

// Convex : https://convex.dev/
// Submitted by James Cowling <security@convex.dev>
convex.app
convex.cloud
convex.site

// Coordination Center for TLD RU and XN--P1AI : https://cctld.ru/en/domains/domens_ru/reserved/
// Submitted by George Georgievsky <gug@cctld.ru>
ac.ru
edu.ru
gov.ru
int.ru
mil.ru

// COSIMO GmbH : http://www.cosimo.de
// Submitted by Rene Marticke <rmarticke@cosimo.de>
dyn.cosidns.de
dnsupdater.de
dynamisches-dns.de
internet-dns.de
l-o-g-i-n.de
dynamic-dns.info
feste-ip.net
knx-server.net
static-access.net

// Craft Docs Ltd : https://www.craft.do/
// Submitted by Zsombor Fuszenecker <security@craft.do>
craft.me

// Craynic, s.r.o. : http://www.craynic.com/
// Submitted by Ales Krajnik <ales.krajnik@craynic.com>
realm.cz

// Crisp IM SAS : https://crisp.chat/
// Submitted by Baptiste Jamin <hostmaster@crisp.chat>
on.crisp.email

// Cryptonomic : https://cryptonomic.net/
// Submitted by Andrew Cady <public-suffix-list@cryptonomic.net>
*.cryptonomic.net

// cyber_Folks S.A. : https://cyberfolks.pl
// Submitted by Bartlomiej Kida <security@cyberfolks.pl>
cfolks.pl

// cyon GmbH : https://www.cyon.ch/
// Submitted by Dominic Luechinger <dol@cyon.ch>
cyon.link
cyon.site

// Dansk.net : http://www.dansk.net/
// Submitted by Anani Voule <digital@digital.co.dk>
biz.dk
co.dk
firm.dk
reg.dk
store.dk

// dappnode.io : https://dappnode.io/
// Submitted by Abel Boldu / DAppNode Team <community@dappnode.io>
dyndns.dappnode.io

// Dark, Inc. : https://darklang.com
// Submitted by Paul Biggar <ops@darklang.com>
builtwithdark.com
darklang.io

// DataDetect, LLC. : https://datadetect.com
// Submitted by Andrew Banchich <abanchich@sceven.com>
demo.datadetect.com
instance.datadetect.com

// Datawire, Inc : https://www.datawire.io
// Submitted by Richard Li <secalert@datawire.io>
edgestack.me

// Datto, Inc. : https://www.datto.com/
// Submitted by Philipp Heckel <ph@datto.com>
dattolocal.com
dattorelay.com
dattoweb.com
mydatto.com
dattolocal.net
mydatto.net

// ddnss.de : https://www.ddnss.de/
// Submitted by Robert Niedziela <webmaster@ddnss.de>
ddnss.de
dyn.ddnss.de
dyndns.ddnss.de
dyn-ip24.de
dyndns1.de
home-webserver.de
dyn.home-webserver.de
myhome-server.de
ddnss.org

// Debian : https://www.debian.org/
// Submitted by Peter Palfrader / Debian Sysadmin Team <dsa-publicsuffixlist@debian.org>
debian.net

// Definima : http://www.definima.com/
// Submitted by Maxence Bitterli <maxence@definima.com>
definima.io
definima.net

// Deno Land Inc : https://deno.com/
// Submitted by Luca Casonato <hostmaster@deno.com>
deno.dev
deno-staging.dev
deno.net

// deSEC : https://desec.io/
// Submitted by Peter Thomassen <peter@desec.io>
dedyn.io

// Deta : https://www.deta.sh/
// Submitted by Aavash Shrestha <aavash@deta.sh>
deta.app
deta.dev

// Dfinity Foundation: https://dfinity.org/
// Submitted by Dfinity Team <domains@dfinity.org>
icp0.io
*.raw.icp0.io
icp1.io
*.raw.icp1.io
*.icp.net
caffeine.site
caffeine.xyz

// dhosting.pl Sp. z o.o. : https://dhosting.pl/
// Submitted by Michal Kokoszkiewicz <bok@dhosting.pl>
dfirma.pl
dkonto.pl
you2.pl

// DigitalOcean App Platform : https://www.digitalocean.com/products/app-platform/
// Submitted by Braxton Huggins <psl-maintainers@digitalocean.com>
ondigitalocean.app

// DigitalOcean Spaces : https://www.digitalocean.com/products/spaces/
// Submitted by Robin H. Johnson <psl-maintainers@digitalocean.com>
*.digitaloceanspaces.com

// DigitalPlat : https://www.digitalplat.org/
// Submitted by Edward Hsing <contact@digitalplat.org>
qzz.io
us.kg
xx.kg
dpdns.org

// Discord Inc : https://discord.com
// Submitted by Sahn Lam <slam@discordapp.com>
discordsays.com
discordsez.com

// DNS Africa Ltd : https://dns.business
// Submitted by Calvin Browne <calvin@dns.business>
jozi.biz

// DNShome : https://www.dnshome.de/
// Submitted by Norbert Auler <mail@dnshome.de>
dnshome.de

// DotArai : https://www.dotarai.com/
// Submitted by Atsadawat Netcharadsang <atsadawat@dotarai.co.th>
online.th
shop.th

// DrayTek Corp. : https://www.draytek.com/
// Submitted by Paul Fang <mis@draytek.com>
drayddns.com

// DreamCommerce : https://shoper.pl/
// Submitted by Konrad Kotarba <konrad.kotarba@dreamcommerce.com>
shoparena.pl

// DreamHost : http://www.dreamhost.com/
// Submitted by Andrew Farmer <andrew.farmer@dreamhost.com>
dreamhosters.com

// Dreamyoungs, Inc. : https://durumis.com
// Submitted by Infra Team <infra@durumis.com>
durumis.com

// DuckDNS : http://www.duckdns.org/
// Submitted by Richard Harper <richard@duckdns.org>
duckdns.org

// dy.fi : http://dy.fi/
// Submitted by Heikki Hannikainen <hessu@hes.iki.fi>
dy.fi
tunk.org

// DynDNS.com : http://www.dyndns.com/services/dns/dyndns/
dyndns.biz
for-better.biz
for-more.biz
for-some.biz
for-the.biz
selfip.biz
webhop.biz
ftpaccess.cc
game-server.cc
myphotos.cc
scrapping.cc
blogdns.com
cechire.com
dnsalias.com
dnsdojo.com
doesntexist.com
dontexist.com
doomdns.com
dyn-o-saur.com
dynalias.com
dyndns-at-home.com
dyndns-at-work.com
dyndns-blog.com
dyndns-free.com
dyndns-home.com
dyndns-ip.com
dyndns-mail.com
dyndns-office.com
dyndns-pics.com
dyndns-remote.com
dyndns-server.com
dyndns-web.com
dyndns-wiki.com
dyndns-work.com
est-a-la-maison.com
est-a-la-masion.com
est-le-patron.com
est-mon-blogueur.com
from-ak.com
from-al.com
from-ar.com
from-ca.com
from-ct.com
from-dc.com
from-de.com
from-fl.com
from-ga.com
from-hi.com
from-ia.com
from-id.com
from-il.com
from-in.com
from-ks.com
from-ky.com
from-ma.com
from-md.com
from-mi.com
from-mn.com
from-mo.com
from-ms.com
from-mt.com
from-nc.com
from-nd.com
from-ne.com
from-nh.com
from-nj.com
from-nm.com
from-nv.com
from-oh.com
from-ok.com
from-or.com
from-pa.com
from-pr.com
from-ri.com
from-sc.com
from-sd.com
from-tn.com
from-tx.com
from-ut.com
from-va.com
from-vt.com
from-wa.com
from-wi.com
from-wv.com
from-wy.com
getmyip.com
gotdns.com
hobby-site.com
homelinux.com
homeunix.com
iamallama.com
is-a-anarchist.com
is-a-blogger.com
is-a-bookkeeper.com
is-a-bulls-fan.com
is-a-caterer.com
is-a-chef.com
is-a-conservative.com
is-a-cpa.com
is-a-cubicle-slave.com
is-a-democrat.com
is-a-designer.com
is-a-doctor.com
is-a-financialadvisor.com
is-a-geek.com
is-a-green.com
is-a-guru.com
is-a-hard-worker.com
is-a-hunter.com
is-a-landscaper.com
is-a-lawyer.com
is-a-liberal.com
is-a-libertarian.com
is-a-llama.com
is-a-musician.com
is-a-nascarfan.com
is-a-nurse.com
is-a-painter.com
is-a-personaltrainer.com
is-a-photographer.com
is-a-player.com
is-a-republican.com
is-a-rockstar.com
is-a-socialist.com
is-a-student.com
is-a-teacher.com
is-a-techie.com
is-a-therapist.com
is-an-accountant.com
is-an-actor.com
is-an-actress.com
is-an-anarchist.com
is-an-artist.com
is-an-engineer.com
is-an-entertainer.com
is-certified.com
is-gone.com
is-into-anime.com
is-into-cars.com
is-into-cartoons.com
is-into-games.com
is-leet.com
is-not-certified.com
is-slick.com
is-uberleet.com
is-with-theband.com
isa-geek.com
isa-hockeynut.com
issmarterthanyou.com
likes-pie.com
likescandy.com
neat-url.com
saves-the-whales.com
selfip.com
sells-for-less.com
sells-for-u.com
servebbs.com
simple-url.com
space-to-rent.com
teaches-yoga.com
writesthisblog.com
ath.cx
fuettertdasnetz.de
isteingeek.de
istmein.de
lebtimnetz.de
leitungsen.de
traeumtgerade.de
barrel-of-knowledge.info
barrell-of-knowledge.info
dyndns.info
for-our.info
groks-the.info
groks-this.info
here-for-more.info
knowsitall.info
selfip.info
webhop.info
forgot.her.name
forgot.his.name
at-band-camp.net
blogdns.net
broke-it.net
buyshouses.net
dnsalias.net
dnsdojo.net
does-it.net
dontexist.net
dynalias.net
dynathome.net
endofinternet.net
from-az.net
from-co.net
from-la.net
from-ny.net
gets-it.net
ham-radio-op.net
homeftp.net
homeip.net
homelinux.net
homeunix.net
in-the-band.net
is-a-chef.net
is-a-geek.net
isa-geek.net
kicks-ass.net
office-on-the.net
podzone.net
scrapper-site.net
selfip.net
sells-it.net
servebbs.net
serveftp.net
thruhere.net
webhop.net
merseine.nu
mine.nu
shacknet.nu
blogdns.org
blogsite.org
boldlygoingnowhere.org
dnsalias.org
dnsdojo.org
doesntexist.org
dontexist.org
doomdns.org
dvrdns.org
dynalias.org
dyndns.org
go.dyndns.org
home.dyndns.org
endofinternet.org
endoftheinternet.org
from-me.org
game-host.org
gotdns.org
hobby-site.org
homedns.org
homeftp.org
homelinux.org
homeunix.org
is-a-bruinsfan.org
is-a-candidate.org
is-a-celticsfan.org
is-a-chef.org
is-a-geek.org
is-a-knight.org
is-a-linux-user.org
is-a-patsfan.org
is-a-soxfan.org
is-found.org
is-lost.org
is-saved.org
is-very-bad.org
is-very-evil.org
is-very-good.org
is-very-nice.org
is-very-sweet.org
isa-geek.org
kicks-ass.org
misconfused.org
podzone.org
readmyblog.org
selfip.org
sellsyourhome.org
servebbs.org
serveftp.org
servegame.org
stuff-4-sale.org
webhop.org
better-than.tv
dyndns.tv
on-the-web.tv
worse-than.tv
is-by.us
land-4-sale.us
stuff-4-sale.us
dyndns.ws
mypets.ws

// Dynu.com : https://www.dynu.com/
// Submitted by Sue Ye <sue@dynu.com>
ddnsfree.com
ddnsgeek.com
giize.com
gleeze.com
kozow.com
loseyourip.com
ooguy.com
theworkpc.com
casacam.net
dynu.net
accesscam.org
camdvr.org
freeddns.org
mywire.org
webredirect.org
myddns.rocks

// dynv6 : https://dynv6.com
// Submitted by Dominik Menke <dom@digineo.de>
dynv6.net

// E4YOU spol. s.r.o. : https://e4you.cz/
// Submitted by Vladimir Dudr <info@e4you.cz>
e4.cz

// Easypanel : https://easypanel.io
// Submitted by Andrei Canta <andrei@easypanel.io>
easypanel.app
easypanel.host

// EasyWP : https://www.easywp.com
// Submitted by <infracloudteam@namecheap.com>
*.ewp.live

// eDirect Corp. : https://hosting.url.com.tw/
// Submitted by C.S. chang <cschang@corp.url.com.tw>
twmail.cc
twmail.net
twmail.org
mymailer.com.tw
url.tw

// Electromagnetic Field : https://www.emfcamp.org
// Submitted by <noc@emfcamp.org>
at.emf.camp

// Elefunc, Inc. : https://elefunc.com
// Submitted by Cetin Sert <domains@elefunc.com>
rt.ht

// Elementor : Elementor Ltd.
// Submitted by Anton Barkan <antonb@elementor.com>
elementor.cloud
elementor.cool

// En root‽ : https://en-root.org
// Submitted by Emmanuel Raviart <emmanuel@raviart.com>
en-root.fr

// Enalean SAS : https://www.enalean.com
// Submitted by Enalean Security Team <security@enalean.com>
mytuleap.com
tuleap-partners.com

// Encoretivity AB : https://encore.cloud
// Submitted by André Eriksson <security@encore.cloud>
encr.app
frontend.encr.app
encoreapi.com
lp.dev
api.lp.dev
objects.lp.dev

// encoway GmbH : https://www.encoway.de
// Submitted by Marcel Daus <cloudops@encoway.de>
eu.encoway.cloud

// EU.org : https://eu.org/
// Submitted by Pierre Beyssac <hostmaster@eu.org>
eu.org
al.eu.org
asso.eu.org
at.eu.org
au.eu.org
be.eu.org
bg.eu.org
ca.eu.org
cd.eu.org
ch.eu.org
cn.eu.org
cy.eu.org
cz.eu.org
de.eu.org
dk.eu.org
edu.eu.org
ee.eu.org
es.eu.org
fi.eu.org
fr.eu.org
gr.eu.org
hr.eu.org
hu.eu.org
ie.eu.org
il.eu.org
in.eu.org
int.eu.org
is.eu.org
it.eu.org
jp.eu.org
kr.eu.org
lt.eu.org
lu.eu.org
lv.eu.org
me.eu.org
mk.eu.org
mt.eu.org
my.eu.org
net.eu.org
ng.eu.org
nl.eu.org
no.eu.org
nz.eu.org
pl.eu.org
pt.eu.org
ro.eu.org
ru.eu.org
se.eu.org
si.eu.org
sk.eu.org
tr.eu.org
uk.eu.org
us.eu.org

// Eurobyte : https://eurobyte.ru
// Submitted by Evgeniy Subbotin <e.subbotin@eurobyte.ru>
eurodir.ru

// Evennode : http://www.evennode.com/
// Submitted by Michal Kralik <support@evennode.com>
eu-1.evennode.com
eu-2.evennode.com
eu-3.evennode.com
eu-4.evennode.com
us-1.evennode.com
us-2.evennode.com
us-3.evennode.com
us-4.evennode.com

// Evervault : https://evervault.com
// Submitted by Hannah Neary <engineering@evervault.com>
relay.evervault.app
relay.evervault.dev

// Expo : https://expo.dev/
// Submitted by James Ide <psl@expo.dev>
expo.app
staging.expo.app

// Fabrica Technologies, Inc. : https://www.fabrica.dev/
// Submitted by Eric Jiang <eric@fabrica.dev>
onfabrica.com

// FAITID : https://faitid.org/
// Submitted by Maxim Alzoba <tech.contact@faitid.org>
// https://www.flexireg.net/stat_info
ru.net
adygeya.ru
bashkiria.ru
bir.ru
cbg.ru
com.ru
dagestan.ru
grozny.ru
kalmykia.ru
kustanai.ru
marine.ru
mordovia.ru
msk.ru
mytis.ru
nalchik.ru
nov.ru
pyatigorsk.ru
spb.ru
vladikavkaz.ru
vladimir.ru
abkhazia.su
adygeya.su
aktyubinsk.su
arkhangelsk.su
armenia.su
ashgabad.su
azerbaijan.su
balashov.su
bashkiria.su
bryansk.su
bukhara.su
chimkent.su
dagestan.su
east-kazakhstan.su
exnet.su
georgia.su
grozny.su
ivanovo.su
jambyl.su
kalmykia.su
kaluga.su
karacol.su
karaganda.su
karelia.su
khakassia.su
krasnodar.su
kurgan.su
kustanai.su
lenug.su
mangyshlak.su
mordovia.su
msk.su
murmansk.su
nalchik.su
navoi.su
north-kazakhstan.su
nov.su
obninsk.su
penza.su
pokrovsk.su
sochi.su
spb.su
tashkent.su
termez.su
togliatti.su
troitsk.su
tselinograd.su
tula.su
tuva.su
vladikavkaz.su
vladimir.su
vologda.su

// Fancy Bits, LLC : http://getchannels.com
// Submitted by Aman Gupta <aman@getchannels.com>
channelsdvr.net
u.channelsdvr.net

// Fastly Inc. : http://www.fastly.com/
// Submitted by Fastly Security <security@fastly.com>
edgecompute.app
fastly-edge.com
fastly-terrarium.com
freetls.fastly.net
map.fastly.net
a.prod.fastly.net
global.prod.fastly.net
a.ssl.fastly.net
b.ssl.fastly.net
global.ssl.fastly.net
fastlylb.net
map.fastlylb.net

// Fastmail : https://www.fastmail.com/
// Submitted by Marc Bradshaw <marc@fastmailteam.com>
*.user.fm

// FASTVPS EESTI OU : https://fastvps.ru/
// Submitted by Likhachev Vasiliy <lihachev@fastvps.ru>
fastvps-server.com
fastvps.host
myfast.host
fastvps.site
myfast.space

// FearWorks Media Ltd. : https://fearworksmedia.co.uk
// Submitted by Keith Fairley <domains@fearworksmedia.co.uk>
conn.uk
copro.uk
hosp.uk

// Fedora : https://fedoraproject.org/
// Submitted by Patrick Uiterwijk <puiterwijk@fedoraproject.org>
fedorainfracloud.org
fedorapeople.org
cloud.fedoraproject.org
app.os.fedoraproject.org
app.os.stg.fedoraproject.org

// Fermax : https://fermax.com/
// Submitted by Koen Van Isterdael <k.vanisterdael@fermax.be>
mydobiss.com

// FH Muenster : https://www.fh-muenster.de
// Submitted by Robin Naundorf <r.naundorf@fh-muenster.de>
fh-muenster.io

// Figma : https://www.figma.com
// Submitted by Nick Frost <psl@figma.com>
figma.site
preview.site

// Filegear Inc. : https://www.filegear.com
// Submitted by Jason Zhu <jason@owtware.com>
filegear.me

// Firebase, Inc.
// Submitted by Chris Raynor <chris@firebase.com>
firebaseapp.com

// FlashDrive : https://flashdrive.io
// Submitted by Eric Chan <support@flashdrive.io>
fldrv.com

// Fleek Labs Inc : https://fleek.xyz
// Submitted by Parsa Ghadimi <dev@fleek.xyz>
on-fleek.app

// FlutterFlow : https://flutterflow.io
// Submitted by Anton Emelyanov <anton@flutterflow.io>
flutterflow.app

// fly.io : https://fly.io
// Submitted by Kurt Mackey <kurt@fly.io>
fly.dev
shw.io
edgeapp.net

// Forgerock : https://www.forgerock.com
// Submitted by Roderick Parr <roderick.parr@forgerock.com>
forgeblocks.com
id.forgerock.io

// FoundryLabs, Inc : https://e2b.dev/
// Submitted by Jiri Sveceny <security@e2b.dev>
e2b.app

// Framer : https://www.framer.com
// Submitted by Koen Rouwhorst <security@framer.com>
framer.ai
framer.app
framercanvas.com
framer.media
framer.photos
framer.website
framer.wiki

// Frederik Braun : https://frederik-braun.com
// Submitted by Frederik Braun <fb@frederik-braun.com>
*.0e.vc

// Freebox : http://www.freebox.fr
// Submitted by Romain Fliedel <rfliedel@freebox.fr>
freebox-os.com
freeboxos.com
fbx-os.fr
fbxos.fr
freebox-os.fr
freeboxos.fr

// freedesktop.org : https://www.freedesktop.org
// Submitted by Daniel Stone <daniel@fooishbar.org>
freedesktop.org

// freemyip.com : https://freemyip.com
// Submitted by Cadence <contact@freemyip.com>
freemyip.com

// Frusky MEDIA&PR : https://www.frusky.de
// Submitted by Victor Pupynin <hallo@frusky.de>
*.frusky.de

// FunkFeuer - Verein zur Förderung freier Netze : https://www.funkfeuer.at
// Submitted by Daniel A. Maierhofer <vorstand@funkfeuer.at>
wien.funkfeuer.at

// Future Versatile Group. : https://www.fvg-on.net/
// T.Kabu <webmaster@fvg-on.net>
daemon.asia
dix.asia
mydns.bz
0am.jp
0g0.jp
0j0.jp
0t0.jp
mydns.jp
pgw.jp
wjg.jp
keyword-on.net
live-on.net
server-on.net
mydns.tw
mydns.vc

// Futureweb GmbH : https://www.futureweb.at
// Submitted by Andreas Schnederle-Wagner <schnederle@futureweb.at>
*.futurecms.at
*.ex.futurecms.at
*.in.futurecms.at
futurehosting.at
futuremailing.at
*.ex.ortsinfo.at
*.kunden.ortsinfo.at
*.statics.cloud

// GCom Internet : https://www.gcom.net.au
// Submitted by Leo Julius <support@gcom.net.au>
aliases121.com

// GDS : https://www.gov.uk/service-manual/technology/managing-domain-names
// Submitted by Stephen Ford <hostmaster@digital.cabinet-office.gov.uk>
campaign.gov.uk
service.gov.uk
independent-commission.uk
independent-inquest.uk
independent-inquiry.uk
independent-panel.uk
independent-review.uk
public-inquiry.uk
royal-commission.uk

// Gehirn Inc. : https://www.gehirn.co.jp/
// Submitted by Kohei YOSHIDA <tech@gehirn.co.jp>
gehirn.ne.jp
usercontent.jp

// Gentlent, Inc. : https://www.gentlent.com
// Submitted by Tom Klein <tom@gentlent.com>
gentapps.com
gentlentapis.com
cdn-edges.net

// GignoSystemJapan : http://gsj.bz
// Submitted by GignoSystemJapan <kakutou-ec@gsj.bz>
gsj.bz

// GitHub, Inc.
// Submitted by Patrick Toomey <security@github.com>
github.app
githubusercontent.com
githubpreview.dev
github.io

// GitLab, Inc. : https://about.gitlab.com/
// Submitted by Alex Hanselka <alex@gitlab.com>
gitlab.io

// Gitplac.si : https://gitplac.si
// Submitted by Aljaž Starc <me@aljaxus.eu>
gitapp.si
gitpage.si

// Global NOG Alliance : https://nogalliance.org/
// Submitted by Sander Steffann <sander@nogalliance.org>
nog.community

// Globe Hosting SRL : https://www.globehosting.com/
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
co.ro
shop.ro

// GMO Pepabo, Inc. : https://pepabo.com/
// Submitted by Hosting Div <admin@pepabo.com>
lolipop.io
angry.jp
babyblue.jp
babymilk.jp
backdrop.jp
bambina.jp
bitter.jp
blush.jp
boo.jp
boy.jp
boyfriend.jp
but.jp
candypop.jp
capoo.jp
catfood.jp
cheap.jp
chicappa.jp
chillout.jp
chips.jp
chowder.jp
chu.jp
ciao.jp
cocotte.jp
coolblog.jp
cranky.jp
cutegirl.jp
daa.jp
deca.jp
deci.jp
digick.jp
egoism.jp
fakefur.jp
fem.jp
flier.jp
floppy.jp
fool.jp
frenchkiss.jp
girlfriend.jp
girly.jp
gloomy.jp
gonna.jp
greater.jp
hacca.jp
heavy.jp
her.jp
hiho.jp
hippy.jp
holy.jp
hungry.jp
icurus.jp
itigo.jp
jellybean.jp
kikirara.jp
kill.jp
kilo.jp
kuron.jp
littlestar.jp
lolipopmc.jp
lolitapunk.jp
lomo.jp
lovepop.jp
lovesick.jp
main.jp
mods.jp
mond.jp
mongolian.jp
moo.jp
namaste.jp
nikita.jp
nobushi.jp
noor.jp
oops.jp
parallel.jp
parasite.jp
pecori.jp
peewee.jp
penne.jp
pepper.jp
perma.jp
pigboat.jp
pinoko.jp
punyu.jp
pupu.jp
pussycat.jp
pya.jp
raindrop.jp
readymade.jp
sadist.jp
schoolbus.jp
secret.jp
staba.jp
stripper.jp
sub.jp
sunnyday.jp
thick.jp
tonkotsu.jp
under.jp
upper.jp
velvet.jp
verse.jp
versus.jp
vivian.jp
watson.jp
weblike.jp
whitesnow.jp
zombie.jp
heteml.net

// GoDaddy Registry : https://registry.godaddy
// Submitted by Rohan Durrant <tldns@registry.godaddy>
graphic.design

// GoIP DNS Services : http://www.goip.de
// Submitted by Christian Poulter <milchstrasse@goip.de>
goip.de

// Google, Inc.
// Submitted by Shannon McCabe <public-suffix-editors@google.com>
*.hosted.app
*.run.app
*.mtls.run.app
web.app
*.0emm.com
appspot.com
*.r.appspot.com
blogspot.com
codespot.com
googleapis.com
googlecode.com
pagespeedmobilizer.com
withgoogle.com
withyoutube.com
*.gateway.dev
cloud.goog
translate.goog
*.usercontent.goog
cloudfunctions.net

// Goupile : https://goupile.fr
// Submitted by Niels Martignene <hello@goupile.fr>
goupile.fr

// GOV.UK Pay : https://www.payments.service.gov.uk/
// Submitted by Richard Baker <richard.baker@digital.cabinet-office.gov.uk>
pymnt.uk

// GOV.UK Platform as a Service : https://www.cloud.service.gov.uk/
// Submitted by Tom Whitwell <gov-uk-paas-support@digital.cabinet-office.gov.uk>
cloudapps.digital
london.cloudapps.digital

// Government of the Netherlands : https://www.government.nl
// Submitted by <domeinnaam@minaz.nl>
gov.nl

// Grafana Labs : https://grafana.com/
// Submitted by Platform Engineering <info@grafana.com>
grafana-dev.net

// GrayJay Web Solutions Inc. : https://grayjaysports.ca
// Submitted by Matt Yamkowy <info@grayjaysports.ca>
grayjayleagues.com

// GünstigBestellen : https://günstigbestellen.de
// Submitted by Furkan Akkoc <info@hendelzon.de>
günstigbestellen.de
günstigliefern.de

// Hackclub Nest : https://hackclub.app
// Submitted by Cyteon <admins@hackclub.app>
hackclub.app

// Häkkinen.fi : https://www.häkkinen.fi/
// Submitted by Eero Häkkinen <Eero+psl@Häkkinen.fi>
häkkinen.fi

// Hashbang : https://hashbang.sh
hashbang.sh

// Hasura : https://hasura.io
// Submitted by Shahidh K Muhammed <shahidh@hasura.io>
hasura.app
hasura-app.io

// Hatena Co., Ltd. : https://hatena.co.jp
// Submitted by Masato Nakamura <blog-developers@hatena.ne.jp>
hatenablog.com
hatenadiary.com
hateblo.jp
hatenablog.jp
hatenadiary.jp
hatenadiary.org

// Heilbronn University of Applied Sciences - Faculty Informatics (GitLab Pages) : https://www.hs-heilbronn.de
// Submitted by Richard Zowalla <it-admin@hs-heilbronn.de>
pages.it.hs-heilbronn.de
pages-research.it.hs-heilbronn.de

// HeiyuSpace : https://lazycat.cloud
// Submitted by Xia Bin <admin@lazycat.cloud>
heiyu.space

// Helio Networks : https://heliohost.org
// Submitted by Ben Frede <admin@heliohost.org>
helioho.st
heliohost.us

// Hepforge : https://www.hepforge.org
// Submitted by David Grellscheid <admin@hepforge.org>
hepforge.org

// Heroku : https://www.heroku.com/
// Submitted by Shumon Huque <public-dns@salesforce.com>
herokuapp.com

// Heyflow : https://www.heyflow.com
// Submitted by Mirko Nitschke <tech@heyflow.com>
heyflow.page
heyflow.site

// Hibernating Rhinos
// Submitted by Oren Eini <oren@ravendb.net>
ravendb.cloud
ravendb.community
development.run
ravendb.run

// HiDNS : https://www.hidoha.net
// Submitted by ifeng <admin@hidoha.net>
hidns.co
hidns.vip

// home.pl S.A. : https://home.pl
// Submitted by Krzysztof Wolski <krzysztof.wolski@home.eu>
homesklep.pl

// Homebase : https://homebase.id/
// Submitted by Jason Babo <info@homebase.id>
*.kin.one
*.id.pub
*.kin.pub

// Hoplix : https://www.hoplix.com
// Submitted by Danilo De Franco<info@hoplix.shop>
hoplix.shop

// HOSTBIP REGISTRY : https://www.hostbip.com/
// Submitted by Atanunu Igbunuroghene <publicsuffixlist@hostbip.com>
orx.biz
biz.ng
co.biz.ng
dl.biz.ng
go.biz.ng
lg.biz.ng
on.biz.ng
col.ng
firm.ng
gen.ng
ltd.ng
ngo.ng
plc.ng

// HostyHosting : https://hostyhosting.com
hostyhosting.io

// Hugging Face : https://huggingface.co
// Submitted by Eliott Coyac <website@huggingface.co>
hf.space
static.hf.space

// Hypernode B.V. : https://www.hypernode.com/
// Submitted by Cipriano Groenendal <security@nl.team.blue>
hypernode.io

// I-O DATA DEVICE, INC. : http://www.iodata.com/
// Submitted by Yuji Minagawa <domains-admin@iodata.jp>
iobb.net

// i-registry s.r.o. : http://www.i-registry.cz/
// Submitted by Martin Semrad <semrad@i-registry.cz>
co.cz

// Ici la Lune : http://www.icilalune.com/
// Submitted by Simon Morvan <simon@icilalune.com>
*.moonscale.io
moonscale.net

// iDOT Services Limited : http://www.domain.gr.com
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
gr.com

// iki.fi
// Submitted by Hannu Aronsson <haa@iki.fi>
iki.fi

// iliad italia : https://www.iliad.it
// Submitted by Marios Makassikis <mmakassikis@freebox.fr>
ibxos.it
iliadboxos.it

// Incsub, LLC : https://incsub.com/
// Submitted by Aaron Edwards <sysadmins@incsub.com>
smushcdn.com
wphostedmail.com
wpmucdn.com
tempurl.host
wpmudev.host

// Individual Network Berlin e.V. : https://www.in-berlin.de/
// Submitted by Christian Seitz <chris@in-berlin.de>
dyn-berlin.de
in-berlin.de
in-brb.de
in-butter.de
in-dsl.de
in-vpn.de
in-dsl.net
in-vpn.net
in-dsl.org
in-vpn.org

// Inferno Communications : https://inferno.co.uk
// Submitted by Connor McFarlane <noc@inferno.co.uk>
oninferno.net

// info.at : http://www.info.at/
biz.at
info.at

// info.cx : http://info.cx
// Submitted by June Slater <whois@igloo.to>
info.cx

// Interlegis : http://www.interlegis.leg.br
// Submitted by Gabriel Ferreira <registrobr@interlegis.leg.br>
ac.leg.br
al.leg.br
am.leg.br
ap.leg.br
ba.leg.br
ce.leg.br
df.leg.br
es.leg.br
go.leg.br
ma.leg.br
mg.leg.br
ms.leg.br
mt.leg.br
pa.leg.br
pb.leg.br
pe.leg.br
pi.leg.br
pr.leg.br
rj.leg.br
rn.leg.br
ro.leg.br
rr.leg.br
rs.leg.br
sc.leg.br
se.leg.br
sp.leg.br
to.leg.br

// intermetrics GmbH : https://pixolino.com/
// Submitted by Wolfgang Schwarz <admin@intermetrics.de>
pixolino.com

// Internet-Pro, LLP : https://netangels.ru/
// Submitted by Vasiliy Sheredeko <piphon@gmail.com>
na4u.ru

// Inventor Services : https://inventor.gg/
// Submitted by Inventor Team <psl@inventor.gg>
botdash.app
botdash.dev
botdash.gg
botdash.net
botda.sh
botdash.xyz

// IONOS SE : https://www.ionos.com/
// IONOS Group SE : https://www.ionos-group.com/
// Submitted by Henrik Willert <security@ionos.com>
apps-1and1.com
live-website.com
webspace-host.com
apps-1and1.net
websitebuilder.online
app-ionos.space

// iopsys software solutions AB : https://iopsys.eu/
// Submitted by Roman Azarenko <roman.azarenko@iopsys.eu>
iopsys.se

// IPFS Project : https://ipfs.tech/
// Submitted by Interplanetary Shipyard <domains@ipshipyard.com>
*.inbrowser.dev
*.dweb.link
*.inbrowser.link

// IPiFony Systems, Inc. : https://www.ipifony.com/
// Submitted by Matthew Hardeman <mhardeman@ipifony.com>
ipifony.net

// ir.md : https://nic.ir.md
// Submitted by Ali Soizi <info@nic.ir.md>
ir.md

// is-a-good.dev : https://is-a-good.dev
// Submitted by William Harrison <webmaster@is-a-good.dev>
is-a-good.dev

// IServ GmbH : https://iserv.de
// Submitted by Kim Brodowski <info@iserv.de>
iservschule.de
mein-iserv.de
schuldock.de
schulplattform.de
schulserver.de
test-iserv.de
iserv.dev
iserv.host

// Jelastic, Inc. : https://jelastic.com/
// Submitted by Ihor Kolodyuk <ik@jelastic.com>
mel.cloudlets.com.au
cloud.interhostsolutions.be
alp1.ae.flow.ch
appengine.flow.ch
es-1.axarnet.cloud
diadem.cloud
vip.jelastic.cloud
jele.cloud
it1.eur.aruba.jenv-aruba.cloud
it1.jenv-aruba.cloud
keliweb.cloud
cs.keliweb.cloud
oxa.cloud
tn.oxa.cloud
uk.oxa.cloud
primetel.cloud
uk.primetel.cloud
ca.reclaim.cloud
uk.reclaim.cloud
us.reclaim.cloud
ch.trendhosting.cloud
de.trendhosting.cloud
jele.club
dopaas.com
paas.hosted-by-previder.com
rag-cloud.hosteur.com
rag-cloud-ch.hosteur.com
jcloud.ik-server.com
jcloud-ver-jpc.ik-server.com
demo.jelastic.com
paas.massivegrid.com
jed.wafaicloud.com
ryd.wafaicloud.com
j.scaleforce.com.cy
jelastic.dogado.eu
fi.cloudplatform.fi
demo.datacenter.fi
paas.datacenter.fi
jele.host
mircloud.host
paas.beebyte.io
sekd1.beebyteapp.io
jele.io
jc.neen.it
jcloud.kz
cloudjiffy.net
fra1-de.cloudjiffy.net
west1-us.cloudjiffy.net
jls-sto1.elastx.net
jls-sto2.elastx.net
jls-sto3.elastx.net
fr-1.paas.massivegrid.net
lon-1.paas.massivegrid.net
lon-2.paas.massivegrid.net
ny-1.paas.massivegrid.net
ny-2.paas.massivegrid.net
sg-1.paas.massivegrid.net
jelastic.saveincloud.net
nordeste-idc.saveincloud.net
j.scaleforce.net
sdscloud.pl
unicloud.pl
mircloud.ru
enscaled.sg
jele.site
jelastic.team
orangecloud.tn
j.layershift.co.uk
phx.enscaled.us
mircloud.us

// Jino : https://www.jino.ru
// Submitted by Sergey Ulyashin <ulyashin@jino.ru>
myjino.ru
*.hosting.myjino.ru
*.landing.myjino.ru
*.spectrum.myjino.ru
*.vps.myjino.ru

// Jotelulu S.L. : https://jotelulu.com
// Submitted by Daniel Fariña <ingenieria@jotelulu.com>
jote.cloud
jotelulu.cloud
eu1-plenit.com
la1-plenit.com
us1-plenit.com

// JouwWeb B.V. : https://www.jouwweb.nl
// Submitted by Camilo Sperberg <tech@webador.com>
webadorsite.com
jouwweb.site

// Joyent : https://www.joyent.com/
// Submitted by Brian Bennett <brian.bennett@joyent.com>
*.cns.joyent.com
*.triton.zone

// JS.ORG : http://dns.js.org
// Submitted by Stefan Keim <admin@js.org>
js.org

// KaasHosting : http://www.kaashosting.nl/
// Submitted by Wouter Bakker <hostmaster@kaashosting.nl>
kaas.gg
khplay.nl

// Kapsi : https://kapsi.fi
// Submitted by Tomi Juntunen <erani@kapsi.fi>
kapsi.fi

// Katholieke Universiteit Leuven : https://www.kuleuven.be
// Submitted by Abuse KU Leuven <abuse@kuleuven.be>
ezproxy.kuleuven.be
kuleuven.cloud

// Keyweb AG : https://www.keyweb.de
// Submitted by Martin Dannehl <postmaster@keymachine.de>
keymachine.de

// KingHost : https://king.host
// Submitted by Felipe Keller Braz <felipebraz@kinghost.com.br>
kinghost.net
uni5.net

// KnightPoint Systems, LLC : http://www.knightpoint.com/
// Submitted by Roy Keene <rkeene@knightpoint.com>
knightpoint.systems

// KoobinEvent, SL : https://www.koobin.com
// Submitted by Iván Oliva <ivan.oliva@koobin.com>
koobin.events

// Krellian Ltd. : https://krellian.com
// Submitted by Ben Francis <ben@krellian.com>
webthings.io
krellian.net

// KUROKU LTD : https://kuroku.ltd/
// Submitted by DisposaBoy <security@oya.to>
oya.to

// KV GmbH : https://www.nic.co.de
// Submitted by KV GmbH <registry@kv-gmbh.de>
// Abuse reports to <registry@kv-gmbh.de>
co.de

// Laravel Holdings, Inc. : https://laravel.com
// Submitted by André Valentin & James Brooks <security@laravel.com>
laravel.cloud
on-forge.com
on-vapor.com

// LCube - Professional hosting e.K. : https://www.lcube-webhosting.de
// Submitted by Lars Laehn <info@lcube.de>
git-repos.de
lcube-server.de
svn-repos.de

// Leadpages : https://www.leadpages.net
// Submitted by Greg Dallavalle <domains@leadpages.net>
leadpages.co
lpages.co
lpusercontent.com

// Leapcell : https://leapcell.io/
// Submitted by Leapcell Team <support@leapcell.io>
leapcell.app
leapcell.dev
leapcell.online

// Liara : https://liara.ir
// Submitted by Amirhossein Badinloo <info@liara.ir>
liara.run
iran.liara.run

// libp2p project : https://libp2p.io
// Submitted by Interplanetary Shipyard <domains@ipshipyard.com>
libp2p.direct

// Libre IT Ltd : https://libre.nz
// Submitted by Tomas Maggio <support@libre.nz>
runcontainers.dev

// Lifetime Hosting : https://Lifetime.Hosting/
// Submitted by Mike Fillator <support@lifetime.hosting>
co.business
co.education
co.events
co.financial
co.network
co.place
co.technology

// linkyard ldt : https://www.linkyard.ch/
// Submitted by Mario Siegenthaler <mario.siegenthaler@linkyard.ch>
linkyard-cloud.ch
linkyard.cloud

// Linode : https://linode.com
// Submitted by <security@linode.com>
members.linode.com
*.nodebalancer.linode.com
*.linodeobjects.com
ip.linodeusercontent.com

// LiquidNet Ltd : http://www.liquidnetlimited.com/
// Submitted by Victor Velchev <admin@liquidnetlimited.com>
we.bs

// Listen53 : https://www.l53.net
// Submitted by Gerry Keh <biz@l53.net>
filegear-sg.me
ggff.net

// Localcert : https://localcert.dev
// Submitted by Lann Martin <security@localcert.dev>
*.user.localcert.dev

// Localtonet : https://localtonet.com/
// Submitted by Burak Isleyici <support@localtonet.com>
localtonet.com
*.localto.net

// Lodz University of Technology LODMAN regional domains : https://www.man.lodz.pl/dns
// Submitted by Piotr Wilk <dns@man.lodz.pl>
lodz.pl
pabianice.pl
plock.pl
sieradz.pl
skierniewice.pl
zgierz.pl

// Log'in Line : https://www.loginline.com/
// Submitted by Rémi Mach <remi.mach@loginline.com>
loginline.app
loginline.dev
loginline.io
loginline.services
loginline.site

// Lõhmus Family, The : https://lohmus.me/
// Submitted by Heiki Lõhmus <hostmaster@lohmus.me>
lohmus.me

// Lovable : https://lovable.dev
// Submitted by Fabian Hedin <security@lovable.dev>
lovable.app
lovableproject.com
lovable.run
lovable.sh

// LubMAN UMCS Sp. z o.o : https://lubman.pl/
// Submitted by Ireneusz Maliszewski <ireneusz.maliszewski@lubman.pl>
krasnik.pl
leczna.pl
lubartow.pl
lublin.pl
poniatowa.pl
swidnik.pl

// Lug.org.uk : https://lug.org.uk
// Submitted by Jon Spriggs <admin@lug.org.uk>
glug.org.uk
lug.org.uk
lugs.org.uk

// Lukanet Ltd : https://lukanet.com
// Submitted by Anton Avramov <register@lukanet.com>
barsy.bg
barsy.club
barsycenter.com
barsyonline.com
barsy.de
barsy.dev
barsy.eu
barsy.gr
barsy.in
barsy.info
barsy.io
barsy.me
barsy.menu
barsyonline.menu
barsy.mobi
barsy.net
barsy.online
barsy.org
barsy.pro
barsy.pub
barsy.ro
barsy.rs
barsy.shop
barsyonline.shop
barsy.site
barsy.store
barsy.support
barsy.uk
barsy.co.uk
barsyonline.co.uk

// Lutra : https://lutra.ai
// Submitted by Joshua Newman <public-suffix-list@lutra.ai>
*.lutrausercontent.com

// Luyani Inc. : https://luyani.com/
// Submitted by Umut Gumeli <public-suffix-list@luyani.com>
luyani.app
luyani.net

// Magento Commerce
// Submitted by Damien Tournoud <dtournoud@magento.cloud>
*.magentosite.cloud

// Mail.Ru Group : https://hb.cldmail.ru
// Submitted by Ilya Zaretskiy <zaretskiy@corp.mail.ru>
hb.cldmail.ru

// MathWorks : https://www.mathworks.com/
// Submitted by Emily Reed <psl-maintainers@groups.mathworks.com>
matlab.cloud
modelscape.com
mwcloudnonprod.com
polyspace.com

// May First - People Link : https://mayfirst.org/
// Submitted by Jamie McClelland <info@mayfirst.org>
mayfirst.info
mayfirst.org

// Maze Play : https://www.mazeplay.com
// Submitted by Adam Humpherys <adam@mws.dev>
mazeplay.com

// McHost : https://mchost.ru
// Submitted by Evgeniy Subbotin <e.subbotin@mchost.ru>
mcdir.me
mcdir.ru
vps.mcdir.ru
mcpre.ru

// Mediatech : https://mediatech.by
// Submitted by Evgeniy Kozhuhovskiy <ugenk@mediatech.by>
mediatech.by
mediatech.dev

// Medicom Health : https://medicomhealth.com
// Submitted by Michael Olson <molson@medicomhealth.com>
hra.health

// MedusaJS, Inc : https://medusajs.com/
// Submitted by Stevche Radevski <engineering@medusajs.com>
medusajs.app

// Memset hosting : https://www.memset.com
// Submitted by Tom Whitwell <domains@memset.com>
miniserver.com
memset.net

// Messerli Informatik AG : https://www.messerli.ch/
// Submitted by Ruben Schmidmeister <psl-maintainers@messerli.ch>
messerli.app

// Meta Platforms, Inc. : https://meta.com/
// Submitted by Jacob Cordero <public-suffix@meta.com>
atmeta.com
apps.fbsbx.com

// MetaCentrum, CESNET z.s.p.o. : https://www.metacentrum.cz/en/
// Submitted by Zdeněk Šustr <zdenek.sustr@cesnet.cz> and Radim Janča <janca@cesnet.cz>
*.cloud.metacentrum.cz
custom.metacentrum.cz
flt.cloud.muni.cz
usr.cloud.muni.cz

// Meteor Development Group : https://www.meteor.com/hosting
// Submitted by Pierre Carrier <pierre@meteor.com>
meteorapp.com
eu.meteorapp.com

// Michau Enterprises Limited : http://www.co.pl/
co.pl

// Microsoft Corporation : http://microsoft.com
// Submitted by Public Suffix List Admin <msftpsladmin@microsoft.com>
// Managed by Corporate Domains
// Microsoft Azure : https://home.azure
*.azurecontainer.io
azure-api.net
azure-mobile.net
azureedge.net
azurefd.net
azurestaticapps.net
1.azurestaticapps.net
2.azurestaticapps.net
3.azurestaticapps.net
4.azurestaticapps.net
5.azurestaticapps.net
6.azurestaticapps.net
7.azurestaticapps.net
centralus.azurestaticapps.net
eastasia.azurestaticapps.net
eastus2.azurestaticapps.net
westeurope.azurestaticapps.net
westus2.azurestaticapps.net
azurewebsites.net
cloudapp.net
trafficmanager.net
blob.core.windows.net
servicebus.windows.net

// MikroTik : https://mikrotik.com
// Submitted by MikroTik SysAdmin Team <support@mikrotik.com>
routingthecloud.com
sn.mynetname.net
routingthecloud.net
routingthecloud.org

// Million Software, Inc : https://million.dev/
// Submitted by Rayhan Noufal Arayilakath <security@million.dev>
same-app.com
same-preview.com

// minion.systems : http://minion.systems
// Submitted by Robert Böttinger <r@minion.systems>
csx.cc

// Mittwald CM Service GmbH & Co. KG : https://mittwald.de
// Submitted by Marco Rieger <security@mittwald.de>
mydbserver.com
webspaceconfig.de
mittwald.info
mittwaldserver.info
typo3server.info
project.space

// MODX Systems LLC : https://modx.com
// Submitted by Elizabeth Southwell <elizabeth@modx.com>
modx.dev

// Mozilla Foundation : https://mozilla.org/
// Submitted by glob <glob@mozilla.com>
bmoattachments.org

// MSK-IX : https://www.msk-ix.ru/
// Submitted by Khannanov Roman <r.khannanov@msk-ix.ru>
net.ru
org.ru
pp.ru

// Mythic Beasts : https://www.mythic-beasts.com
// Submitted by Paul Cammish <kelduum@mythic-beasts.com>
hostedpi.com
caracal.mythic-beasts.com
customer.mythic-beasts.com
fentiger.mythic-beasts.com
lynx.mythic-beasts.com
ocelot.mythic-beasts.com
oncilla.mythic-beasts.com
onza.mythic-beasts.com
sphinx.mythic-beasts.com
vs.mythic-beasts.com
x.mythic-beasts.com
yali.mythic-beasts.com
cust.retrosnub.co.uk

// Nabu Casa : https://www.nabucasa.com
// Submitted by Paulus Schoutsen <infra@nabucasa.com>
ui.nabu.casa

// Net at Work Gmbh : https://www.netatwork.de
// Submitted by Jan Jaeschke <jan.jaeschke@netatwork.de>
cloud.nospamproxy.com
o365.cloud.nospamproxy.com

// Net libre : https://www.netlib.re
// Submitted by Philippe PITTOLI <security@netlib.re>
netlib.re

// Netfy Domains : https://netfy.domains
// Submitted by Suranga Ranasinghe <security@mavicsoft.com>
netfy.app

// Netlify : https://www.netlify.com
// Submitted by Jessica Parsons <jessica@netlify.com>
netlify.app

// Neustar Inc.
// Submitted by Trung Tran <Trung.Tran@neustar.biz>
4u.com

// NFSN, Inc. : https://www.NearlyFreeSpeech.NET/
// Submitted by Jeff Wheelhouse <support@nearlyfreespeech.net>
nfshost.com

// NFT.Storage : https://nft.storage/
// Submitted by Vasco Santos <vasco.santos@protocol.ai> or <support@nft.storage>
ipfs.nftstorage.link

// NGO.US Registry : https://nic.ngo.us
// Submitted by Alstra Solutions Ltd. Networking Team <admin@alstra.org>
ngo.us

// ngrok : https://ngrok.com/
// Submitted by Alan Shreve <alan@ngrok.com>
ngrok.app
ngrok-free.app
ngrok.dev
ngrok-free.dev
ngrok.io
ap.ngrok.io
au.ngrok.io
eu.ngrok.io
in.ngrok.io
jp.ngrok.io
sa.ngrok.io
us.ngrok.io
ngrok.pizza
ngrok.pro

// Nicolaus Copernicus University in Torun - MSK TORMAN : https://www.man.torun.pl
torun.pl

// Nimbus Hosting Ltd. : https://www.nimbushosting.co.uk/
// Submitted by Nicholas Ford <dev@nimbushosting.co.uk>
nh-serv.co.uk
nimsite.uk

// No-IP.com : https://noip.com/
// Submitted by Deven Reza <publicsuffixlist@noip.com>
mmafan.biz
myftp.biz
no-ip.biz
no-ip.ca
fantasyleague.cc
gotdns.ch
3utilities.com
blogsyte.com
ciscofreak.com
damnserver.com
ddnsking.com
ditchyourip.com
dnsiskinky.com
dynns.com
geekgalaxy.com
health-carereform.com
homesecuritymac.com
homesecuritypc.com
myactivedirectory.com
mysecuritycamera.com
myvnc.com
net-freaks.com
onthewifi.com
point2this.com
quicksytes.com
securitytactics.com
servebeer.com
servecounterstrike.com
serveexchange.com
serveftp.com
servegame.com
servehalflife.com
servehttp.com
servehumour.com
serveirc.com
servemp3.com
servep2p.com
servepics.com
servequake.com
servesarcasm.com
stufftoread.com
unusualperson.com
workisboring.com
dvrcam.info
ilovecollege.info
no-ip.info
brasilia.me
ddns.me
dnsfor.me
hopto.me
loginto.me
noip.me
webhop.me
bounceme.net
ddns.net
eating-organic.net
mydissent.net
myeffect.net
mymediapc.net
mypsx.net
mysecuritycamera.net
nhlfan.net
no-ip.net
pgafan.net
privatizehealthinsurance.net
redirectme.net
serveblog.net
serveminecraft.net
sytes.net
cable-modem.org
collegefan.org
couchpotatofries.org
hopto.org
mlbfan.org
myftp.org
mysecuritycamera.org
nflfan.org
no-ip.org
read-books.org
ufcfan.org
zapto.org
no-ip.co.uk
golffan.us
noip.us
pointto.us

// NodeArt : https://nodeart.io
// Submitted by Konstantin Nosov <Nosov@nodeart.io>
stage.nodeart.io

// Noop : https://noop.app
// Submitted by Nathaniel Schweinberg <noop@rearc.io>
*.developer.app
noop.app

// Northflank Ltd. : https://northflank.com/
// Submitted by Marco Suter <marco@northflank.com>
*.northflank.app
*.build.run
*.code.run
*.database.run
*.migration.run

// Noticeable : https://noticeable.io
// Submitted by Laurent Pellegrino <security@noticeable.io>
noticeable.news

// Notion Labs, Inc : https://www.notion.so/
// Submitted by Jess Yao <trust-core-team@makenotion.com>
notion.site

// Now-DNS : https://now-dns.com
// Submitted by Steve Russell <steve@now-dns.com>
dnsking.ch
mypi.co
myiphost.com
forumz.info
soundcast.me
tcp4.me
dnsup.net
hicam.net
now-dns.net
ownip.net
vpndns.net
dynserv.org
now-dns.org
x443.pw
ntdll.top
freeddns.us

// nsupdate.info : https://www.nsupdate.info/
// Submitted by Thomas Waldmann <info@nsupdate.info>
nsupdate.info
nerdpol.ovh

// NYC.mn : https://dot.nyc.mn/
// Submitted by NYC.mn Subdomain Service <nyc.mn@mailfence.com>
nyc.mn

// O3O.Foundation : https://o3o.foundation/
// Submitted by the prvcy.page Registry Team <info@o3o.foundation>
prvcy.page

// Obl.ong : https://obl.ong
// Submitted by Reese Armstrong <team@obl.ong>
obl.ong

// Observable, Inc. : https://observablehq.com
// Submitted by Mike Bostock <dns@observablehq.com>
observablehq.cloud
static.observableusercontent.com

// OMG.LOL : https://omg.lol
// Submitted by Adam Newbold <adam@omg.lol>
omg.lol

// Omnibond Systems, LLC. : https://www.omnibond.com
// Submitted by Cole Estep <cole@omnibond.com>
cloudycluster.net

// OmniWe Limited : https://omniwe.com
// Submitted by Vicary Archangel <vicary@omniwe.com>
omniwe.site

// One.com : https://www.one.com/
// Submitted by Jacob Bunk Nielsen <jbn@one.com>
123webseite.at
123website.be
simplesite.com.br
123website.ch
simplesite.com
123webseite.de
123hjemmeside.dk
123miweb.es
123kotisivu.fi
123siteweb.fr
simplesite.gr
123homepage.it
123website.lu
123website.nl
123hjemmeside.no
service.one
website.one
simplesite.pl
123paginaweb.pt
123minsida.se

// ONID : https://get.onid.ca
// Submitted by ONID Engineering Team <psl@onid.ca>
onid.ca

// Open Domains : https://open-domains.net
// Submitted by William Harrison <admin@open-domains.net>
is-a-fullstack.dev
is-cool.dev
is-not-a.dev
localplayer.dev
is-local.org

// Open Social : https://www.getopensocial.com/
// Submitted by Alexander Varwijk <security@getopensocial.com>
opensocial.site

// OpenAI : https://openai.com
// Submitted by Thomas Shadwell <security@openai.com>
*.oaiusercontent.com

// OpenCraft GmbH : http://opencraft.com/
// Submitted by Sven Marnach <sven@opencraft.com>
opencraft.hosting

// OpenHost : https://registry.openhost.uk
// Submitted by OpenHost Registry Team <support@openhost.uk>
16-b.it
32-b.it
64-b.it

// OpenResearch GmbH : https://openresearch.com/
// Submitted by Philipp Schmid <ops@openresearch.com>
orsites.com

// Opera Software, A.S.A.
// Submitted by Yngve Pettersen <yngve@opera.com>
operaunite.com

// Oracle Dyn : https://cloud.oracle.com/home https://dyn.com/dns/
// Submitted by Gregory Drake <support@dyn.com>
// Note: This is intended to also include customer-oci.com due to wildcards implicitly including the current label
*.customer-oci.com
*.oci.customer-oci.com
*.ocp.customer-oci.com
*.ocs.customer-oci.com
*.oraclecloudapps.com
*.oraclegovcloudapps.com
*.oraclegovcloudapps.uk

// Orange : https://www.orange.com
// Submitted by Alexandre Linte <alexandre.linte@orange.com>
tech.orange

// OsSav Technology Ltd. : https://ossav.com/
// Submitted by OsSav Technology Ltd. <support@ossav.com>
// https://nic.can.re
can.re

// Oursky Limited : https://authgear.com/
// Submitted by Authgear Team <hello@authgear.com> & Skygear Developer <hello@skygear.io>
authgear-staging.com
authgearapps.com
skygearapp.com

// OutSystems
// Submitted by Duarte Santos <domain-admin@outsystemscloud.com>
outsystemscloud.com

// OVHcloud : https://ovhcloud.com
// Submitted by Vincent Cassé <vincent.casse@ovhcloud.com>
*.hosting.ovh.net
*.webpaas.ovh.net

// OwnProvider GmbH : http://www.ownprovider.com
// Submitted by Jan Moennich <jan.moennich@ownprovider.com>
ownprovider.com
own.pm

// OwO : https://whats-th.is/
// Submitted by Dean Sheather <dean@deansheather.com>
*.owo.codes

// OX : http://www.ox.rs
// Submitted by Adam Grand <webmaster@mail.ox.rs>
ox.rs

// oy.lc
// Submitted by Charly Coste <changaco@changaco.oy.lc>
oy.lc

// Pagefog : https://pagefog.com/
// Submitted by Derek Myers <derek@pagefog.com>
pgfog.com

// PageXL : https://pagexl.com
// Submitted by Yann Guichard <yann@pagexl.com>
pagexl.com

// Pantheon Systems, Inc. : https://pantheon.io/
// Submitted by Gary Dylina <gary@pantheon.io>
gotpantheon.com
pantheonsite.io

// Paywhirl, Inc : https://paywhirl.com/
// Submitted by Daniel Netzer <dan@paywhirl.com>
*.paywhirl.com

// pcarrier.ca Software Inc : https://pcarrier.ca/
// Submitted by Pierre Carrier <pc@rrier.ca>
*.xmit.co
xmit.dev
madethis.site
srv.us
gh.srv.us
gl.srv.us

// PE Ulyanov Kirill Sergeevich : https://airy.host
// Submitted by Kirill Ulyanov <k.ulyanov@airy.host>
lk3.ru

// Peplink | Pepwave : http://peplink.com/
// Submitted by Steve Leung <steveleung@peplink.com>
mypep.link

// Perspecta : https://perspecta.com/
// Submitted by Kenneth Van Alstyne <kvanalstyne@perspecta.com>
perspecta.cloud

// Plain : https://www.plain.com/
// Submitted by Jesús Hernández <security@plain.com>
support.site

// Planet-Work : https://www.planet-work.com/
// Submitted by Frédéric VANNIÈRE <f.vanniere@planet-work.com>
on-web.fr

// Platform.sh : https://platform.sh
// Submitted by Nikola Kotur <nikola@platform.sh>
*.upsun.app
upsunapp.com
ent.platform.sh
eu.platform.sh
us.platform.sh
*.platformsh.site
*.tst.site

// Platter : https://platter.dev
// Submitted by Patrick Flor <patrick@platter.dev>
platter-app.dev
platterp.us

// Pley AB : https://www.pley.com/
// Submitted by Henning Pohl <infra@pley.com>
pley.games

// Porter : https://porter.run/
// Submitted by Rudraksh MK <rudi@porter.run>
onporter.run

// Positive Codes Technology Company : http://co.bn/faq.html
// Submitted by Zulfais <pc@co.bn>
co.bn

// Postman, Inc : https://postman.com
// Submitted by Rahul Dhawan <security@postman.com>
postman-echo.com
pstmn.io
mock.pstmn.io
httpbin.org

// prequalifyme.today : https://prequalifyme.today
// Submitted by DeepakTiwari deepak@ivylead.io
prequalifyme.today

// prgmr.com : https://prgmr.com/
// Submitted by Sarah Newman <owner@prgmr.com>
xen.prgmr.com

// priv.at : http://www.nic.priv.at/
// Submitted by registry <lendl@nic.at>
priv.at

// PROJECT ELIV : https://eliv.kr/
// Submitted by PROJECT ELIV Domain Team <team@eliv.kr>
c01.kr
eliv-cdn.kr
eliv-dns.kr
mmv.kr
vki.kr

// project-study : https://project-study.com
// Submitted by yumenewa <admin@project-study.com>
dev.project-study.com

// Protonet GmbH : http://protonet.io
// Submitted by Martin Meier <admin@protonet.io>
protonet.io

// PT Ekossistim Indo Digital : https://e.id
// Submitted by Eid Team <support@corp.e.id>
e.id

// Publication Presse Communication SARL : https://ppcom.fr
// Submitted by Yaacov Akiba Slama <admin@chirurgiens-dentistes-en-france.fr>
chirurgiens-dentistes-en-france.fr
byen.site

// pubtls.org : https://www.pubtls.org
// Submitted by Kor Nielsen <kor@pubtls.org>
pubtls.org

// PythonAnywhere LLP : https://www.pythonanywhere.com
// Submitted by Giles Thomas <giles@pythonanywhere.com>
pythonanywhere.com
eu.pythonanywhere.com

// QA2
// Submitted by Daniel Dent : https://www.danieldent.com/
qa2.com

// QCX
// Submitted by Cassandra Beelen <cassandra@beelen.one>
qcx.io
*.sys.qcx.io

// QNAP System Inc : https://www.qnap.com
// Submitted by Nick Chang <cloudadmin@qnap.com>
myqnapcloud.cn
alpha-myqnapcloud.com
dev-myqnapcloud.com
mycloudnas.com
mynascloud.com
myqnapcloud.com

// QOTO, Org.
// Submitted by Jeffrey Phillips Freeman <jeffrey.freeman@qoto.org>
qoto.io

// Qualifio : https://qualifio.com/
// Submitted by Xavier De Cock <xdecock@gmail.com>
qualifioapp.com

// Quality Unit : https://qualityunit.com
// Submitted by Vasyl Tsalko <vtsalko@qualityunit.com>
ladesk.com

// Qualy : https://qualyhq.com
// Submitted by Raphael Arias <security@qualyhq.com>
*.qualyhqpartner.com
*.qualyhqportal.com

// QuickBackend : https://www.quickbackend.com
// Submitted by Dani Biro <dani@pymet.com>
qbuser.com

// Quip : https://quip.com
// Submitted by Patrick Linehan <plinehan@quip.com>
*.quipelements.com

// Qutheory LLC : http://qutheory.io
// Submitted by Jonas Schwartz <jonas@qutheory.io>
vapor.cloud
vaporcloud.io

// Rackmaze LLC : https://www.rackmaze.com
// Submitted by Kirill Pertsev <kika@rackmaze.com>
rackmaze.com
rackmaze.net

// Rad Web Hosting : https://radwebhosting.com
// Submitted by Scott Claeys <s.claeys@radwebhosting.com>
cloudsite.builders
myradweb.net
servername.us

// Radix FZC : http://domains.in.net
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
web.in
in.net

// Raidboxes GmbH : https://raidboxes.de
// Submitted by Auke Tembrink <hostmaster@raidboxes.de>
myrdbx.io
site.rb-hosting.io

// Railway Corporation : https://railway.com
// Submitted by Phineas Walton <dns@railway.com>
up.railway.app

// Rancher Labs, Inc : https://rancher.com
// Submitted by Vincent Fiduccia <domains@rancher.com>
*.on-rancher.cloud
*.on-k3s.io
*.on-rio.io

// RavPage : https://www.ravpage.co.il
// Submitted by Roni Horowitz <roni@responder.co.il>
ravpage.co.il

// Read The Docs, Inc : https://www.readthedocs.org
// Submitted by David Fischer <team@readthedocs.org>
readthedocs-hosted.com
readthedocs.io

// Red Hat, Inc. OpenShift : https://openshift.redhat.com/
// Submitted by Tim Kramer <tkramer@rhcloud.com>
rhcloud.com

// Redgate Software : https://red-gate.com
// Submitted by Andrew Farries <andrew.farries@red-gate.com>
instances.spawn.cc

// Render : https://render.com
// Submitted by Anurag Goel <dev@render.com>
onrender.com
app.render.com

// Repl.it : https://repl.it
// Submitted by Lincoln Bergeson <psl@repl.it>
replit.app
id.replit.app
firewalledreplit.co
id.firewalledreplit.co
repl.co
id.repl.co
replit.dev
archer.replit.dev
bones.replit.dev
canary.replit.dev
global.replit.dev
hacker.replit.dev
id.replit.dev
janeway.replit.dev
kim.replit.dev
kira.replit.dev
kirk.replit.dev
odo.replit.dev
paris.replit.dev
picard.replit.dev
pike.replit.dev
prerelease.replit.dev
reed.replit.dev
riker.replit.dev
sisko.replit.dev
spock.replit.dev
staging.replit.dev
sulu.replit.dev
tarpit.replit.dev
teams.replit.dev
tucker.replit.dev
wesley.replit.dev
worf.replit.dev
repl.run

// Resin.io : https://resin.io
// Submitted by Tim Perry <tim@resin.io>
resindevice.io
devices.resinstaging.io

// RethinkDB : https://www.rethinkdb.com/
// Submitted by Chris Kastorff <info@rethinkdb.com>
hzc.io

// Rico Developments Limited : https://adimo.co
// Submitted by Colin Brown <hello@adimo.co>
adimo.co.uk

// Riseup Networks : https://riseup.net
// Submitted by Micah Anderson <micah@riseup.net>
itcouldbewor.se

// Roar Domains LLC : https://roar.basketball/
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
aus.basketball
nz.basketball

// ROBOT PAYMENT INC. : https://www.robotpayment.co.jp/
// Submitted by Kentaro Takamori <takamori.kentaro@robotpayment.co.jp>
subsc-pay.com
subsc-pay.net

// Rochester Institute of Technology : http://www.rit.edu/
// Submitted by Jennifer Herting <jchits@rit.edu>
git-pages.rit.edu

// Rocky Enterprise Software Foundation : https://resf.org
// Submitted by Neil Hanlon <neil@resf.org>
rocky.page

// Ruhr University Bochum : https://www.ruhr-uni-bochum.de/
// Submitted by Andreas Jobs <noc@ruhr-uni-bochum.de>
rub.de
ruhr-uni-bochum.de
io.noc.ruhr-uni-bochum.de

// Rusnames Limited : http://rusnames.ru/
// Submitted by Sergey Zotov <admin@rusnames.ru>
биз.рус
ком.рус
крым.рус
мир.рус
мск.рус
орг.рус
самара.рус
сочи.рус
спб.рус
я.рус

// Russian Academy of Sciences
// Submitted by Tech Support <support@rasnet.ru>
ras.ru

// Sakura Frp : https://www.natfrp.com
// Submitted by Bobo Liu <support@natfrp.cloud>
nyat.app

// SAKURA Internet Inc. : https://www.sakura.ad.jp/
// Submitted by Internet Service Department <rs-vendor-ml@sakura.ad.jp>
180r.com
dojin.com
sakuratan.com
sakuraweb.com
x0.com
2-d.jp
bona.jp
crap.jp
daynight.jp
eek.jp
flop.jp
halfmoon.jp
jeez.jp
matrix.jp
mimoza.jp
ivory.ne.jp
mail-box.ne.jp
mints.ne.jp
mokuren.ne.jp
opal.ne.jp
sakura.ne.jp
sumomo.ne.jp
topaz.ne.jp
netgamers.jp
nyanta.jp
o0o0.jp
rdy.jp
rgr.jp
rulez.jp
s3.isk01.sakurastorage.jp
s3.isk02.sakurastorage.jp
saloon.jp
sblo.jp
skr.jp
tank.jp
uh-oh.jp
undo.jp
rs.webaccel.jp
user.webaccel.jp
websozai.jp
xii.jp
squares.net
jpn.org
kirara.st
x0.to
from.tv
sakura.tv

// Salesforce.com, Inc. : https://salesforce.com/
// Submitted by Salesforce Public Suffix List Team <public-suffix-list@salesforce.com>
*.builder.code.com
*.dev-builder.code.com
*.stg-builder.code.com
*.001.test.code-builder-stg.platform.salesforce.com
*.d.crm.dev
*.w.crm.dev
*.wa.crm.dev
*.wb.crm.dev
*.wc.crm.dev
*.wd.crm.dev
*.we.crm.dev
*.wf.crm.dev

// Sandstorm Development Group, Inc. : https://sandcats.io/
// Submitted by Asheesh Laroia <asheesh@sandstorm.io>
sandcats.io

// SBE network solutions GmbH : https://www.sbe.de/
// Submitted by Norman Meilick <nm@sbe.de>
logoip.com
logoip.de

// Scaleway : https://www.scaleway.com/
// Submitted by Scaleway PSL Maintainer <psl-maintainers@scaleway.com>
fr-par-1.baremetal.scw.cloud
fr-par-2.baremetal.scw.cloud
nl-ams-1.baremetal.scw.cloud
cockpit.fr-par.scw.cloud
ddl.fr-par.scw.cloud
dtwh.fr-par.scw.cloud
fnc.fr-par.scw.cloud
functions.fnc.fr-par.scw.cloud
ifr.fr-par.scw.cloud
k8s.fr-par.scw.cloud
nodes.k8s.fr-par.scw.cloud
kafk.fr-par.scw.cloud
mgdb.fr-par.scw.cloud
rdb.fr-par.scw.cloud
s3.fr-par.scw.cloud
s3-website.fr-par.scw.cloud
scbl.fr-par.scw.cloud
whm.fr-par.scw.cloud
priv.instances.scw.cloud
pub.instances.scw.cloud
k8s.scw.cloud
cockpit.nl-ams.scw.cloud
ddl.nl-ams.scw.cloud
dtwh.nl-ams.scw.cloud
ifr.nl-ams.scw.cloud
k8s.nl-ams.scw.cloud
nodes.k8s.nl-ams.scw.cloud
kafk.nl-ams.scw.cloud
mgdb.nl-ams.scw.cloud
rdb.nl-ams.scw.cloud
s3.nl-ams.scw.cloud
s3-website.nl-ams.scw.cloud
scbl.nl-ams.scw.cloud
whm.nl-ams.scw.cloud
cockpit.pl-waw.scw.cloud
ddl.pl-waw.scw.cloud
dtwh.pl-waw.scw.cloud
ifr.pl-waw.scw.cloud
k8s.pl-waw.scw.cloud
nodes.k8s.pl-waw.scw.cloud
kafk.pl-waw.scw.cloud
mgdb.pl-waw.scw.cloud
rdb.pl-waw.scw.cloud
s3.pl-waw.scw.cloud
s3-website.pl-waw.scw.cloud
scbl.pl-waw.scw.cloud
scalebook.scw.cloud
smartlabeling.scw.cloud
dedibox.fr

// schokokeks.org GbR : https://schokokeks.org/
// Submitted by Hanno Böck <hanno@schokokeks.org>
schokokeks.net

// Scottish Government : https://www.gov.scot
// Submitted by Martin Ellis <martin.ellis@gov.scot>
gov.scot
service.gov.scot

// Scry Security : http://www.scrysec.com
// Submitted by Shante Adam <shante@skyhat.io>
scrysec.com

// Scrypted : https://scrypted.app
// Submitted by Koushik Dutta <public-suffix-list@scrypted.app>
client.scrypted.io

// Securepoint GmbH : https://www.securepoint.de
// Submitted by Erik Anders <erik.anders@securepoint.de>
firewall-gateway.com
firewall-gateway.de
my-gateway.de
my-router.de
spdns.de
spdns.eu
firewall-gateway.net
my-firewall.org
myfirewall.org
spdns.org

// Seidat : https://www.seidat.com
// Submitted by Artem Kondratev <accounts@seidat.com>
seidat.net

// Sellfy : https://sellfy.com
// Submitted by Yuriy Romadin <contact@sellfy.com>
sellfy.store

// Sendmsg : https://www.sendmsg.co.il
// Submitted by Assaf Stern <domains@comstar.co.il>
minisite.ms

// Senseering GmbH : https://www.senseering.de
// Submitted by Felix Mönckemeyer <f.moenckemeyer@senseering.de>
senseering.net

// Servebolt AS : https://servebolt.com
// Submitted by Daniel Kjeserud <cloudops@servebolt.com>
servebolt.cloud

// Service Online LLC : http://drs.ua/
// Submitted by Serhii Bulakh <support@drs.ua>
biz.ua
co.ua
pp.ua

// Shanghai Accounting Society : https://www.sasf.org.cn
// Submitted by Information Administration <info@sasf.org.cn>
as.sh.cn

// Sheezy.Art : https://sheezy.art
// Submitted by Nyoom <admin@sheezy.art>
sheezy.games

// Shopblocks : http://www.shopblocks.com/
// Submitted by Alex Bowers <alex@shopblocks.com>
myshopblocks.com

// Shopify : https://www.shopify.com
// Submitted by Alex Richter <alex.richter@shopify.com>
myshopify.com

// Shopit : https://www.shopitcommerce.com/
// Submitted by Craig McMahon <craig@shopitcommerce.com>
shopitsite.com

// shopware AG : https://shopware.com
// Submitted by Jens Küper <cloud@shopware.com>
shopware.shop
shopware.store

// Siemens Mobility GmbH
// Submitted by Oliver Graebner <security@mo-siemens.io>
mo-siemens.io

// SinaAppEngine : http://sae.sina.com.cn/
// Submitted by SinaAppEngine <saesupport@sinacloud.com>
1kapp.com
appchizi.com
applinzi.com
sinaapp.com
vipsinaapp.com

// Siteleaf : https://www.siteleaf.com/
// Submitted by Skylar Challand <support@siteleaf.com>
siteleaf.net

// Small Technology Foundation : https://small-tech.org
// Submitted by Aral Balkan <aral@small-tech.org>
small-web.org

// Smallregistry by Promopixel SARL : https://www.smallregistry.net
// Former AFNIC's SLDs
// Submitted by Jérôme Lipowicz <support@promopixel.com>
aeroport.fr
avocat.fr
chambagri.fr
chirurgiens-dentistes.fr
experts-comptables.fr
medecin.fr
notaires.fr
pharmacien.fr
port.fr
veterinaire.fr

// Smoove.io : https://www.smoove.io/
// Submitted by Dan Kozak <dan@smoove.io>
vp4.me

// Snowflake Inc : https://www.snowflake.com/
// Submitted by Sam Haar <psl@snowflake.com>
*.snowflake.app
*.privatelink.snowflake.app
streamlit.app
streamlitapp.com

// Snowplow Analytics : https://snowplowanalytics.com/
// Submitted by Ian Streeter <ian@snowplowanalytics.com>
try-snowplow.com

// Software Consulting Michal Zalewski : https://www.mafelo.com
// Submitted by Michal Zalewski <security@mafelo.com>
mafelo.net

// Sony Interactive Entertainment LLC : https://sie.com/
// Submitted by David Coles <david.coles@sony.com>
playstation-cloud.com

// SourceHut : https://sourcehut.org
// Submitted by Drew DeVault <sir@cmpwn.com>
srht.site

// SourceLair PC : https://www.sourcelair.com
// Submitted by Antonis Kalipetis <akalipetis@sourcelair.com>
apps.lair.io
*.stolos.io

// sourceWAY GmbH : https://sourceway.de
// Submitted by Richard Reiber <mail@sourceway.de>
4.at
my.at
my.de
*.nxa.eu
nx.gw

// SpeedPartner GmbH : https://www.speedpartner.de/
// Submitted by Stefan Neufeind <info@speedpartner.de>
customer.speedpartner.de

// Spreadshop (sprd.net AG) : https://www.spreadshop.com/
// Submitted by Martin Breest <security@spreadshop.com>
myspreadshop.at
myspreadshop.com.au
myspreadshop.be
myspreadshop.ca
myspreadshop.ch
myspreadshop.com
myspreadshop.de
myspreadshop.dk
myspreadshop.es
myspreadshop.fi
myspreadshop.fr
myspreadshop.ie
myspreadshop.it
myspreadshop.net
myspreadshop.nl
myspreadshop.no
myspreadshop.pl
myspreadshop.se
myspreadshop.co.uk

// StackBlitz : https://stackblitz.com
// Submitted by Dominic Elm & Albert Pai <security@bolt.new>
w-corp-staticblitz.com
w-credentialless-staticblitz.com
w-staticblitz.com
bolt.host

// Stackhero : https://www.stackhero.io
// Submitted by Adrien Gillon <adrien+public-suffix-list@stackhero.io>
stackhero-network.com

// STACKIT GmbH & Co. KG : https://www.stackit.de/en/
// Submitted by STACKIT-DNS Team (Simon Stier) <dns@stackit.cloud>
runs.onstackit.cloud
stackit.gg
stackit.rocks
stackit.run
stackit.zone

// Staclar : https://staclar.com
// Submitted by Q Misell <q@staclar.com>
// Submitted by Matthias Merkel <matthias.merkel@staclar.com>
musician.io
novecore.site

// Standard Library : https://stdlib.com
// Submitted by Jacob Lee <jacob@stdlib.com>
api.stdlib.com

// stereosense GmbH : https://www.involve.me
// Submitted by Florian Burmann <publicsuffix@involve.me>
feedback.ac
forms.ac
assessments.cx
calculators.cx
funnels.cx
paynow.cx
quizzes.cx
researched.cx
tests.cx
surveys.so

// Storacha Network : https://storacha.network
// Submitted by Alan Shaw <support@storacha.network>
ipfs.storacha.link
ipfs.w3s.link

// Storebase : https://www.storebase.io
// Submitted by Tony Schirmer <tony@storebase.io>
storebase.store

// Storipress : https://storipress.com
// Submitted by Benno Liu <benno@storipress.com>
storipress.app

// Storj Labs Inc. : https://storj.io/
// Submitted by Philip Hutchins <hostmaster@storj.io>
storj.farm

// Strapi : https://strapi.io/
// Submitted by Florent Baldino <security@strapi.io>
strapiapp.com
media.strapiapp.com

// Strategic System Consulting (eApps Hosting) : https://www.eapps.com/
// Submitted by Alex Oancea <aoancea@cloudscale365.com>
vps-host.net
atl.jelastic.vps-host.net
njs.jelastic.vps-host.net
ric.jelastic.vps-host.net

// Streak : https://streak.com
// Submitted by Blake Kadatz <eng@streak.com>
streak-link.com
streaklinks.com
streakusercontent.com

// Student-Run Computing Facility : https://www.srcf.net/
// Submitted by Edwin Balani <sysadmins@srcf.net>
soc.srcf.net
user.srcf.net

// Studenten Net Twente : http://www.snt.utwente.nl/
// Submitted by Silke Hofstra <syscom@snt.utwente.nl>
utwente.io

// Sub 6 Limited : http://www.sub6.com
// Submitted by Dan Miller <dm@sub6.com>
temp-dns.com

// Supabase : https://supabase.io
// Submitted by Supabase Security <psl-maintainers@supabase.io>
supabase.co
realtime.supabase.co
storage.supabase.co
supabase.in
supabase.net

// Syncloud : https://syncloud.org
// Submitted by Boris Rybalkin <syncloud@syncloud.it>
syncloud.it

// Synology, Inc. : https://www.synology.com/
// Submitted by Rony Weng <ronyweng@synology.com>
dscloud.biz
direct.quickconnect.cn
dsmynas.com
familyds.com
diskstation.me
dscloud.me
i234.me
myds.me
synology.me
dscloud.mobi
dsmynas.net
familyds.net
dsmynas.org
familyds.org
direct.quickconnect.to
vpnplus.to

// Tabit Technologies Ltd. : https://tabit.cloud/
// Submitted by Oren Agiv <oren@tabit.cloud>
mytabit.com
mytabit.co.il
tabitorder.co.il

// TAIFUN Software AG : http://taifun-software.de
// Submitted by Bjoern Henke <dev-server@taifun-software.de>
taifun-dns.de

// Tailor Inc. : https://www.tailor.tech
// Submitted by Ryuzo Yamamoto <psl-maintainers@tailor.tech>
erp.dev
web.erp.dev

// Tailscale Inc. : https://www.tailscale.com
// Submitted by David Anderson <infra+public-suffix-list@tailscale.com>
ts.net
*.c.ts.net

// TASK geographical domains : https://task.gda.pl/en/services/for-entrepreneurs/
gda.pl
gdansk.pl
gdynia.pl
med.pl
sopot.pl

// Tave Creative Corp : https://tave.com/
// Submitted by Adrian Ziemkowski <devops@tave.com>
taveusercontent.com

// tawk.to, Inc : https://www.tawk.to
// Submitted by tawk.to developer team <dev-accounts@tawk.to>
p.tawk.email
p.tawkto.email

// Tche.br : https://tche.br
// Submitted by Bruno Lorensi <suporte@tche.br>
tche.br

// team.blue : https://team.blue
// Submitted by Cedric Dubois <cedric.dubois@team.blue>
site.tb-hosting.com

// Teckids e.V. : https://www.teckids.org
// Submitted by Dominik George <dominik.george@teckids.org>
edugit.io
s3.teckids.org

// Telebit : https://telebit.cloud
// Submitted by AJ ONeal <aj@telebit.cloud>
telebit.app
telebit.io
*.telebit.xyz

// Teleport : https://goteleport.com
// Submitted by Rob Picard <security@goteleport.com>
teleport.sh

// Thingdust AG : https://thingdust.com/
// Submitted by Adrian Imboden <adi@thingdust.com>
*.firenet.ch
*.svc.firenet.ch
reservd.com
thingdustdata.com
cust.dev.thingdust.io
reservd.dev.thingdust.io
cust.disrec.thingdust.io
reservd.disrec.thingdust.io
cust.prod.thingdust.io
cust.testing.thingdust.io
reservd.testing.thingdust.io

// ticket i/O GmbH : https://ticket.io
// Submitted by Christian Franke <it@ticket.io>
tickets.io

// Tlon.io : https://tlon.io
// Submitted by Mark Staarink <mark@tlon.io>
arvo.network
azimuth.network
tlon.network

// Tor Project, Inc. : https://torproject.org
// Submitted by Antoine Beaupré <anarcat@torproject.org>
torproject.net
pages.torproject.net

// TownNews.com : http://www.townnews.com
// Submitted by Dustin Ward <dward@townnews.com>
townnews-staging.com

// TrafficPlex GmbH : https://www.trafficplex.de/
// Submitted by Phillipp Röll <phillipp.roell@trafficplex.de>
12hp.at
2ix.at
4lima.at
lima-city.at
12hp.ch
2ix.ch
4lima.ch
lima-city.ch
trafficplex.cloud
de.cool
12hp.de
2ix.de
4lima.de
lima-city.de
1337.pictures
clan.rip
lima-city.rocks
webspace.rocks
lima.zone

// TransIP : https://www.transip.nl
// Submitted by Rory Breuk <rbreuk@transip.nl> and Cedric Dubois <cedric.dubois@team.blue>
*.transurl.be
*.transurl.eu
site.transip.me
*.transurl.nl

// TuxFamily : http://tuxfamily.org
// Submitted by TuxFamily administrators <adm@staff.tuxfamily.org>
tuxfamily.org

// TwoDNS : https://www.twodns.de/
// Submitted by TwoDNS-Support <support@two-dns.de>
dd-dns.de
dray-dns.de
draydns.de
dyn-vpn.de
dynvpn.de
mein-vigor.de
my-vigor.de
my-wan.de
syno-ds.de
synology-diskstation.de
synology-ds.de
diskstation.eu
diskstation.org

// Typedream : https://typedream.com
// Submitted by Putri Karunia <putri@typedream.com>
typedream.app

// Typeform : https://www.typeform.com
// Submitted by Typeform <ops@typeform.com>
pro.typeform.com

// Uberspace : https://uberspace.de
// Submitted by Moritz Werner <mwerner@jonaspasche.com>
uber.space

// UDR Limited : http://www.udr.hk.com
// Submitted by registry <hostmaster@udr.hk.com>
hk.com
inc.hk
ltd.hk
hk.org

// UK Intis Telecom LTD : https://it.com
// Submitted by ITComdomains <to@it.com>
it.com

// Unison Computing, PBC : https://unison.cloud
// Submitted by Simon Højberg <security@unison.cloud>
unison-services.cloud

// United Gameserver GmbH : https://united-gameserver.de
// Submitted by Stefan Schwarz <sysadm@united-gameserver.de>
virtual-user.de
virtualuser.de

// United States Writing Corporation : https://uswriting.co
// Submitted by Andrew Sampson <security@obj.ag>
obj.ag

// UNIVERSAL DOMAIN REGISTRY : https://www.udr.org.yt/
// see also: whois -h whois.udr.org.yt help
// Submitted by Atanunu Igbunuroghene <publicsuffixlist@udr.org.yt>
name.pm
sch.tf
biz.wf
sch.wf
org.yt

// University of Banja Luka : https://unibl.org
// Domains for Republic of Srpska administrative entity.
// Submitted by Marko Ivanovic <kormang@hotmail.rs>
rs.ba

// University of Bielsko-Biala regional domain : http://dns.bielsko.pl/
// Submitted by Marcin <dns@ath.bielsko.pl>
bielsko.pl

// urown.net : https://urown.net
// Submitted by Hostmaster <hostmaster@urown.net>
urown.cloud
dnsupdate.info

// US REGISTRY LLC : http://us.org
// Submitted by Gavin Brown <gavin.brown@centralnic.com>
us.org

// V.UA Domain Registry: https://www.v.ua/
// Submitted by Serhii Rostilo <admin@v.ua>
v.ua

// Val Town, Inc : https://val.town/
// Submitted by Tom MacWright <security@val.town>
val.run
web.val.run

// Vercel, Inc : https://vercel.com/
// Submitted by Laurens Duijvesteijn <security@vercel.com>
vercel.app
v0.build
vercel.dev
vusercontent.net
vercel.run
now.sh

// VeryPositive SIA : http://very.lv
// Submitted by Danko Aleksejevs <danko@very.lv>
2038.io

// Virtual-Info : https://www.virtual-info.info/
// Submitted by Adnan RIHAN <hostmaster@v-info.info>
v-info.info

// VistaBlog : https://vistablog.ir/
// Submitted by Hossein Piri <info@vistablog.ir>
vistablog.ir

// Viva Republica, Inc. : https://toss.im/
// Submitted by Deus Team <deus@toss.im>
deus-canvas.com

// Voorloper.com : https://voorloper.com
// Submitted by Nathan van Bakel <info@voorloper.com>
voorloper.cloud

// Vultr Objects : https://www.vultr.com/products/object-storage/
// Submitted by Niels Maumenee <storage@vultr.com>
*.vultrobjects.com

// Waffle Computer Inc., Ltd. : https://docs.waffleinfo.com
// Submitted by Masayuki Note <masa@blade.wafflecell.com>
wafflecell.com

// Walrus : https://walrus.xyz
// Submitted by Max Spector <info@walrus.xyz>
wal.app

// Webflow, Inc. : https://www.webflow.com
// Submitted by Webflow Security Team <security@webflow.com>
webflow.io
webflowtest.io

// WebHare bv : https://www.webhare.com/
// Submitted by Arnold Hendriks <info@webhare.com>
*.webhare.dev

// WebHotelier Technologies Ltd : https://www.webhotelier.net/
// Submitted by Apostolos Tsakpinis <apostolos.tsakpinis@gmail.com>
bookonline.app
hotelwithflight.com
reserve-online.com
reserve-online.net

// WebPros International, LLC : https://webpros.com/
// Submitted by Nicolas Rochelemagne <public.suffix@webpros.com>
cprapid.com
pleskns.com
wp2.host
pdns.page
plesk.page
cpanel.site
wpsquared.site

// WebWaddle Ltd : https://webwaddle.com/
// Submitted by Merlin Glander <hostmaster@webwaddle.com>
*.wadl.top

// Western Digital Technologies, Inc : https://www.wdc.com
// Submitted by Jung Jin <jungseok.jin@wdc.com>
remotewd.com

// Whatbox Inc. : https://whatbox.ca/
// Submitted by Anthony Ryan <servers@whatbox.ca>
box.ca

// WIARD Enterprises : https://wiardweb.com
// Submitted by Kidd Hustle <kiddhustle@wiardweb.com>
pages.wiardweb.com

// Wikimedia Foundation : https://wikitech.wikimedia.org
// Submitted by Timo Tijhof <noc@wikimedia.org>
toolforge.org
wmcloud.org
beta.wmcloud.org
wmflabs.org

// William Harrison : https://wharrison.com.au
// Submitted by William Harrison <security@hrsn.net>
wdh.app
hrsn.au
vps.hrsn.au
hrsn.dev
is-a.dev
localcert.net

// Windsurf : https://windsurf.com
// Submitted by Douglas Chen <psl@windsurf.com>
windsurf.app
windsurf.build

// WISP : https://wisp.gg
// Submitted by Stepan Fedotov <stepan@wisp.gg>
panel.gg
daemon.panel.gg

// Wix.com, Inc. : https://www.wix.com
// Submitted by Shahar Talmi / Alon Kochba <publicsuffixlist@wix.com>
wixsite.com
wixstudio.com
editorx.io
wixstudio.io
wix.run

// Wizard Zines : https://wizardzines.com
// Submitted by Julia Evans <julia@wizardzines.com>
messwithdns.com

// WoltLab GmbH : https://www.woltlab.com
// Submitted by Tim Düsterhus <security@woltlab.cloud>
woltlab-demo.com
myforum.community
community-pro.de
diskussionsbereich.de
community-pro.net
meinforum.net

// Woods Valldata : https://www.woodsvalldata.co.uk/
// Submitted by Chris Whittle <chris.whittle@woodsvalldata.co.uk>
affinitylottery.org.uk
raffleentry.org.uk
weeklylottery.org.uk

// WP Engine : https://wpengine.com/
// Submitted by Michael Smith <michael.smith@wpengine.com>
// Submitted by Brandon DuRette <brandon.durette@wpengine.com>
wpenginepowered.com
js.wpenginepowered.com

// XenonCloud GbR : https://xenoncloud.net
// Submitted by Julian Uphoff <publicsuffixlist@xenoncloud.net>
*.xenonconnect.de
half.host

// XnBay Technology : http://www.xnbay.com/
// Submitted by XnBay Developer <developer.xncloud@gmail.com>
xnbay.com
u2.xnbay.com
u2-local.xnbay.com

// XS4ALL Internet bv : https://www.xs4all.nl/
// Submitted by Daniel Mostertman <unixbeheer+publicsuffix@xs4all.net>
cistron.nl
demon.nl
xs4all.space

// Yandex.Cloud LLC : https://cloud.yandex.com
// Submitted by Alexander Lodin <security+psl@yandex-team.ru>
yandexcloud.net
storage.yandexcloud.net
website.yandexcloud.net
sourcecraft.site

// YesCourse Pty Ltd : https://yescourse.com
// Submitted by Atul Bhouraskar <atul@yescourse.com>
official.academy

// Yola : https://www.yola.com/
// Submitted by Stefano Rivera <stefano@yola.com>
yolasite.com

// Yunohost : https://yunohost.org
// Submitted by Valentin Grimaud <security@yunohost.org>
ynh.fr
nohost.me
noho.st

// ZaNiC : http://www.za.net/
// Submitted by registry <hostmaster@nic.za.net>
za.net
za.org

// ZAP-Hosting GmbH & Co. KG : https://zap-hosting.com
// Submitted by Julian Alker <security@zap-hosting.com>
zap.cloud

// Zeabur : https://zeabur.com/
// Submitted by Zeabur Team <contact@zeabur.com>
zeabur.app

// Zerops : https://zerops.io/
// Submitted by Zerops Team <security@zerops.io>
*.zerops.app

// Zine EOOD : https://zine.bg/
// Submitted by Martin Angelov <martin@zine.bg>
bss.design

// Zitcom A/S : https://www.zitcom.dk
// Submitted by Emil Stahl <esp@zitcom.dk>
basicserver.io
virtualserver.io
enterprisecloud.nu

// Zone.ID: https://zone.id
// Submitted by Gx1.org <security@gx1.org>
zone.id

// ZoneABC : https://zoneabc.net
// Submitted by ZoneABC Team <support@zoneabc.net>
zabc.net

// ===END PRIVATE DOMAINS===
`;class Dd{constructor(){const[a,t]=Bd.split("===BEGIN PRIVATE DOMAINS===");this.publicSuffixes=this.parsePart(a),this.privateSuffixes=this.parsePart(t)}parsePart(a){return new Set(a.split(`
`).map(t=>t.trim()).filter(t=>t&&!t.startsWith("//")))}getRules(){return new Set([...this.publicSuffixes,...this.privateSuffixes])}isPrivate(a){return this.privateSuffixes.has(a)}}var eu=new Dd;function Nd(n){const a=eu.getRules();for(let t=0;t<n.length;t++){const o=n.slice(t).join("."),e="!"+o;if(a.has(e))return{suffix:n.slice(t+1).join("."),rule:e};if(a.has(o))return{suffix:o,rule:o};const i="*."+n.slice(t+1).join(".");if(a.has(i))return{suffix:o,rule:i}}return null}function Pd(n){const a=n.toLowerCase().split(".").filter(Boolean),t=Nd(a);if(!t){const h="",p=a.pop()||"";return{subdomain:a.join("."),domain:p,suffix:h,isPrivate:!1}}const{suffix:o,rule:e}=t,i=eu.isPrivate(e),s=o.split("."),r=a.length-s.length,l=r>0?a.slice(0,r):[],u=l.pop()||"";return{subdomain:l.join("."),domain:u,suffix:o,isPrivate:i}}const Od=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;function _d(n){return!!(Od.test(n)||n.includes(":")&&((n.match(/:/g)||[]).length>=2||n.startsWith("[")&&n.endsWith("]")))}function Fd(n){let a=n,t=n;const o=/[^\u0000-\u007F]/.test(n);try{if(a=new URL(n.includes("//")?n:`http://${n}`).hostname,o){let i=n;const s=i.indexOf("//");s!==-1&&(i=i.substring(s+2));const r=i.indexOf("@");r!==-1&&(i=i.substring(r+1));const l=i.indexOf("/"),u=i.indexOf("?"),w=i.indexOf("#");let h=i.length;l!==-1&&(h=Math.min(h,l)),u!==-1&&(h=Math.min(h,u)),w!==-1&&(h=Math.min(h,w)),i=i.substring(0,h);const p=i.lastIndexOf(":");if(p!==-1){const k=i.indexOf("]");(k===-1||p>k)&&(i=i.substring(0,p))}t=i}else t=a}catch{}return{hostnameForExtraction:t,parsedUrlHostname:a}}function Ur(n){if(typeof n!="string"||!n)return null;const{hostnameForExtraction:a,parsedUrlHostname:t}=Fd(n),o=t.replace(/^\[|\]$/g,"");return _d(o)?{subdomain:"",domain:o,suffix:"",isPrivate:!1}:Pd(a)}function Hd(n){return Array.isArray(n)?n.map(Ur):Ur(n)}function Gd(){const[n,a]=Rt.useState("https://www.forums.bbc.co.uk"),[t,o]=Rt.useState(null);return ve("div",{className:"App",children:[fa("h1",{children:"tld-parse Example"}),ve("div",{className:"card",children:[fa("input",{type:"text",value:n,onChange:i=>a(i.target.value),placeholder:"Enter a URL or comma-separated URLs"}),fa("button",{onClick:()=>{const s=n.includes(",")?n.split(",").map(l=>l.trim()):n,r=Hd(s);o(r)},children:"Extract"})]}),t&&ve("div",{className:"result-card",children:[fa("h2",{children:"Extraction Result:"}),fa("pre",{children:JSON.stringify(t,null,2)})]})]})}qe.createRoot(document.getElementById("root")).render(fa(ju.StrictMode,{children:fa(Gd,{})}));
