/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,r,o={352:(e,t,n)=>{n.a(e,(async(e,t)=>{try{n(577),n(983),n(399);var r=n(722),o=n(763),i=(n(247),n(209)),a=e([r,o,i]);[r,o,i]=a.then?(await a)():a,t()}catch(e){t(e)}}))},763:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{OA:()=>b,OG:()=>C,Q3:()=>c,Y4:()=>w,eA:()=>p,jA:()=>m});var o=n(983),i=n(722),a=e([i]);i=(a.then?(await a)():a)[0];var s=2441945,c=2441944,u=null,l=null,m=new Cesium.GeoJsonDataSource,d=new Cesium.ScreenSpaceEventHandler(o.wX.scene.canvas),f={averageTravelTime:0,maxTravelTime:0,minTravelTime:1/0,totalRegions:0};m.show=!1;var h={2441945:[{threshold:38,color:Cesium.Color.fromCssColorString("rgba(173, 216, 230, 0.6)")},{threshold:44,color:Cesium.Color.fromCssColorString("rgba(135, 206, 250, 0.6)")},{threshold:51,color:Cesium.Color.fromCssColorString("rgba(70, 130, 180, 0.6)")},{threshold:76,color:Cesium.Color.fromCssColorString("rgba(0, 0, 139, 0.6)")}],2441944:[{threshold:27,color:Cesium.Color.fromCssColorString("rgba(173, 216, 230, 0.6)")},{threshold:33,color:Cesium.Color.fromCssColorString("rgba(135, 206, 250, 0.6)")},{threshold:39,color:Cesium.Color.fromCssColorString("rgba(70, 130, 180, 0.6)")},{threshold:61,color:Cesium.Color.fromCssColorString("rgba(0, 0, 139, 0.6)")}]};function p(e){l!==e&&Cesium.IonResource.fromAssetId(e).then((function(e){return m.load(e,{clampToGround:!1,stroke:Cesium.Color.BLACK,fill:Cesium.Color.PINK.withAlpha(.5),strokeWidth:3})})).then((function(t){o.wX.dataSources.add(t),l=e;for(var n=t.entities.values,r=0;r<n.length;r++){var i=n[r],a=i.properties.travel_time.getValue();i.polygon.material=y(a,e)}t.entities.values,v(t)}))}function v(e){for(var t=0,n=e.entities.values,r=0;r<n.length;r++){var o=n[r].properties.travel_time.getValue();t+=o,f.maxTravelTime=Math.max(f.maxTravelTime,o),f.minTravelTime=Math.min(f.minTravelTime,o)}f.totalRegions=n.length,f.averageTravelTime=t/n.length}function y(e,t){for(var n=h[t]||[],r=0;r<n.length;r++)if(e<=n[r].threshold)return n[r].color;return Cesium.Color.WHITE}function g(e,t){u&&(document.body.removeChild(u),u=null);var n=document.createElement("div");n.className="cesium-popup",n.innerHTML=t,n.style.left=e.x+"px",n.style.top=e.y+"px",document.body.appendChild(n),u=n,setTimeout((function(){u===n&&(document.body.removeChild(n),u=null)}),4e3)}function w(){o.wX.terrainProvider=new Cesium.EllipsoidTerrainProvider,p(s),C(s),m.show=!0,i.We.show=!1,i.eX.show=!1,i.hH.show=!1}function C(e){var t=document.getElementById("legend")||document.createElement("div");t.id="legend",t.innerHTML="",t.style.display="block";var n=document.createElement("h3");n.textContent="Average travel time (minutes)",t.appendChild(n),h[e].forEach((function(e){var n=document.createElement("div");n.style.width="20px",n.style.height="20px",n.style.backgroundColor=e.color.toCssColorString(),n.style.display="inline-block";var r=document.createElement("span");r.textContent=" <= ".concat(e.threshold),r.style.marginLeft="5px";var o=document.createElement("div");o.appendChild(n),o.appendChild(r),t.appendChild(o)})),document.body.appendChild(t)}function b(){var e=document.getElementById("legend");e&&(e.style.display="none")}d.setInputAction((function(e){var t=o.wX.scene.pickPosition(e.position);if(Cesium.defined(t)){var n=o.wX.scene.pick(e.position);if(Cesium.defined(n)&&n.id){var r=n.id.properties.travel_time;if(void 0!==r){var i=Cesium.SceneTransforms.wgs84ToWindowCoordinates(o.wX.scene,t);if(i){var a=r-f.averageTravelTime;g(i,Math.abs(a)<5?"Travel Time: ".concat(r," minutes, which is close to the average travel time across all regions."):a>0?"Travel Time: ".concat(r," minutes. This is ").concat(a.toFixed(0)," minutes more than the average travel time."):"Travel Time: ".concat(r," minutes. This is ").concat(Math.abs(a).toFixed(0)," minutes less than the average travel time."))}}}}}),Cesium.ScreenSpaceEventType.LEFT_CLICK),document.getElementById("showGeoJson").addEventListener("click",(function(){o.wX.terrainProvider=new Cesium.EllipsoidTerrainProvider,p(s),m.show=!0,i.We.show=!1,i.eX.show=!1,i.hH.show=!1})),b(),r()}catch(T){r(T)}}))},722:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{Tl:()=>g,We:()=>s,eX:()=>c,hH:()=>u});var o=n(983),i=n(763),a=e([i]);function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}function p(e){if(Array.isArray(e))return e}i=(a.then?(await a)():a)[0];var s=await Cesium.Cesium3DTileset.fromIonAssetId(2354108),c=await Cesium.Cesium3DTileset.fromIonAssetId(2355120),u=await Cesium.Cesium3DTileset.fromIonAssetId(2355413),l=0;function v(e,t){e.style=new Cesium.Cesium3DTileStyle({color:'color("'.concat(t,'")'),show:!0})}function y(){if(3==++l){var e=s.boundingSphere,t=c.boundingSphere,n=u.boundingSphere,r=Cesium.BoundingSphere.union(e,t,n),i=Math.max(100-r.radius,0);o.wX.camera.viewBoundingSphere(r,new Cesium.HeadingPitchRange(0,-2,i)),o.wX.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)}}function g(){o.wX.scene.setTerrain(new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1))),i.jA.show=!1,(0,i.OA)(),s.show=!0,c.show=!0,u.show=!0}Promise.all([Cesium.Cesium3DTileset.fromIonAssetId(2354108),Cesium.Cesium3DTileset.fromIonAssetId(2355120),Cesium.Cesium3DTileset.fromIonAssetId(2355413)]).then((function(e){var t,n=(3,p(t=e)||h(t,3)||d(t,3)||m()),r=n[0],i=n[1],a=n[2];c=i,u=a,v(s=r,"lightgray"),v(c,"lightgray"),v(u,"lightgray"),o.wX.scene.primitives.add(s),o.wX.scene.primitives.add(c),o.wX.scene.primitives.add(u),y()})),v(s,"lightgray"),v(c,"lightgray"),v(u,"lightgray"),r()}catch(w){r(w)}}),1)},577:(e,t,n)=>{n.d(t,{Q:()=>i,m:()=>o}),Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ZjMxZDlmMi02OWJhLTRmNDktOGYzMS1jOGI2ZjMyNTdjZWIiLCJpZCI6MTU1MzY4LCJpYXQiOjE2ODk4NjI5NDh9.YNMT-peUxrLscF3gaV6D0zvZtym2LiHWTG1hirDmye4";var r="AAPKbf16cbf5f8ee42d5a5b263bd6d99dbd4FaqKLEgIkliUtWsu6rjQVH74O4ZeEA71wnKMmAyvbtjm6D-XDNwBAleaO-jVtTmH";Cesium.ArcGisMapService.defaultAccessToken=r;var o=arcgisRest.ApiKeyManager.fromKey(r),i="pk.eyJ1IjoiZHVybWF6YmlsZWsiLCJhIjoiY2xyajhkbmsyMDB1MjJqbnd6bTN2MThhdiJ9.KbEp3Swka-jg7zKhR0NABg"},983:(e,t,n)=>{n.d(t,{wX:()=>s,zE:()=>m});var r=n(577);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t,n){var r;return r=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==o(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=new Cesium.MapboxStyleImageryProvider({styleId:"basic-v9",accessToken:r.Q}),s=new Cesium.Viewer("cesiumContainer",i(i(i(i(i(i({terrainProvider:Cesium.CesiumTerrainProvider(),imageryProvider:a,timeline:!1,animation:!1,infoBox:!0,homeButton:!1,navigationHelpButton:!1,sceneModePicker:!1,baseLayerPicker:!1,orderIndependentTranslucency:!0,selectionIndicator:!0},"infoBox",!1),"shadows",!0),"requestRenderMode",!0),"maximumRenderTimeChange",1/0),"geocoder",!1),"fullscreenButton",!1)),c=s.scene,u=(c.camera,null),l=!1;s.scene.shadowMap.softShadows=!0,s.scene.shadowMap.size=8192,s.scene.globe.tileCacheSize=1e3,s.scene.setTerrain(new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1))),s.scene.globe.imageryLayers.addImageryProvider(a),c.skyAtmosphere.brightnessShift=.2,c.globe.enableLighting=!0,c.requestRender(),c.globe.depthTestAgainstTerrain=!0;var m={destination:Cesium.Cartesian3.fromDegrees(11.576124,48.137154,650),orientation:{heading:0,pitch:-.4,roll:0}};function d(e){var t;switch(s.imageryLayers.removeAll(),e){case"mapbox":t=new Cesium.MapboxStyleImageryProvider({styleId:"basic-v9",accessToken:r.Q});break;case"openstreetmap":t=new Cesium.OpenStreetMapImageryProvider;break;case"mapboxDark":t=new Cesium.MapboxStyleImageryProvider({styleId:"dark-v11",accessToken:r.Q});break;default:return void console.error("Unknown base map option:",e)}s.imageryLayers.addImageryProvider(t)}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("baseMapToggle"),t=document.getElementById("baseMapOptions");e.addEventListener("mouseover",(function(){l||(clearTimeout(u),t.style.display="block")})),e.addEventListener("mouseout",(function(){l||(u=setTimeout((function(){t.style.display="none"}),250))})),e.addEventListener("click",(function(){l=!l,t.style.display=l?"block":"none",clearTimeout(u)})),t.addEventListener("mouseover",(function(){clearTimeout(u)})),t.addEventListener("mouseout",(function(){l||(u=setTimeout((function(){t.style.display="none"}),250))})),document.getElementById("mapboxButton").addEventListener("click",(function(){d("mapbox")})),document.getElementById("osmButton").addEventListener("click",(function(){d("openstreetmap")})),document.getElementById("mapboxDarkButton").addEventListener("click",(function(){d("mapboxDark")}))})),document.getElementById("helpButton").addEventListener("click",(function(){document.getElementById("helpPanel").style.display="block"})),document.getElementById("closeHelpPanel").addEventListener("click",(function(){document.getElementById("helpPanel").style.display="none"})),window.onload=function(){document.getElementById("helpPanel").style.display="block"},s.scene.camera.setView(m)},209:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var r=n(983),o=n(763),i=n(247),a=n(722),s=e([o,a]);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(){y=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof w?t:w,a=Object.create(i.prototype),s=new O(r||[]);return o(a,"_invoke",{value:S(e,n,s)}),a}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",g={};function w(){}function C(){}function b(){}var T={};u(T,a,(function(){return this}));var E=Object.getPrototypeOf,I=E&&E(E(j([])));I&&I!==n&&r.call(I,a)&&(T=I);var k=b.prototype=w.prototype=Object.create(T);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,i,a,s){var c=m(e[o],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==v(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function S(t,n,r){var o=d;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=D(s,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var u=m(t,n,r);if("normal"===u.type){if(o=r.done?p:f,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=p,r.method="throw",r.arg=u.arg)}}}function D(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,D(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=m(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function j(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(v(t)+" is not iterable")}return C.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:C,configurable:!0}),C.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},x(L.prototype),u(L.prototype,s,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}function g(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){g(i,r,o,a,s,"next",e)}function s(e){g(i,r,o,a,s,"throw",e)}a(void 0)}))}}[o,a]=s.then?(await s)():s;var c,u=document.getElementById("switchInput"),l=document.querySelector(".slider"),m=document.getElementById("showGeoJson"),d=document.getElementById("show3DTiles"),f="munich";function C(){return b.apply(this,arguments)}function b(){return(b=w(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=5;break}return e.next=3,Cesium.Cesium3DTileset.fromIonAssetId(96188);case 3:c=e.sent,r.wX.scene.primitives.add(c);case 5:c.show=!0;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(){var e=w(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.wX.scene.setTerrain(new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1))),e.next=3,C();case 3:o.jA.show=!1,(0,o.OA)();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){r.wX.terrainProvider=new Cesium.EllipsoidTerrainProvider,(0,o.eA)(o.Q3),(0,o.OG)(o.Q3),o.jA.show=!0,c.show=!1};function T(){"munich"===f?(m.onclick=o.Y4,d.onclick=a.Tl):(m.onclick=p,d.onclick=h)}u.addEventListener("change",(function(){u.checked?(l.classList.add("on"),f="helsinki",r.wX.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(24.943229,60.156792,550),orientation:{heading:0,pitch:-.4,roll:0},duration:3}),r.wX.scene.globe.depthTestAgainstTerrain=!0,h().then((function(){})),T(),(0,i.R)("helsinki"),(0,i.t)()):(l.classList.remove("on"),f="munich",c&&(c.show=!1),r.wX.camera.flyTo(r.zE),(0,a.Tl)(),T(),(0,i.R)("munich"),(0,i.t)())})),T(),t()}catch(E){t(E)}}))},399:(e,t,n)=>{var r=n(983),o=n(577);function i(){var e,t,n;r.wX.entities.removeAll(),e=document.getElementById("geocode-input").value,t=Cesium.Cartographic.fromCartesian(r.wX.camera.position),n=[Cesium.Math.toDegrees(t.longitude),Cesium.Math.toDegrees(t.latitude)],arcgisRest.geocode({singleLine:e,authentication:o.m,params:{outFields:"*",location:n.join(",")}}).then((function(e){var t=e.candidates[0];if(0!==!t){var n=new Cesium.PinBuilder,o=Cesium.Cartesian3.fromDegrees(t.location.x,t.location.y),i=r.wX.entities.add({name:"Search result",description:"".concat(t.address),position:o,billboard:{verticalOrigin:Cesium.VerticalOrigin.BOTTOM,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,image:n.fromColor(Cesium.Color.fromCssColorString("#5491f5"),48).toDataURL()}});r.wX.selectedEntity=i,r.wX.trackedEntity=i}else alert("Sorry, we could not find any place matching your search.")})).catch((function(e){alert("Please type an address or place."),console.error(e)}))}document.getElementById("geocode-button").addEventListener("click",i),document.getElementById("geocode-input").addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),i())})),document.getElementById("geocode-close").addEventListener("click",(function(){document.getElementById("geocode-input").value="",r.wX.entities.removeAll()}))},247:(e,t,n)=>{n.d(t,{R:()=>h,t:()=>f});var r=n(983),o={munich:{latitude:48.137154,longitude:11.576124},helsinki:{latitude:60.169262,longitude:24.93857}},i=o.munich,a=Cesium.JulianDate.toDate(Cesium.JulianDate.now()),s=document.getElementById("time"),c=document.getElementById("dateInput");r.wX.clock.currentTime=Cesium.JulianDate.fromDate(a);var u=document.getElementById("hour");document.getElementById("resetTimeButton").addEventListener("click",(function(){var e=d(new Date);s.value=e,a=new Date,c.valueAsDate=a,r.wX.clock.currentTime=Cesium.JulianDate.fromDate(a),f()})),r.wX.clock.onTick.addEventListener((function(e){a=Cesium.JulianDate.toDate(e.currentTime),f()})),m(i);var l=d(a);function m(e){var t=function(e,t,n){var r=SunCalc.getTimes(e,t,n),a=r.sunrise,s=r.sunset;if(i===o.munich){var c=e.getTimezoneOffset();a=new Date(r.sunrise.getTime()+6e4*c),s=new Date(r.sunset.getTime()+6e4*c)}else if(i===o.helsinki){var u=e.getTimezoneOffset();a=new Date(r.sunrise.getTime()+6e4*u),s=new Date(r.sunset.getTime()+6e4*u)}return{sunrise:a,sunset:s}}(a,e.latitude,e.longitude);s.min=d(t.sunrise),s.max=d(t.sunset),s.value=d(t.sunrise)}function d(e){return 3600*e.getHours()+60*e.getMinutes()+e.getSeconds()}function f(){var e,t=(e=i)===o.munich?0:e===o.helsinki?1:0,n=new Date(a.getTime()+36e5*t).toLocaleString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"});u.innerHTML=n}function h(e){m(i=o[e]),f()}s.value=l,c.valueAsDate=a,s.oninput=function(){var e=+s.value;a.setUTCHours(Math.floor(e/3600)),a.setUTCMinutes(Math.floor(e/60)%60),a.setUTCSeconds(e%60),r.wX.clock.currentTime=Cesium.JulianDate.fromDate(a),f()},c.oninput=function(){a=c.valueAsDate,m(i),r.wX.clock.currentTime=Cesium.JulianDate.fromDate(a),f()},f()}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a.a=(o,i,a)=>{var s;a&&((s=[]).d=-1);var c,u,l,m=new Set,d=o.exports,f=new Promise(((e,t)=>{l=t,u=e}));f[t]=d,f[e]=e=>(s&&e(s),m.forEach(e),f.catch((e=>{}))),o.exports=f,i((o=>{var i;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var i=[];i.d=0,o.then((e=>{a[t]=e,r(i)}),(e=>{a[n]=e,r(i)}));var a={};return a[e]=e=>e(i),a}}var s={};return s[e]=e=>{},s[t]=o,s})))(o);var a=()=>c.map((e=>{if(e[n])throw e[n];return e[t]})),u=new Promise((t=>{(i=()=>t(a)).r=0;var n=e=>e!==s&&!m.has(e)&&(m.add(e),e&&!e.d&&(i.r++,e.push(i)));c.map((t=>t[e](n)))}));return i.r?u:a()}),(e=>(e?l(f[n]=e):u(d),r(s)))),s&&s.d<0&&(s.d=0)},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(352)})();
//# sourceMappingURL=bundle.js.map