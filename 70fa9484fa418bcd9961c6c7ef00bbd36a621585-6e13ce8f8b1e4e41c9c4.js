(self.webpackChunkportfolio_two=self.webpackChunkportfolio_two||[]).push([[360],{6291:function(e,n){"use strict";var t=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;n.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!t.test(e))return!1;var n=e.split("@");return!(n[0].length>64)&&!n[1].split(".").some((function(e){return e.length>63}))}},9077:function(e,n,t){var r=t(8640)("jsonp");e.exports=function(e,n,t){"function"==typeof n&&(t=n,n={});n||(n={});var a,c,i=n.prefix||"__jp",u=n.name||i+o++,l=n.param||"callback",f=null!=n.timeout?n.timeout:6e4,m=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;f&&(c=setTimeout((function(){p(),t&&t(new Error("Timeout"))}),f));function p(){a.parentNode&&a.parentNode.removeChild(a),window[u]=s,c&&clearTimeout(c)}return window[u]=function(e){r("jsonp got",e),p(),t&&t(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+m(u)).replace("?&","?"),r('jsonp req "%s"',e),(a=document.createElement("script")).src=e,d.parentNode.insertBefore(a,d),function(){window[u]&&p()}};var o=0;function s(){}},8640:function(e,n,t){function r(){var e;try{e=n.storage.debug}catch(t){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(n=e.exports=t(9196)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},n.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))})),e.splice(s,0,r)},n.save=function(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(t){}},n.load=r,n.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}},n.enable(r())},9196:function(e,n,t){var r;function o(e){function t(){if(t.enabled){var e=t,o=+new Date,s=o-(r||o);e.diff=s,e.prev=r,e.curr=o,r=o;for(var a=new Array(arguments.length),c=0;c<a.length;c++)a[c]=arguments[c];a[0]=n.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var i=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(t,r){if("%%"===t)return t;i++;var o=n.formatters[r];if("function"==typeof o){var s=a[i];t=o.call(e,s),a.splice(i,1),i--}return t})),n.formatArgs.call(e,a);var u=t.log||n.log||console.log.bind(console);u.apply(e,a)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return n.colors[Math.abs(r)%n.colors.length]}(e),"function"==typeof n.init&&n.init(t),t}(n=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){n.enable("")},n.enable=function(e){n.save(e),n.names=[],n.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),r=t.length,o=0;o<r;o++)t[o]&&("-"===(e=t[o].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=t(876),n.names=[],n.skips=[],n.formatters={}},876:function(e){var n=1e3,t=60*n,r=60*t,o=24*r,s=365.25*o;function a(e,n,t){if(!(e<n))return e<1.5*n?Math.floor(e/n)+" "+t:Math.ceil(e/n)+" "+t+"s"}e.exports=function(e,c){c=c||{};var i,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*t;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&!1===isNaN(e))return c.long?a(i=e,o,"day")||a(i,r,"hour")||a(i,t,"minute")||a(i,n,"second")||i+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=t)return Math.round(e/t)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},1202:function(e,n,t){"use strict";n.Z=void 0;var r,o=(r=t(9077))&&r.__esModule?r:{default:r},s=t(6291);var a=function(e){var n=e.url,t=e.timeout;return new Promise((function(e,r){return(0,o.default)(n,{param:"c",timeout:t},(function(n,t){n&&r(n),t&&e(t)}))}))},c=function(e){var n="";for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r="group["===t.substring(0,6)?t:t.toUpperCase();n=n.concat("&".concat(r,"=").concat(e[t]))}return n},i=function(e,n,t){var r=(0,s.validate)(e),o=encodeURIComponent(e);if(!r)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var i="https://gmail.us6.list-manage.com/subscribe/post?u=cab5323e0840ac15cbc21da54&amp;id=12af27c85f",u=3500;arguments.length<3&&"string"==typeof n?i=n:"string"==typeof t&&(i=t),i=i.replace(/\/post/g,"/post-json");var l="&EMAIL=".concat(o).concat(c(n)),f="".concat(i).concat(l);return a({url:f,timeout:u})};n.Z=i},7053:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(2137),o=t(1788),s=t(7757),a=t.n(s),c=t(7294),i=t(1202),u=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={email:"",message:""},t}return(0,o.Z)(n,e),n.prototype.render=function(){var e=this,n=function(){var n=(0,r.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,(0,i.Z)(e.state.email);case 3:r=n.sent,e.setState({message:r.msg}),console.log("handle submit");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return c.createElement("form",{name:"subscribeForm",method:"POST",id:"subscribeForm",className:"subscribeForm",onSubmit:n},c.createElement("div",{className:"message",dangerouslySetInnerHTML:{__html:this.state.message}}),c.createElement("div",{className:"formRow"},c.createElement("input",{className:"subscribeEmail",type:"email",name:"email",placeholder:"Enter Email Address...",value:this.state.email,onChange:function(n){var t,r=n.target,o=r.value,s=r.name;e.setState(((t={})[s]=o,t)),console.log("input change")}}),c.createElement("button",{className:"button",type:"submit"},"Subscribe")))},n}(c.Component)}}]);
//# sourceMappingURL=70fa9484fa418bcd9961c6c7ef00bbd36a621585-6e13ce8f8b1e4e41c9c4.js.map