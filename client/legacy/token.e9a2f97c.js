import{_ as n,a,b as o,c as t,i as c,s as r,d as i,S as s,e,t as u,f as l,g as h,h as p,j as f,k as d,l as b,H as v,I as g,m,o as E,y as T,n as w,J as k,K as y}from"./chunk.2a6b84c9.js";function P(n){var a,o,t,c=n.onChange(),r=H=!1;return{c:function(){a=u(c),o=l(),t=u(r)},l:function(n){a=f(n,c),o=f(n,"\n                "),t=f(n,r)},m:function(n,c){m(n,a,c),m(n,o,c),m(n,t,c)},p:w,d:function(n){n&&(d(a),d(o),d(t))}}}function N(n){var a,o,t,c=H=!0,r=n.onChange();return{c:function(){a=u(c),o=l(),t=u(r)},l:function(n){a=f(n,c),o=f(n,"\n            "),t=f(n,r)},m:function(n,c){m(n,a,c),m(n,o,c),m(n,t,c)},p:w,d:function(n){n&&(d(a),d(o),d(t))}}}function D(n){var a,o;return{c:function(){a=e("p"),o=u("Not Tapped")},l:function(n){a=h(n,"P",{},!1);var t=p(a);o=f(t,"Not Tapped"),t.forEach(d)},m:function(n,t){m(n,a,t),E(a,o)},d:function(n){n&&d(a)}}}function I(n){var a,o;return{c:function(){a=e("p"),o=u("Tapped")},l:function(n){a=h(n,"P",{},!1);var t=p(a);o=f(t,"Tapped"),t.forEach(d)},m:function(n,t){m(n,a,t),E(a,o)},d:function(n){n&&d(a)}}}function B(n){var a,o,t,c,r,i,s,y,B,U,V,C,O,_,A,j,x,L,S,X,J,K,$,q,z,F,G,M,Q,R,W,Y,Z,nn,an,on,tn,cn,rn,sn,en,un,ln,hn,pn,fn,dn,bn,vn;function gn(n){return n.tapped?N:H?P:void 0}var mn=gn(n),En=mn&&mn(n);function Tn(n){return n.tapped?I:D}var wn=Tn(n),kn=wn(n);return{c:function(){a=e("div"),o=e("h2"),t=u(n.name),c=l(),r=e("h3"),i=u("Color: "),s=u(n.color),y=l(),B=e("label"),U=e("input"),V=l(),C=e("span"),O=l(),_=e("div"),En&&En.c(),A=l(),kn.c(),j=l(),x=e("div"),L=e("div"),S=e("h3"),X=u("Power: "),J=u(n.power),K=l(),$=e("button"),q=u("+1p"),z=l(),F=e("button"),G=u("-1p"),M=l(),Q=e("div"),R=l(),W=e("div"),Y=e("h3"),Z=u("Toughness: "),nn=u(n.tough),an=l(),on=e("button"),tn=u("+1t"),cn=l(),rn=e("button"),sn=u("-1t"),en=l(),un=e("h3"),ln=u("Abilities: "),hn=u(n.ability),pn=l(),fn=e("button"),dn=u("X"),this.h()},l:function(e){a=h(e,"DIV",{class:!0},!1);var u=p(a);o=h(u,"H2",{},!1);var l=p(o);t=f(l,n.name),l.forEach(d),c=f(u,"\n    "),r=h(u,"H3",{},!1);var b=p(r);i=f(b,"Color: "),s=f(b,n.color),b.forEach(d),y=f(u,"\n    "),B=h(u,"LABEL",{class:!0},!1);var v=p(B);U=h(v,"INPUT",{type:!0},!1),p(U).forEach(d),V=f(v,"\n        "),C=h(v,"SPAN",{class:!0},!1),p(C).forEach(d),v.forEach(d),O=f(u,"\n    "),_=h(u,"DIV",{style:!0},!1);var g=p(_);En&&En.l(g),g.forEach(d),A=f(u,"\n    "),kn.l(u),j=f(u,"\n    "),x=h(u,"DIV",{class:!0},!1);var m=p(x);L=h(m,"DIV",{class:!0},!1);var E=p(L);S=h(E,"H3",{},!1);var T=p(S);X=f(T,"Power: "),J=f(T,n.power),T.forEach(d),K=f(E,"\n            "),$=h(E,"BUTTON",{class:!0},!1);var w=p($);q=f(w,"+1p"),w.forEach(d),z=f(E,"\n            "),F=h(E,"BUTTON",{class:!0},!1);var k=p(F);G=f(k,"-1p"),k.forEach(d),E.forEach(d),M=f(m,"\n        "),Q=h(m,"DIV",{class:!0},!1),p(Q).forEach(d),R=f(m,"\n        "),W=h(m,"DIV",{class:!0},!1);var P=p(W);Y=h(P,"H3",{},!1);var N=p(Y);Z=f(N,"Toughness: "),nn=f(N,n.tough),N.forEach(d),an=f(P,"\n            "),on=h(P,"BUTTON",{class:!0},!1);var D=p(on);tn=f(D,"+1t"),D.forEach(d),cn=f(P,"\n            "),rn=h(P,"BUTTON",{class:!0},!1);var I=p(rn);sn=f(I,"-1t"),I.forEach(d),P.forEach(d),en=f(m,"\n        "),un=h(m,"H3",{},!1);var H=p(un);ln=f(H,"Abilities: "),hn=f(H,n.ability),H.forEach(d),pn=f(m,"\n        "),fn=h(m,"BUTTON",{class:!0},!1);var bn=p(fn);dn=f(bn,"X"),bn.forEach(d),m.forEach(d),u.forEach(d),this.h()},h:function(){b(U,"type","checkbox"),b(C,"class","slider round"),b(B,"class","switch"),v(_,"display","none"),b($,"class","btn btn-success btn-sm"),b(F,"class","btn btn-dark btn-sm"),b(L,"class","btn-link"),b(Q,"class","form-group"),b(on,"class","btn btn-success btn-sm"),b(rn,"class","btn btn-dark btn-sm"),b(W,"class","btn-link"),b(fn,"class","btn btn-danger btn-sm"),b(x,"class","container"),b(a,"class",bn="card "+n.color),vn=[g(U,"change",n.input_change_handler),g($,"click",n.addPower),g(F,"click",n.subPower),g(on,"click",n.addTough),g(rn,"click",n.subTough),g(fn,"click",n.onDelete)]},m:function(e,u){m(e,a,u),E(a,o),E(o,t),E(a,c),E(a,r),E(r,i),E(r,s),E(a,y),E(a,B),E(B,U),U.checked=n.tapped,E(B,V),E(B,C),E(a,O),E(a,_),En&&En.m(_,null),E(a,A),kn.m(a,null),E(a,j),E(a,x),E(x,L),E(L,S),E(S,X),E(S,J),E(L,K),E(L,$),E($,q),E(L,z),E(L,F),E(F,G),E(x,M),E(x,Q),E(x,R),E(x,W),E(W,Y),E(Y,Z),E(Y,nn),E(W,an),E(W,on),E(on,tn),E(W,cn),E(W,rn),E(rn,sn),E(x,en),E(x,un),E(un,ln),E(un,hn),E(x,pn),E(x,fn),E(fn,dn)},p:function(n,o){n.name&&T(t,o.name),n.color&&T(s,o.color),n.tapped&&(U.checked=o.tapped),mn===(mn=gn(o))&&En?En.p(n,o):(En&&En.d(1),(En=mn&&mn(o))&&(En.c(),En.m(_,null))),wn!==(wn=Tn(o))&&(kn.d(1),(kn=wn(o))&&(kn.c(),kn.m(a,j))),n.power&&T(J,o.power),n.tough&&T(nn,o.tough),n.ability&&T(hn,o.ability),n.color&&bn!==(bn="card "+o.color)&&b(a,"class",bn)},i:w,o:w,d:function(n){n&&d(a),En&&En.d(),kn.d(),k(vn)}}}var H=!1;function U(n,a,o){for(var t=y(),c=a.name,r=a.color,i=a.power,s=a.tough,e=a.ability,u=a.tapped,l=a.id;u;)console.log("changing state");var h=function(){return t("update",{name:c,color:r,power:i,tough:s,ability:e,tapped:u,id:l})};return n.$set=function(n){"name"in n&&o("name",c=n.name),"color"in n&&o("color",r=n.color),"power"in n&&o("power",i=n.power),"tough"in n&&o("tough",s=n.tough),"ability"in n&&o("ability",e=n.ability),"tapped"in n&&o("tapped",u=n.tapped),"id"in n&&o("id",l=n.id)},{name:c,color:r,power:i,tough:s,ability:e,tapped:u,id:l,addPower:function(){o("power",i+=1),h()},subPower:function(){o("power",i-=1),h()},addTough:function(){o("tough",s+=1),h()},subTough:function(){o("tough",s-=1),h()},onDelete:function(){return t("removetoken",l)},onChange:h,input_change_handler:function(){u=this.checked,o("tapped",u)}}}export default(function(e){function u(n){var s;return a(this,u),s=o(this,t(u).call(this)),c(i(s),n,U,B,r,["name","color","power","tough","ability","tapped","id"]),s}return n(u,s),u}());
//# sourceMappingURL=token.e9a2f97c.js.map