/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n,o={352:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(577),r(983),r(399);var n=r(722),o=r(763),i=(r(247),r(209)),a=e([n,o,i]);[n,o,i]=a.then?(await a)():a,t()}catch(e){t(e)}}))},763:(e,t,r)=>{r.a(e,(async(e,n)=>{try{r.d(t,{Q3:()=>u,Y4:()=>v,eA:()=>h,jA:()=>m});var o=r(983),i=r(722),a=e([i]);i=(a.then?(await a)():a)[0];var s=2441945,u=2441944,c=null,l=null,m=new Cesium.GeoJsonDataSource,d=new Cesium.ScreenSpaceEventHandler(o.wX.scene.canvas);m.show=!1;var f={2441945:[{threshold:38,color:Cesium.Color.fromCssColorString("rgba(173, 216, 230, 0.6)")},{threshold:44,color:Cesium.Color.fromCssColorString("rgba(135, 206, 250, 0.6)")},{threshold:51,color:Cesium.Color.fromCssColorString("rgba(70, 130, 180, 0.6)")},{threshold:1/0,color:Cesium.Color.fromCssColorString("rgba(0, 0, 139, 0.6)")}],2441944:[{threshold:27,color:Cesium.Color.fromCssColorString("rgba(173, 216, 230, 0.6)")},{threshold:33,color:Cesium.Color.fromCssColorString("rgba(135, 206, 250, 0.6)")},{threshold:39,color:Cesium.Color.fromCssColorString("rgba(70, 130, 180, 0.6)")},{threshold:1/0,color:Cesium.Color.fromCssColorString("rgba(0, 0, 139, 0.6)")}]};function h(e){l!==e&&Cesium.IonResource.fromAssetId(e).then((function(e){return m.load(e,{clampToGround:!1,stroke:Cesium.Color.BLACK,fill:Cesium.Color.PINK.withAlpha(.5),strokeWidth:3})})).then((function(t){o.wX.dataSources.add(t),l=e;for(var r=t.entities.values,n=0;n<r.length;n++){var i=r[n],a=i.properties.travel_time.getValue();i.polygon.material=p(a,e)}}))}function p(e,t){for(var r=f[t]||[],n=0;n<r.length;n++)if(e<=r[n].threshold)return r[n].color;return Cesium.Color.WHITE}function y(e,t){c&&(document.body.removeChild(c),c=null);var r=document.createElement("div");r.className="cesium-popup",r.innerHTML=t,r.style.left=e.x+"px",r.style.top=e.y+"px",document.body.appendChild(r),c=r,setTimeout((function(){c===r&&(document.body.removeChild(r),c=null)}),3e3)}function v(){o.wX.terrainProvider=new Cesium.EllipsoidTerrainProvider,h(s),m.show=!0,i.We.show=!1,i.eX.show=!1,i.hH.show=!1}d.setInputAction((function(e){var t=o.wX.scene.pickPosition(e.position);if(Cesium.defined(t)){var r=o.wX.scene.pick(e.position);if(Cesium.defined(r)&&r.id){var n=r.id.properties.travel_time;if(void 0!==n){var i=Cesium.SceneTransforms.wgs84ToWindowCoordinates(o.wX.scene,t);i&&y(i,"Travel Time: ".concat(n," minutes"))}}}}),Cesium.ScreenSpaceEventType.LEFT_CLICK),document.getElementById("showGeoJson").addEventListener("click",(function(){o.wX.terrainProvider=new Cesium.EllipsoidTerrainProvider,h(s),m.show=!0,i.We.show=!1,i.eX.show=!1,i.hH.show=!1})),n()}catch(g){n(g)}}))},722:(e,t,r)=>{r.a(e,(async(e,n)=>{try{r.d(t,{Tl:()=>g,We:()=>s,eX:()=>u,hH:()=>c});var o=r(983),i=r(763),a=e([i]);function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}function p(e){if(Array.isArray(e))return e}i=(a.then?(await a)():a)[0];var s=await Cesium.Cesium3DTileset.fromIonAssetId(2354108),u=await Cesium.Cesium3DTileset.fromIonAssetId(2355120),c=await Cesium.Cesium3DTileset.fromIonAssetId(2355413),l=0;function y(e,t){e.style=new Cesium.Cesium3DTileStyle({color:'color("'.concat(t,'")'),show:!0})}function v(){if(3==++l){var e=s.boundingSphere,t=u.boundingSphere,r=c.boundingSphere,n=Cesium.BoundingSphere.union(e,t,r),i=Math.max(100-n.radius,0);o.wX.camera.viewBoundingSphere(n,new Cesium.HeadingPitchRange(0,-2,i)),o.wX.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)}}function g(){o.wX.scene.setTerrain(new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1))),i.jA.show=!1,s.show=!0,u.show=!0,c.show=!0}Promise.all([Cesium.Cesium3DTileset.fromIonAssetId(2354108),Cesium.Cesium3DTileset.fromIonAssetId(2355120),Cesium.Cesium3DTileset.fromIonAssetId(2355413)]).then((function(e){var t,r=(3,p(t=e)||h(t,3)||d(t,3)||m()),n=r[0],i=r[1],a=r[2];u=i,c=a,y(s=n,"lightgray"),y(u,"lightgray"),y(c,"lightgray"),o.wX.scene.primitives.add(s),o.wX.scene.primitives.add(u),o.wX.scene.primitives.add(c),v()})),y(s,"lightgray"),y(u,"lightgray"),y(c,"lightgray"),n()}catch(w){n(w)}}),1)},577:(e,t,r)=>{r.d(t,{Q:()=>i,m:()=>o}),Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ZjMxZDlmMi02OWJhLTRmNDktOGYzMS1jOGI2ZjMyNTdjZWIiLCJpZCI6MTU1MzY4LCJpYXQiOjE2ODk4NjI5NDh9.YNMT-peUxrLscF3gaV6D0zvZtym2LiHWTG1hirDmye4";var n="AAPKbf16cbf5f8ee42d5a5b263bd6d99dbd4FaqKLEgIkliUtWsu6rjQVH74O4ZeEA71wnKMmAyvbtjm6D-XDNwBAleaO-jVtTmH";Cesium.ArcGisMapService.defaultAccessToken=n;var o=arcgisRest.ApiKeyManager.fromKey(n),i="pk.eyJ1IjoiZHVybWF6YmlsZWsiLCJhIjoiY2xyajhkbmsyMDB1MjJqbnd6bTN2MThhdiJ9.KbEp3Swka-jg7zKhR0NABg"},983:(e,t,r)=>{r.d(t,{wX:()=>s,zE:()=>m});var n=r(577);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t,r){var n;return n=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==o(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=new Cesium.MapboxStyleImageryProvider({styleId:"basic-v9",accessToken:n.Q}),s=new Cesium.Viewer("cesiumContainer",i(i(i(i(i({terrainProvider:Cesium.CesiumTerrainProvider(),imageryProvider:a,timeline:!1,animation:!1,infoBox:!0,homeButton:!1,navigationHelpButton:!1,sceneModePicker:!1,baseLayerPicker:!1,orderIndependentTranslucency:!0,selectionIndicator:!0},"infoBox",!1),"shadows",!0),"requestRenderMode",!0),"maximumRenderTimeChange",1/0),"geocoder",!1)),u=s.scene,c=(u.camera,null),l=!1;s.scene.shadowMap.softShadows=!0,s.scene.shadowMap.size=8192,s.scene.globe.tileCacheSize=1e3,s.scene.setTerrain(new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1))),s.scene.globe.imageryLayers.addImageryProvider(a),u.skyAtmosphere.brightnessShift=.2,u.globe.enableLighting=!0,u.requestRender(),u.globe.depthTestAgainstTerrain=!0;var m={destination:Cesium.Cartesian3.fromDegrees(11.576124,48.137154,650),orientation:{heading:0,pitch:-.4,roll:0}};function d(e){var t;switch(s.imageryLayers.removeAll(),e){case"mapbox":t=new Cesium.MapboxStyleImageryProvider({styleId:"basic-v9",accessToken:n.Q});break;case"openstreetmap":t=new Cesium.OpenStreetMapImageryProvider;break;case"mapboxDark":t=new Cesium.MapboxStyleImageryProvider({styleId:"dark-v11",accessToken:n.Q});break;default:return void console.error("Unknown base map option:",e)}s.imageryLayers.addImageryProvider(t)}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("baseMapToggle"),t=document.getElementById("baseMapOptions");e.addEventListener("mouseover",(function(){l||(clearTimeout(c),t.style.display="block")})),e.addEventListener("mouseout",(function(){l||(c=setTimeout((function(){t.style.display="none"}),250))})),e.addEventListener("click",(function(){l=!l,t.style.display=l?"block":"none",clearTimeout(c)})),t.addEventListener("mouseover",(function(){clearTimeout(c)})),t.addEventListener("mouseout",(function(){l||(c=setTimeout((function(){t.style.display="none"}),250))})),document.getElementById("mapboxButton").addEventListener("click",(function(){d("mapbox")})),document.getElementById("osmButton").addEventListener("click",(function(){d("openstreetmap")})),document.getElementById("mapboxDarkButton").addEventListener("click",(function(){d("mapboxDark")}))})),document.getElementById("helpButton").addEventListener("click",(function(){document.getElementById("helpPanel").style.display="block"})),document.getElementById("closeHelpPanel").addEventListener("click",(function(){document.getElementById("helpPanel").style.display="none"})),window.onload=function(){document.getElementById("helpPanel").style.display="block"},s.scene.camera.setView(m)},209:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var n=r(983),o=r(763),i=r(247),a=r(722),s=e([o,a]);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(){v=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var i=t&&t.prototype instanceof w?t:w,a=Object.create(i.prototype),s=new j(n||[]);return o(a,"_invoke",{value:x(e,r,s)}),a}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",g={};function w(){}function b(){}function C(){}var T={};c(T,a,(function(){return this}));var E=Object.getPrototypeOf,I=E&&E(E(O([])));I&&I!==r&&n.call(I,a)&&(T=I);var k=C.prototype=w.prototype=Object.create(T);function S(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(o,i,a,s){var u=m(e[o],e,i);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==y(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(l).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function x(t,r,n){var o=d;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var u=D(s,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var c=m(t,r,n);if("normal"===c.type){if(o=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=p,n.method="throw",n.arg=c.arg)}}}function D(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,D(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=m(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function O(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(y(t)+" is not iterable")}return b.prototype=C,o(k,"constructor",{value:C,configurable:!0}),o(C,"constructor",{value:b,configurable:!0}),b.displayName=c(C,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,C):(e.__proto__=C,c(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},S(L.prototype),c(L.prototype,s,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(k),c(k,u,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function g(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){g(i,n,o,a,s,"next",e)}function s(e){g(i,n,o,a,s,"throw",e)}a(void 0)}))}}[o,a]=s.then?(await s)():s;var u,c=document.getElementById("switchInput"),l=document.querySelector(".slider"),m=document.getElementById("showGeoJson"),d=document.getElementById("show3DTiles"),f="munich";function b(){return C.apply(this,arguments)}function C(){return(C=w(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=5;break}return e.next=3,Cesium.Cesium3DTileset.fromIonAssetId(96188);case 3:u=e.sent,n.wX.scene.primitives.add(u);case 5:u.show=!0;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(){var e=w(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.wX.scene.setTerrain(new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1))),e.next=3,b();case 3:o.jA.show=!1;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){n.wX.terrainProvider=new Cesium.EllipsoidTerrainProvider,(0,o.eA)(o.Q3),o.jA.show=!0,u.show=!1};function T(){"munich"===f?(m.onclick=o.Y4,d.onclick=a.Tl):(m.onclick=p,d.onclick=h)}c.addEventListener("change",(function(){c.checked?(l.classList.add("on"),f="helsinki",n.wX.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(24.943229,60.156792,550),orientation:{heading:0,pitch:-.4,roll:0},duration:3}),n.wX.scene.globe.depthTestAgainstTerrain=!0,h().then((function(){})),T(),(0,i.R)("helsinki"),(0,i.t)()):(l.classList.remove("on"),f="munich",u&&(u.show=!1),n.wX.camera.flyTo(n.zE),(0,a.Tl)(),T(),(0,i.R)("munich"),(0,i.t)())})),T(),t()}catch(E){t(E)}}))},399:(e,t,r)=>{var n=r(983),o=r(577);function i(){var e,t,r;n.wX.entities.removeAll(),e=document.getElementById("geocode-input").value,t=Cesium.Cartographic.fromCartesian(n.wX.camera.position),r=[Cesium.Math.toDegrees(t.longitude),Cesium.Math.toDegrees(t.latitude)],arcgisRest.geocode({singleLine:e,authentication:o.m,params:{outFields:"*",location:r.join(",")}}).then((function(e){var t=e.candidates[0];if(0!==!t){var r=new Cesium.PinBuilder,o=Cesium.Cartesian3.fromDegrees(t.location.x,t.location.y),i=n.wX.entities.add({name:"Search result",description:"".concat(t.address),position:o,billboard:{verticalOrigin:Cesium.VerticalOrigin.BOTTOM,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,image:r.fromColor(Cesium.Color.fromCssColorString("#5491f5"),48).toDataURL()}});n.wX.selectedEntity=i,n.wX.trackedEntity=i}else alert("That query didn't match any geocoding results.")})).catch((function(e){alert("There was a problem using the geocoder. See the console for details."),console.error(e)}))}document.getElementById("geocode-button").addEventListener("click",i),document.getElementById("geocode-input").addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),i())})),document.getElementById("geocode-close").addEventListener("click",(function(){document.getElementById("geocode-input").value="",n.wX.entities.removeAll()}))},247:(e,t,r)=>{r.d(t,{R:()=>h,t:()=>f});var n=r(983),o={munich:{latitude:48.137154,longitude:11.576124},helsinki:{latitude:60.169262,longitude:24.93857}},i=o.munich,a=Cesium.JulianDate.toDate(Cesium.JulianDate.now()),s=document.getElementById("time"),u=document.getElementById("dateInput");n.wX.clock.currentTime=Cesium.JulianDate.fromDate(a);var c=document.getElementById("hour");document.getElementById("resetTimeButton").addEventListener("click",(function(){var e=d(new Date);s.value=e,a=new Date,u.valueAsDate=a,n.wX.clock.currentTime=Cesium.JulianDate.fromDate(a),f()})),n.wX.clock.onTick.addEventListener((function(e){a=Cesium.JulianDate.toDate(e.currentTime),f()})),m(i);var l=d(a);function m(e){var t=function(e,t,r){var n=SunCalc.getTimes(e,t,r),a=n.sunrise,s=n.sunset;if(i===o.munich){var u=e.getTimezoneOffset();a=new Date(n.sunrise.getTime()+6e4*u),s=new Date(n.sunset.getTime()+6e4*u)}else if(i===o.helsinki){var c=e.getTimezoneOffset();a=new Date(n.sunrise.getTime()+6e4*c),s=new Date(n.sunset.getTime()+6e4*c)}return{sunrise:a,sunset:s}}(a,e.latitude,e.longitude);s.min=d(t.sunrise),s.max=d(t.sunset),s.value=d(t.sunrise)}function d(e){return 3600*e.getHours()+60*e.getMinutes()+e.getSeconds()}function f(){var e,t=(e=i)===o.munich?0:e===o.helsinki?1:0,r=new Date(a.getTime()+36e5*t).toLocaleString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"});c.innerHTML=r}function h(e){m(i=o[e]),f()}s.value=l,u.valueAsDate=a,s.oninput=function(){var e=+s.value;a.setUTCHours(Math.floor(e/3600)),a.setUTCMinutes(Math.floor(e/60)%60),a.setUTCSeconds(e%60),n.wX.clock.currentTime=Cesium.JulianDate.fromDate(a),f()},u.oninput=function(){a=u.valueAsDate,m(i),n.wX.clock.currentTime=Cesium.JulianDate.fromDate(a),f()},f()}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e](r,r.exports,a),r.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a.a=(o,i,a)=>{var s;a&&((s=[]).d=-1);var u,c,l,m=new Set,d=o.exports,f=new Promise(((e,t)=>{l=t,c=e}));f[t]=d,f[e]=e=>(s&&e(s),m.forEach(e),f.catch((e=>{}))),o.exports=f,i((o=>{var i;u=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var i=[];i.d=0,o.then((e=>{a[t]=e,n(i)}),(e=>{a[r]=e,n(i)}));var a={};return a[e]=e=>e(i),a}}var s={};return s[e]=e=>{},s[t]=o,s})))(o);var a=()=>u.map((e=>{if(e[r])throw e[r];return e[t]})),c=new Promise((t=>{(i=()=>t(a)).r=0;var r=e=>e!==s&&!m.has(e)&&(m.add(e),e&&!e.d&&(i.r++,e.push(i)));u.map((t=>t[e](r)))}));return i.r?c:a()}),(e=>(e?l(f[r]=e):c(d),n(s)))),s&&s.d<0&&(s.d=0)},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(352)})();
//# sourceMappingURL=bundle.js.map