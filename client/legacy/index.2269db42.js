import{_ as n,a,b as r,c as t,i as e,s as o,d as f,S as i,e as l,f as c,g as s,h as u,k as m,j as p,l as v,m as y,q as d,w as h,E as g,v as $,x as b,D as P,O as j,z as k,G as E,t as w,o as D,n as N}from"./chunk.2fffb656.js";import"./token.c09c82cd.js";import"./addToken.35aeb6bd.js";import"./tabLink.24924eb5.js";import x from"./player.44c61879.js";import I from"./addPlayer.bd918bf8.js";function O(n,a,r){var t=Object.create(n);return t.player=a[r],t}function V(n){for(var a,r,t=n.players,e=[],o=0;o<t.length;o+=1)e[o]=z(O(n,t,o));var f=function(n){return h(e[n],1,function(){e[n]=null})};return{c:function(){for(var n=0;n<e.length;n+=1)e[n].c();a=k()},l:function(n){for(var r=0;r<e.length;r+=1)e[r].l(n);a=k()},m:function(n,t){for(var o=0;o<e.length;o+=1)e[o].m(n,t);y(n,a,t),r=!0},p:function(n,r){if(n.players){t=r.players;for(var o=0;o<t.length;o+=1){var i=O(r,t,o);e[o]?(e[o].p(n,i),$(e[o],1)):(e[o]=z(i),e[o].c(),$(e[o],1),e[o].m(a.parentNode,a))}for(P(),o=t.length;o<e.length;o+=1)f(o);g()}},i:function(n){if(!r){for(var a=0;a<t.length;a+=1)$(e[a]);r=!0}},o:function(n){e=e.filter(Boolean);for(var a=0;a<e.length;a+=1)h(e[a]);r=!1},d:function(n){E(e,n),n&&m(a)}}}function q(n){var a,r;return{c:function(){a=l("h1"),r=w("No Players")},l:function(n){a=s(n,"H1",{},!1);var t=u(a);r=p(t,"No Players"),t.forEach(m)},m:function(n,t){y(n,a,t),D(a,r)},p:N,i:N,o:N,d:function(n){n&&m(a)}}}function z(n){var a,r=new x({props:{name:n.player.name,life:n.player.life}});return r.$on("removeplayer",n.removePlayer),{c:function(){r.$$.fragment.c()},l:function(n){r.$$.fragment.l(n)},m:function(n,t){d(r,n,t),a=!0},p:function(n,a){var t={};n.players&&(t.name=a.player.name),n.players&&(t.life=a.player.life),r.$set(t)},i:function(n){a||($(r.$$.fragment,n),a=!0)},o:function(n){h(r.$$.fragment,n),a=!1},d:function(n){b(r,n)}}}function B(n){var a,r,t,e,o,f,i=new I({});i.$on("addplayer",n.addPlayer);var j=[q,V],k=[];function E(n){return 0===n.players.length?0:1}return e=E(n),o=k[e]=j[e](n),{c:function(){a=l("div"),i.$$.fragment.c(),r=c(),t=l("div"),o.c(),this.h()},l:function(n){a=s(n,"DIV",{class:!0},!1);var e=u(a);i.$$.fragment.l(e),e.forEach(m),r=p(n,"\n    \n"),t=s(n,"DIV",{class:!0},!1);var f=u(t);o.l(f),f.forEach(m),this.h()},h:function(){v(a,"class","container"),v(t,"class","container")},m:function(n,o){y(n,a,o),d(i,a,null),y(n,r,o),y(n,t,o),k[e].m(t,null),f=!0},p:function(n,a){var r=e;(e=E(a))===r?k[e].p(n,a):(P(),h(k[r],1,function(){k[r]=null}),g(),(o=k[e])||(o=k[e]=j[e](a)).c(),$(o,1),o.m(t,null))},i:function(n){f||($(i.$$.fragment,n),$(o),f=!0)},o:function(n){h(i.$$.fragment,n),h(o),f=!1},d:function(n){n&&m(a),b(i),n&&(m(r),m(t)),k[e].d()}}}function G(n,a,r){var t=[{name:"Player1",life:20},{name:"Player2",life:20}];return{players:t,addPlayer:function(n){var a=n.detail;r("players",t=[].concat(j(t),[a]))},removePlayer:function(n){r("players",t=t.filter(function(a){return a.name!==n.detail}))}}}export default(function(l){function c(n){var i;return a(this,c),i=r(this,t(c).call(this)),e(f(i),n,G,B,o,[]),i}return n(c,i),c}());
//# sourceMappingURL=index.2269db42.js.map
