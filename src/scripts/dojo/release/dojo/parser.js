//>>built
define("dojo/parser","require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "),function(C,y,s,x,L,M,N,O,I,P,Q,D,J,K,R,S){function E(b){return eval("("+b+")")}function T(b){var a=b._nameCaseMap,d=b.prototype;if(!a||a._extendCnt<z){var a=b._nameCaseMap={},f;for(f in d)"_"!==f.charAt(0)&&(a[f.toLowerCase()]=f);a._extendCnt=z}return a}function F(b,a){a||(a=C);var d=a._dojoParserCtorMap||
(a._dojoParserCtorMap={}),f=b.join();if(!d[f]){for(var c=[],g=0,v=b.length;g<v;g++){var m=b[g];c[c.length]=d[m]=d[m]||s.getObject(m)||~m.indexOf("/")&&a(m)}g=c.shift();d[f]=c.length?g.createSubclass?g.createSubclass(c):g.extend.apply(g,c):g}return d[f]}new Date("X");var z=0;I.after(s,"extend",function(){z++},!0);var H={_clearCache:function(){z++;_ctorMap={}},_functionFromScript:function(b,a){var d="",f="",c=b.getAttribute(a+"args")||b.getAttribute("args"),g=b.getAttribute("with"),c=(c||"").split(/\s*,\s*/);
g&&g.length&&x.forEach(g.split(/\s*,\s*/),function(a){d+="with("+a+"){";f+="}"});return new Function(c,d+b.innerHTML+f)},instantiate:function(b,a,d){a=a||{};d=d||{};var f=(d.scope||y._scopeName)+"Type",c="data-"+(d.scope||y._scopeName)+"-",g=c+"type",v=c+"mixins",m=[];x.forEach(b,function(b){var d=f in a?a[f]:b.getAttribute(g)||b.getAttribute(f);if(d){var c=b.getAttribute(v),d=c?[d].concat(c.split(/\s*,\s*/)):[d];m.push({node:b,types:d})}});return this._instantiate(m,a,d)},_instantiate:function(b,
a,d,f){function c(b){!a._started&&!d.noStart&&x.forEach(b,function(a){"function"===typeof a.startup&&!a._started&&a.startup()});return b}b=x.map(b,function(b){var c=b.ctor||F(b.types,d.contextRequire);if(!c)throw Error("Unable to resolve constructor for: '"+b.types.join()+"'");return this.construct(c,b.node,a,d,b.scripts,b.inherited)},this);return f?P(b).then(c):c(b)},construct:function(b,a,d,f,c,g){function v(a){u&&s.setObject(u,a);for(l=0;l<w.length;l++)I[w[l].advice||"after"](a,w[l].method,s.hitch(a,
w[l].func),!0);for(l=0;l<G.length;l++)G[l].call(a);for(l=0;l<A.length;l++)a.watch(A[l].prop,A[l].func);for(l=0;l<B.length;l++)R(a,B[l].event,B[l].func);return a}var m=b&&b.prototype;f=f||{};var p={};f.defaults&&s.mixin(p,f.defaults);g&&s.mixin(p,g);var r;J("dom-attributes-explicit")?r=a.attributes:J("dom-attributes-specified-flag")?r=x.filter(a.attributes,function(a){return a.specified}):(g=(/^input$|^img$/i.test(a.nodeName)?a:a.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*\s*/,
"").replace(/\s*>.*$/,""),r=x.map(g.split(/\s+/),function(b){var d=b.toLowerCase();return{name:b,value:"LI"==a.nodeName&&"value"==b||"enctype"==d?a.getAttribute(d):a.getAttributeNode(d).value}}));var k=f.scope||y._scopeName;g="data-"+k+"-";var e={};"dojo"!==k&&(e[g+"props"]="data-dojo-props",e[g+"type"]="data-dojo-type",e[g+"mixins"]="data-dojo-mixins",e[k+"type"]="dojotype",e[g+"id"]="data-dojo-id");for(var l=0,h,k=[],u,q;h=r[l++];){var n=h.name,t=n.toLowerCase();h=h.value;switch(e[t]||t){case "data-dojo-type":case "dojotype":case "data-dojo-mixins":break;
case "data-dojo-props":q=h;break;case "data-dojo-id":case "jsid":u=h;break;case "data-dojo-attach-point":case "dojoattachpoint":p.dojoAttachPoint=h;break;case "data-dojo-attach-event":case "dojoattachevent":p.dojoAttachEvent=h;break;case "class":p["class"]=a.className;break;case "style":p.style=a.style&&a.style.cssText;break;default:if(n in m||(n=T(b)[t]||n),n in m)switch(typeof m[n]){case "string":p[n]=h;break;case "number":p[n]=h.length?Number(h):NaN;break;case "boolean":p[n]="false"!=h.toLowerCase();
break;case "function":""===h||-1!=h.search(/[^\w\.]+/i)?p[n]=new Function(h):p[n]=s.getObject(h,!1)||new Function(h);k.push(n);break;default:t=m[n],p[n]=t&&"length"in t?h?h.split(/\s*,\s*/):[]:t instanceof Date?""==h?new Date(""):"now"==h?new Date:Q.fromISOString(h):t instanceof O?y.baseUrl+h:E(h)}else p[n]=h}}for(r=0;r<k.length;r++)e=k[r].toLowerCase(),a.removeAttribute(e),a[e]=null;if(q)try{q=E.call(f.propsThis,"{"+q+"}"),s.mixin(p,q)}catch(z){throw Error(z.toString()+" in data-dojo-props\x3d'"+
q+"'");}s.mixin(p,d);c||(c=b&&(b._noScript||m._noScript)?[]:K("\x3e script[type^\x3d'dojo/']",a));var w=[],G=[],A=[],B=[];if(c)for(l=0;l<c.length;l++)e=c[l],a.removeChild(e),d=e.getAttribute(g+"event")||e.getAttribute("event"),f=e.getAttribute(g+"prop"),q=e.getAttribute(g+"method"),k=e.getAttribute(g+"advice"),r=e.getAttribute("type"),e=this._functionFromScript(e,g),d?"dojo/connect"==r?w.push({method:d,func:e}):"dojo/on"==r?B.push({event:d,func:e}):p[d]=e:"dojo/aspect"==r?w.push({method:q,advice:k,
func:e}):"dojo/watch"==r?A.push({prop:f,func:e}):G.push(e);b=(c=b.markupFactory||m.markupFactory)?c(p,a,b):new b(p,a);return b.then?b.then(v):v(b)},scan:function(b,a){function d(a){if(!a.inherited){a.inherited={};var b=a.node,e=d(a.parent),b={dir:b.getAttribute("dir")||e.dir,lang:b.getAttribute("lang")||e.lang,textDir:b.getAttribute(r)||e.textDir},c;for(c in b)b[c]&&(a.inherited[c]=b[c])}return a.inherited}var f=[],c=[],g={},s=(a.scope||y._scopeName)+"Type",m="data-"+(a.scope||y._scopeName)+"-",p=
m+"type",r=m+"textdir",m=m+"mixins",k=b.firstChild,e=a.inherited;if(!e){var l=function(a,b){return a.getAttribute&&a.getAttribute(b)||a.parentNode&&l(a.parentNode,b)},e={dir:l(b,"dir"),lang:l(b,"lang"),textDir:l(b,r)},h;for(h in e)e[h]||delete e[h]}for(var e={inherited:e},u,q;;)if(k)if(1!=k.nodeType)k=k.nextSibling;else if(u&&"script"==k.nodeName.toLowerCase())(n=k.getAttribute("type"))&&/^dojo\/\w/i.test(n)&&u.push(k),k=k.nextSibling;else if(q)k=k.nextSibling;else{var n=k.getAttribute(p)||k.getAttribute(s);
h=k.firstChild;if(!n&&(!h||3==h.nodeType&&!h.nextSibling))k=k.nextSibling;else{q=null;if(n){var t=k.getAttribute(m);u=t?[n].concat(t.split(/\s*,\s*/)):[n];try{q=F(u,a.contextRequire)}catch(z){}q||x.forEach(u,function(a){~a.indexOf("/")&&!g[a]&&(g[a]=!0,c[c.length]=a)});t=q&&!q.prototype._noScript?[]:null;e={types:u,ctor:q,parent:e,node:k,scripts:t};e.inherited=d(e);f.push(e)}else e={node:k,scripts:u,parent:e};u=t;q=k.stopParser||q&&q.prototype.stopParser&&!a.template;k=h}}else{if(!e||!e.node)break;
k=e.node.nextSibling;q=!1;e=e.parent;u=e.scripts}var w=new D;c.length?(a.contextRequire||C)(c,function(){w.resolve(x.filter(f,function(b){if(!b.ctor)try{b.ctor=F(b.types,a.contextRequire)}catch(d){}for(var c=b.parent;c&&!c.types;)c=c.parent;var e=b.ctor&&b.ctor.prototype;b.instantiateChildren=!(e&&e.stopParser&&!a.template);b.instantiate=!c||c.instantiate&&c.instantiateChildren;return b.instantiate}))}):w.resolve(f);return w.promise},_require:function(b,a){var d=E("{"+b.innerHTML+"}"),f=[],c=[],g=
new D,v=a&&a.contextRequire||C,m;for(m in d)f.push(m),c.push(d[m]);v(c,function(){for(var a=0;a<f.length;a++)s.setObject(f[a],arguments[a]);g.resolve(arguments)});return g.promise},_scanAmd:function(b,a){var d=new D,f=d.promise;d.resolve(!0);var c=this;K("script[type\x3d'dojo/require']",b).forEach(function(b){f=f.then(function(){return c._require(b,a)});b.parentNode.removeChild(b)});return f},parse:function(b,a){var d;!a&&b&&b.rootNode?(a=b,d=a.rootNode):b&&s.isObject(b)&&!("nodeType"in b)?a=b:d=
b;d=d?M.byId(d):N.body();a=a||{};var f=a.template?{template:!0}:{},c=[],g=this,v=this._scanAmd(d,a).then(function(){return g.scan(d,a)}).then(function(b){return g._instantiate(b,f,a,!0)}).then(function(a){return c=c.concat(a)}).otherwise(function(a){throw a;});s.mixin(c,v);return c}};y.parser=H;L.parseOnLoad&&S(100,H,"parse");return H});
//# sourceMappingURL=parser.js.map