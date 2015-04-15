//>>built
define("dojox/color/Palette",["dojo/_base/lang","dojo/_base/array","./_base"],function(l,m,c){function s(a,b,d){var e=new c.Palette;e.colors=[];m.forEach(a.colors,function(a){var f="dg"==b?a.g+d:a.g,g="db"==b?a.b+d:a.b,k="da"==b?a.a+d:a.a;e.colors.push(new c.Color({r:Math.min(255,Math.max(0,"dr"==b?a.r+d:a.r)),g:Math.min(255,Math.max(0,f)),b:Math.min(255,Math.max(0,g)),a:Math.min(1,Math.max(0,k))}))});return e}function n(a,b,d){var e=new c.Palette;e.colors=[];m.forEach(a.colors,function(a){a=a.toCmy();
var f="dm"==b?a.m+d:a.m,g="dy"==b?a.y+d:a.y;e.colors.push(c.fromCmy(Math.min(100,Math.max(0,"dc"==b?a.c+d:a.c)),Math.min(100,Math.max(0,f)),Math.min(100,Math.max(0,g))))});return e}function p(a,b,d){var e=new c.Palette;e.colors=[];m.forEach(a.colors,function(a){a=a.toCmyk();var f="dm"==b?a.m+d:a.m,g="dy"==b?a.y+d:a.y,k="dk"==b?a.b+d:a.b;e.colors.push(c.fromCmyk(Math.min(100,Math.max(0,"dc"==b?a.c+d:a.c)),Math.min(100,Math.max(0,f)),Math.min(100,Math.max(0,g)),Math.min(100,Math.max(0,k))))});return e}
function q(a,b,d){var e=new c.Palette;e.colors=[];m.forEach(a.colors,function(a){a=a.toHsl();var f="dl"==b?a.l+d:a.l;e.colors.push(c.fromHsl(("dh"==b?a.h+d:a.h)%360,Math.min(100,Math.max(0,"ds"==b?a.s+d:a.s)),Math.min(100,Math.max(0,f))))});return e}function r(a,b,d){var e=new c.Palette;e.colors=[];m.forEach(a.colors,function(a){a=a.toHsv();var f="dv"==b?a.v+d:a.v;e.colors.push(c.fromHsv(("dh"==b?a.h+d:a.h)%360,Math.min(100,Math.max(0,"ds"==b?a.s+d:a.s)),Math.min(100,Math.max(0,f))))});return e}c.Palette=
function(a){this.colors=[];a instanceof c.Palette?this.colors=a.colors.slice(0):a instanceof c.Color?this.colors=[null,null,a,null,null]:l.isArray(a)?this.colors=m.map(a.slice(0),function(a){return l.isString(a)?new c.Color(a):a}):l.isString(a)&&(this.colors=[null,null,new c.Color(a),null,null])};l.extend(c.Palette,{transform:function(a){var b=s;if(a.use){var c=a.use.toLowerCase();0==c.indexOf("hs")?b="l"==c.charAt(2)?q:r:0==c.indexOf("cmy")&&(b="k"==c.charAt(3)?p:n)}else if("dc"in a||"dm"in a||"dy"in
a)b="dk"in a?p:n;else if("dh"in a||"ds"in a)b="dv"in a?r:q;var c=this,e;for(e in a)"use"!=e&&(c=b(c,e,a[e]));return c},clone:function(){return new c.Palette(this)}});l.mixin(c.Palette,{generators:{analogous:function(a){var b=a.high||60,d=a.low||18;a=(l.isString(a.base)?new c.Color(a.base):a.base).toHsv();var b=[(a.h+d+360)%360,(a.h+Math.round(d/2)+360)%360,a.h,(a.h-Math.round(b/2)+360)%360,(a.h-b+360)%360],d=Math.max(10,95>=a.s?a.s+5:100-(a.s-95)),e=1<a.s?a.s-1:21-a.s,h=92<=a.v?a.v-9:Math.max(a.v+
9,20),f=90>=a.v?Math.max(a.v+5,20):95+Math.ceil((a.v-90)/2),g=[d,e,a.s,d,d],k=[h,f,a.v,h,f];return new c.Palette(m.map(b,function(a,b){return c.fromHsv(a,g[b],k[b])}))},monochromatic:function(a){a=l.isString(a.base)?new c.Color(a.base):a.base;var b=a.toHsv(),d=9<b.s-30?b.s-30:b.s+30,e=b.s,h=20<b.v-20?b.v-20:b.v+60,f=20<b.v-50?b.v-50:b.v+30;return new c.Palette([c.fromHsv(b.h,d,100-0.8*(100-b.v)),c.fromHsv(b.h,e,f),a,c.fromHsv(b.h,d,f),c.fromHsv(b.h,e,h)])},triadic:function(a){a=l.isString(a.base)?
new c.Color(a.base):a.base;var b=a.toHsv(),d=(b.h-157+360)%360,e=90<b.s?b.s-10:b.s+10,h=95<b.s?b.s-5:b.s+5,f=20<b.v-20?b.v-20:b.v+20,g=20<b.v-30?b.v-30:b.v+30,k=70<b.v-30?b.v-30:b.v+30;return new c.Palette([c.fromHsv((b.h+57+360)%360,20<b.s?b.s-10:b.s+10,b.v),c.fromHsv(b.h,e,g),a,c.fromHsv(d,e,f),c.fromHsv(d,h,k)])},complementary:function(a){a=l.isString(a.base)?new c.Color(a.base):a.base;var b=a.toHsv(),d=360>2*b.h+137?2*b.h+137:Math.floor(b.h/2)-137,e=Math.max(b.s-10,0),h=100-0.9*(100-b.s),f=Math.min(100,
b.s+20),g=Math.min(100,b.v+30),k=20<b.v?b.v-30:b.v+30;return new c.Palette([c.fromHsv(b.h,e,g),c.fromHsv(b.h,h,k),a,c.fromHsv(d,f,k),c.fromHsv(d,b.s,b.v)])},splitComplementary:function(a){var b=l.isString(a.base)?new c.Color(a.base):a.base,d=a.da||30;a=b.toHsv();var e=360>2*a.h+137?2*a.h+137:Math.floor(a.h/2)-137,h=(e-d+360)%360,d=(e+d)%360,e=Math.max(a.s-10,0),f=100-0.9*(100-a.s),g=Math.min(100,a.s+20),k=Math.min(100,a.v+30),m=20<a.v?a.v-30:a.v+30;return new c.Palette([c.fromHsv(h,e,k),c.fromHsv(h,
f,m),b,c.fromHsv(d,g,m),c.fromHsv(d,a.s,a.v)])},compound:function(a){a=l.isString(a.base)?new c.Color(a.base):a.base;var b=a.toHsv(),d=360>2*b.h+18?2*b.h+18:Math.floor(b.h/2)-18,e=360>2*b.h+120?2*b.h+120:Math.floor(b.h/2)-120,h=360>2*b.h+99?2*b.h+99:Math.floor(b.h/2)-99,f=10<b.s-40?b.s-40:b.s+40,g=80<b.s-10?b.s-10:b.s+10,k=10<b.s-25?b.s-25:b.s+25,m=10<b.v-40?b.v-40:b.v+40,n=80<b.v-20?b.v-20:b.v+20,b=Math.max(b.v,20);return new c.Palette([c.fromHsv(d,f,m),c.fromHsv(d,g,n),a,c.fromHsv(e,k,b),c.fromHsv(h,
g,n)])},shades:function(a){a=l.isString(a.base)?new c.Color(a.base):a.base;var b=a.toHsv(),d=100==b.s&&0==b.v?0:b.s,e=20<b.v-50?b.v-50:b.v+30,h=20<=b.v-25?b.v-25:b.v+55,f=20<=b.v-75?b.v-75:b.v+5,g=Math.max(b.v-10,20);return new c.Palette([new c.fromHsv(b.h,d,e),new c.fromHsv(b.h,d,h),a,new c.fromHsv(b.h,d,f),new c.fromHsv(b.h,d,g)])}},generate:function(a,b){if(l.isFunction(b))return b({base:a});if(c.Palette.generators[b])return c.Palette.generators[b]({base:a});throw Error("dojox.color.Palette.generate: the specified generator ('"+
b+"') does not exist.");}});return c.Palette});
//# sourceMappingURL=Palette.js.map