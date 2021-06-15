(this["webpackJsonpaws-client"]=this["webpackJsonpaws-client"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),l=(n(29),n(8)),s=n(1),i=function(){return r.a.createElement("header",{className:"bg-secondary mb-4 py-2 flex-row align-center"},r.a.createElement("div",{className:"container flex-row justify-space-between-lg justify-center align-center"},r.a.createElement(l.b,{to:"/",style:{fontWeight:700},className:"text-light"},r.a.createElement("h1",null,"Deep Thoughts"))," "))},u=function(){return r.a.createElement("footer",{className:"w-100 mt-auto bg-secondary p-4"},r.a.createElement("div",{className:"container"},"\xa92020 by Lernantino"))},m=n(6),h=n.n(m),f=n(15),p=n(10),d=n(7),g=function(e){var t=e.thoughts,n=e.title;return t.length?r.a.createElement("div",null,r.a.createElement("h3",null,n),t&&t.map((function(e){return r.a.createElement("div",{key:e.createdAt,className:"card mb-3"},r.a.createElement("p",{className:"card-header"},r.a.createElement(l.b,{to:"/profile/".concat(e.username),style:{fontWeight:700},className:"text-light"},e.username,"'s thought on ",new Date(parseInt(e.createdAt)).toString())," "),e.thought&&r.a.createElement("p",{className:"px-2 mt-2"},e.thought))}))):r.a.createElement("h3",null,"No Thoughts Yet")},v=n(14),b=n(19),E=function(){var e=Object(a.useState)({username:"",thought:""}),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),l=Object(d.a)(o,2),s=l[0],i=l[1],u=function(e){e.target.value.length<=280&&(c(Object(b.a)(Object(b.a)({},n),{},Object(v.a)({},e.target.name,e.target.value))),i(e.target.value.length))};return r.a.createElement("div",null,r.a.createElement("p",{className:"m-0 ".concat(280===s?"text-error":"")},"Character Count: ",s,"/280"),r.a.createElement("form",{className:"flex-row justify-center justify-space-between-md align-stretch",onSubmit:function(e){e.preventDefault(),function(){var e=Object(p.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),c({username:"",thought:""}),i(0)}},r.a.createElement("input",{placeholder:"Name",name:"username",value:n.username,className:"form-input col-12 ",onChange:u}),r.a.createElement("textarea",{placeholder:"Here's a new thought...",name:"thought",value:n.thought,className:"form-input col-12 ",onChange:u}),r.a.createElement("button",{className:"btn col-12 ",type:"submit"},"Submit")))},w=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),l=Object(d.a)(o,2),s=l[0],i=l[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.sort((function(e,t){return e.createdAt<t.createdAt?1:-1})),i(Object(f.a)(a)),c(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("main",null,r.a.createElement("div",{className:"flex-row justify-space-between"},r.a.createElement("div",{className:"col-12 mb-3"},r.a.createElement(E,null)),r.a.createElement("div",{className:"col-12 mb-3 "},n?r.a.createElement(g,{thoughts:s,setThoughts:i,title:"Some Feed for Thought(s)..."}):r.a.createElement("div",null,"Loading..."))))},j=function(){return r.a.createElement("div",null,"Oops, we couldn't find that page.")},y=function(e){var t=Object(s.f)().username,n=Object(a.useState)(!1),c=Object(d.a)(n,2),o=c[0],l=c[1],i=Object(a.useState)([{username:t,createdAt:"",thought:""}]),u=Object(d.a)(i,2),m=u[0],v=u[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log(a),v(Object(f.a)(a)),l(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row mb-3"},r.a.createElement("h2",{className:"bg-dark text-secondary p-3 display-inline-block"},"Viewing ",t?"".concat(t,"'s"):"your"," profile.")),r.a.createElement("div",{className:"flex-row justify-space-between mb-3"},r.a.createElement("div",{className:"col-12 mb-3 col-lg-9"},o?r.a.createElement(g,{thoughts:m,title:"".concat(t,"'s thoughts...")}):r.a.createElement("div",null,"Loading..."))))};var x=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"flex-column justify-flex-start min-100-vh"},r.a.createElement(i,null),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/profile/:username",component:y}),r.a.createElement(s.a,{component:j}))),r.a.createElement(u,null)))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.08d2484c.chunk.js.map