//>>built
define("dojox/mobile/common","dojo/_base/array dojo/_base/config dojo/_base/connect dojo/_base/lang dojo/_base/window dojo/_base/kernel dojo/dom dojo/dom-class dojo/dom-construct dojo/domReady dojo/ready dojo/touch dijit/registry ./sniff ./uacss".split(" "),function(n,g,l,m,c,s,t,k,p,u,v,x,w,d){var a=m.getObject("dojox.mobile",!0);c.doc.dojoClick=!0;d("touch")&&(d.add("clicks-prevented",!(4.1<=d("android")||10===d("ie")||!d("ie")&&6<d("trident"))),d("clicks-prevented")&&(a._sendClick=function(a,b){for(var f=
a;f;f=f.parentNode)if(f.dojoClick)return;f=c.doc.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,c.global,1,b.screenX,b.screenY,b.clientX,b.clientY);a.dispatchEvent(f)}));a.getScreenSize=function(){return{h:c.global.innerHeight||c.doc.documentElement.clientHeight,w:c.global.innerWidth||c.doc.documentElement.clientWidth}};a.updateOrient=function(){var e=a.getScreenSize();k.replace(c.doc.documentElement,e.h>e.w?"dj_portrait":"dj_landscape",e.h>e.w?"dj_landscape":"dj_portrait")};a.updateOrient();
a.tabletSize=500;a.detectScreenSize=function(e){var b=a.getScreenSize(),f=Math.min(b.w,b.h),d,h;if(f>=a.tabletSize&&(e||!this._sz||this._sz<a.tabletSize))d="phone",h="tablet";else if(f<a.tabletSize&&(e||!this._sz||this._sz>=a.tabletSize))d="tablet",h="phone";h&&(k.replace(c.doc.documentElement,"dj_"+h,"dj_"+d),l.publish("/dojox/mobile/screenSize/"+h,[b]));this._sz=f};a.detectScreenSize();a.hideAddressBarWait="number"===typeof g.mblHideAddressBarWait?g.mblHideAddressBarWait:1500;a.hide_1=function(){scrollTo(0,
1);a._hidingTimer=0==a._hidingTimer?200:2*a._hidingTimer;setTimeout(function(){a.isAddressBarHidden()||a._hidingTimer>a.hideAddressBarWait?(a.resizeAll(),a._hiding=!1):setTimeout(a.hide_1,a._hidingTimer)},50)};a.hideAddressBar=function(e){!a.disableHideAddressBar&&!a._hiding&&(a._hiding=!0,a._hidingTimer=d("ios")?200:0,e=screen.availHeight,d("android")&&(e=outerHeight/devicePixelRatio,0==e&&(a._hiding=!1,setTimeout(function(){a.hideAddressBar()},200)),e<=innerHeight&&(e=outerHeight),3>d("android")&&
(c.doc.documentElement.style.overflow=c.body().style.overflow="visible")),c.body().offsetHeight<e&&(c.body().style.minHeight=e+"px",a._resetMinHeight=!0),setTimeout(a.hide_1,a._hidingTimer))};a.isAddressBarHidden=function(){return 1===pageYOffset};a.resizeAll=function(e,b){if(!a.disableResizeAll){l.publish("/dojox/mobile/resizeAll",[e,b]);l.publish("/dojox/mobile/beforeResizeAll",[e,b]);a._resetMinHeight&&(c.body().style.minHeight=a.getScreenSize().h+"px");a.updateOrient();a.detectScreenSize();var f=
function(a){var e=a.getParent&&a.getParent();return!(e&&e.resize||!a.resize)},d=function(a){n.forEach(a.getChildren(),function(a){f(a)&&a.resize();d(a)})};b?(b.resize&&b.resize(),d(b)):n.forEach(n.filter(w.toArray(),f),function(a){a.resize()});l.publish("/dojox/mobile/afterResizeAll",[e,b])}};a.openWindow=function(a,b){c.global.open(a,b||"_blank")};a._detectWindowsTheme=function(){navigator.userAgent.match(/IEMobile\/10\.0/)&&p.create("style",{innerHTML:"@-ms-viewport {width: auto !important}"},c.doc.head);
var a=function(){k.add(c.doc.documentElement,"windows_theme");s.experimental("Dojo Mobile Windows theme","Behavior and appearance of the Windows theme are experimental.")},b=d("windows-theme");if(void 0!==b)b&&a();else{for(var f,q=function(b){return b&&-1!==b.indexOf("/windows/")?(d.add("windows-theme",!0),a(),!0):!1},h=c.doc.styleSheets,b=0;b<h.length;b++)if(!h[b].href){var g=h[b].cssRules||h[b].imports;if(g)for(f=0;f<g.length;f++)if(q(g[f].href))return}f=c.doc.getElementsByTagName("link");for(b=
0;b<f.length&&!q(f[b].href);b++);}};!1!==g.mblApplyPageStyles&&k.add(c.doc.documentElement,"mobile");d("chrome")&&k.add(c.doc.documentElement,"dj_chrome");if(c.global._no_dojo_dm){m=c.global._no_dojo_dm;for(var r in m)a[r]=m[r];a.deviceTheme.setDm(a)}d.add("mblAndroidWorkaround",!1!==g.mblAndroidWorkaround&&3>d("android"),void 0,!0);d.add("mblAndroid3Workaround",!1!==g.mblAndroid3Workaround&&3<=d("android"),void 0,!0);a._detectWindowsTheme();a.setSelectable=function(a,b){var c,g;a=t.byId(a);if(9>=
d("ie"))if(c=a.getElementsByTagName("*"),g=c.length,b)for(a.removeAttribute("unselectable");g--;)c[g].removeAttribute("unselectable");else for(a.setAttribute("unselectable","on");g--;)"INPUT"!==c[g].tagName&&c[g].setAttribute("unselectable","on");else k.toggle(a,"unselectable",!b)};u(function(){!1!==g.mblApplyPageStyles&&k.add(c.body(),"mblBackground")});v(function(){a.detectScreenSize(!0);!1!==g.mblAndroidWorkaroundButtonStyle&&d("android")&&p.create("style",{innerHTML:"BUTTON,INPUT[type\x3d'button'],INPUT[type\x3d'submit'],INPUT[type\x3d'reset'],INPUT[type\x3d'file']::-webkit-file-upload-button{-webkit-appearance:none;} audio::-webkit-media-controls-play-button,video::-webkit-media-controls-play-button{-webkit-appearance:media-play-button;} video::-webkit-media-controls-fullscreen-button{-webkit-appearance:media-fullscreen-button;}"},
c.doc.head,"first");d("mblAndroidWorkaround")&&p.create("style",{innerHTML:".mblView.mblAndroidWorkaround{position:absolute;top:-9999px !important;left:-9999px !important;}"},c.doc.head,"last");var e=a.resizeAll,b=-1!=navigator.appVersion.indexOf("Mobile")&&!(7<=d("ios"));if(!1!==g.mblHideAddressBar&&b||!0===g.mblForceHideAddressBar)a.hideAddressBar(),!0===g.mblAlwaysHideAddressBar&&(e=a.hideAddressBar);var f=6<=d("ios");if((d("android")||f)&&void 0!==c.global.onorientationchange){var k=e,h,m,n;f?
(m=c.doc.documentElement.clientWidth,n=c.doc.documentElement.clientHeight):(e=function(a){var c=l.connect(null,"onresize",null,function(a){l.disconnect(c);k(a)})},h=a.getScreenSize());l.connect(null,"onresize",null,function(b){if(f){var d=c.doc.documentElement.clientWidth,e=c.doc.documentElement.clientHeight;d==m&&e!=n&&k(b);m=d;n=e}else d=a.getScreenSize(),d.w==h.w&&100<=Math.abs(d.h-h.h)&&k(b),h=d})}l.connect(null,void 0!==c.global.onorientationchange?"onorientationchange":"onresize",null,e);c.body().style.visibility=
"visible"});return a});
//# sourceMappingURL=common.js.map