"use strict";(self.webpackChunkcheatsheet=self.webpackChunkcheatsheet||[]).push([[7176,3047],{8331:(e,a,n)=>{var t=n(595);function s(e){e.register(t),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=s,s.displayName="ejs",s.aliases=["eta"]},595:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,s,o){if(n.language===t){var r=n.tokenStack=[];n.code=n.code.replace(s,(function(e){if("function"===typeof o&&!o(e))return e;for(var s,i=r.length;-1!==n.code.indexOf(s=a(t,i));)++i;return r[i]=e,s})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var s=0,o=Object.keys(n.tokenStack);!function r(i){for(var u=0;u<i.length&&!(s>=o.length);u++){var l=i[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var g=o[s],c=n.tokenStack[g],p="string"===typeof l?l:l.content,f=a(t,g),k=p.indexOf(f);if(k>-1){++s;var d=p.substring(0,k),h=new e.Token(t,e.tokenize(c,n.grammar),"language-"+t,c),m=p.substring(k+f.length),v=[];d&&v.push.apply(v,r([d])),v.push(h),m&&v.push.apply(v,r([m])),"string"===typeof l?i.splice.apply(i,[u,1].concat(v)):l.content=v}}else l.content&&r(l.content)}return i}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ejs.6f4aafd5.chunk.js.map