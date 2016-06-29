var $ = require('jquery');
var Backbone = require('backbone');

var router = require('./router');

$(function(){
  Backbone.history.start();
});

// var Review = require('./components/review.jsx');
// var CartComponent = require('./components/shopping-cart.jsx');
// var models = require('./models/cart');

// var shoppingCart = new models.ShoppingCart();
//
// // ReactDOM.render(
//   React.createElement(CartComponent, {collection: shoppingCart}),
//   document.getElementById('container')
// );
//
// shoppingCart.add([
//   {'name': 'Arduino', 'price': 799, 'currencyCode': 'USD'},
//   {'name': 'Fig', 'price': 25, 'currencyCode': 'USD'},
// ]);
