(this["webpackJsonpmisfits-market"]=this["webpackJsonpmisfits-market"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.e2c6c8c5.svg"},,function(e,t,n){e.exports=n.p+"static/media/sold-out.b1186c09.svg"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),o=(n(16),n(1)),u=n(2),l=n(5),i=n(4),m=n(8),d=n.n(m),p=(n(17),function(){return c.a.createElement("header",{className:"Logo_header"},c.a.createElement("img",{src:d.a,alt:"logo"}))}),f=n(3),h=n(9),g=n.n(h),v=(n(18),function(e){var t=e.handleOrder,n=e.product,a=g()({"product-detail":!0,"product-available":!n.soldOut});return c.a.createElement("li",{className:"product"},c.a.createElement("div",{className:a,onClick:function(){return function(e,t,n){if(!t){fetch("https://applicant-dev.misfitsmarket.com/api/test/v1/".concat(e),{method:"post",headers:{"X-Customer-Token":"721028102"}}).then((function(e){return e.json()})).then((function(e){"Success"===e.msg&&n()})).catch((function(e){return console.log(e)}))}}(n.id,n.soldOut,t)}},n.soldOut?c.a.createElement("p",{className:"product-soldout"},"Sold out!"):"",c.a.createElement("p",null,"Price: ",n.price),c.a.createElement("p",null,"MSRP: ",n.msrp),c.a.createElement("p",null,n.product)))}),E=(n(19),function(){return c.a.createElement("div",{className:"success-message"},"Order successful!")}),b=n(10),O=n.n(b),k=(n(20),function(){return c.a.createElement("span",null,c.a.createElement("img",{className:"soldout",src:O.a,alt:""}),c.a.createElement("p",{className:"soldout-message"},"Sorry! We are all sold out! Please come back soon!"))}),S=(n(21),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).triggerSuccessMessage=a.triggerSuccessMessage.bind(Object(f.a)(a)),a.state={orderSuccessful:!1},a}return Object(u.a)(n,[{key:"triggerSuccessMessage",value:function(){this.setState({orderSuccessful:!0})}},{key:"render",value:function(){var e=this,t=this.state.orderSuccessful?c.a.createElement(E,null):"";return c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"product-grid"},this.props.products.map((function(t){return c.a.createElement(v,{product:t,key:t.id,handleOrder:e.triggerSuccessMessage})})),t))}}]),n}(c.a.Component)),j=(n(22),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={products:[]},e}return Object(u.a)(n,[{key:"componentWillMount",value:function(){var e=this;fetch("https://applicant-dev.misfitsmarket.com/api/test/v1").then((function(e){return e.json()})).then((function(t){e.setState({products:t.data.items})}))}},{key:"render",value:function(){var e=this.state.products,t=e&&e.length?c.a.createElement(S,{products:e}):c.a.createElement(k,null);return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),t)}}]),n}(c.a.Component));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.c88e0c32.chunk.js.map