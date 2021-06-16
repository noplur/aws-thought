(this["webpackJsonpaws-client"]=this["webpackJsonpaws-client"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),s=(n(29),n(8)),l=n(1),i=function(){return r.a.createElement("header",{className:"bg-secondary mb-4 py-2 flex-row align-center"},r.a.createElement("div",{className:"container flex-row justify-space-between-lg justify-center align-center"},r.a.createElement(s.b,{to:"/",style:{fontWeight:700},className:"text-light"},r.a.createElement("h1",null,"Deep Thoughts"))," "))},u=function(){return r.a.createElement("footer",{className:"w-100 mt-auto bg-secondary p-4"},r.a.createElement("div",{className:"container"},"\xa92020 by Lernantino"))},m=n(6),f=n.n(m),h=n(16),p=n(9),d=n(7),g=function(e){var t=e.thoughts,n=e.title;return t.length?r.a.createElement("div",null,r.a.createElement("h3",null,n),t&&t.map((function(e){return r.a.createElement("div",{key:e.createdAt,className:"card mb-3"},r.a.createElement("p",{className:"card-header"},r.a.createElement(s.b,{to:"/profile/".concat(e.username),style:{fontWeight:700},className:"text-light"},e.username,"'s thought on ",new Date(parseInt(e.createdAt)).toString())," "),e.thought&&r.a.createElement("p",{className:"px-2 mt-2"},e.thought))}))):r.a.createElement("h3",null,"No Thoughts Yet")},v=n(15),b=n(13),E=function(){var e=Object(a.useState)({username:"",thought:""}),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),s=Object(d.a)(o,2),l=s[0],i=s[1],u=Object(a.useRef)(null),m=function(e){e.target.value.length<=280&&(c(Object(b.a)(Object(b.a)({},n),{},Object(v.a)({},e.target.name,e.target.value))),i(e.target.value.length))};return r.a.createElement("div",null,r.a.createElement("p",{className:"m-0 ".concat(280===l?"text-error":"")},"Character Count: ",l,"/280"),r.a.createElement("form",{className:"flex-row justify-center justify-space-between-md align-stretch",onSubmit:function(e){e.preventDefault(),function(){var e=Object(p.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),c({username:"",thought:""}),i(0)}},r.a.createElement("input",{placeholder:"Name",name:"username",value:n.username,className:"form-input col-12 ",onChange:m}),r.a.createElement("textarea",{placeholder:"Here's a new thought...",name:"thought",value:n.thought,className:"form-input col-12 ",onChange:m}),r.a.createElement("button",{className:"btn col-12 ",type:"submit"},"Submit"),r.a.createElement("label",{className:"form-input col-12  p-1"},"Add an image to your thought:",r.a.createElement("input",{type:"file",ref:u,className:"form-input p-2"}),r.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault();var t=new FormData;t.append("image",u.current.files[0]),function(){var e=Object(p.a)(f.a.mark((function e(){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/image-upload",{mode:"cors",method:"POST",body:t});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.statusText);case 6:return e.next=8,a.json();case 8:return r=e.sent,c(Object(b.a)(Object(b.a)({},n),{},{image:r.Location})),console.log("postImage: ",r.Location),e.abrupt("return",r.Location);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}()()},type:"submit"},"Upload"))))},w=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(d.a)(o,2),l=s[0],i=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.sort((function(e,t){return e.createdAt<t.createdAt?1:-1})),i(Object(h.a)(a)),c(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("main",null,r.a.createElement("div",{className:"flex-row justify-space-between"},r.a.createElement("div",{className:"col-12 mb-3"},r.a.createElement(E,null)),r.a.createElement("div",{className:"col-12 mb-3 "},n?r.a.createElement(g,{thoughts:l,setThoughts:i,title:"Some Feed for Thought(s)..."}):r.a.createElement("div",null,"Loading..."))))},j=function(){return r.a.createElement("div",null,"Oops, we couldn't find that page.")},y=function(e){var t=Object(l.f)().username,n=Object(a.useState)(!1),c=Object(d.a)(n,2),o=c[0],s=c[1],i=Object(a.useState)([{username:t,createdAt:"",thought:""}]),u=Object(d.a)(i,2),m=u[0],v=u[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log(a),v(Object(h.a)(a)),s(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row mb-3"},r.a.createElement("h2",{className:"bg-dark text-secondary p-3 display-inline-block"},"Viewing ",t?"".concat(t,"'s"):"your"," profile.")),r.a.createElement("div",{className:"flex-row justify-space-between mb-3"},r.a.createElement("div",{className:"col-12 mb-3 col-lg-9"},o?r.a.createElement(g,{thoughts:m,title:"".concat(t,"'s thoughts...")}):r.a.createElement("div",null,"Loading..."))))};var x=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"flex-column justify-flex-start min-100-vh"},r.a.createElement(i,null),r.a.createElement("div",{className:"container"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:w}),r.a.createElement(l.a,{exact:!0,path:"/profile/:username",component:y}),r.a.createElement(l.a,{component:j}))),r.a.createElement(u,null)))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.9a3820d0.chunk.js.map