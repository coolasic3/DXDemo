"use strict";var precacheConfig=[["/index.html","47aab5daaa2884c567fb77abb9e0fbc2"],["/static/css/main.da6a0d99.css","a34904b379be6e7f1f3b871ac07abc28"],["/static/js/main.fc4e4d37.js","8425c4f9f486ea496ab99ad86770bbb2"],["/static/media/ActiveMonthShape.7fdcfcbf.svg","7fdcfcbf96534780afcf4778328e0dc5"],["/static/media/CircleBorder.7a57a920.svg","7a57a9200bac5cfeef647178fbe82297"],["/static/media/CircleFill.3dcfe082.svg","3dcfe0825f56f6c4577804779b3c72f3"],["/static/media/CircleFillHighlight.2ca28823.svg","2ca288230d896594927991caa4dae3c0"],["/static/media/CircleFillHighlightInactive.9a8d9ff3.svg","9a8d9ff320a50f8dd3853616c0361b8e"],["/static/media/EmptyError.73fbb503.svg","73fbb5038b19d1397cc875eccc875efa"],["/static/media/Lato-Light.fbce29db.woff","fbce29db9672261aac6567166d86e6b1"],["/static/media/Lato-Regular.ddc84cbb.woff","ddc84cbbd91a91d4df7d48b0d3b15f7e"],["/static/media/Left_Arrow.854d669f.svg","854d669f780a4665159c5666c9453a70"],["/static/media/PlutoBold.45a6053d.woff","45a6053d86a6e8343a898369a5d32c0f"],["/static/media/PlutoLight.32c90405.woff","32c90405f9d4c728ede65d8a19e6ac22"],["/static/media/PlutoMedium.d530b139.woff","d530b1395c3d40fa0f8798583bb04173"],["/static/media/PlutoRegular.222b0f3b.woff","222b0f3b8d7efd2f18b81238c1ed86cf"],["/static/media/PlutoThin.cf7b9c25.woff","cf7b9c254ee14a694de7858227344999"],["/static/media/Right_Arrow.80f87450.svg","80f87450bac7c3bbccdddac0e713f466"],["/static/media/TeeFranklin-Bold.059c13bf.woff","059c13bfe96449e94948ab6eef5c6282"],["/static/media/TeeFranklin-Bold.170ff04e.otf","170ff04e4c0229425b30d53d82eaa681"],["/static/media/TeeFranklin-Medium.1264b0bd.woff","1264b0bd52e755cb460ae0ece943cfd4"],["/static/media/logo-brown.d60855aa.svg","d60855aa60d2f9498e5d5775781e80dc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});