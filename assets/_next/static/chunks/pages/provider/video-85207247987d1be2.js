(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[994],{24234:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/provider/video",function(){return r(40037)}])},61783:function(n,e,r){"use strict";r.d(e,{N:function(){return c},O:function(){return u}});var t=r(85893),o=r(67294),i=r(34929),c=(0,o.createContext)(null),u=function(n){var e=n.children,r=(0,o.useState)(""),u=r[0],a=r[1],s=(0,o.useState)(null),d=s[0],f=s[1],l=(0,o.useState)(null),v=l[0],h=l[1],m=(0,o.useCallback)((function(n){try{var e=new i.SyncClient(n);window.syncClient=e,a(n),f(e)}catch(r){throw new Error(r)}}),[]);return(0,o.useEffect)((function(){d&&d.stream("OnDemandStream").then((function(n){h(n)}))}),[d]),(0,t.jsx)(c.Provider,{value:{syncToken:u,connect:m,syncClient:d,onDemandStream:v},children:e})}},855:function(n,e,r){"use strict";r.d(e,{Z:function(){return u}});var t=r(67294),o=r(48847),i=r(1438),c=r(34155);function u(){var n,e=(0,t.useState)(i.DF),r=e[0],u=(e[1],{bandwidthProfile:{video:{mode:r.bandwidthProfileMode,dominantSpeakerPriority:r.dominantSpeakerPriority,trackSwitchOffMode:r.trackSwitchOffMode,contentPreferencesMode:r.contentPreferencesMode,clientTrackSwitchOffControl:r.clientTrackSwitchOffControl}},dominantSpeaker:!0,networkQuality:{local:1,remote:1},maxAudioBitrate:Number(r.maxAudioBitrate),preferredVideoCodecs:[{codec:"VP8",simulcast:"peer-to-peer"!==r.roomType&&"go"!==r.roomType}],environment:c.env.REACT_APP_TWILIO_ENVIRONMENT});return o.tq&&(null===u||void 0===u||null===(n=u.bandwidthProfile)||void 0===n?void 0:n.video)&&(u.bandwidthProfile.video.maxSubscriptionBitrate=25e5),"dev"===c.env.REACT_APP_TWILIO_ENVIRONMENT&&(u.wsServer="wss://us2.vss.dev.twilio.com/signaling"),(0,o.po)(u)}},30708:function(n,e,r){"use strict";var t=r(85893);e.Z=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return function(n){var r=n.children;return e.reduceRight((function(n,e){return(0,t.jsx)(e,{children:n})}),r)}}},31368:function(n,e,r){"use strict";var t=r(85893),o=r(67294),i=r(50784),c=r(855),u=r(51582),a=r(15428),s=r(8225),d=r(30708),f=r(61783),l=(0,d.Z)((function(n){var e=(0,u.R)().user,r=(0,a.Z)(),i=r.getAudioAndVideoTracks,c=r.localTracks,s=(0,o.useState)(),d=s[0],f=s[1];return(0,o.useEffect)((function(){d||i().catch((function(n){console.log("Error acquiring local media:"),console.dir(n),f(n)}))}),[i,d]),e&&c&&c.length>1&&(0,t.jsx)(t.Fragment,{children:n.children})}),s.a,f.O);e.Z=function(n){var e=(0,c.Z)();return(0,t.jsx)(u.KX,{children:(0,t.jsx)(i.Z,{options:e,onError:function(n){return console.log(n)},children:(0,t.jsx)(l,{children:n.children})})})}},40037:function(n,e,r){"use strict";r.r(e);var t=r(35666),o=r.n(t),i=r(85893),c=r(67294),u=r(15428),a=r(83172),s=r(51582),d=r(11163),f=r(36539),l=r(51502),v=r(1438),h=r(31368),m=r(610);function w(n,e,r,t,o,i,c){try{var u=n[i](c),a=u.value}catch(s){return void r(s)}u.done?e(a):Promise.resolve(a).then(t,o)}var p=function(){var n=(0,s.R)().user,e=(0,u.Z)(),r=e.connect,t=e.room,h=(0,m.Z)().connect,p=(0,d.useRouter)();return(0,c.useEffect)((function(){t||l.Z.getFromStorage(v.bo).then((function(e){var t;f.G.createRoom(n,e).then((t=o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.roomAvailable||p.push("/provider/dashboard"),t=e.token,h(t),r(t);case 4:case"end":return n.stop()}}),n)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(n){w(i,r,o,c,u,"next",n)}function u(n){w(i,r,o,c,u,"throw",n)}c(void 0)}))}))}))}),[p,t]),(0,i.jsx)(a.ls,{})};p.Layout=h.Z,e.default=p}},function(n){n.O(0,[816,221,132,389,313,17,416,337,107,225,774,888,179],(function(){return e=24234,n(n.s=e);var e}));var e=n.O();_N_E=e}]);