import{S as s,i as t,s as o,e,t as r,c as n,b as a,d as h,f as l,g as c,h as p,j as f,u,a as i,n as g,B as v}from"./chunk.ad9b5abb.js";function b(s,t,o){const e=Object.create(s);return e.post=t[o],e}function d(s){var t,o,i,g,v=s.post.title;return{c(){t=e("li"),o=e("a"),i=r(v),this.h()},l(s){t=n(s,"LI",{},!1);var e=a(t);o=n(e,"A",{rel:!0,href:!0},!1);var r=a(o);i=h(r,v),r.forEach(l),e.forEach(l),this.h()},h(){c(o,"rel","prefetch"),c(o,"href",g="blog/"+s.post.slug)},m(s,e){p(s,t,e),f(t,o),f(o,i)},p(s,t){s.posts&&v!==(v=t.post.title)&&u(i,v),s.posts&&g!==(g="blog/"+t.post.slug)&&c(o,"href",g)},d(s){s&&l(t)}}}function m(s){for(var t,o,u,m,j,E=s.posts,R=[],x=0;x<E.length;x+=1)R[x]=d(b(s,E,x));return{c(){t=i(),o=e("h1"),u=r("Recent Reports"),m=i(),j=e("ul");for(var s=0;s<R.length;s+=1)R[s].c();this.h()},l(s){t=h(s,"\n\n"),o=n(s,"H1",{},!1);var e=a(o);u=h(e,"Recent Reports"),e.forEach(l),m=h(s,"\n\n"),j=n(s,"UL",{class:!0},!1);for(var r=a(j),c=0;c<R.length;c+=1)R[c].l(r);r.forEach(l),this.h()},h(){document.title="Blog",c(j,"class","svelte-1frg2tf")},m(s,e){p(s,t,e),p(s,o,e),f(o,u),p(s,m,e),p(s,j,e);for(var r=0;r<R.length;r+=1)R[r].m(j,null)},p(s,t){if(s.posts){E=t.posts;for(var o=0;o<E.length;o+=1){const e=b(t,E,o);R[o]?R[o].p(s,e):(R[o]=d(e),R[o].c(),R[o].m(j,null))}for(;o<R.length;o+=1)R[o].d(1);R.length=E.length}},i:g,o:g,d(s){s&&(l(t),l(o),l(m),l(j)),v(R,s)}}}function j({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function E(s,t,o){let{posts:e}=t;return s.$set=(s=>{"posts"in s&&o("posts",e=s.posts)}),{posts:e}}export default class extends s{constructor(s){super(),t(this,s,E,m,o,["posts"])}}export{j as preload};
//# sourceMappingURL=index.64d6836c.js.map
