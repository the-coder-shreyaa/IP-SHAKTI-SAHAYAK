function Gh(a,c){for(var l=0;l<c.length;l++){const p=c[l];if(typeof p!="string"&&!Array.isArray(p)){for(const u in p)if(u!=="default"&&!(u in a)){const f=Object.getOwnPropertyDescriptor(p,u);f&&Object.defineProperty(a,u,f.get?f:{enumerable:!0,get:()=>p[u]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))p(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function l(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function p(u){if(u.ep)return;u.ep=!0;const f=l(u);fetch(u.href,f)}})();function zp(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Po={exports:{}},Zr={},Io={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function qh(){if(Bd)return oe;Bd=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),C=Symbol.iterator;function A(y){return y===null||typeof y!="object"?null:(y=C&&y[C]||y["@@iterator"],typeof y=="function"?y:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,z={};function k(y,R,Z){this.props=y,this.context=R,this.refs=z,this.updater=Z||T}k.prototype.isReactComponent={},k.prototype.setState=function(y,R){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,R,"setState")},k.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function I(){}I.prototype=k.prototype;function V(y,R,Z){this.props=y,this.context=R,this.refs=z,this.updater=Z||T}var Q=V.prototype=new I;Q.constructor=V,O(Q,k.prototype),Q.isPureReactComponent=!0;var Y=Array.isArray,X=Object.prototype.hasOwnProperty,B={current:null},ae={key:!0,ref:!0,__self:!0,__source:!0};function de(y,R,Z){var se,pe={},ue=null,me=null;if(R!=null)for(se in R.ref!==void 0&&(me=R.ref),R.key!==void 0&&(ue=""+R.key),R)X.call(R,se)&&!ae.hasOwnProperty(se)&&(pe[se]=R[se]);var xe=arguments.length-2;if(xe===1)pe.children=Z;else if(1<xe){for(var we=Array(xe),ln=0;ln<xe;ln++)we[ln]=arguments[ln+2];pe.children=we}if(y&&y.defaultProps)for(se in xe=y.defaultProps,xe)pe[se]===void 0&&(pe[se]=xe[se]);return{$$typeof:a,type:y,key:ue,ref:me,props:pe,_owner:B.current}}function Le(y,R){return{$$typeof:a,type:y.type,key:R,ref:y.ref,props:y.props,_owner:y._owner}}function Pe(y){return typeof y=="object"&&y!==null&&y.$$typeof===a}function wn(y){var R={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Z){return R[Z]})}var fn=/\/+/g;function We(y,R){return typeof y=="object"&&y!==null&&y.key!=null?wn(""+y.key):R.toString(36)}function Je(y,R,Z,se,pe){var ue=typeof y;(ue==="undefined"||ue==="boolean")&&(y=null);var me=!1;if(y===null)me=!0;else switch(ue){case"string":case"number":me=!0;break;case"object":switch(y.$$typeof){case a:case c:me=!0}}if(me)return me=y,pe=pe(me),y=se===""?"."+We(me,0):se,Y(pe)?(Z="",y!=null&&(Z=y.replace(fn,"$&/")+"/"),Je(pe,R,Z,"",function(ln){return ln})):pe!=null&&(Pe(pe)&&(pe=Le(pe,Z+(!pe.key||me&&me.key===pe.key?"":(""+pe.key).replace(fn,"$&/")+"/")+y)),R.push(pe)),1;if(me=0,se=se===""?".":se+":",Y(y))for(var xe=0;xe<y.length;xe++){ue=y[xe];var we=se+We(ue,xe);me+=Je(ue,R,Z,we,pe)}else if(we=A(y),typeof we=="function")for(y=we.call(y),xe=0;!(ue=y.next()).done;)ue=ue.value,we=se+We(ue,xe++),me+=Je(ue,R,Z,we,pe);else if(ue==="object")throw R=String(y),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return me}function on(y,R,Z){if(y==null)return y;var se=[],pe=0;return Je(y,se,"","",function(ue){return R.call(Z,ue,pe++)}),se}function Ue(y){if(y._status===-1){var R=y._result;R=R(),R.then(function(Z){(y._status===0||y._status===-1)&&(y._status=1,y._result=Z)},function(Z){(y._status===0||y._status===-1)&&(y._status=2,y._result=Z)}),y._status===-1&&(y._status=0,y._result=R)}if(y._status===1)return y._result.default;throw y._result}var ye={current:null},_={transition:null},H={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:_,ReactCurrentOwner:B};function F(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:on,forEach:function(y,R,Z){on(y,function(){R.apply(this,arguments)},Z)},count:function(y){var R=0;return on(y,function(){R++}),R},toArray:function(y){return on(y,function(R){return R})||[]},only:function(y){if(!Pe(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},oe.Component=k,oe.Fragment=l,oe.Profiler=u,oe.PureComponent=V,oe.StrictMode=p,oe.Suspense=b,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,oe.act=F,oe.cloneElement=function(y,R,Z){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var se=O({},y.props),pe=y.key,ue=y.ref,me=y._owner;if(R!=null){if(R.ref!==void 0&&(ue=R.ref,me=B.current),R.key!==void 0&&(pe=""+R.key),y.type&&y.type.defaultProps)var xe=y.type.defaultProps;for(we in R)X.call(R,we)&&!ae.hasOwnProperty(we)&&(se[we]=R[we]===void 0&&xe!==void 0?xe[we]:R[we])}var we=arguments.length-2;if(we===1)se.children=Z;else if(1<we){xe=Array(we);for(var ln=0;ln<we;ln++)xe[ln]=arguments[ln+2];se.children=xe}return{$$typeof:a,type:y.type,key:pe,ref:ue,props:se,_owner:me}},oe.createContext=function(y){return y={$$typeof:m,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:f,_context:y},y.Consumer=y},oe.createElement=de,oe.createFactory=function(y){var R=de.bind(null,y);return R.type=y,R},oe.createRef=function(){return{current:null}},oe.forwardRef=function(y){return{$$typeof:N,render:y}},oe.isValidElement=Pe,oe.lazy=function(y){return{$$typeof:P,_payload:{_status:-1,_result:y},_init:Ue}},oe.memo=function(y,R){return{$$typeof:g,type:y,compare:R===void 0?null:R}},oe.startTransition=function(y){var R=_.transition;_.transition={};try{y()}finally{_.transition=R}},oe.unstable_act=F,oe.useCallback=function(y,R){return ye.current.useCallback(y,R)},oe.useContext=function(y){return ye.current.useContext(y)},oe.useDebugValue=function(){},oe.useDeferredValue=function(y){return ye.current.useDeferredValue(y)},oe.useEffect=function(y,R){return ye.current.useEffect(y,R)},oe.useId=function(){return ye.current.useId()},oe.useImperativeHandle=function(y,R,Z){return ye.current.useImperativeHandle(y,R,Z)},oe.useInsertionEffect=function(y,R){return ye.current.useInsertionEffect(y,R)},oe.useLayoutEffect=function(y,R){return ye.current.useLayoutEffect(y,R)},oe.useMemo=function(y,R){return ye.current.useMemo(y,R)},oe.useReducer=function(y,R,Z){return ye.current.useReducer(y,R,Z)},oe.useRef=function(y){return ye.current.useRef(y)},oe.useState=function(y){return ye.current.useState(y)},oe.useSyncExternalStore=function(y,R,Z){return ye.current.useSyncExternalStore(y,R,Z)},oe.useTransition=function(){return ye.current.useTransition()},oe.version="18.3.1",oe}var Wd;function Bo(){return Wd||(Wd=1,Io.exports=qh()),Io.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function Qh(){if($d)return Zr;$d=1;var a=Bo(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(N,b,g){var P,C={},A=null,T=null;g!==void 0&&(A=""+g),b.key!==void 0&&(A=""+b.key),b.ref!==void 0&&(T=b.ref);for(P in b)p.call(b,P)&&!f.hasOwnProperty(P)&&(C[P]=b[P]);if(N&&N.defaultProps)for(P in b=N.defaultProps,b)C[P]===void 0&&(C[P]=b[P]);return{$$typeof:c,type:N,key:A,ref:T,props:C,_owner:u.current}}return Zr.Fragment=l,Zr.jsx=m,Zr.jsxs=m,Zr}var Yd;function Jh(){return Yd||(Yd=1,Po.exports=Qh()),Po.exports}var n=Jh(),E=Bo();const Ep=zp(E),Xh=Gh({__proto__:null,default:Ep},[E]);var ms={},Ro={exports:{}},rn={},To={exports:{}},Ao={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function Zh(){return Kd||(Kd=1,(function(a){function c(_,H){var F=_.length;_.push(H);e:for(;0<F;){var y=F-1>>>1,R=_[y];if(0<u(R,H))_[y]=H,_[F]=R,F=y;else break e}}function l(_){return _.length===0?null:_[0]}function p(_){if(_.length===0)return null;var H=_[0],F=_.pop();if(F!==H){_[0]=F;e:for(var y=0,R=_.length,Z=R>>>1;y<Z;){var se=2*(y+1)-1,pe=_[se],ue=se+1,me=_[ue];if(0>u(pe,F))ue<R&&0>u(me,pe)?(_[y]=me,_[ue]=F,y=ue):(_[y]=pe,_[se]=F,y=se);else if(ue<R&&0>u(me,F))_[y]=me,_[ue]=F,y=ue;else break e}}return H}function u(_,H){var F=_.sortIndex-H.sortIndex;return F!==0?F:_.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var m=Date,N=m.now();a.unstable_now=function(){return m.now()-N}}var b=[],g=[],P=1,C=null,A=3,T=!1,O=!1,z=!1,k=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(_){for(var H=l(g);H!==null;){if(H.callback===null)p(g);else if(H.startTime<=_)p(g),H.sortIndex=H.expirationTime,c(b,H);else break;H=l(g)}}function Y(_){if(z=!1,Q(_),!O)if(l(b)!==null)O=!0,Ue(X);else{var H=l(g);H!==null&&ye(Y,H.startTime-_)}}function X(_,H){O=!1,z&&(z=!1,I(de),de=-1),T=!0;var F=A;try{for(Q(H),C=l(b);C!==null&&(!(C.expirationTime>H)||_&&!wn());){var y=C.callback;if(typeof y=="function"){C.callback=null,A=C.priorityLevel;var R=y(C.expirationTime<=H);H=a.unstable_now(),typeof R=="function"?C.callback=R:C===l(b)&&p(b),Q(H)}else p(b);C=l(b)}if(C!==null)var Z=!0;else{var se=l(g);se!==null&&ye(Y,se.startTime-H),Z=!1}return Z}finally{C=null,A=F,T=!1}}var B=!1,ae=null,de=-1,Le=5,Pe=-1;function wn(){return!(a.unstable_now()-Pe<Le)}function fn(){if(ae!==null){var _=a.unstable_now();Pe=_;var H=!0;try{H=ae(!0,_)}finally{H?We():(B=!1,ae=null)}}else B=!1}var We;if(typeof V=="function")We=function(){V(fn)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,on=Je.port2;Je.port1.onmessage=fn,We=function(){on.postMessage(null)}}else We=function(){k(fn,0)};function Ue(_){ae=_,B||(B=!0,We())}function ye(_,H){de=k(function(){_(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_continueExecution=function(){O||T||(O=!0,Ue(X))},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return A},a.unstable_getFirstCallbackNode=function(){return l(b)},a.unstable_next=function(_){switch(A){case 1:case 2:case 3:var H=3;break;default:H=A}var F=A;A=H;try{return _()}finally{A=F}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(_,H){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var F=A;A=_;try{return H()}finally{A=F}},a.unstable_scheduleCallback=function(_,H,F){var y=a.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?y+F:y):F=y,_){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=F+R,_={id:P++,callback:H,priorityLevel:_,startTime:F,expirationTime:R,sortIndex:-1},F>y?(_.sortIndex=F,c(g,_),l(b)===null&&_===l(g)&&(z?(I(de),de=-1):z=!0,ye(Y,F-y))):(_.sortIndex=R,c(b,_),O||T||(O=!0,Ue(X))),_},a.unstable_shouldYield=wn,a.unstable_wrapCallback=function(_){var H=A;return function(){var F=A;A=H;try{return _.apply(this,arguments)}finally{A=F}}}})(Ao)),Ao}var Gd;function ef(){return Gd||(Gd=1,To.exports=Zh()),To.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function nf(){if(qd)return rn;qd=1;var a=Bo(),c=ef();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,u={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(u[e]=t,e=0;e<t.length;e++)p.add(t[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},C={};function A(e){return b.call(C,e)?!0:b.call(P,e)?!1:g.test(e)?C[e]=!0:(P[e]=!0,!1)}function T(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O(e,t,r,i){if(t===null||typeof t>"u"||T(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function z(e,t,r,i,s,o,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=d}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new z(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function V(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,V);k[t]=new z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,V);k[t]=new z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,V);k[t]=new z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new z(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new z(e,1,!1,e.toLowerCase(),null,!0,!0)});function Q(e,t,r,i){var s=k.hasOwnProperty(t)?k[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O(t,r,s,i)&&(r=null),i||s===null?A(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,i=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Y=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),B=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),Le=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),wn=Symbol.for("react.context"),fn=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),on=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),_=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,y;function R(e){if(y===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var Z=!1;function se(e,t){if(!e||Z)return"";Z=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(S){var i=S}Reflect.construct(e,[],t)}else{try{t.call()}catch(S){i=S}e.call(t.prototype)}else{try{throw Error()}catch(S){i=S}e()}}catch(S){if(S&&i&&typeof S.stack=="string"){for(var s=S.stack.split(`
`),o=i.stack.split(`
`),d=s.length-1,h=o.length-1;1<=d&&0<=h&&s[d]!==o[h];)h--;for(;1<=d&&0<=h;d--,h--)if(s[d]!==o[h]){if(d!==1||h!==1)do if(d--,h--,0>h||s[d]!==o[h]){var x=`
`+s[d].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=d&&0<=h);break}}}finally{Z=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function pe(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case B:return"Portal";case Le:return"Profiler";case de:return"StrictMode";case We:return"Suspense";case Je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wn:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case fn:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case on:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ln(e){var t=we(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){i=""+d,o.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oi(e){e._valueTracker||(e._valueTracker=ln(e))}function qo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=we(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ls(e,t){var r=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Qo(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=xe(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jo(e,t){t=t.checked,t!=null&&Q(e,"checked",t,!1)}function _s(e,t){Jo(e,t);var r=xe(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Os(e,t.type,r):t.hasOwnProperty("defaultValue")&&Os(e,t.type,xe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Os(e,t,r){(t!=="number"||li(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var fr=Array.isArray;function Lt(e,t,r,i){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&i&&(e[r].defaultSelected=!0)}else{for(r=""+xe(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ms(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(fr(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:xe(r)}}function el(e,t){var r=xe(t.value),i=xe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function nl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,rl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xp=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Xp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function il(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function sl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=il(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,s):e[r]=s}}var Zp=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(Zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vs=null;function Bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,_t=null,Ot=null;function al(e){if(e=Mr(e)){if(typeof Ws!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Ti(t),Ws(e.stateNode,e.type,t))}}function ol(e){_t?Ot?Ot.push(e):Ot=[e]:_t=e}function ll(){if(_t){var e=_t,t=Ot;if(Ot=_t=null,al(e),t)for(e=0;e<t.length;e++)al(t[e])}}function cl(e,t){return e(t)}function dl(){}var $s=!1;function pl(e,t,r){if($s)return e(t,r);$s=!0;try{return cl(e,t,r)}finally{$s=!1,(_t!==null||Ot!==null)&&(dl(),ll())}}function mr(e,t){var r=e.stateNode;if(r===null)return null;var i=Ti(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Ys=!1;if(N)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Ys=!1}function eu(e,t,r,i,s,o,d,h,x){var S=Array.prototype.slice.call(arguments,3);try{t.apply(r,S)}catch(L){this.onError(L)}}var yr=!1,di=null,pi=!1,Ks=null,nu={onError:function(e){yr=!0,di=e}};function tu(e,t,r,i,s,o,d,h,x){yr=!1,di=null,eu.apply(nu,arguments)}function ru(e,t,r,i,s,o,d,h,x){if(tu.apply(this,arguments),yr){if(yr){var S=di;yr=!1,di=null}else throw Error(l(198));pi||(pi=!0,Ks=S)}}function jt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ul(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hl(e){if(jt(e)!==e)throw Error(l(188))}function iu(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,i=t;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return hl(s),e;if(o===i)return hl(s),t;o=o.sibling}throw Error(l(188))}if(r.return!==i.return)r=s,i=o;else{for(var d=!1,h=s.child;h;){if(h===r){d=!0,r=s,i=o;break}if(h===i){d=!0,i=s,r=o;break}h=h.sibling}if(!d){for(h=o.child;h;){if(h===r){d=!0,r=o,i=s;break}if(h===i){d=!0,i=o,r=s;break}h=h.sibling}if(!d)throw Error(l(189))}}if(r.alternate!==i)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function fl(e){return e=iu(e),e!==null?xl(e):null}function xl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xl(e);if(t!==null)return t;e=e.sibling}return null}var gl=c.unstable_scheduleCallback,ml=c.unstable_cancelCallback,su=c.unstable_shouldYield,au=c.unstable_requestPaint,Ie=c.unstable_now,ou=c.unstable_getCurrentPriorityLevel,Gs=c.unstable_ImmediatePriority,vl=c.unstable_UserBlockingPriority,ui=c.unstable_NormalPriority,lu=c.unstable_LowPriority,yl=c.unstable_IdlePriority,hi=null,Tn=null;function cu(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:uu,du=Math.log,pu=Math.LN2;function uu(e){return e>>>=0,e===0?32:31-(du(e)/pu|0)|0}var fi=64,xi=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,o=e.pingedLanes,d=r&268435455;if(d!==0){var h=d&~s;h!==0?i=jr(h):(o&=d,o!==0&&(i=jr(o)))}else d=r&~s,d!==0?i=jr(d):o!==0&&(i=jr(o));if(i===0)return 0;if(t!==0&&t!==i&&(t&s)===0&&(s=i&-i,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-kn(t),s=1<<r,i|=e[r],t&=~s;return i}function hu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fu(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var d=31-kn(o),h=1<<d,x=s[d];x===-1?((h&r)===0||(h&i)!==0)&&(s[d]=hu(h,t)):x<=t&&(e.expiredLanes|=h),o&=~h}}function qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jl(){var e=fi;return fi<<=1,(fi&4194240)===0&&(fi=64),e}function Qs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function br(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kn(t),e[t]=r}function xu(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-kn(r),o=1<<s;t[s]=0,i[s]=-1,e[s]=-1,r&=~o}}function Js(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-kn(r),s=1<<i;s&t|e[i]&t&&(e[i]|=t),r&=~s}}var ge=0;function bl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wl,Xs,kl,Nl,Sl,Zs=!1,mi=[],qn=null,Qn=null,Jn=null,wr=new Map,kr=new Map,Xn=[],gu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zl(e,t){switch(e){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Nr(e,t,r,i,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},t!==null&&(t=Mr(t),t!==null&&Xs(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function mu(e,t,r,i,s){switch(t){case"focusin":return qn=Nr(qn,e,t,r,i,s),!0;case"dragenter":return Qn=Nr(Qn,e,t,r,i,s),!0;case"mouseover":return Jn=Nr(Jn,e,t,r,i,s),!0;case"pointerover":var o=s.pointerId;return wr.set(o,Nr(wr.get(o)||null,e,t,r,i,s)),!0;case"gotpointercapture":return o=s.pointerId,kr.set(o,Nr(kr.get(o)||null,e,t,r,i,s)),!0}return!1}function El(e){var t=bt(e.target);if(t!==null){var r=jt(t);if(r!==null){if(t=r.tag,t===13){if(t=ul(r),t!==null){e.blockedOn=t,Sl(e.priority,function(){kl(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Vs=i,r.target.dispatchEvent(i),Vs=null}else return t=Mr(r),t!==null&&Xs(t),e.blockedOn=r,!1;t.shift()}return!0}function Cl(e,t,r){vi(e)&&r.delete(t)}function vu(){Zs=!1,qn!==null&&vi(qn)&&(qn=null),Qn!==null&&vi(Qn)&&(Qn=null),Jn!==null&&vi(Jn)&&(Jn=null),wr.forEach(Cl),kr.forEach(Cl)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zs||(Zs=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,vu)))}function zr(e){function t(s){return Sr(s,e)}if(0<mi.length){Sr(mi[0],e);for(var r=1;r<mi.length;r++){var i=mi[r];i.blockedOn===e&&(i.blockedOn=null)}}for(qn!==null&&Sr(qn,e),Qn!==null&&Sr(Qn,e),Jn!==null&&Sr(Jn,e),wr.forEach(t),kr.forEach(t),r=0;r<Xn.length;r++)i=Xn[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Xn.length&&(r=Xn[0],r.blockedOn===null);)El(r),r.blockedOn===null&&Xn.shift()}var Mt=Y.ReactCurrentBatchConfig,yi=!0;function yu(e,t,r,i){var s=ge,o=Mt.transition;Mt.transition=null;try{ge=1,ea(e,t,r,i)}finally{ge=s,Mt.transition=o}}function ju(e,t,r,i){var s=ge,o=Mt.transition;Mt.transition=null;try{ge=4,ea(e,t,r,i)}finally{ge=s,Mt.transition=o}}function ea(e,t,r,i){if(yi){var s=na(e,t,r,i);if(s===null)va(e,t,i,ji,r),zl(e,i);else if(mu(s,e,t,r,i))i.stopPropagation();else if(zl(e,i),t&4&&-1<gu.indexOf(e)){for(;s!==null;){var o=Mr(s);if(o!==null&&wl(o),o=na(e,t,r,i),o===null&&va(e,t,i,ji,r),o===s)break;s=o}s!==null&&i.stopPropagation()}else va(e,t,i,null,r)}}var ji=null;function na(e,t,r,i){if(ji=null,e=Bs(i),e=bt(e),e!==null)if(t=jt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ul(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ji=e,null}function Pl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ou()){case Gs:return 1;case vl:return 4;case ui:case lu:return 16;case yl:return 536870912;default:return 16}default:return 16}}var Zn=null,ta=null,bi=null;function Il(){if(bi)return bi;var e,t=ta,r=t.length,i,s="value"in Zn?Zn.value:Zn.textContent,o=s.length;for(e=0;e<r&&t[e]===s[e];e++);var d=r-e;for(i=1;i<=d&&t[r-i]===s[o-i];i++);return bi=s.slice(e,1<i?1-i:void 0)}function wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Rl(){return!1}function cn(e){function t(r,i,s,o,d){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(r=e[h],this[h]=r?r(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ki:Rl,this.isPropagationStopped=Rl,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=cn(Ft),Er=F({},Ft,{view:0,detail:0}),bu=cn(Er),ia,sa,Cr,Ni=F({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(ia=e.screenX-Cr.screenX,sa=e.screenY-Cr.screenY):sa=ia=0,Cr=e),ia)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),Tl=cn(Ni),wu=F({},Ni,{dataTransfer:0}),ku=cn(wu),Nu=F({},Er,{relatedTarget:0}),aa=cn(Nu),Su=F({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),zu=cn(Su),Eu=F({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cu=cn(Eu),Pu=F({},Ft,{data:0}),Al=cn(Pu),Iu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Au(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tu[e])?!!t[e]:!1}function oa(){return Au}var Du=F({},Er,{key:function(e){if(e.key){var t=Iu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lu=cn(Du),_u=F({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dl=cn(_u),Ou=F({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),Mu=cn(Ou),Fu=F({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uu=cn(Fu),Hu=F({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vu=cn(Hu),Bu=[9,13,27,32],la=N&&"CompositionEvent"in window,Pr=null;N&&"documentMode"in document&&(Pr=document.documentMode);var Wu=N&&"TextEvent"in window&&!Pr,Ll=N&&(!la||Pr&&8<Pr&&11>=Pr),_l=" ",Ol=!1;function Ml(e,t){switch(e){case"keyup":return Bu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function $u(e,t){switch(e){case"compositionend":return Fl(t);case"keypress":return t.which!==32?null:(Ol=!0,_l);case"textInput":return e=t.data,e===_l&&Ol?null:e;default:return null}}function Yu(e,t){if(Ut)return e==="compositionend"||!la&&Ml(e,t)?(e=Il(),bi=ta=Zn=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ll&&t.locale!=="ko"?null:t.data;default:return null}}var Ku={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ku[e.type]:t==="textarea"}function Hl(e,t,r,i){ol(i),t=Pi(t,"onChange"),0<t.length&&(r=new ra("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Ir=null,Rr=null;function Gu(e){sc(e,0)}function Si(e){var t=$t(e);if(qo(t))return e}function qu(e,t){if(e==="change")return t}var Vl=!1;if(N){var ca;if(N){var da="oninput"in document;if(!da){var Bl=document.createElement("div");Bl.setAttribute("oninput","return;"),da=typeof Bl.oninput=="function"}ca=da}else ca=!1;Vl=ca&&(!document.documentMode||9<document.documentMode)}function Wl(){Ir&&(Ir.detachEvent("onpropertychange",$l),Rr=Ir=null)}function $l(e){if(e.propertyName==="value"&&Si(Rr)){var t=[];Hl(t,Rr,e,Bs(e)),pl(Gu,t)}}function Qu(e,t,r){e==="focusin"?(Wl(),Ir=t,Rr=r,Ir.attachEvent("onpropertychange",$l)):e==="focusout"&&Wl()}function Ju(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Rr)}function Xu(e,t){if(e==="click")return Si(t)}function Zu(e,t){if(e==="input"||e==="change")return Si(t)}function eh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nn=typeof Object.is=="function"?Object.is:eh;function Tr(e,t){if(Nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!b.call(t,s)||!Nn(e[s],t[s]))return!1}return!0}function Yl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kl(e,t){var r=Yl(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yl(r)}}function Gl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ql(){for(var e=window,t=li();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=li(e.document)}return t}function pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nh(e){var t=ql(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Gl(r.ownerDocument.documentElement,r)){if(i!==null&&pa(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!e.extend&&o>i&&(s=i,i=o,o=s),s=Kl(r,o);var d=Kl(r,i);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var th=N&&"documentMode"in document&&11>=document.documentMode,Ht=null,ua=null,Ar=null,ha=!1;function Ql(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ha||Ht==null||Ht!==li(i)||(i=Ht,"selectionStart"in i&&pa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ar&&Tr(Ar,i)||(Ar=i,i=Pi(ua,"onSelect"),0<i.length&&(t=new ra("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Ht)))}function zi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Vt={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},fa={},Jl={};N&&(Jl=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function Ei(e){if(fa[e])return fa[e];if(!Vt[e])return e;var t=Vt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Jl)return fa[e]=t[r];return e}var Xl=Ei("animationend"),Zl=Ei("animationiteration"),ec=Ei("animationstart"),nc=Ei("transitionend"),tc=new Map,rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function et(e,t){tc.set(e,t),f(t,[e])}for(var xa=0;xa<rc.length;xa++){var ga=rc[xa],rh=ga.toLowerCase(),ih=ga[0].toUpperCase()+ga.slice(1);et(rh,"on"+ih)}et(Xl,"onAnimationEnd"),et(Zl,"onAnimationIteration"),et(ec,"onAnimationStart"),et("dblclick","onDoubleClick"),et("focusin","onFocus"),et("focusout","onBlur"),et(nc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function ic(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,ru(i,t,void 0,e),e.currentTarget=null}function sc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],s=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var d=i.length-1;0<=d;d--){var h=i[d],x=h.instance,S=h.currentTarget;if(h=h.listener,x!==o&&s.isPropagationStopped())break e;ic(s,h,S),o=x}else for(d=0;d<i.length;d++){if(h=i[d],x=h.instance,S=h.currentTarget,h=h.listener,x!==o&&s.isPropagationStopped())break e;ic(s,h,S),o=x}}}if(pi)throw e=Ks,pi=!1,Ks=null,e}function je(e,t){var r=t[Na];r===void 0&&(r=t[Na]=new Set);var i=e+"__bubble";r.has(i)||(ac(t,e,2,!1),r.add(i))}function ma(e,t,r){var i=0;t&&(i|=4),ac(r,e,i,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[Ci]){e[Ci]=!0,p.forEach(function(r){r!=="selectionchange"&&(sh.has(r)||ma(r,!1,e),ma(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,ma("selectionchange",!1,t))}}function ac(e,t,r,i){switch(Pl(t)){case 1:var s=yu;break;case 4:s=ju;break;default:s=ea}r=s.bind(null,t,r,e),s=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function va(e,t,r,i,s){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var h=i.stateNode.containerInfo;if(h===s||h.nodeType===8&&h.parentNode===s)break;if(d===4)for(d=i.return;d!==null;){var x=d.tag;if((x===3||x===4)&&(x=d.stateNode.containerInfo,x===s||x.nodeType===8&&x.parentNode===s))return;d=d.return}for(;h!==null;){if(d=bt(h),d===null)return;if(x=d.tag,x===5||x===6){i=o=d;continue e}h=h.parentNode}}i=i.return}pl(function(){var S=o,L=Bs(r),M=[];e:{var D=tc.get(e);if(D!==void 0){var W=ra,K=e;switch(e){case"keypress":if(wi(r)===0)break e;case"keydown":case"keyup":W=Lu;break;case"focusin":K="focus",W=aa;break;case"focusout":K="blur",W=aa;break;case"beforeblur":case"afterblur":W=aa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Tl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=ku;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Mu;break;case Xl:case Zl:case ec:W=zu;break;case nc:W=Uu;break;case"scroll":W=bu;break;case"wheel":W=Vu;break;case"copy":case"cut":case"paste":W=Cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Dl}var G=(t&4)!==0,Re=!G&&e==="scroll",j=G?D!==null?D+"Capture":null:D;G=[];for(var v=S,w;v!==null;){w=v;var U=w.stateNode;if(w.tag===5&&U!==null&&(w=U,j!==null&&(U=mr(v,j),U!=null&&G.push(_r(v,U,w)))),Re)break;v=v.return}0<G.length&&(D=new W(D,K,null,r,L),M.push({event:D,listeners:G}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",D&&r!==Vs&&(K=r.relatedTarget||r.fromElement)&&(bt(K)||K[On]))break e;if((W||D)&&(D=L.window===L?L:(D=L.ownerDocument)?D.defaultView||D.parentWindow:window,W?(K=r.relatedTarget||r.toElement,W=S,K=K?bt(K):null,K!==null&&(Re=jt(K),K!==Re||K.tag!==5&&K.tag!==6)&&(K=null)):(W=null,K=S),W!==K)){if(G=Tl,U="onMouseLeave",j="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(G=Dl,U="onPointerLeave",j="onPointerEnter",v="pointer"),Re=W==null?D:$t(W),w=K==null?D:$t(K),D=new G(U,v+"leave",W,r,L),D.target=Re,D.relatedTarget=w,U=null,bt(L)===S&&(G=new G(j,v+"enter",K,r,L),G.target=w,G.relatedTarget=Re,U=G),Re=U,W&&K)n:{for(G=W,j=K,v=0,w=G;w;w=Bt(w))v++;for(w=0,U=j;U;U=Bt(U))w++;for(;0<v-w;)G=Bt(G),v--;for(;0<w-v;)j=Bt(j),w--;for(;v--;){if(G===j||j!==null&&G===j.alternate)break n;G=Bt(G),j=Bt(j)}G=null}else G=null;W!==null&&oc(M,D,W,G,!1),K!==null&&Re!==null&&oc(M,Re,K,G,!0)}}e:{if(D=S?$t(S):window,W=D.nodeName&&D.nodeName.toLowerCase(),W==="select"||W==="input"&&D.type==="file")var q=qu;else if(Ul(D))if(Vl)q=Zu;else{q=Ju;var ee=Qu}else(W=D.nodeName)&&W.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(q=Xu);if(q&&(q=q(e,S))){Hl(M,q,r,L);break e}ee&&ee(e,D,S),e==="focusout"&&(ee=D._wrapperState)&&ee.controlled&&D.type==="number"&&Os(D,"number",D.value)}switch(ee=S?$t(S):window,e){case"focusin":(Ul(ee)||ee.contentEditable==="true")&&(Ht=ee,ua=S,Ar=null);break;case"focusout":Ar=ua=Ht=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,Ql(M,r,L);break;case"selectionchange":if(th)break;case"keydown":case"keyup":Ql(M,r,L)}var ne;if(la)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Ut?Ml(e,r)&&(re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(re="onCompositionStart");re&&(Ll&&r.locale!=="ko"&&(Ut||re!=="onCompositionStart"?re==="onCompositionEnd"&&Ut&&(ne=Il()):(Zn=L,ta="value"in Zn?Zn.value:Zn.textContent,Ut=!0)),ee=Pi(S,re),0<ee.length&&(re=new Al(re,e,null,r,L),M.push({event:re,listeners:ee}),ne?re.data=ne:(ne=Fl(r),ne!==null&&(re.data=ne)))),(ne=Wu?$u(e,r):Yu(e,r))&&(S=Pi(S,"onBeforeInput"),0<S.length&&(L=new Al("onBeforeInput","beforeinput",null,r,L),M.push({event:L,listeners:S}),L.data=ne))}sc(M,t)})}function _r(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Pi(e,t){for(var r=t+"Capture",i=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=mr(e,r),o!=null&&i.unshift(_r(e,o,s)),o=mr(e,t),o!=null&&i.push(_r(e,o,s))),e=e.return}return i}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,t,r,i,s){for(var o=t._reactName,d=[];r!==null&&r!==i;){var h=r,x=h.alternate,S=h.stateNode;if(x!==null&&x===i)break;h.tag===5&&S!==null&&(h=S,s?(x=mr(r,o),x!=null&&d.unshift(_r(r,x,h))):s||(x=mr(r,o),x!=null&&d.push(_r(r,x,h)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var ah=/\r\n?/g,oh=/\u0000|\uFFFD/g;function lc(e){return(typeof e=="string"?e:""+e).replace(ah,`
`).replace(oh,"")}function Ii(e,t,r){if(t=lc(t),lc(e)!==t&&r)throw Error(l(425))}function Ri(){}var ya=null,ja=null;function ba(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wa=typeof setTimeout=="function"?setTimeout:void 0,lh=typeof clearTimeout=="function"?clearTimeout:void 0,cc=typeof Promise=="function"?Promise:void 0,ch=typeof queueMicrotask=="function"?queueMicrotask:typeof cc<"u"?function(e){return cc.resolve(null).then(e).catch(dh)}:wa;function dh(e){setTimeout(function(){throw e})}function ka(e,t){var r=t,i=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){e.removeChild(s),zr(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);zr(t)}function nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Wt=Math.random().toString(36).slice(2),An="__reactFiber$"+Wt,Or="__reactProps$"+Wt,On="__reactContainer$"+Wt,Na="__reactEvents$"+Wt,ph="__reactListeners$"+Wt,uh="__reactHandles$"+Wt;function bt(e){var t=e[An];if(t)return t;for(var r=e.parentNode;r;){if(t=r[On]||r[An]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=dc(e);e!==null;){if(r=e[An])return r;e=dc(e)}return t}e=r,r=e.parentNode}return null}function Mr(e){return e=e[An]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Ti(e){return e[Or]||null}var Sa=[],Yt=-1;function tt(e){return{current:e}}function be(e){0>Yt||(e.current=Sa[Yt],Sa[Yt]=null,Yt--)}function ve(e,t){Yt++,Sa[Yt]=e.current,e.current=t}var rt={},$e=tt(rt),Xe=tt(!1),wt=rt;function Kt(e,t){var r=e.type.contextTypes;if(!r)return rt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ze(e){return e=e.childContextTypes,e!=null}function Ai(){be(Xe),be($e)}function pc(e,t,r){if($e.current!==rt)throw Error(l(168));ve($e,t),ve(Xe,r)}function uc(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(l(108,me(e)||"Unknown",s));return F({},r,i)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rt,wt=$e.current,ve($e,e),ve(Xe,Xe.current),!0}function hc(e,t,r){var i=e.stateNode;if(!i)throw Error(l(169));r?(e=uc(e,t,wt),i.__reactInternalMemoizedMergedChildContext=e,be(Xe),be($e),ve($e,e)):be(Xe),ve(Xe,r)}var Mn=null,Li=!1,za=!1;function fc(e){Mn===null?Mn=[e]:Mn.push(e)}function hh(e){Li=!0,fc(e)}function it(){if(!za&&Mn!==null){za=!0;var e=0,t=ge;try{var r=Mn;for(ge=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Mn=null,Li=!1}catch(s){throw Mn!==null&&(Mn=Mn.slice(e+1)),gl(Gs,it),s}finally{ge=t,za=!1}}return null}var Gt=[],qt=0,_i=null,Oi=0,xn=[],gn=0,kt=null,Fn=1,Un="";function Nt(e,t){Gt[qt++]=Oi,Gt[qt++]=_i,_i=e,Oi=t}function xc(e,t,r){xn[gn++]=Fn,xn[gn++]=Un,xn[gn++]=kt,kt=e;var i=Fn;e=Un;var s=32-kn(i)-1;i&=~(1<<s),r+=1;var o=32-kn(t)+s;if(30<o){var d=s-s%5;o=(i&(1<<d)-1).toString(32),i>>=d,s-=d,Fn=1<<32-kn(t)+s|r<<s|i,Un=o+e}else Fn=1<<o|r<<s|i,Un=e}function Ea(e){e.return!==null&&(Nt(e,1),xc(e,1,0))}function Ca(e){for(;e===_i;)_i=Gt[--qt],Gt[qt]=null,Oi=Gt[--qt],Gt[qt]=null;for(;e===kt;)kt=xn[--gn],xn[gn]=null,Un=xn[--gn],xn[gn]=null,Fn=xn[--gn],xn[gn]=null}var dn=null,pn=null,ke=!1,Sn=null;function gc(e,t){var r=jn(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function mc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dn=e,pn=nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dn=e,pn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=kt!==null?{id:Fn,overflow:Un}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=jn(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dn=e,pn=null,!0):!1;default:return!1}}function Pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ia(e){if(ke){var t=pn;if(t){var r=t;if(!mc(e,t)){if(Pa(e))throw Error(l(418));t=nt(r.nextSibling);var i=dn;t&&mc(e,t)?gc(i,r):(e.flags=e.flags&-4097|2,ke=!1,dn=e)}}else{if(Pa(e))throw Error(l(418));e.flags=e.flags&-4097|2,ke=!1,dn=e}}}function vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dn=e}function Mi(e){if(e!==dn)return!1;if(!ke)return vc(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ba(e.type,e.memoizedProps)),t&&(t=pn)){if(Pa(e))throw yc(),Error(l(418));for(;t;)gc(e,t),t=nt(t.nextSibling)}if(vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){pn=nt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}pn=null}}else pn=dn?nt(e.stateNode.nextSibling):null;return!0}function yc(){for(var e=pn;e;)e=nt(e.nextSibling)}function Qt(){pn=dn=null,ke=!1}function Ra(e){Sn===null?Sn=[e]:Sn.push(e)}var fh=Y.ReactCurrentBatchConfig;function Fr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var i=r.stateNode}if(!i)throw Error(l(147,e));var s=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(d){var h=s.refs;d===null?delete h[o]:h[o]=d},t._stringRef=o,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function Fi(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jc(e){var t=e._init;return t(e._payload)}function bc(e){function t(j,v){if(e){var w=j.deletions;w===null?(j.deletions=[v],j.flags|=16):w.push(v)}}function r(j,v){if(!e)return null;for(;v!==null;)t(j,v),v=v.sibling;return null}function i(j,v){for(j=new Map;v!==null;)v.key!==null?j.set(v.key,v):j.set(v.index,v),v=v.sibling;return j}function s(j,v){return j=ut(j,v),j.index=0,j.sibling=null,j}function o(j,v,w){return j.index=w,e?(w=j.alternate,w!==null?(w=w.index,w<v?(j.flags|=2,v):w):(j.flags|=2,v)):(j.flags|=1048576,v)}function d(j){return e&&j.alternate===null&&(j.flags|=2),j}function h(j,v,w,U){return v===null||v.tag!==6?(v=ko(w,j.mode,U),v.return=j,v):(v=s(v,w),v.return=j,v)}function x(j,v,w,U){var q=w.type;return q===ae?L(j,v,w.props.children,U,w.key):v!==null&&(v.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ue&&jc(q)===v.type)?(U=s(v,w.props),U.ref=Fr(j,v,w),U.return=j,U):(U=cs(w.type,w.key,w.props,null,j.mode,U),U.ref=Fr(j,v,w),U.return=j,U)}function S(j,v,w,U){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=No(w,j.mode,U),v.return=j,v):(v=s(v,w.children||[]),v.return=j,v)}function L(j,v,w,U,q){return v===null||v.tag!==7?(v=Tt(w,j.mode,U,q),v.return=j,v):(v=s(v,w),v.return=j,v)}function M(j,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ko(""+v,j.mode,w),v.return=j,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case X:return w=cs(v.type,v.key,v.props,null,j.mode,w),w.ref=Fr(j,null,v),w.return=j,w;case B:return v=No(v,j.mode,w),v.return=j,v;case Ue:var U=v._init;return M(j,U(v._payload),w)}if(fr(v)||H(v))return v=Tt(v,j.mode,w,null),v.return=j,v;Fi(j,v)}return null}function D(j,v,w,U){var q=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return q!==null?null:h(j,v,""+w,U);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case X:return w.key===q?x(j,v,w,U):null;case B:return w.key===q?S(j,v,w,U):null;case Ue:return q=w._init,D(j,v,q(w._payload),U)}if(fr(w)||H(w))return q!==null?null:L(j,v,w,U,null);Fi(j,w)}return null}function W(j,v,w,U,q){if(typeof U=="string"&&U!==""||typeof U=="number")return j=j.get(w)||null,h(v,j,""+U,q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case X:return j=j.get(U.key===null?w:U.key)||null,x(v,j,U,q);case B:return j=j.get(U.key===null?w:U.key)||null,S(v,j,U,q);case Ue:var ee=U._init;return W(j,v,w,ee(U._payload),q)}if(fr(U)||H(U))return j=j.get(w)||null,L(v,j,U,q,null);Fi(v,U)}return null}function K(j,v,w,U){for(var q=null,ee=null,ne=v,re=v=0,Me=null;ne!==null&&re<w.length;re++){ne.index>re?(Me=ne,ne=null):Me=ne.sibling;var he=D(j,ne,w[re],U);if(he===null){ne===null&&(ne=Me);break}e&&ne&&he.alternate===null&&t(j,ne),v=o(he,v,re),ee===null?q=he:ee.sibling=he,ee=he,ne=Me}if(re===w.length)return r(j,ne),ke&&Nt(j,re),q;if(ne===null){for(;re<w.length;re++)ne=M(j,w[re],U),ne!==null&&(v=o(ne,v,re),ee===null?q=ne:ee.sibling=ne,ee=ne);return ke&&Nt(j,re),q}for(ne=i(j,ne);re<w.length;re++)Me=W(ne,j,re,w[re],U),Me!==null&&(e&&Me.alternate!==null&&ne.delete(Me.key===null?re:Me.key),v=o(Me,v,re),ee===null?q=Me:ee.sibling=Me,ee=Me);return e&&ne.forEach(function(ht){return t(j,ht)}),ke&&Nt(j,re),q}function G(j,v,w,U){var q=H(w);if(typeof q!="function")throw Error(l(150));if(w=q.call(w),w==null)throw Error(l(151));for(var ee=q=null,ne=v,re=v=0,Me=null,he=w.next();ne!==null&&!he.done;re++,he=w.next()){ne.index>re?(Me=ne,ne=null):Me=ne.sibling;var ht=D(j,ne,he.value,U);if(ht===null){ne===null&&(ne=Me);break}e&&ne&&ht.alternate===null&&t(j,ne),v=o(ht,v,re),ee===null?q=ht:ee.sibling=ht,ee=ht,ne=Me}if(he.done)return r(j,ne),ke&&Nt(j,re),q;if(ne===null){for(;!he.done;re++,he=w.next())he=M(j,he.value,U),he!==null&&(v=o(he,v,re),ee===null?q=he:ee.sibling=he,ee=he);return ke&&Nt(j,re),q}for(ne=i(j,ne);!he.done;re++,he=w.next())he=W(ne,j,re,he.value,U),he!==null&&(e&&he.alternate!==null&&ne.delete(he.key===null?re:he.key),v=o(he,v,re),ee===null?q=he:ee.sibling=he,ee=he);return e&&ne.forEach(function(Kh){return t(j,Kh)}),ke&&Nt(j,re),q}function Re(j,v,w,U){if(typeof w=="object"&&w!==null&&w.type===ae&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case X:e:{for(var q=w.key,ee=v;ee!==null;){if(ee.key===q){if(q=w.type,q===ae){if(ee.tag===7){r(j,ee.sibling),v=s(ee,w.props.children),v.return=j,j=v;break e}}else if(ee.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ue&&jc(q)===ee.type){r(j,ee.sibling),v=s(ee,w.props),v.ref=Fr(j,ee,w),v.return=j,j=v;break e}r(j,ee);break}else t(j,ee);ee=ee.sibling}w.type===ae?(v=Tt(w.props.children,j.mode,U,w.key),v.return=j,j=v):(U=cs(w.type,w.key,w.props,null,j.mode,U),U.ref=Fr(j,v,w),U.return=j,j=U)}return d(j);case B:e:{for(ee=w.key;v!==null;){if(v.key===ee)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){r(j,v.sibling),v=s(v,w.children||[]),v.return=j,j=v;break e}else{r(j,v);break}else t(j,v);v=v.sibling}v=No(w,j.mode,U),v.return=j,j=v}return d(j);case Ue:return ee=w._init,Re(j,v,ee(w._payload),U)}if(fr(w))return K(j,v,w,U);if(H(w))return G(j,v,w,U);Fi(j,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(r(j,v.sibling),v=s(v,w),v.return=j,j=v):(r(j,v),v=ko(w,j.mode,U),v.return=j,j=v),d(j)):r(j,v)}return Re}var Jt=bc(!0),wc=bc(!1),Ui=tt(null),Hi=null,Xt=null,Ta=null;function Aa(){Ta=Xt=Hi=null}function Da(e){var t=Ui.current;be(Ui),e._currentValue=t}function La(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Zt(e,t){Hi=e,Ta=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(en=!0),e.firstContext=null)}function mn(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(Hi===null)throw Error(l(308));Xt=e,Hi.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var St=null;function _a(e){St===null?St=[e]:St.push(e)}function kc(e,t,r,i){var s=t.interleaved;return s===null?(r.next=r,_a(t)):(r.next=s.next,s.next=r),t.interleaved=r,Hn(e,i)}function Hn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var st=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(le&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,Hn(e,r)}return s=i.interleaved,s===null?(t.next=t,_a(i)):(t.next=s.next,s.next=t),i.interleaved=t,Hn(e,r)}function Vi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Js(e,r)}}function Sc(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=d:o=o.next=d,r=r.next}while(r!==null);o===null?s=o=t:o=o.next=t}else s=o=t;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Bi(e,t,r,i){var s=e.updateQueue;st=!1;var o=s.firstBaseUpdate,d=s.lastBaseUpdate,h=s.shared.pending;if(h!==null){s.shared.pending=null;var x=h,S=x.next;x.next=null,d===null?o=S:d.next=S,d=x;var L=e.alternate;L!==null&&(L=L.updateQueue,h=L.lastBaseUpdate,h!==d&&(h===null?L.firstBaseUpdate=S:h.next=S,L.lastBaseUpdate=x))}if(o!==null){var M=s.baseState;d=0,L=S=x=null,h=o;do{var D=h.lane,W=h.eventTime;if((i&D)===D){L!==null&&(L=L.next={eventTime:W,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var K=e,G=h;switch(D=t,W=r,G.tag){case 1:if(K=G.payload,typeof K=="function"){M=K.call(W,M,D);break e}M=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=G.payload,D=typeof K=="function"?K.call(W,M,D):K,D==null)break e;M=F({},M,D);break e;case 2:st=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,D=s.effects,D===null?s.effects=[h]:D.push(h))}else W={eventTime:W,lane:D,tag:h.tag,payload:h.payload,callback:h.callback,next:null},L===null?(S=L=W,x=M):L=L.next=W,d|=D;if(h=h.next,h===null){if(h=s.shared.pending,h===null)break;D=h,h=D.next,D.next=null,s.lastBaseUpdate=D,s.shared.pending=null}}while(!0);if(L===null&&(x=M),s.baseState=x,s.firstBaseUpdate=S,s.lastBaseUpdate=L,t=s.shared.interleaved,t!==null){s=t;do d|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);Ct|=d,e.lanes=d,e.memoizedState=M}}function zc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(l(191,s));s.call(i)}}}var Ur={},Dn=tt(Ur),Hr=tt(Ur),Vr=tt(Ur);function zt(e){if(e===Ur)throw Error(l(174));return e}function Ma(e,t){switch(ve(Vr,t),ve(Hr,e),ve(Dn,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fs(t,e)}be(Dn),ve(Dn,t)}function er(){be(Dn),be(Hr),be(Vr)}function Ec(e){zt(Vr.current);var t=zt(Dn.current),r=Fs(t,e.type);t!==r&&(ve(Hr,e),ve(Dn,r))}function Fa(e){Hr.current===e&&(be(Dn),be(Hr))}var Ne=tt(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ua=[];function Ha(){for(var e=0;e<Ua.length;e++)Ua[e]._workInProgressVersionPrimary=null;Ua.length=0}var $i=Y.ReactCurrentDispatcher,Va=Y.ReactCurrentBatchConfig,Et=0,Se=null,Ae=null,_e=null,Yi=!1,Br=!1,Wr=0,xh=0;function Ye(){throw Error(l(321))}function Ba(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Nn(e[r],t[r]))return!1;return!0}function Wa(e,t,r,i,s,o){if(Et=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?yh:jh,e=r(i,s),Br){o=0;do{if(Br=!1,Wr=0,25<=o)throw Error(l(301));o+=1,_e=Ae=null,t.updateQueue=null,$i.current=bh,e=r(i,s)}while(Br)}if($i.current=qi,t=Ae!==null&&Ae.next!==null,Et=0,_e=Ae=Se=null,Yi=!1,t)throw Error(l(300));return e}function $a(){var e=Wr!==0;return Wr=0,e}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Se.memoizedState=_e=e:_e=_e.next=e,_e}function vn(){if(Ae===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=_e===null?Se.memoizedState:_e.next;if(t!==null)_e=t,Ae=e;else{if(e===null)throw Error(l(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},_e===null?Se.memoizedState=_e=e:_e=_e.next=e}return _e}function $r(e,t){return typeof t=="function"?t(e):t}function Ya(e){var t=vn(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=Ae,s=i.baseQueue,o=r.pending;if(o!==null){if(s!==null){var d=s.next;s.next=o.next,o.next=d}i.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,i=i.baseState;var h=d=null,x=null,S=o;do{var L=S.lane;if((Et&L)===L)x!==null&&(x=x.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),i=S.hasEagerState?S.eagerState:e(i,S.action);else{var M={lane:L,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};x===null?(h=x=M,d=i):x=x.next=M,Se.lanes|=L,Ct|=L}S=S.next}while(S!==null&&S!==o);x===null?d=i:x.next=h,Nn(i,t.memoizedState)||(en=!0),t.memoizedState=i,t.baseState=d,t.baseQueue=x,r.lastRenderedState=i}if(e=r.interleaved,e!==null){s=e;do o=s.lane,Se.lanes|=o,Ct|=o,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ka(e){var t=vn(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=r.dispatch,s=r.pending,o=t.memoizedState;if(s!==null){r.pending=null;var d=s=s.next;do o=e(o,d.action),d=d.next;while(d!==s);Nn(o,t.memoizedState)||(en=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,i]}function Cc(){}function Pc(e,t){var r=Se,i=vn(),s=t(),o=!Nn(i.memoizedState,s);if(o&&(i.memoizedState=s,en=!0),i=i.queue,Ga(Tc.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(r.flags|=2048,Yr(9,Rc.bind(null,r,i,s,t),void 0,null),Oe===null)throw Error(l(349));(Et&30)!==0||Ic(r,t,s)}return s}function Ic(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Rc(e,t,r,i){t.value=r,t.getSnapshot=i,Ac(t)&&Dc(e)}function Tc(e,t,r){return r(function(){Ac(t)&&Dc(e)})}function Ac(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Nn(e,r)}catch{return!0}}function Dc(e){var t=Hn(e,1);t!==null&&Pn(t,e,1,-1)}function Lc(e){var t=Ln();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=vh.bind(null,Se,e),[t.memoizedState,e]}function Yr(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function _c(){return vn().memoizedState}function Ki(e,t,r,i){var s=Ln();Se.flags|=e,s.memoizedState=Yr(1|t,r,void 0,i===void 0?null:i)}function Gi(e,t,r,i){var s=vn();i=i===void 0?null:i;var o=void 0;if(Ae!==null){var d=Ae.memoizedState;if(o=d.destroy,i!==null&&Ba(i,d.deps)){s.memoizedState=Yr(t,r,o,i);return}}Se.flags|=e,s.memoizedState=Yr(1|t,r,o,i)}function Oc(e,t){return Ki(8390656,8,e,t)}function Ga(e,t){return Gi(2048,8,e,t)}function Mc(e,t){return Gi(4,2,e,t)}function Fc(e,t){return Gi(4,4,e,t)}function Uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hc(e,t,r){return r=r!=null?r.concat([e]):null,Gi(4,4,Uc.bind(null,t,e),r)}function qa(){}function Vc(e,t){var r=vn();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Ba(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Bc(e,t){var r=vn();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Ba(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Wc(e,t,r){return(Et&21)===0?(e.baseState&&(e.baseState=!1,en=!0),e.memoizedState=r):(Nn(r,t)||(r=jl(),Se.lanes|=r,Ct|=r,e.baseState=!0),t)}function gh(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var i=Va.transition;Va.transition={};try{e(!1),t()}finally{ge=r,Va.transition=i}}function $c(){return vn().memoizedState}function mh(e,t,r){var i=dt(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Yc(e))Kc(t,r);else if(r=kc(e,t,r,i),r!==null){var s=Qe();Pn(r,e,i,s),Gc(r,t,i)}}function vh(e,t,r){var i=dt(e),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Yc(e))Kc(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var d=t.lastRenderedState,h=o(d,r);if(s.hasEagerState=!0,s.eagerState=h,Nn(h,d)){var x=t.interleaved;x===null?(s.next=s,_a(t)):(s.next=x.next,x.next=s),t.interleaved=s;return}}catch{}finally{}r=kc(e,t,s,i),r!==null&&(s=Qe(),Pn(r,e,i,s),Gc(r,t,i))}}function Yc(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Kc(e,t){Br=Yi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Gc(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Js(e,r)}}var qi={readContext:mn,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},yh={readContext:mn,useCallback:function(e,t){return Ln().memoizedState=[e,t===void 0?null:t],e},useContext:mn,useEffect:Oc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ki(4194308,4,Uc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var r=Ln();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Ln();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=mh.bind(null,Se,e),[i.memoizedState,e]},useRef:function(e){var t=Ln();return e={current:e},t.memoizedState=e},useState:Lc,useDebugValue:qa,useDeferredValue:function(e){return Ln().memoizedState=e},useTransition:function(){var e=Lc(!1),t=e[0];return e=gh.bind(null,e[1]),Ln().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Se,s=Ln();if(ke){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Oe===null)throw Error(l(349));(Et&30)!==0||Ic(i,t,r)}s.memoizedState=r;var o={value:r,getSnapshot:t};return s.queue=o,Oc(Tc.bind(null,i,o,e),[e]),i.flags|=2048,Yr(9,Rc.bind(null,i,o,r,t),void 0,null),r},useId:function(){var e=Ln(),t=Oe.identifierPrefix;if(ke){var r=Un,i=Fn;r=(i&~(1<<32-kn(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Wr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=xh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jh={readContext:mn,useCallback:Vc,useContext:mn,useEffect:Ga,useImperativeHandle:Hc,useInsertionEffect:Mc,useLayoutEffect:Fc,useMemo:Bc,useReducer:Ya,useRef:_c,useState:function(){return Ya($r)},useDebugValue:qa,useDeferredValue:function(e){var t=vn();return Wc(t,Ae.memoizedState,e)},useTransition:function(){var e=Ya($r)[0],t=vn().memoizedState;return[e,t]},useMutableSource:Cc,useSyncExternalStore:Pc,useId:$c,unstable_isNewReconciler:!1},bh={readContext:mn,useCallback:Vc,useContext:mn,useEffect:Ga,useImperativeHandle:Hc,useInsertionEffect:Mc,useLayoutEffect:Fc,useMemo:Bc,useReducer:Ka,useRef:_c,useState:function(){return Ka($r)},useDebugValue:qa,useDeferredValue:function(e){var t=vn();return Ae===null?t.memoizedState=e:Wc(t,Ae.memoizedState,e)},useTransition:function(){var e=Ka($r)[0],t=vn().memoizedState;return[e,t]},useMutableSource:Cc,useSyncExternalStore:Pc,useId:$c,unstable_isNewReconciler:!1};function zn(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Qa(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:F({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Qi={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=Qe(),s=dt(e),o=Vn(i,s);o.payload=t,r!=null&&(o.callback=r),t=at(e,o,s),t!==null&&(Pn(t,e,s,i),Vi(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=Qe(),s=dt(e),o=Vn(i,s);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=at(e,o,s),t!==null&&(Pn(t,e,s,i),Vi(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Qe(),i=dt(e),s=Vn(r,i);s.tag=2,t!=null&&(s.callback=t),t=at(e,s,i),t!==null&&(Pn(t,e,i,r),Vi(t,e,i))}};function qc(e,t,r,i,s,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,d):t.prototype&&t.prototype.isPureReactComponent?!Tr(r,i)||!Tr(s,o):!0}function Qc(e,t,r){var i=!1,s=rt,o=t.contextType;return typeof o=="object"&&o!==null?o=mn(o):(s=Ze(t)?wt:$e.current,i=t.contextTypes,o=(i=i!=null)?Kt(e,s):rt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function Jc(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Qi.enqueueReplaceState(t,t.state,null)}function Ja(e,t,r,i){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Oa(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=mn(o):(o=Ze(t)?wt:$e.current,s.context=Kt(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qa(e,t,o,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Qi.enqueueReplaceState(s,s.state,null),Bi(e,r,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var r="",i=t;do r+=pe(i),i=i.return;while(i);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Xa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Za(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var wh=typeof WeakMap=="function"?WeakMap:Map;function Xc(e,t,r){r=Vn(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){rs||(rs=!0,xo=i),Za(e,t)},r}function Zc(e,t,r){r=Vn(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;r.payload=function(){return i(s)},r.callback=function(){Za(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Za(e,t),typeof i!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function ed(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new wh;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(r)||(s.add(r),e=_h.bind(null,e,t,r),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function td(e,t,r,i,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Vn(-1,1),t.tag=2,at(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var kh=Y.ReactCurrentOwner,en=!1;function qe(e,t,r,i){t.child=e===null?wc(t,null,r,i):Jt(t,e.child,r,i)}function rd(e,t,r,i,s){r=r.render;var o=t.ref;return Zt(t,s),i=Wa(e,t,r,i,o,s),r=$a(),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Bn(e,t,s)):(ke&&r&&Ea(t),t.flags|=1,qe(e,t,i,s),t.child)}function id(e,t,r,i,s){if(e===null){var o=r.type;return typeof o=="function"&&!wo(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,sd(e,t,o,i,s)):(e=cs(r.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&s)===0){var d=o.memoizedProps;if(r=r.compare,r=r!==null?r:Tr,r(d,i)&&e.ref===t.ref)return Bn(e,t,s)}return t.flags|=1,e=ut(o,i),e.ref=t.ref,e.return=t,t.child=e}function sd(e,t,r,i,s){if(e!==null){var o=e.memoizedProps;if(Tr(o,i)&&e.ref===t.ref)if(en=!1,t.pendingProps=i=o,(e.lanes&s)!==0)(e.flags&131072)!==0&&(en=!0);else return t.lanes=e.lanes,Bn(e,t,s)}return eo(e,t,r,i,s)}function ad(e,t,r){var i=t.pendingProps,s=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(rr,un),un|=r;else{if((r&1073741824)===0)return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(rr,un),un|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:r,ve(rr,un),un|=i}else o!==null?(i=o.baseLanes|r,t.memoizedState=null):i=r,ve(rr,un),un|=i;return qe(e,t,s,r),t.child}function od(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function eo(e,t,r,i,s){var o=Ze(r)?wt:$e.current;return o=Kt(t,o),Zt(t,s),r=Wa(e,t,r,i,o,s),i=$a(),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Bn(e,t,s)):(ke&&i&&Ea(t),t.flags|=1,qe(e,t,r,s),t.child)}function ld(e,t,r,i,s){if(Ze(r)){var o=!0;Di(t)}else o=!1;if(Zt(t,s),t.stateNode===null)Xi(e,t),Qc(t,r,i),Ja(t,r,i,s),i=!0;else if(e===null){var d=t.stateNode,h=t.memoizedProps;d.props=h;var x=d.context,S=r.contextType;typeof S=="object"&&S!==null?S=mn(S):(S=Ze(r)?wt:$e.current,S=Kt(t,S));var L=r.getDerivedStateFromProps,M=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function";M||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==i||x!==S)&&Jc(t,d,i,S),st=!1;var D=t.memoizedState;d.state=D,Bi(t,i,d,s),x=t.memoizedState,h!==i||D!==x||Xe.current||st?(typeof L=="function"&&(Qa(t,r,L,i),x=t.memoizedState),(h=st||qc(t,r,h,i,D,x,S))?(M||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=x),d.props=i,d.state=x,d.context=S,i=h):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,Nc(e,t),h=t.memoizedProps,S=t.type===t.elementType?h:zn(t.type,h),d.props=S,M=t.pendingProps,D=d.context,x=r.contextType,typeof x=="object"&&x!==null?x=mn(x):(x=Ze(r)?wt:$e.current,x=Kt(t,x));var W=r.getDerivedStateFromProps;(L=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==M||D!==x)&&Jc(t,d,i,x),st=!1,D=t.memoizedState,d.state=D,Bi(t,i,d,s);var K=t.memoizedState;h!==M||D!==K||Xe.current||st?(typeof W=="function"&&(Qa(t,r,W,i),K=t.memoizedState),(S=st||qc(t,r,S,i,D,K,x)||!1)?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,K,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,K,x)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=K),d.props=i,d.state=K,d.context=x,i=S):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return no(e,t,r,i,o,s)}function no(e,t,r,i,s,o){od(e,t);var d=(t.flags&128)!==0;if(!i&&!d)return s&&hc(t,r,!1),Bn(e,t,o);i=t.stateNode,kh.current=t;var h=d&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&d?(t.child=Jt(t,e.child,null,o),t.child=Jt(t,null,h,o)):qe(e,t,h,o),t.memoizedState=i.state,s&&hc(t,r,!0),t.child}function cd(e){var t=e.stateNode;t.pendingContext?pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pc(e,t.context,!1),Ma(e,t.containerInfo)}function dd(e,t,r,i,s){return Qt(),Ra(s),t.flags|=256,qe(e,t,r,i),t.child}var to={dehydrated:null,treeContext:null,retryLane:0};function ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function pd(e,t,r){var i=t.pendingProps,s=Ne.current,o=!1,d=(t.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(s&2)!==0),h?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ve(Ne,s&1),e===null)return Ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=i.children,e=i.fallback,o?(i=t.mode,o=t.child,d={mode:"hidden",children:d},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=d):o=ds(d,i,0,null),e=Tt(e,i,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ro(r),t.memoizedState=to,e):io(t,d));if(s=e.memoizedState,s!==null&&(h=s.dehydrated,h!==null))return Nh(e,t,d,i,h,s,r);if(o){o=i.fallback,d=t.mode,s=e.child,h=s.sibling;var x={mode:"hidden",children:i.children};return(d&1)===0&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=x,t.deletions=null):(i=ut(s,x),i.subtreeFlags=s.subtreeFlags&14680064),h!==null?o=ut(h,o):(o=Tt(o,d,r,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,d=e.child.memoizedState,d=d===null?ro(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},o.memoizedState=d,o.childLanes=e.childLanes&~r,t.memoizedState=to,i}return o=e.child,e=o.sibling,i=ut(o,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function io(e,t){return t=ds({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,r,i){return i!==null&&Ra(i),Jt(t,e.child,null,r),e=io(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nh(e,t,r,i,s,o,d){if(r)return t.flags&256?(t.flags&=-257,i=Xa(Error(l(422))),Ji(e,t,d,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,s=t.mode,i=ds({mode:"visible",children:i.children},s,0,null),o=Tt(o,s,d,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,(t.mode&1)!==0&&Jt(t,e.child,null,d),t.child.memoizedState=ro(d),t.memoizedState=to,o);if((t.mode&1)===0)return Ji(e,t,d,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var h=i.dgst;return i=h,o=Error(l(419)),i=Xa(o,i,void 0),Ji(e,t,d,i)}if(h=(d&e.childLanes)!==0,en||h){if(i=Oe,i!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(i.suspendedLanes|d))!==0?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Hn(e,s),Pn(i,e,s,-1))}return bo(),i=Xa(Error(l(421))),Ji(e,t,d,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Oh.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,pn=nt(s.nextSibling),dn=t,ke=!0,Sn=null,e!==null&&(xn[gn++]=Fn,xn[gn++]=Un,xn[gn++]=kt,Fn=e.id,Un=e.overflow,kt=t),t=io(t,i.children),t.flags|=4096,t)}function ud(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),La(e.return,t,r)}function so(e,t,r,i,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=r,o.tailMode=s)}function hd(e,t,r){var i=t.pendingProps,s=i.revealOrder,o=i.tail;if(qe(e,t,i.children,r),i=Ne.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,r,t);else if(e.tag===19)ud(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ve(Ne,i),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Wi(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),so(t,!1,s,r,o);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Wi(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}so(t,!0,r,null,o);break;case"together":so(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ct|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=ut(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ut(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Sh(e,t,r){switch(t.tag){case 3:cd(t),Qt();break;case 5:Ec(t);break;case 1:Ze(t.type)&&Di(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;ve(Ui,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(ve(Ne,Ne.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?pd(e,t,r):(ve(Ne,Ne.current&1),e=Bn(e,t,r),e!==null?e.sibling:null);ve(Ne,Ne.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return hd(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ve(Ne,Ne.current),i)break;return null;case 22:case 23:return t.lanes=0,ad(e,t,r)}return Bn(e,t,r)}var fd,ao,xd,gd;fd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ao=function(){},xd=function(e,t,r,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,zt(Dn.current);var o=null;switch(r){case"input":s=Ls(e,s),i=Ls(e,i),o=[];break;case"select":s=F({},s,{value:void 0}),i=F({},i,{value:void 0}),o=[];break;case"textarea":s=Ms(e,s),i=Ms(e,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ri)}Us(r,i);var d;r=null;for(S in s)if(!i.hasOwnProperty(S)&&s.hasOwnProperty(S)&&s[S]!=null)if(S==="style"){var h=s[S];for(d in h)h.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(u.hasOwnProperty(S)?o||(o=[]):(o=o||[]).push(S,null));for(S in i){var x=i[S];if(h=s!=null?s[S]:void 0,i.hasOwnProperty(S)&&x!==h&&(x!=null||h!=null))if(S==="style")if(h){for(d in h)!h.hasOwnProperty(d)||x&&x.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in x)x.hasOwnProperty(d)&&h[d]!==x[d]&&(r||(r={}),r[d]=x[d])}else r||(o||(o=[]),o.push(S,r)),r=x;else S==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,h=h?h.__html:void 0,x!=null&&h!==x&&(o=o||[]).push(S,x)):S==="children"?typeof x!="string"&&typeof x!="number"||(o=o||[]).push(S,""+x):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(u.hasOwnProperty(S)?(x!=null&&S==="onScroll"&&je("scroll",e),o||h===x||(o=[])):(o=o||[]).push(S,x))}r&&(o=o||[]).push("style",r);var S=o;(t.updateQueue=S)&&(t.flags|=4)}},gd=function(e,t,r,i){r!==i&&(t.flags|=4)};function Kr(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function zh(e,t,r){var i=t.pendingProps;switch(Ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ze(t.type)&&Ai(),Ke(t),null;case 3:return i=t.stateNode,er(),be(Xe),be($e),Ha(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sn!==null&&(vo(Sn),Sn=null))),ao(e,t),Ke(t),null;case 5:Fa(t);var s=zt(Vr.current);if(r=t.type,e!==null&&t.stateNode!=null)xd(e,t,r,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ke(t),null}if(e=zt(Dn.current),Mi(t)){i=t.stateNode,r=t.type;var o=t.memoizedProps;switch(i[An]=t,i[Or]=o,e=(t.mode&1)!==0,r){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(s=0;s<Dr.length;s++)je(Dr[s],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":Qo(i,o),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},je("invalid",i);break;case"textarea":Zo(i,o),je("invalid",i)}Us(r,o),s=null;for(var d in o)if(o.hasOwnProperty(d)){var h=o[d];d==="children"?typeof h=="string"?i.textContent!==h&&(o.suppressHydrationWarning!==!0&&Ii(i.textContent,h,e),s=["children",h]):typeof h=="number"&&i.textContent!==""+h&&(o.suppressHydrationWarning!==!0&&Ii(i.textContent,h,e),s=["children",""+h]):u.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&je("scroll",i)}switch(r){case"input":oi(i),Xo(i,o,!0);break;case"textarea":oi(i),nl(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ri)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tl(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(r,{is:i.is}):(e=d.createElement(r),r==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,r),e[An]=t,e[Or]=i,fd(e,t,!1,!1),t.stateNode=e;e:{switch(d=Hs(r,i),r){case"dialog":je("cancel",e),je("close",e),s=i;break;case"iframe":case"object":case"embed":je("load",e),s=i;break;case"video":case"audio":for(s=0;s<Dr.length;s++)je(Dr[s],e);s=i;break;case"source":je("error",e),s=i;break;case"img":case"image":case"link":je("error",e),je("load",e),s=i;break;case"details":je("toggle",e),s=i;break;case"input":Qo(e,i),s=Ls(e,i),je("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=F({},i,{value:void 0}),je("invalid",e);break;case"textarea":Zo(e,i),s=Ms(e,i),je("invalid",e);break;default:s=i}Us(r,s),h=s;for(o in h)if(h.hasOwnProperty(o)){var x=h[o];o==="style"?sl(e,x):o==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&rl(e,x)):o==="children"?typeof x=="string"?(r!=="textarea"||x!=="")&&xr(e,x):typeof x=="number"&&xr(e,""+x):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(u.hasOwnProperty(o)?x!=null&&o==="onScroll"&&je("scroll",e):x!=null&&Q(e,o,x,d))}switch(r){case"input":oi(e),Xo(e,i,!1);break;case"textarea":oi(e),nl(e);break;case"option":i.value!=null&&e.setAttribute("value",""+xe(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?Lt(e,!!i.multiple,o,!1):i.defaultValue!=null&&Lt(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ri)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)gd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(r=zt(Vr.current),zt(Dn.current),Mi(t)){if(i=t.stateNode,r=t.memoizedProps,i[An]=t,(o=i.nodeValue!==r)&&(e=dn,e!==null))switch(e.tag){case 3:Ii(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(i.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[An]=t,t.stateNode=i}return Ke(t),null;case 13:if(be(Ne),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&pn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)yc(),Qt(),t.flags|=98560,o=!1;else if(o=Mi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[An]=t}else Qt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else Sn!==null&&(vo(Sn),Sn=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?De===0&&(De=3):bo())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return er(),ao(e,t),e===null&&Lr(t.stateNode.containerInfo),Ke(t),null;case 10:return Da(t.type._context),Ke(t),null;case 17:return Ze(t.type)&&Ai(),Ke(t),null;case 19:if(be(Ne),o=t.memoizedState,o===null)return Ke(t),null;if(i=(t.flags&128)!==0,d=o.rendering,d===null)if(i)Kr(o,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Wi(e),d!==null){for(t.flags|=128,Kr(o,!1),i=d.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)o=r,e=i,o.flags&=14680066,d=o.alternate,d===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=d.childLanes,o.lanes=d.lanes,o.child=d.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=d.memoizedProps,o.memoizedState=d.memoizedState,o.updateQueue=d.updateQueue,o.type=d.type,e=d.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ve(Ne,Ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>ir&&(t.flags|=128,i=!0,Kr(o,!1),t.lanes=4194304)}else{if(!i)if(e=Wi(d),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!ke)return Ke(t),null}else 2*Ie()-o.renderingStartTime>ir&&r!==1073741824&&(t.flags|=128,i=!0,Kr(o,!1),t.lanes=4194304);o.isBackwards?(d.sibling=t.child,t.child=d):(r=o.last,r!==null?r.sibling=d:t.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,r=Ne.current,ve(Ne,i?r&1|2:r&1),t):(Ke(t),null);case 22:case 23:return jo(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(un&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Eh(e,t){switch(Ca(t),t.tag){case 1:return Ze(t.type)&&Ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),be(Xe),be($e),Ha(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Fa(t),null;case 13:if(be(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ne),null;case 4:return er(),null;case 10:return Da(t.type._context),null;case 22:case 23:return jo(),null;case 24:return null;default:return null}}var Zi=!1,Ge=!1,Ch=typeof WeakSet=="function"?WeakSet:Set,$=null;function tr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Ee(e,t,i)}else r.current=null}function oo(e,t,r){try{r()}catch(i){Ee(e,t,i)}}var md=!1;function Ph(e,t){if(ya=yi,e=ql(),pa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var d=0,h=-1,x=-1,S=0,L=0,M=e,D=null;n:for(;;){for(var W;M!==r||s!==0&&M.nodeType!==3||(h=d+s),M!==o||i!==0&&M.nodeType!==3||(x=d+i),M.nodeType===3&&(d+=M.nodeValue.length),(W=M.firstChild)!==null;)D=M,M=W;for(;;){if(M===e)break n;if(D===r&&++S===s&&(h=d),D===o&&++L===i&&(x=d),(W=M.nextSibling)!==null)break;M=D,D=M.parentNode}M=W}r=h===-1||x===-1?null:{start:h,end:x}}else r=null}r=r||{start:0,end:0}}else r=null;for(ja={focusedElem:e,selectionRange:r},yi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var K=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var G=K.memoizedProps,Re=K.memoizedState,j=t.stateNode,v=j.getSnapshotBeforeUpdate(t.elementType===t.type?G:zn(t.type,G),Re);j.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(U){Ee(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return K=md,md=!1,K}function Gr(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&oo(t,r,o)}s=s.next}while(s!==i)}}function es(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function lo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function vd(e){var t=e.alternate;t!==null&&(e.alternate=null,vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[Or],delete t[Na],delete t[ph],delete t[uh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yd(e){return e.tag===5||e.tag===3||e.tag===4}function jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function co(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ri));else if(i!==4&&(e=e.child,e!==null))for(co(e,t,r),e=e.sibling;e!==null;)co(e,t,r),e=e.sibling}function po(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(po(e,t,r),e=e.sibling;e!==null;)po(e,t,r),e=e.sibling}var He=null,En=!1;function ot(e,t,r){for(r=r.child;r!==null;)bd(e,t,r),r=r.sibling}function bd(e,t,r){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(hi,r)}catch{}switch(r.tag){case 5:Ge||tr(r,t);case 6:var i=He,s=En;He=null,ot(e,t,r),He=i,En=s,He!==null&&(En?(e=He,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):He.removeChild(r.stateNode));break;case 18:He!==null&&(En?(e=He,r=r.stateNode,e.nodeType===8?ka(e.parentNode,r):e.nodeType===1&&ka(e,r),zr(e)):ka(He,r.stateNode));break;case 4:i=He,s=En,He=r.stateNode.containerInfo,En=!0,ot(e,t,r),He=i,En=s;break;case 0:case 11:case 14:case 15:if(!Ge&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,d=o.destroy;o=o.tag,d!==void 0&&((o&2)!==0||(o&4)!==0)&&oo(r,t,d),s=s.next}while(s!==i)}ot(e,t,r);break;case 1:if(!Ge&&(tr(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(h){Ee(r,t,h)}ot(e,t,r);break;case 21:ot(e,t,r);break;case 22:r.mode&1?(Ge=(i=Ge)||r.memoizedState!==null,ot(e,t,r),Ge=i):ot(e,t,r);break;default:ot(e,t,r)}}function wd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ch),t.forEach(function(i){var s=Mh.bind(null,e,i);r.has(i)||(r.add(i),i.then(s,s))})}}function Cn(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var o=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 5:He=h.stateNode,En=!1;break e;case 3:He=h.stateNode.containerInfo,En=!0;break e;case 4:He=h.stateNode.containerInfo,En=!0;break e}h=h.return}if(He===null)throw Error(l(160));bd(o,d,s),He=null,En=!1;var x=s.alternate;x!==null&&(x.return=null),s.return=null}catch(S){Ee(s,t,S)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kd(t,e),t=t.sibling}function kd(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Cn(t,e),_n(e),i&4){try{Gr(3,e,e.return),es(3,e)}catch(G){Ee(e,e.return,G)}try{Gr(5,e,e.return)}catch(G){Ee(e,e.return,G)}}break;case 1:Cn(t,e),_n(e),i&512&&r!==null&&tr(r,r.return);break;case 5:if(Cn(t,e),_n(e),i&512&&r!==null&&tr(r,r.return),e.flags&32){var s=e.stateNode;try{xr(s,"")}catch(G){Ee(e,e.return,G)}}if(i&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,d=r!==null?r.memoizedProps:o,h=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{h==="input"&&o.type==="radio"&&o.name!=null&&Jo(s,o),Hs(h,d);var S=Hs(h,o);for(d=0;d<x.length;d+=2){var L=x[d],M=x[d+1];L==="style"?sl(s,M):L==="dangerouslySetInnerHTML"?rl(s,M):L==="children"?xr(s,M):Q(s,L,M,S)}switch(h){case"input":_s(s,o);break;case"textarea":el(s,o);break;case"select":var D=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var W=o.value;W!=null?Lt(s,!!o.multiple,W,!1):D!==!!o.multiple&&(o.defaultValue!=null?Lt(s,!!o.multiple,o.defaultValue,!0):Lt(s,!!o.multiple,o.multiple?[]:"",!1))}s[Or]=o}catch(G){Ee(e,e.return,G)}}break;case 6:if(Cn(t,e),_n(e),i&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(G){Ee(e,e.return,G)}}break;case 3:if(Cn(t,e),_n(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{zr(t.containerInfo)}catch(G){Ee(e,e.return,G)}break;case 4:Cn(t,e),_n(e);break;case 13:Cn(t,e),_n(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(fo=Ie())),i&4&&wd(e);break;case 22:if(L=r!==null&&r.memoizedState!==null,e.mode&1?(Ge=(S=Ge)||L,Cn(t,e),Ge=S):Cn(t,e),_n(e),i&8192){if(S=e.memoizedState!==null,(e.stateNode.isHidden=S)&&!L&&(e.mode&1)!==0)for($=e,L=e.child;L!==null;){for(M=$=L;$!==null;){switch(D=$,W=D.child,D.tag){case 0:case 11:case 14:case 15:Gr(4,D,D.return);break;case 1:tr(D,D.return);var K=D.stateNode;if(typeof K.componentWillUnmount=="function"){i=D,r=D.return;try{t=i,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(G){Ee(i,r,G)}}break;case 5:tr(D,D.return);break;case 22:if(D.memoizedState!==null){zd(M);continue}}W!==null?(W.return=D,$=W):zd(M)}L=L.sibling}e:for(L=null,M=e;;){if(M.tag===5){if(L===null){L=M;try{s=M.stateNode,S?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(h=M.stateNode,x=M.memoizedProps.style,d=x!=null&&x.hasOwnProperty("display")?x.display:null,h.style.display=il("display",d))}catch(G){Ee(e,e.return,G)}}}else if(M.tag===6){if(L===null)try{M.stateNode.nodeValue=S?"":M.memoizedProps}catch(G){Ee(e,e.return,G)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===e)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===e)break e;for(;M.sibling===null;){if(M.return===null||M.return===e)break e;L===M&&(L=null),M=M.return}L===M&&(L=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:Cn(t,e),_n(e),i&4&&wd(e);break;case 21:break;default:Cn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(yd(r)){var i=r;break e}r=r.return}throw Error(l(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(xr(s,""),i.flags&=-33);var o=jd(e);po(e,o,s);break;case 3:case 4:var d=i.stateNode.containerInfo,h=jd(e);co(e,h,d);break;default:throw Error(l(161))}}catch(x){Ee(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ih(e,t,r){$=e,Nd(e)}function Nd(e,t,r){for(var i=(e.mode&1)!==0;$!==null;){var s=$,o=s.child;if(s.tag===22&&i){var d=s.memoizedState!==null||Zi;if(!d){var h=s.alternate,x=h!==null&&h.memoizedState!==null||Ge;h=Zi;var S=Ge;if(Zi=d,(Ge=x)&&!S)for($=s;$!==null;)d=$,x=d.child,d.tag===22&&d.memoizedState!==null?Ed(s):x!==null?(x.return=d,$=x):Ed(s);for(;o!==null;)$=o,Nd(o),o=o.sibling;$=s,Zi=h,Ge=S}Sd(e)}else(s.subtreeFlags&8772)!==0&&o!==null?(o.return=s,$=o):Sd(e)}}function Sd(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||es(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ge)if(r===null)i.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:zn(t.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&zc(t,o,i);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}zc(t,d,r)}break;case 5:var h=t.stateNode;if(r===null&&t.flags&4){r=h;var x=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&r.focus();break;case"img":x.src&&(r.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var S=t.alternate;if(S!==null){var L=S.memoizedState;if(L!==null){var M=L.dehydrated;M!==null&&zr(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ge||t.flags&512&&lo(t)}catch(D){Ee(t,t.return,D)}}if(t===e){$=null;break}if(r=t.sibling,r!==null){r.return=t.return,$=r;break}$=t.return}}function zd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var r=t.sibling;if(r!==null){r.return=t.return,$=r;break}$=t.return}}function Ed(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{es(4,t)}catch(x){Ee(t,r,x)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(x){Ee(t,s,x)}}var o=t.return;try{lo(t)}catch(x){Ee(t,o,x)}break;case 5:var d=t.return;try{lo(t)}catch(x){Ee(t,d,x)}}}catch(x){Ee(t,t.return,x)}if(t===e){$=null;break}var h=t.sibling;if(h!==null){h.return=t.return,$=h;break}$=t.return}}var Rh=Math.ceil,ns=Y.ReactCurrentDispatcher,uo=Y.ReactCurrentOwner,yn=Y.ReactCurrentBatchConfig,le=0,Oe=null,Te=null,Ve=0,un=0,rr=tt(0),De=0,qr=null,Ct=0,ts=0,ho=0,Qr=null,nn=null,fo=0,ir=1/0,Wn=null,rs=!1,xo=null,lt=null,is=!1,ct=null,ss=0,Jr=0,go=null,as=-1,os=0;function Qe(){return(le&6)!==0?Ie():as!==-1?as:as=Ie()}function dt(e){return(e.mode&1)===0?1:(le&2)!==0&&Ve!==0?Ve&-Ve:fh.transition!==null?(os===0&&(os=jl()),os):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Pl(e.type)),e)}function Pn(e,t,r,i){if(50<Jr)throw Jr=0,go=null,Error(l(185));br(e,r,i),((le&2)===0||e!==Oe)&&(e===Oe&&((le&2)===0&&(ts|=r),De===4&&pt(e,Ve)),tn(e,i),r===1&&le===0&&(t.mode&1)===0&&(ir=Ie()+500,Li&&it()))}function tn(e,t){var r=e.callbackNode;fu(e,t);var i=gi(e,e===Oe?Ve:0);if(i===0)r!==null&&ml(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&ml(r),t===1)e.tag===0?hh(Pd.bind(null,e)):fc(Pd.bind(null,e)),ch(function(){(le&6)===0&&it()}),r=null;else{switch(bl(i)){case 1:r=Gs;break;case 4:r=vl;break;case 16:r=ui;break;case 536870912:r=yl;break;default:r=ui}r=Od(r,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Cd(e,t){if(as=-1,os=0,(le&6)!==0)throw Error(l(327));var r=e.callbackNode;if(sr()&&e.callbackNode!==r)return null;var i=gi(e,e===Oe?Ve:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=ls(e,i);else{t=i;var s=le;le|=2;var o=Rd();(Oe!==e||Ve!==t)&&(Wn=null,ir=Ie()+500,It(e,t));do try{Dh();break}catch(h){Id(e,h)}while(!0);Aa(),ns.current=o,le=s,Te!==null?t=0:(Oe=null,Ve=0,t=De)}if(t!==0){if(t===2&&(s=qs(e),s!==0&&(i=s,t=mo(e,s))),t===1)throw r=qr,It(e,0),pt(e,i),tn(e,Ie()),r;if(t===6)pt(e,i);else{if(s=e.current.alternate,(i&30)===0&&!Th(s)&&(t=ls(e,i),t===2&&(o=qs(e),o!==0&&(i=o,t=mo(e,o))),t===1))throw r=qr,It(e,0),pt(e,i),tn(e,Ie()),r;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(l(345));case 2:Rt(e,nn,Wn);break;case 3:if(pt(e,i),(i&130023424)===i&&(t=fo+500-Ie(),10<t)){if(gi(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){Qe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=wa(Rt.bind(null,e,nn,Wn),t);break}Rt(e,nn,Wn);break;case 4:if(pt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var d=31-kn(i);o=1<<d,d=t[d],d>s&&(s=d),i&=~o}if(i=s,i=Ie()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rh(i/1960))-i,10<i){e.timeoutHandle=wa(Rt.bind(null,e,nn,Wn),i);break}Rt(e,nn,Wn);break;case 5:Rt(e,nn,Wn);break;default:throw Error(l(329))}}}return tn(e,Ie()),e.callbackNode===r?Cd.bind(null,e):null}function mo(e,t){var r=Qr;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=ls(e,t),e!==2&&(t=nn,nn=r,t!==null&&vo(t)),e}function vo(e){nn===null?nn=e:nn.push.apply(nn,e)}function Th(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],o=s.getSnapshot;s=s.value;try{if(!Nn(o(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~ho,t&=~ts,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-kn(t),i=1<<r;e[r]=-1,t&=~i}}function Pd(e){if((le&6)!==0)throw Error(l(327));sr();var t=gi(e,0);if((t&1)===0)return tn(e,Ie()),null;var r=ls(e,t);if(e.tag!==0&&r===2){var i=qs(e);i!==0&&(t=i,r=mo(e,i))}if(r===1)throw r=qr,It(e,0),pt(e,t),tn(e,Ie()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,nn,Wn),tn(e,Ie()),null}function yo(e,t){var r=le;le|=1;try{return e(t)}finally{le=r,le===0&&(ir=Ie()+500,Li&&it())}}function Pt(e){ct!==null&&ct.tag===0&&(le&6)===0&&sr();var t=le;le|=1;var r=yn.transition,i=ge;try{if(yn.transition=null,ge=1,e)return e()}finally{ge=i,yn.transition=r,le=t,(le&6)===0&&it()}}function jo(){un=rr.current,be(rr)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,lh(r)),Te!==null)for(r=Te.return;r!==null;){var i=r;switch(Ca(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ai();break;case 3:er(),be(Xe),be($e),Ha();break;case 5:Fa(i);break;case 4:er();break;case 13:be(Ne);break;case 19:be(Ne);break;case 10:Da(i.type._context);break;case 22:case 23:jo()}r=r.return}if(Oe=e,Te=e=ut(e.current,null),Ve=un=t,De=0,qr=null,ho=ts=Ct=0,nn=Qr=null,St!==null){for(t=0;t<St.length;t++)if(r=St[t],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,o=r.pending;if(o!==null){var d=o.next;o.next=s,i.next=d}r.pending=i}St=null}return e}function Id(e,t){do{var r=Te;try{if(Aa(),$i.current=qi,Yi){for(var i=Se.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Yi=!1}if(Et=0,_e=Ae=Se=null,Br=!1,Wr=0,uo.current=null,r===null||r.return===null){De=1,qr=t,Te=null;break}e:{var o=e,d=r.return,h=r,x=t;if(t=Ve,h.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var S=x,L=h,M=L.tag;if((L.mode&1)===0&&(M===0||M===11||M===15)){var D=L.alternate;D?(L.updateQueue=D.updateQueue,L.memoizedState=D.memoizedState,L.lanes=D.lanes):(L.updateQueue=null,L.memoizedState=null)}var W=nd(d);if(W!==null){W.flags&=-257,td(W,d,h,o,t),W.mode&1&&ed(o,S,t),t=W,x=S;var K=t.updateQueue;if(K===null){var G=new Set;G.add(x),t.updateQueue=G}else K.add(x);break e}else{if((t&1)===0){ed(o,S,t),bo();break e}x=Error(l(426))}}else if(ke&&h.mode&1){var Re=nd(d);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),td(Re,d,h,o,t),Ra(nr(x,h));break e}}o=x=nr(x,h),De!==4&&(De=2),Qr===null?Qr=[o]:Qr.push(o),o=d;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var j=Xc(o,x,t);Sc(o,j);break e;case 1:h=x;var v=o.type,w=o.stateNode;if((o.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(lt===null||!lt.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var U=Zc(o,h,t);Sc(o,U);break e}}o=o.return}while(o!==null)}Ad(r)}catch(q){t=q,Te===r&&r!==null&&(Te=r=r.return);continue}break}while(!0)}function Rd(){var e=ns.current;return ns.current=qi,e===null?qi:e}function bo(){(De===0||De===3||De===2)&&(De=4),Oe===null||(Ct&268435455)===0&&(ts&268435455)===0||pt(Oe,Ve)}function ls(e,t){var r=le;le|=2;var i=Rd();(Oe!==e||Ve!==t)&&(Wn=null,It(e,t));do try{Ah();break}catch(s){Id(e,s)}while(!0);if(Aa(),le=r,ns.current=i,Te!==null)throw Error(l(261));return Oe=null,Ve=0,De}function Ah(){for(;Te!==null;)Td(Te)}function Dh(){for(;Te!==null&&!su();)Td(Te)}function Td(e){var t=_d(e.alternate,e,un);e.memoizedProps=e.pendingProps,t===null?Ad(e):Te=t,uo.current=null}function Ad(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=zh(r,t,un),r!==null){Te=r;return}}else{if(r=Eh(r,t),r!==null){r.flags&=32767,Te=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Te=null;return}}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);De===0&&(De=5)}function Rt(e,t,r){var i=ge,s=yn.transition;try{yn.transition=null,ge=1,Lh(e,t,r,i)}finally{yn.transition=s,ge=i}return null}function Lh(e,t,r,i){do sr();while(ct!==null);if((le&6)!==0)throw Error(l(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(xu(e,o),e===Oe&&(Te=Oe=null,Ve=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||is||(is=!0,Od(ui,function(){return sr(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=yn.transition,yn.transition=null;var d=ge;ge=1;var h=le;le|=4,uo.current=null,Ph(e,r),kd(r,e),nh(ja),yi=!!ya,ja=ya=null,e.current=r,Ih(r),au(),le=h,ge=d,yn.transition=o}else e.current=r;if(is&&(is=!1,ct=e,ss=s),o=e.pendingLanes,o===0&&(lt=null),cu(r.stateNode),tn(e,Ie()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(rs)throw rs=!1,e=xo,xo=null,e;return(ss&1)!==0&&e.tag!==0&&sr(),o=e.pendingLanes,(o&1)!==0?e===go?Jr++:(Jr=0,go=e):Jr=0,it(),null}function sr(){if(ct!==null){var e=bl(ss),t=yn.transition,r=ge;try{if(yn.transition=null,ge=16>e?16:e,ct===null)var i=!1;else{if(e=ct,ct=null,ss=0,(le&6)!==0)throw Error(l(331));var s=le;for(le|=4,$=e.current;$!==null;){var o=$,d=o.child;if(($.flags&16)!==0){var h=o.deletions;if(h!==null){for(var x=0;x<h.length;x++){var S=h[x];for($=S;$!==null;){var L=$;switch(L.tag){case 0:case 11:case 15:Gr(8,L,o)}var M=L.child;if(M!==null)M.return=L,$=M;else for(;$!==null;){L=$;var D=L.sibling,W=L.return;if(vd(L),L===S){$=null;break}if(D!==null){D.return=W,$=D;break}$=W}}}var K=o.alternate;if(K!==null){var G=K.child;if(G!==null){K.child=null;do{var Re=G.sibling;G.sibling=null,G=Re}while(G!==null)}}$=o}}if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,$=d;else e:for(;$!==null;){if(o=$,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Gr(9,o,o.return)}var j=o.sibling;if(j!==null){j.return=o.return,$=j;break e}$=o.return}}var v=e.current;for($=v;$!==null;){d=$;var w=d.child;if((d.subtreeFlags&2064)!==0&&w!==null)w.return=d,$=w;else e:for(d=v;$!==null;){if(h=$,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:es(9,h)}}catch(q){Ee(h,h.return,q)}if(h===d){$=null;break e}var U=h.sibling;if(U!==null){U.return=h.return,$=U;break e}$=h.return}}if(le=s,it(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(hi,e)}catch{}i=!0}return i}finally{ge=r,yn.transition=t}}return!1}function Dd(e,t,r){t=nr(r,t),t=Xc(e,t,1),e=at(e,t,1),t=Qe(),e!==null&&(br(e,1,t),tn(e,t))}function Ee(e,t,r){if(e.tag===3)Dd(e,e,r);else for(;t!==null;){if(t.tag===3){Dd(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lt===null||!lt.has(i))){e=nr(r,e),e=Zc(t,e,1),t=at(t,e,1),e=Qe(),t!==null&&(br(t,1,e),tn(t,e));break}}t=t.return}}function _h(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&r,Oe===e&&(Ve&r)===r&&(De===4||De===3&&(Ve&130023424)===Ve&&500>Ie()-fo?It(e,0):ho|=r),tn(e,t)}function Ld(e,t){t===0&&((e.mode&1)===0?t=1:(t=xi,xi<<=1,(xi&130023424)===0&&(xi=4194304)));var r=Qe();e=Hn(e,t),e!==null&&(br(e,t,r),tn(e,r))}function Oh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ld(e,r)}function Mh(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(l(314))}i!==null&&i.delete(t),Ld(e,r)}var _d;_d=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)en=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return en=!1,Sh(e,t,r);en=(e.flags&131072)!==0}else en=!1,ke&&(t.flags&1048576)!==0&&xc(t,Oi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Xi(e,t),e=t.pendingProps;var s=Kt(t,$e.current);Zt(t,r),s=Wa(null,t,i,e,s,r);var o=$a();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(i)?(o=!0,Di(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Oa(t),s.updater=Qi,t.stateNode=s,s._reactInternals=t,Ja(t,i,e,r),t=no(null,t,i,!0,o,r)):(t.tag=0,ke&&o&&Ea(t),qe(null,t,s,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Xi(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=Uh(i),e=zn(i,e),s){case 0:t=eo(null,t,i,e,r);break e;case 1:t=ld(null,t,i,e,r);break e;case 11:t=rd(null,t,i,e,r);break e;case 14:t=id(null,t,i,zn(i.type,e),r);break e}throw Error(l(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:zn(i,s),eo(e,t,i,s,r);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:zn(i,s),ld(e,t,i,s,r);case 3:e:{if(cd(t),e===null)throw Error(l(387));i=t.pendingProps,o=t.memoizedState,s=o.element,Nc(e,t),Bi(t,i,null,r);var d=t.memoizedState;if(i=d.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=nr(Error(l(423)),t),t=dd(e,t,i,r,s);break e}else if(i!==s){s=nr(Error(l(424)),t),t=dd(e,t,i,r,s);break e}else for(pn=nt(t.stateNode.containerInfo.firstChild),dn=t,ke=!0,Sn=null,r=wc(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Qt(),i===s){t=Bn(e,t,r);break e}qe(e,t,i,r)}t=t.child}return t;case 5:return Ec(t),e===null&&Ia(t),i=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,d=s.children,ba(i,s)?d=null:o!==null&&ba(i,o)&&(t.flags|=32),od(e,t),qe(e,t,d,r),t.child;case 6:return e===null&&Ia(t),null;case 13:return pd(e,t,r);case 4:return Ma(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Jt(t,null,i,r):qe(e,t,i,r),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:zn(i,s),rd(e,t,i,s,r);case 7:return qe(e,t,t.pendingProps,r),t.child;case 8:return qe(e,t,t.pendingProps.children,r),t.child;case 12:return qe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,o=t.memoizedProps,d=s.value,ve(Ui,i._currentValue),i._currentValue=d,o!==null)if(Nn(o.value,d)){if(o.children===s.children&&!Xe.current){t=Bn(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var h=o.dependencies;if(h!==null){d=o.child;for(var x=h.firstContext;x!==null;){if(x.context===i){if(o.tag===1){x=Vn(-1,r&-r),x.tag=2;var S=o.updateQueue;if(S!==null){S=S.shared;var L=S.pending;L===null?x.next=x:(x.next=L.next,L.next=x),S.pending=x}}o.lanes|=r,x=o.alternate,x!==null&&(x.lanes|=r),La(o.return,r,t),h.lanes|=r;break}x=x.next}}else if(o.tag===10)d=o.type===t.type?null:o.child;else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=r,h=d.alternate,h!==null&&(h.lanes|=r),La(d,r,t),d=o.sibling}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===t){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}qe(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,Zt(t,r),s=mn(s),i=i(s),t.flags|=1,qe(e,t,i,r),t.child;case 14:return i=t.type,s=zn(i,t.pendingProps),s=zn(i.type,s),id(e,t,i,s,r);case 15:return sd(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:zn(i,s),Xi(e,t),t.tag=1,Ze(i)?(e=!0,Di(t)):e=!1,Zt(t,r),Qc(t,i,s),Ja(t,i,s,r),no(null,t,i,!0,e,r);case 19:return hd(e,t,r);case 22:return ad(e,t,r)}throw Error(l(156,t.tag))};function Od(e,t){return gl(e,t)}function Fh(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,t,r,i){return new Fh(e,t,r,i)}function wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uh(e){if(typeof e=="function")return wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fn)return 11;if(e===on)return 14}return 2}function ut(e,t){var r=e.alternate;return r===null?(r=jn(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function cs(e,t,r,i,s,o){var d=2;if(i=e,typeof e=="function")wo(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ae:return Tt(r.children,s,o,t);case de:d=8,s|=8;break;case Le:return e=jn(12,r,t,s|2),e.elementType=Le,e.lanes=o,e;case We:return e=jn(13,r,t,s),e.elementType=We,e.lanes=o,e;case Je:return e=jn(19,r,t,s),e.elementType=Je,e.lanes=o,e;case ye:return ds(r,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:d=10;break e;case wn:d=9;break e;case fn:d=11;break e;case on:d=14;break e;case Ue:d=16,i=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=jn(d,r,t,s),t.elementType=e,t.type=i,t.lanes=o,t}function Tt(e,t,r,i){return e=jn(7,e,i,t),e.lanes=r,e}function ds(e,t,r,i){return e=jn(22,e,i,t),e.elementType=ye,e.lanes=r,e.stateNode={isHidden:!1},e}function ko(e,t,r){return e=jn(6,e,null,t),e.lanes=r,e}function No(e,t,r){return t=jn(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hh(e,t,r,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function So(e,t,r,i,s,o,d,h,x){return e=new Hh(e,t,r,h,x),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(o),e}function Vh(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Md(e){if(!e)return rt;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(Ze(r))return uc(e,r,t)}return t}function Fd(e,t,r,i,s,o,d,h,x){return e=So(r,i,!0,e,s,o,d,h,x),e.context=Md(null),r=e.current,i=Qe(),s=dt(r),o=Vn(i,s),o.callback=t??null,at(r,o,s),e.current.lanes=s,br(e,s,i),tn(e,i),e}function ps(e,t,r,i){var s=t.current,o=Qe(),d=dt(s);return r=Md(r),t.context===null?t.context=r:t.pendingContext=r,t=Vn(o,d),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=at(s,t,d),e!==null&&(Pn(e,s,d,o),Vi(e,s,d)),d}function us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function zo(e,t){Ud(e,t),(e=e.alternate)&&Ud(e,t)}function Bh(){return null}var Hd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Eo(e){this._internalRoot=e}hs.prototype.render=Eo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));ps(e,t,null,null)},hs.prototype.unmount=Eo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){ps(null,e,null,null)}),t[On]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nl();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xn.length&&t!==0&&t<Xn[r].priority;r++);Xn.splice(r,0,e),r===0&&El(e)}};function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vd(){}function Wh(e,t,r,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var S=us(d);o.call(S)}}var d=Fd(t,i,e,0,null,!1,!1,"",Vd);return e._reactRootContainer=d,e[On]=d.current,Lr(e.nodeType===8?e.parentNode:e),Pt(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var h=i;i=function(){var S=us(x);h.call(S)}}var x=So(e,0,!1,null,null,!1,!1,"",Vd);return e._reactRootContainer=x,e[On]=x.current,Lr(e.nodeType===8?e.parentNode:e),Pt(function(){ps(t,x,r,i)}),x}function xs(e,t,r,i,s){var o=r._reactRootContainer;if(o){var d=o;if(typeof s=="function"){var h=s;s=function(){var x=us(d);h.call(x)}}ps(t,d,e,s)}else d=Wh(r,t,e,s,i);return us(d)}wl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=jr(t.pendingLanes);r!==0&&(Js(t,r|1),tn(t,Ie()),(le&6)===0&&(ir=Ie()+500,it()))}break;case 13:Pt(function(){var i=Hn(e,1);if(i!==null){var s=Qe();Pn(i,e,1,s)}}),zo(e,1)}},Xs=function(e){if(e.tag===13){var t=Hn(e,134217728);if(t!==null){var r=Qe();Pn(t,e,134217728,r)}zo(e,134217728)}},kl=function(e){if(e.tag===13){var t=dt(e),r=Hn(e,t);if(r!==null){var i=Qe();Pn(r,e,t,i)}zo(e,t)}},Nl=function(){return ge},Sl=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}},Ws=function(e,t,r){switch(t){case"input":if(_s(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var s=Ti(i);if(!s)throw Error(l(90));qo(i),_s(i,s)}}}break;case"textarea":el(e,r);break;case"select":t=r.value,t!=null&&Lt(e,!!r.multiple,t,!1)}},cl=yo,dl=Pt;var $h={usingClientEntryPoint:!1,Events:[Mr,$t,Ti,ol,ll,yo]},Xr={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yh={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fl(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||Bh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gs.isDisabled&&gs.supportsFiber)try{hi=gs.inject(Yh),Tn=gs}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$h,rn.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Co(t))throw Error(l(200));return Vh(e,t,null,r)},rn.createRoot=function(e,t){if(!Co(e))throw Error(l(299));var r=!1,i="",s=Hd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=So(e,1,!1,null,null,r,!1,i,s),e[On]=t.current,Lr(e.nodeType===8?e.parentNode:e),new Eo(t)},rn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=fl(t),e=e===null?null:e.stateNode,e},rn.flushSync=function(e){return Pt(e)},rn.hydrate=function(e,t,r){if(!fs(t))throw Error(l(200));return xs(null,e,t,!0,r)},rn.hydrateRoot=function(e,t,r){if(!Co(e))throw Error(l(405));var i=r!=null&&r.hydratedSources||null,s=!1,o="",d=Hd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=Fd(t,null,e,1,r??null,s,!1,o,d),e[On]=t.current,Lr(e),i)for(e=0;e<i.length;e++)r=i[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new hs(t)},rn.render=function(e,t,r){if(!fs(t))throw Error(l(200));return xs(null,e,t,!1,r)},rn.unmountComponentAtNode=function(e){if(!fs(e))throw Error(l(40));return e._reactRootContainer?(Pt(function(){xs(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1},rn.unstable_batchedUpdates=yo,rn.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!fs(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return xs(e,t,r,!1,i)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var Qd;function Cp(){if(Qd)return Ro.exports;Qd=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Ro.exports=nf(),Ro.exports}var Jd;function tf(){if(Jd)return ms;Jd=1;var a=Cp();return ms.createRoot=a.createRoot,ms.hydrateRoot=a.hydrateRoot,ms}var rf=tf();const sf=zp(rf),af="https://my-sih-psi.vercel.app/";async function ft(a,c={}){const l=await fetch(`${af}${a}`,{headers:{"Content-Type":"application/json",...c.headers||{}},...c});if(!l.ok){const p=await l.text();throw new Error(p||`API Error: ${l.status}`)}return l.json()}const or={getInnovations:()=>ft("/api/innovations"),getInnovation:a=>ft(`/api/innovations/${a}`),createInnovation:a=>ft("/api/innovations",{method:"POST",body:JSON.stringify(a)}),updateInnovation:(a,c)=>ft(`/api/innovations/${a}`,{method:"PUT",body:JSON.stringify(c)}),deleteInnovation:a=>ft(`/api/innovations/${a}`,{method:"DELETE"}),analyzeInnovation:a=>ft(`/api/innovations/${a}/analyze`,{method:"POST"}),getDashboardSummary:()=>ft("/api/dashboard/summary"),health:()=>ft("/")};Cp();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)({}).hasOwnProperty.call(l,p)&&(a[p]=l[p])}return a},ni.apply(null,arguments)}var mt;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(mt||(mt={}));const Xd="popstate";function of(a){a===void 0&&(a={});function c(p,u){let{pathname:f,search:m,hash:N}=p.location;return Oo("",{pathname:f,search:m,hash:N},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(p,u){return typeof u=="string"?u:ks(u)}return cf(c,l,null,a)}function ze(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function Pp(a,c){if(!a){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function lf(){return Math.random().toString(36).substr(2,8)}function Zd(a,c){return{usr:a.state,key:a.key,idx:c}}function Oo(a,c,l,p){return l===void 0&&(l=null),ni({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof c=="string"?ur(c):c,{state:l,key:c&&c.key||p||lf()})}function ks(a){let{pathname:c="/",search:l="",hash:p=""}=a;return l&&l!=="?"&&(c+=l.charAt(0)==="?"?l:"?"+l),p&&p!=="#"&&(c+=p.charAt(0)==="#"?p:"#"+p),c}function ur(a){let c={};if(a){let l=a.indexOf("#");l>=0&&(c.hash=a.substr(l),a=a.substr(0,l));let p=a.indexOf("?");p>=0&&(c.search=a.substr(p),a=a.substr(0,p)),a&&(c.pathname=a)}return c}function cf(a,c,l,p){p===void 0&&(p={});let{window:u=document.defaultView,v5Compat:f=!1}=p,m=u.history,N=mt.Pop,b=null,g=P();g==null&&(g=0,m.replaceState(ni({},m.state,{idx:g}),""));function P(){return(m.state||{idx:null}).idx}function C(){N=mt.Pop;let k=P(),I=k==null?null:k-g;g=k,b&&b({action:N,location:z.location,delta:I})}function A(k,I){N=mt.Push;let V=Oo(z.location,k,I);g=P()+1;let Q=Zd(V,g),Y=z.createHref(V);try{m.pushState(Q,"",Y)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;u.location.assign(Y)}f&&b&&b({action:N,location:z.location,delta:1})}function T(k,I){N=mt.Replace;let V=Oo(z.location,k,I);g=P();let Q=Zd(V,g),Y=z.createHref(V);m.replaceState(Q,"",Y),f&&b&&b({action:N,location:z.location,delta:0})}function O(k){let I=u.location.origin!=="null"?u.location.origin:u.location.href,V=typeof k=="string"?k:ks(k);return V=V.replace(/ $/,"%20"),ze(I,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,I)}let z={get action(){return N},get location(){return a(u,m)},listen(k){if(b)throw new Error("A history only accepts one active listener");return u.addEventListener(Xd,C),b=k,()=>{u.removeEventListener(Xd,C),b=null}},createHref(k){return c(u,k)},createURL:O,encodeLocation(k){let I=O(k);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:A,replace:T,go(k){return m.go(k)}};return z}var ep;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(ep||(ep={}));function df(a,c,l){return l===void 0&&(l="/"),pf(a,c,l)}function pf(a,c,l,p){let u=typeof c=="string"?ur(c):c,f=dr(u.pathname||"/",l);if(f==null)return null;let m=Ip(a);uf(m);let N=null,b=kf(f);for(let g=0;N==null&&g<m.length;++g)N=bf(m[g],b);return N}function Ip(a,c,l,p){c===void 0&&(c=[]),l===void 0&&(l=[]),p===void 0&&(p="");let u=(f,m,N)=>{let b={relativePath:N===void 0?f.path||"":N,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};b.relativePath.startsWith("/")&&(ze(b.relativePath.startsWith(p),'Absolute route path "'+b.relativePath+'" nested under path '+('"'+p+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),b.relativePath=b.relativePath.slice(p.length));let g=vt([p,b.relativePath]),P=l.concat(b);f.children&&f.children.length>0&&(ze(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Ip(f.children,c,P,g)),!(f.path==null&&!f.index)&&c.push({path:g,score:yf(g,f.index),routesMeta:P})};return a.forEach((f,m)=>{var N;if(f.path===""||!((N=f.path)!=null&&N.includes("?")))u(f,m);else for(let b of Rp(f.path))u(f,m,b)}),c}function Rp(a){let c=a.split("/");if(c.length===0)return[];let[l,...p]=c,u=l.endsWith("?"),f=l.replace(/\?$/,"");if(p.length===0)return u?[f,""]:[f];let m=Rp(p.join("/")),N=[];return N.push(...m.map(b=>b===""?f:[f,b].join("/"))),u&&N.push(...m),N.map(b=>a.startsWith("/")&&b===""?"/":b)}function uf(a){a.sort((c,l)=>c.score!==l.score?l.score-c.score:jf(c.routesMeta.map(p=>p.childrenIndex),l.routesMeta.map(p=>p.childrenIndex)))}const hf=/^:[\w-]+$/,ff=3,xf=2,gf=1,mf=10,vf=-2,np=a=>a==="*";function yf(a,c){let l=a.split("/"),p=l.length;return l.some(np)&&(p+=vf),c&&(p+=xf),l.filter(u=>!np(u)).reduce((u,f)=>u+(hf.test(f)?ff:f===""?gf:mf),p)}function jf(a,c){return a.length===c.length&&a.slice(0,-1).every((p,u)=>p===c[u])?a[a.length-1]-c[c.length-1]:0}function bf(a,c,l){let{routesMeta:p}=a,u={},f="/",m=[];for(let N=0;N<p.length;++N){let b=p[N],g=N===p.length-1,P=f==="/"?c:c.slice(f.length)||"/",C=Mo({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},P),A=b.route;if(!C)return null;Object.assign(u,C.params),m.push({params:u,pathname:vt([f,C.pathname]),pathnameBase:zf(vt([f,C.pathnameBase])),route:A}),C.pathnameBase!=="/"&&(f=vt([f,C.pathnameBase]))}return m}function Mo(a,c){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[l,p]=wf(a.path,a.caseSensitive,a.end),u=c.match(l);if(!u)return null;let f=u[0],m=f.replace(/(.)\/+$/,"$1"),N=u.slice(1);return{params:p.reduce((g,P,C)=>{let{paramName:A,isOptional:T}=P;if(A==="*"){let z=N[C]||"";m=f.slice(0,f.length-z.length).replace(/(.)\/+$/,"$1")}const O=N[C];return T&&!O?g[A]=void 0:g[A]=(O||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:m,pattern:a}}function wf(a,c,l){c===void 0&&(c=!1),l===void 0&&(l=!0),Pp(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let p=[],u="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,N,b)=>(p.push({paramName:N,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(p.push({paramName:"*"}),u+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":a!==""&&a!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,c?void 0:"i"),p]}function kf(a){try{return a.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Pp(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),a}}function dr(a,c){if(c==="/")return a;if(!a.toLowerCase().startsWith(c.toLowerCase()))return null;let l=c.endsWith("/")?c.length-1:c.length,p=a.charAt(l);return p&&p!=="/"?null:a.slice(l)||"/"}function Nf(a,c){c===void 0&&(c="/");let{pathname:l,search:p="",hash:u=""}=typeof a=="string"?ur(a):a,f;return l?(l=Tp(l),l.startsWith("/")?f=tp(l.substring(1),"/"):f=tp(l,c)):f=c,{pathname:f,search:Ef(p),hash:Cf(u)}}function tp(a,c){let l=c.replace(/\/+$/,"").split("/");return a.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function Do(a,c,l,p){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(p)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sf(a){return a.filter((c,l)=>l===0||c.route.path&&c.route.path.length>0)}function Wo(a,c){let l=Sf(a);return c?l.map((p,u)=>u===l.length-1?p.pathname:p.pathnameBase):l.map(p=>p.pathnameBase)}function $o(a,c,l,p){p===void 0&&(p=!1);let u;typeof a=="string"?u=ur(a):(u=ni({},a),ze(!u.pathname||!u.pathname.includes("?"),Do("?","pathname","search",u)),ze(!u.pathname||!u.pathname.includes("#"),Do("#","pathname","hash",u)),ze(!u.search||!u.search.includes("#"),Do("#","search","hash",u)));let f=a===""||u.pathname==="",m=f?"/":u.pathname,N;if(m==null)N=l;else{let C=c.length-1;if(!p&&m.startsWith("..")){let A=m.split("/");for(;A[0]==="..";)A.shift(),C-=1;u.pathname=A.join("/")}N=C>=0?c[C]:"/"}let b=Nf(u,N),g=m&&m!=="/"&&m.endsWith("/"),P=(f||m===".")&&l.endsWith("/");return!b.pathname.endsWith("/")&&(g||P)&&(b.pathname+="/"),b}const Tp=a=>a.replace(/\/\/+/g,"/"),vt=a=>Tp(a.join("/")),zf=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Ef=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Cf=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Pf(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const Ap=["post","put","patch","delete"];new Set(Ap);const If=["get",...Ap];new Set(If);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)({}).hasOwnProperty.call(l,p)&&(a[p]=l[p])}return a},ti.apply(null,arguments)}const Ps=E.createContext(null),Dp=E.createContext(null),Gn=E.createContext(null),Is=E.createContext(null),yt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Lp=E.createContext(null);function Rf(a,c){let{relative:l}=c===void 0?{}:c;hr()||ze(!1);let{basename:p,navigator:u}=E.useContext(Gn),{hash:f,pathname:m,search:N}=Rs(a,{relative:l}),b=m;return p!=="/"&&(b=m==="/"?p:vt([p,m])),u.createHref({pathname:b,search:N,hash:f})}function hr(){return E.useContext(Is)!=null}function Dt(){return hr()||ze(!1),E.useContext(Is).location}function _p(a){E.useContext(Gn).static||E.useLayoutEffect(a)}function Yo(){let{isDataRoute:a}=E.useContext(yt);return a?Wf():Tf()}function Tf(){hr()||ze(!1);let a=E.useContext(Ps),{basename:c,future:l,navigator:p}=E.useContext(Gn),{matches:u}=E.useContext(yt),{pathname:f}=Dt(),m=JSON.stringify(Wo(u,l.v7_relativeSplatPath)),N=E.useRef(!1);return _p(()=>{N.current=!0}),E.useCallback(function(g,P){if(P===void 0&&(P={}),!N.current)return;if(typeof g=="number"){p.go(g);return}let C=$o(g,JSON.parse(m),f,P.relative==="path");a==null&&c!=="/"&&(C.pathname=C.pathname==="/"?c:vt([c,C.pathname])),(P.replace?p.replace:p.push)(C,P.state,P)},[c,p,m,f,a])}function Rs(a,c){let{relative:l}=c===void 0?{}:c,{future:p}=E.useContext(Gn),{matches:u}=E.useContext(yt),{pathname:f}=Dt(),m=JSON.stringify(Wo(u,p.v7_relativeSplatPath));return E.useMemo(()=>$o(a,JSON.parse(m),f,l==="path"),[a,m,f,l])}function Af(a,c){return Df(a,c)}function Df(a,c,l,p){hr()||ze(!1);let{navigator:u}=E.useContext(Gn),{matches:f}=E.useContext(yt),m=f[f.length-1],N=m?m.params:{};m&&m.pathname;let b=m?m.pathnameBase:"/";m&&m.route;let g=Dt(),P;if(c){var C;let k=typeof c=="string"?ur(c):c;b==="/"||(C=k.pathname)!=null&&C.startsWith(b)||ze(!1),P=k}else P=g;let A=P.pathname||"/",T=A;if(b!=="/"){let k=b.replace(/^\//,"").split("/");T="/"+A.replace(/^\//,"").split("/").slice(k.length).join("/")}let O=df(a,{pathname:T}),z=Ff(O&&O.map(k=>Object.assign({},k,{params:Object.assign({},N,k.params),pathname:vt([b,u.encodeLocation?u.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?b:vt([b,u.encodeLocation?u.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),f,l,p);return c&&z?E.createElement(Is.Provider,{value:{location:ti({pathname:"/",search:"",hash:"",state:null,key:"default"},P),navigationType:mt.Pop}},z):z}function Lf(){let a=Bf(),c=Pf(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),l=a instanceof Error?a.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},c),l?E.createElement("pre",{style:u},l):null,null)}const _f=E.createElement(Lf,null);class Of extends E.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,l){return l.location!==c.location||l.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:l.error,location:l.location,revalidation:c.revalidation||l.revalidation}}componentDidCatch(c,l){console.error("React Router caught the following error during render",c,l)}render(){return this.state.error!==void 0?E.createElement(yt.Provider,{value:this.props.routeContext},E.createElement(Lp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mf(a){let{routeContext:c,match:l,children:p}=a,u=E.useContext(Ps);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),E.createElement(yt.Provider,{value:c},p)}function Ff(a,c,l,p){var u;if(c===void 0&&(c=[]),l===void 0&&(l=null),p===void 0&&(p=null),a==null){var f;if(!l)return null;if(l.errors)a=l.matches;else if((f=p)!=null&&f.v7_partialHydration&&c.length===0&&!l.initialized&&l.matches.length>0)a=l.matches;else return null}let m=a,N=(u=l)==null?void 0:u.errors;if(N!=null){let P=m.findIndex(C=>C.route.id&&(N==null?void 0:N[C.route.id])!==void 0);P>=0||ze(!1),m=m.slice(0,Math.min(m.length,P+1))}let b=!1,g=-1;if(l&&p&&p.v7_partialHydration)for(let P=0;P<m.length;P++){let C=m[P];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(g=P),C.route.id){let{loaderData:A,errors:T}=l,O=C.route.loader&&A[C.route.id]===void 0&&(!T||T[C.route.id]===void 0);if(C.route.lazy||O){b=!0,g>=0?m=m.slice(0,g+1):m=[m[0]];break}}}return m.reduceRight((P,C,A)=>{let T,O=!1,z=null,k=null;l&&(T=N&&C.route.id?N[C.route.id]:void 0,z=C.route.errorElement||_f,b&&(g<0&&A===0?($f("route-fallback"),O=!0,k=null):g===A&&(O=!0,k=C.route.hydrateFallbackElement||null)));let I=c.concat(m.slice(0,A+1)),V=()=>{let Q;return T?Q=z:O?Q=k:C.route.Component?Q=E.createElement(C.route.Component,null):C.route.element?Q=C.route.element:Q=P,E.createElement(Mf,{match:C,routeContext:{outlet:P,matches:I,isDataRoute:l!=null},children:Q})};return l&&(C.route.ErrorBoundary||C.route.errorElement||A===0)?E.createElement(Of,{location:l.location,revalidation:l.revalidation,component:z,error:T,children:V(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):V()},null)}var Op=(function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a})(Op||{}),Mp=(function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a})(Mp||{});function Uf(a){let c=E.useContext(Ps);return c||ze(!1),c}function Hf(a){let c=E.useContext(Dp);return c||ze(!1),c}function Vf(a){let c=E.useContext(yt);return c||ze(!1),c}function Fp(a){let c=Vf(),l=c.matches[c.matches.length-1];return l.route.id||ze(!1),l.route.id}function Bf(){var a;let c=E.useContext(Lp),l=Hf(),p=Fp();return c!==void 0?c:(a=l.errors)==null?void 0:a[p]}function Wf(){let{router:a}=Uf(Op.UseNavigateStable),c=Fp(Mp.UseNavigateStable),l=E.useRef(!1);return _p(()=>{l.current=!0}),E.useCallback(function(u,f){f===void 0&&(f={}),l.current&&(typeof u=="number"?a.navigate(u):a.navigate(u,ti({fromRouteId:c},f)))},[a,c])}const rp={};function $f(a,c,l){rp[a]||(rp[a]=!0)}function Yf(a,c){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function Kf(a){let{to:c,replace:l,state:p,relative:u}=a;hr()||ze(!1);let{future:f,static:m}=E.useContext(Gn),{matches:N}=E.useContext(yt),{pathname:b}=Dt(),g=Yo(),P=$o(c,Wo(N,f.v7_relativeSplatPath),b,u==="path"),C=JSON.stringify(P);return E.useEffect(()=>g(JSON.parse(C),{replace:l,state:p,relative:u}),[g,C,u,l,p]),null}function Be(a){ze(!1)}function Gf(a){let{basename:c="/",children:l=null,location:p,navigationType:u=mt.Pop,navigator:f,static:m=!1,future:N}=a;hr()&&ze(!1);let b=c.replace(/^\/*/,"/"),g=E.useMemo(()=>({basename:b,navigator:f,static:m,future:ti({v7_relativeSplatPath:!1},N)}),[b,N,f,m]);typeof p=="string"&&(p=ur(p));let{pathname:P="/",search:C="",hash:A="",state:T=null,key:O="default"}=p,z=E.useMemo(()=>{let k=dr(P,b);return k==null?null:{location:{pathname:k,search:C,hash:A,state:T,key:O},navigationType:u}},[b,P,C,A,T,O,u]);return z==null?null:E.createElement(Gn.Provider,{value:g},E.createElement(Is.Provider,{children:l,value:z}))}function qf(a){let{children:c,location:l}=a;return Af(Fo(c),l)}new Promise(()=>{});function Fo(a,c){c===void 0&&(c=[]);let l=[];return E.Children.forEach(a,(p,u)=>{if(!E.isValidElement(p))return;let f=[...c,u];if(p.type===E.Fragment){l.push.apply(l,Fo(p.props.children,f));return}p.type!==Be&&ze(!1),!p.props.index||!p.props.children||ze(!1);let m={id:p.props.id||f.join("-"),caseSensitive:p.props.caseSensitive,element:p.props.element,Component:p.props.Component,index:p.props.index,path:p.props.path,loader:p.props.loader,action:p.props.action,errorElement:p.props.errorElement,ErrorBoundary:p.props.ErrorBoundary,hasErrorBoundary:p.props.ErrorBoundary!=null||p.props.errorElement!=null,shouldRevalidate:p.props.shouldRevalidate,handle:p.props.handle,lazy:p.props.lazy};p.props.children&&(m.children=Fo(p.props.children,f)),l.push(m)}),l}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)({}).hasOwnProperty.call(l,p)&&(a[p]=l[p])}return a},Ns.apply(null,arguments)}function Up(a,c){if(a==null)return{};var l={};for(var p in a)if({}.hasOwnProperty.call(a,p)){if(c.indexOf(p)!==-1)continue;l[p]=a[p]}return l}function Qf(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Jf(a,c){return a.button===0&&(!c||c==="_self")&&!Qf(a)}const Xf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Zf=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ex="6";try{window.__reactRouterVersion=ex}catch{}const nx=E.createContext({isTransitioning:!1}),tx="startTransition",ip=Xh[tx];function rx(a){let{basename:c,children:l,future:p,window:u}=a,f=E.useRef();f.current==null&&(f.current=of({window:u,v5Compat:!0}));let m=f.current,[N,b]=E.useState({action:m.action,location:m.location}),{v7_startTransition:g}=p||{},P=E.useCallback(C=>{g&&ip?ip(()=>b(C)):b(C)},[b,g]);return E.useLayoutEffect(()=>m.listen(P),[m,P]),E.useEffect(()=>Yf(p),[p]),E.createElement(Gf,{basename:c,children:l,location:N.location,navigationType:N.action,navigator:m,future:p})}const ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ax=E.forwardRef(function(c,l){let{onClick:p,relative:u,reloadDocument:f,replace:m,state:N,target:b,to:g,preventScrollReset:P,viewTransition:C}=c,A=Up(c,Xf),{basename:T}=E.useContext(Gn),O,z=!1;if(typeof g=="string"&&sx.test(g)&&(O=g,ix))try{let Q=new URL(window.location.href),Y=g.startsWith("//")?new URL(Q.protocol+g):new URL(g),X=dr(Y.pathname,T);Y.origin===Q.origin&&X!=null?g=X+Y.search+Y.hash:z=!0}catch{}let k=Rf(g,{relative:u}),I=lx(g,{replace:m,state:N,target:b,preventScrollReset:P,relative:u,viewTransition:C});function V(Q){p&&p(Q),Q.defaultPrevented||I(Q)}return E.createElement("a",Ns({},A,{href:O||k,onClick:z||f?p:V,ref:l,target:b}))}),Hp=E.forwardRef(function(c,l){let{"aria-current":p="page",caseSensitive:u=!1,className:f="",end:m=!1,style:N,to:b,viewTransition:g,children:P}=c,C=Up(c,Zf),A=Rs(b,{relative:C.relative}),T=Dt(),O=E.useContext(Dp),{navigator:z,basename:k}=E.useContext(Gn),I=O!=null&&cx(A)&&g===!0,V=z.encodeLocation?z.encodeLocation(A).pathname:A.pathname,Q=T.pathname,Y=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;u||(Q=Q.toLowerCase(),Y=Y?Y.toLowerCase():null,V=V.toLowerCase()),Y&&k&&(Y=dr(Y,k)||Y);const X=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let B=Q===V||!m&&Q.startsWith(V)&&Q.charAt(X)==="/",ae=Y!=null&&(Y===V||!m&&Y.startsWith(V)&&Y.charAt(V.length)==="/"),de={isActive:B,isPending:ae,isTransitioning:I},Le=B?p:void 0,Pe;typeof f=="function"?Pe=f(de):Pe=[f,B?"active":null,ae?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let wn=typeof N=="function"?N(de):N;return E.createElement(ax,Ns({},C,{"aria-current":Le,className:Pe,ref:l,style:wn,to:b,viewTransition:g}),typeof P=="function"?P(de):P)});var Uo;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(Uo||(Uo={}));var sp;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(sp||(sp={}));function ox(a){let c=E.useContext(Ps);return c||ze(!1),c}function lx(a,c){let{target:l,replace:p,state:u,preventScrollReset:f,relative:m,viewTransition:N}=c===void 0?{}:c,b=Yo(),g=Dt(),P=Rs(a,{relative:m});return E.useCallback(C=>{if(Jf(C,l)){C.preventDefault();let A=p!==void 0?p:ks(g)===ks(P);b(a,{replace:A,state:u,preventScrollReset:f,relative:m,viewTransition:N})}},[g,b,P,p,u,l,a,f,m,N])}function cx(a,c){c===void 0&&(c={});let l=E.useContext(nx);l==null&&ze(!1);let{basename:p}=ox(Uo.useViewTransitionState),u=Rs(a,{relative:c.relative});if(!l.isTransitioning)return!1;let f=dr(l.currentLocation.pathname,p)||l.currentLocation.pathname,m=dr(l.nextLocation.pathname,p)||l.nextLocation.pathname;return Mo(u.pathname,m)!=null||Mo(u.pathname,f)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vp=(...a)=>a.filter((c,l,p)=>!!c&&c.trim()!==""&&p.indexOf(c)===l).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var px={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=E.forwardRef(({color:a="currentColor",size:c=24,strokeWidth:l=2,absoluteStrokeWidth:p,className:u="",children:f,iconNode:m,...N},b)=>E.createElement("svg",{ref:b,...px,width:c,height:c,stroke:a,strokeWidth:p?Number(l)*24/Number(c):l,className:Vp("lucide",u),...N},[...m.map(([g,P])=>E.createElement(g,P)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=(a,c)=>{const l=E.forwardRef(({className:p,...u},f)=>E.createElement(ux,{ref:f,iconNode:c,className:Vp(`lucide-${dx(a)}`,p),...u}));return l.displayName=`${a}`,l};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=te("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=te("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=te("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=te("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=te("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=te("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=te("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=te("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=te("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=te("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=te("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=te("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=te("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=te("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=te("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=te("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=te("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=te("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=te("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=te("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=te("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=te("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=te("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=te("FileSearch",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=te("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=te("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=te("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=te("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=te("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=te("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=te("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=te("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=te("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=te("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=te("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=te("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=te("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=te("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=te("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=te("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=te("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=te("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=te("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=te("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=te("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=te("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=te("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=te("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=te("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Yp=E.createContext(null),dp={English:{dashboard:"Dashboard",home:"Home",innovationOverview:"Innovation Overview",innovationJourney:"Innovation Journey",innovationProfile:"Innovation Profile",priorArt:"Prior-Art Search",knowledge:"Knowledge Discovery",research:"Research & Evidence",similarity:"Similarity Analysis",evidenceGap:"Evidence Gap",ipReadiness:"IP Readiness",ipStrategy:"IP Strategy",patentPreparation:"Patent Preparation",preFiling:"Pre-Filing Checklist",dossier:"Innovation Dossier",expertReview:"Expert Review",roadmap:"Innovation Roadmap",monitoring:"Monitoring",aiInsights:"AI Insights",language:"Language",jurisdiction:"Jurisdiction",searchPlaceholder:"Search innovations, patents, evidence...",openStage:"Open Stage",continue:"Continue",currentStage:"Current Stage",completed:"Completed",upcoming:"Upcoming",activeWorkspace:"ACTIVE WORKSPACE",workspace:"WORKSPACE",journey:"JOURNEY",journeyProgress:"JOURNEY PROGRESS",innovationPipeline:"Innovation Pipeline",journeyProgressDescription:"From knowledge discovery to innovation protection and development.",platformName:"Ayurveda IP Discovery Platform"},हिन्दी:{dashboard:"डैशबोर्ड",home:"होम",innovationOverview:"इनोवेशन ओवरव्यू",innovationJourney:"इनोवेशन जर्नी",innovationProfile:"इनोवेशन प्रोफाइल",priorArt:"पूर्व-कला खोज",knowledge:"ज्ञान खोज",research:"अनुसंधान और साक्ष्य",similarity:"समानता विश्लेषण",evidenceGap:"साक्ष्य अंतर",ipReadiness:"आईपी तैयारी",ipStrategy:"आईपी रणनीति",patentPreparation:"पेटेंट तैयारी",preFiling:"प्री-फाइलिंग चेकलिस्ट",dossier:"इनोवेशन डोजियर",expertReview:"विशेषज्ञ समीक्षा",roadmap:"इनोवेशन रोडमैप",monitoring:"निगरानी",aiInsights:"एआई इनसाइट्स",language:"भाषा",jurisdiction:"क्षेत्राधिकार",searchPlaceholder:"इनोवेशन, पेटेंट और साक्ष्य खोजें...",openStage:"स्टेज खोलें",continue:"आगे बढ़ें",currentStage:"वर्तमान स्टेज",completed:"पूर्ण",upcoming:"आगामी",activeWorkspace:"सक्रिय कार्यक्षेत्र",workspace:"वर्कस्पेस",journey:"जर्नी",journeyProgress:"जर्नी प्रोग्रेस",innovationPipeline:"इनोवेशन पाइपलाइन",journeyProgressDescription:"ज्ञान खोज से लेकर इनोवेशन सुरक्षा और विकास तक।",platformName:"आयुर्वेद आईपी डिस्कवरी प्लेटफॉर्म"},Hinglish:{dashboard:"Dashboard",home:"Home",innovationOverview:"Innovation Overview",innovationJourney:"Innovation Journey",innovationProfile:"Innovation Profile",priorArt:"Prior-Art Search",knowledge:"Knowledge Discovery",research:"Research & Evidence",similarity:"Similarity Analysis",evidenceGap:"Evidence Gap",ipReadiness:"IP Readiness",ipStrategy:"IP Strategy",patentPreparation:"Patent Preparation",preFiling:"Pre-Filing Checklist",dossier:"Innovation Dossier",expertReview:"Expert Review",roadmap:"Innovation Roadmap",monitoring:"Monitoring",aiInsights:"AI Insights",language:"Language",jurisdiction:"Jurisdiction",searchPlaceholder:"Innovation, patent, evidence search karo...",openStage:"Stage Open Karo",continue:"Aage Badho",currentStage:"Current Stage",completed:"Complete",upcoming:"Aane Wala",activeWorkspace:"ACTIVE WORKSPACE",workspace:"WORKSPACE",journey:"JOURNEY",journeyProgress:"JOURNEY PROGRESS",innovationPipeline:"Innovation Pipeline",journeyProgressDescription:"Knowledge discovery se innovation protection aur development tak.",platformName:"Ayurveda IP Discovery Platform"}};function Rx({children:a}){const[c,l]=E.useState(localStorage.getItem("ip_language")||"English"),p=f=>{l(f),localStorage.setItem("ip_language",f),window.dispatchEvent(new CustomEvent("ip-language-change",{detail:f}))},u=f=>{var m,N;return((m=dp[c])==null?void 0:m[f])??((N=dp.English)==null?void 0:N[f])??f};return E.useEffect(()=>{localStorage.setItem("ip_language",c)},[c]),n.jsx(Yp.Provider,{value:{language:c,setLanguage:p,t:u},children:a})}function Kp(){const a=E.useContext(Yp);if(!a)throw new Error("useLanguage must be used inside LanguageProvider");return a}const pp=[{key:"innovationOverview",label:"Innovation Overview",path:"/innovation",icon:At},{key:"knowledge",label:"Traditional Knowledge (TKDL)",path:"/knowledge",icon:In},{key:"research",label:"Research & Evidence",path:"/research",icon:an},{key:"priorArt",label:"Prior-Art Search",path:"/prior-art",icon:Fe},{key:"similarity",label:"Similarity Analysis",path:"/similarity",icon:ap},{key:"evidenceGap",label:"Evidence Gap",path:"/evidence-gap",icon:Ss},{key:"ipReadiness",label:"IP Readiness",path:"/ip-readiness",icon:ce},{key:"ipStrategy",label:"IP Strategy",path:"/innovation/ip-strategy",icon:ap},{key:"patentPreparation",label:"Patent Preparation",path:"/patent-preparation",icon:Ce},{key:"expertReview",label:"Expert Connect",path:"/expert-connect",icon:Px},{key:"dossier",label:"Innovation Dossier",path:"/dossier",icon:ws},{key:"preFiling",label:"Pre-Filing Checklist",path:"/pre-filing",icon:Ss},{key:"roadmap",label:"Innovation Roadmap",path:"/innovation/roadmap",icon:wx}],Tx=[{key:"innovationJourney",label:"Innovation Journey",path:"/innovation/journey",icon:Go}];function up({item:a,t:c}){const l=a.icon,p=a.key==="knowledge"?"Traditional Knowledge (TKDL)":a.key==="expertReview"?"Expert Connect":c(a.key)||a.label;return n.jsxs(Hp,{to:a.path,className:({isActive:u})=>`sidebar-link ${u?"active":""}`,title:p,children:[n.jsx("span",{className:"sidebar-link-icon",children:n.jsx(l,{size:16,strokeWidth:2})}),n.jsx("span",{className:"sidebar-link-text",children:p}),n.jsx(ii,{size:13,strokeWidth:2,className:"sidebar-link-arrow","aria-hidden":"true"})]})}function Ax(){const{t:a}=Kp();return n.jsxs("aside",{className:"sidebar",children:[n.jsxs("div",{className:"sidebar-brand",children:[n.jsx("div",{className:"brand-mark",style:{color:"#3f7d4a",background:"rgba(63, 125, 74, 0.12)"},children:n.jsx(Vo,{size:20,strokeWidth:2.2})}),n.jsxs("div",{className:"brand-text",children:[n.jsx("strong",{children:"IP SHAKTI"}),n.jsx("span",{style:{fontSize:"11px",fontWeight:600,letterSpacing:"0.04em"},children:"सहायक"})]})]}),n.jsxs("div",{className:"sidebar-innovation-card",children:[n.jsx("div",{className:"innovation-card-icon",children:n.jsx(Ho,{size:16,strokeWidth:2})}),n.jsxs("div",{className:"innovation-card-text",children:[n.jsx("span",{children:a("activeWorkspace")}),n.jsx("strong",{children:"Innovation Engine"})]}),n.jsx("span",{className:"workspace-status-dot"})]}),n.jsxs("nav",{className:"sidebar-nav","aria-label":"Primary navigation",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsxs("div",{className:"sidebar-section-label",children:[n.jsx("span",{children:a("workspace")}),n.jsx("span",{className:"sidebar-section-count",children:pp.length})]}),n.jsx("div",{className:"sidebar-nav-list",children:pp.map(c=>n.jsx(up,{item:c,t:a},c.path))})]}),n.jsxs("div",{className:"sidebar-section sidebar-journey-section",children:[n.jsx("div",{className:"sidebar-section-label",children:n.jsx("span",{children:a("journey")})}),n.jsx("div",{className:"sidebar-nav-list",children:Tx.map(c=>n.jsx(up,{item:c,t:a},c.path))})]})]}),n.jsxs("div",{className:"sidebar-bottom",children:[n.jsxs("div",{className:"sidebar-progress-card",children:[n.jsxs("div",{className:"sidebar-progress-top",children:[n.jsxs("div",{children:[n.jsx("span",{children:a("journeyProgress")}),n.jsx("strong",{children:a("innovationPipeline")})]}),n.jsx("span",{className:"sidebar-progress-count",children:"13"})]}),n.jsx("div",{className:"sidebar-progress-track",children:n.jsx("div",{className:"sidebar-progress-fill"})}),n.jsx("p",{children:a("journeyProgressDescription")})]}),n.jsxs(Hp,{to:"/",end:!0,className:({isActive:c})=>`sidebar-home-link ${c?"active":""}`,children:[n.jsx("span",{className:"sidebar-home-icon",children:n.jsx(bx,{size:16,strokeWidth:2})}),n.jsx("span",{children:a("dashboard")}),n.jsx(ii,{size:13,strokeWidth:2,className:"sidebar-link-arrow","aria-hidden":"true"})]}),n.jsxs("div",{className:"sidebar-footer",children:[n.jsx(Ce,{size:13,strokeWidth:1.8}),n.jsx("span",{children:a("platformName")})]})]})]})}const Dx=["🇮🇳 India","🇺🇸 USA","🇬🇧 UK","🇪🇺 European Union","🇨🇦 Canada","🇦🇺 Australia","🌐 Other"];function Lx(){const{language:a,setLanguage:c,t:l}=Kp(),p=localStorage.getItem("ip_jurisdiction")||"🇮🇳 India",u=f=>{localStorage.setItem("ip_jurisdiction",f),window.dispatchEvent(new CustomEvent("ip-jurisdiction-change",{detail:f}))};return n.jsxs("header",{className:"topbar",children:[n.jsxs("div",{className:"topbar-search",children:[n.jsx(Fe,{size:18}),n.jsx("input",{type:"text",placeholder:l("searchPlaceholder")}),n.jsx("span",{className:"search-shortcut",children:"⌘ K"})]}),n.jsxs("div",{className:"topbar-actions",children:[n.jsxs("div",{className:"topbar-select",children:[n.jsx("span",{children:l("language")}),n.jsxs("select",{value:a,onChange:f=>c(f.target.value),"aria-label":"Select language",children:[n.jsx("option",{value:"English",children:"English"}),n.jsx("option",{value:"हिन्दी",children:"हिन्दी"}),n.jsx("option",{value:"Hinglish",children:"Hinglish"})]})]}),n.jsxs("div",{className:"topbar-select jurisdiction-select",children:[n.jsx("span",{children:l("jurisdiction")}),n.jsx("select",{value:p,onChange:f=>u(f.target.value),"aria-label":"Select jurisdiction",children:Dx.map(f=>n.jsx("option",{value:f,children:f},f))})]}),n.jsxs("button",{type:"button",className:"ai-button",children:[n.jsx(fe,{size:16}),n.jsx("span",{children:l("aiInsights")})]}),n.jsxs("button",{type:"button",className:"icon-button","aria-label":"Notifications",children:[n.jsx(xx,{size:19}),n.jsx("span",{className:"notification-dot"})]}),n.jsxs("div",{className:"profile-menu",children:[n.jsx("div",{className:"profile-avatar",children:"SM"}),n.jsxs("div",{className:"profile-info",children:[n.jsx("strong",{children:"Innovation User"}),n.jsx("span",{children:"Researcher"})]}),n.jsx(vx,{size:16})]})]}),n.jsx("style",{children:`
        .topbar-select {
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .topbar-select > span {
          font-size: 9px;
          font-weight: 800;
          color: #718078;
          text-transform: uppercase;
          letter-spacing: .6px;
        }

        .topbar-select select {
          appearance: auto;
          border: 1px solid #d7e4db;
          border-radius: 8px;
          padding: 7px 8px;
          background: #f8fbf9;
          color: #244d33;
          font-size: 11px;
          font-weight: 700;
          outline: none;
          cursor: pointer;
          max-width: 125px;
        }

        .topbar-select select:hover {
          border-color: #9fbea9;
        }

        .topbar-select select:focus {
          border-color: #79a88a;
          box-shadow:
            0 0 0 3px rgba(64, 119, 78, .08);
        }

        .jurisdiction-select select {
          max-width: 145px;
        }

        @media (max-width: 1100px) {
          .topbar-select > span {
            display: none;
          }

          .topbar-select select {
            max-width: 110px;
          }

          .jurisdiction-select select {
            max-width: 125px;
          }
        }

        @media (max-width: 850px) {
          .topbar-select {
            display: none;
          }
        }
      `})]})}function _x({innovation:a={},journey:c={},onStartJourney:l}){const[p,u]=E.useState(null);E.useEffect(()=>{let C=!0;async function A(){try{const T=await or.getDashboardSummary();C&&u(T)}catch(T){console.error("Dashboard summary failed:",T)}}return A(),()=>{C=!1}},[]);const f=a.name||a.title||"Your Ayurveda Innovation",m=(p==null?void 0:p.total_innovations)??0,N=(p==null?void 0:p.analyzed_innovations)??0,b=(p==null?void 0:p.average_novelty_score)??0,g=(p==null?void 0:p.average_ip_readiness_score)??0,P=m>0?Math.min(100,Math.round(N/m*100)):0;return n.jsxs("div",{className:"dashboard prototype-dashboard",children:[n.jsxs("section",{className:"dashboard-welcome",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"dashboard-kicker",children:[n.jsx(fe,{size:13}),"IP SHAKTI SAHAYAK · INNOVATION INTELLIGENCE"]}),n.jsxs("h1",{children:["Welcome to your",n.jsx("span",{children:" Innovation Workspace"})]}),n.jsx("p",{children:"Discover, analyse and prepare your Ayurveda innovation for intellectual-property protection."})]}),n.jsxs("button",{className:"dashboard-start-btn",onClick:l,children:[n.jsx(fe,{size:16}),"Continue Journey",n.jsx(J,{size:16})]})]}),n.jsxs("section",{className:"dashboard-main-grid",children:[n.jsxs("div",{className:"innovation-status-card",children:[n.jsxs("div",{className:"status-card-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"card-kicker",children:"CURRENT INNOVATION"}),n.jsx("h2",{children:f})]}),n.jsxs("div",{className:"status-live",children:[n.jsx("span",{}),"ACTIVE"]})]}),n.jsx("div",{className:"innovation-description",children:a.description||"Define your innovation to begin knowledge discovery, prior-art analysis and IP readiness assessment."}),n.jsxs("div",{className:"innovation-meta",children:[n.jsxs("div",{children:[n.jsx("span",{children:"TYPE"}),n.jsx("strong",{children:a.type||"Not defined"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"FOCUS"}),n.jsx("strong",{children:a.focus||"Not defined"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"INGREDIENTS"}),n.jsx("strong",{children:Array.isArray(a.ingredients)?a.ingredients.length:a.ingredients?a.ingredients.split(",").length:0})]})]})]}),n.jsxs("div",{className:"dashboard-progress-card",children:[n.jsx("div",{className:"card-kicker",children:"JOURNEY PROGRESS"}),n.jsxs("div",{className:"dashboard-progress-body",children:[n.jsx("div",{className:"progress-ring",style:{"--progress":`${P*3.6}deg`},children:n.jsxs("div",{className:"progress-ring-inner",children:[n.jsxs("strong",{children:[P,"%"]}),n.jsx("span",{children:"PROGRESS"})]})}),n.jsxs("div",{className:"progress-info",children:[n.jsx("h3",{children:"Innovation Journey"}),n.jsx("p",{children:"Move through each intelligence stage to build your complete IP profile."}),n.jsxs("button",{className:"small-outline-btn",onClick:l,children:["Open Journey",n.jsx(ii,{size:14})]})]})]})]})]}),n.jsxs("section",{className:"dashboard-section-title",children:[n.jsxs("div",{children:[n.jsx("span",{className:"card-kicker",children:"INTELLIGENCE SNAPSHOT"}),n.jsx("h2",{children:"Your Innovation at a Glance"})]}),n.jsx("div",{className:"section-line"})]}),n.jsxs("section",{className:"intelligence-grid",children:[n.jsxs("div",{className:"intelligence-card green-card",children:[n.jsx("div",{className:"intelligence-icon",children:n.jsx(At,{size:19})}),n.jsxs("div",{children:[n.jsx("span",{children:"ACTIVE INNOVATIONS"}),n.jsx("strong",{children:m}),n.jsx("small",{children:"Stored in workspace"})]})]}),n.jsxs("div",{className:"intelligence-card cyan-card",children:[n.jsx("div",{className:"intelligence-icon",children:n.jsx(Rn,{size:19})}),n.jsxs("div",{children:[n.jsx("span",{children:"ANALYSED"}),n.jsx("strong",{children:N}),n.jsx("small",{children:"Innovation analyses"})]})]}),n.jsxs("div",{className:"intelligence-card yellow-card",children:[n.jsx("div",{className:"intelligence-icon",children:n.jsx(bn,{size:19})}),n.jsxs("div",{children:[n.jsx("span",{children:"AVERAGE NOVELTY"}),n.jsxs("strong",{children:[b,"%"]}),n.jsx("small",{children:"Preliminary screening"})]})]}),n.jsxs("div",{className:"intelligence-card purple-card",children:[n.jsx("div",{className:"intelligence-icon",children:n.jsx(ce,{size:19})}),n.jsxs("div",{children:[n.jsx("span",{children:"IP READINESS"}),n.jsxs("strong",{children:[g,"%"]}),n.jsx("small",{children:"Preliminary readiness"})]})]})]}),n.jsxs("section",{className:"dashboard-section-title journey-title",children:[n.jsxs("div",{children:[n.jsx("span",{className:"card-kicker",children:"CONNECTED WORKFLOW"}),n.jsx("h2",{children:"From Ayurveda Idea to IP Readiness"})]}),n.jsxs("button",{className:"text-action",onClick:l,children:["View Journey",n.jsx(J,{size:14})]})]}),n.jsxs("section",{className:"dashboard-journey-grid",children:[n.jsx(vs,{number:"01",icon:n.jsx(In,{size:19}),title:"Knowledge Discovery",description:"Explore classical Ayurveda and traditional knowledge.",color:"green",status:"READY"}),n.jsx(vs,{number:"02",icon:n.jsx(an,{size:19}),title:"Research & Evidence",description:"Identify scientific evidence and supporting literature.",color:"cyan",status:"READY"}),n.jsx(vs,{number:"03",icon:n.jsx(Rn,{size:19}),title:"Prior-Art Search",description:"Compare your innovation with existing patent records.",color:"yellow",status:"NEXT"}),n.jsx(vs,{number:"04",icon:n.jsx(ce,{size:19}),title:"IP Readiness",description:"Evaluate novelty, evidence and documentation gaps.",color:"purple",status:"LOCKED"})]}),n.jsxs("section",{className:"dashboard-lower-grid",children:[n.jsxs("div",{className:"dashboard-panel",children:[n.jsxs("div",{className:"panel-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"card-kicker",children:"RECOMMENDED ACTION"}),n.jsx("h2",{children:"What should you do next?"})]}),n.jsx(bn,{size:20})]}),n.jsxs("div",{className:"next-action-card",children:[n.jsx("div",{className:"next-action-icon",children:n.jsx(Rn,{size:20})}),n.jsxs("div",{className:"next-action-content",children:[n.jsx("span",{className:"action-tag",children:"NEXT RECOMMENDED STEP"}),n.jsx("h3",{children:"Run a Prior-Art Search"}),n.jsx("p",{children:"Compare your innovation with existing patents and related formulations before moving towards an IP strategy."})]}),n.jsx("button",{className:"round-action",onClick:l,children:n.jsx(J,{size:16})})]}),n.jsxs("div",{className:"next-action-card",children:[n.jsx("div",{className:"next-action-icon cyan",children:n.jsx(an,{size:20})}),n.jsxs("div",{className:"next-action-content",children:[n.jsx("span",{className:"action-tag",children:"EVIDENCE"}),n.jsx("h3",{children:"Strengthen Your Evidence Profile"}),n.jsx("p",{children:"Add research, experimental results and supporting evidence to your innovation dossier."})]}),n.jsx("button",{className:"round-action",onClick:l,children:n.jsx(J,{size:16})})]})]}),n.jsxs("div",{className:"dashboard-panel",children:[n.jsxs("div",{className:"panel-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"card-kicker",children:"WORKSPACE"}),n.jsx("h2",{children:"Recent Activity"})]}),n.jsx(Bp,{size:19})]}),n.jsx(ys,{icon:n.jsx(At,{size:15}),title:"Innovation workspace active",text:"Your innovation profile is available."}),n.jsx(ys,{icon:n.jsx(In,{size:15}),title:"Knowledge discovery",text:"Explore Ayurveda and traditional knowledge."}),n.jsx(ys,{icon:n.jsx(Rn,{size:15}),title:"Prior-art intelligence",text:"Search and compare existing records."}),n.jsx(ys,{icon:n.jsx(Ex,{size:15}),title:"IP readiness",text:"Build towards a complete innovation dossier."})]})]}),n.jsxs("div",{className:"dashboard-disclaimer",children:[n.jsx(ce,{size:14}),n.jsx("span",{children:"IP readiness indicators are preliminary screening insights and should not be treated as legal advice."})]})]})}function vs({number:a,icon:c,title:l,description:p,color:u,status:f}){return n.jsxs("article",{className:`dashboard-journey-box ${u}`,children:[n.jsxs("div",{className:"journey-box-top",children:[n.jsx("span",{className:"journey-box-number",children:a}),n.jsx("div",{className:"journey-box-icon",children:c})]}),n.jsx("h3",{children:l}),n.jsx("p",{children:p}),n.jsxs("div",{className:"journey-box-bottom",children:[n.jsx("span",{className:"journey-status",children:f}),n.jsx(ii,{size:15})]})]})}function ys({icon:a,title:c,text:l}){return n.jsxs("div",{className:"dashboard-activity",children:[n.jsx("div",{className:"activity-icon",children:a}),n.jsxs("div",{children:[n.jsx("strong",{children:c}),n.jsx("p",{children:l})]}),n.jsx(ii,{size:14})]})}const Ox=["Herbal formulation","Ayurvedic product","New formulation/process","Nutraceutical/food","Healthcare application","Device/equipment","Value-added AYUSH product"];function Mx({innovation:a={},onUpdateInnovation:c,onContinue:l,onContinueJourney:p,onKnowledge:u,onResearch:f,onPriorArt:m,onIPReadiness:N,onSimilarity:b,onEvidenceGap:g}){var O,z,k;const P=(I,V)=>{c&&c({[I]:V})},C=!!((O=a.name)!=null&&O.trim())&&!!a.type&&!!((z=a.description)!=null&&z.trim()),A=[a.name,a.type,a.focus,a.description,(k=a.ingredients)==null?void 0:k.length,a.formulation].filter(Boolean).length,T=Math.round(A/6*100);return n.jsxs("div",{className:"iss-overview",children:[n.jsx("style",{children:`
        .iss-overview {
          width: 100%;
          min-height: 100%;
          padding: 28px 30px 60px;
          color: #eef8f3;
          box-sizing: border-box;
        }

        .iss-overview * {
          box-sizing: border-box;
        }

        .iss-container {
          max-width: 1450px;
          margin: 0 auto;
        }

        .iss-hero {
          position: relative;
          overflow: hidden;
          min-height: 235px;
          padding: 34px;
          border-radius: 26px;
          border: 1px solid rgba(100, 210, 164, .20);
          background:
            radial-gradient(circle at 90% 15%, rgba(49, 190, 130, .18), transparent 32%),
            radial-gradient(circle at 10% 100%, rgba(79, 120, 255, .12), transparent 34%),
            linear-gradient(135deg, #10231e 0%, #0d1816 55%, #101b19 100%);
          box-shadow: 0 24px 70px rgba(0,0,0,.24);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .iss-hero::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          right: -110px;
          bottom: -170px;
          border-radius: 50%;
          border: 1px solid rgba(93, 215, 165, .15);
        }

        .iss-hero-left {
          position: relative;
          z-index: 1;
          max-width: 850px;
          display: flex;
          gap: 22px;
          align-items: flex-start;
        }

        .iss-hero-icon {
          width: 58px;
          height: 58px;
          flex: 0 0 58px;
          border-radius: 17px;
          display: grid;
          place-items: center;
          color: #8ff1c2;
          background: rgba(64, 205, 145, .12);
          border: 1px solid rgba(104, 229, 173, .22);
        }

        .iss-eyebrow {
          color: #78dcae;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .16em;
          margin-bottom: 8px;
        }

        .iss-hero h1 {
          margin: 0;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.05;
          letter-spacing: -.035em;
          color: #f5fbf8;
        }

        .iss-hero p {
          max-width: 760px;
          margin: 14px 0 0;
          color: #aabdb5;
          font-size: 14px;
          line-height: 1.75;
        }

        .iss-completion {
          position: relative;
          z-index: 2;
          min-width: 245px;
          padding: 22px;
          border-radius: 20px;
          background: rgba(6, 19, 15, .65);
          border: 1px solid rgba(126, 225, 177, .16);
        }

        .iss-completion-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .iss-completion-top span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .13em;
          color: #7f9890;
        }

        .iss-completion-top strong {
          font-size: 28px;
          color: #8ceaba;
        }

        .iss-progress {
          height: 7px;
          border-radius: 999px;
          overflow: hidden;
          background: #1b332b;
        }

        .iss-progress div {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #43c98d, #a0f0c5);
          transition: width .3s ease;
        }

        .iss-completion small {
          display: block;
          margin-top: 10px;
          color: #839a92;
          font-size: 11px;
        }

        .iss-journey-strip {
          margin-top: 18px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          gap: 18px;
          border-radius: 19px;
          background: #101c19;
          border: 1px solid rgba(130, 173, 157, .13);
        }

        .iss-journey-label {
          color: #6f887f;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          white-space: nowrap;
        }

        .iss-flow {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .iss-flow-node {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border-radius: 11px;
          background: #172622;
          border: 1px solid #253b34;
          color: #93aaa2;
          font-size: 12px;
          font-weight: 700;
        }

        .iss-flow-node.active {
          color: #b6f3d3;
          background: rgba(48, 184, 124, .11);
          border-color: rgba(79, 211, 148, .28);
        }

        .iss-flow-num {
          width: 22px;
          height: 22px;
          border-radius: 7px;
          display: grid;
          place-items: center;
          font-size: 9px;
          background: #213a31;
        }

        .iss-flow-line {
          flex: 1;
          min-width: 20px;
          height: 1px;
          background: #2a4039;
        }

        .iss-section-head {
          margin: 32px 0 16px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
        }

        .iss-section-kicker {
          color: #6fd6a5;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
        }

        .iss-section-head h2 {
          margin: 5px 0 5px;
          font-size: 24px;
          color: #f1f8f5;
          letter-spacing: -.02em;
        }

        .iss-section-head p {
          margin: 0;
          color: #829790;
          font-size: 12px;
        }

        .iss-required {
          padding: 8px 12px;
          border-radius: 999px;
          color: #9eb3ab;
          background: #14231f;
          border: 1px solid #263a34;
          font-size: 10px;
          font-weight: 700;
        }

        .iss-form-card {
          border-radius: 23px;
          overflow: hidden;
          background: #101b18;
          border: 1px solid rgba(128, 171, 154, .14);
          box-shadow: 0 18px 50px rgba(0,0,0,.16);
        }

        .iss-form-top {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid rgba(128,171,154,.10);
          background: linear-gradient(90deg, rgba(62,192,134,.07), transparent);
        }

        .iss-form-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #80e5b4;
          background: rgba(69, 202, 142, .10);
          border: 1px solid rgba(85, 214, 151, .16);
        }

        .iss-form-top strong {
          display: block;
          color: #eaf5f0;
          font-size: 15px;
        }

        .iss-form-top span {
          display: block;
          margin-top: 3px;
          color: #71877f;
          font-size: 11px;
        }

        .iss-form-body {
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
        }

        .iss-field {
          padding: 18px;
          border-radius: 17px;
          background: #14211e;
          border: 1px solid #22352f;
          transition: border-color .2s, transform .2s, background .2s;
        }

        .iss-field:focus-within {
          border-color: rgba(86, 211, 150, .42);
          background: #162621;
        }

        .iss-field.full {
          grid-column: 1 / -1;
        }

        .iss-field-label {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }

        .iss-field-label label {
          color: #e0ece7;
          font-size: 12px;
          font-weight: 800;
        }

        .iss-field-label span {
          color: #6e8a80;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .iss-field input,
        .iss-field select,
        .iss-field textarea {
          width: 100%;
          border: 1px solid #2a4038;
          outline: none;
          border-radius: 11px;
          padding: 12px 13px;
          background: #0c1714;
          color: #eaf4f0;
          font: inherit;
          font-size: 12px;
          transition: border .2s, box-shadow .2s;
        }

        .iss-field textarea {
          resize: vertical;
          min-height: 128px;
          line-height: 1.65;
        }

        .iss-field input::placeholder,
        .iss-field textarea::placeholder {
          color: #536b62;
        }

        .iss-field input:focus,
        .iss-field select:focus,
        .iss-field textarea:focus {
          border-color: #45c990;
          box-shadow: 0 0 0 3px rgba(69,201,144,.08);
        }

        .iss-field select option {
          background: #101b18;
          color: #fff;
        }

        .iss-field small {
          display: block;
          margin-top: 9px;
          color: #61776f;
          font-size: 10px;
          line-height: 1.5;
        }

        .iss-form-bottom {
          padding: 18px 24px;
          border-top: 1px solid rgba(128,171,154,.10);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          background: #0e1916;
        }

        .iss-save {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .iss-save-icon {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          color: #68dca4;
          background: rgba(65,199,139,.10);
        }

        .iss-save strong {
          display: block;
          color: #b9cec6;
          font-size: 11px;
        }

        .iss-save span {
          display: block;
          margin-top: 3px;
          color: #5e766d;
          font-size: 9px;
        }

        .iss-continue {
          border: 0;
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          color: #062116;
          background: linear-gradient(135deg, #75e3ae, #45c98f);
          font-weight: 900;
          font-size: 11px;
          box-shadow: 0 10px 28px rgba(55,201,139,.16);
          transition: transform .2s, opacity .2s;
        }

        .iss-continue:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .iss-continue:disabled {
          cursor: not-allowed;
          opacity: .38;
          filter: grayscale(.3);
        }

        .iss-intelligence-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .iss-intel-card {
          position: relative;
          min-height: 205px;
          padding: 19px;
          overflow: hidden;
          border-radius: 19px;
          background: #111e1a;
          border: 1px solid #243831;
          transition: transform .2s, border-color .2s, box-shadow .2s;
          cursor: pointer;
        }

        .iss-intel-card:hover {
          transform: translateY(-5px);
          border-color: #4b7162;
          box-shadow: 0 15px 35px rgba(0,0,0,.25);
        }

        .iss-intel-card:active {
          transform: translateY(-1px);
        }

        .iss-intel-card::after {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          right: -55px;
          bottom: -55px;
          border-radius: 50%;
          background: rgba(90,220,157,.04);
          pointer-events: none;
        }

        .iss-intel-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .iss-intel-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
        }

        .iss-intel-number {
          color: #4d675d;
          font-size: 22px;
          font-weight: 900;
        }

        .iss-intel-card h3 {
          margin: 22px 0 7px;
          font-size: 14px;
          color: #e8f2ee;
        }

        .iss-intel-card p {
          margin: 0;
          color: #71877f;
          font-size: 10px;
          line-height: 1.65;
        }

        .iss-intel-arrow {
          position: absolute;
          left: 19px;
          bottom: 17px;
          color: #607b70;
          transition: transform .2s, color .2s;
        }

        .iss-intel-card:hover .iss-intel-arrow {
          transform: translateX(5px);
          color: #78e1ae;
        }

        .purple .iss-intel-icon {
          color: #c9a7ff;
          background: rgba(165,114,255,.11);
        }

        .blue .iss-intel-icon {
          color: #7fbaff;
          background: rgba(74,145,255,.11);
        }

        .orange .iss-intel-icon {
          color: #ffbd76;
          background: rgba(255,157,65,.11);
        }

        .green .iss-intel-icon {
          color: #78e6ad;
          background: rgba(58,205,134,.11);
        }

        .iss-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 18px;
        }

        .iss-action-card {
          padding: 18px;
          border-radius: 17px;
          background: #111e1a;
          border: 1px solid #243831;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .iss-action-icon {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #80ddb0;
          background: rgba(66,198,139,.09);
        }

        .iss-action-card strong {
          display: block;
          color: #dce9e4;
          font-size: 12px;
        }

        .iss-action-card span {
          display: block;
          margin-top: 4px;
          color: #647c72;
          font-size: 9px;
          line-height: 1.4;
        }

        .iss-bottom {
          margin-top: 18px;
          padding: 19px 22px;
          border-radius: 18px;
          background:
            linear-gradient(100deg, rgba(54,177,123,.09), rgba(18,29,25,.8));
          border: 1px solid rgba(74,194,139,.15);
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .iss-bottom-icon {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #7fe2af;
          background: rgba(65,201,139,.10);
        }

        .iss-bottom strong {
          display: block;
          color: #dcebe5;
          font-size: 12px;
        }

        .iss-bottom p {
          margin: 4px 0 0;
          color: #71887e;
          font-size: 10px;
          line-height: 1.5;
        }

        .iss-bottom-pill {
          margin-left: auto;
          padding: 9px 13px;
          white-space: nowrap;
          border-radius: 999px;
          color: #8dddb5;
          background: rgba(54,187,128,.09);
          border: 1px solid rgba(78,198,142,.15);
          font-size: 9px;
          font-weight: 800;
        }

        @media (max-width: 1050px) {
          .iss-intelligence-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .iss-hero {
            align-items: stretch;
            flex-direction: column;
          }

          .iss-completion {
            width: 100%;
          }
        }

        @media (max-width: 760px) {
          .iss-overview {
            padding: 18px 14px 40px;
          }

          .iss-hero {
            padding: 22px;
          }

          .iss-hero-left {
            flex-direction: column;
          }

          .iss-flow {
            overflow-x: auto;
          }

          .iss-flow-line {
            min-width: 12px;
          }

          .iss-journey-label {
            display: none;
          }

          .iss-form-body,
          .iss-intelligence-grid,
          .iss-actions {
            grid-template-columns: 1fr;
          }

          .iss-field.full {
            grid-column: auto;
          }

          .iss-form-bottom {
            align-items: stretch;
            flex-direction: column;
          }

          .iss-continue {
            justify-content: center;
          }

          .iss-bottom {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .iss-bottom-pill {
            margin-left: 57px;
          }
        }
      `}),n.jsxs("div",{className:"iss-container",children:[n.jsxs("section",{className:"iss-hero",children:[n.jsxs("div",{className:"iss-hero-left",children:[n.jsx("div",{className:"iss-hero-icon",children:n.jsx(fe,{size:27})}),n.jsxs("div",{children:[n.jsx("div",{className:"iss-eyebrow",children:"AYURVEDA INNOVATION WORKSPACE"}),n.jsx("h1",{children:"Innovation Overview"}),n.jsx("p",{children:"Define your Ayurveda innovation once and build an evidence-grounded path from raw idea to IP intelligence, prior-art discovery and protection strategy."})]})]}),n.jsxs("div",{className:"iss-completion",children:[n.jsxs("div",{className:"iss-completion-top",children:[n.jsx("span",{children:"PROFILE COMPLETION"}),n.jsxs("strong",{children:[T,"%"]})]}),n.jsx("div",{className:"iss-progress",children:n.jsx("div",{style:{width:`${T}%`}})}),n.jsx("small",{children:C?"✓ Profile ready for the next intelligence stage":"Complete the required information to continue"})]})]}),n.jsxs("section",{className:"iss-journey-strip",children:[n.jsx("span",{className:"iss-journey-label",children:"YOUR IP JOURNEY"}),n.jsxs("div",{className:"iss-flow",children:[n.jsxs("div",{className:"iss-flow-node active",children:[n.jsx("span",{className:"iss-flow-num",children:"01"}),"Idea"]}),n.jsx("div",{className:"iss-flow-line"}),n.jsxs("div",{className:"iss-flow-node",children:[n.jsx("span",{className:"iss-flow-num",children:"02"}),"Discover"]}),n.jsx("div",{className:"iss-flow-line"}),n.jsxs("div",{className:"iss-flow-node",children:[n.jsx("span",{className:"iss-flow-num",children:"03"}),"Analyze"]}),n.jsx("div",{className:"iss-flow-line"}),n.jsxs("div",{className:"iss-flow-node",children:[n.jsx("span",{className:"iss-flow-num",children:"04"}),"Protect"]})]})]}),n.jsxs("div",{className:"iss-section-head",children:[n.jsxs("div",{children:[n.jsx("div",{className:"iss-section-kicker",children:"STEP 01"}),n.jsx("h2",{children:"Define Your Innovation"}),n.jsx("p",{children:"Create the foundation for your IP and regulatory intelligence journey."})]}),n.jsx("div",{className:"iss-required",children:"● Required information"})]}),n.jsxs("section",{className:"iss-form-card",children:[n.jsxs("div",{className:"iss-form-top",children:[n.jsx("div",{className:"iss-form-icon",children:n.jsx(fx,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Innovation Profile"}),n.jsx("span",{children:"Tell us what you are building and what makes it different."})]})]}),n.jsxs("div",{className:"iss-form-body",children:[n.jsxs("div",{className:"iss-field full",children:[n.jsxs("div",{className:"iss-field-label",children:[n.jsx("label",{htmlFor:"innovation-name",children:"Innovation Name"}),n.jsx("span",{children:"Required"})]}),n.jsx("input",{id:"innovation-name",type:"text",value:a.name||"",onChange:I=>P("name",I.target.value),placeholder:"e.g. Herbal formulation for digestive wellness"}),n.jsx("small",{children:"Use a clear working name that describes your innovation."})]}),n.jsxs("div",{className:"iss-field",children:[n.jsxs("div",{className:"iss-field-label",children:[n.jsx("label",{htmlFor:"innovation-type",children:"Innovation Type"}),n.jsx("span",{children:"Required"})]}),n.jsxs("select",{id:"innovation-type",value:a.type||"",onChange:I=>P("type",I.target.value),children:[n.jsx("option",{value:"",children:"Select innovation type"}),Ox.map(I=>n.jsx("option",{value:I,children:I},I))]}),n.jsx("small",{children:"Choose the category that best represents your idea."})]}),n.jsxs("div",{className:"iss-field",children:[n.jsxs("div",{className:"iss-field-label",children:[n.jsx("label",{htmlFor:"therapeutic-focus",children:"Therapeutic / Application Focus"}),n.jsx("span",{children:"Optional"})]}),n.jsx("input",{id:"therapeutic-focus",type:"text",value:a.focus||"",onChange:I=>P("focus",I.target.value),placeholder:"e.g. Digestive health"}),n.jsx("small",{children:"Mention the primary health or application area."})]}),n.jsxs("div",{className:"iss-field full",children:[n.jsxs("div",{className:"iss-field-label",children:[n.jsx("label",{htmlFor:"innovation-description",children:"Innovation Description"}),n.jsx("span",{children:"Required"})]}),n.jsx("textarea",{id:"innovation-description",rows:"5",value:a.description||"",onChange:I=>P("description",I.target.value),placeholder:"Describe the problem, proposed solution, Ayurvedic concept, technical approach and what makes the innovation different..."}),n.jsx("small",{children:"Include the problem, proposed solution and key technical or Ayurvedic concept."})]}),n.jsxs("div",{className:"iss-field",children:[n.jsxs("div",{className:"iss-field-label",children:[n.jsx("label",{htmlFor:"innovation-ingredients",children:"Key Ingredients / Components"}),n.jsx("span",{children:"Recommended"})]}),n.jsx("input",{id:"innovation-ingredients",type:"text",value:Array.isArray(a.ingredients)?a.ingredients.join(", "):a.ingredients||"",onChange:I=>{const V=I.target.value.split(",").map(Q=>Q.trim()).filter(Boolean);P("ingredients",V)},placeholder:"e.g. Ashwagandha, Guduchi, Turmeric"}),n.jsx("small",{children:"Separate multiple ingredients or components with commas."})]}),n.jsxs("div",{className:"iss-field",children:[n.jsxs("div",{className:"iss-field-label",children:[n.jsx("label",{htmlFor:"innovation-formulation",children:"Formulation / Process"}),n.jsx("span",{children:"Recommended"})]}),n.jsx("input",{id:"innovation-formulation",type:"text",value:a.formulation||"",onChange:I=>P("formulation",I.target.value),placeholder:"e.g. Extract-based formulation"}),n.jsx("small",{children:"Add the formulation method, process or technical approach."})]})]}),n.jsxs("div",{className:"iss-form-bottom",children:[n.jsxs("div",{className:"iss-save",children:[n.jsx("div",{className:"iss-save-icon",children:n.jsx(ie,{size:16})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Auto-saved locally"}),n.jsx("span",{children:"Your innovation details are preserved while you work."})]})]}),n.jsxs("button",{type:"button",className:"iss-continue",disabled:!C,onClick:()=>{l?l():p&&p()},children:[n.jsx("span",{children:C?"Continue Journey":"Complete Required Fields"}),n.jsx(J,{size:17})]})]})]}),n.jsxs("div",{className:"iss-section-head",children:[n.jsxs("div",{children:[n.jsx("div",{className:"iss-section-kicker",children:"INTELLIGENCE PIPELINE"}),n.jsx("h2",{children:"What Happens Next?"}),n.jsx("p",{children:"Your innovation profile becomes the starting point for four intelligence stages."})]}),n.jsx("div",{className:"iss-required",children:"4 intelligence stages"})]}),n.jsxs("section",{className:"iss-intelligence-grid",children:[n.jsxs("div",{className:"iss-intel-card purple",role:"button",tabIndex:0,onClick:()=>{u&&u()},onKeyDown:I=>{(I.key==="Enter"||I.key===" ")&&u&&(I.preventDefault(),u())},children:[n.jsxs("div",{className:"iss-intel-top",children:[n.jsx("div",{className:"iss-intel-icon",children:n.jsx(In,{size:20})}),n.jsx("span",{className:"iss-intel-number",children:"01"})]}),n.jsx("h3",{children:"Traditional Knowledge"}),n.jsx("p",{children:"Discover classical Ayurveda references and traditional knowledge connections."}),n.jsx("div",{className:"iss-intel-arrow",children:n.jsx(J,{size:16})})]}),n.jsxs("div",{className:"iss-intel-card blue",role:"button",tabIndex:0,onClick:()=>{f&&f()},onKeyDown:I=>{(I.key==="Enter"||I.key===" ")&&f&&(I.preventDefault(),f())},children:[n.jsxs("div",{className:"iss-intel-top",children:[n.jsx("div",{className:"iss-intel-icon",children:n.jsx(an,{size:20})}),n.jsx("span",{className:"iss-intel-number",children:"02"})]}),n.jsx("h3",{children:"Research Evidence"}),n.jsx("p",{children:"Identify supporting research, scientific evidence and evidence gaps."}),n.jsx("div",{className:"iss-intel-arrow",children:n.jsx(J,{size:16})})]}),n.jsxs("div",{className:"iss-intel-card orange",role:"button",tabIndex:0,onClick:()=>{m&&m()},onKeyDown:I=>{(I.key==="Enter"||I.key===" ")&&m&&(I.preventDefault(),m())},children:[n.jsxs("div",{className:"iss-intel-top",children:[n.jsx("div",{className:"iss-intel-icon",children:n.jsx(bn,{size:20})}),n.jsx("span",{className:"iss-intel-number",children:"03"})]}),n.jsx("h3",{children:"Prior Art"}),n.jsx("p",{children:"Explore similar inventions, patents and possible prior-art signals."}),n.jsx("div",{className:"iss-intel-arrow",children:n.jsx(J,{size:16})})]}),n.jsxs("div",{className:"iss-intel-card green",role:"button",tabIndex:0,onClick:()=>{N&&N()},onKeyDown:I=>{(I.key==="Enter"||I.key===" ")&&N&&(I.preventDefault(),N())},children:[n.jsxs("div",{className:"iss-intel-top",children:[n.jsx("div",{className:"iss-intel-icon",children:n.jsx(ce,{size:20})}),n.jsx("span",{className:"iss-intel-number",children:"04"})]}),n.jsx("h3",{children:"IP Readiness"}),n.jsx("p",{children:"Build a preliminary view of novelty, readiness and next IP actions."}),n.jsx("div",{className:"iss-intel-arrow",children:n.jsx(J,{size:16})})]})]}),n.jsx("div",{className:"iss-section-head",children:n.jsxs("div",{children:[n.jsx("div",{className:"iss-section-kicker",children:"PLATFORM INTELLIGENCE"}),n.jsx("h2",{children:"What IP Shakti Sahayak Checks"}),n.jsx("p",{children:"Multiple signals are brought together before your next action."})]})}),n.jsxs("section",{className:"iss-actions",children:[n.jsxs("div",{className:"iss-action-card",children:[n.jsx("div",{className:"iss-action-icon",children:n.jsx(Rn,{size:19})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Evidence & Research"}),n.jsx("span",{children:"Identify evidence supporting the innovation."})]})]}),n.jsxs("div",{className:"iss-action-card",children:[n.jsx("div",{className:"iss-action-icon",children:n.jsx(Fe,{size:19})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Prior-Art Discovery"}),n.jsx("span",{children:"Explore similar patents and invention signals."})]})]}),n.jsxs("div",{className:"iss-action-card",children:[n.jsx("div",{className:"iss-action-icon",children:n.jsx(Nx,{size:19})}),n.jsxs("div",{children:[n.jsx("strong",{children:"IP Risk & Readiness"}),n.jsx("span",{children:"Understand preliminary risks and next IP actions."})]})]})]}),n.jsxs("section",{className:"iss-bottom",children:[n.jsx("div",{className:"iss-bottom-icon",children:n.jsx(ce,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Evidence-grounded workflow"}),n.jsx("p",{children:"Your innovation profile becomes the foundation for discovery, comparison, readiness assessment and IP planning."})]}),n.jsx("div",{className:"iss-bottom-pill",children:"Discover → Analyze → Protect"})]})]})]})}function si({eyebrow:a,title:c,description:l,action:p,icon:u}){return n.jsxs("div",{className:"section-header",children:[n.jsxs("div",{className:"section-header-content",children:[a&&n.jsx("span",{className:"section-eyebrow",children:a}),n.jsxs("div",{className:"section-title-row",children:[u&&n.jsx("div",{className:"section-icon",children:n.jsx(u,{size:18,strokeWidth:1.8})}),n.jsx("h2",{children:c})]}),l&&n.jsx("p",{className:"section-description",children:l})]}),p&&n.jsx("div",{className:"section-header-action",children:p})]})}function pr({status:a="Pending",tone:c}){const l=String(a).toLowerCase(),p=()=>c||(["completed","found","granted","ready","active"].includes(l)?"success":["partial","in progress","published","moderate"].includes(l)?"warning":["missing","locked","high","risk"].includes(l)?"danger":"neutral");return n.jsxs("span",{className:`status-badge status-${p()}`,children:[n.jsx("span",{className:"status-badge-dot"}),a]})}const Fx=[{id:"TK-001",title:"Classical Herbal Formulation Reference",source:"Classical Ayurveda Reference",type:"Formulation",relevance:"High",keywords:["herbal","formulation","ashwagandha","ayurveda"],description:"Reference record for a traditional herbal formulation and its documented ingredients and preparation context."},{id:"TK-002",title:"Traditional Digestive Wellness Knowledge",source:"Traditional Knowledge Record",type:"Therapeutic Use",relevance:"High",keywords:["digestive","digestion","amla","herbal","wellness"],description:"Traditional-use reference related to digestive wellness and plant-based ingredients."},{id:"TK-003",title:"Botanical Preparation Method",source:"Ayurveda Knowledge Record",type:"Preparation",relevance:"Moderate",keywords:["preparation","botanical","herbal","process"],description:"Reference describing a traditional preparation approach involving botanical materials."},{id:"TK-004",title:"Herbal Ingredient Profile",source:"Traditional Knowledge Record",type:"Ingredient",relevance:"Moderate",keywords:["ingredient","ashwagandha","tulsi","amla","herbal"],description:"Structured knowledge record containing traditional context and use information for herbal ingredients."}];function Ux(){const[a,c]=E.useState(""),[l,p]=E.useState("All Categories"),[u,f]=E.useState(!1),m=Fx.filter(g=>{const P=a.trim().toLowerCase(),C=!P||g.title.toLowerCase().includes(P)||g.description.toLowerCase().includes(P)||g.type.toLowerCase().includes(P)||g.source.toLowerCase().includes(P)||g.keywords.some(T=>T.toLowerCase().includes(P)),A=l==="All Categories"||g.type===l;return C&&A}),N=()=>{f(!0)},b=g=>{c(g),f(!0)};return n.jsxs("main",{className:"page-content knowledge-discovery-page",children:[n.jsx(si,{eyebrow:"STAGE 02 • KNOWLEDGE DISCOVERY",title:"Traditional Knowledge Explorer",description:"Explore classical Ayurveda and traditional knowledge references before assessing scientific evidence and prior art.",icon:In}),n.jsxs("section",{className:"kd-journey-box",children:[n.jsxs("div",{className:"kd-journey-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"kd-eyebrow",children:"AYURVEDA KNOWLEDGE INTELLIGENCE"}),n.jsx("h2",{children:"Discover Before You Decide"}),n.jsx("p",{children:"Search your Ayurveda innovation against structured traditional knowledge records and identify relevant references before moving to IP assessment."})]}),n.jsxs("div",{className:"kd-live-badge",children:[n.jsx("span",{}),"KNOWLEDGE INTELLIGENCE"]})]}),n.jsxs("div",{className:"kd-process",children:[n.jsxs("div",{className:"kd-process-card active",children:[n.jsx("div",{className:"kd-number",children:"01"}),n.jsx("div",{className:"kd-process-icon",children:n.jsx(Fe,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Discover"}),n.jsx("span",{children:"Search related knowledge"})]})]}),n.jsx(J,{className:"kd-process-arrow",size:18}),n.jsxs("div",{className:"kd-process-card",children:[n.jsx("div",{className:"kd-number",children:"02"}),n.jsx("div",{className:"kd-process-icon",children:n.jsx(Ce,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Compare"}),n.jsx("span",{children:"Compare existing records"})]})]}),n.jsx(J,{className:"kd-process-arrow",size:18}),n.jsxs("div",{className:"kd-process-card",children:[n.jsx("div",{className:"kd-number",children:"03"}),n.jsx("div",{className:"kd-process-icon",children:n.jsx(ce,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Assess"}),n.jsx("span",{children:"Identify possible overlap"})]})]}),n.jsx(J,{className:"kd-process-arrow",size:18}),n.jsxs("div",{className:"kd-process-card",children:[n.jsx("div",{className:"kd-number",children:"04"}),n.jsx("div",{className:"kd-process-icon",children:n.jsx(fe,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Apply"}),n.jsx("span",{children:"Use insights for IP journey"})]})]})]})]}),n.jsxs("section",{className:"kd-stats-grid",children:[n.jsxs("div",{className:"kd-stat-card",children:[n.jsx("div",{className:"kd-stat-icon",children:n.jsx(Yn,{size:21})}),n.jsxs("div",{children:[n.jsx("strong",{children:"2,480+"}),n.jsx("span",{children:"Knowledge Records"})]}),n.jsx("small",{children:"Structured demo dataset"})]}),n.jsxs("div",{className:"kd-stat-card",children:[n.jsx("div",{className:"kd-stat-icon",children:n.jsx(In,{size:21})}),n.jsxs("div",{children:[n.jsx("strong",{children:"7"}),n.jsx("span",{children:"Knowledge Categories"})]}),n.jsx("small",{children:"Ayurveda domains"})]}),n.jsxs("div",{className:"kd-stat-card",children:[n.jsx("div",{className:"kd-stat-icon",children:n.jsx(Vo,{size:21})}),n.jsxs("div",{children:[n.jsx("strong",{children:"24"}),n.jsx("span",{children:"Active Innovations"})]}),n.jsx("small",{children:"Currently exploring"})]}),n.jsxs("div",{className:"kd-stat-card",children:[n.jsx("div",{className:"kd-stat-icon",children:n.jsx(ce,{size:21})}),n.jsxs("div",{children:[n.jsx("strong",{children:"4"}),n.jsx("span",{children:"Intelligence Signals"})]}),n.jsx("small",{children:"Discovery checks"})]})]}),n.jsxs("section",{className:"kd-search-box",children:[n.jsxs("div",{className:"kd-section-heading",children:[n.jsx("div",{className:"kd-heading-icon",children:n.jsx(Fe,{size:21})}),n.jsxs("div",{children:[n.jsx("span",{className:"kd-eyebrow",children:"DISCOVERY SEARCH"}),n.jsx("h2",{children:"Search Your Ayurveda Innovation"}),n.jsx("p",{children:"Enter your idea, ingredient, formulation, therapeutic use or preparation method."})]}),n.jsxs("div",{className:"kd-search-status",children:[n.jsx("span",{}),"SEARCH READY"]})]}),n.jsxs("div",{className:"kd-search-controls",children:[n.jsxs("div",{className:"kd-search-input",children:[n.jsx(Fe,{size:18}),n.jsx("input",{type:"text",value:a,onChange:g=>{c(g.target.value),f(!1)},onKeyDown:g=>{g.key==="Enter"&&N()},placeholder:"e.g. Herbal digestive formulation with Amla..."}),a&&n.jsx("button",{type:"button",className:"kd-clear",onClick:()=>{c(""),f(!1)},children:"×"})]}),n.jsxs("select",{className:"kd-filter",value:l,onChange:g=>{p(g.target.value),f(!0)},children:[n.jsx("option",{children:"All Categories"}),n.jsx("option",{children:"Formulation"}),n.jsx("option",{children:"Ingredient"}),n.jsx("option",{children:"Therapeutic Use"}),n.jsx("option",{children:"Preparation"})]}),n.jsxs("button",{type:"button",className:"kd-search-button",onClick:N,children:[n.jsx(Fe,{size:17}),"Search Knowledge"]})]}),n.jsxs("div",{className:"kd-search-hints",children:[n.jsx("span",{children:"Try searching:"}),n.jsx("button",{type:"button",onClick:()=>b("Ashwagandha"),children:"Ashwagandha"}),n.jsx("button",{type:"button",onClick:()=>b("Digestive formulation"),children:"Digestive formulation"}),n.jsx("button",{type:"button",onClick:()=>b("Herbal preparation"),children:"Herbal preparation"}),n.jsx("button",{type:"button",onClick:()=>b("Amla"),children:"Amla"})]})]}),n.jsxs("section",{className:"kd-results-box",children:[n.jsxs("div",{className:"kd-results-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"kd-eyebrow",children:u?"SEARCH RESULTS":"DISCOVERY RESULTS"}),n.jsx("h2",{children:u&&a?`Results for "${a}"`:"Relevant Knowledge Records"}),n.jsx("p",{children:u?"Records matching your innovation search.":"Existing knowledge records available for discovery."})]}),n.jsxs("div",{className:"kd-result-pill",children:[n.jsx(Ce,{size:15}),m.length," records found"]})]}),m.length>0?n.jsx("div",{className:"kd-results-grid",children:m.map(g=>{const P=g.type==="Formulation"?an:g.type==="Ingredient"?Vo:g.type==="Preparation"?In:Ce;return n.jsxs("article",{className:"kd-record-card",children:[n.jsxs("div",{className:"kd-record-top",children:[n.jsx("div",{className:"kd-record-icon",children:n.jsx(P,{size:21})}),n.jsx(pr,{status:g.relevance,tone:g.relevance==="High"?"success":"warning"})]}),n.jsx("div",{className:"kd-record-id",children:g.id}),n.jsx("h3",{children:g.title}),n.jsxs("div",{className:"kd-tags",children:[n.jsx("span",{children:g.type}),n.jsx("span",{children:g.source})]}),n.jsx("p",{children:g.description}),n.jsx("div",{className:"kd-record-divider"}),n.jsxs("div",{className:"kd-record-footer",children:[n.jsxs("span",{children:[n.jsx(Yn,{size:13}),"Demo knowledge dataset"]}),n.jsxs("button",{type:"button",className:"kd-explore",onClick:()=>{alert(`${g.title}

Source: ${g.source}
Type: ${g.type}
Relevance: ${g.relevance}`)},children:["Explore",n.jsx(Ko,{size:14})]})]})]},g.id)})}):n.jsxs("div",{className:"kd-no-results",children:[n.jsx("div",{className:"kd-no-results-icon",children:n.jsx(Fe,{size:25})}),n.jsx("h3",{children:"No matching knowledge records found"}),n.jsx("p",{children:"Try a different ingredient, formulation, therapeutic use or category."}),n.jsx("button",{type:"button",onClick:()=>{c(""),p("All Categories"),f(!1)},children:"Clear Search"})]})]}),n.jsxs("section",{className:"kd-intelligence-box",children:[n.jsx("div",{className:"kd-intelligence-icon",children:n.jsx(fe,{size:22})}),n.jsxs("div",{children:[n.jsx("span",{className:"kd-eyebrow",children:"WHY THIS MATTERS"}),n.jsx("h3",{children:"Knowledge Discovery → IP Intelligence"}),n.jsx("p",{children:"Discovering existing traditional knowledge helps innovators understand possible overlaps before moving to prior-art, evidence and IP assessment."})]}),n.jsxs("div",{className:"kd-intelligence-flow",children:[n.jsx("span",{children:"Knowledge"}),n.jsx(J,{size:15}),n.jsx("span",{children:"Compare"}),n.jsx(J,{size:15}),n.jsx("span",{children:"Assess"})]})]}),n.jsxs("section",{className:"kd-disclaimer",children:[n.jsx(In,{size:17}),n.jsxs("div",{children:[n.jsx("strong",{children:"Source & Verification Note"}),n.jsx("p",{children:"Knowledge records shown here are structured demonstration data. Classical references and traditional-knowledge information should be verified against authoritative sources before research or IP decisions."})]})]}),n.jsx("style",{children:`

        .knowledge-discovery-page {
          padding-bottom: 40px;
        }

        .kd-eyebrow {
          display: block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
          color: #16835b;
          margin-bottom: 6px;
        }

        .kd-journey-box,
        .kd-search-box,
        .kd-results-box,
        .kd-intelligence-box,
        .kd-disclaimer {
          background: #fff;
          border: 1px solid #dce9e1;
          border-radius: 20px;
          box-shadow: 0 8px 28px rgba(25,72,52,.07);
        }

        .kd-journey-box {
          padding: 25px;
          margin-top: 22px;
        }

        .kd-journey-heading,
        .kd-section-heading,
        .kd-results-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .kd-journey-heading h2,
        .kd-section-heading h2,
        .kd-results-header h2 {
          margin: 0;
          color: #183c2d;
          font-size: 22px;
          font-weight: 800;
        }

        .kd-journey-heading p,
        .kd-section-heading p,
        .kd-results-header p {
          margin: 7px 0 0;
          color: #718278;
          font-size: 13px;
          line-height: 1.6;
        }

        .kd-live-badge,
        .kd-search-status {
          border: 1px solid #bfe3d0;
          background: #f0fbf5;
          color: #16835b;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
          white-space: nowrap;
        }

        .kd-live-badge span,
        .kd-search-status span {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #20a568;
          margin-right: 7px;
        }

        .kd-process {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 10px;
          margin-top: 23px;
        }

        .kd-process-card {
          min-height: 82px;
          padding: 14px;
          border: 1px solid #e0e9e4;
          border-radius: 15px;
          background: #fbfdfc;
          display: grid;
          grid-template-columns: auto auto 1fr;
          align-items: center;
          gap: 11px;
        }

        .kd-process-card.active {
          border-color: #8fd0b1;
          background: #f2fbf6;
        }

        .kd-number {
          font-size: 10px;
          font-weight: 900;
          color: #96a69e;
        }

        .kd-process-icon,
        .kd-stat-icon,
        .kd-record-icon,
        .kd-heading-icon,
        .kd-intelligence-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #18845c;
          background: #eaf7f0;
          border: 1px solid #d0ecdd;
          border-radius: 11px;
        }

        .kd-process-icon {
          width: 38px;
          height: 38px;
        }

        .kd-process-card strong,
        .kd-process-card span {
          display: block;
        }

        .kd-process-card strong {
          font-size: 13px;
          color: #244438;
        }

        .kd-process-card span {
          font-size: 11px;
          color: #7b8b83;
          margin-top: 3px;
        }

        .kd-process-arrow {
          color: #9aac9f;
        }

        .kd-stats-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 14px;
          margin: 18px 0;
        }

        .kd-stat-card {
          background: #fff;
          border: 1px solid #dce9e1;
          border-radius: 16px;
          padding: 17px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 11px;
          box-shadow: 0 6px 20px rgba(25,72,52,.045);
        }

        .kd-stat-icon {
          width: 42px;
          height: 42px;
        }

        .kd-stat-card strong,
        .kd-stat-card span,
        .kd-stat-card small {
          display: block;
        }

        .kd-stat-card strong {
          color: #173d2d;
          font-size: 21px;
        }

        .kd-stat-card span {
          color: #54695f;
          font-size: 12px;
          font-weight: 700;
        }

        .kd-stat-card small {
          grid-column: 2;
          color: #9aa9a1;
          font-size: 10px;
        }

        .kd-search-box {
          padding: 25px;
          margin-bottom: 18px;
        }

        .kd-heading-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
        }

        .kd-section-heading {
          align-items: center;
        }

        .kd-section-heading > div:nth-child(2) {
          flex: 1;
        }

        .kd-search-controls {
          display: grid;
          grid-template-columns: 1fr 190px 180px;
          gap: 11px;
          margin-top: 22px;
        }

        .kd-search-input {
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 13px;
          border: 1px solid #d5e4db;
          border-radius: 12px;
          background: #fbfdfc;
          color: #7b8e84;
        }

        .kd-search-input:focus-within {
          border-color: #42a875;
          box-shadow: 0 0 0 3px rgba(66,168,117,.10);
          background: #fff;
        }

        .kd-search-input input {
          width: 100%;
          height: 46px;
          border: 0;
          outline: none;
          background: transparent;
          color: #243f33;
          font-size: 13px;
        }

        .kd-search-input input::placeholder {
          color: #9aa8a1;
        }

        .kd-clear {
          border: 0;
          background: transparent;
          color: #87978f;
          font-size: 20px;
          cursor: pointer;
          padding: 2px 5px;
        }

        .kd-filter {
          min-height: 48px;
          padding: 0 13px;
          border: 1px solid #d5e4db;
          border-radius: 12px;
          background: #fbfdfc;
          color: #52665b;
          outline: none;
          cursor: pointer;
        }

        .kd-search-button {
          border: 0;
          border-radius: 12px;
          background: #177d56;
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          cursor: pointer;
          transition: .18s;
        }

        .kd-search-button:hover {
          background: #126a48;
          transform: translateY(-1px);
        }

        .kd-search-hints {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 13px;
        }

        .kd-search-hints > span {
          color: #8b9992;
          font-size: 11px;
        }

        .kd-search-hints button {
          border: 1px solid #d8e7df;
          background: #f7fbf9;
          color: #39705a;
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 10px;
          cursor: pointer;
          transition: .15s;
        }

        .kd-search-hints button:hover {
          border-color: #8bc9a8;
          background: #eaf7f0;
        }

        .kd-results-box {
          padding: 25px;
        }

        .kd-result-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f0f8f4;
          border: 1px solid #d5e9de;
          color: #39715b;
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .kd-results-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 15px;
          margin-top: 20px;
        }

        .kd-record-card {
          border: 1px solid #dce8e1;
          border-radius: 16px;
          padding: 18px;
          background: #fcfefd;
          transition: .2s ease;
        }

        .kd-record-card:hover {
          transform: translateY(-2px);
          border-color: #a9d7be;
          box-shadow: 0 10px 24px rgba(25,72,52,.08);
        }

        .kd-record-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .kd-record-icon {
          width: 42px;
          height: 42px;
        }

        .kd-record-id {
          color: #94a39b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .1em;
          margin-top: 17px;
        }

        .kd-record-card h3 {
          margin: 5px 0 10px;
          color: #234538;
          font-size: 16px;
        }

        .kd-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .kd-tags span {
          border-radius: 999px;
          padding: 5px 8px;
          background: #edf7f2;
          color: #39725a;
          font-size: 9px;
          font-weight: 700;
        }

        .kd-record-card p {
          color: #718178;
          font-size: 12px;
          line-height: 1.65;
          margin: 13px 0;
        }

        .kd-record-divider {
          height: 1px;
          background: #e5eee9;
        }

        .kd-record-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
        }

        .kd-record-footer > span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #99a69f;
          font-size: 10px;
        }

        .kd-explore {
          display: flex;
          align-items: center;
          gap: 5px;
          border: 0;
          background: transparent;
          color: #16835b;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        .kd-no-results {
          margin-top: 20px;
          padding: 45px 20px;
          text-align: center;
          border: 1px dashed #cdded5;
          border-radius: 16px;
          background: #fbfdfc;
        }

        .kd-no-results-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 12px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #edf7f2;
          color: #16835b;
        }

        .kd-no-results h3 {
          margin: 0;
          color: #284b3c;
          font-size: 15px;
        }

        .kd-no-results p {
          color: #7b8982;
          font-size: 12px;
          margin: 7px 0 14px;
        }

        .kd-no-results button {
          border: 1px solid #b9dcca;
          background: #f1faf5;
          color: #167950;
          padding: 8px 13px;
          border-radius: 9px;
          font-weight: 700;
          cursor: pointer;
        }

        .kd-intelligence-box {
          margin-top: 18px;
          padding: 19px 22px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px;
          background: linear-gradient(135deg,#f4fbf7,#fff);
        }

        .kd-intelligence-icon {
          width: 46px;
          height: 46px;
        }

        .kd-intelligence-box h3 {
          margin: 0;
          color: #214737;
          font-size: 15px;
        }

        .kd-intelligence-box p {
          margin: 5px 0 0;
          color: #73837b;
          font-size: 11px;
          line-height: 1.55;
        }

        .kd-intelligence-flow {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #47715f;
          font-size: 10px;
          font-weight: 800;
        }

        .kd-intelligence-flow span {
          padding: 7px 9px;
          background: #edf7f2;
          border-radius: 8px;
        }

        .kd-disclaimer {
          margin-top: 14px;
          padding: 14px 17px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #8b9891;
          background: #fbfcfb;
          box-shadow: none;
        }

        .kd-disclaimer > svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .kd-disclaimer strong {
          display: block;
          color: #607169;
          font-size: 11px;
          margin-bottom: 3px;
        }

        .kd-disclaimer p {
          margin: 0;
          font-size: 10px;
          line-height: 1.55;
        }

        @media (max-width: 1050px) {
          .kd-process {
            grid-template-columns: 1fr 1fr;
          }

          .kd-process-arrow {
            display: none;
          }

          .kd-stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .kd-search-controls {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .kd-results-grid,
          .kd-stats-grid {
            grid-template-columns: 1fr;
          }

          .kd-journey-heading,
          .kd-results-header,
          .kd-section-heading {
            flex-direction: column;
          }

          .kd-intelligence-box {
            grid-template-columns: auto 1fr;
          }

          .kd-intelligence-flow {
            grid-column: 1 / -1;
          }
        }

      `})]})}const Hx=[{id:"RE-001",title:"Clinical Evaluation of an Ayurvedic Herbal Formulation",source:"AYUSH Research Portal",type:"Clinical Research",evidence:"Clinical",level:"High",description:"Research record describing clinical evaluation of an Ayurvedic herbal intervention and its reported outcomes.",keywords:["clinical","herbal","formulation","ayurveda"]},{id:"RE-002",title:"Preclinical Evaluation of Botanical Extract",source:"AYUSH Research Record",type:"Pre-Clinical Research",evidence:"Pre-Clinical",level:"Moderate",description:"Preclinical research reference involving evaluation of a botanical extract and related experimental observations.",keywords:["preclinical","botanical","extract","herbal"]},{id:"RE-003",title:"Pharmacological Study of Herbal Ingredients",source:"Research Publication",type:"Drug Research",evidence:"Drug Research",level:"Moderate",description:"Research reference examining pharmacological properties and experimental findings associated with herbal ingredients.",keywords:["drug","pharmacological","ingredient","ashwagandha"]},{id:"RE-004",title:"Fundamental Research in Ayurveda",source:"Ayurveda Research Record",type:"Fundamental Research",evidence:"Fundamental",level:"Moderate",description:"Fundamental research record providing background evidence relevant to Ayurveda concepts and research.",keywords:["fundamental","ayurveda","research","traditional"]}];function Vx({eyebrow:a,title:c,description:l,icon:p}){return n.jsxs("div",{className:"re-page-header",children:[n.jsx("div",{className:"re-page-header-icon",children:p&&n.jsx(p,{size:23})}),n.jsxs("div",{children:[n.jsx("span",{className:"re-eyebrow",children:a}),n.jsx("h1",{children:c}),n.jsx("p",{children:l})]})]})}function Bx({status:a,tone:c="warning"}){return n.jsxs("span",{className:`re-status-badge ${c}`,children:[n.jsx("span",{className:"re-status-dot"}),a]})}function Wx(){const[a,c]=E.useState(""),[l,p]=E.useState("All Categories"),[u,f]=E.useState(!1),m=Hx.filter(g=>{const P=a.trim().toLowerCase(),C=!P||g.title.toLowerCase().includes(P)||g.description.toLowerCase().includes(P)||g.source.toLowerCase().includes(P)||g.type.toLowerCase().includes(P)||g.keywords.some(T=>T.toLowerCase().includes(P)),A=l==="All Categories"||g.type===l;return C&&A}),N=()=>f(!0),b=g=>{c(g),f(!0)};return n.jsxs("main",{className:"page-content research-evidence-page",children:[n.jsx(Vx,{eyebrow:"STAGE 03 • RESEARCH EVIDENCE",title:"Research Evidence Explorer",description:"Discover research evidence related to your Ayurveda innovation before moving toward IP assessment and protection.",icon:In}),n.jsxs("section",{className:"re-journey-box",children:[n.jsxs("div",{className:"re-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"re-eyebrow",children:"EVIDENCE INTELLIGENCE"}),n.jsx("h2",{children:"Build the Evidence Behind Your Innovation"}),n.jsx("p",{children:"Search research records, identify relevant evidence and understand what research exists around your innovation."})]}),n.jsxs("div",{className:"re-live",children:[n.jsx("span",{}),"EVIDENCE READY"]})]}),n.jsxs("div",{className:"re-process",children:[n.jsxs("div",{className:"re-process-card active",children:[n.jsx("div",{className:"re-number",children:"01"}),n.jsx("div",{className:"re-icon",children:n.jsx(Fe,{size:19})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Search"}),n.jsx("span",{children:"Find research"})]})]}),n.jsx(J,{className:"re-arrow",size:18}),n.jsxs("div",{className:"re-process-card",children:[n.jsx("div",{className:"re-number",children:"02"}),n.jsx("div",{className:"re-icon",children:n.jsx(Ce,{size:19})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Review"}),n.jsx("span",{children:"Read evidence"})]})]}),n.jsx(J,{className:"re-arrow",size:18}),n.jsxs("div",{className:"re-process-card",children:[n.jsx("div",{className:"re-number",children:"03"}),n.jsx("div",{className:"re-icon",children:n.jsx(ce,{size:19})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Assess"}),n.jsx("span",{children:"Identify evidence gaps"})]})]}),n.jsx(J,{className:"re-arrow",size:18}),n.jsxs("div",{className:"re-process-card",children:[n.jsx("div",{className:"re-number",children:"04"}),n.jsx("div",{className:"re-icon",children:n.jsx(fe,{size:19})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Apply"}),n.jsx("span",{children:"Use in IP journey"})]})]})]})]}),n.jsxs("section",{className:"re-stats",children:[n.jsxs("div",{className:"re-stat",children:[n.jsx("div",{className:"re-stat-icon",children:n.jsx(Yn,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"4"}),n.jsx("span",{children:"Research Types"})]}),n.jsx("small",{children:"Evidence categories"})]}),n.jsxs("div",{className:"re-stat",children:[n.jsx("div",{className:"re-stat-icon",children:n.jsx(Ho,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Clinical"}),n.jsx("span",{children:"Human Research"})]}),n.jsx("small",{children:"Clinical evidence"})]}),n.jsxs("div",{className:"re-stat",children:[n.jsx("div",{className:"re-stat-icon",children:n.jsx(cp,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Preclinical"}),n.jsx("span",{children:"Experimental Research"})]}),n.jsx("small",{children:"Laboratory evidence"})]}),n.jsxs("div",{className:"re-stat",children:[n.jsx("div",{className:"re-stat-icon",children:n.jsx(an,{size:20})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Drug"}),n.jsx("span",{children:"Research Records"})]}),n.jsx("small",{children:"Pharmacological evidence"})]})]}),n.jsxs("section",{className:"re-search-box",children:[n.jsxs("div",{className:"re-search-heading",children:[n.jsx("div",{className:"re-heading-icon",children:n.jsx(Fe,{size:21})}),n.jsxs("div",{children:[n.jsx("span",{className:"re-eyebrow",children:"RESEARCH SEARCH"}),n.jsx("h2",{children:"Search Evidence for Your Innovation"}),n.jsx("p",{children:"Search by ingredient, formulation, therapeutic area, research topic or keyword."})]}),n.jsxs("div",{className:"re-status",children:[n.jsx("span",{}),"SEARCH READY"]})]}),n.jsxs("div",{className:"re-controls",children:[n.jsxs("div",{className:"re-input",children:[n.jsx(Fe,{size:18}),n.jsx("input",{type:"text",value:a,onChange:g=>{c(g.target.value),f(!1)},onKeyDown:g=>{g.key==="Enter"&&N()},placeholder:"e.g. Ashwagandha clinical research..."}),a&&n.jsx("button",{type:"button",className:"re-clear",onClick:()=>{c(""),f(!1)},children:"×"})]}),n.jsxs("select",{className:"re-filter",value:l,onChange:g=>{p(g.target.value),f(!0)},children:[n.jsx("option",{children:"All Categories"}),n.jsx("option",{children:"Clinical Research"}),n.jsx("option",{children:"Pre-Clinical Research"}),n.jsx("option",{children:"Drug Research"}),n.jsx("option",{children:"Fundamental Research"})]}),n.jsxs("button",{type:"button",className:"re-search-button",onClick:N,children:[n.jsx(Fe,{size:17}),"Search Evidence"]})]}),n.jsxs("div",{className:"re-hints",children:[n.jsx("span",{children:"Try searching:"}),n.jsx("button",{type:"button",onClick:()=>b("Ashwagandha"),children:"Ashwagandha"}),n.jsx("button",{type:"button",onClick:()=>b("Clinical"),children:"Clinical Research"}),n.jsx("button",{type:"button",onClick:()=>b("Herbal"),children:"Herbal Formulation"}),n.jsx("button",{type:"button",onClick:()=>b("Ayurveda"),children:"Ayurveda"})]})]}),n.jsxs("section",{className:"re-results-box",children:[n.jsxs("div",{className:"re-results-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"re-eyebrow",children:u?"SEARCH RESULTS":"EVIDENCE RECORDS"}),n.jsx("h2",{children:u&&a?`Evidence for "${a}"`:"Relevant Research Evidence"}),n.jsx("p",{children:"Research records relevant to your innovation."})]}),n.jsxs("div",{className:"re-count",children:[n.jsx(Ce,{size:15}),m.length," records found"]})]}),m.length>0?n.jsx("div",{className:"re-grid",children:m.map(g=>{const P=g.type==="Clinical Research"?Ho:g.type==="Pre-Clinical Research"?cp:g.type==="Drug Research"?an:In;return n.jsxs("article",{className:"re-card",children:[n.jsxs("div",{className:"re-card-top",children:[n.jsx("div",{className:"re-card-icon",children:n.jsx(P,{size:21})}),n.jsx(Bx,{status:g.level,tone:g.level==="High"?"success":"warning"})]}),n.jsx("div",{className:"re-id",children:g.id}),n.jsx("h3",{children:g.title}),n.jsxs("div",{className:"re-tags",children:[n.jsx("span",{children:g.type}),n.jsx("span",{children:g.evidence})]}),n.jsx("p",{children:g.description}),n.jsx("div",{className:"re-divider"}),n.jsxs("div",{className:"re-footer",children:[n.jsxs("span",{children:[n.jsx(Yn,{size:13}),"Research dataset"]}),n.jsxs("button",{type:"button",className:"re-explore",onClick:()=>{alert(`${g.title}

Source: ${g.source}
Type: ${g.type}`)},children:["Explore",n.jsx(Ko,{size:14})]})]})]},g.id)})}):n.jsxs("div",{className:"re-empty",children:[n.jsx("div",{className:"re-empty-icon",children:n.jsx(Fe,{size:25})}),n.jsx("h3",{children:"No matching research found"}),n.jsx("p",{children:"Try another ingredient, research type or keyword."}),n.jsx("button",{type:"button",onClick:()=>{c(""),p("All Categories"),f(!1)},children:"Clear Search"})]})]}),n.jsxs("section",{className:"re-gap-box",children:[n.jsx("div",{className:"re-gap-icon",children:n.jsx(fe,{size:22})}),n.jsxs("div",{children:[n.jsx("span",{className:"re-eyebrow",children:"EVIDENCE INTELLIGENCE"}),n.jsx("h3",{children:"Research Evidence → Evidence Gap Analysis"}),n.jsx("p",{children:"Relevant research can help an innovator identify what evidence already exists and where additional research may still be needed."})]}),n.jsxs("div",{className:"re-flow",children:[n.jsx("span",{children:"Research"}),n.jsx(J,{size:15}),n.jsx("span",{children:"Evidence"}),n.jsx(J,{size:15}),n.jsx("span",{children:"Gap Analysis"})]})]}),n.jsxs("section",{className:"re-note",children:[n.jsx(In,{size:17}),n.jsxs("div",{children:[n.jsx("strong",{children:"Evidence Verification Note"}),n.jsx("p",{children:"Research records are intended for discovery and demonstration. Always review the original publication, methodology, source and study context before relying on research for scientific or IP decisions."})]})]}),n.jsx("style",{children:`
        .research-evidence-page {
          padding-bottom: 40px;
        }

        .re-page-header {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 22px;
        }

        .re-page-header-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #16835b;
          background: #eaf7f0;
          border: 1px solid #d0ecdd;
          border-radius: 14px;
        }

        .re-page-header h1 {
          margin: 0;
          color: #183c2d;
          font-size: 28px;
          font-weight: 800;
          line-height: 1.2;
        }

        .re-page-header p {
          margin: 7px 0 0;
          color: #718278;
          font-size: 13px;
          line-height: 1.6;
          max-width: 760px;
        }

        .re-eyebrow {
          display: block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
          color: #16835b;
          margin-bottom: 6px;
        }

        .re-journey-box,
        .re-search-box,
        .re-results-box,
        .re-gap-box,
        .re-note {
          background: #fff;
          border: 1px solid #dce9e1;
          border-radius: 20px;
          box-shadow: 0 8px 28px rgba(25,72,52,.07);
        }

        .re-journey-box {
          padding: 25px;
          margin-top: 22px;
        }

        .re-heading,
        .re-search-heading,
        .re-results-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .re-heading h2,
        .re-search-heading h2,
        .re-results-heading h2 {
          margin: 0;
          color: #183c2d;
          font-size: 22px;
          font-weight: 800;
        }

        .re-heading p,
        .re-search-heading p,
        .re-results-heading p {
          margin: 7px 0 0;
          color: #718278;
          font-size: 13px;
          line-height: 1.6;
        }

        .re-live,
        .re-status {
          padding: 8px 12px;
          border-radius: 999px;
          background: #f0fbf5;
          border: 1px solid #bfe3d0;
          color: #16835b;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .re-live span,
        .re-status span {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #20a568;
          margin-right: 7px;
        }

        .re-process {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          gap: 10px;
          align-items: center;
          margin-top: 23px;
        }

        .re-process-card {
          min-height: 82px;
          padding: 14px;
          border: 1px solid #e0e9e4;
          border-radius: 15px;
          background: #fbfdfc;
          display: grid;
          grid-template-columns: auto auto 1fr;
          gap: 11px;
          align-items: center;
        }

        .re-process-card.active {
          background: #f2fbf6;
          border-color: #8fd0b1;
        }

        .re-number {
          color: #96a69e;
          font-size: 10px;
          font-weight: 900;
        }

        .re-icon,
        .re-stat-icon,
        .re-card-icon,
        .re-heading-icon,
        .re-gap-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #18845c;
          background: #eaf7f0;
          border: 1px solid #d0ecdd;
          border-radius: 11px;
        }

        .re-icon {
          width: 38px;
          height: 38px;
        }

        .re-process-card strong,
        .re-process-card span {
          display: block;
        }

        .re-process-card strong {
          font-size: 13px;
          color: #244438;
        }

        .re-process-card span {
          margin-top: 3px;
          color: #7b8b83;
          font-size: 11px;
        }

        .re-arrow {
          color: #9aac9f;
        }

        .re-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 14px;
          margin: 18px 0;
        }

        .re-stat {
          padding: 17px;
          background: #fff;
          border: 1px solid #dce9e1;
          border-radius: 16px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 11px;
        }

        .re-stat-icon {
          width: 42px;
          height: 42px;
        }

        .re-stat strong,
        .re-stat span,
        .re-stat small {
          display: block;
        }

        .re-stat strong {
          color: #173d2d;
          font-size: 18px;
        }

        .re-stat span {
          color: #54695f;
          font-size: 11px;
          font-weight: 700;
        }

        .re-stat small {
          grid-column: 2;
          color: #9aa9a1;
          font-size: 10px;
        }

        .re-search-box {
          padding: 25px;
          margin-bottom: 18px;
        }

        .re-search-heading {
          align-items: center;
        }

        .re-heading-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
        }

        .re-search-heading > div:nth-child(2) {
          flex: 1;
        }

        .re-controls {
          display: grid;
          grid-template-columns: 1fr 190px 180px;
          gap: 11px;
          margin-top: 22px;
        }

        .re-input {
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 13px;
          border: 1px solid #d5e4db;
          border-radius: 12px;
          background: #fbfdfc;
          color: #7b8e84;
        }

        .re-input:focus-within {
          border-color: #42a875;
          box-shadow: 0 0 0 3px rgba(66,168,117,.10);
          background: #fff;
        }

        .re-input input {
          width: 100%;
          height: 46px;
          border: 0;
          outline: none;
          background: transparent;
          color: #243f33;
          font-size: 13px;
        }

        .re-input input::placeholder {
          color: #9aa8a1;
        }

        .re-clear {
          border: 0;
          background: transparent;
          color: #87978f;
          font-size: 20px;
          cursor: pointer;
        }

        .re-filter {
          min-height: 48px;
          border: 1px solid #d5e4db;
          border-radius: 12px;
          background: #fbfdfc;
          padding: 0 13px;
          color: #52665b;
          outline: none;
        }

        .re-search-button {
          border: 0;
          border-radius: 12px;
          background: #177d56;
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          cursor: pointer;
        }

        .re-search-button:hover {
          background: #126a48;
        }

        .re-hints {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 13px;
        }

        .re-hints span {
          color: #8b9992;
          font-size: 11px;
        }

        .re-hints button {
          border: 1px solid #d8e7df;
          background: #f7fbf9;
          color: #39705a;
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 10px;
          cursor: pointer;
        }

        .re-results-box {
          padding: 25px;
        }

        .re-count {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 999px;
          background: #f0f8f4;
          border: 1px solid #d5e9de;
          color: #39715b;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .re-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 15px;
          margin-top: 20px;
        }

        .re-card {
          padding: 18px;
          border: 1px solid #dce8e1;
          border-radius: 16px;
          background: #fcfefd;
          transition: .2s;
        }

        .re-card:hover {
          transform: translateY(-2px);
          border-color: #a9d7be;
          box-shadow: 0 10px 24px rgba(25,72,52,.08);
        }

        .re-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .re-card-icon {
          width: 42px;
          height: 42px;
        }

        .re-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 800;
        }

        .re-status-badge.success {
          color: #13734d;
          background: #eaf8f0;
          border: 1px solid #c5e7d3;
        }

        .re-status-badge.warning {
          color: #98701d;
          background: #fff8df;
          border: 1px solid #f0df9f;
        }

        .re-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        .re-id {
          margin-top: 17px;
          color: #94a39b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .1em;
        }

        .re-card h3 {
          margin: 5px 0 10px;
          color: #234538;
          font-size: 16px;
        }

        .re-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .re-tags span {
          padding: 5px 8px;
          border-radius: 999px;
          background: #edf7f2;
          color: #39725a;
          font-size: 9px;
          font-weight: 700;
        }

        .re-card p {
          margin: 13px 0;
          color: #718178;
          font-size: 12px;
          line-height: 1.65;
        }

        .re-divider {
          height: 1px;
          background: #e5eee9;
        }

        .re-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
        }

        .re-footer span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #99a69f;
          font-size: 10px;
        }

        .re-explore {
          border: 0;
          background: transparent;
          color: #16835b;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }

        .re-empty {
          margin-top: 20px;
          padding: 45px 20px;
          text-align: center;
          border: 1px dashed #cdded5;
          border-radius: 16px;
          background: #fbfdfc;
        }

        .re-empty-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 12px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #edf7f2;
          color: #16835b;
        }

        .re-empty h3 {
          margin: 0;
          color: #284b3c;
          font-size: 15px;
        }

        .re-empty p {
          color: #7b8982;
          font-size: 12px;
        }

        .re-empty button {
          border: 1px solid #b9dcca;
          background: #f1faf5;
          color: #167950;
          padding: 8px 13px;
          border-radius: 9px;
          font-weight: 700;
          cursor: pointer;
        }

        .re-gap-box {
          margin-top: 18px;
          padding: 19px 22px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px;
          background: linear-gradient(135deg,#f4fbf7,#fff);
        }

        .re-gap-icon {
          width: 46px;
          height: 46px;
        }

        .re-gap-box h3 {
          margin: 0;
          color: #214737;
          font-size: 15px;
        }

        .re-gap-box p {
          margin: 5px 0 0;
          color: #73837b;
          font-size: 11px;
          line-height: 1.55;
        }

        .re-flow {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #47715f;
          font-size: 10px;
          font-weight: 800;
        }

        .re-flow span {
          padding: 7px 9px;
          background: #edf7f2;
          border-radius: 8px;
        }

        .re-note {
          margin-top: 14px;
          padding: 14px 17px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
          background: #fbfcfb;
          box-shadow: none;
          color: #8b9891;
        }

        .re-note strong {
          display: block;
          color: #607169;
          font-size: 11px;
          margin-bottom: 3px;
        }

        .re-note p {
          margin: 0;
          font-size: 10px;
          line-height: 1.55;
        }

        @media (max-width:1050px) {
          .re-process {
            grid-template-columns: 1fr 1fr;
          }

          .re-arrow {
            display: none;
          }

          .re-stats {
            grid-template-columns: 1fr 1fr;
          }

          .re-controls {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width:720px) {
          .re-grid,
          .re-stats {
            grid-template-columns: 1fr;
          }

          .re-heading,
          .re-search-heading,
          .re-results-heading {
            flex-direction: column;
          }

          .re-gap-box {
            grid-template-columns: auto 1fr;
          }

          .re-flow {
            grid-column: 1 / -1;
          }

          .re-page-header h1 {
            font-size: 23px;
          }
        }
      `})]})}function $x({patent:a,similarity:c,bookmarked:l=!1,onBookmark:p,onOpen:u}){var N,b;if(!a)return null;const f=(c==null?void 0:c.score)??0,m=Math.min(Math.max(Number(f)||0,0),100);return n.jsxs("article",{className:"patent-result-card",children:[n.jsxs("div",{className:"patent-result-top",children:[n.jsx("div",{className:"patent-result-icon",children:n.jsx(Rn,{size:20,strokeWidth:1.7})}),n.jsxs("div",{className:"patent-result-actions",children:[n.jsx(pr,{status:a.status}),n.jsx("button",{type:"button",className:`icon-button ${l?"is-bookmarked":""}`,onClick:()=>{p&&p(a.id)},"aria-label":l?"Remove bookmark":"Bookmark patent",children:n.jsx(gx,{size:17,fill:l?"currentColor":"none"})})]})]}),n.jsxs("div",{className:"patent-result-content",children:[n.jsx("span",{className:"patent-number",children:a.publicationNumber}),n.jsx("h3",{children:a.title}),n.jsx("p",{children:a.abstract}),n.jsxs("div",{className:"patent-meta",children:[n.jsxs("span",{children:[n.jsx("strong",{children:"Applicant:"})," ",a.applicant||"Not available"]}),n.jsxs("span",{children:[n.jsx(mx,{size:14}),a.publicationDate||"Not available"]}),n.jsxs("span",{children:[n.jsx("strong",{children:"Jurisdiction:"})," ",a.jurisdiction||"Not available"]})]}),n.jsxs("div",{className:"patent-tags",children:[(N=a.ipcCodes)==null?void 0:N.map(g=>n.jsx("span",{children:g},g)),(b=a.keywords)==null?void 0:b.slice(0,3).map(g=>n.jsx("span",{children:g},g))]})]}),c&&n.jsxs("div",{className:"patent-similarity",children:[n.jsxs("div",{className:"similarity-score",children:[n.jsx("span",{children:"Similarity"}),n.jsxs("strong",{children:[m,"%"]})]}),n.jsx("div",{className:"similarity-track",children:n.jsx("div",{className:"similarity-fill",style:{width:`${m}%`}})}),c.similarityLevel&&n.jsx("span",{className:"similarity-level",children:c.similarityLevel})]}),n.jsxs("div",{className:"patent-result-footer",children:[n.jsxs("span",{children:["Source: ",a.source||"Demo dataset"]}),n.jsxs("div",{className:"patent-footer-actions",children:[u&&n.jsxs("button",{type:"button",className:"card-link",onClick:()=>u(a),children:["View Analysis",n.jsx(hx,{size:15})]}),a.sourceUrl&&n.jsxs("a",{href:a.sourceUrl,target:"_blank",rel:"noreferrer",className:"card-link",children:["Source",n.jsx(Ko,{size:14})]})]})]})]})}const Yx=[{key:"ingredients",label:"Ingredients",icon:an},{key:"formulation",label:"Formulation",icon:As},{key:"therapeuticUse",label:"Therapeutic Use",icon:Sx},{key:"abstract",label:"Technical Description",icon:kx},{key:"classification",label:"IPC / CPC Classification",icon:zx}];function Kx(a=0){return a>=70?"high":a>=40?"medium":"low"}function Gx({result:a,compact:c=!1}){var l;return a!=null&&a.breakdown?n.jsxs("div",{className:`similarity-breakdown ${c?"compact":""}`,children:[!c&&n.jsxs("div",{className:"similarity-breakdown-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"section-eyebrow",children:"WHY IS THIS SIMILAR?"}),n.jsx("h3",{children:"Similarity Evidence"})]}),n.jsxs("strong",{className:"similarity-total",children:[a.score||0,"%"]})]}),n.jsx("div",{className:"similarity-breakdown-list",children:Yx.map(p=>{const u=p.icon,f=a.breakdown[p.key]||0;return n.jsxs("div",{className:"similarity-breakdown-item",children:[n.jsxs("div",{className:"similarity-item-label",children:[n.jsx("div",{className:"similarity-item-icon",children:n.jsx(u,{size:15})}),n.jsx("span",{children:p.label})]}),n.jsxs("div",{className:"similarity-item-score",children:[n.jsx("div",{className:"similarity-mini-track",children:n.jsx("div",{className:`similarity-mini-fill ${Kx(f)}`,style:{width:`${Math.min(Math.max(f,0),100)}%`}})}),n.jsxs("strong",{children:[f,"%"]})]})]},p.key)})}),((l=a.reasons)==null?void 0:l.length)>0&&!c&&n.jsxs("div",{className:"similarity-reasons",children:[n.jsx("span",{children:"Detected signals"}),n.jsx("div",{children:a.reasons.map(p=>n.jsx("span",{children:p},p))})]}),!c&&n.jsx("p",{className:"similarity-disclaimer",children:"Similarity is an automated demo indicator based on the available records and transparent matching signals. It is not a legal patentability opinion."})]}):null}const Es={id:"INN-001",title:"Herbal Digestive Wellness Formulation",category:"Herbal Formulation",focus:"New Formulation / Process",description:"A plant-based formulation concept focused on digestive wellness using selected herbal ingredients.",problemStatement:"Develop a standardised herbal formulation concept for digestive wellness with clearly documented ingredients and preparation methodology.",therapeuticUse:"Digestive wellness",ingredients:"Ashwagandha, botanical extracts, selected herbal ingredients",formulation:"Polyherbal formulation with defined ingredient proportions and preparation steps.",process:"Ingredient selection, cleaning, processing, extraction and formulation.",advantages:"Focus on standardisation, reproducibility and structured technical documentation.",evidence:[],ipcCodes:["A61K 36/00"],status:"In Progress",createdAt:"2026-09-19",updatedAt:"2026-09-19"},Gp=[{id:"PAT-001",publicationNumber:"IN-DEMO-001",title:"Herbal formulation for digestive wellness",applicant:"Demo Innovation Labs",inventors:["Research Team"],jurisdiction:"India",filingDate:"2021-04-18",publicationDate:"2022-10-27",status:"Published",source:"Demo Dataset",ipcCodes:["A61K 36/00"],keywords:["herbal formulation","digestive","ayurveda"],abstract:"Illustrative patent record representing a plant-based formulation and its preparation process for digestive wellness applications."},{id:"PAT-002",publicationNumber:"IN-DEMO-002",title:"Polyherbal composition and preparation method",applicant:"Traditional Health Research Group",inventors:["R&D Division"],jurisdiction:"India",filingDate:"2020-08-11",publicationDate:"2022-02-17",status:"Published",source:"Demo Dataset",ipcCodes:["A61K 36/00","A61P 1/00"],keywords:["polyherbal","composition","preparation","plant extract"],abstract:"Illustrative patent record describing a multi-herb composition and a preparation process for a defined healthcare application."},{id:"PAT-003",publicationNumber:"IN-DEMO-003",title:"Standardised botanical extract formulation",applicant:"Herbal Research Institute",inventors:["Innovation Unit"],jurisdiction:"India",filingDate:"2019-06-04",publicationDate:"2021-12-09",status:"Granted",source:"Demo Dataset",ipcCodes:["A61K 36/00"],keywords:["botanical extract","standardisation","herbal"],abstract:"Illustrative patent record concerning standardisation of a botanical extract and its use in a formulated product."},{id:"PAT-004",publicationNumber:"IN-DEMO-004",title:"Ayurvedic topical herbal composition",applicant:"Ayurveda Product Research Centre",inventors:["Product Development Team"],jurisdiction:"India",filingDate:"2022-01-22",publicationDate:"2023-08-03",status:"Published",source:"Demo Dataset",ipcCodes:["A61K 36/00","A61Q 19/00"],keywords:["topical","herbal composition","ayurvedic","skin"],abstract:"Illustrative patent record for a topical plant-based composition and its intended application."},{id:"PAT-005",publicationNumber:"IN-DEMO-005",title:"Process for preparing a plant-based therapeutic formulation",applicant:"Natural Products Innovation Centre",inventors:["Process Research Team"],jurisdiction:"India",filingDate:"2018-11-14",publicationDate:"2020-05-21",status:"Granted",source:"Demo Dataset",ipcCodes:["A61K 36/00","A61K 9/00"],keywords:["plant based","therapeutic","formulation process","extraction"],abstract:"Illustrative patent record describing a preparation process involving plant-derived materials."}],ei={ingredients:30,formulation:25,therapeuticUse:20,abstract:15,classification:10};function gt(a=""){return String(a).toLowerCase().replace(/[^\w\s]/g," ").replace(/\s+/g," ").trim()}function qp(a=""){return gt(a).split(" ").filter(c=>c.length>2)}function hp(a=""){return[...new Set(qp(a))]}function fp(a,c){if(!a.length||!c.length)return 0;const l=new Set(c),p=a.filter(u=>l.has(u));return Math.round(new Set(p).size/new Set(a).size*100)}function xp(a=[],c=[]){const l=a.map(gt).filter(Boolean),p=c.map(gt).filter(Boolean);if(!l.length||!p.length)return 0;let u=0;return l.forEach(f=>{p.some(m=>m.includes(f)||f.includes(m))&&(u+=1)}),Math.round(u/l.length*100)}function qx(a=[],c=[]){if(!a.length||!c.length)return 0;const l=a.map(gt),p=c.filter(u=>l.some(f=>gt(u).startsWith(f)||f.startsWith(gt(u))));return Math.round(new Set(p.map(gt)).size/new Set(c.map(gt)).size*100)}function Qx(a,c){const l=fp(hp(a.ingredients),c.keywords||[]),p=xp([a.formulation],c.keywords||[]),u=xp([a.therapeuticUse],c.keywords||[]),f=fp(hp(`${a.title||""} ${a.description||""} ${a.formulation||""}`),qp(c.abstract)),m=qx(a.ipcCodes||[],c.ipcCodes||[]);return{ingredients:l,formulation:p,therapeuticUse:u,abstract:f,classification:m}}function Jx(a,c){const l=Qx(a,c),p=Math.round((l.ingredients*ei.ingredients+l.formulation*ei.formulation+l.therapeuticUse*ei.therapeuticUse+l.abstract*ei.abstract+l.classification*ei.classification)/100);return{patentId:c.id,publicationNumber:c.publicationNumber,title:c.title,score:Math.min(p,100),breakdown:l,source:c.source}}function Xx(a,c=[]){return c.map(l=>Jx(a,l)).sort((l,p)=>p.score-l.score)}function Zx(a){return a>=80?"High Similarity":a>=60?"Moderate Similarity":a>=40?"Potential Similarity":"Low Similarity"}function eg(a){const c=[];return a.breakdown.ingredients>=50&&c.push("Ingredient / keyword overlap detected"),a.breakdown.formulation>=50&&c.push("Formulation-related terms overlap"),a.breakdown.therapeuticUse>=50&&c.push("Application / use appears related"),a.breakdown.abstract>=50&&c.push("Technical description contains related terms"),a.breakdown.classification>=50&&c.push("Related patent classification detected"),c.length||c.push("Limited overlap detected in the current demo dataset"),c}function gp(a=""){return String(a).toLowerCase().trim()}function $n(a,c){return c?gp(a).includes(gp(c)):!0}function ng(a={}){const{keyword:c="",ingredient:l="",application:p="",ipc:u="",status:f="All",source:m="All"}=a;return Gp.filter(N=>{var O,z,k,I;const b=!c||$n(N.title,c)||$n(N.abstract,c)||((O=N.keywords)==null?void 0:O.some(V=>$n(V,c))),g=!l||((z=N.keywords)==null?void 0:z.some(V=>$n(V,l)))||$n(N.title,l),P=!p||$n(N.title,p)||$n(N.abstract,p)||((k=N.keywords)==null?void 0:k.some(V=>$n(V,p))),C=!u||((I=N.ipcCodes)==null?void 0:I.some(V=>$n(V,u))),A=f==="All"||N.status===f,T=m==="All"||N.source===m;return b&&g&&P&&C&&A&&T})}function tg(a,c={}){const l=ng(c);return Xx(a,l).map(u=>({...u,similarityLevel:Zx(u.score),reasons:eg(u)}))}function mp(a){return Gp.find(c=>c.id===a)||null}const Kn={innovation:"ayurveda_discover_innovation",innovations:"ayurveda_discover_innovations",evidence:"ayurveda_discover_evidence",bookmarks:"ayurveda_discover_bookmarks",searchHistory:"ayurveda_discover_search_history"};function ai(a,c=null){try{const l=localStorage.getItem(a);return l===null?c:JSON.parse(l)}catch(l){return console.error(`Storage read failed for ${a}:`,l),c}}function Ds(a,c){try{return localStorage.setItem(a,JSON.stringify(c)),!0}catch(l){return console.error(`Storage write failed for ${a}:`,l),!1}}function Qp(a){return Ds(Kn.innovation,a)}function rg(){return ai(Kn.innovation,null)}function ig(a){const c=ai(Kn.innovations,[]),l=[a,...c.filter(p=>p.id!==a.id)];return Ds(Kn.innovations,l)}function sg(a={}){return ai(Kn.evidence,a)}function ag(a=[]){return Ds(Kn.bookmarks,a)}function Jp(){return ai(Kn.bookmarks,[])}function og(a){const c=Jp(),p=c.includes(a)?c.filter(u=>u!==a):[...c,a];return ag(p),p}function lg(a){const c=ai(Kn.searchHistory,[]),p=[{...a,id:Date.now(),createdAt:new Date().toISOString()},...c].slice(0,20);return Ds(Kn.searchHistory,p)}const vp={keyword:"",ingredient:"",application:"",ipc:"",status:"All",source:"All"};function cg({innovation:a=Es}){const[c,l]=E.useState(vp),[p,u]=E.useState([]),[f,m]=E.useState(!1),[N,b]=E.useState(Jp()),[g,P]=E.useState(null),C=(I,V)=>{l(Q=>({...Q,[I]:V}))},A=I=>{I.preventDefault();const V=tg(a,c);u(V),m(!0),P(V[0]||null),lg({type:"prior-art",filters:c,resultCount:V.length})},T=()=>{l(vp),u([]),m(!1),P(null)},O=I=>{const V=og(I);b(V)},z=g?mp(g.patentId):null,k=E.useMemo(()=>{if(!p.length)return null;const I=p[0];return{total:p.length,highestScore:(I==null?void 0:I.score)||0,highestTitle:(I==null?void 0:I.title)||""}},[p]);return n.jsxs("main",{className:"page-content pa-page",children:[n.jsxs("section",{className:"pa-header",children:[n.jsx("div",{className:"pa-header-icon",children:n.jsx(Rn,{size:26})}),n.jsxs("div",{children:[n.jsx("span",{className:"pa-eyebrow",children:"STAGE 04 • PRIOR ART INTELLIGENCE"}),n.jsx("h1",{children:"Prior-Art & Patent Search"}),n.jsx("p",{children:"Discover potentially relevant patent records and compare them with your Ayurveda innovation before moving ahead."})]})]}),n.jsxs("section",{className:"pa-innovation",children:[n.jsx("div",{className:"pa-innovation-icon",children:n.jsx(lp,{size:24})}),n.jsxs("div",{className:"pa-innovation-content",children:[n.jsx("span",{children:"INNOVATION UNDER REVIEW"}),n.jsx("h2",{children:(a==null?void 0:a.title)||"Current Innovation"}),n.jsx("p",{children:(a==null?void 0:a.description)||"Search and compare your innovation against available patent records."})]}),n.jsxs("div",{className:"pa-status",children:[n.jsx(ce,{size:17}),"Preliminary Analysis"]})]}),n.jsxs("section",{className:"pa-flow",children:[n.jsxs("div",{className:"pa-flow-item active",children:[n.jsx("div",{className:"pa-flow-number",children:"01"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Your Innovation"}),n.jsx("span",{children:"Current idea"})]})]}),n.jsx(J,{className:"pa-flow-arrow",size:20}),n.jsxs("div",{className:"pa-flow-item",children:[n.jsx("div",{className:"pa-flow-number",children:"02"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Search"}),n.jsx("span",{children:"Prior-art records"})]})]}),n.jsx(J,{className:"pa-flow-arrow",size:20}),n.jsxs("div",{className:"pa-flow-item",children:[n.jsx("div",{className:"pa-flow-number",children:"03"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Compare"}),n.jsx("span",{children:"Similarity signals"})]})]}),n.jsx(J,{className:"pa-flow-arrow",size:20}),n.jsxs("div",{className:"pa-flow-item",children:[n.jsx("div",{className:"pa-flow-number",children:"04"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Assess"}),n.jsx("span",{children:"Next-step signals"})]})]})]}),n.jsxs("section",{className:"pa-search-card",children:[n.jsxs("div",{className:"pa-section-heading",children:[n.jsx("div",{className:"pa-heading-icon",children:n.jsx(Fe,{size:22})}),n.jsxs("div",{children:[n.jsx("span",{children:"PATENT DISCOVERY"}),n.jsx("h2",{children:"Search Existing Prior Art"}),n.jsx("p",{children:"Use keywords, ingredients, applications or classification codes to discover potentially related records."})]})]}),n.jsxs("form",{className:"pa-form",onSubmit:A,children:[n.jsxs("div",{className:"pa-field pa-keyword",children:[n.jsx("label",{children:"Keyword"}),n.jsx("input",{type:"text",value:c.keyword,onChange:I=>C("keyword",I.target.value),placeholder:"e.g. turmeric immunity formulation"}),n.jsx("small",{children:"Search using your innovation title or concept."})]}),n.jsxs("div",{className:"pa-form-row",children:[n.jsxs("div",{className:"pa-field",children:[n.jsx("label",{children:"Ingredient"}),n.jsx("input",{type:"text",value:c.ingredient,onChange:I=>C("ingredient",I.target.value),placeholder:"e.g. turmeric, ashwagandha"})]}),n.jsxs("div",{className:"pa-field",children:[n.jsx("label",{children:"Application / Use"}),n.jsx("input",{type:"text",value:c.application,onChange:I=>C("application",I.target.value),placeholder:"e.g. immunity, digestion"})]})]}),n.jsxs("div",{className:"pa-form-row",children:[n.jsxs("div",{className:"pa-field",children:[n.jsx("label",{children:"IPC / CPC Classification"}),n.jsx("input",{type:"text",value:c.ipc,onChange:I=>C("ipc",I.target.value),placeholder:"e.g. A61K"})]}),n.jsxs("div",{className:"pa-field",children:[n.jsx("label",{children:"Patent Status"}),n.jsxs("select",{value:c.status,onChange:I=>C("status",I.target.value),children:[n.jsx("option",{value:"All",children:"All Status"}),n.jsx("option",{value:"Active",children:"Active"}),n.jsx("option",{value:"Pending",children:"Pending"}),n.jsx("option",{value:"Granted",children:"Granted"}),n.jsx("option",{value:"Expired",children:"Expired"})]})]})]}),n.jsxs("div",{className:"pa-field pa-source",children:[n.jsx("label",{children:"Database / Source"}),n.jsxs("select",{value:c.source,onChange:I=>C("source",I.target.value),children:[n.jsx("option",{value:"All",children:"All Available Sources"}),n.jsx("option",{value:"Indian Patent Office",children:"Indian Patent Office"}),n.jsx("option",{value:"WIPO",children:"WIPO"}),n.jsx("option",{value:"USPTO",children:"USPTO"}),n.jsx("option",{value:"Google Patents",children:"Google Patents"})]})]}),n.jsxs("div",{className:"pa-form-actions",children:[n.jsxs("button",{type:"submit",className:"pa-search-button",children:[n.jsx(Fe,{size:17}),"Search Prior Art"]}),n.jsx("button",{type:"button",className:"pa-reset-button",onClick:T,children:"Reset"})]})]}),n.jsxs("div",{className:"pa-example-box",children:[n.jsx("div",{className:"pa-example-icon",children:n.jsx(fe,{size:16})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Example search"}),n.jsxs("p",{children:["Try: ",n.jsx("b",{children:"turmeric + immunity"}),",",n.jsx("b",{children:" Ashwagandha formulation"}),", or ",n.jsx("b",{children:"A61K"})]})]})]})]}),f&&k&&n.jsxs("section",{className:"pa-summary",children:[n.jsxs("div",{className:"pa-summary-card",children:[n.jsx(Yn,{size:21}),n.jsxs("div",{children:[n.jsx("span",{children:"RECORDS FOUND"}),n.jsx("strong",{children:k.total})]})]}),n.jsxs("div",{className:"pa-summary-card",children:[n.jsx(bn,{size:21}),n.jsxs("div",{children:[n.jsx("span",{children:"HIGHEST SIMILARITY"}),n.jsxs("strong",{children:[k.highestScore,"%"]})]})]}),n.jsxs("div",{className:"pa-summary-card",children:[n.jsx(As,{size:21}),n.jsxs("div",{children:[n.jsx("span",{children:"TOP MATCH"}),n.jsx("strong",{children:k.highestTitle||"No match"})]})]})]}),f&&n.jsxs("section",{className:"pa-results",children:[n.jsxs("div",{className:"pa-results-heading",children:[n.jsxs("div",{children:[n.jsx("span",{children:"DISCOVERED RECORDS"}),n.jsx("h2",{children:"Potential Prior Art"})]}),n.jsxs("div",{className:"pa-result-count",children:[p.length," records"]})]}),p.length===0?n.jsxs("div",{className:"pa-empty",children:[n.jsx("div",{className:"pa-empty-icon",children:n.jsx(Fe,{size:24})}),n.jsx("h3",{children:"No matching records found"}),n.jsx("p",{children:"Try broader keywords, ingredient names, application terms or classification codes."})]}):n.jsxs("div",{className:"pa-results-grid",children:[n.jsx("div",{className:"pa-result-list",children:p.map(I=>n.jsx("div",{className:`pa-result-wrapper ${(g==null?void 0:g.patentId)===I.patentId?"selected":""}`,onClick:()=>P(I),children:n.jsx($x,{result:I,patent:mp(I.patentId),isBookmarked:N.includes(I.patentId),onBookmark:O})},I.patentId))}),n.jsxs("aside",{className:"pa-intelligence-panel",children:[n.jsxs("div",{className:"pa-intel-title",children:[n.jsx(fe,{size:19}),n.jsxs("div",{children:[n.jsx("span",{children:"SIMILARITY INTELLIGENCE"}),n.jsx("h3",{children:"Why this record matters"})]})]}),g?n.jsx(Gx,{result:g,patent:z}):n.jsx("div",{className:"pa-select-message",children:"Select a patent record to inspect similarity signals."})]})]})]}),n.jsxs("section",{className:"pa-intelligence",children:[n.jsxs("div",{className:"pa-intel-header",children:[n.jsxs("div",{children:[n.jsx("span",{children:"PRIOR ART INTELLIGENCE"}),n.jsx("h2",{children:"From Search to Decision Support"})]}),n.jsx("p",{children:"The search helps identify relevant records, compare technical signals and plan the next IP investigation step."})]}),n.jsxs("div",{className:"pa-intel-grid",children:[n.jsxs("div",{className:"pa-intel-card",children:[n.jsx("div",{className:"pa-intel-icon",children:n.jsx(Fe,{size:21})}),n.jsx("span",{children:"01"}),n.jsx("h3",{children:"Discover"}),n.jsx("p",{children:"Find potentially relevant patent and prior-art records."})]}),n.jsxs("div",{className:"pa-intel-card",children:[n.jsx("div",{className:"pa-intel-icon",children:n.jsx(lp,{size:21})}),n.jsx("span",{children:"02"}),n.jsx("h3",{children:"Compare"}),n.jsx("p",{children:"Compare ingredients, use cases, classifications and technical signals."})]}),n.jsxs("div",{className:"pa-intel-card",children:[n.jsx("div",{className:"pa-intel-icon",children:n.jsx(bn,{size:21})}),n.jsx("span",{children:"03"}),n.jsx("h3",{children:"Identify Signals"}),n.jsx("p",{children:"Surface similarity indicators for preliminary analysis."})]}),n.jsxs("div",{className:"pa-intel-card",children:[n.jsx("div",{className:"pa-intel-icon",children:n.jsx(ie,{size:21})}),n.jsx("span",{children:"04"}),n.jsx("h3",{children:"Plan Next Step"}),n.jsx("p",{children:"Use the findings to decide what should be reviewed or investigated next."})]})]})]}),n.jsxs("section",{className:"pa-disclaimer",children:[n.jsx(cr,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Preliminary IP Intelligence"}),n.jsx("p",{children:"Similarity results are informational and should not be treated as a legal conclusion on novelty, patentability or infringement. Professional patent review may be required."})]})]}),n.jsx("style",{children:`

        * {
          box-sizing: border-box;
        }

        .pa-page {
          max-width: 1440px;
          margin: 0 auto;
          padding: 28px 34px 60px;
          color: #29483b;
        }


        /* HEADER */

        .pa-header {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .pa-header-icon {
          width: 54px;
          height: 54px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e3f2e9;
          color: #187d57;
          flex-shrink: 0;
        }

        .pa-eyebrow,
        .pa-section-heading span,
        .pa-results-heading span,
        .pa-intel-header span,
        .pa-intel-title span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #5c8371;
        }

        .pa-header h1 {
          margin: 5px 0 7px;
          font-size: 29px;
          line-height: 1.2;
          color: #183c2d;
        }

        .pa-header p {
          margin: 0;
          color: #71857c;
          font-size: 13px;
          line-height: 1.6;
        }


        /* INNOVATION */

        .pa-innovation {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 21px 24px;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            #174d39,
            #247455
          );
          color: white;
          margin-bottom: 22px;
          box-shadow: 0 10px 28px rgba(30, 91, 64, .13);
        }

        .pa-innovation-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(255,255,255,.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pa-innovation-content {
          flex: 1;
          min-width: 0;
        }

        .pa-innovation-content span {
          font-size: 9px;
          letter-spacing: 1.5px;
          font-weight: 800;
          opacity: .7;
        }

        .pa-innovation-content h2 {
          margin: 4px 0 4px;
          font-size: 18px;
        }

        .pa-innovation-content p {
          margin: 0;
          font-size: 11px;
          line-height: 1.5;
          opacity: .78;
        }

        .pa-status {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 13px;
          border-radius: 20px;
          background: rgba(255,255,255,.11);
          font-size: 10px;
          white-space: nowrap;
        }


        /* FLOW */

        .pa-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 13px;
          padding: 18px;
          margin-bottom: 24px;
          background: #f7faf8;
          border: 1px solid #e0ebe5;
          border-radius: 18px;
        }

        .pa-flow-item {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 13px;
          border-radius: 13px;
          background: white;
          border: 1px solid #e2ebe6;
        }

        .pa-flow-item.active {
          background: #edf8f1;
          border-color: #cce4d6;
        }

        .pa-flow-number {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e5f2e9;
          color: #187d57;
          font-size: 10px;
          font-weight: 800;
        }

        .pa-flow-item strong {
          display: block;
          font-size: 11px;
          color: #294b3c;
        }

        .pa-flow-item span {
          display: block;
          margin-top: 3px;
          color: #8a9a93;
          font-size: 9px;
        }

        .pa-flow-arrow {
          color: #91a99d;
        }


        /* SEARCH CARD */

        .pa-search-card {
          padding: 29px;
          border-radius: 22px;
          background: linear-gradient(
            135deg,
            #fffdf9,
            #f5faf7
          );
          border: 1px solid #dce9e1;
          box-shadow: 0 9px 26px rgba(48, 76, 61, .055);
          margin-bottom: 24px;
        }

        .pa-section-heading {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 25px;
        }

        .pa-heading-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #e3f3e9;
          color: #187d57;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pa-section-heading h2 {
          margin: 4px 0 5px;
          font-size: 19px;
          color: #244638;
        }

        .pa-section-heading p {
          margin: 0;
          color: #81938b;
          font-size: 11px;
          line-height: 1.55;
        }


        /* FORM */

        .pa-form {
          width: 100%;
          padding: 25px;
          border-radius: 17px;
          background: rgba(255,255,255,.9);
          border: 1px solid #d8e6de;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.8);
        }

        .pa-field {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .pa-keyword {
          margin-bottom: 21px;
        }

        .pa-form-row {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          margin-bottom: 21px;
        }

        .pa-source {
          margin-bottom: 22px;
          max-width: 50%;
        }

        .pa-field label {
          display: block;
          margin-bottom: 8px;
          color: #38594b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .4px;
        }

        .pa-field input,
        .pa-field select {
          width: 100%;
          height: 48px;
          padding: 0 14px;
          border-radius: 11px;
          border: 1px solid #ccdcd3;
          background: #fff;
          color: #29483b;
          font-size: 12px;
          outline: none;
          transition: .18s ease;
        }

        .pa-field input::placeholder {
          color: #a0ada7;
        }

        .pa-field input:focus,
        .pa-field select:focus {
          border-color: #53a87c;
          box-shadow: 0 0 0 3px rgba(83,168,124,.10);
        }

        .pa-field small {
          margin-top: 7px;
          color: #91a099;
          font-size: 9px;
        }


        /* BUTTONS */

        .pa-form-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 3px;
        }

        .pa-search-button,
        .pa-reset-button {
          height: 45px;
          border-radius: 11px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          transition: .18s ease;
        }

        .pa-search-button {
          background: #187d57;
          color: white;
          border: 1px solid #187d57;
          box-shadow: 0 6px 15px rgba(24,125,87,.15);
        }

        .pa-search-button:hover {
          background: #126b49;
          transform: translateY(-1px);
        }

        .pa-reset-button {
          background: #f5f8f6;
          color: #60786d;
          border: 1px solid #cfddd6;
        }

        .pa-reset-button:hover {
          background: #edf4ef;
        }


        /* EXAMPLE */

        .pa-example-box {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 23px;
          padding: 14px 17px;
          border-radius: 12px;
          background: #eef8f2;
          border: 1px solid #d5e9dc;
        }

        .pa-example-icon {
          width: 31px;
          height: 31px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: #3d956d;
          flex-shrink: 0;
        }

        .pa-example-box strong {
          display: block;
          margin-bottom: 3px;
          color: #416252;
          font-size: 10px;
        }

        .pa-example-box p {
          margin: 0;
          color: #758a80;
          font-size: 10px;
          line-height: 1.5;
        }


        /* SUMMARY */

        .pa-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 25px;
        }

        .pa-summary-card {
          min-height: 88px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 17px 19px;
          border-radius: 15px;
          background: white;
          border: 1px solid #dfebe4;
          box-shadow: 0 5px 15px rgba(45,75,59,.035);
        }

        .pa-summary-card > svg {
          color: #31926b;
        }

        .pa-summary-card span {
          display: block;
          color: #8a9b93;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .pa-summary-card strong {
          display: block;
          margin-top: 5px;
          color: #284b3c;
          font-size: 17px;
        }


        /* RESULTS */

        .pa-results {
          margin-bottom: 25px;
        }

        .pa-results-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .pa-results-heading h2 {
          margin: 5px 0 0;
          font-size: 19px;
          color: #29483b;
        }

        .pa-result-count {
          padding: 8px 12px;
          border-radius: 20px;
          background: #edf6f0;
          color: #4f7663;
          font-size: 10px;
          font-weight: 700;
        }

        .pa-results-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(320px, .75fr);
          gap: 22px;
          align-items: start;
        }

        .pa-result-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pa-result-wrapper {
          cursor: pointer;
          border-radius: 16px;
          transition: .18s ease;
        }

        .pa-result-wrapper.selected {
          box-shadow: 0 0 0 2px #55a77d;
        }

        .pa-intelligence-panel {
          padding: 22px;
          border-radius: 18px;
          background: linear-gradient(145deg,#f5faf7,#edf7f1);
          border: 1px solid #d6e7dc;
          position: sticky;
          top: 20px;
        }

        .pa-intel-title {
          display: flex;
          align-items: center;
          gap: 11px;
          padding-bottom: 17px;
          margin-bottom: 18px;
          border-bottom: 1px solid #dce9e1;
        }

        .pa-intel-title > svg {
          color: #299166;
        }

        .pa-intel-title h3 {
          margin: 4px 0 0;
          font-size: 14px;
          color: #315544;
        }

        .pa-select-message {
          padding: 24px 8px;
          text-align: center;
          color: #80938a;
          font-size: 11px;
          line-height: 1.6;
        }


        /* EMPTY */

        .pa-empty {
          padding: 45px 20px;
          text-align: center;
          border: 1px dashed #cadbd1;
          border-radius: 17px;
          background: #f8fbf9;
        }

        .pa-empty-icon {
          width: 45px;
          height: 45px;
          margin: 0 auto 13px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e7f3eb;
          color: #3b976e;
        }

        .pa-empty h3 {
          margin: 0 0 6px;
          color: #345545;
          font-size: 14px;
        }

        .pa-empty p {
          margin: 0;
          color: #82938b;
          font-size: 10px;
        }


        /* INTELLIGENCE */

        .pa-intelligence {
          padding: 30px;
          margin-top: 25px;
          border-radius: 22px;
          background: linear-gradient(
            135deg,
            #f5faf7,
            #edf7f1
          );
          border: 1px solid #d8e7df;
        }

        .pa-intel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 26px;
        }

        .pa-intel-header h2 {
          margin: 5px 0 0;
          color: #294c3c;
          font-size: 20px;
        }

        .pa-intel-header p {
          max-width: 480px;
          margin: 0;
          color: #788c83;
          font-size: 10px;
          line-height: 1.7;
        }

        .pa-intel-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 20px;
        }

        .pa-intel-card {
          position: relative;
          min-height: 165px;
          padding: 21px;
          border-radius: 17px;
          background: rgba(255,255,255,.92);
          border: 1px solid #dce8e0;
          box-shadow: 0 6px 17px rgba(42,75,58,.045);
          transition: .18s ease;
        }

        .pa-intel-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 11px 23px rgba(42,75,58,.09);
        }

        .pa-intel-card > span {
          position: absolute;
          top: 16px;
          right: 17px;
          color: #a0b0a8;
          font-size: 9px;
          font-weight: 800;
        }

        .pa-intel-icon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #e7f4eb;
          color: #318f68;
          margin-bottom: 13px;
        }

        .pa-intel-card h3 {
          margin: 0 0 8px;
          color: #365747;
          font-size: 13px;
        }

        .pa-intel-card p {
          margin: 0;
          color: #84958d;
          font-size: 10px;
          line-height: 1.65;
        }


        /* DISCLAIMER */

        .pa-disclaimer {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          padding: 15px 18px;
          border-radius: 13px;
          background: #fffaf0;
          border: 1px solid #eee2c9;
          color: #8b7855;
        }

        .pa-disclaimer > svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pa-disclaimer strong {
          font-size: 10px;
        }

        .pa-disclaimer p {
          margin: 4px 0 0;
          font-size: 9px;
          line-height: 1.6;
        }


        /* RESPONSIVE */

        @media (max-width: 1100px) {

          .pa-results-grid {
            grid-template-columns: 1fr;
          }

          .pa-intelligence-panel {
            position: static;
          }

          .pa-intel-grid {
            grid-template-columns: repeat(2,1fr);
          }

        }


        @media (max-width: 900px) {

          .pa-page {
            padding: 20px;
          }

          .pa-flow {
            grid-template-columns: 1fr 1fr;
          }

          .pa-flow-arrow {
            display: none;
          }

          .pa-form-row {
            grid-template-columns: 1fr;
          }

          .pa-source {
            max-width: 100%;
          }

          .pa-summary {
            grid-template-columns: 1fr;
          }

          .pa-intel-header {
            flex-direction: column;
            align-items: flex-start;
          }

        }


        @media (max-width: 600px) {

          .pa-page {
            padding: 15px;
          }

          .pa-header h1 {
            font-size: 23px;
          }

          .pa-innovation {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .pa-status {
            width: 100%;
          }

          .pa-flow {
            grid-template-columns: 1fr;
          }

          .pa-search-card {
            padding: 18px;
          }

          .pa-form {
            padding: 17px;
          }

          .pa-intel-grid {
            grid-template-columns: 1fr;
          }

          .pa-intelligence {
            padding: 20px;
          }

        }

      `})]})}function dg({result:a,patent:c}){const l=Number((a==null?void 0:a.score)??68),p=[{icon:an,title:"Ingredient Overlap",value:(a==null?void 0:a.ingredientScore)??72,text:"Similarity in ingredients"},{icon:bn,title:"Application Overlap",value:(a==null?void 0:a.applicationScore)??64,text:"Similarity in intended use"},{icon:As,title:"Classification Match",value:(a==null?void 0:a.classificationScore)??58,text:"IPC / CPC signal"},{icon:Ce,title:"Concept Similarity",value:(a==null?void 0:a.conceptScore)??l,text:"Overall technical concept"}];return n.jsxs("div",{className:"similarity-analysis",children:[n.jsxs("div",{className:"sim-main-score",children:[n.jsxs("div",{children:[n.jsx("span",{children:"OVERALL SIMILARITY"}),n.jsxs("div",{className:"sim-score-line",children:[n.jsxs("strong",{children:[l,"%"]}),n.jsxs("div",{children:[n.jsx("b",{children:l>=75?"High Similarity":l>=50?"Moderate Similarity":"Lower Similarity"}),n.jsx("small",{children:"Preliminary comparison signal"})]})]})]}),n.jsx("div",{className:"sim-circle",style:{"--score":`${l*3.6}deg`},children:n.jsxs("div",{children:[n.jsx("b",{children:l}),n.jsx("small",{children:"%"})]})})]}),n.jsxs("div",{className:"sim-record-box",children:[n.jsx("div",{className:"sim-record-icon",children:n.jsx(Ce,{size:18})}),n.jsxs("div",{children:[n.jsx("span",{children:"REFERENCE PATENT"}),n.jsx("h4",{children:(c==null?void 0:c.title)||(a==null?void 0:a.title)||"Ayurvedic Formulation / Herbal Innovation"}),n.jsx("small",{children:(c==null?void 0:c.patentId)||(a==null?void 0:a.patentId)||"Prior-art reference record"})]})]}),n.jsxs("div",{className:"sim-title",children:[n.jsx(fe,{size:16}),n.jsx("span",{children:"SIMILARITY SIGNALS"})]}),n.jsx("div",{className:"sim-signal-list",children:p.map(u=>{const f=u.icon;return n.jsxs("div",{className:"sim-signal-card",children:[n.jsxs("div",{className:"sim-signal-header",children:[n.jsxs("div",{className:"sim-signal-left",children:[n.jsx("div",{className:"sim-icon",children:n.jsx(f,{size:15})}),n.jsxs("div",{children:[n.jsx("strong",{children:u.title}),n.jsx("small",{children:u.text})]})]}),n.jsxs("b",{children:[u.value,"%"]})]}),n.jsx("div",{className:"sim-bar",children:n.jsx("div",{style:{width:`${Math.min(Math.max(u.value,0),100)}%`}})})]},u.title)})}),n.jsxs("div",{className:"sim-analysis-box",children:[l>=70?n.jsx(cr,{size:18}):n.jsx(ie,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Preliminary Interpretation"}),n.jsx("p",{children:l>=70?"The record shows notable similarity signals. Review the patent claims, technical features and publication details carefully.":"The available record shows comparatively lower similarity signals, but additional prior-art searching may still be useful."})]})]}),n.jsxs("div",{className:"sim-next-step",children:[n.jsx("div",{className:"sim-next-icon",children:n.jsx(bn,{size:16})}),n.jsxs("div",{children:[n.jsx("span",{children:"NEXT STEP"}),n.jsx("strong",{children:"Review patent claims & technical features"}),n.jsx("p",{children:"Compare ingredients, application, classification and claim-level information before drawing conclusions."})]})]}),n.jsx("style",{children:`

        .similarity-analysis {
          width: 100%;
        }

        /* SCORE */

        .sim-main-score {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            #e8f6ed,
            #f8fbf9
          );
          border: 1px solid #d5e7dc;
          margin-bottom: 15px;
        }

        .sim-main-score > div:first-child > span {
          display: block;
          color: #698879;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.1px;
          margin-bottom: 9px;
        }

        .sim-score-line {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sim-score-line > strong {
          color: #197653;
          font-size: 29px;
          line-height: 1;
        }

        .sim-score-line b {
          display: block;
          color: #3d6251;
          font-size: 10px;
        }

        .sim-score-line small {
          display: block;
          color: #8b9d94;
          font-size: 8px;
          margin-top: 3px;
        }


        /* CIRCLE */

        .sim-circle {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          background:
            conic-gradient(
              #29936a var(--score),
              #dbe9e1 0deg
            );
        }

        .sim-circle > div {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #34745b;
        }

        .sim-circle b {
          font-size: 12px;
        }

        .sim-circle small {
          font-size: 7px;
          margin-left: 1px;
        }


        /* RECORD */

        .sim-record-box {
          display: flex;
          gap: 11px;
          align-items: center;
          padding: 14px;
          border-radius: 13px;
          background: white;
          border: 1px solid #dce8e1;
          margin-bottom: 18px;
        }

        .sim-record-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #eaf5ee;
          color: #308c65;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sim-record-box span {
          display: block;
          color: #8a9b93;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .sim-record-box h4 {
          margin: 4px 0 3px;
          color: #365747;
          font-size: 10px;
          line-height: 1.4;
        }

        .sim-record-box small {
          color: #96a49e;
          font-size: 8px;
        }


        /* TITLE */

        .sim-title {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #557768;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 11px;
        }

        .sim-title svg {
          color: #3b9a70;
        }


        /* SIGNALS */

        .sim-signal-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sim-signal-card {
          padding: 12px;
          border-radius: 12px;
          background: white;
          border: 1px solid #e0eae4;
        }

        .sim-signal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .sim-signal-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sim-icon {
          width: 27px;
          height: 27px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #edf7f1;
          color: #348d67;
          flex-shrink: 0;
        }

        .sim-signal-left strong {
          display: block;
          color: #466455;
          font-size: 9px;
        }

        .sim-signal-left small {
          display: block;
          margin-top: 2px;
          color: #99a8a1;
          font-size: 7px;
        }

        .sim-signal-header > b {
          color: #287e5d;
          font-size: 10px;
        }

        .sim-bar {
          width: 100%;
          height: 5px;
          border-radius: 10px;
          background: #e6eee9;
          overflow: hidden;
        }

        .sim-bar > div {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            #72bd94,
            #27865f
          );
        }


        /* ANALYSIS */

        .sim-analysis-box {
          display: flex;
          gap: 9px;
          margin-top: 17px;
          padding: 13px;
          border-radius: 12px;
          background: #fffaf0;
          border: 1px solid #eee1c8;
          color: #8b7755;
        }

        .sim-analysis-box svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .sim-analysis-box strong {
          display: block;
          color: #806b4c;
          font-size: 9px;
        }

        .sim-analysis-box p {
          margin: 4px 0 0;
          color: #917e60;
          font-size: 8px;
          line-height: 1.6;
        }


        /* NEXT STEP */

        .sim-next-step {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          padding: 13px;
          border-radius: 12px;
          background: #f3faf6;
          border: 1px solid #dceae1;
        }

        .sim-next-icon {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: #e4f3e9;
          color: #328d67;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sim-next-step span {
          display: block;
          color: #8c9e95;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .sim-next-step strong {
          display: block;
          margin-top: 4px;
          color: #456556;
          font-size: 9px;
        }

        .sim-next-step p {
          margin: 3px 0 0;
          color: #899991;
          font-size: 8px;
          line-height: 1.5;
        }

      `})]})}const xt=[{id:"clinical",title:"Clinical Evidence",description:"Clinical studies supporting safety and effectiveness.",score:58,status:"Gap Found",priority:"High",action:"Add clinical study or validated clinical evidence.",icon:an},{id:"safety",title:"Safety Evidence",description:"Safety, toxicity and adverse-effect information.",score:72,status:"Partial",priority:"Medium",action:"Strengthen safety and toxicity documentation.",icon:ce},{id:"ingredient",title:"Ingredient Evidence",description:"Scientific and traditional evidence for key ingredients.",score:84,status:"Strong",priority:"Low",action:"Maintain citations for important ingredients.",icon:Rn},{id:"efficacy",title:"Efficacy Evidence",description:"Evidence supporting the claimed benefit or application.",score:61,status:"Gap Found",priority:"High",action:"Add stronger efficacy studies and supporting references.",icon:bn},{id:"regulatory",title:"Regulatory Evidence",description:"Evidence required for the intended regulatory pathway.",score:66,status:"Partial",priority:"Medium",action:"Map missing regulatory documents and requirements.",icon:Ss}],yp={clinical:{missingEvidence:"Clinical validation, human study results and documented safety/efficacy outcomes are currently limited.",recommendation:"Identify relevant clinical studies and collect validated evidence for the intended use.",sources:["Clinical research records","AYUSH research evidence"]},efficacy:{missingEvidence:"Stronger evidence connecting the formulation or innovation with the claimed benefit is required.",recommendation:"Collect efficacy studies, outcome measures and relevant published research.",sources:["Efficacy studies","Research publications"]},safety:{missingEvidence:"Safety documentation is partially available but additional toxicity or adverse-effect evidence may be required.",recommendation:"Strengthen safety documentation with validated studies and relevant references.",sources:["Safety studies","Toxicity research"]},ingredient:{missingEvidence:"No major evidence gap is detected for the current ingredient evidence layer.",recommendation:"Continue maintaining reliable references for key ingredients.",sources:["Traditional knowledge","Research literature"]},regulatory:{missingEvidence:"Some regulatory supporting documents and pathway-specific evidence may still be required.",recommendation:"Map the intended regulatory pathway and collect the corresponding documentation.",sources:["Regulatory guidance","Official requirements"]}};function pg(){var O;const[a,c]=E.useState(""),[l,p]=E.useState(null),[u,f]=E.useState(null),[m,N]=E.useState(!1),b=E.useMemo(()=>{const z=a.toLowerCase().trim();return z?xt.filter(k=>k.title.toLowerCase().includes(z)||k.description.toLowerCase().includes(z)||k.priority.toLowerCase().includes(z)):xt},[a]),g=Math.round(xt.reduce((z,k)=>z+k.score,0)/xt.length),P=xt.filter(z=>z.priority==="High").length,C=xt.filter(z=>z.status==="Strong").length,A=async z=>{p(z),f(null),N(!0);try{const k=await fetch(`http://localhost:4000/api/evidence-gap/${z.id}`);if(!k.ok)throw new Error("Backend response failed");const I=await k.json();f({...z,...I})}catch(k){console.warn("Evidence backend unavailable:",k),f({...z,...yp[z.id]||{}})}finally{N(!1)}},T=()=>{p(null),f(null),N(!1)};return n.jsxs("main",{className:"eg-page",children:[n.jsxs("section",{className:"eg-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eg-eyebrow",children:"STAGE 08 • EVIDENCE INTELLIGENCE"}),n.jsx("h1",{children:"Evidence Gap Analysis"}),n.jsx("p",{children:"Identify missing evidence, assess evidence readiness and understand what is required before moving toward IP and regulatory decisions."})]}),n.jsxs("div",{className:"eg-header-badge",children:[n.jsx(fe,{size:16}),"Evidence-Grounded Analysis"]})]}),n.jsxs("section",{className:"eg-overview",children:[n.jsxs("div",{className:"eg-score-card",children:[n.jsx("div",{className:"eg-score-circle",children:n.jsxs("div",{children:[n.jsx("strong",{children:g}),n.jsx("span",{children:"/100"})]})}),n.jsxs("div",{className:"eg-score-content",children:[n.jsx("span",{className:"eg-small-label",children:"OVERALL READINESS"}),n.jsx("h2",{children:"Evidence Readiness"}),n.jsx("p",{children:"Your innovation has a developing evidence base, but some important evidence gaps should be addressed before final decisions."}),n.jsx("div",{className:"eg-progress",children:n.jsx("span",{style:{width:`${g}%`}})})]})]}),n.jsxs("div",{className:"eg-mini-grid",children:[n.jsxs("div",{className:"eg-mini-card",children:[n.jsx(cr,{size:20}),n.jsx("strong",{children:P}),n.jsx("span",{children:"High Priority Gaps"})]}),n.jsxs("div",{className:"eg-mini-card",children:[n.jsx(ie,{size:20}),n.jsx("strong",{children:C}),n.jsx("span",{children:"Strong Evidence Areas"})]}),n.jsxs("div",{className:"eg-mini-card",children:[n.jsx(Rn,{size:20}),n.jsx("strong",{children:xt.length}),n.jsx("span",{children:"Evidence Dimensions"})]})]})]}),n.jsxs("section",{className:"eg-search-box",children:[n.jsxs("div",{className:"eg-search-title",children:[n.jsx("div",{className:"eg-icon",children:n.jsx(Rn,{size:20})}),n.jsxs("div",{children:[n.jsx("span",{className:"eg-small-label",children:"EVIDENCE DISCOVERY"}),n.jsx("h2",{children:"Check Evidence Gaps"}),n.jsx("p",{children:"Search an evidence dimension to quickly identify missing areas."})]})]}),n.jsxs("div",{className:"eg-search",children:[n.jsx(Rn,{size:18}),n.jsx("input",{value:a,onChange:z=>c(z.target.value),placeholder:"Search clinical, safety, efficacy, regulatory..."}),a&&n.jsx("button",{className:"eg-clear-search",onClick:()=>c(""),children:n.jsx(ri,{size:15})})]})]}),n.jsxs("section",{className:"eg-section",children:[n.jsxs("div",{className:"eg-section-head",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eg-small-label",children:"EVIDENCE MATRIX"}),n.jsx("h2",{children:"Evidence Coverage"})]}),n.jsxs("span",{className:"eg-count",children:[b.length," areas"]})]}),n.jsx("div",{className:"eg-grid",children:b.map(z=>{const k=z.icon;return n.jsxs("article",{className:"eg-card",onClick:()=>A(z),children:[n.jsxs("div",{className:"eg-card-top",children:[n.jsx("div",{className:"eg-card-icon",children:n.jsx(k,{size:21})}),n.jsx("span",{className:`eg-priority eg-${z.priority.toLowerCase()}`,children:z.priority})]}),n.jsx("h3",{children:z.title}),n.jsx("p",{children:z.description}),n.jsxs("div",{className:"eg-score-row",children:[n.jsx("span",{children:"Evidence strength"}),n.jsxs("strong",{children:[z.score,"%"]})]}),n.jsx("div",{className:"eg-bar",children:n.jsx("span",{style:{width:`${z.score}%`}})}),n.jsxs("div",{className:"eg-status",children:[z.status==="Strong"?n.jsx(ie,{size:15}):n.jsx(cr,{size:15}),n.jsx("span",{children:z.status})]}),n.jsxs("div",{className:"eg-action",children:[n.jsx("span",{children:"Recommended next step"}),n.jsx("p",{children:z.action})]}),n.jsxs("div",{className:"eg-card-open",children:["View Analysis",n.jsx(J,{size:14})]})]},z.id)})})]}),n.jsxs("section",{className:"eg-gap-panel",children:[n.jsxs("div",{className:"eg-gap-heading",children:[n.jsx("div",{className:"eg-gap-icon",children:n.jsx(cr,{size:22})}),n.jsxs("div",{children:[n.jsx("span",{className:"eg-small-label",children:"GAP INTELLIGENCE"}),n.jsx("h2",{children:"What Evidence Is Missing?"}),n.jsx("p",{children:"Click an evidence gap to open detailed analysis."})]})]}),n.jsx("div",{className:"eg-gap-list",children:xt.filter(z=>z.priority==="High").map((z,k)=>n.jsxs("button",{className:"eg-gap-item",onClick:()=>A(z),children:[n.jsxs("div",{className:"eg-gap-number",children:["0",k+1]}),n.jsxs("div",{className:"eg-gap-text",children:[n.jsx("strong",{children:z.title}),n.jsx("span",{children:z.action})]}),n.jsx(J,{size:18})]},z.id))}),l&&n.jsxs("div",{className:"eg-detail-panel",children:[n.jsxs("div",{className:"eg-detail-head",children:[n.jsxs("div",{className:"eg-detail-title",children:[n.jsx("div",{className:"eg-detail-icon",children:l.icon&&(()=>{const z=l.icon;return n.jsx(z,{size:19})})()}),n.jsxs("div",{children:[n.jsx("span",{className:"eg-small-label",children:"EVIDENCE DETAIL"}),n.jsx("h3",{children:l.title})]})]}),n.jsx("button",{className:"eg-close",onClick:T,"aria-label":"Close evidence details",children:n.jsx(ri,{size:17})})]}),m?n.jsxs("div",{className:"eg-loading",children:[n.jsx(fe,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Fetching evidence analysis..."}),n.jsx("span",{children:"Connecting to evidence intelligence service"})]})]}):n.jsxs("div",{className:"eg-detail-content",children:[n.jsxs("div",{className:"eg-detail-top",children:[n.jsxs("div",{className:"eg-detail-score",children:[n.jsx("span",{children:"Evidence Strength"}),n.jsxs("strong",{children:[(u==null?void 0:u.score)??l.score,"%"]}),n.jsx("div",{className:"eg-detail-bar",children:n.jsx("span",{style:{width:`${(u==null?void 0:u.score)??l.score}%`}})})]}),n.jsxs("div",{className:"eg-detail-priority",children:[n.jsx("span",{children:"Priority"}),n.jsx("strong",{children:(u==null?void 0:u.priority)??l.priority})]}),n.jsxs("div",{className:"eg-detail-status",children:[n.jsx("span",{children:"Status"}),n.jsx("strong",{children:(u==null?void 0:u.status)??l.status})]})]}),n.jsxs("div",{className:"eg-detail-grid",children:[n.jsxs("div",{className:"eg-detail-box eg-detail-wide",children:[n.jsx("span",{children:"WHAT IS MISSING?"}),n.jsx("p",{children:(u==null?void 0:u.missingEvidence)||l.action})]}),n.jsxs("div",{className:"eg-detail-box eg-detail-wide",children:[n.jsx("span",{children:"RECOMMENDED NEXT STEP"}),n.jsx("p",{children:(u==null?void 0:u.recommendation)||l.action})]}),n.jsxs("div",{className:"eg-detail-box",children:[n.jsx("span",{children:"RELEVANT SOURCES"}),n.jsx("div",{className:"eg-source-list",children:((u==null?void 0:u.sources)||((O=yp[l.id])==null?void 0:O.sources)||[]).map((z,k)=>n.jsxs("div",{className:"eg-source",children:[n.jsx(ie,{size:13}),z]},k))})]}),n.jsxs("div",{className:"eg-detail-box",children:[n.jsx("span",{children:"ANALYSIS NOTE"}),n.jsx("p",{children:"This analysis identifies evidence areas that may require strengthening. Final scientific, regulatory and legal assessment should use verified sources and expert review."})]})]})]})]})]}),n.jsxs("section",{className:"eg-journey",children:[n.jsxs("div",{className:"eg-journey-title",children:[n.jsx("span",{className:"eg-small-label",children:"NEXT STEP"}),n.jsx("h2",{children:"Evidence Readiness Journey"})]}),n.jsxs("div",{className:"eg-journey-grid",children:[n.jsxs("div",{className:"eg-step active",children:[n.jsx("span",{children:"01"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Discover"}),n.jsx("small",{children:"Find available evidence"})]})]}),n.jsx(J,{size:18}),n.jsxs("div",{className:"eg-step",children:[n.jsx("span",{children:"02"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Identify Gaps"}),n.jsx("small",{children:"Detect missing evidence"})]})]}),n.jsx(J,{size:18}),n.jsxs("div",{className:"eg-step",children:[n.jsx("span",{children:"03"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Strengthen"}),n.jsx("small",{children:"Add supporting studies"})]})]}),n.jsx(J,{size:18}),n.jsxs("div",{className:"eg-step",children:[n.jsx("span",{children:"04"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Reassess"}),n.jsx("small",{children:"Measure readiness again"})]})]})]})]}),n.jsxs("div",{className:"eg-disclaimer",children:[n.jsx(ce,{size:16}),"Evidence-gap analysis is an informational decision-support layer and does not replace scientific, regulatory or legal expert review."]}),n.jsx("style",{children:`

        .eg-page {
          min-height: 100%;
          padding: 28px 32px 42px;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(214,232,220,.45),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #f7faf7,
              #eef5f0
            );
          color: #29483a;
        }

        /* HEADER */

        .eg-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 25px;
          margin-bottom: 24px;
        }

        .eg-eyebrow,
        .eg-small-label {
          display: block;
          color: #658073;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .13em;
        }

        .eg-header h1 {
          margin: 7px 0;
          font-size: 28px;
          color: #183f30;
        }

        .eg-header p {
          max-width: 720px;
          margin: 0;
          font-size: 12px;
          line-height: 1.7;
          color: #6b8076;
        }

        .eg-header-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 15px;
          border-radius: 12px;
          background: #e4f0e8;
          color: #35634d;
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* OVERVIEW */

        .eg-overview {
          display: grid;
          grid-template-columns: 1.7fr 1fr;
          gap: 18px;
          margin-bottom: 24px;
        }

        .eg-score-card {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            #173f2f,
            #285b46
          );
          color: white;
          box-shadow:
            0 12px 30px rgba(36,76,57,.13);
        }

        .eg-score-circle {
          width: 115px;
          height: 115px;
          flex: 0 0 115px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background:
            conic-gradient(
              #b9ddc8 0deg 260deg,
              rgba(255,255,255,.14) 260deg 360deg
            );
        }

        .eg-score-circle > div {
          width: 88px;
          height: 88px;
          display: grid;
          place-content: center;
          text-align: center;
          border-radius: 50%;
          background: #214e3b;
        }

        .eg-score-circle strong {
          font-size: 27px;
        }

        .eg-score-circle span {
          font-size: 9px;
          opacity: .7;
        }

        .eg-score-content h2 {
          margin: 5px 0 7px;
          font-size: 20px;
        }

        .eg-score-content p {
          max-width: 470px;
          margin: 0 0 14px;
          color: #d4e4db;
          font-size: 11px;
          line-height: 1.6;
        }

        .eg-progress,
        .eg-bar {
          overflow: hidden;
          height: 7px;
          border-radius: 20px;
          background: #dce8e1;
        }

        .eg-progress {
          max-width: 470px;
          background: rgba(255,255,255,.18);
        }

        .eg-progress span,
        .eg-bar span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: #a8d6ba;
        }

        .eg-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .eg-mini-card {
          padding: 18px;
          border: 1px solid #dce8e0;
          border-radius: 17px;
          background: rgba(255,255,255,.8);
          box-shadow:
            0 6px 18px rgba(41,72,58,.05);
        }

        .eg-mini-card svg {
          color: #567966;
          margin-bottom: 13px;
        }

        .eg-mini-card strong {
          display: block;
          font-size: 23px;
          color: #214b38;
        }

        .eg-mini-card span {
          font-size: 10px;
          color: #789087;
        }

        /* SEARCH */

        .eg-search-box {
          padding: 22px 24px;
          margin-bottom: 26px;
          border: 1px solid #d9e6df;
          border-radius: 19px;
          background: rgba(255,255,255,.84);
        }

        .eg-search-title {
          display: flex;
          gap: 13px;
          align-items: center;
          margin-bottom: 17px;
        }

        .eg-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #3e7057;
          background: #e5f1e9;
        }

        .eg-search-title h2,
        .eg-section-head h2,
        .eg-gap-heading h2,
        .eg-journey-title h2 {
          margin: 4px 0 0;
          color: #244c3a;
          font-size: 18px;
        }

        .eg-search-title p {
          margin: 4px 0 0;
          color: #7b8e85;
          font-size: 10px;
        }

        .eg-search {
          height: 47px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 15px;
          border: 1px solid #ceded5;
          border-radius: 12px;
          background: white;
        }

        .eg-search svg {
          color: #759184;
        }

        .eg-search input {
          width: 100%;
          border: 0;
          outline: 0;
          font-size: 12px;
          color: #29483a;
          background: transparent;
        }

        .eg-clear-search {
          border: 0;
          background: transparent;
          color: #82968b;
          cursor: pointer;
        }

        /* MATRIX */

        .eg-section {
          margin-bottom: 25px;
        }

        .eg-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .eg-count {
          padding: 7px 11px;
          border-radius: 9px;
          background: #e5f0e9;
          color: #527563;
          font-size: 10px;
          font-weight: 800;
        }

        .eg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .eg-card {
          position: relative;
          padding: 19px;
          border: 1px solid #dce7e1;
          border-radius: 17px;
          background: rgba(255,255,255,.88);
          box-shadow:
            0 6px 17px rgba(37,70,54,.045);
          cursor: pointer;
          transition: .2s ease;
        }

        .eg-card:hover {
          transform: translateY(-3px);
          border-color: #bfd8c8;
          box-shadow:
            0 11px 24px rgba(37,70,54,.09);
        }

        .eg-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .eg-card-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #3e7057;
          background: #e5f1e9;
        }

        .eg-priority {
          padding: 5px 8px;
          border-radius: 7px;
          font-size: 9px;
          font-weight: 800;
        }

        .eg-high {
          background: #fff0d9;
          color: #a46721;
        }

        .eg-medium {
          background: #edf2df;
          color: #71823f;
        }

        .eg-low {
          background: #e2f1e7;
          color: #427257;
        }

        .eg-card h3 {
          margin: 15px 0 6px;
          font-size: 14px;
          color: #294d3c;
        }

        .eg-card > p {
          min-height: 34px;
          margin: 0 0 17px;
          color: #7a8e84;
          font-size: 10px;
          line-height: 1.6;
        }

        .eg-score-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 7px;
          font-size: 9px;
          color: #71857b;
        }

        .eg-score-row strong {
          color: #37634e;
        }

        .eg-status {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 11px;
          font-size: 9px;
          font-weight: 800;
          color: #527160;
        }

        .eg-action {
          margin-top: 15px;
          padding: 11px;
          border-radius: 10px;
          background: #f5f8f5;
        }

        .eg-action span {
          font-size: 8px;
          color: #82958c;
          text-transform: uppercase;
          letter-spacing: .08em;
          font-weight: 800;
        }

        .eg-action p {
          margin: 5px 0 0;
          color: #486657;
          font-size: 9px;
          line-height: 1.5;
        }

        .eg-card-open {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 5px;
          margin-top: 12px;
          color: #4a745d;
          font-size: 9px;
          font-weight: 800;
        }

        /* GAP PANEL */

        .eg-gap-panel {
          padding: 24px;
          margin-bottom: 23px;
          border-radius: 20px;
          border: 1px solid #eadfc9;
          background:
            linear-gradient(
              135deg,
              #fffdf8,
              #f7f9f3
            );
        }

        .eg-gap-heading {
          display: flex;
          gap: 13px;
          align-items: center;
          margin-bottom: 20px;
        }

        .eg-gap-icon {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #a26b28;
          background: #fff0d9;
        }

        .eg-gap-heading p {
          margin: 5px 0 0;
          font-size: 10px;
          color: #7d8b7d;
        }

        .eg-gap-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .eg-gap-item {
          width: 100%;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 14px;
          border: 1px solid #eadfca;
          border-radius: 13px;
          background: rgba(255,255,255,.8);
          text-align: left;
          cursor: pointer;
          transition: .2s ease;
        }

        .eg-gap-item:hover {
          transform: translateY(-2px);
          border-color: #d5c69f;
          background: white;
          box-shadow:
            0 7px 18px rgba(87,75,44,.07);
        }

        .eg-gap-number {
          width: 33px;
          height: 33px;
          flex: 0 0 33px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: #f8e8cb;
          color: #a16b2b;
          font-size: 9px;
          font-weight: 900;
        }

        .eg-gap-text {
          flex: 1;
          min-width: 0;
        }

        .eg-gap-text strong {
          display: block;
          color: #4b543f;
          font-size: 11px;
        }

        .eg-gap-text span {
          display: block;
          margin-top: 3px;
          color: #8a9181;
          font-size: 9px;
          line-height: 1.4;
        }

        .eg-gap-item > svg {
          flex: 0 0 auto;
          color: #9a987f;
        }

        /* DETAIL PANEL */

        .eg-detail-panel {
          margin-top: 19px;
          padding: 20px;
          border: 1px solid #d5e4db;
          border-radius: 17px;
          background:
            linear-gradient(
              135deg,
              #ffffff,
              #f5faf7
            );
          animation: egOpen .22s ease;
        }

        @keyframes egOpen {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .eg-detail-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .eg-detail-title {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .eg-detail-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          color: #3e7057;
          background: #e5f1e9;
        }

        .eg-detail-head h3 {
          margin: 5px 0 0;
          color: #294d3c;
          font-size: 16px;
        }

        .eg-close {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 8px;
          background: #e7f0ea;
          color: #4b6d5b;
          cursor: pointer;
        }

        .eg-close:hover {
          background: #dcebe2;
        }

        .eg-loading {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 22px;
          color: #527561;
          border-radius: 11px;
          background: #f3f8f5;
          font-size: 11px;
        }

        .eg-loading strong {
          display: block;
          font-size: 11px;
        }

        .eg-loading span {
          display: block;
          margin-top: 3px;
          color: #84968d;
          font-size: 9px;
        }

        .eg-detail-content {
          width: 100%;
        }

        .eg-detail-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 13px;
        }

        .eg-detail-score,
        .eg-detail-priority,
        .eg-detail-status {
          padding: 14px;
          border-radius: 12px;
          border: 1px solid #e0eae4;
          background: #f8faf9;
        }

        .eg-detail-score span,
        .eg-detail-priority span,
        .eg-detail-status span {
          display: block;
          margin-bottom: 7px;
          color: #80928a;
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .eg-detail-score strong,
        .eg-detail-priority strong,
        .eg-detail-status strong {
          color: #315a46;
          font-size: 16px;
        }

        .eg-detail-bar {
          height: 5px;
          overflow: hidden;
          margin-top: 9px;
          border-radius: 20px;
          background: #dce8e1;
        }

        .eg-detail-bar span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: #83b798;
        }

        .eg-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .eg-detail-box {
          padding: 15px;
          border-radius: 12px;
          background: #f7faf8;
          border: 1px solid #e1ebe5;
        }

        .eg-detail-wide {
          grid-column: 1 / -1;
        }

        .eg-detail-box > span {
          display: block;
          margin-bottom: 7px;
          color: #7b9085;
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .eg-detail-box p {
          margin: 0;
          color: #536c5e;
          font-size: 10px;
          line-height: 1.65;
        }

        .eg-source-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .eg-source {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #536c5e;
          font-size: 9px;
        }

        .eg-source svg {
          color: #57916e;
        }

        /* JOURNEY */

        .eg-journey {
          padding: 23px;
          border-radius: 19px;
          background: #edf5ef;
          border: 1px solid #d9e7dd;
        }

        .eg-journey-grid {
          display: grid;
          grid-template-columns:
            1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 11px;
          margin-top: 18px;
        }

        .eg-step {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px;
          border-radius: 12px;
          background: white;
          border: 1px solid #dce8e0;
        }

        .eg-step > span {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #e5f0e9;
          color: #47715a;
          font-size: 8px;
          font-weight: 900;
        }

        .eg-step strong {
          display: block;
          font-size: 10px;
          color: #345744;
        }

        .eg-step small {
          display: block;
          margin-top: 3px;
          color: #87978f;
          font-size: 8px;
        }

        .eg-step.active {
          border-color: #b9d6c4;
          box-shadow:
            0 4px 12px rgba(52,91,68,.06);
        }

        .eg-journey-grid > svg {
          color: #779084;
        }

        .eg-disclaimer {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 16px;
          color: #82938b;
          font-size: 9px;
        }

        /* RESPONSIVE */

        @media (max-width: 1050px) {

          .eg-overview {
            grid-template-columns: 1fr;
          }

          .eg-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .eg-journey-grid {
            grid-template-columns: 1fr 1fr;
          }

          .eg-journey-grid > svg {
            display: none;
          }

          .eg-detail-top {
            grid-template-columns: 1fr 1fr;
          }

        }

        @media (max-width: 700px) {

          .eg-page {
            padding: 20px 15px;
          }

          .eg-header {
            flex-direction: column;
          }

          .eg-mini-grid,
          .eg-grid,
          .eg-gap-list,
          .eg-journey-grid,
          .eg-detail-grid,
          .eg-detail-top {
            grid-template-columns: 1fr;
          }

          .eg-score-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .eg-detail-wide {
            grid-column: auto;
          }

        }

      `})]})}function Cs({value:a=0,label:c,showValue:l=!0,size:p="medium"}){const u=Math.min(Math.max(Number(a)||0,0),100);return n.jsxs("div",{className:`progress-wrapper progress-${p}`,children:[(c||l)&&n.jsxs("div",{className:"progress-header",children:[c&&n.jsx("span",{children:c}),l&&n.jsxs("strong",{children:[u,"%"]})]}),n.jsx("div",{className:"progress-track",children:n.jsx("div",{className:"progress-fill",style:{width:`${u}%`}})})]})}const ug={traditionalKnowledge:"Found",priorArt:"Partial",scientificEvidence:"Partial",safetyEvidence:"Missing",qualityStandardisation:"Missing",regulatoryInformation:"Partial",ipDocumentation:"Partial"},jp=(a,c=0,l=100)=>Math.min(Math.max(a,c),l);function hg(a=""){return String(a).trim()}function fg(a={}){const c=["traditionalKnowledge","priorArt","scientificEvidence","safetyEvidence","qualityStandardisation","regulatoryInformation","ipDocumentation"];let l=0;return c.forEach(p=>{const u=hg(a[p]);u==="Found"?l+=100:u==="Partial"&&(l+=50)}),c.length?Math.round(l/c.length):0}function xg({innovation:a={},evidence:c={},similarityResults:l=[]}={}){var P;const p=fg(c),u=l.length>0?Math.max(...l.map(C=>C.score||0)):0,f=[a.title,a.description,a.ingredients,a.formulation,a.therapeuticUse,(P=a.ipcCodes)==null?void 0:P.length].filter(Boolean).length,m=Math.round(f/6*100),N=jp(100-u),b=Math.round(p*.4+N*.3+m*.3);let g="Early Stage";return b>=80?g="Strong Preparation":b>=60?g="Moderate Preparation":b>=40&&(g="Developing"),{score:jp(b),level:g,evidenceScore:p,priorArtScore:N,completenessScore:m,highestSimilarity:u,disclaimer:"Preliminary readiness indicator based on the available demo data. It is not a legal opinion or a guarantee of patent grant."}}function gg(a=0){return a>=80?"Ready for Professional Review":a>=60?"Needs Some Evidence":a>=40?"Needs Development":"Early Stage"}function mg({innovation:a=Es,similarityResults:c=[],evidence:l,onContinue:p}){const u=l||sg(ug),f=E.useMemo(()=>{const g=xg({innovation:a||Es,evidence:u,similarityResults:c});return{...g,nextStep:g.score<60?"Strengthen the innovation description, supporting evidence and technical documentation.":"Review the preparation record with a qualified IP professional before filing."}},[a,u,c]),m=gg(f.score),N=[{label:"Evidence Readiness",value:f.evidenceScore,description:"Traditional knowledge, research, safety, quality and regulatory documentation.",icon:hn},{label:"Prior-Art Position",value:f.priorArtScore,description:"Indicator based on the highest similarity found in the available dataset.",icon:Yn},{label:"Documentation Completeness",value:f.completenessScore,description:"Completeness of the current innovation description and technical details.",icon:Ce}],b=["Innovation description documented","Traditional knowledge references reviewed","Relevant prior-art records identified","Scientific evidence organised","Safety and quality evidence reviewed","Technical documentation prepared"];return n.jsxs("main",{className:"page-content ipr-page",children:[n.jsx(si,{eyebrow:"STAGE 07 • IP READINESS",title:"Preliminary IP Readiness",description:"Review your innovation's evidence, prior-art position and documentation before moving into IP protection strategy.",icon:ce}),n.jsxs("section",{className:"ipr-hero",children:[n.jsxs("div",{className:"ipr-hero-left",children:[n.jsx("div",{className:"ipr-hero-icon",children:n.jsx(fe,{size:24})}),n.jsxs("div",{children:[n.jsx("span",{className:"ipr-eyebrow",children:"PRELIMINARY IP ASSESSMENT"}),n.jsx("h2",{children:(a==null?void 0:a.title)||"Current Innovation"}),n.jsx("p",{children:"A transparent preparation indicator based on your innovation details, evidence and available prior-art similarity results."})]})]}),n.jsxs("div",{className:"ipr-stage",children:[n.jsx("span",{children:"Current Stage"}),n.jsx("strong",{children:m})]})]}),n.jsxs("section",{className:"ipr-score-layout",children:[n.jsxs("div",{className:"ipr-score-card",children:[n.jsxs("div",{className:"ipr-score-top",children:[n.jsxs("div",{children:[n.jsx("span",{className:"ipr-eyebrow",children:"IP READINESS SCORE"}),n.jsx("h2",{children:"Preparation Readiness"}),n.jsx("p",{children:"Overall indicator generated from the current project records."})]}),n.jsx("div",{className:"ipr-score-circle",children:n.jsx("div",{className:"ipr-score-ring",style:{"--score-angle":`${Math.max(0,Math.min(100,f.score))*3.6}deg`},children:n.jsxs("div",{className:"ipr-score-inner",children:[n.jsxs("strong",{children:[f.score,"%"]}),n.jsx("span",{children:"READY"})]})})})]}),n.jsxs("div",{className:"ipr-score-status",children:[n.jsx("div",{className:"ipr-status-dot"}),n.jsx("span",{children:m})]}),n.jsxs("div",{className:"ipr-score-message",children:[n.jsx(bn,{size:18}),n.jsx("p",{children:f.nextStep})]})]}),n.jsxs("section",{className:"ipr-factor-panel",children:[n.jsxs("div",{className:"ipr-panel-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"ipr-eyebrow",children:"READINESS BREAKDOWN"}),n.jsx("h2",{children:"Preparation Factors"})]}),n.jsx(ce,{size:20})]}),n.jsx("div",{className:"ipr-factor-list",children:N.map(g=>{const P=g.icon;return n.jsxs("article",{className:"ipr-factor",children:[n.jsx("div",{className:"ipr-factor-icon",children:n.jsx(P,{size:19})}),n.jsxs("div",{className:"ipr-factor-body",children:[n.jsxs("div",{className:"ipr-factor-title",children:[n.jsx("h3",{children:g.label}),n.jsxs("strong",{children:[g.value,"%"]})]}),n.jsx(Cs,{value:g.value,showValue:!1,size:"small"}),n.jsx("p",{children:g.description})]})]},g.label)})})]})]}),n.jsxs("section",{className:"ipr-journey",children:[n.jsx("div",{className:"ipr-section-head",children:n.jsxs("div",{children:[n.jsx("span",{className:"ipr-eyebrow",children:"IP PREPARATION JOURNEY"}),n.jsx("h2",{children:"From Innovation to IP Protection"}),n.jsx("p",{children:"Complete the important preparation layers before moving towards professional IP strategy."})]})}),n.jsxs("div",{className:"ipr-journey-grid",children:[n.jsxs("div",{className:"ipr-journey-card active",children:[n.jsx("div",{className:"ipr-step",children:"01"}),n.jsx("div",{className:"ipr-journey-icon",children:n.jsx(fe,{size:21})}),n.jsx("h3",{children:"Innovation"}),n.jsx("p",{children:"Define the idea, formulation, process and technical characteristics."})]}),n.jsx("div",{className:"ipr-arrow",children:n.jsx(J,{size:18})}),n.jsxs("div",{className:"ipr-journey-card",children:[n.jsx("div",{className:"ipr-step",children:"02"}),n.jsx("div",{className:"ipr-journey-icon",children:n.jsx(Yn,{size:21})}),n.jsx("h3",{children:"Prior Art"}),n.jsx("p",{children:"Review potentially relevant existing patent and knowledge records."})]}),n.jsx("div",{className:"ipr-arrow",children:n.jsx(J,{size:18})}),n.jsxs("div",{className:"ipr-journey-card",children:[n.jsx("div",{className:"ipr-step",children:"03"}),n.jsx("div",{className:"ipr-journey-icon",children:n.jsx(an,{size:21})}),n.jsx("h3",{children:"Evidence"}),n.jsx("p",{children:"Organise research, safety, efficacy and supporting evidence."})]}),n.jsx("div",{className:"ipr-arrow",children:n.jsx(J,{size:18})}),n.jsxs("div",{className:"ipr-journey-card",children:[n.jsx("div",{className:"ipr-step",children:"04"}),n.jsx("div",{className:"ipr-journey-icon",children:n.jsx(hn,{size:21})}),n.jsx("h3",{children:"IP Strategy"}),n.jsx("p",{children:"Prepare the innovation record for professional IP review."})]})]})]}),n.jsxs("section",{className:"ipr-check-section",children:[n.jsxs("div",{className:"ipr-section-head",children:[n.jsxs("div",{children:[n.jsx("span",{className:"ipr-eyebrow",children:"PREPARATION CHECK"}),n.jsx("h2",{children:"Before Moving to IP Strategy"}),n.jsx("p",{children:"Review these preparation areas before discussing filing or protection options with an IP professional."})]}),n.jsxs("div",{className:"ipr-check-badge",children:[n.jsx(ie,{size:17}),n.jsx("span",{children:"6 Preparation Areas"})]})]}),n.jsx("div",{className:"ipr-check-grid",children:b.map((g,P)=>n.jsxs("div",{className:"ipr-check-item",children:[n.jsx("div",{className:"ipr-check-number",children:String(P+1).padStart(2,"0")}),n.jsx(ie,{size:18}),n.jsx("span",{children:g})]},g))})]}),n.jsxs("section",{className:"ipr-signals",children:[n.jsx("div",{className:"ipr-section-head",children:n.jsxs("div",{children:[n.jsx("span",{className:"ipr-eyebrow",children:"READINESS SIGNALS"}),n.jsx("h2",{children:"What Your Score Represents"})]})}),n.jsxs("div",{className:"ipr-signal-grid",children:[n.jsxs("div",{className:"ipr-signal-card",children:[n.jsx("div",{className:"ipr-signal-icon",children:n.jsx(As,{size:20})}),n.jsx("h3",{children:"Evidence Strength"}),n.jsx("p",{children:"Checks how much supporting research and documentation is currently available."}),n.jsx("span",{children:"Research • Safety • Quality"})]}),n.jsxs("div",{className:"ipr-signal-card",children:[n.jsx("div",{className:"ipr-signal-icon",children:n.jsx(Yn,{size:20})}),n.jsx("h3",{children:"Prior-Art Position"}),n.jsx("p",{children:"Uses available similarity results to indicate areas that may need deeper prior-art review."}),n.jsx("span",{children:"Search • Compare • Analyse"})]}),n.jsxs("div",{className:"ipr-signal-card",children:[n.jsx("div",{className:"ipr-signal-icon",children:n.jsx(Ce,{size:20})}),n.jsx("h3",{children:"Documentation"}),n.jsx("p",{children:"Measures whether the current innovation record contains useful technical information."}),n.jsx("span",{children:"Idea • Formulation • Process"})]})]})]}),n.jsxs("section",{className:"ipr-next",children:[n.jsx("div",{className:"ipr-next-icon",children:n.jsx(ce,{size:23})}),n.jsxs("div",{className:"ipr-next-content",children:[n.jsx("span",{className:"ipr-eyebrow",children:"NEXT STAGE"}),n.jsx("h2",{children:"Build Your IP Protection Strategy"}),n.jsx("p",{children:"Explore possible protection pathways and identify what technical information should be documented for professional review."})]}),p&&n.jsxs("button",{type:"button",className:"ipr-primary-button",onClick:p,children:["Continue to IP Strategy",n.jsx(J,{size:17})]})]}),n.jsxs("section",{className:"ipr-disclaimer",children:[n.jsx(cr,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Important"}),n.jsx("p",{children:"This is a preliminary preparation indicator generated from prototype data. It is not a legal opinion, patentability determination, novelty assessment or guarantee of patent grant. Consult a qualified patent professional before making filing decisions."})]})]}),n.jsx("style",{children:`
        .ipr-page {
          padding-bottom: 40px;
        }

        .ipr-eyebrow {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
          color: #6b8577;
          margin-bottom: 7px;
        }

        /* HERO */

        .ipr-hero {
          margin-top: 24px;
          padding: 24px 26px;
          border-radius: 22px;
          background:
            radial-gradient(circle at 90% 20%, rgba(193,220,205,.38), transparent 28%),
            linear-gradient(135deg, #173d2d, #285843);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          box-shadow: 0 14px 30px rgba(35, 72, 55, .13);
        }

        .ipr-hero-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .ipr-hero-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.15);
          flex-shrink: 0;
        }

        .ipr-hero .ipr-eyebrow {
          color: #c8ddcf;
        }

        .ipr-hero h2 {
          margin: 0;
          font-size: 22px;
          line-height: 1.2;
          letter-spacing: -.3px;
        }

        .ipr-hero p {
          margin: 8px 0 0;
          max-width: 690px;
          color: #dceae2;
          font-size: 12px;
          line-height: 1.65;
        }

        .ipr-stage {
          min-width: 145px;
          padding: 15px 18px;
          border-radius: 15px;
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.14);
          text-align: center;
        }

        .ipr-stage span {
          display: block;
          font-size: 10px;
          color: #c8ddcf;
          margin-bottom: 6px;
        }

        .ipr-stage strong {
          font-size: 13px;
          color: white;
        }

        /* SCORE LAYOUT */

        .ipr-score-layout {
          display: grid;
          grid-template-columns: .95fr 1.35fr;
          gap: 22px;
          margin-top: 22px;
        }

        .ipr-score-card,
        .ipr-factor-panel {
          border: 1px solid #dce8e1;
          border-radius: 21px;
          background: linear-gradient(145deg, #fffefa, #f7fbf8);
          box-shadow: 0 7px 22px rgba(41, 75, 58, .055);
        }

        .ipr-score-card {
          padding: 25px;
        }

        .ipr-score-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
        }

        .ipr-score-top h2 {
          margin: 0;
          font-size: 19px;
          color: #294a3b;
        }

        .ipr-score-top p {
          margin: 7px 0 0;
          color: #73877d;
          font-size: 11px;
          line-height: 1.55;
          max-width: 260px;
        }

        .ipr-score-circle {
          flex-shrink: 0;
        }

        .ipr-score-ring {
          width: 116px;
          height: 116px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background:
            conic-gradient(
              #4c8064 var(--score-angle),
              #e2ebe5 var(--score-angle)
            );
          position: relative;
        }

        .ipr-score-ring::before {
          content: "";
          position: absolute;
          inset: 8px;
          background: #fbfdfb;
          border-radius: 50%;
        }

        .ipr-score-inner {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .ipr-score-inner strong {
          display: block;
          font-size: 24px;
          color: #254b39;
          line-height: 1;
        }

        .ipr-score-inner span {
          display: block;
          margin-top: 5px;
          font-size: 8px;
          letter-spacing: 1px;
          color: #779082;
          font-weight: 800;
        }

        .ipr-score-status {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding: 10px 12px;
          border-radius: 11px;
          background: #edf6ef;
          color: #3d6c50;
          font-size: 11px;
          font-weight: 700;
        }

        .ipr-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #5a936d;
        }

        .ipr-score-message {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-top: 15px;
          padding: 13px;
          border-radius: 13px;
          background: #f3f7f4;
          border: 1px solid #e0e9e3;
          color: #547064;
        }

        .ipr-score-message svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ipr-score-message p {
          margin: 0;
          font-size: 10px;
          line-height: 1.6;
        }

        /* FACTORS */

        .ipr-factor-panel {
          padding: 24px;
        }

        .ipr-panel-heading,
        .ipr-section-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
        }

        .ipr-panel-heading h2,
        .ipr-section-head h2 {
          margin: 0;
          color: #294a3b;
          font-size: 18px;
        }

        .ipr-panel-heading > svg {
          color: #658777;
        }

        .ipr-factor-list {
          margin-top: 19px;
          display: grid;
          gap: 13px;
        }

        .ipr-factor {
          display: flex;
          gap: 13px;
          padding: 14px;
          border: 1px solid #e0e9e3;
          background: white;
          border-radius: 14px;
        }

        .ipr-factor-icon {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          color: #4d7d63;
          background: #edf5ef;
          flex-shrink: 0;
        }

        .ipr-factor-body {
          flex: 1;
          min-width: 0;
        }

        .ipr-factor-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .ipr-factor-title h3 {
          margin: 0;
          color: #365548;
          font-size: 12px;
        }

        .ipr-factor-title strong {
          color: #47735b;
          font-size: 12px;
        }

        .ipr-factor-body p {
          margin: 7px 0 0;
          color: #819188;
          font-size: 9px;
          line-height: 1.5;
        }

        /* JOURNEY */

        .ipr-journey {
          margin-top: 22px;
          padding: 25px;
          border-radius: 21px;
          background: #f3f8f4;
          border: 1px solid #dce8e0;
        }

        .ipr-section-head p {
          margin: 6px 0 0;
          color: #788c82;
          font-size: 10px;
          line-height: 1.5;
        }

        .ipr-journey-grid {
          margin-top: 21px;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 10px;
        }

        .ipr-journey-card {
          min-height: 155px;
          padding: 17px;
          border-radius: 16px;
          background: white;
          border: 1px solid #dce8e1;
          position: relative;
          box-shadow: 0 4px 12px rgba(40, 76, 57, .04);
        }

        .ipr-journey-card.active {
          background: linear-gradient(145deg, #ffffff, #eef7f0);
          border-color: #bcd4c4;
        }

        .ipr-step {
          position: absolute;
          top: 12px;
          right: 13px;
          font-size: 9px;
          font-weight: 800;
          color: #a1b3a9;
        }

        .ipr-journey-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4e7d63;
          background: #eaf4ed;
          margin-bottom: 14px;
        }

        .ipr-journey-card h3 {
          margin: 0;
          color: #355546;
          font-size: 13px;
        }

        .ipr-journey-card p {
          margin: 7px 0 0;
          color: #7b8e84;
          font-size: 9px;
          line-height: 1.55;
        }

        .ipr-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #e0ece4;
          color: #638271;
        }

        /* CHECKLIST */

        .ipr-check-section {
          margin-top: 22px;
          padding: 25px;
          border-radius: 21px;
          background: linear-gradient(145deg, #fffefa, #f7faf8);
          border: 1px solid #dce8e1;
        }

        .ipr-check-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 12px;
          border-radius: 11px;
          background: #edf6ef;
          color: #4d765d;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
        }

        .ipr-check-grid {
          margin-top: 21px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 13px;
        }

        .ipr-check-item {
          min-height: 58px;
          padding: 12px 14px;
          border-radius: 13px;
          border: 1px solid #e0e9e3;
          background: white;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ipr-check-item > svg {
          color: #5a8a6c;
          flex-shrink: 0;
        }

        .ipr-check-item span {
          color: #50695d;
          font-size: 10px;
          line-height: 1.4;
        }

        .ipr-check-number {
          color: #a4b4aa;
          font-size: 9px;
          font-weight: 800;
        }

        /* SIGNALS */

        .ipr-signals {
          margin-top: 22px;
          padding: 25px;
          border-radius: 21px;
          background: #eef6f0;
          border: 1px solid #d9e7dd;
        }

        .ipr-signal-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .ipr-signal-card {
          padding: 20px;
          min-height: 155px;
          border-radius: 16px;
          background: rgba(255,255,255,.94);
          border: 1px solid #dce8e1;
          box-shadow: 0 5px 14px rgba(43, 76, 58, .04);
        }

        .ipr-signal-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4d7e63;
          background: #eaf4ed;
          margin-bottom: 13px;
        }

        .ipr-signal-card h3 {
          margin: 0;
          font-size: 13px;
          color: #365548;
        }

        .ipr-signal-card p {
          margin: 7px 0 12px;
          color: #7b8e84;
          font-size: 9px;
          line-height: 1.6;
        }

        .ipr-signal-card span {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .4px;
          color: #789083;
        }

        /* NEXT */

        .ipr-next {
          margin-top: 22px;
          padding: 23px 25px;
          border-radius: 21px;
          background: linear-gradient(135deg, #173d2d, #2c5c45);
          color: white;
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .ipr-next-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(255,255,255,.12);
          flex-shrink: 0;
        }

        .ipr-next-content {
          flex: 1;
        }

        .ipr-next .ipr-eyebrow {
          color: #bdd5c6;
        }

        .ipr-next h2 {
          margin: 0;
          font-size: 17px;
        }

        .ipr-next p {
          margin: 5px 0 0;
          color: #d2e3d9;
          font-size: 10px;
          line-height: 1.5;
        }

        .ipr-primary-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 15px;
          border: 0;
          border-radius: 11px;
          background: white;
          color: #315d46;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .ipr-primary-button:hover {
          transform: translateY(-1px);
        }

        /* DISCLAIMER */

        .ipr-disclaimer {
          margin-top: 17px;
          padding: 14px 16px;
          border-radius: 13px;
          border: 1px solid #eadfbe;
          background: #fffaf0;
          color: #806f43;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .ipr-disclaimer svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ipr-disclaimer strong {
          display: block;
          font-size: 10px;
          margin-bottom: 3px;
        }

        .ipr-disclaimer p {
          margin: 0;
          font-size: 9px;
          line-height: 1.55;
        }

        /* RESPONSIVE */

        @media (max-width: 1050px) {
          .ipr-score-layout {
            grid-template-columns: 1fr;
          }

          .ipr-journey-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ipr-arrow {
            display: none;
          }
        }

        @media (max-width: 760px) {
          .ipr-hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .ipr-stage {
            width: 100%;
            box-sizing: border-box;
          }

          .ipr-check-grid,
          .ipr-signal-grid {
            grid-template-columns: 1fr;
          }

          .ipr-journey-grid {
            grid-template-columns: 1fr;
          }

          .ipr-next {
            flex-direction: column;
            align-items: flex-start;
          }

          .ipr-primary-button {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})}const vg=[{id:"patent",title:"Patent Protection",icon:ce,status:"Explore",description:"Consider patent protection where the innovation may involve a patentable technical feature, process or formulation subject to applicable law.",areas:["Novel technical features","Formulation or process details","Technical effect or advantage","Experimental support"]},{id:"trade-secret",title:"Confidential Know-How",icon:Wp,status:"Explore",description:"Identify information that may need controlled access and confidentiality while development or professional assessment is ongoing.",areas:["Undisclosed preparation details","Process parameters","Proprietary methods","Internal technical records"]},{id:"documentation",title:"Documentation & Evidence",icon:Ce,status:"Recommended",description:"Maintain structured records of development, research, inventorship, experiments and supporting evidence.",areas:["Inventor records","Research evidence","Experiment history","Versioned technical documentation"]},{id:"international",title:"International Protection",icon:jx,status:"Explore",description:"Review whether international markets or jurisdictions may require additional IP planning.",areas:["Target countries","Filing timeline","Jurisdiction review","International strategy"]}],yg=[{number:"01",id:"feature",title:"Define the protectable feature",description:"Identify what is technically different or newly developed in the innovation.",icon:bn},{number:"02",id:"prior-art",title:"Review existing knowledge and prior art",description:"Use previous journey stages to understand traditional knowledge and potentially relevant patent records.",icon:Yn},{number:"03",id:"evidence",title:"Document technical evidence",description:"Record formulation, process, experiments, advantages and supporting evidence.",icon:an},{number:"04",id:"professional-review",title:"Seek professional IP review",description:"Discuss the innovation and supporting records with a qualified patent professional.",icon:ce}],jg={patent:{title:"Patent Protection Strategy",summary:"Review the technical features of the innovation and identify which aspects require deeper patentability and prior-art review.",actions:["Document the technical problem being solved.","Describe the formulation, process or technical mechanism.","Compare the feature against relevant prior-art records.","Organise supporting experimental evidence."],next:"Move the structured technical information into the patent preparation workspace."},"trade-secret":{title:"Confidential Know-How Strategy",summary:"Identify technical information that may be commercially sensitive and should be controlled while professional IP assessment is ongoing.",actions:["Identify confidential formulation or process parameters.","Separate public information from confidential information.","Maintain controlled technical records.","Review confidentiality requirements before disclosure."],next:"Prepare a confidential technical record and review disclosure requirements."},documentation:{title:"Documentation & Evidence Strategy",summary:"Build a structured record containing the development history, evidence and technical information behind the innovation.",actions:["Record inventors and contributors.","Organise experiments and research evidence.","Maintain dated versions of technical documents.","Link evidence to specific innovation features."],next:"Complete the evidence and technical documentation workspace."},international:{title:"International Protection Strategy",summary:"Identify the countries or markets relevant to the innovation before considering international IP planning.",actions:["Identify target markets.","Review jurisdiction-specific requirements.","Consider relevant filing timelines.","Coordinate international strategy with professional advice."],next:"Create a jurisdiction and target-market review before filing decisions."},feature:{title:"Define the Protectable Feature",summary:"The first strategy step is to clearly identify what is technically different about the innovation.",actions:["Describe the core technical feature.","Explain the technical problem.","Document the proposed technical solution.","Record measurable technical advantages where available."],next:"Use the innovation profile and evidence records to strengthen the technical description."},"prior-art":{title:"Prior-Art Review",summary:"Review potentially relevant patent and knowledge records before making protection decisions.",actions:["Search relevant patent records.","Review traditional knowledge overlap.","Compare technical features.","Record similarity signals for professional review."],next:"Return to Prior-Art Search for deeper record-level analysis."},evidence:{title:"Technical Evidence",summary:"Organise research, safety, efficacy and experimental evidence supporting the innovation.",actions:["Collect relevant research records.","Identify evidence gaps.","Link evidence to technical features.","Maintain dated supporting documentation."],next:"Review the Evidence Gap module and complete missing evidence areas."},"professional-review":{title:"Professional IP Review",summary:"The final preparation stage is to organise the innovation record for review by a qualified IP professional.",actions:["Prepare innovation documentation.","Include relevant prior-art results.","Organise supporting evidence.","Prepare questions for professional review."],next:"Open the patent preparation workspace."}};function bg({innovation:a,onContinue:c}){var T;const[l,p]=E.useState(null),[u,f]=E.useState(null),[m,N]=E.useState(!1),[b,g]=E.useState(!1),P=(a==null?void 0:a.title)||"Your Ayurveda Innovation",C=async(O,z="path")=>{var I;p(O),N(!0),f(null),g(!1);const k=jg[O]||{title:"IP Strategy Analysis",summary:"Review the available innovation information and prepare the relevant IP documentation.",actions:["Review the innovation description.","Review prior-art information.","Organise supporting evidence.","Prepare professional IP review."],next:"Continue with the relevant IP preparation stage."};try{const V=await fetch(`http://localhost:4000/api/ip-strategy/${O}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:z,strategyId:O,innovation:a,innovationTitle:P})});if(!V.ok)throw new Error("Backend response failed");const Q=await V.json();f({...k,...Q,actions:((I=Q.actions)==null?void 0:I.length)>0?Q.actions:k.actions}),g(!0)}catch(V){console.warn("IP Strategy backend unavailable. Showing local strategy fallback.",V),f(k)}finally{N(!1)}},A=()=>{p(null),f(null),N(!1)};return n.jsxs("main",{className:"page-content ips-page",children:[n.jsx(si,{eyebrow:"STAGE 08 • IP STRATEGY",title:"IP Protection Strategy",description:"Explore protection pathways, review strategy signals and prepare your innovation for professional IP assessment.",icon:At}),n.jsxs("section",{className:"ips-hero",children:[n.jsxs("div",{className:"ips-hero-main",children:[n.jsx("div",{className:"ips-hero-icon",children:n.jsx(fe,{size:23})}),n.jsxs("div",{children:[n.jsx("span",{className:"ips-eyebrow",children:"INNOVATION UNDER REVIEW"}),n.jsx("h2",{children:P}),n.jsx("p",{children:"Your protection strategy should be based on the actual technical features, evidence, prior art and applicable intellectual-property requirements."})]})]}),n.jsxs("div",{className:"ips-hero-badge",children:[n.jsx(ce,{size:16}),n.jsx("span",{children:"Interactive Strategy Workspace"})]})]}),l&&n.jsxs("section",{className:"ips-detail-panel",children:[n.jsxs("button",{type:"button",className:"ips-back-button",onClick:A,children:[n.jsx(Ts,{size:16}),"Back to IP Strategy"]}),m?n.jsxs("div",{className:"ips-loading",children:[n.jsx("div",{className:"ips-loading-icon",children:n.jsx(zs,{size:25})}),n.jsx("h2",{children:"Analysing Strategy..."}),n.jsx("p",{children:"Connecting with the IP Strategy backend and preparing the relevant analysis."})]}):u&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ips-detail-header",children:[n.jsx("div",{className:"ips-detail-icon",children:n.jsx(ce,{size:23})}),n.jsxs("div",{children:[n.jsx("span",{className:"ips-eyebrow",children:"STRATEGY ANALYSIS"}),n.jsx("h2",{children:u.title}),n.jsx("p",{children:u.summary})]}),n.jsxs("div",{className:"ips-connection",children:[n.jsx("span",{className:b?"ips-dot connected":"ips-dot"}),b?"Backend Analysis":"Local Preparation"]})]}),n.jsxs("div",{className:"ips-detail-grid",children:[n.jsxs("div",{className:"ips-detail-card",children:[n.jsxs("div",{className:"ips-detail-card-head",children:[n.jsx(ie,{size:18}),n.jsx("h3",{children:"Recommended Actions"})]}),n.jsx("div",{className:"ips-action-list",children:(T=u.actions)==null?void 0:T.map((O,z)=>n.jsxs("div",{className:"ips-action-item",children:[n.jsx("span",{children:z+1}),n.jsx("p",{children:O})]},`${O}-${z}`))})]}),n.jsxs("div",{className:"ips-next-card",children:[n.jsx("div",{className:"ips-next-icon",children:n.jsx(J,{size:19})}),n.jsx("span",{className:"ips-eyebrow",children:"NEXT ACTION"}),n.jsx("h3",{children:"What should you do next?"}),n.jsx("p",{children:u.next}),c&&n.jsxs("button",{type:"button",onClick:c,className:"ips-detail-button",children:["Open Next Workspace",n.jsx(J,{size:15})]})]})]})]})]}),!l&&n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"ips-paths",children:[n.jsx("div",{className:"ips-section-head",children:n.jsxs("div",{children:[n.jsx("span",{className:"ips-eyebrow",children:"PROTECTION PATHWAYS"}),n.jsx("h2",{children:"Explore Your IP Options"}),n.jsx("p",{children:"Click any pathway to open its detailed strategy analysis."})]})}),n.jsx("div",{className:"ips-path-grid",children:vg.map(O=>{const z=O.icon;return n.jsxs("button",{type:"button",className:"ips-path-card",onClick:()=>C(O.id,"protection-path"),children:[n.jsxs("div",{className:"ips-path-top",children:[n.jsx("div",{className:"ips-path-icon",children:n.jsx(z,{size:21})}),n.jsx(pr,{status:O.status,tone:O.status==="Recommended"?"success":"warning"})]}),n.jsx("h3",{children:O.title}),n.jsx("p",{children:O.description}),n.jsx("div",{className:"ips-area-list",children:O.areas.map(k=>n.jsx("span",{children:k},k))}),n.jsxs("div",{className:"ips-card-action",children:["Explore Strategy",n.jsx(J,{size:14})]})]},O.id)})})]}),n.jsxs("section",{className:"ips-workflow",children:[n.jsxs("div",{className:"ips-section-head",children:[n.jsxs("div",{children:[n.jsx("span",{className:"ips-eyebrow",children:"STRATEGY WORKFLOW"}),n.jsx("h2",{children:"From Discovery to Professional Review"}),n.jsx("p",{children:"Click a step to open its detailed preparation guidance."})]}),n.jsx(Wp,{size:20})]}),n.jsx("div",{className:"ips-workflow-grid",children:yg.map(O=>{const z=O.icon;return n.jsxs("button",{type:"button",className:"ips-workflow-card",onClick:()=>C(O.id,"workflow-step"),children:[n.jsx("div",{className:"ips-workflow-number",children:O.number}),n.jsx("div",{className:"ips-workflow-icon",children:n.jsx(z,{size:19})}),n.jsx("h3",{children:O.title}),n.jsx("p",{children:O.description}),n.jsxs("span",{children:["View Details",n.jsx(J,{size:13})]})]},O.id)})})]}),n.jsxs("section",{className:"ips-documentation",children:[n.jsx("div",{className:"ips-doc-icon",children:n.jsx(Ce,{size:20})}),n.jsxs("div",{children:[n.jsx("span",{className:"ips-eyebrow",children:"DOCUMENTATION NOTE"}),n.jsx("h3",{children:"Protect the record of how the innovation was developed"}),n.jsx("p",{children:"Keep dated technical descriptions, inventor information, experiments, evidence sources, formulation or process details and relevant development history."})]})]}),n.jsxs("section",{className:"ips-next",children:[n.jsx("div",{className:"ips-next-main-icon",children:n.jsx(Ce,{size:22})}),n.jsxs("div",{children:[n.jsx("span",{className:"ips-eyebrow",children:"NEXT STAGE"}),n.jsx("h2",{children:"Prepare Your Patent Workspace"}),n.jsx("p",{children:"Move the structured innovation information into a dedicated preparation workspace."})]}),c&&n.jsxs("button",{type:"button",className:"ips-primary-button",onClick:c,children:["Open Patent Workspace",n.jsx(J,{size:16})]})]}),n.jsxs("section",{className:"ips-disclaimer",children:[n.jsx(ce,{size:17}),n.jsx("p",{children:"This module provides an organisational framework for exploring IP protection. It does not determine patentability, legal ownership, infringement or the appropriate filing strategy."})]})]}),n.jsx("style",{children:`
        .ips-page {
          padding-bottom: 40px;
        }

        .ips-eyebrow {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
          color: #70887b;
          margin-bottom: 7px;
        }

        /* HERO */

        .ips-hero {
          margin-top: 23px;
          padding: 24px 26px;
          border-radius: 22px;
          background:
            radial-gradient(circle at 90% 20%, rgba(192,220,204,.35), transparent 28%),
            linear-gradient(135deg, #173d2d, #2b5b44);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          box-shadow: 0 14px 30px rgba(35,72,55,.12);
        }

        .ips-hero-main {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .ips-hero-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.11);
          border: 1px solid rgba(255,255,255,.14);
          flex-shrink: 0;
        }

        .ips-hero .ips-eyebrow {
          color: #c4dacb;
        }

        .ips-hero h2 {
          margin: 0;
          font-size: 21px;
        }

        .ips-hero p {
          margin: 7px 0 0;
          max-width: 720px;
          color: #d9e8df;
          font-size: 11px;
          line-height: 1.6;
        }

        .ips-hero-badge {
          padding: 11px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.13);
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* SECTION */

        .ips-paths,
        .ips-workflow {
          margin-top: 22px;
          padding: 25px;
          border-radius: 21px;
          border: 1px solid #dce8e1;
          background: linear-gradient(145deg,#fffefa,#f7fbf8);
        }

        .ips-section-head h2 {
          margin: 0;
          color: #294a3b;
          font-size: 18px;
        }

        .ips-section-head p {
          margin: 6px 0 0;
          color: #7a8d83;
          font-size: 10px;
          line-height: 1.5;
        }

        /* PATH CARDS */

        .ips-path-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 17px;
        }

        .ips-path-card {
          min-height: 255px;
          padding: 18px;
          border-radius: 17px;
          background: white;
          border: 1px solid #dce8e1;
          text-align: left;
          cursor: pointer;
          transition: .2s ease;
          box-shadow: 0 4px 13px rgba(40,75,57,.035);
        }

        .ips-path-card:hover {
          transform: translateY(-4px);
          border-color: #aecbb8;
          box-shadow: 0 12px 24px rgba(40,75,57,.09);
        }

        .ips-path-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .ips-path-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4c7d62;
          background: #eaf4ed;
        }

        .ips-path-card h3 {
          margin: 16px 0 7px;
          color: #355546;
          font-size: 13px;
        }

        .ips-path-card > p {
          margin: 0;
          color: #7d9086;
          font-size: 9px;
          line-height: 1.6;
        }

        .ips-area-list {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 13px;
        }

        .ips-area-list span {
          padding: 5px 7px;
          border-radius: 6px;
          background: #f1f6f2;
          color: #637c6e;
          font-size: 7.5px;
          font-weight: 700;
        }

        .ips-card-action {
          margin-top: 15px;
          padding-top: 11px;
          border-top: 1px solid #edf1ee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #47755b;
          font-size: 9px;
          font-weight: 800;
        }

        /* WORKFLOW */

        .ips-workflow {
          background: #f1f7f3;
        }

        .ips-workflow-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .ips-workflow-card {
          min-height: 185px;
          position: relative;
          padding: 19px;
          text-align: left;
          background: white;
          border: 1px solid #dce8e1;
          border-radius: 16px;
          cursor: pointer;
          transition: .2s ease;
        }

        .ips-workflow-card:hover {
          transform: translateY(-3px);
          border-color: #b5cebd;
          box-shadow: 0 10px 20px rgba(40,75,57,.07);
        }

        .ips-workflow-number {
          position: absolute;
          top: 13px;
          right: 14px;
          font-size: 9px;
          font-weight: 900;
          color: #a7b6ad;
        }

        .ips-workflow-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4d7e63;
          background: #eaf4ed;
          margin-bottom: 14px;
        }

        .ips-workflow-card h3 {
          margin: 0;
          color: #365548;
          font-size: 12px;
          line-height: 1.4;
        }

        .ips-workflow-card p {
          margin: 7px 0 12px;
          color: #7d9086;
          font-size: 9px;
          line-height: 1.55;
        }

        .ips-workflow-card > span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #4d7c60;
          font-size: 8px;
          font-weight: 800;
        }

        /* DOCUMENTATION */

        .ips-documentation {
          margin-top: 22px;
          padding: 20px 23px;
          border: 1px solid #dce8e1;
          border-radius: 18px;
          background: #fffefa;
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .ips-doc-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #4c7d62;
          background: #eaf4ed;
          flex-shrink: 0;
        }

        .ips-documentation h3 {
          margin: 0;
          color: #365548;
          font-size: 13px;
        }

        .ips-documentation p {
          margin: 6px 0 0;
          color: #7c8e85;
          font-size: 10px;
          line-height: 1.6;
        }

        /* NEXT */

        .ips-next {
          margin-top: 22px;
          padding: 22px 24px;
          border-radius: 21px;
          background: linear-gradient(135deg,#173d2d,#2c5c45);
          color: white;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ips-next-main-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.11);
          flex-shrink: 0;
        }

        .ips-next > div:nth-child(2) {
          flex: 1;
        }

        .ips-next .ips-eyebrow {
          color: #bdd5c6;
        }

        .ips-next h2 {
          margin: 0;
          font-size: 17px;
        }

        .ips-next p {
          margin: 5px 0 0;
          color: #d1e3d8;
          font-size: 10px;
        }

        .ips-primary-button,
        .ips-detail-button {
          border: 0;
          border-radius: 11px;
          padding: 11px 15px;
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          font-size: 9px;
          font-weight: 800;
        }

        .ips-primary-button {
          background: white;
          color: #315d46;
        }

        .ips-detail-button {
          margin-top: 17px;
          background: #315f48;
          color: white;
        }

        /* DETAIL */

        .ips-detail-panel {
          margin-top: 22px;
          padding: 24px;
          border-radius: 21px;
          background: linear-gradient(145deg,#fffefa,#f5faf7);
          border: 1px solid #d5e4da;
          box-shadow: 0 10px 25px rgba(40,75,57,.07);
        }

        .ips-back-button {
          border: 0;
          background: #edf5ef;
          color: #4b735c;
          border-radius: 10px;
          padding: 9px 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-size: 9px;
          font-weight: 800;
        }

        .ips-detail-header {
          margin-top: 22px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .ips-detail-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: #eaf4ed;
          color: #4b7d62;
          flex-shrink: 0;
        }

        .ips-detail-header h2 {
          margin: 0;
          color: #294a3b;
          font-size: 19px;
        }

        .ips-detail-header p {
          margin: 5px 0 0;
          color: #778c81;
          font-size: 10px;
          line-height: 1.5;
        }

        .ips-connection {
          margin-left: auto;
          padding: 8px 11px;
          border-radius: 9px;
          background: #f0f5f2;
          color: #637b6e;
          font-size: 8px;
          font-weight: 800;
          white-space: nowrap;
        }

        .ips-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b1bdb6;
          margin-right: 5px;
        }

        .ips-dot.connected {
          background: #4c9565;
        }

        .ips-detail-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: 1.35fr .8fr;
          gap: 18px;
        }

        .ips-detail-card,
        .ips-next-card {
          padding: 20px;
          border-radius: 16px;
          border: 1px solid #dce8e1;
          background: white;
        }

        .ips-detail-card-head {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #4b7c61;
        }

        .ips-detail-card-head h3 {
          margin: 0;
          color: #365548;
          font-size: 13px;
        }

        .ips-action-list {
          margin-top: 15px;
          display: grid;
          gap: 9px;
        }

        .ips-action-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px;
          border-radius: 10px;
          background: #f5f8f6;
        }

        .ips-action-item span {
          width: 21px;
          height: 21px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          background: #e3efe7;
          color: #4b785f;
          font-size: 8px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .ips-action-item p {
          margin: 3px 0 0;
          color: #62796d;
          font-size: 9px;
          line-height: 1.5;
        }

        .ips-next-card {
          background: linear-gradient(145deg,#edf6ef,#f8fbf8);
        }

        .ips-next-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #dcece1;
          color: #47755a;
          margin-bottom: 15px;
        }

        .ips-next-card h3 {
          margin: 0;
          color: #365548;
          font-size: 14px;
        }

        .ips-next-card p {
          margin: 7px 0 0;
          color: #71877b;
          font-size: 9px;
          line-height: 1.6;
        }

        /* LOADING */

        .ips-loading {
          min-height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .ips-loading-icon {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          color: #4d7e63;
          background: #eaf4ed;
          animation: ipsSpin 1.2s linear infinite;
        }

        .ips-loading h2 {
          margin: 15px 0 5px;
          color: #365548;
          font-size: 17px;
        }

        .ips-loading p {
          margin: 0;
          color: #819188;
          font-size: 10px;
        }

        @keyframes ipsSpin {
          to {
            transform: rotate(360deg);
          }
        }

        .ips-disclaimer {
          margin-top: 17px;
          padding: 14px 16px;
          border-radius: 13px;
          border: 1px solid #eadfbe;
          background: #fffaf0;
          color: #806f43;
          display: flex;
          gap: 9px;
          align-items: flex-start;
        }

        .ips-disclaimer p {
          margin: 0;
          font-size: 9px;
          line-height: 1.55;
        }

        @media (max-width: 1050px) {
          .ips-path-grid,
          .ips-workflow-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .ips-detail-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .ips-hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .ips-path-grid,
          .ips-workflow-grid {
            grid-template-columns: 1fr;
          }

          .ips-next {
            flex-direction: column;
            align-items: flex-start;
          }

          .ips-primary-button {
            width: 100%;
            justify-content: center;
          }

          .ips-detail-header {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .ips-connection {
            margin-left: 0;
          }
        }
      `})]})}const js=[{id:"title",number:"01",label:"Invention / Innovation Title",short:"Define a clear technical title for the innovation.",placeholder:"Enter the technical title of the innovation",type:"input"},{id:"technicalField",number:"02",label:"Technical Field",short:"Identify the technical domain and application area.",placeholder:"Example: Herbal formulation, pharmaceutical preparation...",type:"input"},{id:"background",number:"03",label:"Background",short:"Describe existing approaches, context and limitations.",placeholder:"Describe the existing situation, known approaches and relevant background...",type:"textarea"},{id:"problemStatement",number:"04",label:"Problem Statement",short:"Clearly define the technical problem being addressed.",placeholder:"Clearly describe the technical problem addressed by the innovation...",type:"textarea"},{id:"summary",number:"05",label:"Summary of Innovation",short:"Give a concise technical overview of the invention.",placeholder:"Provide a concise technical summary of the innovation...",type:"textarea"},{id:"detailedDescription",number:"06",label:"Detailed Description",short:"Document ingredients, components, formulation and process.",placeholder:"Describe the ingredients, components, formulation, process and technical implementation...",type:"textarea"},{id:"advantages",number:"07",label:"Advantages / Technical Effect",short:"Record measurable or technically relevant effects.",placeholder:"Describe measurable or technically relevant advantages...",type:"textarea"},{id:"experimentalEvidence",number:"08",label:"Experimental Evidence",short:"Add experiments, observations and supporting evidence.",placeholder:"Record experiments, observations, testing or supporting evidence...",type:"textarea"},{id:"drawings",number:"09",label:"Drawings / Flowchart Notes",short:"Describe figures, diagrams and process flowcharts.",placeholder:"Describe diagrams, process flowcharts or figures that should accompany the preparation...",type:"textarea"},{id:"claims",number:"10",label:"Claims — DRAFT",short:"Organise possible claim concepts for professional review.",placeholder:"Organise possible claim concepts here for professional review...",type:"textarea"},{id:"references",number:"11",label:"References",short:"Add research, patent and supporting references.",placeholder:"Add research, traditional knowledge, patent or other supporting references...",type:"textarea"}],wg={title:"",technicalField:"",background:"",problemStatement:"",summary:"",detailedDescription:"",advantages:"",experimentalEvidence:"",drawings:"",claims:"",references:""};function kg({innovation:a=Es,onContinue:c}){const[l,p]=E.useState({...wg,title:(a==null?void 0:a.title)||"",problemStatement:(a==null?void 0:a.problemStatement)||"",detailedDescription:(a==null?void 0:a.description)||"",advantages:(a==null?void 0:a.advantages)||""}),[u,f]=E.useState(null),[m,N]=E.useState(!1),[b,g]=E.useState(""),P=E.useMemo(()=>js.filter(k=>String(l[k.id]||"").trim().length>0).length,[l]),C=Math.round(P/js.length*100),A=(k,I)=>{p(V=>({...V,[k]:I}))},T=()=>{const k={...a,...l,patentPreparation:l,updatedAt:new Date().toISOString()};return Qp(k),ig(k),k},O=async()=>{N(!0),g("");const k=T();try{const I=await fetch("http://localhost:4000/api/patent-preparation/export-pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({innovation:k,preparation:l})});if(!I.ok)throw new Error("PDF export failed");const V=await I.blob(),Q=window.URL.createObjectURL(V),Y=document.createElement("a");Y.href=Q,Y.download=`${(l.title||"Patent_Preparation").replace(/[^a-z0-9]+/gi,"_").replace(/^_+|_+$/g,"")}.pdf`,document.body.appendChild(Y),Y.click(),Y.remove(),window.URL.revokeObjectURL(Q),g("Your Patent Preparation PDF has been downloaded.")}catch(I){console.error(I),g("PDF export could not connect to the backend. Please start the backend and try again.")}finally{N(!1),setTimeout(()=>{g("")},5e3)}},z=k=>{f(I=>I===k?null:k)};return n.jsxs("main",{className:"page-content patent-page",children:[n.jsx(si,{eyebrow:"STAGE 09 • PATENT PREPARATION",title:"Patent Preparation Workspace",description:"Transform your innovation record into a structured patent-preparation document for professional review.",icon:Ce,action:n.jsx("button",{type:"button",className:"export-pdf-button",onClick:O,disabled:m,children:m?n.jsxs(n.Fragment,{children:[n.jsx(zs,{className:"download-spinner",size:17}),"Preparing PDF..."]}):n.jsxs(n.Fragment,{children:[n.jsx(lr,{size:17}),"Export Patent PDF"]})})}),b&&n.jsxs("div",{className:`download-toast ${b.includes("downloaded")?"success":"error"}`,children:[b.includes("downloaded")?n.jsx(ie,{size:18}):n.jsx(op,{size:18}),n.jsx("span",{children:b})]}),n.jsxs("section",{className:"pp-main-hero",children:[n.jsxs("div",{className:"pp-hero-left",children:[n.jsx("div",{className:"pp-hero-icon",children:n.jsx(hn,{size:25})}),n.jsxs("div",{children:[n.jsx("span",{className:"pp-eyebrow",children:"PATENT DOCUMENT BUILDER"}),n.jsx("h1",{children:l.title||"Untitled Innovation"}),n.jsx("p",{children:"Prepare your technical disclosure section by section. Your completed information will be compiled into a downloadable patent-preparation PDF."})]})]}),n.jsxs("div",{className:"pp-hero-progress",children:[n.jsxs("div",{className:"pp-progress-top",children:[n.jsx("span",{children:"Preparation Readiness"}),n.jsxs("strong",{children:[C,"%"]})]}),n.jsx(Cs,{value:C,showValue:!1,size:"small"}),n.jsxs("small",{children:[P," of ",js.length," sections completed"]})]})]}),n.jsxs("div",{className:"pp-content-grid",children:[n.jsxs("section",{className:"pp-sections",children:[n.jsxs("div",{className:"pp-section-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"pp-eyebrow dark",children:"TECHNICAL DISCLOSURE"}),n.jsx("h2",{children:"Innovation Description"}),n.jsx("p",{children:"Select a section to edit its information. Each section remains independent so your preparation record stays organised."})]}),n.jsx(pr,{status:C===100?"Completed":C>0?"In Progress":"Draft"})]}),n.jsx("div",{className:"pp-section-list",children:js.map(k=>{const I=String(l[k.id]||"").trim().length>0,V=u===k.id;return n.jsxs("article",{className:`pp-section-card ${V?"active":""} ${I?"complete":""}`,children:[n.jsxs("button",{type:"button",className:"pp-section-card-header",onClick:()=>z(k.id),children:[n.jsx("div",{className:"pp-number",children:k.number}),n.jsxs("div",{className:"pp-section-info",children:[n.jsxs("div",{className:"pp-title-line",children:[n.jsx("h3",{children:k.label}),I&&n.jsxs("span",{className:"complete-label",children:[n.jsx(ie,{size:13}),"Complete"]})]}),n.jsx("p",{children:k.short})]}),n.jsx(J,{className:`pp-arrow ${V?"rotated":""}`,size:19})]}),V&&n.jsxs("div",{className:"pp-editor",children:[n.jsxs("div",{className:"pp-editor-label",children:[n.jsx("span",{children:"Your Information"}),n.jsx("small",{children:I?"Information added":"Not completed yet"})]}),k.type==="textarea"?n.jsx("textarea",{id:k.id,rows:7,value:l[k.id],placeholder:k.placeholder,onChange:Q=>A(k.id,Q.target.value)}):n.jsx("input",{id:k.id,type:"text",value:l[k.id],placeholder:k.placeholder,onChange:Q=>A(k.id,Q.target.value)}),n.jsxs("div",{className:"pp-editor-footer",children:[n.jsxs("span",{children:[String(l[k.id]||"").length," ","characters"]}),n.jsxs("button",{type:"button",onClick:()=>f(null),children:["Done",n.jsx(ie,{size:15})]})]})]})]},k.id)})})]}),n.jsxs("aside",{className:"pp-sidebar",children:[n.jsxs("div",{className:"pp-side-card readiness-card",children:[n.jsx("div",{className:"pp-side-icon",children:n.jsx(Ss,{size:19})}),n.jsx("span",{className:"pp-eyebrow dark",children:"PREPARATION STATUS"}),n.jsx("h3",{children:C===100?"Ready for Review":"Preparation in Progress"}),n.jsx("p",{children:"Complete the relevant sections before generating the final preparation document."}),n.jsxs("div",{className:"pp-mini-progress",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Completion"}),n.jsxs("strong",{children:[C,"%"]})]}),n.jsx(Cs,{value:C,showValue:!1,size:"small"})]})]}),n.jsxs("div",{className:"pp-side-card checklist-card",children:[n.jsxs("div",{className:"pp-side-title",children:[n.jsx(ce,{size:18}),n.jsx("h3",{children:"Before Export"})]}),n.jsxs("div",{className:"pp-check",children:[n.jsx(ie,{size:15}),n.jsx("span",{children:"Technical field identified"})]}),n.jsxs("div",{className:"pp-check",children:[n.jsx(ie,{size:15}),n.jsx("span",{children:"Problem statement documented"})]}),n.jsxs("div",{className:"pp-check",children:[n.jsx(ie,{size:15}),n.jsx("span",{children:"Technical description prepared"})]}),n.jsxs("div",{className:"pp-check",children:[n.jsx(ie,{size:15}),n.jsx("span",{children:"Evidence recorded"})]}),n.jsxs("div",{className:"pp-check",children:[n.jsx(ie,{size:15}),n.jsx("span",{children:"Draft claims reviewed"})]})]}),n.jsxs("div",{className:"pp-side-card export-card",children:[n.jsx("div",{className:"export-card-icon",children:n.jsx(lr,{size:21})}),n.jsx("span",{className:"pp-eyebrow dark",children:"FINAL DOCUMENT"}),n.jsx("h3",{children:"Export Your Preparation"}),n.jsx("p",{children:"Generate a structured PDF containing your complete patent-preparation record."}),n.jsx("button",{type:"button",className:"side-export-button",onClick:O,disabled:m,children:m?n.jsxs(n.Fragment,{children:[n.jsx(zs,{className:"download-spinner",size:16}),"Generating..."]}):n.jsxs(n.Fragment,{children:[n.jsx(lr,{size:16}),"Download PDF"]})})]}),n.jsxs("div",{className:"pp-side-warning",children:[n.jsx(op,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Professional Review"}),n.jsx("p",{children:"This document is a preparation draft. It is not an official patent application. Final drafting and filing should be reviewed by a qualified patent professional."})]})]})]})]}),c&&n.jsxs("section",{className:"pp-bottom-action",children:[n.jsxs("div",{children:[n.jsx("span",{className:"pp-eyebrow dark",children:"NEXT STAGE"}),n.jsx("h3",{children:"Ready for Professional Review?"}),n.jsx("p",{children:"Continue to the expert review stage after preparing the relevant sections."})]}),n.jsxs("button",{type:"button",className:"primary-button",onClick:()=>{T(),c()},children:["Continue to Expert Review",n.jsx(J,{size:17})]})]}),n.jsxs("section",{className:"pp-disclaimer",children:[n.jsx(ce,{size:17}),n.jsx("p",{children:"The Claims — DRAFT section is provided only for organising claim concepts. Automatically generated or user-entered content should not be treated as legally sufficient patent claims."})]}),n.jsx("style",{children:`
        .patent-page {
          padding-bottom: 45px;
        }

        .export-pdf-button {
          display:flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          border:0;
          border-radius:11px;
          padding:11px 17px;
          background:#1f6545;
          color:#fff;
          font-size:13px;
          font-weight:800;
          cursor:pointer;
          box-shadow:0 7px 17px rgba(31,101,69,.16);
          transition:.18s ease;
        }

        .export-pdf-button:hover:not(:disabled) {
          background:#174b34;
          transform:translateY(-1px);
        }

        .export-pdf-button:disabled {
          opacity:.7;
          cursor:wait;
        }

        .download-spinner {
          animation:ppSpin 1s linear infinite;
        }

        @keyframes ppSpin {
          to {
            transform:rotate(360deg);
          }
        }

        .download-toast {
          position:relative;
          display:flex;
          align-items:center;
          gap:10px;
          padding:13px 17px;
          margin:0 0 18px;
          border-radius:13px;
          font-size:13px;
          font-weight:700;
        }

        .download-toast.success {
          color:#246142;
          background:#edf8f1;
          border:1px solid #cbe6d4;
        }

        .download-toast.error {
          color:#8a5b35;
          background:#fff7ed;
          border:1px solid #ecd7bc;
        }

        .pp-main-hero {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:30px;
          padding:28px 31px;
          margin-top:22px;
          border-radius:22px;
          background:linear-gradient(
            135deg,
            #153f2d 0%,
            #245c41 55%,
            #397053 100%
          );
          color:white;
          box-shadow:0 14px 32px rgba(29,72,51,.13);
        }

        .pp-hero-left {
          display:flex;
          align-items:center;
          gap:18px;
        }

        .pp-hero-icon {
          width:55px;
          height:55px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:16px;
          background:rgba(255,255,255,.11);
          border:1px solid rgba(255,255,255,.17);
          flex-shrink:0;
        }

        .pp-eyebrow {
          display:block;
          font-size:10px;
          font-weight:900;
          letter-spacing:1.1px;
          color:#b8d8c5;
        }

        .pp-eyebrow.dark {
          color:#568067;
        }

        .pp-main-hero h1 {
          margin:5px 0 7px;
          font-size:25px;
          letter-spacing:-.4px;
        }

        .pp-main-hero p {
          max-width:700px;
          margin:0;
          color:#d5e8dc;
          line-height:1.6;
          font-size:13px;
        }

        .pp-hero-progress {
          width:245px;
          flex-shrink:0;
        }

        .pp-progress-top {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:10px;
          font-size:12px;
          font-weight:700;
          color:#dcebe3;
        }

        .pp-progress-top strong {
          color:white;
          font-size:20px;
        }

        .pp-hero-progress small {
          display:block;
          margin-top:8px;
          color:#c4dccd;
          font-size:11px;
        }

        .pp-content-grid {
          display:grid;
          grid-template-columns:minmax(0,1fr) 305px;
          gap:22px;
          margin-top:24px;
          align-items:start;
        }

        .pp-sections {
          min-width:0;
        }

        .pp-section-heading {
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:20px;
          margin-bottom:15px;
        }

        .pp-section-heading h2 {
          margin:5px 0 5px;
          color:#1b3f30;
          font-size:22px;
        }

        .pp-section-heading p {
          margin:0;
          max-width:700px;
          color:#74857b;
          font-size:13px;
          line-height:1.55;
        }

        .pp-section-list {
          display:flex;
          flex-direction:column;
          gap:10px;
        }

        .pp-section-card {
          border:1px solid #dbe7df;
          border-radius:17px;
          background:#fff;
          overflow:hidden;
          transition:.2s ease;
          box-shadow:0 3px 10px rgba(35,72,54,.025);
        }

        .pp-section-card:hover {
          border-color:#bdd6c6;
          box-shadow:0 8px 20px rgba(35,72,54,.06);
          transform:translateY(-1px);
        }

        .pp-section-card.active {
          border-color:#74a887;
          box-shadow:0 9px 24px rgba(36,91,63,.09);
        }

        .pp-section-card.complete {
          background:#fcfefc;
        }

        .pp-section-card-header {
          width:100%;
          min-height:84px;
          display:grid;
          grid-template-columns:46px 1fr auto;
          align-items:center;
          gap:15px;
          padding:15px 18px;
          border:0;
          background:transparent;
          text-align:left;
          cursor:pointer;
        }

        .pp-number {
          width:43px;
          height:43px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:13px;
          background:#edf5f0;
          color:#32664b;
          font-size:12px;
          font-weight:900;
          letter-spacing:.5px;
        }

        .pp-section-card.complete .pp-number {
          background:#dff0e5;
          color:#276443;
        }

        .pp-section-info {
          min-width:0;
        }

        .pp-title-line {
          display:flex;
          align-items:center;
          gap:10px;
          flex-wrap:wrap;
        }

        .pp-title-line h3 {
          margin:0;
          color:#284536;
          font-size:14px;
          font-weight:850;
        }

        .pp-section-info p {
          margin:5px 0 0;
          color:#89968f;
          font-size:12px;
          line-height:1.45;
        }

        .complete-label {
          display:inline-flex;
          align-items:center;
          gap:4px;
          color:#3d7d59;
          background:#eaf6ee;
          border-radius:999px;
          padding:4px 7px;
          font-size:9px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:.4px;
        }

        .pp-arrow {
          color:#6f887a;
          transition:.2s ease;
        }

        .pp-arrow.rotated {
          transform:rotate(90deg);
          color:#286247;
        }

        .pp-editor {
          margin:0 18px 18px;
          padding:18px;
          border-radius:14px;
          background:#f6faf7;
          border:1px solid #dce9e1;
        }

        .pp-editor-label {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:9px;
        }

        .pp-editor-label span {
          color:#365746;
          font-size:11px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:.7px;
        }

        .pp-editor-label small {
          color:#84938b;
          font-size:10px;
        }

        .pp-editor input,
        .pp-editor textarea {
          width:100%;
          box-sizing:border-box;
          border:1px solid #d2e0d8;
          border-radius:11px;
          background:white;
          padding:12px 13px;
          outline:none;
          color:#30483c;
          font:inherit;
          font-size:13px;
          resize:vertical;
        }

        .pp-editor input:focus,
        .pp-editor textarea:focus {
          border-color:#69a080;
          box-shadow:0 0 0 3px rgba(82,142,108,.08);
        }

        .pp-editor-footer {
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-top:9px;
        }

        .pp-editor-footer span {
          color:#89978f;
          font-size:10px;
        }

        .pp-editor-footer button {
          display:flex;
          align-items:center;
          gap:5px;
          border:0;
          border-radius:8px;
          padding:7px 10px;
          background:#e3f0e7;
          color:#286247;
          font-size:11px;
          font-weight:800;
          cursor:pointer;
        }

        .pp-sidebar {
          display:flex;
          flex-direction:column;
          gap:14px;
          position:sticky;
          top:16px;
        }

        .pp-side-card {
          padding:20px;
          border:1px solid #dce8e1;
          border-radius:18px;
          background:white;
          box-shadow:0 5px 15px rgba(36,75,55,.045);
        }

        .pp-side-icon,
        .export-card-icon {
          width:40px;
          height:40px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:12px;
          background:#eaf4ee;
          color:#316c4e;
          margin-bottom:13px;
        }

        .pp-side-card h3 {
          margin:5px 0 7px;
          color:#294638;
          font-size:16px;
        }

        .pp-side-card p {
          margin:0;
          color:#78887f;
          line-height:1.55;
          font-size:12px;
        }

        .pp-mini-progress {
          margin-top:18px;
        }

        .pp-mini-progress > div {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:9px;
          color:#718278;
          font-size:11px;
          font-weight:700;
        }

        .pp-mini-progress strong {
          color:#2d6749;
          font-size:16px;
        }

        .pp-side-title {
          display:flex;
          align-items:center;
          gap:8px;
          margin-bottom:16px;
          color:#32684b;
        }

        .pp-side-title h3 {
          margin:0;
        }

        .pp-check {
          display:flex;
          align-items:center;
          gap:8px;
          padding:8px 0;
          color:#64766c;
          font-size:11px;
          border-bottom:1px solid #edf1ee;
        }

        .pp-check:last-child {
          border-bottom:0;
        }

        .pp-check svg {
          color:#4c8a65;
          flex-shrink:0;
        }

        .export-card {
          background:linear-gradient(145deg,#f0f8f3,#fff);
        }

        .side-export-button {
          width:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:7px;
          margin-top:16px;
          padding:11px 13px;
          border:0;
          border-radius:10px;
          background:#286247;
          color:white;
          font-size:12px;
          font-weight:850;
          cursor:pointer;
        }

        .side-export-button:hover:not(:disabled) {
          background:#1d4d36;
        }

        .side-export-button:disabled {
          opacity:.65;
          cursor:wait;
        }

        .pp-side-warning {
          display:flex;
          gap:10px;
          padding:16px;
          border-radius:16px;
          border:1px solid #eadfcf;
          background:#fffaf1;
          color:#866d3e;
        }

        .pp-side-warning svg {
          flex-shrink:0;
          margin-top:1px;
        }

        .pp-side-warning strong {
          color:#71592e;
          font-size:12px;
        }

        .pp-side-warning p {
          margin:4px 0 0;
          color:#8b7a59;
          font-size:10px;
          line-height:1.55;
        }

        .pp-bottom-action {
          margin-top:23px;
          padding:21px 24px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          border:1px solid #d8e6de;
          border-radius:18px;
          background:#f5faf7;
        }

        .pp-bottom-action h3 {
          margin:5px 0 4px;
          color:#254936;
          font-size:17px;
        }

        .pp-bottom-action p {
          margin:0;
          color:#75867d;
          font-size:12px;
        }

        .pp-disclaimer {
          margin-top:18px;
          display:flex;
          gap:10px;
          padding:15px 17px;
          border-radius:13px;
          border:1px solid #dce8e1;
          background:#f8faf9;
          color:#718178;
        }

        .pp-disclaimer svg {
          color:#4a8062;
          flex-shrink:0;
        }

        .pp-disclaimer p {
          margin:0;
          font-size:11px;
          line-height:1.55;
        }

        @media(max-width:1000px) {
          .pp-content-grid {
            grid-template-columns:1fr;
          }

          .pp-sidebar {
            position:static;
          }

          .pp-main-hero {
            flex-direction:column;
            align-items:flex-start;
          }

          .pp-hero-progress {
            width:100%;
          }
        }

        @media(max-width:650px) {
          .pp-section-card-header {
            grid-template-columns:40px 1fr auto;
            padding:13px;
          }

          .pp-number {
            width:38px;
            height:38px;
          }

          .pp-bottom-action {
            flex-direction:column;
            align-items:flex-start;
          }
        }
      `})]})}const bp=[{id:"ananya",name:"Dr. Ananya Mehta",role:"IP & Patent Strategy Expert",experience:"12+ Years",specialty:"Patent Strategy",initials:"AM",rating:"4.9",reviews:86,verified:!0,about:"Specialized in patent strategy, prior-art interpretation and IP protection planning for innovation-led products.",expertise:["Patent Strategy","Prior Art","IP Risk","Claims Review"]},{id:"kavya",name:"Dr. Kavya Sharma",role:"Ayurveda Research Expert",experience:"10+ Years",specialty:"Evidence & Research",initials:"KS",rating:"4.8",reviews:71,verified:!0,about:"Focuses on Ayurveda research evidence, formulation documentation and evidence-readiness assessment.",expertise:["Clinical Evidence","Research","Formulation","Evidence Gap"]},{id:"rahul",name:"Dr. Rahul Verma",role:"AYUSH Regulatory Expert",experience:"14+ Years",specialty:"Regulatory Compliance",initials:"RV",rating:"4.9",reviews:94,verified:!0,about:"Helps innovators understand regulatory pathways, documentation requirements and jurisdiction-specific compliance.",expertise:["AYUSH","Compliance","Regulatory Path","Documentation"]}],wp=[{id:"patent",title:"Patent Readiness",score:82,icon:ce,color:"green",description:"Check whether the innovation is sufficiently prepared for patent-oriented review.",points:["Technical contribution","Novelty signals","Claim scope","Documentation"]},{id:"prior-art",title:"Prior Art Review",score:74,icon:Ng,color:"blue",description:"Review similarity signals against existing patents and knowledge records.",points:["Similar patents","Ingredient overlap","Use-case overlap","Risk signals"]},{id:"evidence",title:"Evidence Review",score:68,icon:Ce,color:"amber",description:"Identify evidence strengths and remaining research gaps.",points:["Clinical evidence","Safety evidence","Efficacy","References"]},{id:"regulatory",title:"Regulatory Review",score:76,icon:hn,color:"purple",description:"Review the preliminary regulatory and documentation pathway.",points:["Product category","Documents","Compliance","Jurisdiction"]}];function Ng(a){return n.jsx(Ce,{...a})}const Sg={patent:{title:"Patent Readiness Review",score:82,summary:"Your innovation shows several preparation signals, but professional review is recommended before filing decisions.",actions:["Review novelty and inventive contribution","Validate prior-art findings","Refine claim boundaries","Prepare supporting technical documentation"]},"prior-art":{title:"Prior Art Review",score:74,summary:"Similarity signals should be reviewed against the cited records before drawing conclusions about novelty.",actions:["Inspect closest matching records","Compare ingredients and applications","Review classification overlap","Document distinguishing features"]},evidence:{title:"Evidence Review",score:68,summary:"Some evidence areas require additional documentation before the innovation can be considered evidence-ready.",actions:["Identify missing clinical evidence","Strengthen efficacy documentation","Organize research references","Track evidence gaps"]},regulatory:{title:"Regulatory Review",score:76,summary:"The preliminary pathway is visible, but final requirements depend on product category and jurisdiction.",actions:["Confirm product classification","Prepare required documents","Check applicable AYUSH pathway","Review jurisdiction-specific requirements"]}};function zg({onContinue:a}){const[c,l]=E.useState(null),[p,u]=E.useState(null),[f,m]=E.useState(!1),[N,b]=E.useState(!1),[g,P]=E.useState(!1),[C,A]=E.useState(!1),[T,O]=E.useState(null),[z,k]=E.useState("11:30 AM"),I="Ayurvedic Herbal Wellness Formulation";async function V(B){A(!0),l(B);try{const ae=await fetch(`http://localhost:4000/api/expert-review/${B.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertId:B.id,innovationTitle:I})});if(!ae.ok)throw new Error("Backend unavailable");const de=await ae.json();P(!0),de&&O(de)}catch{P(!1),O(null)}finally{A(!1)}}function Q(B){u(B),O(Sg[B.id])}function Y(){l(null),u(null),O(null),m(!1)}function X(){b(!0),setTimeout(()=>{b(!1),m(!1)},2600)}return c?n.jsxs("div",{className:"expert-page",children:[n.jsxs("div",{className:"expert-container",children:[n.jsxs("button",{className:"back-button",onClick:Y,children:[n.jsx(Ts,{size:18}),"Back to Expert Review"]}),n.jsxs("section",{className:"expert-profile-hero",children:[n.jsxs("div",{className:"profile-left",children:[n.jsx("div",{className:"expert-avatar large",children:c.initials}),n.jsxs("div",{children:[n.jsxs("div",{className:"verified-pill",children:[n.jsx(ie,{size:14}),"Verified Expert"]}),n.jsx("h1",{children:c.name}),n.jsx("p",{children:c.role}),n.jsxs("div",{className:"profile-meta",children:[n.jsx("span",{children:c.experience}),n.jsxs("span",{children:["★ ",c.rating]}),n.jsxs("span",{children:[c.reviews," Reviews"]})]})]})]}),n.jsxs("button",{className:"consult-button",onClick:()=>m(!0),children:[n.jsx(bs,{size:18}),"Request Consultation"]})]}),n.jsxs("div",{className:"connection-strip",children:[n.jsxs("div",{children:[n.jsx("span",{className:`status-dot ${g?"online":""}`}),g?"Expert analysis connected to backend":"Local expert workspace active"]}),n.jsx("span",{className:"innovation-tag",children:I})]}),n.jsxs("div",{className:"workspace-grid",children:[n.jsxs("main",{children:[n.jsxs("section",{className:"green-panel",children:[n.jsxs("div",{className:"panel-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eyebrow",children:"EXPERT PROFILE"}),n.jsx("h2",{children:"About the Expert"})]}),n.jsx(Cx,{size:24})]}),n.jsx("p",{className:"about-text",children:c.about}),n.jsx("div",{className:"expertise-grid",children:c.expertise.map(B=>n.jsxs("div",{className:"expertise-card",children:[n.jsx("div",{className:"mini-check",children:n.jsx(ie,{size:15})}),n.jsx("span",{children:B})]},B))})]}),n.jsxs("section",{className:"section-block",children:[n.jsxs("div",{className:"section-title",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eyebrow",children:"REVIEW WORKSPACE"}),n.jsx("h2",{children:"What should be reviewed?"})]}),n.jsx(fe,{size:22})]}),n.jsx("div",{className:"review-grid",children:wp.map(B=>{const ae=B.icon,de=(p==null?void 0:p.id)===B.id;return n.jsxs("button",{className:`review-card ${de?"active":""}`,onClick:()=>Q(B),children:[n.jsxs("div",{className:"review-card-top",children:[n.jsx("div",{className:`area-icon ${B.color}`,children:n.jsx(ae,{size:21})}),n.jsxs("div",{className:"score-badge",children:[B.score,"%"]})]}),n.jsx("h3",{children:B.title}),n.jsx("p",{children:B.description}),n.jsxs("div",{className:"card-bottom",children:[n.jsx("span",{children:"Open review"}),n.jsx(J,{size:17})]})]},B.id)})})]}),T&&n.jsxs("section",{className:"analysis-panel",children:[n.jsxs("div",{className:"analysis-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eyebrow",children:"EXPERT ANALYSIS"}),n.jsx("h2",{children:T.title})]}),n.jsx("button",{className:"close-small",onClick:()=>O(null),children:n.jsx(ri,{size:17})})]}),n.jsxs("div",{className:"analysis-content",children:[n.jsxs("div",{className:"score-circle",children:[n.jsxs("strong",{children:[T.score??76,"%"]}),n.jsx("span",{children:"Readiness"})]}),n.jsxs("div",{className:"analysis-summary",children:[n.jsx("p",{children:T.summary||"Expert review information is ready for discussion."}),n.jsx("h4",{children:"Recommended Actions"}),n.jsx("div",{className:"action-list",children:(T.actions||[]).map((B,ae)=>n.jsxs("div",{className:"action-row",children:[n.jsx(ie,{size:17}),n.jsx("span",{children:B})]},ae))})]})]}),n.jsxs("button",{className:"green-action",onClick:()=>m(!0),children:[n.jsx($p,{size:18}),"Discuss This With Expert",n.jsx(J,{size:18})]})]})]}),n.jsxs("aside",{className:"side-column",children:[n.jsxs("div",{className:"consult-card",children:[n.jsx("div",{className:"consult-icon",children:n.jsx(bs,{size:24})}),n.jsx("span",{className:"eyebrow light",children:"PROFESSIONAL REVIEW"}),n.jsx("h2",{children:"Need an expert opinion?"}),n.jsx("p",{children:"Connect your innovation with a domain expert for structured review and discussion."}),n.jsxs("div",{className:"consult-points",children:[n.jsxs("div",{children:[n.jsx(ie,{size:16}),"Patent & IP guidance"]}),n.jsxs("div",{children:[n.jsx(ie,{size:16}),"Evidence review"]}),n.jsxs("div",{children:[n.jsx(ie,{size:16}),"Regulatory discussion"]})]}),n.jsxs("button",{className:"white-action",onClick:()=>m(!0),children:["Request Consultation",n.jsx(J,{size:17})]})]}),n.jsxs("div",{className:"journey-card",children:[n.jsx("span",{className:"eyebrow",children:"NEXT IN JOURNEY"}),n.jsx("div",{className:"journey-icon",children:n.jsx(hn,{size:21})}),n.jsx("h3",{children:"Professional Validation"}),n.jsx("p",{children:"Review your preparation before moving toward patent filing or commercialization."}),n.jsxs("button",{onClick:()=>a==null?void 0:a(),children:["Continue Journey",n.jsx(J,{size:16})]})]})]})]})]}),f&&n.jsx(Eg,{expert:c,selectedSlot:z,setSelectedSlot:k,onClose:()=>m(!1),onConfirm:X,booked:N}),n.jsx("style",{children:kp})]}):n.jsxs("div",{className:"expert-page",children:[n.jsxs("div",{className:"expert-container",children:[n.jsxs("section",{className:"page-hero",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"hero-kicker",children:[n.jsx(ce,{size:16}),"PROFESSIONAL EXPERT REVIEW"]}),n.jsx("h1",{children:"Expert Review"}),n.jsx("p",{children:"Connect your Ayurveda innovation with domain experts for IP, evidence and regulatory review."})]}),n.jsxs("div",{className:"hero-stat",children:[n.jsx("strong",{children:"03"}),n.jsx("span",{children:"Domain Experts"})]})]}),n.jsxs("section",{className:"innovation-strip",children:[n.jsx("div",{className:"innovation-icon",children:n.jsx(fe,{size:22})}),n.jsxs("div",{children:[n.jsx("span",{children:"Your Current Innovation"}),n.jsx("strong",{children:I})]}),n.jsxs("div",{className:"status-chip",children:[n.jsx(ie,{size:15}),"Ready for Review"]})]}),n.jsx("div",{className:"section-title main-title",children:n.jsxs("div",{children:[n.jsx("span",{className:"eyebrow",children:"DOMAIN EXPERTS"}),n.jsx("h2",{children:"Choose an expert"}),n.jsx("p",{children:"Get specialized guidance for your innovation journey."})]})}),n.jsx("div",{className:"expert-grid",children:bp.map(B=>n.jsxs("div",{className:"expert-card",children:[n.jsxs("div",{className:"expert-card-top",children:[n.jsx("div",{className:"expert-avatar",children:B.initials}),B.verified&&n.jsxs("span",{className:"verified-small",children:[n.jsx(ie,{size:13}),"Verified"]})]}),n.jsx("h3",{children:B.name}),n.jsx("span",{className:"expert-role",children:B.role}),n.jsxs("div",{className:"expert-stats",children:[n.jsxs("div",{children:[n.jsx("strong",{children:B.experience}),n.jsx("span",{children:"Experience"})]}),n.jsxs("div",{children:[n.jsxs("strong",{children:["★ ",B.rating]}),n.jsx("span",{children:"Rating"})]})]}),n.jsxs("div",{className:"specialty-box",children:[n.jsx(fe,{size:15}),B.specialty]}),n.jsxs("button",{className:"view-expert",onClick:()=>V(B),children:[C&&(c==null?void 0:c.id)===B.id?"Opening...":"View Expert",n.jsx(J,{size:17})]})]},B.id))}),n.jsxs("section",{className:"review-overview",children:[n.jsxs("div",{className:"section-title",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eyebrow",children:"REVIEW COVERAGE"}),n.jsx("h2",{children:"Areas your expert can review"})]}),n.jsx(hn,{size:24})]}),n.jsx("div",{className:"overview-grid",children:wp.map(B=>{const ae=B.icon;return n.jsxs("div",{className:"overview-card",children:[n.jsx("div",{className:`area-icon ${B.color}`,children:n.jsx(ae,{size:20})}),n.jsxs("div",{children:[n.jsx("h3",{children:B.title}),n.jsx("p",{children:B.description})]}),n.jsxs("span",{className:"overview-score",children:[B.score,"%"]})]},B.id)})})]}),n.jsxs("section",{className:"bottom-cta",children:[n.jsxs("div",{children:[n.jsx("span",{className:"eyebrow light",children:"READY TO MOVE FORWARD?"}),n.jsx("h2",{children:"Get your innovation professionally reviewed."}),n.jsx("p",{children:"Discuss your IP, evidence or regulatory questions directly with a relevant expert."})]}),n.jsxs("button",{onClick:()=>V(bp[0]),children:[n.jsx(bs,{size:18}),"Request Expert Review",n.jsx(J,{size:18})]})]})]}),n.jsx("style",{children:kp})]})}function Eg({expert:a,selectedSlot:c,setSelectedSlot:l,onClose:p,onConfirm:u,booked:f}){return n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"booking-modal",children:[n.jsx("button",{className:"modal-close",onClick:p,children:n.jsx(ri,{size:19})}),f?n.jsxs("div",{className:"success-screen",children:[n.jsx("div",{className:"success-icon",children:n.jsx(ie,{size:38})}),n.jsx("h2",{children:"Consultation Requested"}),n.jsxs("p",{children:["Your request for a consultation with ",a.name," has been prepared successfully."]}),n.jsxs("div",{className:"success-time",children:[n.jsx(bs,{size:17}),c," · Video Call"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"booking-head",children:[n.jsx("div",{className:"booking-avatar",children:a.initials}),n.jsxs("div",{children:[n.jsx("span",{className:"eyebrow",children:"REQUEST CONSULTATION"}),n.jsx("h2",{children:a.name}),n.jsx("p",{children:a.role})]})]}),n.jsxs("div",{className:"booking-section",children:[n.jsx("label",{children:"Consultation Mode"}),n.jsxs("div",{className:"mode-grid",children:[n.jsxs("button",{className:"mode-card active",children:[n.jsx(Ix,{size:19}),n.jsx("span",{children:"Video Call"}),n.jsx("small",{children:"30 minutes"})]}),n.jsxs("button",{className:"mode-card",children:[n.jsx($p,{size:19}),n.jsx("span",{children:"Chat Review"}),n.jsx("small",{children:"Async discussion"})]})]})]}),n.jsxs("div",{className:"booking-section",children:[n.jsxs("label",{children:[n.jsx(Bp,{size:16}),"Available Time"]}),n.jsx("div",{className:"slots",children:["10:00 AM","11:30 AM","2:00 PM","4:30 PM"].map(m=>n.jsx("button",{className:c===m?"selected":"",onClick:()=>l(m),children:m},m))})]}),n.jsxs("div",{className:"booking-summary",children:[n.jsx("span",{children:"Expert"}),n.jsx("strong",{children:a.name}),n.jsx("span",{children:"Time"}),n.jsx("strong",{children:c})]}),n.jsxs("button",{className:"confirm-button",onClick:u,children:["Confirm Consultation",n.jsx(J,{size:18})]})]})]})})}const kp=`
.expert-page {
  min-height: 100%;
  padding: 30px;
  background:
    radial-gradient(circle at 10% 0%, rgba(35,112,76,.08), transparent 28%),
    linear-gradient(135deg,#f6faf7 0%,#edf5ef 100%);
  color:#193326;
}

.expert-container {
  width:100%;
  max-width:1450px;
  margin:auto;
}

.page-hero {
  min-height:190px;
  padding:34px 38px;
  border-radius:25px;
  background:linear-gradient(135deg,#174c35,#236b4b);
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:30px;
  box-shadow:0 16px 40px rgba(23,76,53,.16);
}

.hero-kicker,.eyebrow {
  display:inline-flex;
  align-items:center;
  gap:7px;
  font-size:11px;
  font-weight:800;
  letter-spacing:1.4px;
  color:#347955;
}

.hero-kicker {
  color:#ccebd8;
  margin-bottom:10px;
}

.eyebrow.light {
  color:#bfe7cf;
}

.page-hero h1 {
  margin:0;
  font-size:40px;
  letter-spacing:-1px;
}

.page-hero p {
  max-width:680px;
  margin:10px 0 0;
  color:#d5ebdc;
  line-height:1.65;
  font-size:15px;
}

.hero-stat {
  min-width:145px;
  padding:20px;
  border:1px solid rgba(255,255,255,.2);
  background:rgba(255,255,255,.09);
  border-radius:18px;
  text-align:center;
}

.hero-stat strong {
  display:block;
  font-size:34px;
}

.hero-stat span {
  color:#d2ebdc;
  font-size:12px;
}

.innovation-strip {
  margin-top:20px;
  padding:18px 22px;
  border-radius:18px;
  background:#e2f2e7;
  border:1px solid #c8e4d1;
  display:flex;
  align-items:center;
  gap:15px;
}

.innovation-icon {
  width:46px;
  height:46px;
  border-radius:14px;
  background:#1f6847;
  color:white;
  display:grid;
  place-items:center;
}

.innovation-strip span {
  display:block;
  color:#638170;
  font-size:11px;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:.8px;
}

.innovation-strip strong {
  display:block;
  margin-top:4px;
  font-size:16px;
}

.status-chip {
  margin-left:auto;
  display:flex;
  align-items:center;
  gap:7px;
  padding:9px 13px;
  background:#fff;
  border:1px solid #cde1d4;
  color:#26704b;
  border-radius:999px;
  font-size:12px;
  font-weight:700;
}

.main-title {
  margin:34px 0 17px;
}

.section-title {
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:20px;
}

.section-title h2 {
  margin:4px 0 5px;
  font-size:24px;
}

.section-title p {
  margin:0;
  color:#6c8276;
  font-size:13px;
}

.expert-grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.expert-card {
  background:#fff;
  border:1px solid #d7e7dc;
  border-radius:22px;
  padding:23px;
  box-shadow:0 7px 24px rgba(31,73,51,.055);
  transition:.2s ease;
}

.expert-card:hover {
  transform:translateY(-3px);
  border-color:#a9ceb8;
  box-shadow:0 12px 30px rgba(31,73,51,.10);
}

.expert-card-top {
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
}

.expert-avatar {
  width:58px;
  height:58px;
  border-radius:17px;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,#2b8157,#164b34);
  color:white;
  font-size:18px;
  font-weight:800;
}

.expert-avatar.large {
  width:80px;
  height:80px;
  border-radius:23px;
  font-size:25px;
}

.verified-small,.verified-pill {
  display:flex;
  align-items:center;
  gap:5px;
  color:#24714a;
  background:#e8f6ed;
  border:1px solid #cbe6d4;
  border-radius:999px;
  padding:6px 9px;
  font-size:10px;
  font-weight:800;
}

.expert-card h3 {
  margin:19px 0 5px;
  font-size:19px;
}

.expert-role {
  color:#6a8175;
  font-size:12px;
}

.expert-stats {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:9px;
  margin-top:18px;
}

.expert-stats div {
  padding:12px;
  background:#f3f8f4;
  border-radius:12px;
}

.expert-stats strong,
.expert-stats span {
  display:block;
}

.expert-stats strong {
  font-size:13px;
}

.expert-stats span {
  color:#7a8e83;
  font-size:10px;
  margin-top:3px;
}

.specialty-box {
  display:flex;
  align-items:center;
  gap:7px;
  margin-top:12px;
  padding:11px 12px;
  border-radius:12px;
  background:#e7f5eb;
  color:#26704b;
  font-size:12px;
  font-weight:700;
}

.view-expert,
.green-action,
.confirm-button {
  border:0;
  cursor:pointer;
}

.view-expert {
  width:100%;
  margin-top:15px;
  padding:13px;
  border-radius:12px;
  background:#19573b;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:8px;
  font-weight:700;
}

.review-overview {
  margin-top:25px;
  padding:25px;
  border-radius:22px;
  background:#e7f3ea;
  border:1px solid #c9dfd0;
}

.overview-grid {
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
  margin-top:20px;
}

.overview-card {
  position:relative;
  min-height:130px;
  padding:18px;
  background:#fff;
  border:1px solid #d6e6da;
  border-radius:17px;
}

.area-icon {
  width:42px;
  height:42px;
  display:grid;
  place-items:center;
  border-radius:12px;
  margin-bottom:13px;
}

.area-icon.green { background:#e0f2e7;color:#237149; }
.area-icon.blue { background:#e5eff8;color:#34719e; }
.area-icon.amber { background:#f9efdb;color:#9b6c24; }
.area-icon.purple { background:#eee8f7;color:#7653a0; }

.overview-card h3 {
  margin:0;
  font-size:14px;
}

.overview-card p {
  margin:6px 0 0;
  color:#718479;
  font-size:11px;
  line-height:1.5;
}

.overview-score {
  position:absolute;
  right:15px;
  top:17px;
  font-size:12px;
  color:#24704a;
  font-weight:800;
}

.bottom-cta {
  margin-top:25px;
  padding:27px 30px;
  border-radius:22px;
  background:linear-gradient(135deg,#174c35,#246b4b);
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:25px;
}

.bottom-cta h2 {
  margin:5px 0 7px;
  font-size:24px;
}

.bottom-cta p {
  margin:0;
  color:#c9e5d3;
  font-size:13px;
}

.bottom-cta button {
  border:0;
  padding:14px 18px;
  border-radius:13px;
  background:white;
  color:#19583c;
  display:flex;
  align-items:center;
  gap:8px;
  font-weight:800;
  cursor:pointer;
  white-space:nowrap;
}

.back-button {
  border:0;
  background:transparent;
  color:#42715b;
  display:flex;
  align-items:center;
  gap:7px;
  cursor:pointer;
  font-weight:700;
  margin-bottom:18px;
}

.expert-profile-hero {
  padding:28px;
  border-radius:24px;
  background:linear-gradient(135deg,#174c35,#266d4d);
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:25px;
}

.profile-left {
  display:flex;
  align-items:center;
  gap:18px;
}

.expert-profile-hero h1 {
  margin:7px 0 4px;
  font-size:29px;
}

.expert-profile-hero p {
  margin:0;
  color:#cfe7d8;
}

.profile-meta {
  display:flex;
  gap:17px;
  margin-top:11px;
  color:#d5eadc;
  font-size:11px;
}

.consult-button {
  border:0;
  background:#fff;
  color:#18583c;
  padding:13px 17px;
  border-radius:12px;
  display:flex;
  align-items:center;
  gap:8px;
  font-weight:800;
  cursor:pointer;
}

.connection-strip {
  margin:15px 0;
  padding:11px 15px;
  border-radius:12px;
  background:#fff;
  border:1px solid #d8e7dc;
  display:flex;
  justify-content:space-between;
  color:#60776b;
  font-size:11px;
}

.status-dot {
  display:inline-block;
  width:8px;
  height:8px;
  border-radius:50%;
  background:#d5a337;
  margin-right:7px;
}

.status-dot.online {
  background:#32a568;
}

.innovation-tag {
  color:#26704b;
  font-weight:700;
}

.workspace-grid {
  display:grid;
  grid-template-columns:minmax(0,1fr) 320px;
  gap:20px;
}

.green-panel {
  padding:25px;
  border-radius:21px;
  background:#e5f3e9;
  border:1px solid #c9e1d0;
}

.panel-heading {
  display:flex;
  justify-content:space-between;
  color:#27704a;
}

.panel-heading h2 {
  margin:4px 0 0;
  color:#193326;
  font-size:21px;
}

.about-text {
  color:#62786c;
  line-height:1.7;
  font-size:13px;
  max-width:850px;
}

.expertise-grid {
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
}

.expertise-card {
  background:white;
  border:1px solid #d6e7db;
  padding:13px;
  border-radius:13px;
  display:flex;
  align-items:center;
  gap:8px;
  font-size:11px;
  font-weight:700;
}

.mini-check {
  color:#278052;
}

.section-block {
  margin-top:21px;
  padding:25px;
  border-radius:21px;
  background:white;
  border:1px solid #d8e7dc;
}

.review-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:13px;
  margin-top:20px;
}

.review-card {
  text-align:left;
  border:1px solid #d8e7dc;
  background:#f9fcfa;
  padding:18px;
  border-radius:17px;
  cursor:pointer;
  transition:.2s;
}

.review-card:hover,
.review-card.active {
  border-color:#67a47f;
  background:#eef8f1;
}

.review-card-top {
  display:flex;
  justify-content:space-between;
}

.score-badge {
  color:#24734b;
  background:#e2f2e7;
  padding:6px 9px;
  border-radius:999px;
  font-size:11px;
  font-weight:800;
}

.review-card h3 {
  margin:12px 0 5px;
  font-size:15px;
}

.review-card p {
  margin:0;
  color:#708378;
  font-size:11px;
  line-height:1.55;
}

.card-bottom {
  margin-top:14px;
  color:#26704b;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size:11px;
  font-weight:800;
}

.analysis-panel {
  margin-top:20px;
  padding:25px;
  border-radius:21px;
  background:#e5f3e9;
  border:1px solid #c8dfcf;
}

.analysis-header {
  display:flex;
  justify-content:space-between;
}

.analysis-header h2 {
  margin:5px 0 0;
  font-size:22px;
}

.close-small,.modal-close {
  width:35px;
  height:35px;
  border:1px solid #c9ddd0;
  background:white;
  color:#426956;
  border-radius:10px;
  display:grid;
  place-items:center;
  cursor:pointer;
}

.analysis-content {
  margin-top:20px;
  display:flex;
  gap:25px;
  align-items:center;
}

.score-circle {
  width:115px;
  height:115px;
  flex:none;
  border-radius:50%;
  background:conic-gradient(#26764e 0 76%,#d6e6da 76% 100%);
  display:grid;
  place-items:center;
  position:relative;
}

.score-circle:after {
  content:"";
  position:absolute;
  inset:9px;
  background:#e5f3e9;
  border-radius:50%;
}

.score-circle strong,
.score-circle span {
  position:relative;
  z-index:1;
}

.score-circle strong {
  font-size:24px;
}

.score-circle span {
  margin-top:42px;
  font-size:9px;
  color:#6e8477;
}

.analysis-summary {
  flex:1;
}

.analysis-summary p {
  color:#62796c;
  font-size:13px;
  line-height:1.6;
}

.analysis-summary h4 {
  margin:15px 0 9px;
}

.action-list {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
}

.action-row {
  background:white;
  padding:10px;
  border-radius:10px;
  display:flex;
  gap:7px;
  color:#397458;
  font-size:11px;
}

.green-action {
  margin-top:20px;
  padding:13px 17px;
  border-radius:12px;
  background:#195a3d;
  color:white;
  display:flex;
  align-items:center;
  gap:8px;
  font-weight:800;
}

.consult-card {
  padding:24px;
  border-radius:21px;
  background:linear-gradient(145deg,#164b34,#246c4c);
  color:white;
}

.consult-icon {
  width:48px;
  height:48px;
  border-radius:14px;
  background:rgba(255,255,255,.12);
  display:grid;
  place-items:center;
  margin-bottom:20px;
}

.consult-card h2 {
  margin:6px 0;
  font-size:21px;
}

.consult-card p {
  color:#c9e4d2;
  font-size:12px;
  line-height:1.6;
}

.consult-points {
  margin:20px 0;
  display:grid;
  gap:10px;
}

.consult-points div {
  display:flex;
  gap:8px;
  align-items:center;
  font-size:11px;
  color:#d9ece0;
}

.white-action {
  width:100%;
  border:0;
  padding:13px;
  border-radius:12px;
  background:white;
  color:#195a3d;
  font-weight:800;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:7px;
}

.journey-card {
  margin-top:15px;
  padding:21px;
  border-radius:21px;
  background:#fff;
  border:1px solid #d7e7dc;
}

.journey-icon {
  width:42px;
  height:42px;
  margin:14px 0 10px;
  display:grid;
  place-items:center;
  color:#26714b;
  background:#e3f3e8;
  border-radius:12px;
}

.journey-card h3 {
  margin:0;
  font-size:16px;
}

.journey-card p {
  color:#708378;
  font-size:11px;
  line-height:1.6;
}

.journey-card button {
  border:0;
  background:transparent;
  color:#26704b;
  display:flex;
  align-items:center;
  gap:6px;
  font-weight:800;
  cursor:pointer;
  padding:0;
}

.modal-overlay {
  position:fixed;
  inset:0;
  z-index:1000;
  background:rgba(10,30,20,.52);
  display:grid;
  place-items:center;
  padding:20px;
}

.booking-modal {
  width:min(560px,100%);
  max-height:90vh;
  overflow:auto;
  padding:27px;
  border-radius:24px;
  background:white;
  box-shadow:0 25px 70px rgba(0,0,0,.2);
  position:relative;
}

.modal-close {
  position:absolute;
  right:18px;
  top:18px;
}

.booking-head {
  display:flex;
  align-items:center;
  gap:14px;
  padding-right:35px;
}

.booking-avatar {
  width:55px;
  height:55px;
  display:grid;
  place-items:center;
  border-radius:16px;
  background:#1d6545;
  color:white;
  font-weight:800;
}

.booking-head h2 {
  margin:5px 0 2px;
  font-size:20px;
}

.booking-head p {
  margin:0;
  color:#74877d;
  font-size:11px;
}

.booking-section {
  margin-top:23px;
}

.booking-section label {
  display:flex;
  align-items:center;
  gap:6px;
  margin-bottom:10px;
  font-size:12px;
  font-weight:800;
}

.mode-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}

.mode-card {
  border:1px solid #d9e7dd;
  background:#f8fbf9;
  border-radius:13px;
  padding:13px;
  text-align:left;
  cursor:pointer;
  color:#3e6250;
}

.mode-card.active {
  border-color:#6da583;
  background:#e8f5ec;
}

.mode-card span,
.mode-card small {
  display:block;
  margin-top:5px;
}

.mode-card span {
  font-weight:800;
  font-size:12px;
}

.mode-card small {
  color:#7b8d83;
}

.slots {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:9px;
}

.slots button {
  padding:11px;
  border:1px solid #d8e6dc;
  background:white;
  border-radius:10px;
  cursor:pointer;
  font-size:12px;
}

.slots button.selected {
  background:#195a3d;
  color:white;
  border-color:#195a3d;
}

.booking-summary {
  margin-top:20px;
  padding:14px;
  background:#eef7f1;
  border-radius:13px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:7px;
  font-size:11px;
}

.booking-summary span {
  color:#718479;
}

.confirm-button {
  width:100%;
  margin-top:15px;
  padding:14px;
  border-radius:12px;
  background:#195a3d;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:8px;
  font-weight:800;
}

.success-screen {
  text-align:center;
  padding:35px 15px 20px;
}

.success-icon {
  width:72px;
  height:72px;
  border-radius:50%;
  background:#e3f5e9;
  color:#28794e;
  display:grid;
  place-items:center;
  margin:0 auto 17px;
}

.success-screen h2 {
  margin:0 0 7px;
}

.success-screen p {
  color:#718278;
  font-size:13px;
  line-height:1.6;
}

.success-time {
  margin:18px auto 0;
  width:max-content;
  max-width:100%;
  padding:10px 14px;
  border-radius:10px;
  background:#e8f5ec;
  color:#286f4a;
  display:flex;
  align-items:center;
  gap:7px;
  font-size:11px;
  font-weight:800;
}

@media(max-width:1050px) {
  .expert-grid,
  .overview-grid {
    grid-template-columns:1fr 1fr;
  }

  .workspace-grid {
    grid-template-columns:1fr;
  }

  .expertise-grid {
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:700px) {
  .expert-page {
    padding:15px;
  }

  .page-hero,
  .bottom-cta,
  .expert-profile-hero {
    flex-direction:column;
    align-items:flex-start;
  }

  .expert-grid,
  .overview-grid,
  .review-grid,
  .action-list {
    grid-template-columns:1fr;
  }

  .hero-stat {
    width:100%;
  }

  .status-chip {
    margin-left:0;
  }

  .innovation-strip {
    flex-wrap:wrap;
  }

  .expertise-grid {
    grid-template-columns:1fr 1fr;
  }

  .profile-left {
    align-items:flex-start;
  }

  .consult-button {
    width:100%;
    justify-content:center;
  }
}
`,Np=[{id:"overview",number:"01",title:"Innovation Overview",icon:fe,desc:"Core idea, purpose and innovation summary.",status:"Ready",content:[["Innovation Name","Ayurvedic Herbal Wellness Formulation"],["Domain","Ayurveda / Herbal Wellness"],["Primary Purpose","Wellness-focused herbal formulation"],["Innovation Stage","Prototype / Early Validation"]]},{id:"technical",number:"02",title:"Technical Description",icon:an,desc:"Technical concept, ingredients and working principle.",status:"Review",content:[["Technical Field","Ayurvedic formulation and herbal wellness"],["Core Concept","Combination of selected herbal ingredients"],["Process","Formulation → Testing → Validation"],["Technical Effect","Defined through evidence and comparative analysis"]]},{id:"ip",number:"03",title:"IP & Prior Art Intelligence",icon:ce,desc:"IP signals, prior-art findings and protection considerations.",status:"Analyzed",content:[["IP Route","Patent / Documentation review"],["Prior Art Signal","Moderate similarity detected"],["Novelty Signal","Requires expert validation"],["Risk","Medium — further comparison recommended"]]},{id:"evidence",number:"04",title:"Evidence & Research",icon:hn,desc:"Research evidence, gaps and supporting documentation.",status:"Partial",content:[["Clinical Evidence","Additional evidence recommended"],["Safety Evidence","Documentation required"],["Efficacy","Further validation recommended"],["References","Research sources available for review"]]},{id:"regulatory",number:"05",title:"Regulatory Pathway",icon:Ce,desc:"Preliminary regulatory and compliance information.",status:"Review",content:[["Product Category","Ayurveda / Herbal product"],["Jurisdiction","India — preliminary pathway"],["Documents","Product and evidence documentation"],["Next Step","Professional regulatory review"]]}];function Cg({onContinue:a}){const[c,l]=E.useState(null),[p,u]=E.useState(!1),[f,m]=E.useState(""),[N,b]=E.useState(!1),g={title:"Ayurvedic Herbal Wellness Formulation",domain:"Ayurveda / Herbal Wellness",stage:"Prototype / Early Validation"};async function P(A){try{const T=await fetch(`http://localhost:4000/api/dossier/${A.id}`);if(T.ok){const O=await T.json();b(!0),l({...A,backendData:O});return}}catch{b(!1)}l(A)}async function C(){u(!0),m("");try{const A=await fetch("http://localhost:4000/api/dossier/export-pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({innovation:g,sections:Np})});if(!A.ok)throw new Error("PDF export unavailable");const T=await A.blob(),O=window.URL.createObjectURL(T),z=document.createElement("a");z.href=O,z.download="IP_Shakti_Sahayak_Innovation_Dossier.pdf",document.body.appendChild(z),z.click(),z.remove(),window.URL.revokeObjectURL(O),m("Innovation Dossier PDF downloaded successfully.")}catch{m("PDF export backend is not connected. Please start the backend and try again.")}finally{u(!1),setTimeout(()=>{m("")},3500)}}return c?n.jsxs("div",{className:"dossier-page",children:[n.jsxs("div",{className:"dossier-container",children:[n.jsxs("button",{className:"back-btn",onClick:()=>l(null),children:[n.jsx(Ts,{size:18}),"Back to Innovation Dossier"]}),n.jsxs("section",{className:"detail-hero",children:[n.jsx("div",{className:"detail-number",children:c.number}),n.jsxs("div",{children:[n.jsx("span",{children:"INNOVATION DOSSIER"}),n.jsx("h1",{children:c.title}),n.jsx("p",{children:c.desc})]})]}),n.jsxs("section",{className:"detail-card",children:[n.jsxs("div",{className:"detail-header",children:[n.jsxs("div",{children:[n.jsx("small",{children:"SECTION ANALYSIS"}),n.jsx("h2",{children:c.title})]}),n.jsx("button",{className:"close-btn",onClick:()=>l(null),children:n.jsx(ri,{size:18})})]}),n.jsx("div",{className:"detail-grid",children:c.content.map(([A,T])=>n.jsxs("div",{className:"detail-box",children:[n.jsx("span",{children:A}),n.jsx("strong",{children:T})]},A))}),n.jsxs("div",{className:"analysis-note",children:[n.jsx("div",{className:"note-icon",children:n.jsx(fe,{size:19})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Intelligence Note"}),n.jsx("p",{children:"This section provides a preliminary intelligence view. Final IP, regulatory and legal conclusions should be validated with the relevant professional."})]})]}),n.jsxs("button",{className:"detail-action",onClick:()=>l(null),children:["Return to Dossier",n.jsx(J,{size:17})]})]})]}),n.jsx("style",{children:Sp})]}):n.jsxs("div",{className:"dossier-page",children:[n.jsxs("div",{className:"dossier-container",children:[n.jsxs("section",{className:"dossier-hero",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"hero-label",children:[n.jsx(hn,{size:15}),"INNOVATION INTELLIGENCE"]}),n.jsx("h1",{children:"Innovation Dossier"}),n.jsx("p",{children:"A structured intelligence file combining your innovation, IP signals, evidence and regulatory pathway."})]}),n.jsxs("button",{className:"export-btn",onClick:C,disabled:p,children:[n.jsx(lr,{size:18}),p?"Preparing PDF...":"Export Dossier PDF"]})]}),n.jsxs("section",{className:"innovation-card",children:[n.jsx("div",{className:"innovation-icon",children:n.jsx(fe,{size:23})}),n.jsxs("div",{className:"innovation-info",children:[n.jsx("span",{children:"CURRENT INNOVATION"}),n.jsx("h2",{children:g.title}),n.jsx("p",{children:g.domain})]}),n.jsxs("div",{className:"readiness-pill",children:[n.jsx(ie,{size:15}),g.stage]})]}),n.jsxs("div",{className:"status-row",children:[n.jsxs("div",{children:[n.jsx("span",{className:`status-dot ${N?"connected":""}`}),N?"Backend intelligence connected":"Local dossier intelligence active"]}),n.jsx("span",{children:"5 dossier sections"})]}),n.jsxs("section",{className:"section-heading",children:[n.jsxs("div",{children:[n.jsx("span",{children:"DOSSIER STRUCTURE"}),n.jsx("h2",{children:"Explore your innovation file"})]}),n.jsx(Ce,{size:24})]}),n.jsx("div",{className:"dossier-grid",children:Np.map(A=>{const T=A.icon;return n.jsxs("button",{className:"dossier-box",onClick:()=>P(A),children:[n.jsxs("div",{className:"box-top",children:[n.jsx("div",{className:"section-icon",children:n.jsx(T,{size:21})}),n.jsx("span",{className:"section-number",children:A.number})]}),n.jsxs("div",{className:"box-content",children:[n.jsx("h3",{children:A.title}),n.jsx("p",{children:A.desc})]}),n.jsxs("div",{className:"box-footer",children:[n.jsxs("span",{className:"status-label",children:[n.jsx(ie,{size:14}),A.status]}),n.jsxs("span",{className:"open-label",children:["Open",n.jsx(J,{size:16})]})]})]},A.id)})}),n.jsxs("section",{className:"dossier-summary",children:[n.jsxs("div",{className:"summary-title",children:[n.jsxs("div",{children:[n.jsx("span",{children:"DOSSIER SUMMARY"}),n.jsx("h2",{children:"Innovation intelligence at a glance"})]}),n.jsx(ce,{size:24})]}),n.jsxs("div",{className:"summary-grid",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"82%"}),n.jsx("span",{children:"IP Readiness"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"74%"}),n.jsx("span",{children:"Prior Art Review"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"68%"}),n.jsx("span",{children:"Evidence Strength"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"76%"}),n.jsx("span",{children:"Regulatory Readiness"})]})]})]}),n.jsxs("section",{className:"export-card",children:[n.jsx("div",{className:"export-card-icon",children:n.jsx(lr,{size:24})}),n.jsxs("div",{children:[n.jsx("span",{children:"FINAL DOCUMENT"}),n.jsx("h2",{children:"Export your Innovation Dossier"}),n.jsx("p",{children:"Generate a structured PDF containing your innovation overview, technical details, IP intelligence, evidence and regulatory information."})]}),n.jsxs("button",{onClick:C,disabled:p,children:[n.jsx(lr,{size:17}),p?"Generating...":"Export PDF"]})]}),n.jsxs("section",{className:"next-card",children:[n.jsxs("div",{children:[n.jsx("span",{children:"NEXT STEP"}),n.jsx("h2",{children:"Move from dossier to IP preparation"}),n.jsx("p",{children:"Continue your journey toward professional IP strategy and patent preparation."})]}),n.jsxs("button",{onClick:()=>a==null?void 0:a(),children:["Continue Journey",n.jsx(J,{size:18})]})]}),f&&n.jsxs("div",{className:"toast",children:[n.jsx(ie,{size:19}),f]})]}),n.jsx("style",{children:Sp})]})}const Sp=`
.dossier-page{
  min-height:100%;
  padding:30px;
  background:
    radial-gradient(circle at 10% 0%,rgba(42,117,77,.08),transparent 28%),
    linear-gradient(135deg,#f5faf6,#edf5ef);
  color:#193326;
}

.dossier-container{
  max-width:1450px;
  margin:auto;
}

.dossier-hero{
  padding:32px 36px;
  min-height:185px;
  border-radius:25px;
  background:linear-gradient(135deg,#164c34,#276e4d);
  color:#fff;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:25px;
  box-shadow:0 15px 40px rgba(27,82,54,.15);
}

.hero-label{
  display:flex;
  align-items:center;
  gap:7px;
  color:#c7e7d2;
  font-size:11px;
  font-weight:800;
  letter-spacing:1.3px;
}

.dossier-hero h1{
  margin:9px 0 7px;
  font-size:38px;
}

.dossier-hero p{
  margin:0;
  color:#d2e9da;
  max-width:700px;
  font-size:14px;
  line-height:1.6;
}

.export-btn{
  border:0;
  border-radius:13px;
  padding:14px 18px;
  background:#fff;
  color:#18583c;
  font-weight:800;
  display:flex;
  align-items:center;
  gap:8px;
  cursor:pointer;
  white-space:nowrap;
}

.export-btn:disabled{
  opacity:.65;
  cursor:wait;
}

.innovation-card{
  margin-top:18px;
  padding:19px 22px;
  background:#e3f3e8;
  border:1px solid #c8e2d0;
  border-radius:19px;
  display:flex;
  align-items:center;
  gap:15px;
}

.innovation-icon{
  width:49px;
  height:49px;
  border-radius:15px;
  display:grid;
  place-items:center;
  color:white;
  background:#216b48;
}

.innovation-info span,
.section-heading span,
.summary-title span,
.export-card span,
.next-card span{
  color:#39805b;
  font-size:10px;
  font-weight:800;
  letter-spacing:1.2px;
}

.innovation-info h2{
  margin:4px 0;
  font-size:17px;
}

.innovation-info p{
  margin:0;
  color:#6b8175;
  font-size:11px;
}

.readiness-pill{
  margin-left:auto;
  display:flex;
  align-items:center;
  gap:6px;
  padding:9px 12px;
  border-radius:999px;
  background:#fff;
  color:#27734d;
  font-size:11px;
  font-weight:800;
}

.status-row{
  margin:12px 2px 28px;
  display:flex;
  justify-content:space-between;
  color:#708378;
  font-size:11px;
}

.status-dot{
  width:8px;
  height:8px;
  display:inline-block;
  border-radius:50%;
  background:#d2a036;
  margin-right:7px;
}

.status-dot.connected{
  background:#32a567;
}

.section-heading{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin-bottom:16px;
}

.section-heading h2,
.summary-title h2{
  margin:5px 0 0;
  font-size:23px;
}

.dossier-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:17px;
}

.dossier-box{
  min-height:220px;
  padding:21px;
  border:1px solid #d5e6da;
  border-radius:21px;
  background:#fff;
  text-align:left;
  cursor:pointer;
  transition:.2s;
  box-shadow:0 6px 20px rgba(30,74,50,.045);
}

.dossier-box:hover{
  transform:translateY(-3px);
  border-color:#75a98a;
  background:#f4faf6;
  box-shadow:0 12px 30px rgba(30,74,50,.09);
}

.box-top{
  display:flex;
  justify-content:space-between;
}

.section-icon{
  width:45px;
  height:45px;
  border-radius:13px;
  display:grid;
  place-items:center;
  color:#27754d;
  background:#e2f2e7;
}

.section-number{
  color:#8aa093;
  font-size:12px;
  font-weight:800;
}

.box-content h3{
  margin:22px 0 6px;
  font-size:17px;
}

.box-content p{
  margin:0;
  color:#708379;
  font-size:12px;
  line-height:1.6;
}

.box-footer{
  margin-top:23px;
  padding-top:13px;
  border-top:1px solid #e5eee8;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.status-label{
  display:flex;
  align-items:center;
  gap:5px;
  color:#3b7858;
  font-size:10px;
  font-weight:800;
}

.open-label{
  color:#216b48;
  display:flex;
  align-items:center;
  gap:5px;
  font-size:11px;
  font-weight:800;
}

.dossier-summary{
  margin-top:23px;
  padding:25px;
  border-radius:22px;
  background:#e5f3e9;
  border:1px solid #c8dfcf;
}

.summary-title{
  display:flex;
  justify-content:space-between;
}

.summary-grid{
  margin-top:19px;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:13px;
}

.summary-grid div{
  padding:17px;
  background:#fff;
  border:1px solid #d7e6dc;
  border-radius:15px;
}

.summary-grid strong,
.summary-grid span{
  display:block;
}

.summary-grid strong{
  font-size:25px;
  color:#236e4a;
}

.summary-grid span{
  margin-top:4px;
  color:#718479;
  font-size:11px;
}

.export-card{
  margin-top:22px;
  padding:23px;
  border-radius:21px;
  background:#fff;
  border:1px solid #d6e6db;
  display:flex;
  align-items:center;
  gap:17px;
}

.export-card-icon{
  width:51px;
  height:51px;
  border-radius:15px;
  background:#e1f2e7;
  color:#27754d;
  display:grid;
  place-items:center;
}

.export-card h2{
  margin:5px 0;
  font-size:18px;
}

.export-card p{
  margin:0;
  max-width:750px;
  color:#718378;
  font-size:11px;
  line-height:1.6;
}

.export-card button,
.next-card button{
  margin-left:auto;
  border:0;
  padding:13px 17px;
  border-radius:12px;
  background:#195a3d;
  color:white;
  display:flex;
  align-items:center;
  gap:7px;
  font-weight:800;
  cursor:pointer;
  white-space:nowrap;
}

.next-card{
  margin-top:17px;
  padding:24px 27px;
  border-radius:21px;
  background:linear-gradient(135deg,#174c35,#276e4d);
  color:#fff;
  display:flex;
  align-items:center;
  gap:20px;
}

.next-card span{
  color:#bfe4cd;
}

.next-card h2{
  margin:5px 0;
  font-size:20px;
}

.next-card p{
  margin:0;
  color:#c9e4d2;
  font-size:12px;
}

.next-card button{
  background:#fff;
  color:#195a3d;
}

.back-btn{
  border:0;
  background:transparent;
  color:#3b7057;
  display:flex;
  align-items:center;
  gap:7px;
  font-weight:800;
  cursor:pointer;
  margin-bottom:17px;
}

.detail-hero{
  padding:27px;
  border-radius:23px;
  background:linear-gradient(135deg,#174c35,#286f4e);
  color:#fff;
  display:flex;
  align-items:center;
  gap:18px;
}

.detail-number{
  width:61px;
  height:61px;
  border-radius:18px;
  display:grid;
  place-items:center;
  background:rgba(255,255,255,.13);
  font-size:20px;
  font-weight:800;
}

.detail-hero span{
  color:#bfe3cc;
  font-size:10px;
  font-weight:800;
  letter-spacing:1.2px;
}

.detail-hero h1{
  margin:5px 0;
  font-size:27px;
}

.detail-hero p{
  margin:0;
  color:#cde5d5;
  font-size:12px;
}

.detail-card{
  margin-top:19px;
  padding:26px;
  border-radius:22px;
  background:#fff;
  border:1px solid #d5e5da;
}

.detail-header{
  display:flex;
  justify-content:space-between;
}

.detail-header small{
  color:#39805b;
  font-size:10px;
  font-weight:800;
  letter-spacing:1.1px;
}

.detail-header h2{
  margin:5px 0 0;
  font-size:22px;
}

.close-btn{
  width:35px;
  height:35px;
  border:1px solid #d5e4da;
  background:#f5faf6;
  border-radius:10px;
  color:#4d715d;
  display:grid;
  place-items:center;
  cursor:pointer;
}

.detail-grid{
  margin-top:22px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:13px;
}

.detail-box{
  padding:17px;
  border-radius:15px;
  background:#eaf6ee;
  border:1px solid #d1e7d8;
}

.detail-box span,
.detail-box strong{
  display:block;
}

.detail-box span{
  color:#6e8578;
  font-size:10px;
  font-weight:700;
}

.detail-box strong{
  margin-top:7px;
  color:#214a36;
  font-size:13px;
  line-height:1.5;
}

.analysis-note{
  margin-top:20px;
  padding:16px;
  border-radius:15px;
  background:#f3f8f4;
  display:flex;
  gap:11px;
}

.note-icon{
  width:36px;
  height:36px;
  border-radius:10px;
  background:#dcefe3;
  color:#27744d;
  display:grid;
  place-items:center;
  flex:none;
}

.analysis-note strong{
  font-size:12px;
}

.analysis-note p{
  margin:4px 0 0;
  color:#708479;
  font-size:11px;
  line-height:1.6;
}

.detail-action{
  margin-top:19px;
  border:0;
  padding:13px 17px;
  border-radius:12px;
  background:#195a3d;
  color:#fff;
  display:flex;
  align-items:center;
  gap:7px;
  font-weight:800;
  cursor:pointer;
}

.toast{
  position:fixed;
  right:25px;
  bottom:25px;
  z-index:2000;
  padding:14px 17px;
  border-radius:13px;
  background:#174c35;
  color:#fff;
  box-shadow:0 15px 35px rgba(0,0,0,.2);
  display:flex;
  align-items:center;
  gap:8px;
  font-size:12px;
  font-weight:700;
}

@media(max-width:1000px){
  .dossier-grid{
    grid-template-columns:1fr 1fr;
  }

  .summary-grid{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:700px){
  .dossier-page{
    padding:15px;
  }

  .dossier-hero,
  .export-card,
  .next-card{
    flex-direction:column;
    align-items:flex-start;
  }

  .dossier-grid,
  .summary-grid,
  .detail-grid{
    grid-template-columns:1fr;
  }

  .export-btn,
  .export-card button,
  .next-card button{
    margin-left:0;
  }

  .readiness-pill{
    margin-left:0;
  }
}
`,Lo=[{id:"title",number:"01",title:"Innovation Title",description:"Basic identity of your innovation",value:"Ayurvedic Herbal Wellness Formulation",status:"Ready"},{id:"technical",number:"02",title:"Technical Field",description:"Technical domain and innovation area",value:"Ayurveda / Herbal Formulation",status:"Ready"},{id:"problem",number:"03",title:"Problem Statement",description:"Problem addressed by the innovation",value:"Problem statement available from Innovation Profile",status:"Ready"},{id:"summary",number:"04",title:"Innovation Summary",description:"Short description of the proposed solution",value:"Innovation summary available",status:"Ready"},{id:"prior-art",number:"05",title:"Prior Art Information",description:"Existing patents and similar knowledge",value:"Prior-art signals available for review",status:"Available"},{id:"evidence",number:"06",title:"Evidence & Research",description:"Research and supporting evidence",value:"Evidence records available",status:"Available"},{id:"regulatory",number:"07",title:"Regulatory Information",description:"Relevant Ayurveda / AYUSH pathway",value:"Regulatory information available",status:"Available"},{id:"claims",number:"08",title:"Patent Claims",description:"Draft claims for patent preparation",value:"Professional review recommended",status:"Review"}];function Pg({onContinue:a}){const[c,l]=E.useState(null),p=Lo.find(u=>u.id===c);return n.jsxs("div",{className:"prefiling-page",children:[n.jsxs("section",{className:"prefiling-hero",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"eyebrow",children:[n.jsx(ce,{size:16}),"IP SHAKTI SAHAYAK"]}),n.jsx("h1",{children:"Pre-Filing Checklist"}),n.jsx("p",{children:"Review the information collected from your Innovation Journey before moving towards patent preparation."})]}),n.jsxs("div",{className:"hero-status",children:[n.jsx(ie,{size:18}),n.jsx("span",{children:"Preparation Ready"})]})]}),n.jsxs("section",{className:"summary-grid",children:[n.jsxs("div",{className:"summary-card",children:[n.jsx("div",{className:"summary-icon",children:n.jsx(hn,{size:21})}),n.jsxs("div",{children:[n.jsx("strong",{children:Lo.length}),n.jsx("span",{children:"Checklist Items"})]})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("div",{className:"summary-icon",children:n.jsx(ie,{size:21})}),n.jsxs("div",{children:[n.jsx("strong",{children:"7"}),n.jsx("span",{children:"Information Ready"})]})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("div",{className:"summary-icon",children:n.jsx(Ce,{size:21})}),n.jsxs("div",{children:[n.jsx("strong",{children:"1"}),n.jsx("span",{children:"Needs Review"})]})]})]}),n.jsxs("section",{className:"prefiling-layout",children:[n.jsxs("div",{className:"checklist-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Information Checklist"}),n.jsx("p",{children:"These details can be carried forward into your patent preparation workflow."})]}),n.jsx("span",{className:"ready-badge",children:"87% Ready"})]}),n.jsx("div",{className:"checklist-list",children:Lo.map(u=>n.jsxs("button",{className:`checklist-item ${c===u.id?"active":""}`,onClick:()=>l(u.id),children:[n.jsx("div",{className:"number-box",children:u.number}),n.jsx("div",{className:"check-icon",children:u.status==="Review"?n.jsx(Ce,{size:18}):n.jsx(ie,{size:18})}),n.jsxs("div",{className:"item-content",children:[n.jsxs("div",{className:"item-title-row",children:[n.jsx("strong",{children:u.title}),n.jsx("span",{className:u.status==="Review"?"status review":"status",children:u.status})]}),n.jsx("p",{children:u.description}),n.jsx("span",{className:"item-value",children:u.value})]}),n.jsx(J,{size:18,className:"item-arrow"})]},u.id))})]}),n.jsx("aside",{className:"detail-panel",children:p?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"detail-number",children:p.number}),n.jsx("h2",{children:p.title}),n.jsx("p",{className:"detail-description",children:p.description}),n.jsxs("div",{className:"detail-box",children:[n.jsx("span",{children:"Current Information"}),n.jsx("strong",{children:p.value})]}),n.jsx("div",{className:"detail-status",children:p.status==="Review"?n.jsxs(n.Fragment,{children:[n.jsx(Ce,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Professional Review"}),n.jsx("p",{children:"This section should be reviewed before any formal patent filing."})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(ie,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Information Available"}),n.jsx("p",{children:"This information is ready to be carried into the next preparation stage."})]})]})}),n.jsx("button",{className:"back-button",onClick:()=>l(null),children:"Back to Checklist"})]}):n.jsxs("div",{className:"empty-detail",children:[n.jsx("div",{className:"large-icon",children:n.jsx(hn,{size:30})}),n.jsx("h2",{children:"Review Before Filing"}),n.jsx("p",{children:"Select any checklist item to review the information available for your innovation."}),n.jsxs("div",{className:"tip-box",children:[n.jsx(ie,{size:18}),n.jsx("span",{children:"Complete the checklist before moving to Patent Preparation."})]})]})})]}),n.jsxs("section",{className:"next-section",children:[n.jsxs("div",{children:[n.jsx("span",{className:"next-label",children:"NEXT STEP"}),n.jsx("h2",{children:"Continue to Patent Preparation"}),n.jsx("p",{children:"Use the reviewed information to prepare your patent-preparation document."})]}),n.jsxs("button",{className:"continue-button",onClick:()=>{a&&a()},children:["Continue",n.jsx(J,{size:18})]})]}),n.jsx("div",{className:"disclaimer",children:"This checklist is an information-preparation aid and does not constitute legal or patent advice. Professional review is recommended before filing."}),n.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .prefiling-page {
          min-height: 100%;
          padding: 28px;
          background:
            radial-gradient(circle at top right, rgba(75, 135, 94, 0.08), transparent 30%),
            #f4f8f5;
          color: #203b2b;
        }

        .prefiling-hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 32px;
          border-radius: 24px;
          background: linear-gradient(135deg, #173f29, #286744);
          color: white;
          box-shadow: 0 12px 30px rgba(30, 73, 48, 0.16);
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
          opacity: 0.8;
          margin-bottom: 12px;
        }

        .prefiling-hero h1 {
          margin: 0;
          font-size: 32px;
          line-height: 1.15;
        }

        .prefiling-hero p {
          max-width: 650px;
          margin: 10px 0 0;
          color: rgba(255,255,255,.78);
          line-height: 1.6;
          font-size: 14px;
        }

        .hero-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 15px;
          border-radius: 30px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.18);
          white-space: nowrap;
          font-size: 12px;
          font-weight: 700;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 20px 0;
        }

        .summary-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px;
          background: white;
          border: 1px solid #dce8df;
          border-radius: 17px;
          box-shadow: 0 6px 18px rgba(34, 73, 49, .05);
        }

        .summary-icon {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e5f3e9;
          color: #287047;
        }

        .summary-card strong {
          display: block;
          font-size: 22px;
          color: #214b31;
        }

        .summary-card span {
          color: #78857d;
          font-size: 12px;
        }

        .prefiling-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(300px, .75fr);
          gap: 20px;
          align-items: start;
        }

        .checklist-panel,
        .detail-panel {
          background: white;
          border: 1px solid #dce8df;
          border-radius: 21px;
          box-shadow: 0 7px 22px rgba(34, 73, 49, .055);
        }

        .checklist-panel {
          padding: 24px;
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 18px;
        }

        .panel-header h2 {
          margin: 0;
          font-size: 20px;
          color: #214b31;
        }

        .panel-header p {
          margin: 5px 0 0;
          font-size: 12px;
          color: #78857d;
        }

        .ready-badge {
          padding: 7px 11px;
          border-radius: 20px;
          background: #e7f4eb;
          color: #287047;
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
        }

        .checklist-list {
          display: grid;
          gap: 10px;
        }

        .checklist-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
          padding: 15px;
          border-radius: 15px;
          background: #fbfdfb;
          border: 1px solid #e1ebe4;
          cursor: pointer;
          transition: .2s ease;
          color: inherit;
        }

        .checklist-item:hover,
        .checklist-item.active {
          border-color: #a9cdb5;
          background: #f3faf5;
          transform: translateY(-1px);
        }

        .number-box {
          width: 32px;
          flex-shrink: 0;
          font-size: 11px;
          font-weight: 800;
          color: #8a9890;
        }

        .check-icon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #e7f5eb;
          color: #2d7549;
        }

        .item-content {
          flex: 1;
          min-width: 0;
        }

        .item-title-row {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .item-title-row strong {
          font-size: 14px;
          color: #294a36;
        }

        .status {
          padding: 4px 7px;
          border-radius: 10px;
          background: #e8f5ec;
          color: #287047;
          font-size: 9px;
          font-weight: 800;
        }

        .status.review {
          background: #fff1dc;
          color: #9a641b;
        }

        .item-content p {
          margin: 3px 0;
          color: #849088;
          font-size: 11px;
        }

        .item-value {
          color: #53665a;
          font-size: 11px;
        }

        .item-arrow {
          color: #9aa79f;
          flex-shrink: 0;
        }

        .detail-panel {
          padding: 25px;
          min-height: 450px;
          position: sticky;
          top: 20px;
        }

        .detail-number {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #e5f3e9;
          color: #287047;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .detail-panel h2 {
          margin: 0;
          color: #214b31;
          font-size: 21px;
        }

        .detail-description {
          color: #78857d;
          font-size: 13px;
          line-height: 1.6;
        }

        .detail-box {
          padding: 16px;
          margin-top: 20px;
          border-radius: 14px;
          background: #f5faf6;
          border: 1px solid #dce9df;
        }

        .detail-box span {
          display: block;
          color: #87938b;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .7px;
          margin-bottom: 7px;
        }

        .detail-box strong {
          font-size: 13px;
          color: #2b5038;
          line-height: 1.5;
        }

        .detail-status {
          display: flex;
          gap: 10px;
          margin-top: 15px;
          padding: 14px;
          border-radius: 14px;
          background: #f8fbf9;
        }

        .detail-status svg {
          color: #287047;
          flex-shrink: 0;
        }

        .detail-status strong {
          font-size: 12px;
          color: #31553e;
        }

        .detail-status p {
          margin: 4px 0 0;
          color: #7d8981;
          font-size: 11px;
          line-height: 1.5;
        }

        .back-button {
          margin-top: 18px;
          width: 100%;
          padding: 11px;
          border-radius: 11px;
          border: 1px solid #d5e3da;
          background: white;
          color: #31553e;
          font-weight: 700;
          cursor: pointer;
        }

        .empty-detail {
          height: 100%;
          min-height: 390px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .large-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: #e7f4eb;
          color: #287047;
          margin-bottom: 18px;
        }

        .empty-detail h2 {
          font-size: 19px;
        }

        .empty-detail p {
          max-width: 280px;
          color: #7c8981;
          font-size: 12px;
          line-height: 1.6;
        }

        .tip-box {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-top: 12px;
          padding: 11px 13px;
          border-radius: 12px;
          background: #f4faf6;
          color: #287047;
          font-size: 11px;
          text-align: left;
        }

        .next-section {
          margin-top: 20px;
          padding: 23px 25px;
          border-radius: 19px;
          background: #eaf5ed;
          border: 1px solid #d1e4d7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .next-label {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.2px;
          color: #568064;
        }

        .next-section h2 {
          margin: 5px 0;
          font-size: 18px;
          color: #214b31;
        }

        .next-section p {
          margin: 0;
          font-size: 12px;
          color: #718078;
        }

        .continue-button {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 0;
          border-radius: 11px;
          padding: 12px 17px;
          background: #286744;
          color: white;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .disclaimer {
          margin-top: 18px;
          padding: 13px 15px;
          border-radius: 12px;
          background: #fffaf0;
          border: 1px solid #eee2c8;
          color: #7d7159;
          font-size: 10px;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .prefiling-layout {
            grid-template-columns: 1fr;
          }

          .detail-panel {
            position: static;
          }
        }

        @media (max-width: 700px) {
          .prefiling-page {
            padding: 15px;
          }

          .prefiling-hero {
            padding: 23px;
            flex-direction: column;
            align-items: flex-start;
          }

          .prefiling-hero h1 {
            font-size: 27px;
          }

          .summary-grid {
            grid-template-columns: 1fr;
          }

          .panel-header,
          .next-section {
            flex-direction: column;
            align-items: flex-start;
          }

          .checklist-item {
            padding: 12px;
          }

          .number-box {
            display: none;
          }
        }
      `})]})}const ar=[{id:1,title:"Innovation Idea",short:"Define",icon:At,status:"Completed",color:"green",desc:"Capture your Ayurveda innovation idea and define its core purpose.",actions:["Define innovation title","Identify problem being solved","Describe core innovation","Select Ayurveda domain"]},{id:2,title:"Innovation Profile",short:"Profile",icon:bn,status:"Completed",color:"green",desc:"Create a structured profile containing technical and application details.",actions:["Technical field","Ingredients / components","Application or use","Innovation stage"]},{id:3,title:"Prior Art Discovery",short:"Search",icon:Fe,status:"In Progress",color:"gold",desc:"Compare the innovation against existing patents, knowledge and similar records.",actions:["Search existing patents","Find similar innovations","Compare technical features","Review similarity signals"]},{id:4,title:"Evidence & Research",short:"Validate",icon:an,status:"Next",color:"blue",desc:"Identify research evidence required to support the innovation.",actions:["Clinical evidence","Safety evidence","Efficacy evidence","Research references"]},{id:5,title:"IP Risk Assessment",short:"Assess",icon:ce,status:"Next",color:"purple",desc:"Review preliminary IP risks and protection signals.",actions:["Novelty signals","Prior-art overlap","Traditional knowledge check","IP risk indicators"]},{id:6,title:"IP Strategy",short:"Protect",icon:hn,status:"Next",color:"green",desc:"Choose an appropriate protection and documentation pathway.",actions:["Patent pathway","Trade secret pathway","Documentation","International strategy"]}];function Ig({onContinue:a}){const[c,l]=E.useState(1),p=ar.find(u=>u.id===c);return n.jsxs("div",{className:"roadmap-page",children:[n.jsxs("section",{className:"roadmap-hero",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"roadmap-eyebrow",children:[n.jsx(fe,{size:15}),"IP SHAKTI SAHAYAK · INNOVATION JOURNEY"]}),n.jsx("h1",{children:"Innovation Roadmap"}),n.jsx("p",{children:"From your initial Ayurveda idea to evidence, IP assessment and protection strategy — follow the complete innovation journey."})]}),n.jsxs("div",{className:"progress-card",children:[n.jsx("span",{children:"Journey Progress"}),n.jsx("strong",{children:"3 / 6"}),n.jsx("div",{className:"progress-track",children:n.jsx("div",{className:"progress-fill"})}),n.jsx("small",{children:"50% journey completed"})]})]}),n.jsxs("section",{className:"roadmap-card",children:[n.jsxs("div",{className:"roadmap-top",children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Your Innovation Journey"}),n.jsx("p",{children:"Click any stage to explore what happens next."})]}),n.jsxs("div",{className:"legend",children:[n.jsxs("span",{children:[n.jsx("i",{className:"dot completed"}),"Completed"]}),n.jsxs("span",{children:[n.jsx("i",{className:"dot current"}),"Current"]}),n.jsxs("span",{children:[n.jsx("i",{className:"dot upcoming"}),"Upcoming"]})]})]}),n.jsxs("div",{className:"timeline",children:[n.jsx("div",{className:"timeline-line",children:n.jsx("div",{className:"timeline-progress"})}),ar.map((u,f)=>{const m=u.icon,N=c===u.id,b=u.id<3,g=u.id===3;return n.jsxs("button",{className:`timeline-step ${N?"selected":""}`,onClick:()=>l(u.id),children:[n.jsx("div",{className:`step-node ${b?"completed":g?"current":"upcoming"}`,children:b?n.jsx(ie,{size:22}):n.jsx(m,{size:21})}),n.jsxs("span",{className:"step-number",children:["0",u.id]}),n.jsx("strong",{children:u.title}),n.jsx("span",{className:"step-short",children:u.short})]},u.id)})]})]}),p&&n.jsxs("section",{className:"stage-section",children:[n.jsxs("div",{className:"stage-main",children:[n.jsxs("div",{className:"stage-heading",children:[n.jsx("div",{className:"stage-icon",children:n.jsx(p.icon,{size:25})}),n.jsxs("div",{children:[n.jsxs("span",{children:["STAGE 0",p.id]}),n.jsx("h2",{children:p.title})]}),n.jsx("div",{className:`stage-status ${p.status==="In Progress"?"progress":p.status==="Completed"?"done":""}`,children:p.status})]}),n.jsx("p",{className:"stage-description",children:p.desc}),n.jsx("div",{className:"action-grid",children:p.actions.map((u,f)=>n.jsxs("div",{className:"action-box",children:[n.jsx("div",{className:"action-number",children:String(f+1).padStart(2,"0")}),n.jsxs("div",{children:[n.jsx("strong",{children:u}),n.jsx("span",{children:"Review this component in your innovation workspace."})]}),n.jsx(J,{size:17})]},u))})]}),n.jsxs("aside",{className:"stage-side",children:[n.jsxs("div",{className:"side-title",children:[n.jsx("span",{children:"WHAT HAPPENS NEXT?"}),n.jsx(bn,{size:18})]}),n.jsx("h3",{children:p.id<ar.length?ar[p.id].title:"Innovation Protection"}),n.jsx("p",{children:"Continue your journey after reviewing this stage. Your collected information can be carried forward."}),n.jsxs("button",{className:"next-stage-button",onClick:()=>{p.id<ar.length?l(p.id+1):a&&a()},children:[p.id<ar.length?"View Next Stage":"Continue Journey",n.jsx(J,{size:18})]})]})]}),n.jsxs("section",{className:"journey-strip",children:[n.jsx("div",{className:"strip-icon",children:n.jsx(fe,{size:21})}),n.jsxs("div",{children:[n.jsx("strong",{children:"One connected innovation journey"}),n.jsx("p",{children:"Your innovation profile, prior-art findings, evidence, risk signals and IP strategy can be carried forward through the workflow."})]}),n.jsx("div",{className:"strip-pill",children:"Idea → Evidence → IP"})]}),n.jsx("div",{className:"roadmap-note",children:"Preliminary intelligence only. Patentability, novelty and regulatory conclusions should be verified with appropriate professional or official sources."}),n.jsx("style",{children:`

        .roadmap-page {
          min-height: 100%;
          padding: 28px;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(53, 118, 77, .09),
              transparent 30%
            ),
            #f4f8f5;
          color: #203c2b;
        }

        .roadmap-hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          padding: 32px;
          border-radius: 25px;
          color: white;
          background:
            linear-gradient(
              135deg,
              #153b27,
              #286744
            );
          box-shadow:
            0 14px 35px rgba(30, 73, 48, .17);
        }

        .roadmap-eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.4px;
          opacity: .8;
          margin-bottom: 12px;
        }

        .roadmap-hero h1 {
          margin: 0;
          font-size: 32px;
        }

        .roadmap-hero p {
          max-width: 680px;
          margin: 10px 0 0;
          color: rgba(255,255,255,.76);
          line-height: 1.6;
          font-size: 14px;
        }

        .progress-card {
          min-width: 210px;
          padding: 18px;
          border-radius: 17px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.15);
        }

        .progress-card span,
        .progress-card small {
          display: block;
          font-size: 10px;
          color: rgba(255,255,255,.7);
        }

        .progress-card strong {
          display: block;
          font-size: 27px;
          margin: 5px 0 9px;
        }

        .progress-track {
          height: 6px;
          overflow: hidden;
          border-radius: 10px;
          background: rgba(255,255,255,.18);
        }

        .progress-fill {
          width: 50%;
          height: 100%;
          border-radius: 10px;
          background: #dcefe2;
        }

        .progress-card small {
          margin-top: 7px;
        }

        .roadmap-card {
          margin-top: 20px;
          padding: 26px;
          border-radius: 21px;
          background: white;
          border: 1px solid #dce8df;
          box-shadow: 0 8px 24px rgba(34,73,49,.05);
        }

        .roadmap-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 35px;
        }

        .roadmap-top h2 {
          margin: 0;
          font-size: 20px;
          color: #214b31;
        }

        .roadmap-top p {
          margin: 5px 0 0;
          font-size: 12px;
          color: #7a887f;
        }

        .legend {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 10px;
          color: #758279;
        }

        .legend span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot.completed {
          background: #3d8958;
        }

        .dot.current {
          background: #c99236;
        }

        .dot.upcoming {
          background: #cbd7cf;
        }

        .timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 8px;
        }

        .timeline-line {
          position: absolute;
          left: 8%;
          right: 8%;
          top: 27px;
          height: 4px;
          border-radius: 10px;
          background: #dce6df;
          z-index: 0;
        }

        .timeline-progress {
          width: 42%;
          height: 100%;
          border-radius: 10px;
          background: #4b8c61;
        }

        .timeline-step {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          border: 0;
          background: transparent;
          cursor: pointer;
          color: #294936;
        }

        .step-node {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: white;
          border: 4px solid #dce6df;
          color: #9aa69e;
          transition: .2s;
        }

        .step-node.completed {
          color: white;
          background: #378252;
          border-color: #378252;
        }

        .step-node.current {
          color: #95641c;
          background: #fff8ea;
          border-color: #d8ad64;
          box-shadow: 0 0 0 6px rgba(216,173,100,.12);
        }

        .timeline-step.selected .step-node {
          transform: scale(1.08);
          box-shadow: 0 0 0 6px rgba(55,130,82,.1);
        }

        .step-number {
          font-size: 9px;
          color: #96a198;
          font-weight: 800;
        }

        .timeline-step strong {
          font-size: 12px;
          text-align: center;
          max-width: 125px;
        }

        .step-short {
          color: #849088;
          font-size: 10px;
        }

        .stage-section {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(280px, .65fr);
          gap: 20px;
          margin-top: 20px;
        }

        .stage-main,
        .stage-side {
          border-radius: 21px;
          background: white;
          border: 1px solid #dce8df;
          box-shadow: 0 8px 24px rgba(34,73,49,.05);
        }

        .stage-main {
          padding: 26px;
        }

        .stage-heading {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .stage-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #e5f3e9;
          color: #287047;
        }

        .stage-heading > div:nth-child(2) {
          flex: 1;
        }

        .stage-heading span:first-child {
          color: #8b978f;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .stage-heading h2 {
          margin: 3px 0 0;
          color: #214b31;
          font-size: 21px;
        }

        .stage-status {
          padding: 7px 10px;
          border-radius: 20px;
          background: #edf2ee;
          color: #6f7d74;
          font-size: 10px;
          font-weight: 800;
        }

        .stage-status.done {
          background: #e6f4ea;
          color: #287047;
        }

        .stage-status.progress {
          background: #fff2dd;
          color: #96631c;
        }

        .stage-description {
          margin: 18px 0 20px;
          color: #748178;
          font-size: 13px;
          line-height: 1.6;
        }

        .action-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
        }

        .action-box {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 14px;
          border-radius: 14px;
          background: #f8fbf9;
          border: 1px solid #e0eae3;
          transition: .2s;
        }

        .action-box:hover {
          transform: translateY(-2px);
          border-color: #b9d5c3;
          background: #f2faf5;
        }

        .action-number {
          width: 31px;
          height: 31px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #e3f2e8;
          color: #287047;
          font-size: 9px;
          font-weight: 900;
        }

        .action-box div:nth-child(2) {
          flex: 1;
        }

        .action-box strong {
          display: block;
          font-size: 12px;
          color: #31543e;
        }

        .action-box span {
          display: block;
          margin-top: 3px;
          color: #89948d;
          font-size: 9px;
          line-height: 1.4;
        }

        .action-box > svg {
          color: #9aa79f;
        }

        .stage-side {
          padding: 25px;
          background: linear-gradient(145deg,#f0f8f2,#ffffff);
        }

        .side-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #6e8977;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .side-title svg {
          color: #43845a;
        }

        .stage-side h3 {
          margin: 22px 0 8px;
          font-size: 19px;
          color: #214b31;
        }

        .stage-side p {
          margin: 0;
          color: #758279;
          font-size: 12px;
          line-height: 1.65;
        }

        .next-stage-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 25px;
          padding: 12px;
          border: 0;
          border-radius: 11px;
          background: #286744;
          color: white;
          font-weight: 800;
          cursor: pointer;
        }

        .journey-strip {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 20px;
          padding: 18px 20px;
          border-radius: 17px;
          background: #e9f5ed;
          border: 1px solid #d1e5d7;
        }

        .strip-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: white;
          color: #287047;
        }

        .journey-strip strong {
          display: block;
          color: #285039;
          font-size: 13px;
        }

        .journey-strip p {
          margin: 4px 0 0;
          color: #718078;
          font-size: 11px;
          line-height: 1.5;
        }

        .strip-pill {
          margin-left: auto;
          padding: 8px 12px;
          border-radius: 20px;
          background: white;
          color: #3c7350;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .roadmap-note {
          margin-top: 15px;
          padding: 12px 14px;
          border-radius: 11px;
          background: #fffaf0;
          border: 1px solid #eee2c8;
          color: #7d7159;
          font-size: 10px;
          line-height: 1.5;
        }

        @media (max-width: 1000px) {
          .stage-section {
            grid-template-columns: 1fr;
          }

          .timeline {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px 8px;
          }

          .timeline-line {
            display: none;
          }
        }

        @media (max-width: 700px) {
          .roadmap-page {
            padding: 15px;
          }

          .roadmap-hero {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px;
          }

          .progress-card {
            width: 100%;
          }

          .roadmap-top,
          .journey-strip {
            flex-direction: column;
            align-items: flex-start;
          }

          .legend {
            flex-wrap: wrap;
          }

          .timeline {
            grid-template-columns: repeat(2, 1fr);
          }

          .action-grid {
            grid-template-columns: 1fr;
          }

          .strip-pill {
            margin-left: 0;
          }
        }

      `})]})}const sn=[{id:1,number:"01",title:"Innovation Overview",shortTitle:"Start",description:"Register your Ayurveda innovation and define its purpose, category and innovation focus.",status:"start",icon:"Lightbulb"},{id:2,number:"02",title:"Traditional Knowledge Discovery",shortTitle:"Knowledge",description:"Explore classical Ayurveda references and traditional knowledge related to your innovation.",status:"next",icon:"BookOpen"},{id:3,number:"03",title:"Research & Scientific Evidence",shortTitle:"Evidence",description:"Collect scientific literature, research studies and supporting evidence.",status:"next",icon:"FlaskConical"},{id:4,number:"04",title:"Prior-Art & Patent Search",shortTitle:"Prior Art",description:"Search existing patent records and identify potentially relevant prior art.",status:"next",icon:"Search"},{id:5,number:"05",title:"Similarity Analysis",shortTitle:"Similarity",description:"Compare your innovation with existing records using transparent similarity indicators.",status:"next",icon:"GitCompare"},{id:6,number:"06",title:"Evidence Gap Analysis",shortTitle:"Evidence Gaps",description:"Identify missing research, safety, quality and documentation evidence.",status:"next",icon:"AlertTriangle"},{id:7,number:"07",title:"Preliminary IP Readiness",shortTitle:"IP Readiness",description:"Review preliminary novelty indicators, prior-art overlap and documentation readiness.",status:"next",icon:"ShieldCheck"},{id:8,number:"08",title:"IP Protection Strategy",shortTitle:"IP Strategy",description:"Explore possible intellectual-property protection pathways for the innovation.",status:"next",icon:"LockKeyhole"},{id:9,number:"09",title:"Patent Preparation Workspace",shortTitle:"Preparation",description:"Organise the invention description, technical details, evidence and draft claims.",status:"next",icon:"FileText"},{id:10,number:"10",title:"Expert Review",shortTitle:"Expert",description:"Connect with relevant experts for professional review and feedback.",status:"next",icon:"Users"},{id:11,number:"11",title:"Innovation Dossier",shortTitle:"Dossier",description:"Combine your innovation journey, evidence, prior-art analysis and IP preparation.",status:"next",icon:"FolderKanban"},{id:12,number:"12",title:"Pre-Filing Checklist",shortTitle:"Pre-Filing",description:"Review the final documentation and evidence checklist before professional filing.",status:"next",icon:"ClipboardCheck"},{id:13,number:"13",title:"Innovation Roadmap",shortTitle:"Roadmap",description:"Track future development, research, regulatory and commercialization milestones.",status:"next",icon:"Route"}],_o={Lightbulb:At,BookOpen:fe,FlaskConical:fe,Search:ws,GitCompare:ws,AlertTriangle:ce,ShieldCheck:ce,LockKeyhole:ce,FileText:hn,Users:fe,FolderKanban:ws,ClipboardCheck:hn,Route:Go},Rg={1:["Define your Ayurveda innovation","Describe the problem being solved","Identify the core innovation"],2:["Build your innovation profile","Add ingredients and technical details","Define application and use"],3:["Search existing knowledge","Check Ayurveda research records","Review supporting evidence"],4:["Search existing patents","Compare similar inventions","Review prior-art signals"],5:["Compare technical features","Review similarity indicators","Identify possible overlap"],6:["Assess preliminary IP risks","Check novelty signals","Review traditional knowledge overlap"],7:["Identify missing evidence","Review clinical evidence","Review safety and efficacy evidence"],8:["Check relevant regulatory pathway","Review AYUSH requirements","Identify compliance information"],9:["Select possible IP protection","Review patent pathway","Consider documentation strategy"],10:["Prepare innovation dossier","Organize technical information","Compile supporting records"],11:["Prepare patent information","Draft technical sections","Review draft claims"],12:["Connect with relevant experts","Request professional review","Prepare consultation information"],13:["Review commercialization readiness","Track innovation development","Plan future actions"]};function Tg({innovation:a,currentStep:c=1,completedSteps:l=[],onContinue:p}){const[u,f]=E.useState(null),[m,N]=E.useState(null),[b,g]=E.useState(!1),[P,C]=E.useState(!1),A=E.useMemo(()=>new Set(l),[l]),T=sn.filter(X=>A.has(X.id)).length,O=Math.round(T/sn.length*100),z=sn.find(X=>X.id===c)||sn[0],k=sn.find(X=>X.id===u)||z,I=_o[k==null?void 0:k.icon]||fe,V=async X=>{f(X.id),N(null),g(!0);const B={id:X.id,number:X.number,title:X.title,description:X.description,status:A.has(X.id)?"Completed":X.id===c?"Current Stage":"Upcoming",actions:Rg[X.id]||["Review this stage","Add relevant information","Continue to the next stage"],innovationTitle:(a==null?void 0:a.title)||"Your Ayurveda Innovation",source:"Local Journey Workspace"};try{const ae=await fetch(`http://localhost:4000/api/innovation-journey/${X.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stepId:X.id,stepNumber:X.number,title:X.title,innovation:a||{}})});if(!ae.ok)throw new Error("Backend route unavailable");const de=await ae.json();C(!0),N({...B,...de,actions:de.actions||B.actions})}catch{C(!1),N(B)}finally{g(!1)}},Q=()=>{f(null),N(null)},Y=()=>{if((k==null?void 0:k.id)<sn.length){const X=sn.find(B=>B.id===k.id+1);if(X){V(X);return}}p&&p()};if(u&&m){const X=_o[k==null?void 0:k.icon]||fe;return n.jsxs("main",{className:"page-content",children:[n.jsxs("button",{type:"button",className:"secondary-btn",onClick:Q,style:{marginBottom:"18px",display:"inline-flex",alignItems:"center",gap:"8px"},children:[n.jsx(Ts,{size:17}),"Back to Innovation Journey"]}),n.jsxs("section",{className:"journey-command-center",children:[n.jsxs("div",{className:"journey-command-content",children:[n.jsxs("div",{className:"module-kicker",children:[n.jsx(X,{size:16}),"STAGE ",m.number]}),n.jsx("h1",{children:m.title}),n.jsx("p",{children:m.description||"Review and complete this stage of your innovation journey."}),n.jsxs("div",{className:"journey-command-meta",style:{display:"flex",alignItems:"center",gap:"15px",flexWrap:"wrap"},children:[n.jsx(pr,{status:m.status||"Innovation Workspace"}),n.jsx("span",{children:P?n.jsxs(n.Fragment,{children:[n.jsx(ie,{size:15}),"Backend Connected"]}):n.jsxs(n.Fragment,{children:[n.jsx(fe,{size:15}),"Local Workspace"]})})]})]}),n.jsx("div",{className:"journey-command-score",children:n.jsx("div",{className:"journey-score-ring",children:n.jsxs("div",{children:[n.jsx("strong",{children:String(m.number).padStart(2,"0")}),n.jsx("span",{children:"Stage"})]})})})]}),n.jsxs("section",{className:"content-panel",style:{marginTop:"20px"},children:[n.jsxs("div",{className:"panel-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"section-eyebrow",children:"STAGE WORKSPACE"}),n.jsx("h2",{children:m.title})]}),b&&n.jsx(zs,{size:20,className:"journey-spin"})]}),n.jsxs("div",{style:{marginTop:"18px",padding:"18px",borderRadius:"15px",background:"#f5faf6",border:"1px solid #dce9df"},children:[n.jsx("span",{style:{display:"block",fontSize:"10px",fontWeight:800,color:"#718078",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"6px"},children:"Innovation"}),n.jsx("strong",{style:{color:"#214b31",fontSize:"15px"},children:m.innovationTitle||(a==null?void 0:a.title)||"Your Ayurveda Innovation"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"13px",marginTop:"18px"},children:(m.actions||[]).map((B,ae)=>n.jsxs("button",{type:"button",onClick:()=>{p&&p({step:m.id,action:B})},style:{textAlign:"left",padding:"17px",borderRadius:"15px",border:"1px solid #dce8df",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("span",{style:{width:"32px",height:"32px",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",background:"#e5f3e9",color:"#287047",fontWeight:800,fontSize:"11px"},children:String(ae+1).padStart(2,"0")}),n.jsx("span",{style:{flex:1,color:"#31543e",fontSize:"12px",fontWeight:700},children:B}),n.jsx(J,{size:16,color:"#849088"})]},ae))}),n.jsxs("div",{style:{marginTop:"22px",display:"flex",justifyContent:"flex-end",gap:"10px",flexWrap:"wrap"},children:[n.jsx("button",{type:"button",className:"secondary-btn",onClick:Q,children:"Back"}),n.jsxs("button",{type:"button",className:"primary-btn",onClick:Y,style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[k.id<sn.length?"Open Next Stage":"Continue Journey",n.jsx(J,{size:17})]})]})]}),n.jsx("style",{children:`
          .journey-spin {
            animation: journeySpin 1s linear infinite;
          }

          @keyframes journeySpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]})}return n.jsxs("main",{className:"page-content",children:[n.jsx(si,{eyebrow:"INNOVATION JOURNEY",title:"My Ayurveda Innovation Journey",description:"A connected path from your first innovation idea to evidence discovery, prior-art analysis, IP preparation and future development."}),n.jsxs("section",{className:"journey-command-center",children:[n.jsxs("div",{className:"journey-command-content",children:[n.jsxs("div",{className:"module-kicker",children:[n.jsx(Go,{size:16}),"YOUR INNOVATION COMMAND CENTER"]}),n.jsxs("h1",{children:["From ",n.jsx("span",{children:"idea"})," to a structured innovation journey."]}),n.jsx("p",{children:a!=null&&a.title?`You are building: ${a.title}`:"Start by defining your Ayurveda innovation and then move through each stage step by step."}),n.jsxs("div",{className:"journey-command-meta",children:[n.jsx(pr,{status:O===100?"Journey Complete":"In Progress"}),n.jsxs("span",{children:[n.jsx(ie,{size:15}),T," / ",sn.length," stages completed"]}),n.jsxs("span",{children:[n.jsx(fe,{size:15}),P?"Backend Connected":"Click a stage to connect"]})]})]}),n.jsx("div",{className:"journey-command-score",children:n.jsx("div",{className:"journey-score-ring",children:n.jsxs("div",{children:[n.jsxs("strong",{children:[O,"%"]}),n.jsx("span",{children:"Progress"})]})})})]}),n.jsxs("section",{className:"progress-panel journey-progress-panel",children:[n.jsxs("div",{className:"progress-panel-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"section-eyebrow",children:"JOURNEY PROGRESS"}),n.jsx("h3",{children:"Innovation Development Path"})]}),n.jsxs("strong",{children:[O,"%"]})]}),n.jsx(Cs,{value:O}),n.jsxs("div",{className:"progress-panel-footer",children:[n.jsxs("span",{children:["Current stage: ",z.number," ·"," ",z.shortTitle]}),n.jsxs("span",{children:[sn.length-T," stages remaining"]})]})]}),n.jsxs("section",{className:"active-journey-stage",children:[n.jsx("div",{className:"active-stage-icon",children:n.jsx(I,{size:30})}),n.jsxs("div",{className:"active-stage-content",children:[n.jsxs("span",{className:"section-eyebrow",children:["CURRENT STAGE · ",z.number]}),n.jsx("h2",{children:z.title}),n.jsx("p",{children:z.description})]}),n.jsxs("button",{type:"button",className:"primary-btn",onClick:()=>V(z),children:["Open Stage",n.jsx(J,{size:17})]})]}),n.jsxs("section",{className:"journey-timeline-panel content-panel",children:[n.jsxs("div",{className:"panel-heading",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"section-eyebrow",children:[sn.length,"-STAGE WORKFLOW"]}),n.jsx("h2",{children:"Your Innovation Path"})]}),n.jsxs("div",{className:"journey-legend",children:[n.jsxs("span",{children:[n.jsx("i",{className:"legend-dot completed"}),"Completed"]}),n.jsxs("span",{children:[n.jsx("i",{className:"legend-dot active"}),"Current"]}),n.jsxs("span",{children:[n.jsx("i",{className:"legend-dot upcoming"}),"Upcoming"]})]})]}),n.jsx("div",{className:"full-journey-timeline",children:sn.map((X,B)=>{const ae=_o[X.icon]||fe,de=A.has(X.id),Le=X.id===c,Pe=!de&&!Le;return n.jsxs("button",{type:"button",className:`full-journey-step ${de?"completed":""} ${Le?"active":""} ${Pe?"upcoming":""}`,onClick:()=>V(X),style:{width:"100%",border:0,background:"transparent",textAlign:"left",cursor:"pointer",padding:0},children:[n.jsxs("div",{className:"full-journey-rail",children:[n.jsx("div",{className:"full-journey-node",children:de?n.jsx(ie,{size:18}):Le?n.jsx(ae,{size:18}):n.jsx(yx,{size:17})}),B<sn.length-1&&n.jsx("div",{className:"full-journey-connector"})]}),n.jsxs("div",{className:"full-journey-card",children:[n.jsxs("div",{className:"full-journey-card-top",children:[n.jsx("span",{className:"journey-number",children:X.number}),n.jsx("span",{className:`journey-stage-status ${de?"completed":Le?"active":"upcoming"}`,children:de?"Completed":Le?"Current Stage":"Upcoming"})]}),n.jsxs("div",{className:"full-journey-card-body",children:[n.jsx("div",{className:"full-journey-icon",children:n.jsx(ae,{size:20})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h3",{children:X.title}),n.jsx("p",{children:X.description})]}),n.jsx(J,{size:18,style:{marginLeft:"auto",flexShrink:0,color:"#8b9890"}})]})]})]},X.id)})})]}),n.jsxs("section",{className:"journey-final-grid",children:[n.jsxs("div",{className:"content-panel journey-next-panel",children:[n.jsxs("div",{className:"panel-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"section-eyebrow",children:"NEXT ACTION"}),n.jsx("h2",{children:"What should happen now?"})]}),n.jsx(J,{size:20})]}),n.jsxs("div",{className:"next-action-card",children:[n.jsx("div",{className:"next-action-icon",children:n.jsx(I,{size:23})}),n.jsxs("div",{children:[n.jsxs("span",{children:["Stage ",z.number]}),n.jsx("h3",{children:z.title}),n.jsx("p",{children:z.description})]})]}),n.jsxs("button",{type:"button",className:"primary-btn full-width-btn",onClick:()=>V(z),children:["Open Current Stage",n.jsx(J,{size:17})]})]}),n.jsxs("div",{className:"content-panel journey-principles-panel",children:[n.jsxs("div",{className:"panel-heading",children:[n.jsxs("div",{children:[n.jsx("span",{className:"section-eyebrow",children:"JOURNEY PRINCIPLES"}),n.jsx("h2",{children:"Keep the innovation traceable"})]}),n.jsx(ce,{size:20})]}),n.jsxs("div",{className:"journey-principle-list",children:[n.jsxs("div",{children:[n.jsx(ie,{size:17}),n.jsx("span",{children:"Save evidence and source references at every stage."})]}),n.jsxs("div",{children:[n.jsx(ie,{size:17}),n.jsx("span",{children:"Record differences from existing knowledge and prior art."})]}),n.jsxs("div",{children:[n.jsx(ie,{size:17}),n.jsx("span",{children:"Keep draft IP material separate from official filing."})]}),n.jsxs("div",{children:[n.jsx(ie,{size:17}),n.jsx("span",{children:"Use qualified professionals for legal and regulatory decisions."})]})]})]})]}),n.jsxs("section",{className:"journey-end-banner",children:[n.jsx("div",{className:"journey-end-icon",children:n.jsx(At,{size:25})}),n.jsxs("div",{children:[n.jsx("span",{className:"section-eyebrow",children:"YOUR INNOVATION STORY"}),n.jsx("h2",{children:"Discover → Validate → Compare → Protect → Develop"}),n.jsx("p",{children:"Every stage contributes to one connected innovation record instead of isolated screens."})]}),n.jsxs("button",{type:"button",className:"secondary-btn",onClick:()=>V(z),children:["Continue",n.jsx(J,{size:17})]})]}),n.jsxs("div",{className:"module-disclaimer",children:[n.jsx(ce,{size:16}),n.jsx("span",{children:"Journey progress is a planning and documentation aid. It does not represent legal approval, patentability confirmation or regulatory clearance."})]}),n.jsx("style",{children:`
        .full-journey-step:hover .full-journey-card {
          border-color: #a9cdb5 !important;
          background: #f5faf6 !important;
          transform: translateX(3px);
          box-shadow: 0 8px 20px rgba(40, 103, 68, .07);
        }

        .full-journey-step:hover .full-journey-icon {
          background: #dff0e4 !important;
          color: #24683f !important;
        }

        .full-journey-step {
          transition: .2s ease;
        }

        .journey-spin {
          animation: journeySpin 1s linear infinite;
        }

        @keyframes journeySpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-spin {
            animation: none;
          }

          .full-journey-step:hover .full-journey-card {
            transform: none;
          }
        }
      `})]})}function Ag(){return sn.map((a,c)=>({...a,status:c===0?"active":c===1?"next":"locked"}))}function Dg(a,c){return a.map(l=>l.id===c?{...l,status:"completed"}:l.id===c+1?{...l,status:"active"}:l)}function Lg(a=[]){return a.find(c=>c.status==="active")||a.find(c=>c.status==="next")||a[0]||null}const _g={name:"",title:"",type:"Herbal formulation",category:"Herbal formulation",language:"en",focus:"",description:"",ingredients:[],therapeuticUse:"",traditional_use:"",formulation:"",process:"",evidence:[],createdAt:new Date().toISOString(),id:null,prior_art_score:0,novelty_score:0,ip_readiness_score:0};function Og(){const a=Yo();Dt();const[c,l]=E.useState(!1),[p,u]=E.useState(null),[f,m]=E.useState(null),[N,b]=E.useState(!0),[g,P]=E.useState(null),[C,A]=E.useState(!1),[T,O]=E.useState(()=>{const _=rg();return{..._g,..._||{}}}),[z,k]=E.useState(()=>Ag()),[I,V]=E.useState(!1);E.useEffect(()=>{try{Qp(T)}catch(_){console.error("Local innovation save failed:",_)}},[T]),E.useEffect(()=>{let _=!0;async function H(){try{if(await or.health(),!_)return;b(!0),m(null);try{const y=await or.getInnovations();if(!_)return;if(Array.isArray(y)&&y.length>0){const R=y[0];u(R.id),O(Z=>({...Z,id:R.id,name:R.title||Z.name||"",title:R.title||Z.title||"",description:R.description||Z.description||"",type:R.category||Z.type||"Herbal formulation",category:R.category||Z.category||"Herbal formulation",ingredients:typeof R.ingredients=="string"?R.ingredients.split(",").map(se=>se.trim()).filter(Boolean):R.ingredients||Z.ingredients||[],formulation:R.formulation||Z.formulation||"",therapeuticUse:R.traditional_use||Z.therapeuticUse||"",traditional_use:R.traditional_use||Z.traditional_use||"",prior_art_score:R.prior_art_score??Z.prior_art_score??0,novelty_score:R.novelty_score??Z.novelty_score??0,ip_readiness_score:R.ip_readiness_score??Z.ip_readiness_score??0}))}}catch(y){console.error("Backend innovation load failed:",y),_&&(b(!0),m(null))}}catch(y){console.error("Backend health check failed:",y),_&&(b(!1),m("Backend is not reachable. Local data is still available."))}finally{_&&l(!0)}}H();const F=setInterval(()=>{H()},3e3);return()=>{_=!1,clearInterval(F)}},[]);const Q=E.useMemo(()=>Lg(z),[z]),Y=_=>{O(H=>({...H,..._}))},X=()=>({title:T.title||T.name||"",description:T.description||"",category:T.category||T.type||"Herbal formulation",ingredients:Array.isArray(T.ingredients)?T.ingredients.join(", "):T.ingredients||"",formulation:T.formulation||"",traditional_use:T.traditional_use||T.therapeuticUse||""}),B=async()=>{try{m(null);const _=X();let H;return p?H=await or.updateInnovation(p,_):(H=await or.createInnovation(_),H!=null&&H.id&&u(H.id)),H&&(b(!0),m(null),O(F=>({...F,id:H.id??F.id,name:H.title||F.name,title:H.title||F.title,description:H.description||F.description,type:H.category||F.type,category:H.category||F.category,formulation:H.formulation||F.formulation,therapeuticUse:H.traditional_use||F.therapeuticUse,traditional_use:H.traditional_use||F.traditional_use,prior_art_score:H.prior_art_score??F.prior_art_score,novelty_score:H.novelty_score??F.novelty_score,ip_readiness_score:H.ip_readiness_score??F.ip_readiness_score}))),H}catch(_){return console.error("Backend save failed:",_),b(!1),m("Innovation could not be saved to backend."),null}},ae=async()=>{A(!0),m(null);try{const _=await B(),H=(_==null?void 0:_.id)||p||T.id;if(!H)throw new Error("Innovation ID is missing.");const F=await or.analyzeInnovation(H);return b(!0),m(null),P(F),F!=null&&F.analysis&&O(y=>({...y,id:H,prior_art_score:F.analysis.prior_art_score??y.prior_art_score,novelty_score:F.analysis.novelty_score??y.novelty_score,ip_readiness_score:F.analysis.ip_readiness_score??y.ip_readiness_score})),F}catch(_){return console.error("Innovation analysis failed:",_),m("AI analysis could not be completed."),null}finally{A(!1)}},de=_=>{k(H=>Dg(H,_))},Le=(_,H)=>{de(_),H&&a(H)},Pe=()=>{a("/innovation/journey")},wn=()=>{a("/")},fn=()=>{a("/knowledge")},We=()=>{a("/research")},Je=()=>{a("/prior-art")},on=()=>{a("/ip-readiness")},Ue=()=>{a("/similarity")},ye=()=>{a("/evidence-gap")};return n.jsxs("div",{className:"app-shell",children:[n.jsx(Ax,{innovation:T,journey:z,currentStep:Q,open:I,onClose:()=>V(!1)}),n.jsxs("div",{className:"main-shell",children:[n.jsx(Lx,{innovation:T,onMenuClick:()=>V(!0),onDashboard:wn,onJourney:Pe}),n.jsx("main",{className:"page-content",children:n.jsxs(qf,{children:[n.jsx(Be,{path:"/",element:n.jsx(_x,{innovation:T,journey:z,onUpdateInnovation:Y,onStartJourney:Pe})}),n.jsx(Be,{path:"/innovation",element:n.jsx(Mx,{innovation:T,onUpdateInnovation:Y,analysisResult:g,analysisLoading:C,onAnalyze:ae,onContinue:Pe,onContinueJourney:Pe,onKnowledge:fn,onResearch:We,onPriorArt:Je,onIPReadiness:on,onSimilarity:Ue,onEvidenceGap:ye})}),n.jsx(Be,{path:"/innovation/journey",element:n.jsx(Tg,{innovation:T,journey:z,currentStep:Q,onContinue:Le,onUpdateInnovation:Y})}),n.jsx(Be,{path:"/knowledge",element:n.jsx(Ux,{innovation:T,onUpdateInnovation:Y,onContinue:We})}),n.jsx(Be,{path:"/research",element:n.jsx(Wx,{innovation:T,onUpdateInnovation:Y,onContinue:Je})}),n.jsx(Be,{path:"/prior-art",element:n.jsx(cg,{innovation:T,onUpdateInnovation:Y,onContinue:Ue})}),n.jsx(Be,{path:"/similarity",element:n.jsx(dg,{innovation:T,onUpdateInnovation:Y,onContinue:ye})}),n.jsx(Be,{path:"/evidence-gap",element:n.jsx(pg,{innovation:T,onUpdateInnovation:Y,onContinue:on})}),n.jsx(Be,{path:"/ip-readiness",element:n.jsx(mg,{innovation:T,onUpdateInnovation:Y,onContinue:()=>a("/innovation/ip-strategy")})}),n.jsx(Be,{path:"/innovation/ip-strategy",element:n.jsx(bg,{innovation:T,onUpdateInnovation:Y,onContinue:()=>a("/patent-preparation")})}),n.jsx(Be,{path:"/patent-preparation",element:n.jsx(kg,{innovation:T,onUpdateInnovation:Y,onContinue:()=>a("/expert-connect")})}),n.jsx(Be,{path:"/expert-connect",element:n.jsx(zg,{innovation:T,onUpdateInnovation:Y,onContinue:()=>a("/dossier")})}),n.jsx(Be,{path:"/dossier",element:n.jsx(Cg,{innovation:T,journey:z,onUpdateInnovation:Y,onContinue:()=>a("/pre-filing")})}),n.jsx(Be,{path:"/pre-filing",element:n.jsx(Pg,{innovation:T,onUpdateInnovation:Y,onContinue:()=>a("/innovation/roadmap")})}),n.jsx(Be,{path:"/innovation/roadmap",element:n.jsx(Ig,{innovation:T,onUpdateInnovation:Y,onContinue:Pe})}),n.jsx(Be,{path:"*",element:n.jsx(Kf,{to:"/",replace:!0})})]})})]})]})}function Mg(){return n.jsx(rx,{children:n.jsx(Og,{})})}sf.createRoot(document.getElementById("root")).render(n.jsx(Ep.StrictMode,{children:n.jsx(Rx,{children:n.jsx(Mg,{})})}));
