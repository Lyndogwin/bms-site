import{a as t,b as s,c as n,d as a,i as r,s as e,e as o,S as i,g as c,f as u,t as f,m as h,h as l,j as p,k as m,l as d,o as v,q as x,r as j,D as b,n as y}from"./index.5dab2b76.js";import{_ as g}from"./slicedToArray.f13a096f.js";import{_ as T,a as k}from"./asyncToGenerator.88c4001d.js";function H(t){var s,n,a,r,e,o,i=t[0].title+"",T=t[0].html+"";return document.title=s=t[0].title,{c:function(){n=c(),a=u("h1"),r=f(i),e=c(),o=u("div"),this.h()},l:function(t){n=h(t),a=l(t,"H1",{});var s=p(a);r=m(s,i),s.forEach(d),e=h(t),o=l(t,"DIV",{class:!0}),p(o).forEach(d),this.h()},h:function(){v(o,"class","content svelte-gnxal1")},m:function(t,s){x(t,n,s),x(t,a,s),j(a,r),x(t,e,s),x(t,o,s),o.innerHTML=T},p:function(t,n){var a=g(n,1)[0];1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&i!==(i=t[0].title+"")&&b(r,i),1&a&&T!==(T=t[0].html+"")&&(o.innerHTML=T)},i:y,o:y,d:function(t){t&&d(n),t&&d(a),t&&d(e),t&&d(o)}}}function q(t){return w.apply(this,arguments)}function w(){return(w=T(k.mark(function t(s){var n,a,r;return k.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,s.query,t.next=3,this.fetch("reports/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(r=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(a.status,r.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function D(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n(0,a=t.post)},[a]}export default(function(c){function u(t){var i;return s(this,u),i=n(this,a(u).call(this)),r(o(i),t,D,H,e,{post:0}),i}return t(u,i),u}());export{q as preload};
