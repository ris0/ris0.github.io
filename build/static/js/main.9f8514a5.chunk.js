(this["webpackJsonpmisfits-market"]=this["webpackJsonpmisfits-market"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.e2c6c8c5.svg"},,function(e,t,n){e.exports=n.p+"static/media/sold-out.b1186c09.svg"},,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),s=n.n(r),l=(n(15),n(3)),o=n(4),u=n(9),i=n(8),d=n(5),m=n.n(d),f=(n(16),function(){return c.a.createElement("header",{className:"Logo_header"},c.a.createElement("img",{src:m.a,alt:"logo"}))}),p=n(6),h=n.n(p),E=(n(17),function(e){var t=e.handleOrder,n=e.product,a=h()({"product-detail":!0,"product-available":!n.soldOut});return c.a.createElement("li",{className:"product"},c.a.createElement("div",{className:a,onClick:function(){return function(e,t,n){if(!t){fetch("https://applicant-dev.misfitsmarket.com/api/test/v1/".concat(e),{method:"post",headers:{"X-Customer-Token":"721028102"}}).then((function(e){return e.json()})).then((function(e){"Success"===e.msg&&n()})).catch((function(e){return console.log(e)}))}}(n.id,n.soldOut,t)}},n.soldOut?c.a.createElement("p",{className:"product-soldout"},"Sold out!"):"",c.a.createElement("p",null,"Price: ",n.price),c.a.createElement("p",null,"MSRP: ",n.msrp),c.a.createElement("p",null,n.product)))}),v=(n(18),function(e){var t=e.handleOrder,n=e.products;return c.a.createElement("ul",{className:"product-grid"},n.map((function(e){return c.a.createElement(E,{product:e,key:e.id,handleOrder:t})})))}),g=n(7),S=n.n(g),k=(n(19),function(){return c.a.createElement("span",null,c.a.createElement("img",{className:"soldout",src:S.a,alt:""}),c.a.createElement("p",{className:"soldout-message"},"Sorry! We are all sold out! Please come back soon!"))}),O=(n(20),function(){return c.a.createElement("div",{className:"success-message"},"Order successful!")}),N=(n(21),function(){return c.a.createElement("div",{class:"loader"},c.a.createElement("div",{class:"load-text"},c.a.createElement("div",{class:"loaded-text"},"Mis"),c.a.createElement("div",{class:"loading-text"},"fits")))}),b=(n(22),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={products:[],orderSuccessful:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://applicant-dev.misfitsmarket.com/api/test/v1").then((function(e){return e.json()})).then((function(t){e.setState({products:t.data.items})}))}},{key:"triggerSuccessMessage",value:function(){var e=this;this.setState({orderSuccessful:!0}),setTimeout((function(){return e.setState({orderSuccessful:!1})}),1500)}},{key:"render",value:function(){var e=this,t=this.state.products,n=t&&t.length?c.a.createElement(v,{products:t,handleOrder:function(){return e.triggerSuccessMessage()}}):c.a.createElement(k,null),a=this.state.orderSuccessful?c.a.createElement(O,null):"";return c.a.createElement("div",{className:"App"},c.a.createElement(N,null),c.a.createElement("div",{className:"header"},c.a.createElement(f,null),a),n)}}]),n}(c.a.Component));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.9f8514a5.chunk.js.map