var Backbone = require('backbone');

var Product = Backbone.Model.extend({

});

var ShoppingCart = Backbone.Collection.extend({
  model: Product
});

var ProductCatalog = Backbone.Collection.extend({
  model: Product
});

module.exports = {
  'ProductCatalog': ProductCatalog,
  'ShoppingCart': ShoppingCart
};
