(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t.p+"static/media/logo.e2c6c8c5.svg"},27:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(6),a=t.n(c),u=t(5),i=t(2),l=t(3),s=t(8);function f(){var e=Object(i.a)(["\n  height: 20vh;\n  transform: ","\n"]);return f=function(){return e},e}function d(){var e=Object(i.a)(["\n  letter-spacing: 8px\n"]);return d=function(){return e},e}function p(){var e=Object(i.a)(["\n  padding: 5px 10px 5px;\n  margin-left: 3px;\n  margin-right: 3px;\n  text-decoration: none;\n  border: ",";\n  user-select: none;\n  display: inline-block;\n  outline: none;\n  color: ",";\n"]);return p=function(){return e},e}function m(){var e=Object(i.a)(["\n  text-align: center;\n  padding-top: 50px;\n"]);return m=function(){return e},e}var b=l.b.div(m()),g=l.b.div(p(),function(e){return e.loading?"lightgrey solid 1px":"black solid 1px"},function(e){return e.loading?"lightgrey":"black"}),v=l.b.h1(d()),x=l.b.img(f(),function(e){return"rotate(".concat(e.angle,"deg)")});var j=function(){var e=Object(r.useState)(null),n=Object(s.a)(e,2),t=n[0],o=n[1];return[t,Object(r.useCallback)(function(e){null!==e&&o(e.getBoundingClientRect())},[])]},C=t(14),E=t.n(C),O=t(21),h=t(9),y=Object(h.b)({slice:"Home",initialState:{counter:0,resetLoading:!1},reducers:{incrementCounter:function(e,n){e.counter=n.payload+1},decrementCounter:function(e,n){e.counter=n.payload-1},resetCounterLaunched:function(e,n){e.resetLoading=!0},resetCounterSuccess:function(e,n){e.counter=0,e.resetLoading=!1},resetCounterFailure:function(e,n){e.resetLoading=!1}}}),k=y.actions,w=y.reducer,L=k.incrementCounter,R=k.decrementCounter,M=k.resetCounterLaunched,S=k.resetCounterSuccess,H=k.resetCounterFailure,B=w,F=function(e){var n=e.counter;return o.a.createElement("div",null,o.a.createElement("p",null,n))},J=t(23),I=t.n(J),N=function(){var e=o.a.useRef(null),n=Object(u.c)(),t=Object(u.d)(function(e){return e.Home},u.b),r=t.counter,c=t.resetLoading,a=j(),i=Object(s.a)(a,2),l=(i[0],i[1]);return o.a.createElement(b,{ref:e},o.a.createElement(x,{className:"logo",src:I.a,ref:l}),o.a.createElement(v,null,"Misfits Market"),o.a.createElement(g,{type:"button",onClick:function(){n(L(r))}},"+"),o.a.createElement(g,{type:"button",onClick:function(){n(R(r))}},"-"),o.a.createElement(F,{counter:r}),o.a.createElement(g,{loading:c,type:"button",onClick:function(){n(function(){var e=Object(O.a)(E.a.mark(function e(n,t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(M()),e.next=4,new Promise(function(e,n){setTimeout(e,500)});case 4:n(S()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(H());case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(n,t){return e.apply(this,arguments)}}())}},"Reset"))};function P(){var e=Object(i.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');\n\n  body {\n    font-family: 'Roboto Mono'\n  }\n"]);return P=function(){return e},e}var T=Object(l.a)(P());var q=function(){return o.a.createElement("div",null,o.a.createElement(T,null),o.a.createElement(N,null))},z=Object(h.a)({reducer:{Home:B}});a.a.render(o.a.createElement(u.a,{store:z},o.a.createElement(q,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.eb9149a7.chunk.js.map