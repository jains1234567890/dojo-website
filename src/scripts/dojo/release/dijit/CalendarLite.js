//>>built
require({cache:{"url:dijit/templates/Calendar.html":'\x3ctable cellspacing\x3d"0" cellpadding\x3d"0" class\x3d"dijitCalendarContainer" role\x3d"grid" aria-labelledby\x3d"${id}_mddb ${id}_year" data-dojo-attach-point\x3d"gridNode"\x3e\n\t\x3cthead\x3e\n\t\t\x3ctr class\x3d"dijitReset dijitCalendarMonthContainer" valign\x3d"top"\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' data-dojo-attach-point\x3d"decrementMonth" scope\x3d"col"\x3e\n\t\t\t\t\x3cspan class\x3d"dijitInline dijitCalendarIncrementControl dijitCalendarDecrease" role\x3d"presentation"\x3e\x3c/span\x3e\n\t\t\t\t\x3cspan data-dojo-attach-point\x3d"decreaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e-\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset\' colspan\x3d"5" scope\x3d"col"\x3e\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"monthNode"\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' scope\x3d"col" data-dojo-attach-point\x3d"incrementMonth"\x3e\n\t\t\t\t\x3cspan class\x3d"dijitInline dijitCalendarIncrementControl dijitCalendarIncrease" role\x3d"presentation"\x3e\x3c/span\x3e\n\t\t\t\t\x3cspan data-dojo-attach-point\x3d"increaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e+\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\x3c/tr\x3e\n\t\t\x3ctr role\x3d"row"\x3e\n\t\t\t${!dayCellsHtml}\n\t\t\x3c/tr\x3e\n\t\x3c/thead\x3e\n\t\x3ctbody data-dojo-attach-point\x3d"dateRowsNode" data-dojo-attach-event\x3d"ondijitclick: _onDayClick" class\x3d"dijitReset dijitCalendarBodyContainer"\x3e\n\t\t\t${!dateRowsHtml}\n\t\x3c/tbody\x3e\n\t\x3ctfoot class\x3d"dijitReset dijitCalendarYearContainer"\x3e\n\t\t\x3ctr\x3e\n\t\t\t\x3ctd class\x3d\'dijitReset\' valign\x3d"top" colspan\x3d"7" role\x3d"presentation"\x3e\n\t\t\t\t\x3cdiv class\x3d"dijitCalendarYearLabel"\x3e\n\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"previousYearLabelNode" class\x3d"dijitInline dijitCalendarPreviousYear" role\x3d"button"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"currentYearLabelNode" class\x3d"dijitInline dijitCalendarSelectedYear" role\x3d"button" id\x3d"${id}_year"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"nextYearLabelNode" class\x3d"dijitInline dijitCalendarNextYear" role\x3d"button"\x3e\x3c/span\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/tfoot\x3e\n\x3c/table\x3e\n'}});
define("dijit/CalendarLite","dojo/_base/array dojo/_base/declare dojo/cldr/supplemental dojo/date dojo/date/locale dojo/date/stamp dojo/dom dojo/dom-class dojo/_base/lang dojo/on dojo/sniff dojo/string ./_WidgetBase ./_TemplatedMixin dojo/text!./templates/Calendar.html ./a11yclick ./hccss".split(" "),function(c,n,p,u,v,w,x,q,h,y,r,s,t,z,A){var k=n("dijit.CalendarLite",[t,z],{templateString:A,dowTemplateString:'\x3cth class\x3d"dijitReset dijitCalendarDayLabelTemplate" role\x3d"columnheader" scope\x3d"col"\x3e\x3cspan class\x3d"dijitCalendarDayLabel"\x3e${d}\x3c/span\x3e\x3c/th\x3e',
dateTemplateString:'\x3ctd class\x3d"dijitReset" role\x3d"gridcell" data-dojo-attach-point\x3d"dateCells"\x3e\x3cspan class\x3d"dijitCalendarDateLabel" data-dojo-attach-point\x3d"dateLabels"\x3e\x3c/span\x3e\x3c/td\x3e',weekTemplateString:'\x3ctr class\x3d"dijitReset dijitCalendarWeekTemplate" role\x3d"row"\x3e${d}${d}${d}${d}${d}${d}${d}\x3c/tr\x3e',value:new Date(""),datePackage:"",dayWidth:"narrow",tabIndex:"0",dayOffset:-1,currentFocus:new Date,_setSummaryAttr:"gridNode",baseClass:"dijitCalendar dijitCalendarLite",
_isValidDate:function(a){return a&&!isNaN(a)&&"object"==typeof a&&a.toString()!=this.constructor.prototype.value.toString()},_getValueAttr:function(){var a=this._get("value");if(a&&!isNaN(a)){var b=new this.dateClassObj(a);b.setHours(0,0,0,0);b.getDate()<a.getDate()&&(b=this.dateModule.add(b,"hour",1));return b}return null},_setValueAttr:function(a,b){"string"==typeof a&&(a=w.fromISOString(a));a=this._patchDate(a);if(this._isValidDate(a)&&!this.isDisabledDate(a,this.lang)){if(this._set("value",a),
this.set("currentFocus",a),this._markSelectedDates([a]),this._created&&(b||"undefined"==typeof b))this.onChange(this.get("value"))}else this._set("value",null),this._markSelectedDates([])},_patchDate:function(a){a&&(a=new this.dateClassObj(a),a.setHours(1,0,0,0));return a},_setText:function(a,b){for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(a.ownerDocument.createTextNode(b))},_populateGrid:function(){var a=new this.dateClassObj(this.currentFocus);a.setDate(1);var a=this._patchDate(a),
b=a.getDay(),d=this.dateModule.getDaysInMonth(a),B=this.dateModule.getDaysInMonth(this.dateModule.add(a,"month",-1)),h=new this.dateClassObj,m=0<=this.dayOffset?this.dayOffset:p.getFirstDayOfWeek(this.lang);m>b&&(m-=7);if(!this.summary){var k=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,a);this.gridNode.setAttribute("summary",k[a.getMonth()])}this._date2cell={};c.forEach(this.dateCells,function(c,k){var g=k+m,f=new this.dateClassObj(a),e="dijitCalendar",l=0;g<b?(g=B-b+g+1,
l=-1,e+="Previous"):g>=b+d?(g=g-b-d+1,l=1,e+="Next"):(g=g-b+1,e+="Current");l&&(f=this.dateModule.add(f,"month",l));f.setDate(g);this.dateModule.compare(f,h,"date")||(e="dijitCalendarCurrentDate "+e);this.isDisabledDate(f,this.lang)?(e="dijitCalendarDisabledDate "+e,c.setAttribute("aria-disabled","true")):(e="dijitCalendarEnabledDate "+e,c.removeAttribute("aria-disabled"),c.setAttribute("aria-selected","false"));(l=this.getClassForDate(f,this.lang))&&(e=l+" "+e);c.className=e+"Month dijitCalendarDateTemplate";
e=f.valueOf();this._date2cell[e]=c;c.dijitDateValue=e;this._setText(this.dateLabels[k],f.getDateLocalized?f.getDateLocalized(this.lang):f.getDate())},this)},_populateControls:function(){var a=new this.dateClassObj(this.currentFocus);a.setDate(1);this.monthWidget.set("month",a);var b=a.getFullYear()-1,d=new this.dateClassObj;c.forEach(["previous","current","next"],function(a){d.setFullYear(b++);this._setText(this[a+"YearLabelNode"],this.dateLocaleModule.format(d,{selector:"year",locale:this.lang}))},
this)},goToToday:function(){this.set("value",new this.dateClassObj)},constructor:function(a){this.dateModule=a.datePackage?h.getObject(a.datePackage,!1):u;this.dateClassObj=this.dateModule.Date||Date;this.dateLocaleModule=a.datePackage?h.getObject(a.datePackage+".locale",!1):v},_createMonthWidget:function(){return k._MonthWidget({id:this.id+"_mddb",lang:this.lang,dateLocaleModule:this.dateLocaleModule},this.monthNode)},buildRendering:function(){var a=this.dowTemplateString,b=this.dateLocaleModule.getNames("days",
this.dayWidth,"standAlone",this.lang),d=0<=this.dayOffset?this.dayOffset:p.getFirstDayOfWeek(this.lang);this.dayCellsHtml=s.substitute([a,a,a,a,a,a,a].join(""),{d:""},function(){return b[d++%7]});a=s.substitute(this.weekTemplateString,{d:this.dateTemplateString});this.dateRowsHtml=[a,a,a,a,a,a].join("");this.dateCells=[];this.dateLabels=[];this.inherited(arguments);x.setSelectable(this.domNode,!1);a=new this.dateClassObj(this.currentFocus);this.monthWidget=this._createMonthWidget();this.set("currentFocus",
a,!1)},postCreate:function(){this.inherited(arguments);this._connectControls()},_connectControls:function(){var a=h.hitch(this,function(a,d,c){this[a].dojoClick=!0;return y(this[a],"click",h.hitch(this,function(){this._setCurrentFocusAttr(this.dateModule.add(this.currentFocus,d,c))}))});this.own(a("incrementMonth","month",1),a("decrementMonth","month",-1),a("nextYearLabelNode","year",1),a("previousYearLabelNode","year",-1))},_setCurrentFocusAttr:function(a,b){var d=this.currentFocus,c=this._getNodeByDate(d);
a=this._patchDate(a);this._set("currentFocus",a);if(!this._date2cell||0!=this.dateModule.difference(d,a,"month"))this._populateGrid(),this._populateControls(),this._markSelectedDates([this.value]);d=this._getNodeByDate(a);d.setAttribute("tabIndex",this.tabIndex);(this.focused||b)&&d.focus();c&&c!=d&&(r("webkit")?c.setAttribute("tabIndex","-1"):c.removeAttribute("tabIndex"))},focus:function(){this._setCurrentFocusAttr(this.currentFocus,!0)},_onDayClick:function(a){a.stopPropagation();a.preventDefault();
for(a=a.target;a&&!a.dijitDateValue;a=a.parentNode);a&&!q.contains(a,"dijitCalendarDisabledDate")&&this.set("value",a.dijitDateValue)},_getNodeByDate:function(a){return(a=this._patchDate(a))&&this._date2cell?this._date2cell[a.valueOf()]:null},_markSelectedDates:function(a){function b(a,b){q.toggle(b,"dijitCalendarSelectedDate",a);b.setAttribute("aria-selected",a?"true":"false")}c.forEach(this._selectedCells||[],h.partial(b,!1));this._selectedCells=c.filter(c.map(a,this._getNodeByDate,this),function(a){return a});
c.forEach(this._selectedCells,h.partial(b,!0))},onChange:function(){},isDisabledDate:function(){},getClassForDate:function(){}});k._MonthWidget=n("dijit.CalendarLite._MonthWidget",t,{_setMonthAttr:function(a){var b=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,a),d=6==r("ie")?"":"\x3cdiv class\x3d'dijitSpacer'\x3e"+c.map(b,function(a){return"\x3cdiv\x3e"+a+"\x3c/div\x3e"}).join("")+"\x3c/div\x3e";this.domNode.innerHTML=d+"\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e"+
b[a.getMonth()]+"\x3c/div\x3e"}});return k});
//# sourceMappingURL=CalendarLite.js.map