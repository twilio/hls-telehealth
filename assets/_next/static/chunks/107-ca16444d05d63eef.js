"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{1107:function(e,n,t){var r=t(35666),o=t.n(r),i=t(43820);function a(e,n,t,r,o,i,a){try{var c=e[i](a),p=c.value}catch(s){return void t(s)}c.done?n(p):Promise.resolve(p).then(r,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){a(i,r,o,c,p,"next",e)}function p(e){a(i,r,o,c,p,"throw",e)}c(void 0)}))}}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}var u=t(69282);function d(e){return s({id:e.patient_id,name:e.patient_name,family_name:e.patient_family_name,given_name:e.patient_given_name,phone:e.patient_phone},e.patient_email&&{email:e.patient_email},{gender:e.patient_gender},e.patient_language&&{language:e.patient_language},{medications:e.patient_medications,conditions:e.patient_conditions})}function f(e){return{id:e.provider_id,name:e.provider_name,phone:e.provider_phone,on_call:new Boolean(e.provider_on_call)}}function l(e){return s({id:e.appointment_id,type:e.appointment_type,start_datetime_ltz:new Date(e.appointment_start_datetime_utc),end_datetime_ltz:new Date(e.appointment_end_datetime_utc)},e.appointment_reason&&{reason:e.appointment_reason},{references:e.appointment_references,patient_id:e.patient_id,provider_id:e.provider_id})}function h(e){return s({id:e.content_id,title:e.content_title},e.content_description&&{description:e.content_description},{video_url:e.content_video_url,provider_ids:e.providers.map((function(e){return e}))})}function m(){return(m=c(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"provider"!==n.role&&Promise.reject({error:"Only provider can get patient queue"}),e.next=3,fetch(i.X.backendRoot+"/datastore/appointments",{method:"POST",body:JSON.stringify({action:"GETTUPLE",provider_id:n.id,token:n.token}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}}).then((function(e){return e.json()}));case 3:return t=e.sent,r=[],t.forEach((function(e){var n=d(e.patient),t=f(e.provider),o=l(e.appointment),i={id:o.id,roomName:o.id,ehrAppointment:o,ehrPatient:n,ehrProvider:t};r.push(i)})),e.abrupt("return",Promise.resolve(r));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=c(o().mark((function e(n,t){var r,a,c,p,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.X.backendRoot+"/datastore/appointments",{method:"POST",body:JSON.stringify({action:"GETTUPLE",appointment_id:t,token:n.token}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}}).then((function(e){return e.json()}));case 2:return 0===(r=e.sent).length&&Promise.reject({error:"not found appointment: ".concat(t)}),a=d(r[0].patient),c=f(r[0].provider),p=l(r[0].appointment),s={id:p.id,roomName:p.id,ehrAppointment:p,ehrPatient:a,ehrProvider:c},e.abrupt("return",Promise.resolve(s));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=c(o().mark((function e(n){var t,r,a,c,p,s,u,d,f,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.X.backendRoot+"/datastore/contents",{method:"POST",body:JSON.stringify({action:"GET",token:n.token}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}}).then((function(e){return e.json()}));case 2:t=e.sent,r=t.map((function(e){return h(e)})),a=r.find((function(e){return e.provider_ids.some((function(e){return e===n.id}))})),(c=[]).push(a),p=!0,s=!1,u=void 0,e.prev=8,d=r[Symbol.iterator]();case 10:if(p=(f=d.next()).done){e.next=18;break}if((l=f.value).id!==a.id){e.next=14;break}return e.abrupt("continue",15);case 14:c.push(l);case 15:p=!0,e.next=10;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(8),s=!0,u=e.t0;case 24:e.prev=24,e.prev=25,p||null==d.return||d.return();case 27:if(e.prev=27,!s){e.next=30;break}throw u;case 30:return e.finish(27);case 31:return e.finish(24);case 32:return e.abrupt("return",Promise.resolve(c));case 33:case"end":return e.stop()}}),e,null,[[8,20,24,32],[25,,27,31]])})))).apply(this,arguments)}function y(){return(y=c(o().mark((function e(n,t){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.X.backendRoot+"/datastore/contents",{method:"POST",body:JSON.stringify({action:"GET",provider_id:t,token:n.token}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}}).then((function(e){return e.json()}));case 2:return 0===(r=e.sent).length&&Promise.reject({error:"not found any content"}),a=h(r[0]),e.abrupt("return",Promise.resolve(a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=c(o().mark((function e(n,t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.X.backendRoot+"/datastore/contents",{method:"POST",body:JSON.stringify({action:"ASSIGN",content_id:n,provider_id:t.id,token:t.token}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)}}).then((function(e){return e.json()}));case 2:return e.sent,e.abrupt("return",Promise.resolve(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=c(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.X.backendRoot+"/datastore/providers",{method:"POST",body:JSON.stringify({action:"GETONCALL",token:n}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()}));case 2:return 0===(t=e.sent).length&&Promise.reject({error:"No on-call provider found, error in EHR data!!!"}),r=f(t[0]),e.abrupt("return",Promise.resolve(r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=c(o().mark((function e(n,t){var r,a,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(t.family_name,"Missing family_name!!!"),u(t.given_name,"Missing given_name!!!"),u(t.phone,"Missing phone!!!"),r=s({patient_name:t.given_name+" "+t.family_name,patient_family_name:t.family_name,patient_given_name:t.given_name,patient_phone:t.phone},t.phone&&{patient_phone:t.phone},t.email&&{patient_email:t.email},{patient_gender:t.gender,patient_language:t.language?t.language:"English",patient_medications:t.medications?t.medications:[],patient_conditions:t.conditions?t.conditions:[]}),e.next=6,fetch(i.X.backendRoot+"/datastore/patients",{method:"POST",body:JSON.stringify({action:"ADD",patient:r,token:n}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then(c(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 6:return(a=e.sent)||Promise.reject({error:"Unable to create new patient in EHR!!!"}),p=d(a),e.abrupt("return",Promise.resolve(p));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=c(o().mark((function e(n,t){var r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(t.patient_id,"Missing patient_id!!!"),u(t.provider_id,"Missing provider_id!!!"),r=s({patient_id:t.patient_id,provider_id:t.provider_id},t.reason&&{appointment_reason:t.reason},t.references&&{appointment_references:t.references}),e.next=5,fetch(i.X.backendRoot+"/datastore/appointments",{method:"POST",body:JSON.stringify({action:"ADD",appointment:r,token:n}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()}));case 5:return(a=e.sent)||Promise.reject({error:"Unable to create new appointment in EHR!!!"}),c=l(a),e.abrupt("return",Promise.resolve(c));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=c(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n){e.next=2;break}throw new Error("Unauthorized: Token is either null or undefined!");case 2:if(null!=t){e.next=4;break}throw new Error("Survey is null or undefined!");case 4:return(r=fetch(i.X.backendRoot+"/datastore/surveys",{method:"POST",body:JSON.stringify({action:"ADD",survey:t,token:n}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})))||Promise.reject({error:"Unable to add post visit survey!"}),e.abrupt("return",Promise.resolve(r));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=c(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n){e.next=2;break}throw new Error("Unauthorized: Token is either null or undefined!");case 2:return(t=fetch(i.X.backendRoot+"/datastore/surveys",{method:"POST",body:JSON.stringify({action:"GET",token:n}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})))||Promise.reject({error:"Unable to add post visit survey!"}),e.abrupt("return",Promise.resolve(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.Z={fetchAllTelehealthVisits:function(e){return m.apply(this,arguments)},fetchTelehealthVisitForPatient:function(e,n){return v.apply(this,arguments)},fetchAllContent:function(e){return _.apply(this,arguments)},fetchContentForPatient:function(e,n){return y.apply(this,arguments)},assignContentToProvider:function(e,n){return b.apply(this,arguments)},fetchProviderOnCall:function(e){return k.apply(this,arguments)},addPatient:function(e,n){return g.apply(this,arguments)},addAppointment:function(e,n){return P.apply(this,arguments)},addSurvey:function(e,n){return j.apply(this,arguments)},getSurveys:function(e){return w.apply(this,arguments)}}}}]);