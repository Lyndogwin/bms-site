!function(){"use strict";const e=["client/about.db35b491.js","client/index.e96e978a.js","client/tabLink.abfaed1c.js","client/addPlayer.f1006a45.js","client/[slug].8f8e9c57.js","client/index.e4cc5c14.js","client/index.efa1284c.js","client/index.7e353368.js","client/addToken.6e8ba729.js","client/player.030bfe82.js","client/token.164100ac.js","client/client.b34e7189.js"].concat(["service-worker-index.html","BMS-logo.png","dark-mage-small.gif","dark-mage.gif","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1578147409991").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1578147409991"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1578147409991").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
