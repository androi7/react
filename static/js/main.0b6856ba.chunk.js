(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(t,e,n){t.exports=n(351)},144:function(t,e,n){},146:function(t,e,n){},351:function(t,e,n){"use strict";n.r(e);var o=n(23),a=n.n(o),c=n(138),r=n.n(c),i=(n(144),n(68)),s=n(69),u=n(72),l=n(70),h=n(71),f=n(52),d=(n(146),n(148),n(349),"https://www.reddit.com/r/wallpapers.json");var b=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).state={json:""},t}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch(d).then(function(t){return t.text()}).catch(function(t){console.error("parsing failed",t)}).then(function(e){t.setState({json:e})})}},{key:"render",value:function(){var t=this.state.json,e=JSON.stringify(t);return a.a.createElement("p",null,"Info: ".concat(e))}}]),e}(a.a.Component),j=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).getInfo=t.getInfo.bind(Object(f.a)(Object(f.a)(t))),t.state={check:!1},t}return Object(h.a)(e,t),Object(s.a)(e,[{key:"getInfo",value:function(){this.setState({check:!0})}},{key:"render",value:function(){var t=this.state.check;return a.a.createElement("div",{className:"App"},a.a.createElement("button",{onClick:this.getInfo},"Get Info"),t?a.a.createElement(b,null):null)}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[139,2,1]]]);
//# sourceMappingURL=main.0b6856ba.chunk.js.map