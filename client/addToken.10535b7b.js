import{S as t,i as e,s as n,e as o,t as l,a,c as r,b as u,d as i,f as c,h as s,j as h,g as p,C as d,F as v,n as f,B as _,D as k,G as m,H as g,I as b,E as y}from"./chunk.ad9b5abb.js";function x(t,e,n){const o=Object.create(t);return o.c_choice=e[n],o}function E(t){var e,n,p,d=t.c_choice.text;return{c(){e=o("option"),n=l(d),p=a(),this.h()},l(t){e=r(t,"OPTION",{selected:!0,value:!0},!1);var o=u(e);n=i(o,d),p=i(o,"\n\t\t\t"),o.forEach(c),this.h()},h(){e.selected=!0,e.__value="\n\t\t\t\t"+t.c_choice.text+"\n\t\t\t",e.value=e.__value},m(t,o){s(t,e,o),h(e,n),h(e,p)},p(t,n){e.value=e.__value},d(t){t&&c(e)}}}function T(t){for(var e,n,l,g,b,y,T,w,I,N,P,S,U,C=t.colors,O=[],j=0;j<C.length;j+=1)O[j]=E(x(t,C,j));return{c(){e=o("form"),n=o("input"),l=a(),g=o("select");for(var t=0;t<O.length;t+=1)O[t].c();b=a(),y=o("input"),T=a(),w=o("input"),I=a(),N=o("input"),P=a(),S=o("input"),this.h()},l(t){e=r(t,"FORM",{class:!0},!1);var o=u(e);n=r(o,"INPUT",{type:!0,placeholder:!0},!1),u(n).forEach(c),l=i(o,"\n    "),g=r(o,"SELECT",{type:!0,class:!0},!1);for(var a=u(g),s=0;s<O.length;s+=1)O[s].l(a);a.forEach(c),b=i(o,"\n    "),y=r(o,"INPUT",{type:!0,placeholder:!0},!1),u(y).forEach(c),T=i(o,"\n    "),w=r(o,"INPUT",{type:!0,placeholder:!0},!1),u(w).forEach(c),I=i(o,"\n    "),N=r(o,"INPUT",{type:!0,placeholder:!0},!1),u(N).forEach(c),P=i(o,"\n    "),S=r(o,"INPUT",{type:!0,class:!0,value:!0},!1),u(S).forEach(c),o.forEach(c),this.h()},h(){p(n,"type","text"),p(n,"placeholder","Token Name"),void 0===t.token.color&&m(()=>t.select_change_handler.call(g)),p(g,"type","text"),p(g,"class","form-group bg-white svelte-1tlqvlh"),p(y,"type","number"),p(y,"placeholder","Power"),p(w,"type","number"),p(w,"placeholder","Toughnes"),p(N,"type","text"),p(N,"placeholder","Abilities"),p(S,"type","submit"),p(S,"class","btn btn-primary"),S.value="Add Token",p(e,"class","grid-3 form-container form-group"),U=[d(n,"input",t.input0_input_handler),d(g,"change",t.select_change_handler),d(y,"input",t.input1_input_handler),d(w,"input",t.input2_input_handler),d(N,"input",t.input3_input_handler),d(e,"submit",t.onSubmit)]},m(o,a){s(o,e,a),h(e,n),n.value=t.token.name,h(e,l),h(e,g);for(var r=0;r<O.length;r+=1)O[r].m(g,null);v(g,t.token.color),h(e,b),h(e,y),y.value=t.token.power,h(e,T),h(e,w),w.value=t.token.tough,h(e,I),h(e,N),N.value=t.token.ability,h(e,P),h(e,S)},p(t,e){if(t.token&&n.value!==e.token.name&&(n.value=e.token.name),t.colors){C=e.colors;for(var o=0;o<C.length;o+=1){const n=x(e,C,o);O[o]?O[o].p(t,n):(O[o]=E(n),O[o].c(),O[o].m(g,null))}for(;o<O.length;o+=1)O[o].d(1);O.length=C.length}t.token&&v(g,e.token.color),t.token&&(y.value=e.token.power),t.token&&(w.value=e.token.tough),t.token&&N.value!==e.token.ability&&(N.value=e.token.ability)},i:f,o:f,d(t){t&&c(e),_(O,t),k(U)}}}function w(t,e,n){const o=y();var l=()=>Math.random().toString(36).substr(2),a=()=>l()+l();let r={name:"",color:"Colorless",power:null,tough:null,ability:"",id:a()};let u=[{id:1,text:"Black"},{id:2,text:"White"},{id:3,text:"Red"},{id:4,text:"Green"},{id:5,text:"Blue"},{id:6,text:"Colorless"}];return{token:r,onSubmit:t=>{t.preventDefault(),o("addtoken",r),n("token",r={name:"",color:"",power:null,tough:null,ability:"",id:a()})},colors:u,input0_input_handler:function(){r.name=this.value,n("token",r),n("colors",u)},select_change_handler:function(){r.color=g(this),n("token",r),n("colors",u)},input1_input_handler:function(){r.power=b(this.value),n("token",r),n("colors",u)},input2_input_handler:function(){r.tough=b(this.value),n("token",r),n("colors",u)},input3_input_handler:function(){r.ability=this.value,n("token",r),n("colors",u)}}}export default class extends t{constructor(t){super(),e(this,t,w,T,n,[])}}
//# sourceMappingURL=addToken.10535b7b.js.map