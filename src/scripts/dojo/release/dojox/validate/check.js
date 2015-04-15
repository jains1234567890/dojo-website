//>>built
define("dojox/validate/check",["dojo/_base/kernel","dojo/_base/lang","./_base"],function(s,g,p){s.experimental("dojox.validate.check");p.check=function(e,b){var f=[],h=[],q={isSuccessful:function(){return!this.hasInvalid()&&!this.hasMissing()},hasMissing:function(){return 0<f.length},getMissing:function(){return f},isMissing:function(a){for(var b=0;b<f.length;b++)if(a==f[b])return!0;return!1},hasInvalid:function(){return 0<h.length},getInvalid:function(){return h},isInvalid:function(a){for(var b=
0;b<h.length;b++)if(a==h[b])return!0;return!1}},k=function(a,b){return"undefined"==typeof b[a]};if(b.trim instanceof Array)for(var c=0;c<b.trim.length;c++){var a=e[b.trim[c]];k("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=a.value.replace(/(^\s*|\s*$)/g,""))}if(b.uppercase instanceof Array)for(c=0;c<b.uppercase.length;c++)a=e[b.uppercase[c]],k("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=a.value.toUpperCase());if(b.lowercase instanceof Array)for(c=
0;c<b.lowercase.length;c++)a=e[b.lowercase[c]],k("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=a.value.toLowerCase());if(b.ucfirst instanceof Array)for(c=0;c<b.ucfirst.length;c++)a=e[b.ucfirst[c]],k("type",a)||"text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=a.value.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1).toLowerCase()}));if(b.digit instanceof Array)for(c=0;c<b.digit.length;c++)a=e[b.digit[c]],k("type",a)||"text"!=
a.type&&"textarea"!=a.type&&"password"!=a.type||(a.value=a.value.replace(/\D/g,""));if(b.required instanceof Array)for(c=0;c<b.required.length;c++)if(g.isString(b.required[c]))if(a=e[b.required[c]],!k("type",a)&&("text"==a.type||"textarea"==a.type||"password"==a.type||"file"==a.type)&&/^\s*$/.test(a.value))f[f.length]=a.name;else if(!k("type",a)&&("select-one"==a.type||"select-multiple"==a.type)&&(-1==a.selectedIndex||/^\s*$/.test(a.options[a.selectedIndex].value)))f[f.length]=a.name;else if(a instanceof
Array){for(var n=!1,l=0;l<a.length;l++)a[l].checked&&(n=!0);n||(f[f.length]=a[0].name)}if(b.required instanceof Array)for(c=0;c<b.required.length;c++)if(g.isObject(b.required[c])){var r,d;for(d in b.required[c])a=e[d],r=b.required[c][d];if(a instanceof Array){for(l=n=0;l<a.length;l++)a[l].checked&&n++;n<r&&(f[f.length]=a[0].name)}else if(!k("type",a)&&"select-multiple"==a.type){for(l=n=0;l<a.options.length;l++)a.options[l].selected&&!/^\s*$/.test(a.options[l].value)&&n++;n<r&&(f[f.length]=a.name)}}if(g.isObject(b.dependencies))for(d in b.dependencies)a=
e[d],!k("type",a)&&(!("text"!=a.type&&"textarea"!=a.type&&"password"!=a.type)&&!/\S+/.test(a.value)&&!q.isMissing(a.name))&&(c=e[b.dependencies[d]],!("text"!=c.type&&"textarea"!=c.type&&"password"!=c.type)&&!/^\s*$/.test(c.value)&&(f[f.length]=a.name));if(g.isObject(b.constraints))for(d in b.constraints)if((a=e[d])&&(k("tagName",a)||!(0<=a.tagName.toLowerCase().indexOf("input")||0<=a.tagName.toLowerCase().indexOf("textarea"))||!/^\s*$/.test(a.value))){var m;if(g.isFunction(b.constraints[d]))m=b.constraints[d](a.value);
else if(g.isFunction(g.getObject(d,!1,b.constraints)))m=g.getObject(d,!1,b.constraints)(a.value);else if(g.isArray(b.constraints[d]))if(g.isArray(b.constraints[d][0]))for(c=0;c<b.constraints[d].length&&!(m=p.evaluateConstraint(b,b.constraints[d][c],d,a),!m.isValid);c++);else m=g.isFunction(g.getObject(d,!1,b.constraints))?p.evaluateConstraint(b,b.constraints[b.constraints[d]],d,a):p.evaluateConstraint(b,b.constraints[d],d,a);m?"boolean"!==typeof m&&!m.isValid&&(h[h.length]={field:a.name,message:m.message}):
h[h.length]=a.name}if(g.isObject(b.confirm))for(d in b.confirm)if(a=e[d],c=e[b.confirm[d]],!k("type",a)&&!k("type",c)&&!("text"!=a.type&&"textarea"!=a.type&&"password"!=a.type||c.type!=a.type||c.value==a.value||q.isInvalid(a.name)||/^\s*$/.test(c.value)))h[h.length]=a.name;return q};p.evaluateConstraint=function(e,b,f,h){e=b[0];b=b.slice(1);b.unshift(h.value);return"undefined"!=typeof e&&"string"!=typeof e?e.apply(null,b):"undefined"!=typeof e&&"string"==typeof e&&g.isFunction(g.getObject(e))?g.getObject(e).apply(null,
b):!1};return p.check});
//# sourceMappingURL=check.js.map