var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./models/cart');
var CatalogComponent = require('./components/catalog.jsx');
var CartComponent = require('./components/comparison.jsx');


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'compare/': 'comparisonListController'
  },
  initialize: function(){

    this.shoppingCart = new models.ShoppingCart();
    this.productCatalog = new models.ProductCatalog();

    this.productCatalog.add([
      {'name': 'Arduino', 'price': 799, 'currencyCode': 'USD'},
      {'name': 'Fig', 'price': 25, 'currencyCode': 'USD'},
    ]);
  },
  index: function(){
    var self = this;
    ReactDOM.unmountComponentAtNode(document.getElementById('container'));

    ReactDOM.render(
      React.createElement(CatalogComponent, {router: self}),
      document.getElementById('container')
    );
  },
  comparisonListController: function(){
    var self = this;
    ReactDOM.unmountComponentAtNode(document.getElementById('container'));

    ReactDOM.render(
      React.createElement(CartComponent, {router: self}),
      document.getElementById('container')
    );
  }
});

var router = new Router();

module.exports = router;
