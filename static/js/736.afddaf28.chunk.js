"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{8855:function(n,t,e){e.d(t,{D:function(){return p},h_:function(){return s},mJ:function(){return h},op:function(){return f},yz:function(){return o}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),u="91c8072381313442ec35041820d8f199",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,c,i,u,o,s=e(5861),p=e(9439),f=e(7757),h=e.n(f),d=e(2791),l=e(7689),x=e(8855),v=e(168),g=e(6444),m=g.ZP.ul(r||(r=(0,v.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  /* justify-content: center; */\n  gap: 10px;\n  padding: 30px 0px;\n"]))),w=g.ZP.li(a||(a=(0,v.Z)(["\n  width: 150px;\n  border-radius: 5px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),Z=g.ZP.img(c||(c=(0,v.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),b=g.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),y=g.ZP.h3(u||(u=(0,v.Z)(["\n  text-align: center;\n  margin: 0;\n  font-weight: 700;\n  font-size: 20px;\n"]))),_=g.ZP.p(o||(o=(0,v.Z)(["\n  text-align: center;\n  color: #000;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 2;\n  letter-spacing: 0.06em;\n"]))),k=e(184),j=function(){var n=(0,l.UO)(),t=(0,d.useState)([]),e=(0,p.Z)(t,2),r=e[0],a=e[1];return(0,d.useEffect)((function(){var t=function(){var t=(0,s.Z)(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.D(n.movieID);case 2:e=t.sent,console.log("res_actors",e),a(e.cast);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n.movieID]),(0,k.jsx)("div",{children:(0,k.jsx)(m,{children:r.map((function(n){return(0,k.jsxs)(w,{children:[(0,k.jsx)(Z,{src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):"https://picsum.photos/600/900?image=91",alt:n.name}),(0,k.jsxs)(b,{children:[(0,k.jsx)(y,{children:n.name}),(0,k.jsx)(_,{children:n.character})]})]},n.id)}))})})}}}]);
//# sourceMappingURL=736.afddaf28.chunk.js.map