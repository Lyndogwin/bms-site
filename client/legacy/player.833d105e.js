import{_ as n,a as t,b as o,c as e,i as a,d as i,S as r,s as c,e as f,t as l,g as u,h as s,j as k,k as d,m,L as h,p,q as v,f as g,l as $,u as b,A as T,y as w,H as E,x as y,z as L,M as _,G as N,U as j,B as D,J as B,n as H,N as I}from"./index.08d0bf62.js";import O from"./token.4bbb1a41.js";import U from"./addToken.8aa74708.js";import V from"./tabLink.c2e933e0.js";function x(n,t,o){var e=Object.create(n);return e.temp_token=t[o],e}function M(n){var t,o,e;return{c:function(){t=f("button"),o=l("-1"),this.h()},l:function(n){t=u(n,"BUTTON",{class:!0},!1);var e=s(t);o=k(e,"-1"),e.forEach(d),this.h()},h:function(){m(t,"class","btn btn-dark"),e=h(t,"click",n.subLife)},m:function(n,e){p(n,t,e),v(t,o)},d:function(n){n&&d(t),e()}}}function S(n){for(var t,o,e,a,i=void 0!==n.tokens.filter(n.func)[0]&&null!=n.token.power,r=n.tokens,c=[],l=0;l<r.length;l+=1)c[l]=q(x(n,r,l));var k=function(n){return w(c[n],1,1,function(){c[n]=null})},h=i&&z(n);return{c:function(){t=f("div");for(var n=0;n<c.length;n+=1)c[n].c();o=g(),h&&h.c(),e=D(),this.h()},l:function(n){t=u(n,"DIV",{class:!0},!1);for(var a=s(t),i=0;i<c.length;i+=1)c[i].l(a);a.forEach(d),o=$(n),h&&h.l(n),e=D(),this.h()},h:function(){m(t,"class","tabs")},m:function(n,i){p(n,t,i);for(var r=0;r<c.length;r+=1)c[r].m(t,null);p(n,o,i),h&&h.m(n,i),p(n,e,i),a=!0},p:function(n,o){if(n.tokens){var a;for(r=o.tokens,a=0;a<r.length;a+=1){var f=x(o,r,a);c[a]?(c[a].p(n,f),y(c[a],1)):(c[a]=q(f),c[a].c(),y(c[a],1),c[a].m(t,null))}for(N(),a=r.length;a<c.length;a+=1)k(a);E()}(n.tokens||n.token)&&(i=void 0!==o.tokens.filter(o.func)[0]&&null!=o.token.power),i?h?(h.p(n,o),y(h,1)):((h=z(o)).c(),y(h,1),h.m(e.parentNode,e)):h&&(N(),w(h,1,1,function(){h=null}),E())},i:function(n){if(!a){for(var t=0;t<r.length;t+=1)y(c[t]);y(h),a=!0}},o:function(n){c=c.filter(Boolean);for(var t=0;t<c.length;t+=1)w(c[t]);w(h),a=!1},d:function(n){n&&d(t),B(c,n),n&&d(o),h&&h.d(n),n&&d(e)}}}function X(n){var t,o;return{c:function(){t=f("h2"),o=l("No Tokens Loaded")},l:function(n){t=u(n,"H2",{},!1);var e=s(t);o=k(e,"No Tokens Loaded"),e.forEach(d)},m:function(n,e){p(n,t,e),v(t,o)},p:H,i:H,o:H,d:function(n){n&&d(t)}}}function q(n){var t,o=new V({props:{name:n.temp_token.name,color:n.temp_token.color,id:n.temp_token.id}});return o.$on("opentoken",n.openToken),{c:function(){o.$$.fragment.c()},l:function(n){o.$$.fragment.l(n)},m:function(n,e){b(o,n,e),t=!0},p:function(n,t){var e={};n.tokens&&(e.name=t.temp_token.name),n.tokens&&(e.color=t.temp_token.color),n.tokens&&(e.id=t.temp_token.id),o.$set(e)},i:function(n){t||(y(o.$$.fragment,n),t=!0)},o:function(n){w(o.$$.fragment,n),t=!1},d:function(n){L(o,n)}}}function z(n){var t,o,e=new O({props:{name:n.token.name,color:n.token.color,power:n.token.power,tough:n.token.tough,ability:n.token.ability,tapped:n.token.tapped,id:n.token.id}});return e.$on("removetoken",n.removeToken),e.$on("update",n.updateToken),{c:function(){t=f("div"),e.$$.fragment.c(),this.h()},l:function(n){t=u(n,"DIV",{class:!0},!1);var o=s(t);e.$$.fragment.l(o),o.forEach(d),this.h()},h:function(){m(t,"class","tabcontent")},m:function(n,a){p(n,t,a),b(e,t,null),o=!0},p:function(n,t){var o={};n.token&&(o.name=t.token.name),n.token&&(o.color=t.token.color),n.token&&(o.power=t.token.power),n.token&&(o.tough=t.token.tough),n.token&&(o.ability=t.token.ability),n.token&&(o.tapped=t.token.tapped),n.token&&(o.id=t.token.id),e.$set(o)},i:function(n){o||(y(e.$$.fragment,n),o=!0)},o:function(n){w(e.$$.fragment,n),o=!1},d:function(n){n&&d(t),L(e)}}}function A(n){var t,o,e,a,i,r,c,j,D,B,H,I,O,V,x,q,z,A,G,J,C=n.life>0&&M(n),F=new U({});F.$on("addtoken",n.addToken);var K=[X,S],P=[];function Q(n,t){return t.tokens.length<1?0:1}return z=Q(0,n),A=P[z]=K[z](n),{c:function(){t=f("div"),o=f("h1"),e=l(n.name),a=g(),i=f("h3"),r=l(n.life),c=g(),j=f("button"),D=l("+1"),B=g(),C&&C.c(),H=g(),I=f("button"),O=l("X"),V=g(),x=f("div"),F.$$.fragment.c(),q=g(),A.c(),this.h()},l:function(f){t=u(f,"DIV",{class:!0},!1);var l=s(t);o=u(l,"H1",{},!1);var m=s(o);e=k(m,n.name),m.forEach(d),a=$(l),i=u(l,"H3",{},!1);var h=s(i);r=k(h,n.life),h.forEach(d),c=$(l),j=u(l,"BUTTON",{class:!0},!1);var p=s(j);D=k(p,"+1"),p.forEach(d),B=$(l),C&&C.l(l),H=$(l),I=u(l,"BUTTON",{class:!0},!1);var v=s(I);O=k(v,"X"),v.forEach(d),V=$(l),x=u(l,"DIV",{class:!0},!1);var g=s(x);F.$$.fragment.l(g),g.forEach(d),q=$(l),A.l(l),l.forEach(d),this.h()},h:function(){m(j,"class","btn btn-success"),m(I,"class","btn btn-danger btn-sm"),m(x,"class","container"),m(t,"class","card"),J=[h(j,"click",n.addLife),h(I,"click",n.onDelete)]},m:function(n,f){p(n,t,f),v(t,o),v(o,e),v(t,a),v(t,i),v(i,r),v(t,c),v(t,j),v(j,D),v(t,B),C&&C.m(t,null),v(t,H),v(t,I),v(I,O),v(t,V),v(t,x),b(F,x,null),v(t,q),P[z].m(t,null),G=!0},p:function(n,o){G&&!n.name||T(e,o.name),G&&!n.life||T(r,o.life),o.life>0?C||((C=M(o)).c(),C.m(t,H)):C&&(C.d(1),C=null);var a=z;(z=Q(0,o))===a?P[z].p(n,o):(N(),w(P[a],1,1,function(){P[a]=null}),E(),(A=P[z])||(A=P[z]=K[z](o)).c(),y(A,1),A.m(t,null))},i:function(n){G||(y(F.$$.fragment,n),y(A),G=!0)},o:function(n){w(F.$$.fragment,n),w(A),G=!1},d:function(n){n&&d(t),C&&C.d(),L(F),P[z].d(),_(J)}}}function G(n,t,o){var e=I(),a=t.name,i=t.life,r=function(){return Math.random().toString(36).substr(2)},c=t.tokens,f=c[0];return n.$set=function(n){"name"in n&&o("name",a=n.name),"life"in n&&o("life",i=n.life),"tokens"in n&&o("tokens",c=n.tokens)},{name:a,life:i,addLife:function(){return o("life",i+=1)},subLife:function(){return o("life",i-=1)},onDelete:function(){return e("removeplayer",a)},tokens:c,token:f,addToken:function(n){console.log(n.detail[0]);for(var t=0;t<n.detail[1];t++){var e=n.detail[0];o("tokens",c=[].concat(j(c),[{name:e.name,color:e.color,power:e.power,tough:e.tough,ability:e.ability,tapped:e.tapped,id:r()+r()}])),console.log(c)}},removeToken:function(n){o("tokens",c=c.filter(function(t){return t.id!==n.detail}))},openToken:function(n){o("token",f=c.filter(function(t){return t.id===n.detail})[0])},updateToken:function(n){var t=c.length;o("token",f=n.detail);for(var e=0;e<t;e++)for(var a in c[e])if(c[e][a]===f.id){console.log(f),c.splice(e,1,f),console.log(c);break}},func:function(n){return n.id===f.id}}}export default(function(f){function l(n){var r;return t(this,l),r=o(this,e(l).call(this)),a(i(r),n,G,A,c,["name","life","tokens"]),r}return n(l,r),l}());
