"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[456],{578:function(e,n,t){var r=t(861),a=t(757),c=t.n(a),i="https://api.themoviedb.org/3/",u="d5b2e28528ef5375cd1bf6b24ef269ad";function s(){return(s=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"trending/all/day?api_key=").concat(u));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&page=1&query=").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l={fetchFilmsTrending:function(){return s.apply(this,arguments)},fetchFilmsByQuery:function(e){return o.apply(this,arguments)},fetchFilmById:function(e){return p.apply(this,arguments)},fetchFilmCast:function(e){return f.apply(this,arguments)},fetchFilmReviews:function(e){return h.apply(this,arguments)}};n.Z=l},456:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(861),a=t(439),c=t(757),i=t.n(c),u=t(791),s=t(87),o=t(578),p=t(184),f=function(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],f=(0,u.useState)(null),h=(0,a.Z)(f,2),l=h[0],v=h[1],d=(0,u.useState)(!1),m=(0,a.Z)(d,2),g=m[0],x=m[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,o.Z.fetchFilmsTrending();case 4:n=e.sent,c(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v("Something went wrong. Please try again later.");case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending today"}),g&&(0,p.jsx)("p",{children:"Loading..."}),!!t.length&&(0,p.jsx)("ul",{children:t.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:"/"},children:e.original_title||e.name})},e.id)}))}),l&&(0,p.jsx)("p",{children:l})]})}},861:function(e,n,t){function r(e,n,t,r,a,c,i){try{var u=e[c](i),s=u.value}catch(o){return void t(o)}u.done?n(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,c){var i=e.apply(n,t);function u(e){r(i,a,c,u,s,"next",e)}function s(e){r(i,a,c,u,s,"throw",e)}u(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=456.29c45fb0.chunk.js.map