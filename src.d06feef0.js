parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}var n=function(){function t(a){var n=a.selector,r=a.targetDate;e(this,t),this.selector=n,this.targetDate=r,this.start()}return a(t,[{key:"start",value:function(){var e=this;setInterval(function(){var t=Date.now(),a=e.targetDate-t,n=e.getTimeComponents(a);e.updateValue(n)},1e3)}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}},{key:"updateValue",value:function(e){var t=e.days,a=e.hours,n=e.mins,r=e.secs,o=document.querySelector(this.selector),s=o.querySelector('span[data-value="days"]'),u=o.querySelector('span[data-value="hours"]'),c=o.querySelector('span[data-value="mins"]'),i=o.querySelector('span[data-value="secs"]');s.textContent="".concat(t),u.textContent="".concat(a),c.textContent="".concat(n),i.textContent="".concat(r)}},{key:"getTimeComponents",value:function(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}}}]),t}(),r=new n({selector:"#timer-1",targetDate:new Date("Junary 2, 2024")}),o=new n({selector:"#timer-2",targetDate:new Date("October 16, 2021")});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.d06feef0.js.map