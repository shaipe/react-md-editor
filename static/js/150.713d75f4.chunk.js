(window["webpackJsonp@uiw/react-md-editor"]=window["webpackJsonp@uiw/react-md-editor"]||[]).push([[150],{182:function(e,n){!function(e){var n=e.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(n,"addSupport",{value:function(n,a){"string"===typeof n&&(n=[n]),n.forEach((function(n){!function(n,a){var t=e.languages[n];if(t){var o=t["doc-comment"];if(!o){var r={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,alias:"comment"}};o=(t=e.languages.insertBefore(n,"comment",r))["doc-comment"]}if(o instanceof RegExp&&(o=t["doc-comment"]={pattern:o}),Array.isArray(o))for(var i=0,c=o.length;i<c;i++)o[i]instanceof RegExp&&(o[i]={pattern:o[i]}),a(o[i]);else a(o)}}(n,(function(e){e.inside||(e.inside={}),e.inside.rest=a}))}))}}),n.addSupport(["java","javascript","php"],n)}(Prism)}}]);
//# sourceMappingURL=150.713d75f4.chunk.js.map