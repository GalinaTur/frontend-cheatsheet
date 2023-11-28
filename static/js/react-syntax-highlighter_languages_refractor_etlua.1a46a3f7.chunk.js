"use strict";(self.webpackChunkcheatsheet=self.webpackChunkcheatsheet||[]).push([[8126,8119,3047],{6168:(e,n,t)=>{var a=t(6759),r=t(595);function o(e){e.register(a),e.register(r),function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"etlua",/<%[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"etlua")}))}(e)}e.exports=o,o.displayName="etlua",o.aliases=[]},6759:e=>{function n(e){e.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}}e.exports=n,n.displayName="lua",n.aliases=[]},595:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,l=i.length;-1!==t.code.indexOf(r=n(a,l));)++l;return i[l]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(l){for(var u=0;u<l.length&&!(r>=o.length);u++){var s=l[u];if("string"===typeof s||s.content&&"string"===typeof s.content){var c=o[r],g=t.tokenStack[c],p="string"===typeof s?s:s.content,f=n(a,c),d=p.indexOf(f);if(d>-1){++r;var k=p.substring(0,d),h=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),m=p.substring(d+f.length),b=[];k&&b.push.apply(b,i([k])),b.push(h),m&&b.push.apply(b,i([m])),"string"===typeof s?l.splice.apply(l,[u,1].concat(b)):s.content=b}}else s.content&&i(s.content)}return l}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_etlua.1a46a3f7.chunk.js.map