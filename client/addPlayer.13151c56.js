import{S as a,i as e,s as l,e as t,a as n,c as r,b as p,f as s,d as u,g as i,C as c,h as y,j as h,n as o,D as f,I as d,E as m}from"./chunk.ad9b5abb.js";function v(a){var e,l,d,m,v,b,_;return{c(){e=t("form"),l=t("input"),d=n(),m=t("input"),v=n(),b=t("input"),this.h()},l(a){e=r(a,"FORM",{class:!0},!1);var t=p(e);l=r(t,"INPUT",{type:!0,placeholder:!0},!1),p(l).forEach(s),d=u(t,"\n    "),m=r(t,"INPUT",{type:!0,placeholder:!0},!1),p(m).forEach(s),v=u(t,"\n    "),b=r(t,"INPUT",{type:!0,class:!0,value:!0},!1),p(b).forEach(s),t.forEach(s),this.h()},h(){i(l,"type","text"),i(l,"placeholder","Player Name"),i(m,"type","number"),i(m,"placeholder","Player Life"),i(b,"type","submit"),i(b,"class","btn btn-primary"),b.value="Add Player",i(e,"class","grid-3"),_=[c(l,"input",a.input0_input_handler),c(m,"input",a.input1_input_handler),c(e,"submit",a.onSubmit)]},m(t,n){y(t,e,n),h(e,l),l.value=a.player.name,h(e,d),h(e,m),m.value=a.player.life,h(e,v),h(e,b)},p(a,e){a.player&&l.value!==e.player.name&&(l.value=e.player.name),a.player&&(m.value=e.player.life)},i:o,o:o,d(a){a&&s(e),f(_)}}}function b(a,e,l){const t=m();let n={name:"Player1",life:0};return{player:n,onSubmit:a=>{a.preventDefault(),t("addplayer",n),l("player",n={name:"",life:20})},input0_input_handler:function(){n.name=this.value,l("player",n)},input1_input_handler:function(){n.life=d(this.value),l("player",n)}}}export default class extends a{constructor(a){super(),e(this,a,b,v,l,[])}}
//# sourceMappingURL=addPlayer.13151c56.js.map
