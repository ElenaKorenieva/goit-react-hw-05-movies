"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[929],{8855:function(n,t,e){e.d(t,{D:function(){return p},h_:function(){return s},mJ:function(){return d},op:function(){return f},yz:function(){return u}});var r=e(5861),a=e(7757),o=e.n(a),i=e(1243),c="91c8072381313442ec35041820d8f199",u=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4321:function(n,t,e){e(2791);var r=e(184);t.Z=function(){return(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)("h2",{children:"Loading..."})})}},9908:function(n,t,e){e.d(t,{Z:function(){return y}});var r,a,o,i,c,u=e(8683),s=(e(2791),e(1087)),p=e(7689),f=e(6249),d=e(168),l=e(6444),h=l.ZP.li(r||(r=(0,d.Z)(["\n  width: 298px;\n  overflow: hidden;\n  border-radius: 2px;\n  background-color: rgba(215, 231, 233, 0.9);\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),x=l.ZP.div(a||(a=(0,d.Z)(["\n  height: 447px;\n  overflow: hidden;\n"]))),g=l.ZP.img(o||(o=(0,d.Z)(["\n  width: 100%;\n"]))),v=l.ZP.h2(i||(i=(0,d.Z)(["\n  text-align: center;\n  margin-bottom: 10px;\n"]))),b=e(184),m=function(n){var t=n.title,e=n.id,r=n.poster_path,a=(0,p.TH)(),o=a.pathname===f._.HOME?f._.MOVIES:a.pathname;return(0,b.jsx)(h,{children:(0,b.jsxs)(s.OL,{to:"".concat(o,"/").concat(e),state:{from:a},children:[(0,b.jsx)(x,{children:(0,b.jsx)(g,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://picsum.photos/600/900?image=109",alt:t})}),(0,b.jsx)(v,{children:t})]})})},Z=l.ZP.ul(c||(c=(0,d.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  padding: 0px 20px;\n  justify-content: center;\n"]))),y=function(n){var t=n.movies;return(0,b.jsx)(Z,{children:t&&t.map((function(n){return(0,b.jsx)(m,(0,u.Z)({},n),n.id)}))})}},4814:function(n,t,e){e.d(t,{Z:function(){return c}});e(2791);var r,a=e(168),o=e(6444).ZP.section(r||(r=(0,a.Z)(["\n  max-width: 1200px;\n  margin: 0px auto;\n"]))),i=e(184),c=function(n){var t=n.children;return(0,i.jsxs)(o,{children:[" ",t]})}},3929:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,o,i,c,u=e(2791),s=e(4814),p=e(9908),f=e(9439),d=e(168),l=e(6444),h=l.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 20px;\n"]))),x=l.ZP.input(a||(a=(0,d.Z)(["\n  outline: none;\n  padding: 10px 20px;\n  margin-right: 3px;\n  border: none;\n  background-color: rgba(208, 224, 226, 0.9);\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n"]))),g=l.ZP.button(o||(o=(0,d.Z)(["\n  padding: 9px 20px;\n  border: none;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: rgba(208, 224, 226, 0.9);\n  cursor: pointer;\n  color: #464040;\n  font-weight: 600;\n"]))),v=e(184),b=function(n){var t=n.onSubmit,e=(0,u.useState)(" "),r=(0,f.Z)(e,2),a=r[0],o=r[1];return(0,v.jsxs)(h,{onSubmit:function(n){n.preventDefault(),t(a),o("")},children:[(0,v.jsx)(x,{type:"text",onChange:function(n){var t=n.target.value;o(t.trim())},value:a,placeholder:"Search a movie"}),(0,v.jsx)(g,{children:"Search"})]})},m=e(5861),Z=e(7757),y=e.n(Z),j=e(1087),w=e(8855),S=function(){var n=(0,u.useState)([]),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=(0,u.useState)(""),o=(0,f.Z)(a,2),i=o[0],c=o[1],s=(0,u.useState)(!1),p=(0,f.Z)(s,2),d=p[0],l=p[1],h=(0,u.useState)(!1),x=(0,f.Z)(h,2),g=x[0],v=x[1],b=(0,j.lr)(),Z=(0,f.Z)(b,2),S=Z[0],k=Z[1],O=(0,u.useState)(!1),P=(0,f.Z)(O,2),_=P[0],D=P[1],E=S.get("query");(0,u.useEffect)((function(){if(E){var n=function(){var n=(0,m.Z)(y().mark((function n(){var t;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,w.mJ(E);case 4:if(0!==(t=n.sent).results.length){n.next=8;break}return D(!0),n.abrupt("return");case 8:r(t.results),v(!0),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.error(n.t0);case 15:return n.prev=15,l(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}}),[E,_]);if(e)return{movies:e,loading:d,success:g,empty:_,handleSubmit:function(n){c(n),k({query:n}),D(!1),r([])},queryS:i}},k=e(4321),O=(l.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),l.ZP.h2(c||(c=(0,d.Z)(["\n  text-align: center;\n  color: #464040;\n"])))),P=function(){var n=S(),t=n.movies,e=n.loading,r=n.success,a=n.empty,o=n.handleSubmit;return(0,v.jsx)(s.Z,{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{onSubmit:o}),e&&(0,v.jsx)(k.Z,{}),a&&(0,v.jsx)(O,{children:"Movies do not found...Sorry("}),r&&(0,v.jsx)(p.Z,{movies:t,children:"Movies"})]})})}},8683:function(n,t,e){function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}e.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=929.7a3278d7.chunk.js.map