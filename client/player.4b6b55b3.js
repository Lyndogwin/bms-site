import{S as e,i as n,s as t,e as o,t as a,c as r,b as l,d as s,f as i,g as c,C as f,h as m,j as k,a as u,m as d,u as h,q as v,A as p,p as g,r as $,D as b,z as T,v as y,B as E,n as w,E as _}from"./chunk.ad9b5abb.js";import N from"./token.56adb40b.js";import D from"./addToken.9ac4c812.js";import L from"./tabLink.fee600e8.js";function j(e,n,t){const o=Object.create(e);return o.temp_token=n[t],o}function B(e){var n,t,u;return{c(){n=o("button"),t=a("-1"),this.h()},l(e){n=r(e,"BUTTON",{class:!0},!1);var o=l(n);t=s(o,"-1"),o.forEach(i),this.h()},h(){c(n,"class","btn btn-dark"),u=f(n,"click",e.subLife)},m(e,o){m(e,n,o),k(n,t)},d(e){e&&i(n),u()}}}function P(e){for(var n,t,a,f,k=e.tokens,d=[],h=0;h<k.length;h+=1)d[h]=I(j(e,k,h));const $=e=>v(d[e],1,()=>{d[e]=null});var b=void 0!==e.tokens.filter(e.func)[0]&&null!=e.token.power&&V(e);return{c(){n=o("div");for(var e=0;e<d.length;e+=1)d[e].c();t=u(),b&&b.c(),a=y(),this.h()},l(e){n=r(e,"DIV",{class:!0},!1);for(var o=l(n),c=0;c<d.length;c+=1)d[c].l(o);o.forEach(i),t=s(e,"\n        "),b&&b.l(e),a=y(),this.h()},h(){c(n,"class","tabs")},m(e,o){m(e,n,o);for(var r=0;r<d.length;r+=1)d[r].m(n,null);m(e,t,o),b&&b.m(e,o),m(e,a,o),f=!0},p(e,t){if(e.tokens){k=t.tokens;for(var o=0;o<k.length;o+=1){const a=j(t,k,o);d[o]?(d[o].p(e,a),g(d[o],1)):(d[o]=I(a),d[o].c(),g(d[o],1),d[o].m(n,null))}for(T(),o=k.length;o<d.length;o+=1)$(o);p()}void 0!==t.tokens.filter(t.func)[0]&&null!=t.token.power?b?(b.p(e,t),g(b,1)):((b=V(t)).c(),g(b,1),b.m(a.parentNode,a)):b&&(T(),v(b,1,()=>{b=null}),p())},i(e){if(!f){for(var n=0;n<k.length;n+=1)g(d[n]);g(b),f=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)v(d[e]);v(b),f=!1},d(e){e&&i(n),E(d,e),e&&i(t),b&&b.d(e),e&&i(a)}}}function O(e){var n,t;return{c(){n=o("h2"),t=a("No Tokens Loaded")},l(e){n=r(e,"H2",{},!1);var o=l(n);t=s(o,"No Tokens Loaded"),o.forEach(i)},m(e,o){m(e,n,o),k(n,t)},p:w,i:w,o:w,d(e){e&&i(n)}}}function I(e){var n,t=new L({props:{name:e.temp_token.name,color:e.temp_token.color,id:e.temp_token.id}});return t.$on("opentoken",e.openToken),{c(){t.$$.fragment.c()},l(e){t.$$.fragment.l(e)},m(e,o){d(t,e,o),n=!0},p(e,n){var o={};e.tokens&&(o.name=n.temp_token.name),e.tokens&&(o.color=n.temp_token.color),e.tokens&&(o.id=n.temp_token.id),t.$set(o)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function V(e){var n,t,a=new N({props:{name:e.token.name,color:e.token.color,power:e.token.power,tough:e.token.tough,ability:e.token.ability,id:e.token.id}});return a.$on("removetoken",e.removeToken),{c(){n=o("div"),a.$$.fragment.c(),this.h()},l(e){n=r(e,"DIV",{class:!0},!1);var t=l(n);a.$$.fragment.l(t),t.forEach(i),this.h()},h(){c(n,"class","tabcontent")},m(e,o){m(e,n,o),d(a,n,null),t=!0},p(e,n){var t={};e.token&&(t.name=n.token.name),e.token&&(t.color=n.token.color),e.token&&(t.power=n.token.power),e.token&&(t.tough=n.token.tough),e.token&&(t.ability=n.token.ability),e.token&&(t.id=n.token.id),a.$set(t)},i(e){t||(g(a.$$.fragment,e),t=!0)},o(e){v(a.$$.fragment,e),t=!1},d(e){e&&i(n),$(a)}}}function H(e){var n,t,y,E,w,_,N,L,j,I,V,H,U,x,A,S,X,q,z,C,K=e.life>0&&B(e),F=new D({});F.$on("addtoken",e.addToken);var G=[O,P],J=[];function M(e){return e.tokens.length<1?0:1}return X=M(e),q=J[X]=G[X](e),{c(){n=o("div"),t=o("h1"),y=a(e.name),E=u(),w=o("h3"),_=a(e.life),N=u(),L=o("button"),j=a("+1"),I=u(),K&&K.c(),V=u(),H=o("button"),U=a("X"),x=u(),A=o("div"),F.$$.fragment.c(),S=u(),q.c(),this.h()},l(o){n=r(o,"DIV",{class:!0},!1);var a=l(n);t=r(a,"H1",{},!1);var c=l(t);y=s(c,e.name),c.forEach(i),E=s(a,"\n    "),w=r(a,"H3",{},!1);var f=l(w);_=s(f,e.life),f.forEach(i),N=s(a,"\n    "),L=r(a,"BUTTON",{class:!0},!1);var m=l(L);j=s(m,"+1"),m.forEach(i),I=s(a,"\n    "),K&&K.l(a),V=s(a,"\n    "),H=r(a,"BUTTON",{class:!0},!1);var k=l(H);U=s(k,"X"),k.forEach(i),x=s(a," \n    "),A=r(a,"DIV",{class:!0},!1);var u=l(A);F.$$.fragment.l(u),u.forEach(i),S=s(a,"\n    "),q.l(a),a.forEach(i),this.h()},h(){c(L,"class","btn btn-success"),c(H,"class","btn btn-danger btn-sm"),c(A,"class","container"),c(n,"class","card"),C=[f(L,"click",e.addLife),f(H,"click",e.onDelete)]},m(e,o){m(e,n,o),k(n,t),k(t,y),k(n,E),k(n,w),k(w,_),k(n,N),k(n,L),k(L,j),k(n,I),K&&K.m(n,null),k(n,V),k(n,H),k(H,U),k(n,x),k(n,A),d(F,A,null),k(n,S),J[X].m(n,null),z=!0},p(e,t){z&&!e.name||h(y,t.name),z&&!e.life||h(_,t.life),t.life>0?K||((K=B(t)).c(),K.m(n,V)):K&&(K.d(1),K=null);var o=X;(X=M(t))===o?J[X].p(e,t):(T(),v(J[o],1,()=>{J[o]=null}),p(),(q=J[X])||(q=J[X]=G[X](t)).c(),g(q,1),q.m(n,null))},i(e){z||(g(F.$$.fragment,e),g(q),z=!0)},o(e){v(F.$$.fragment,e),v(q),z=!1},d(e){e&&i(n),K&&K.d(),$(F),J[X].d(),b(C)}}}function U(e,n,t){const o=_();let{name:a,life:r}=n;let l=[{name:"TOKEN TABS: ",color:"",power:null,tough:null,ability:"None",id:0}],s=l[0];let{savePlayer:i={e_name:a,e_life:r,e_tokens:l}}=n;return e.$set=(e=>{"name"in e&&t("name",a=e.name),"life"in e&&t("life",r=e.life),"savePlayer"in e&&t("savePlayer",i=e.savePlayer)}),{name:a,life:r,addLife:()=>{const e=r+=1;return t("life",r),e},subLife:()=>{const e=r-=1;return t("life",r),e},onDelete:()=>o("removeplayer",a),tokens:l,token:s,addToken:e=>{const n=e.detail;t("tokens",l=[...l,n])},removeToken:e=>{t("tokens",l=l.filter(n=>n.id!==e.detail))},openToken:e=>{t("token",s=l.filter(n=>n.id===e.detail)[0]),console.log(s)},savePlayer:i,func:function(e){return e.name===s.name}}}export default class extends e{constructor(e){super(),n(this,e,U,H,t,["name","life","savePlayer"])}}
//# sourceMappingURL=player.4b6b55b3.js.map
