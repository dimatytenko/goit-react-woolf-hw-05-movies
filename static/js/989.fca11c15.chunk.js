"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[989],{578:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),u="https://api.themoviedb.org/3/",i="d5b2e28528ef5375cd1bf6b24ef269ad";function s(){return(s=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"trending/all/day?api_key=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l={fetchFilmsTrending:function(){return s.apply(this,arguments)},fetchFilmsByQuery:function(e){return o.apply(this,arguments)},fetchFilmById:function(e){return p.apply(this,arguments)},fetchFilmCast:function(e){return f.apply(this,arguments)},fetchFilmReviews:function(e){return h.apply(this,arguments)}};t.Z=l},989:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),s=n(87),o=n(184),p=function(e){var t=e.onSubmit,n=e.onChange,r=e.value;return(0,o.jsxs)("form",{onSubmit:t,children:[(0,o.jsx)("input",{value:r,type:"text",placeholder:"Search films",onChange:n}),(0,o.jsx)("button",{type:"submit",children:(0,o.jsx)("span",{children:"Search"})})]})},f=n(578),h=function(){var e=(0,s.lr)(),t=(0,a.Z)(e,2),n=t[0],c=t[1],h=(0,i.useState)(""),l=(0,a.Z)(h,2),v=l[0],d=l[1],m=(0,i.useState)([]),y=(0,a.Z)(m,2),x=y[0],g=y[1],w=(0,i.useState)(null),b=(0,a.Z)(w,2),j=b[0],k=b[1],_=n.get("query");return(0,i.useEffect)((function(){if(_){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.fetchFilmsByQuery(_);case 3:t=e.sent,g(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),k("Something went wrong. Please try again later.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_]),(0,o.jsxs)("div",{children:[(0,o.jsx)(p,{onSubmit:function(e){e.preventDefault(),c({query:v}),d("")},onChange:function(e){d(e.target.value)},value:v}),x.length>0&&(0,o.jsx)("ul",{children:x.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:"/movies"},children:e.original_title||e.name})},e.id)}))}),0===x.length&&_&&(0,o.jsx)("p",{children:"We don't have any movies for this query."}),j&&(0,o.jsx)("p",{children:j})]})}},861:function(e,t,n){function r(e,t,n,r,a,c,u){try{var i=e[c](u),s=i.value}catch(o){return void n(o)}i.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var u=e.apply(t,n);function i(e){r(u,a,c,i,s,"next",e)}function s(e){r(u,a,c,i,s,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=989.fca11c15.chunk.js.map