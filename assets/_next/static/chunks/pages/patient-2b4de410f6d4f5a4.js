(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{56:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype=new Error,n.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o,i=0,a=0,u="";o=t.charAt(a++);~o&&(r=i%4?64*r+o:o,i++%4)?u+=String.fromCharCode(255&r>>(-2*i&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return u};function i(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return o(t)}}function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidTokenError",t.Z=function(e,t){if("string"!=typeof e)throw new a("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(i(e.split(".")[r]))}catch(e){throw new a("Invalid token specified: "+e.message)}}},4144:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patient",function(){return r(399)}])},1438:function(e,t,r){"use strict";r.d(t,{lA:function(){return n},J$:function(){return o},j4:function(){return i},p8:function(){return a},sL:function(){return u},LX:function(){return c},bo:function(){return s},DF:function(){return l}});var n={width:1280,height:720,frameRate:24},o="TwilioVideoApp-selectedAudioInput",i="TwilioVideoApp-selectedAudioOutput",a="TwilioVideoApp-selectedVideoInput",u="TelehealthUser",c="TelehealthVisit",s="CurrentVisitId",l={trackSwitchOffMode:void 0,dominantSpeakerPriority:"standard",bandwidthProfileMode:"collaboration",maxAudioBitrate:"16000",contentPreferencesMode:"auto",clientTrackSwitchOffControl:"auto",roomType:"group"}},399:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),o=r(1163),i=r(7294),a=r(56);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={authenticatePatient:function(e){var t=(0,a.Z)(e);return Promise.resolve(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({},t.grants.patient,{isAuthenticated:!0,token:e}))}},s=[{id:"v-doe-jonson-1121",providerName:"Dr. John Doe",patientName:"Kelly Jonsons",roomName:"v-doe-jonson-1121",visitDateTime:new Date},{id:"v-doe-peterson-1121",providerName:"Dr. John Doe",patientName:"Paul Peterson",roomName:"v-doe-peterson-1121",visitDateTime:new Date}];function l(e){return Promise.resolve(s.find((function(t){return t.id===e})))}var f={getVisits:function(e){return"practitioner"!==e.role&&Promise.reject({error:"Only provider can get a list of visits"}),Promise.resolve(s)},getVisit:l,getVisitForPatient:function(e){return l(e.visitId)}},d=r(1502),p=r(1438),v=function(){var e=(0,o.useRouter)();return(0,i.useEffect)((function(){var t=e.query.token;t&&c.authenticatePatient(t).then((function(e){return d.Z.saveToStorage(p.sL,e),f.getVisitForPatient(e)})).then((function(t){t&&(d.Z.saveToStorage(p.LX,t),e.push("/patient/waiting-room"))}))}),[e]),(0,n.jsx)("p",{children:"Please wait! You will be redirected to a call shortly."})}},1502:function(e,t){"use strict";t.Z={getFromStorage:function(e,t){try{var r=window.localStorage.getItem(e);if(r){var n=JSON.parse(r);return Promise.resolve(n)}}catch(o){return console.log(o),Promise.resolve(t)}},saveToStorage:function(e,t){return null==t?window.localStorage.removeItem(e):window.localStorage.setItem(e,JSON.stringify(t)),Promise.resolve()}}},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return t=4144,e(e.s=t);var t}));var t=e.O();_N_E=t}]);