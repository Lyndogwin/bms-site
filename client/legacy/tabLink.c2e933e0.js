import{_ as n,a,b as o,c as i,i as s,d as t,S as c,s as e,e as r,t as l,g as d,h as u,j as f,k as m,m as b,L as h,p,q as k,A as v,n as O,N as j}from"./index.08d0bf62.js";function x(n){var a,o,i,s,t;return{c:function(){a=r("button"),o=l(n.name),this.h()},l:function(i){a=d(i,"BUTTON",{class:!0,disabled:!0},!1);var s=u(a);o=f(s,n.name),s.forEach(m),this.h()},h:function(){b(a,"class",i="btn btn-link "+n.color),a.disabled=s=!n.id,t=h(a,"click",n.onOpen)},m:function(n,i){p(n,a,i),k(a,o)},p:function(n,t){n.name&&v(o,t.name),n.color&&i!==(i="btn btn-link "+t.color)&&b(a,"class",i),n.id&&s!==(s=!t.id)&&(a.disabled=s)},i:O,o:O,d:function(n){n&&m(a),t()}}}function N(n,a,o){var i=j(),s=a.name,t=a.color,c=a.id;return n.$set=function(n){"name"in n&&o("name",s=n.name),"color"in n&&o("color",t=n.color),"id"in n&&o("id",c=n.id)},{name:s,color:t,id:c,onOpen:function(){return i("opentoken",c)}}}export default(function(r){function l(n){var c;return a(this,l),c=o(this,i(l).call(this)),s(t(c),n,N,x,e,["name","color","id"]),c}return n(l,c),l}());
