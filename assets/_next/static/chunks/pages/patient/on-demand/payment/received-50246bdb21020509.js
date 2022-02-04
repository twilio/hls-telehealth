(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{84296:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patient/on-demand/payment/received",function(){return t(93271)}])},54978:function(e,n,t){"use strict";t.d(n,{b:function(){return s}});var r=t(85893),a=(t(67294),t(48847)),c=t(9783),s=function(e){var n=e.className,t=e.content,s=e.contentBeforeIcon,i=e.footer,o=e.icon,u=e.title,f=e.titleAfterIcon,l=function(){return(0,r.jsx)("div",{className:"my-3",children:t})};return(0,r.jsxs)("div",{className:(0,a.WM)("flex flex-col justify-center items-center text-center",n),children:[!f&&(0,r.jsx)(c.X,{children:u}),s&&(0,r.jsx)(l,{}),o&&(0,r.jsx)("div",{className:f||s?"mb-10":"mt-10",children:o}),f&&(0,r.jsx)(c.X,{children:u}),!s&&(0,r.jsx)(l,{}),i&&i]})}},61783:function(e,n,t){"use strict";t.d(n,{N:function(){return s},O:function(){return i}});var r=t(85893),a=t(67294),c=t(34929),s=(0,a.createContext)(null),i=function(e){var n=e.children,t=(0,a.useState)(""),i=t[0],o=t[1],u=(0,a.useState)(null),f=u[0],l=u[1],p=(0,a.useState)(null),d=p[0],h=p[1],m=(0,a.useCallback)((function(e){try{var n=new c.SyncClient(e);window.syncClient=n,o(e),l(n)}catch(t){throw new Error(t)}}),[]);return(0,a.useEffect)((function(){f&&f.stream("OnDemandStream").then((function(e){h(e)}))}),[f]),(0,r.jsx)(s.Provider,{value:{syncToken:i,connect:m,syncClient:f,onDemandStream:d},children:n})}},36255:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(67294),a=t(61783);function c(){var e=(0,r.useContext)(a.N);if(!e)throw new Error("useSyncContext must be used within SyncProvider");return e}},30708:function(e,n,t){"use strict";var r=t(85893);n.Z=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){var t=e.children;return n.reduceRight((function(e,n){return(0,r.jsx)(n,{children:e})}),t)}}},31237:function(e,n,t){"use strict";var r=t(85893);n.Z=function(){return(0,r.jsx)("div",{className:"flex justify-center m-8",children:(0,r.jsx)("div",{className:"border-t-transparent w-20 h-20 border-4 border-primary border-dotted rounded-full animate-spin"})})}},82340:function(e,n,t){"use strict";var r=t(85893),a=(t(67294),t(61783)),c=(0,t(30708).Z)(a.O);n.Z=function(e){return(0,r.jsx)(c,{children:e.children})}},93271:function(e,n,t){"use strict";t.r(n);var r=t(35666),a=t.n(r),c=t(85893),s=t(67294),i=t(54978),o=t(23074),u=t(75270),f=t(11163),l=t(43820),p=t(36255),d=t(82340),h=t(1107),m=t(51502),v=t(1438),x=t(31237);function y(e,n,t,r,a,c,s){try{var i=e[c](s),o=i.value}catch(u){return void t(u)}i.done?n(o):Promise.resolve(o).then(r,a)}function w(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var c=e.apply(n,t);function s(e){y(c,r,a,s,i,"next",e)}function i(e){y(c,r,a,s,i,"throw",e)}s(void 0)}))}}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=function(){var e=(0,f.useRouter)(),n=(0,s.useState)(null),t=n[0],r=n[1],d=(0,s.useState)(""),y=d[0],k=d[1],g=(0,s.useState)(""),S=g[0],b=g[1],N=(0,s.useState)(""),P=N[0],T=N[1],C=(0,s.useState)(!1),E=C[0],_=C[1],Z=(0,s.useState)(null),O=Z[0],A=Z[1],I=(0,p.Z)(),X=I.syncClient,D=I.syncToken,F=I.onDemandStream;function R(){return M.apply(this,arguments)}function M(){return(M=w(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.getFromStorage("OnDemandToken");case 2:return(n=e.sent)&&r(n.passcode),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=(0,s.useCallback)(w(a().mark((function n(t){var r,c,s,i,o,u,f,l;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=j,n.next=4,Promise.all([m.Z.getFromStorage(v.Y8),m.Z.getFromStorage(v.l4)]);case 4:return n.t1=n.sent,r=(0,n.t0)(n.t1,2),c=r[0],s=r[1],i={name:c.lastName,family_name:c.lastName,given_name:c.firstName,phone:c.phoneNumber,gender:c.gender},n.t2=j,n.next=12,Promise.all([h.Z.fetchProviderOnCall(t),h.Z.addPatient(t,i)]);case 12:n.t3=n.sent,o=(0,n.t2)(n.t3,2),u=o[0],f=o[1],l={provider_id:u.id,patient_id:f.id,reason:s.reason,references:[]},b(f.id),A(l),n.next=25;break;case 21:n.prev=21,n.t4=n.catch(0),console.log(n.t4),e.push("/patient/on-demand/info");case 25:case"end":return n.stop()}}),n,null,[[0,21]])}))),[e]);(0,s.useEffect)((function(){function e(){return(e=w(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:e.sent||fetch(l.X.get(l.X.visits.token),{method:"POST",body:JSON.stringify({role:"patient",action:"PATIENT",id:"p1000000",visitId:"a1000000"}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(w(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:t=e.sent,W(t.token),T(t.token);case 5:case"end":return e.stop()}}),e)})))).catch((function(e){_(!0),new Error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[W,D]),(0,s.useEffect)((function(){function e(){return(e=w(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:n=e.sent,X&&F&&O&&D&&P&&!n&&F.publishMessage({appointment:O,patientSyncToken:D}).then(w(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.addAppointment(P,n.data.appointment);case 2:t=e.sent,k(t.id);case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error("Stream publishMessage() failed",e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[P,O,F,X,D]),(0,s.useEffect)((function(){function e(){return(e=w(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:n=e.sent,P&&S&&y&&!n&&fetch(l.X.get(l.X.visits.token),{method:"POST",body:JSON.stringify({role:"patient",action:"PATIENT",id:S,visitId:y}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(w(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:t=e.sent,m.Z.saveToStorage("OnDemandToken",t),r(t.passcode);case 5:case"end":return e.stop()}}),e)})))).catch((function(e){_(!0),new Error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[P,y,S]);var B=w(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R();case 2:r=n.sent,console.log("my passcode",t,r),r&&r.passcode?e.push("/patient?token=".concat(r.passcode)):e.push("/patient?token=".concat(t));case 5:case"end":return n.stop()}}),n)})));return(0,c.jsxs)(u.Ar,{children:[(0,c.jsx)(i.b,{title:"Payment Received",icon:(0,c.jsx)("img",{alt:"Payment Success",src:"/icons/payment-success.svg",height:98,width:135}),contentBeforeIcon:!0,content:(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("p",{className:"mb-6",children:["We\u2019ve received your payment information, and will be using it to process this visit. ",t&&"Please wait while we process your appointment."]})})}),(0,c.jsx)("div",{className:"my-5 mx-auto max-w-[250px] w-full",children:t?(0,c.jsx)(o.z,{type:"submit",disabled:E,className:"w-full",onClick:B,children:"Connect to Waiting Room"}):(0,c.jsx)(x.Z,{})})]})};k.Layout=d.Z,n.default=k}},function(e){e.O(0,[816,221,389,313,283,17,337,270,107,774,888,179],(function(){return n=84296,e(e.s=n);var n}));var n=e.O();_N_E=n}]);