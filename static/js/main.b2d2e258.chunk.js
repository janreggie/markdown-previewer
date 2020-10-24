(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{15:function(e,n,t){e.exports=t(29)},21:function(e,n,t){},22:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);t(16);var a=t(0),r=t.n(a),o=t(9),i=t.n(o),s=(t(21),t(2)),c=t(3),l=t(5),u=t(4),d=(t(22),t(10)),m=t(11),h=function(){return r.a.createElement("div",{id:"header",className:"navbar navbar-light bg-light"},r.a.createElement("h1",{className:"h2"},"Markdown Previewer"),r.a.createElement("h2",{className:"h4"},r.a.createElement("a",{href:"https://github.com/janreggie/markdown-previewer/"},r.a.createElement(d.a,{icon:m.a})," GitHub")))},p=t(12),w="# Header1\n\n## Header2\n\nEmphasis with *asterisks* or _underscores_.  \nStrong emphasis with **asterisks** or __underscores__.  \nCombined emphasis with **asterisks and _underscores_**.  \nStrikethrough uses ~~one~~ *two* tildes!  \nYou can insert code `in text` or using a code block:\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(\"Hello, playground\")\n}\n```\n\n> This is a very famous quote.\n>\n> - Gandhi\n\n1. First ordered list item\n2. Another item\n  * Unordered sub-list. \n1. Actual numbers don't matter, just that it's a number\n  1. Ordered sub-list\n4. And another item.\n  You can have properly indented paragraphs within list items.\n  Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n[I'm an inline-style link](https://www.google.com).\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\").\n\nURLs and URLs in angle brackets will automatically get turned into links. \nhttp://www.example.com or <http://www.example.com> and sometimes \nexample.com (but not on Github, for example).\n\nYou can also insert images on Markdown. This is me!   \n![github: janreggie](https://github.com/janreggie.png)\n",g=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={markdown:String(w)},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this,n={markdown:this.state.markdown,changer:function(n){e.setState({markdown:n.target.value})}};return r.a.createElement("div",{className:"container",id:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(v,n),r.a.createElement(f,this.state)))}}]),t}(r.a.Component),v=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("textarea",{className:"form-control col-lg",id:"editor",value:this.props.markdown,onChange:this.props.changer})}}]),t}(r.a.Component),f=function(e){Object(l.a)(a,e);var n=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=n.call(this,e)).marked=void 0,r.marked=t(28),r.marked.setOptions({breaks:!0,smartypants:!0}),r}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"preview",className:"col-lg"},r.a.createElement(p.a,{content:this.marked(this.props.markdown),noWrap:!0}))}}]),a}(r.a.Component),b=g,k=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:"app"},r.a.createElement(h,null),r.a.createElement(b,null))}}]),t}(r.a.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var E=t(14);t.n(E).a.get("https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js",(function(){})),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/markdown-previewer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/markdown-previewer","/service-worker.js");j?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.b2d2e258.chunk.js.map