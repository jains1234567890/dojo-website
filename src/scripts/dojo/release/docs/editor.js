//>>built
require("dojo/_base/lang dojo/_base/unload dojo/_base/xhr dojo/dom dojo/dom-style dojo/on dojo/query dojo/ready".split(" "),function(h,k,l,c,f,m,n){var a=window.location.pathname.replace("/edit",""),d=h.partial(l.get,{url:"/unlock"+a});n(function(){c.byId("rstwiki-canceler","click",function(){d();window.location.href=a});m("#rstwiki-editorhandle").forEach(function(a){function d(b){var a=b.pageY-e,c=f.get(g,"height");e=b.pageY;f.set(g,"height",c+a+"px")}var g=c.byId("rstwiki-editor"),e=0,b;on(a,"mousedown",
function(a){e=a.pageY;b||(b=on(window,"mousemove",d))});on(window,"mouseup",function(){b&&b.remove();b=null})});k.addOnUnload(d)})});
//# sourceMappingURL=editor.js.map