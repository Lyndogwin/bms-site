import{S as a,i as e,s as r,e as n,a as l,c as t,b as s,f as o,d as f,g as c,h as i,m,q as p,A as y,p as d,r as u,z as h,v,B as g,t as $,j as b,n as P}from"./chunk.ad9b5abb.js";import"./token.56adb40b.js";import"./addToken.9ac4c812.js";import"./tabLink.fee600e8.js";import j from"./player.4b6b55b3.js";import k from"./addPlayer.13151c56.js";function E(a,e,r){const n=Object.create(a);return n.player=e[r],n}function N(a){for(var e,r,n=a.players,l=[],t=0;t<n.length;t+=1)l[t]=x(E(a,n,t));const s=a=>p(l[a],1,()=>{l[a]=null});return{c(){for(var a=0;a<l.length;a+=1)l[a].c();e=v()},l(a){for(var r=0;r<l.length;r+=1)l[r].l(a);e=v()},m(a,n){for(var t=0;t<l.length;t+=1)l[t].m(a,n);i(a,e,n),r=!0},p(a,r){if(a.players){n=r.players;for(var t=0;t<n.length;t+=1){const s=E(r,n,t);l[t]?(l[t].p(a,s),d(l[t],1)):(l[t]=x(s),l[t].c(),d(l[t],1),l[t].m(e.parentNode,e))}for(h(),t=n.length;t<l.length;t+=1)s(t);y()}},i(a){if(!r){for(var e=0;e<n.length;e+=1)d(l[e]);r=!0}},o(a){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)p(l[a]);r=!1},d(a){g(l,a),a&&o(e)}}}function w(a){var e,r;return{c(){e=n("h1"),r=$("No Players")},l(a){e=t(a,"H1",{},!1);var n=s(e);r=f(n,"No Players"),n.forEach(o)},m(a,n){i(a,e,n),b(e,r)},p:P,i:P,o:P,d(a){a&&o(e)}}}function x(a){var e,r=new j({props:{name:a.player.name,life:a.player.life}});return r.$on("removeplayer",a.removePlayer),{c(){r.$$.fragment.c()},l(a){r.$$.fragment.l(a)},m(a,n){m(r,a,n),e=!0},p(a,e){var n={};a.players&&(n.name=e.player.name),a.players&&(n.life=e.player.life),r.$set(n)},i(a){e||(d(r.$$.fragment,a),e=!0)},o(a){p(r.$$.fragment,a),e=!1},d(a){u(r,a)}}}function B(a){var e,r,v,g,$,b,P=new k({});P.$on("addplayer",a.addPlayer);var j=[w,N],E=[];function x(a){return 0===a.players.length?0:1}return g=x(a),$=E[g]=j[g](a),{c(){e=n("div"),P.$$.fragment.c(),r=l(),v=n("div"),$.c(),this.h()},l(a){e=t(a,"DIV",{class:!0},!1);var n=s(e);P.$$.fragment.l(n),n.forEach(o),r=f(a,"\n    \n"),v=t(a,"DIV",{class:!0},!1);var l=s(v);$.l(l),l.forEach(o),this.h()},h(){c(e,"class","container"),c(v,"class","container")},m(a,n){i(a,e,n),m(P,e,null),i(a,r,n),i(a,v,n),E[g].m(v,null),b=!0},p(a,e){var r=g;(g=x(e))===r?E[g].p(a,e):(h(),p(E[r],1,()=>{E[r]=null}),y(),($=E[g])||($=E[g]=j[g](e)).c(),d($,1),$.m(v,null))},i(a){b||(d(P.$$.fragment,a),d($),b=!0)},o(a){p(P.$$.fragment,a),p($),b=!1},d(a){a&&o(e),u(P),a&&(o(r),o(v)),E[g].d()}}}function D(a,e,r){let n=[{name:"Player1",life:20},{name:"Player2",life:20}];return{players:n,addPlayer:a=>{const e=a.detail;r("players",n=[...n,e])},removePlayer:a=>{r("players",n=n.filter(e=>e.name!==a.detail))}}}export default class extends a{constructor(a){super(),e(this,a,D,B,r,[])}}
//# sourceMappingURL=index.0f6f0bb3.js.map
