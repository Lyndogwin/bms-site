import{_ as t,a as e,b as n,c as o,i as a,s as l,d as u,S as r,e as i,t as c,f as s,g as h,h as p,j as f,k as d,m as v,o as _,l as k,H as m,K as g,n as b,G as y,I as x,L as E,M as T,N,J as w}from"./chunk.2fffb656.js";function I(t,e,n){var o=Object.create(t);return o.c_choice=e[n],o}function P(t){var e,n,o,a=t.c_choice.text;return{c:function(){e=i("option"),n=c(a),o=s(),this.h()},l:function(t){e=h(t,"OPTION",{selected:!0,value:!0},!1);var l=p(e);n=f(l,a),o=f(l,"\n\t\t\t"),l.forEach(d),this.h()},h:function(){e.selected=!0,e.__value="\n\t\t\t\t"+t.c_choice.text+"\n\t\t\t",e.value=e.__value},m:function(t,a){v(t,e,a),_(e,n),_(e,o)},p:function(t,n){e.value=e.__value},d:function(t){t&&d(e)}}}function S(t){for(var e,n,o,a,l,u,r,c,T,N,w,S,U,O=t.colors,j=[],C=0;C<O.length;C+=1)j[C]=P(I(t,O,C));return{c:function(){e=i("form"),n=i("input"),o=s(),a=i("select");for(var t=0;t<j.length;t+=1)j[t].c();l=s(),u=i("input"),r=s(),c=i("input"),T=s(),N=i("input"),w=s(),S=i("input"),this.h()},l:function(t){e=h(t,"FORM",{class:!0},!1);var i=p(e);n=h(i,"INPUT",{type:!0,placeholder:!0},!1),p(n).forEach(d),o=f(i,"\n    "),a=h(i,"SELECT",{type:!0,class:!0},!1);for(var s=p(a),v=0;v<j.length;v+=1)j[v].l(s);s.forEach(d),l=f(i,"\n    "),u=h(i,"INPUT",{type:!0,placeholder:!0},!1),p(u).forEach(d),r=f(i,"\n    "),c=h(i,"INPUT",{type:!0,placeholder:!0},!1),p(c).forEach(d),T=f(i,"\n    "),N=h(i,"INPUT",{type:!0,placeholder:!0},!1),p(N).forEach(d),w=f(i,"\n    "),S=h(i,"INPUT",{type:!0,class:!0,value:!0},!1),p(S).forEach(d),i.forEach(d),this.h()},h:function(){k(n,"type","text"),k(n,"placeholder","Token Name"),void 0===t.token.color&&E(function(){return t.select_change_handler.call(a)}),k(a,"type","text"),k(a,"class","form-group bg-white svelte-1tlqvlh"),k(u,"type","number"),k(u,"placeholder","Power"),k(c,"type","number"),k(c,"placeholder","Toughnes"),k(N,"type","text"),k(N,"placeholder","Abilities"),k(S,"type","submit"),k(S,"class","btn btn-primary"),S.value="Add Token",k(e,"class","grid-3 form-container form-group"),U=[m(n,"input",t.input0_input_handler),m(a,"change",t.select_change_handler),m(u,"input",t.input1_input_handler),m(c,"input",t.input2_input_handler),m(N,"input",t.input3_input_handler),m(e,"submit",t.onSubmit)]},m:function(i,s){v(i,e,s),_(e,n),n.value=t.token.name,_(e,o),_(e,a);for(var h=0;h<j.length;h+=1)j[h].m(a,null);g(a,t.token.color),_(e,l),_(e,u),u.value=t.token.power,_(e,r),_(e,c),c.value=t.token.tough,_(e,T),_(e,N),N.value=t.token.ability,_(e,w),_(e,S)},p:function(t,e){if(t.token&&n.value!==e.token.name&&(n.value=e.token.name),t.colors){O=e.colors;for(var o=0;o<O.length;o+=1){var l=I(e,O,o);j[o]?j[o].p(t,l):(j[o]=P(l),j[o].c(),j[o].m(a,null))}for(;o<j.length;o+=1)j[o].d(1);j.length=O.length}t.token&&g(a,e.token.color),t.token&&(u.value=e.token.power),t.token&&(c.value=e.token.tough),t.token&&N.value!==e.token.ability&&(N.value=e.token.ability)},i:b,o:b,d:function(t){t&&d(e),y(j,t),x(U)}}}function U(t,e,n){var o=w(),a=function(){return Math.random().toString(36).substr(2)},l=function(){return a()+a()},u={name:"",color:"Colorless",power:null,tough:null,ability:"",id:l()},r=[{id:1,text:"Black"},{id:2,text:"White"},{id:3,text:"Red"},{id:4,text:"Green"},{id:5,text:"Blue"},{id:6,text:"Colorless"}];return{token:u,onSubmit:function(t){t.preventDefault(),o("addtoken",u),n("token",u={name:"",color:"",power:null,tough:null,ability:"",id:l()})},colors:r,input0_input_handler:function(){u.name=this.value,n("token",u),n("colors",r)},select_change_handler:function(){u.color=T(this),n("token",u),n("colors",r)},input1_input_handler:function(){u.power=N(this.value),n("token",u),n("colors",r)},input2_input_handler:function(){u.tough=N(this.value),n("token",u),n("colors",r)},input3_input_handler:function(){u.ability=this.value,n("token",u),n("colors",r)}}}export default(function(i){function c(t){var r;return e(this,c),r=n(this,o(c).call(this)),a(u(r),t,U,S,l,[]),r}return t(c,r),c}());
//# sourceMappingURL=addToken.e3c3e6be.js.map
