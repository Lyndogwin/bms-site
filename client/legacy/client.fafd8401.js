import{s as e,n as t,_ as n,a as r,b as s,c as a,i as o,d as i,S as c,e as u,t as l,f,g as p,h as v,j as m,k as h,l as d,m as g,o as $,p as b,q as _,r as E,u as x,v as S,w as y,x as k,y as w,z as P,A as R,B as A,C as L,D as C,E as j,F as O}from"./chunk.2fffb656.js";import{_ as U,a as q}from"./chunk.ad72862a.js";function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){s=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(s)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(n){var r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a=[];function o(t){if(e(n,t)){if(n=t,!r)return;a.forEach(function(e){return e[1]()}),a.forEach(function(e){return e[0](n)})}}return{set:o,update:function(e){o(e(n))},subscribe:function(e){var i=[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:t];return a.push(i),1===a.length&&(r=s(o)||t),e(n),function(){var e=a.indexOf(i);-1!==e&&a.splice(e,1),0===a.length&&(r(),r=null)}}}}var N={},I=function(){return{}};function T(e){var n,r,s,a,o,i,c,b,_,E,x,S,y,k,w,P,R,A,L,C,j;return{c:function(){n=u("nav"),r=u("ul"),s=u("li"),a=u("a"),o=l("Home"),c=f(),b=u("li"),_=u("a"),E=l("About"),S=f(),y=u("li"),k=u("a"),w=l("Reports"),R=f(),A=u("li"),L=u("a"),C=l("MTG Manager"),this.h()},l:function(e){n=p(e,"NAV",{class:!0},!1);var t=v(n);r=p(t,"UL",{class:!0},!1);var i=v(r);s=p(i,"LI",{class:!0},!1);var u=v(s);a=p(u,"A",{class:!0,href:!0},!1);var l=v(a);o=m(l,"Home"),l.forEach(h),u.forEach(h),c=m(i,"\n\t\t"),b=p(i,"LI",{class:!0},!1);var f=v(b);_=p(f,"A",{class:!0,href:!0},!1);var d=v(_);E=m(d,"About"),d.forEach(h),f.forEach(h),S=m(i,"\n\n\t\t\n\t\t"),y=p(i,"LI",{class:!0},!1);var g=v(y);k=p(g,"A",{rel:!0,class:!0,href:!0},!1);var $=v(k);w=m($,"Reports"),$.forEach(h),g.forEach(h),R=m(i,"\n\n\t\t"),A=p(i,"LI",{class:!0},!1);var x=v(A);L=p(x,"A",{class:!0,href:!0},!1);var P=v(L);C=m(P,"MTG Manager"),P.forEach(h),x.forEach(h),i.forEach(h),t.forEach(h),this.h()},h:function(){d(a,"class",i=(void 0===e.segment?"selected":"")+" svelte-11kwxiv"),d(a,"href","."),d(s,"class","svelte-11kwxiv"),d(_,"class",x=("about"===e.segment?"selected":"")+" svelte-11kwxiv"),d(_,"href","about"),d(b,"class","svelte-11kwxiv"),d(k,"rel","prefetch"),d(k,"class",P=("blog"===e.segment?"selected":"")+" svelte-11kwxiv"),d(k,"href","blog"),d(y,"class","svelte-11kwxiv"),d(L,"class",j=("mtg"===e.segment?"selected":"")+" svelte-11kwxiv"),d(L,"href","mtg"),d(A,"class","svelte-11kwxiv"),d(r,"class","svelte-11kwxiv"),d(n,"class","svelte-11kwxiv")},m:function(e,t){g(e,n,t),$(n,r),$(r,s),$(s,a),$(a,o),$(r,c),$(r,b),$(b,_),$(_,E),$(r,S),$(r,y),$(y,k),$(k,w),$(r,R),$(r,A),$(A,L),$(L,C)},p:function(e,t){e.segment&&i!==(i=(void 0===t.segment?"selected":"")+" svelte-11kwxiv")&&d(a,"class",i),e.segment&&x!==(x=("about"===t.segment?"selected":"")+" svelte-11kwxiv")&&d(_,"class",x),e.segment&&P!==(P=("blog"===t.segment?"selected":"")+" svelte-11kwxiv")&&d(k,"class",P),e.segment&&j!==(j=("mtg"===t.segment?"selected":"")+" svelte-11kwxiv")&&d(L,"class",j)},i:t,o:t,d:function(e){e&&h(n)}}}function M(e,t,n){var r=t.segment;return e.$set=function(e){"segment"in e&&n("segment",r=e.segment)},{segment:r}}var B=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,M,T,e,["segment"]),n}return n(u,c),u}();function J(e){var t,n,r,s=new B({props:{segment:e.segment}}),a=e.$$slots.default,o=b(a,e,null);return{c:function(){s.$$.fragment.c(),t=f(),n=u("main"),o&&o.c(),this.h()},l:function(e){s.$$.fragment.l(e),t=m(e,"\n\n"),n=p(e,"MAIN",{class:!0},!1);var r=v(n);o&&o.l(r),r.forEach(h),this.h()},h:function(){d(n,"class","svelte-fl0ztp")},m:function(e,a){_(s,e,a),g(e,t,a),g(e,n,a),o&&o.m(n,null),r=!0},p:function(e,t){var n={};e.segment&&(n.segment=t.segment),s.$set(n),o&&o.p&&e.$$scope&&o.p(E(a,t,e,null),x(a,t,null))},i:function(e){r||(S(s.$$.fragment,e),S(o,e),r=!0)},o:function(e){y(s.$$.fragment,e),y(o,e),r=!1},d:function(e){k(s,e),e&&(h(t),h(n)),o&&o.d(e)}}}function V(e,t,n){var r=t.segment,s=t.$$slots,a=void 0===s?{}:s,o=t.$$scope;return e.$set=function(e){"segment"in e&&n("segment",r=e.segment),"$$scope"in e&&n("$$scope",o=e.$$scope)},{segment:r,$$slots:a,$$scope:o}}var G=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,V,J,e,["segment"]),n}return n(u,c),u}();function K(e){var t,n,r=e.error.stack;return{c:function(){t=u("pre"),n=l(r)},l:function(e){t=p(e,"PRE",{},!1);var s=v(t);n=m(s,r),s.forEach(h)},m:function(e,r){g(e,t,r),$(t,n)},p:function(e,t){e.error&&r!==(r=t.error.stack)&&w(n,r)},d:function(e){e&&h(t)}}}function z(e){var n,r,s,a,o,i,c,b,_,E=e.error.message;document.title=n=e.status;var x=e.dev&&e.error.stack&&K(e);return{c:function(){r=f(),s=u("h1"),a=l(e.status),o=f(),i=u("p"),c=l(E),b=f(),x&&x.c(),_=P(),this.h()},l:function(t){r=m(t,"\n\n"),s=p(t,"H1",{class:!0},!1);var n=v(s);a=m(n,e.status),n.forEach(h),o=m(t,"\n\n"),i=p(t,"P",{class:!0},!1);var u=v(i);c=m(u,E),u.forEach(h),b=m(t,"\n\n"),x&&x.l(t),_=P(),this.h()},h:function(){d(s,"class","svelte-8od9u6"),d(i,"class","svelte-8od9u6")},m:function(e,t){g(e,r,t),g(e,s,t),$(s,a),g(e,o,t),g(e,i,t),$(i,c),g(e,b,t),x&&x.m(e,t),g(e,_,t)},p:function(e,t){e.status&&n!==(n=t.status)&&(document.title=n),e.status&&w(a,t.status),e.error&&E!==(E=t.error.message)&&w(c,E),t.dev&&t.error.stack?x?x.p(e,t):((x=K(t)).c(),x.m(_.parentNode,_)):x&&(x.d(1),x=null)},i:t,o:t,d:function(e){e&&(h(r),h(s),h(o),h(i),h(b)),x&&x.d(e),e&&h(_)}}}function F(e,t,n){var r=t.status,s=t.error;return e.$set=function(e){"status"in e&&n("status",r=e.status),"error"in e&&n("error",s=e.error)},{status:r,error:s,dev:!1}}var W=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,F,z,e,["status","error"]),n}return n(u,c),u}();function X(e){var t,n,r=[e.level1.props],s=e.level1.component;function a(e){for(var t={},n=0;n<r.length;n+=1)t=R(t,r[n]);return{props:t}}if(s)var o=new s(a());return{c:function(){o&&o.$$.fragment.c(),t=P()},l:function(e){o&&o.$$.fragment.l(e),t=P()},m:function(e,r){o&&_(o,e,r),g(e,t,r),n=!0},p:function(e,n){var i=e.level1?A(r,[n.level1.props]):{};if(s!==(s=n.level1.component)){if(o){C();var c=o;y(c.$$.fragment,1,function(){k(c)}),j()}s?((o=new s(a())).$$.fragment.c(),S(o.$$.fragment,1),_(o,t.parentNode,t)):o=null}else s&&o.$set(i)},i:function(e){n||(o&&S(o.$$.fragment,e),n=!0)},o:function(e){o&&y(o.$$.fragment,e),n=!1},d:function(e){e&&h(t),o&&k(o,e)}}}function Y(e){var t,n=new W({props:{error:e.error,status:e.status}});return{c:function(){n.$$.fragment.c()},l:function(e){n.$$.fragment.l(e)},m:function(e,r){_(n,e,r),t=!0},p:function(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i:function(e){t||(S(n.$$.fragment,e),t=!0)},o:function(e){y(n.$$.fragment,e),t=!1},d:function(e){k(n,e)}}}function Q(e){var t,n,r,s,a=[Y,X],o=[];function i(e){return e.error?0:1}return t=i(e),n=o[t]=a[t](e),{c:function(){n.c(),r=P()},l:function(e){n.l(e),r=P()},m:function(e,n){o[t].m(e,n),g(e,r,n),s=!0},p:function(e,s){var c=t;(t=i(s))===c?o[t].p(e,s):(C(),y(o[c],1,function(){o[c]=null}),j(),(n=o[t])||(n=o[t]=a[t](s)).c(),S(n,1),n.m(r.parentNode,r))},i:function(e){s||(S(n),s=!0)},o:function(e){y(n),s=!1},d:function(e){o[t].d(e),e&&h(r)}}}function Z(e){for(var t,n=[{segment:e.segments[0]},e.level0.props],r={$$slots:{default:[Q]},$$scope:{ctx:e}},s=0;s<n.length;s+=1)r=R(r,n[s]);var a=new G({props:r});return{c:function(){a.$$.fragment.c()},l:function(e){a.$$.fragment.l(e)},m:function(e,n){_(a,e,n),t=!0},p:function(e,t){var r=e.segments||e.level0?A(n,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i:function(e){t||(S(a.$$.fragment,e),t=!0)},o:function(e){y(a.$$.fragment,e),t=!1},d:function(e){k(a,e)}}}function ee(e,t,n){var r=t.stores,s=t.error,a=t.status,o=t.segments,i=t.level0,c=t.level1,u=void 0===c?null:c;return L(N,r),e.$set=function(e){"stores"in e&&n("stores",r=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",a=e.status),"segments"in e&&n("segments",o=e.segments),"level0"in e&&n("level0",i=e.level0),"level1"in e&&n("level1",u=e.level1)},{stores:r,error:s,status:a,segments:o,level0:i,level1:u}}var te,ne=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,ee,Z,e,["stores","error","status","segments","level0","level1"]),n}return n(u,c),u}(),re=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],se=[{js:function(){return import("./index.feb11df0.js")},css:["index.feb11df0.css"]},{js:function(){return import("./about.8c9369b3.js")},css:[]},{js:function(){return import("./index.72cd7df3.js")},css:["index.72cd7df3.css"]},{js:function(){return import("./[slug].a1754c3a.js")},css:["[slug].a1754c3a.css"]},{js:function(){return import("./index.ddac8822.js")},css:[]},{js:function(){return import("./addPlayer.bd918bf8.js")},css:[]},{js:function(){return import("./addToken.02d5f24e.js")},css:[]},{js:function(){return import("./tabLink.16adfe22.js")},css:[]},{js:function(){return import("./player.08cf0e96.js")},css:[]},{js:function(){return import("./token.a0633de0.js")},css:[]}],ae=(te=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(e){return{slug:te(e[1])}}}]},{pattern:/^\/mtg\/?$/,parts:[{i:4}]},{pattern:/^\/mtg\/addPlayer\/?$/,parts:[null,{i:5}]},{pattern:/^\/mtg\/addToken\/?$/,parts:[null,{i:6}]},{pattern:/^\/mtg\/tabLink\/?$/,parts:[null,{i:7}]},{pattern:/^\/mtg\/player\/?$/,parts:[null,{i:8}]},{pattern:/^\/mtg\/token\/?$/,parts:[null,{i:9}]}]);function oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=ke(new URL(e,document.baseURI));return n?(xe[t.replaceState?"replaceState":"pushState"]({id:be},"",e),Pe(n,null).then(function(){})):(location.href=e,new Promise(function(e){}))}var ie,ce,ue,le,fe,pe="undefined"!=typeof __SAPPER__&&__SAPPER__,ve=!1,me=[],he="{}",de={page:H({}),preloading:H(null),session:H(pe&&pe.session)};de.session.subscribe(function(){var e=U(q.mark(function e(t){var n,r,s,a,o,i;return q.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(le=t,ve){e.next=3;break}return e.abrupt("return");case 3:return fe=!0,n=ke(new URL(location.href)),r=ce={},e.next=8,je(n);case 8:if(s=e.sent,a=s.redirect,o=s.props,i=s.branch,r===ce){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,Ae(a,i,o,n.page);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var ge,$e=null;var be,_e=1;var Ee,xe="undefined"!=typeof history?history:{pushState:function(e,t,n){},replaceState:function(e,t,n){},scrollRestoration:""},Se={};function ye(e){var t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var n=D(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),r=n[1],s=n[2],a=void 0===s?"":s;"string"==typeof t[r]&&(t[r]=[t[r]]),"object"===O(t[r])?t[r].push(a):t[r]=a}),t}function ke(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pe.baseUrl))return null;var t=e.pathname.slice(pe.baseUrl.length);if(""===t&&(t="/"),!re.some(function(e){return e.test(t)}))for(var n=0;n<ae.length;n+=1){var r=ae[n],s=r.pattern.exec(t);if(s){var a=ye(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},c={path:t,query:a,params:i};return{href:e.href,route:r,match:s,page:c}}}}function we(){return{x:pageXOffset,y:pageYOffset}}function Pe(e,t,n,r){return Re.apply(this,arguments)}function Re(){return(Re=U(q.mark(function e(t,n,r,s){var a,o,i,c,u,l,f,p,v;return q.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n?be=n:(a=we(),Se[be]=a,n=be=++_e,Se[be]=r?a:{x:0,y:0}),be=n,ie&&de.preloading.set(!0),o=$e&&$e.href===t.href?$e.promise:je(t),$e=null,i=ce={},e.next=8,o;case 8:if(c=e.sent,u=c.redirect,l=c.props,f=c.branch,i===ce){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,Ae(u,f,l,t.page);case 16:document.activeElement&&document.activeElement.blur(),r||(p=Se[n],s&&(v=document.getElementById(s.slice(1)))&&(p={x:0,y:v.getBoundingClientRect().top}),Se[be]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ae(e,t,n,r){return Le.apply(this,arguments)}function Le(){return(Le=U(q.mark(function e(t,n,r,s){var a,o;return q.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",oe(t.location,{replaceState:!0}));case 2:if(de.page.set(s),de.preloading.set(!1),!ie){e.next=8;break}ie.$set(r),e.next=17;break;case 8:return r.stores={page:{subscribe:de.page.subscribe},preloading:{subscribe:de.preloading.subscribe},session:de.session},e.next=11,ue;case 11:if(e.t0=e.sent,r.level0={props:e.t0},a=document.querySelector("#sapper-head-start"),o=document.querySelector("#sapper-head-end"),a&&o){for(;a.nextSibling!==o;)De(a.nextSibling);De(a),De(o)}ie=new ne({target:ge,props:r,hydrate:!0});case 17:me=n,he=JSON.stringify(s.query),ve=!0,fe=!1;case 21:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ce(e,t,n,r){if(r!==he)return!0;var s=me[e];return!!s&&(t!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0))}function je(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=U(q.mark(function e(t){var n,r,s,a,o,i,c,u,l,f,p;return q.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,s=r.path.split("/").filter(Boolean),a=null,o={error:null,status:200,segments:[s[0]]},i={fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return fetch(e,t)}),redirect:function(e,t){if(a&&(a.statusCode!==e||a.location!==t))throw new Error("Conflicting redirects");a={statusCode:e,location:t}},error:function(e,t){o.error="string"==typeof t?new Error(t):t,o.status=e}},ue||(ue=pe.preloaded[0]||I.call(i,{path:r.path,query:r.query,params:{}},le)),u=1,e.prev=7,l=JSON.stringify(r.query),f=n.pattern.exec(r.path),p=!1,e.next=13,Promise.all(n.parts.map(function(){var e=U(q.mark(function e(n,a){var c,v,m,h,d,g;return q.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=s[a],Ce(a,c,f,l)&&(p=!0),o.segments[u]=s[a+1],n){e.next=5;break}return e.abrupt("return",{segment:c});case 5:if(v=u++,fe||p||!me[a]||me[a].part!==n.i){e.next=8;break}return e.abrupt("return",me[a]);case 8:return p=!1,e.next=11,qe(se[n.i]);case 11:if(m=e.sent,h=m.default,d=m.preload,!ve&&pe.preloaded[a+1]){e.next=25;break}if(!d){e.next=21;break}return e.next=18,d.call(i,{path:r.path,query:r.query,params:n.params?n.params(t.match):{}},le);case 18:e.t0=e.sent,e.next=22;break;case 21:e.t0={};case 22:g=e.t0,e.next=26;break;case 25:g=pe.preloaded[a+1];case 26:return e.abrupt("return",o["level".concat(v)]={component:h,props:g,segment:c,match:f,part:n.i});case 27:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()));case 13:c=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),o.error=e.t0,o.status=500,c=[];case 21:return e.abrupt("return",{redirect:a,props:o,branch:c});case 22:case"end":return e.stop()}},e,null,[[7,16]])}))).apply(this,arguments)}function Ue(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise(function(e,n){var r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=function(){return e()},r.onerror=n,document.head.appendChild(r)})}function qe(e){var t="string"==typeof e.css?[]:e.css.map(Ue);return t.unshift(e.js()),Promise.all(t).then(function(e){return e[0]})}function De(e){e.parentNode.removeChild(e)}function He(e){var t=ke(new URL(e,document.baseURI));if(t)return $e&&e===$e.href||function(e,t){$e={href:e,promise:t}}(e,je(t)),$e.promise}function Ne(e){clearTimeout(Ee),Ee=setTimeout(function(){Ie(e)},20)}function Ie(e){var t=Me(e.target);t&&"prefetch"===t.rel&&He(t.href)}function Te(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=Me(e.target);if(t&&t.href){var n="object"===O(t.href)&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r!==location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(n?!t.target.baseVal:!t.target)){var s=new URL(r);if(s.pathname!==location.pathname||s.search!==location.search){var a=ke(s);if(a)Pe(a,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),xe.pushState({id:be},"",s.href)}}}else location.hash||e.preventDefault()}}}function Me(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Be(e){if(Se[be]=we(),e.state){var t=ke(new URL(location.href));t?Pe(t,e.state.id):location.href=location.href}else(function(e){be=e})(_e=_e+1),xe.replaceState({id:be},"",location.href)}!function(e){var t;"scrollRestoration"in xe&&(xe.scrollRestoration="manual"),t=e.target,ge=t,addEventListener("click",Te),addEventListener("popstate",Be),addEventListener("touchstart",Ie),addEventListener("mousemove",Ne),Promise.resolve().then(function(){var e=location,t=e.hash,n=e.href;xe.replaceState({id:_e},"",n);var r,s,a,o,i,c,u,l=new URL(location.href);if(pe.error)return r=location,s=r.pathname,a=r.search,o=pe.session,i=pe.preloaded,c=pe.status,u=pe.error,ue||(ue=i&&i[0]),void Ae(null,[],{error:u,status:c,session:o,level0:{props:ue},level1:{props:{status:c,error:u},component:W},segments:i},{path:s,query:ye(a),params:{}});var f=ke(l);return f?Pe(f,_e,!0,t):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.fafd8401.js.map
