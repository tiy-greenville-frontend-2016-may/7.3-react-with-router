var Backbone = require('backbone');
var BackboneMixin = require('backbone-react-component');
var React = require('react');

var ExampleMixin = {
  // componentWillMount: function(){
  //   this.props.collection.on('add', this.update);
  // },
  // update: function(){
  //   this.forceUpdate();
  // },
  sayHello: function(){
    console.log('Hello there!');
  }
};

var CatalogComponent = React.createClass({
  // mixins: [BackboneCollectionMixin],
  // mixins: [BackboneMixin, ExampleMixin],
  handleAddToCart: function(item){
    this.props.router.shoppingCart.add(item);
  },
  navigateToCart: function(){
    var router = this.props.router;
    router.navigate('compare/', {trigger: true});
  },
  render: function(){
    // console.log(this.props.collection);
    // this.sayHello();
    var self = this;
    var cartItems = this.props.router.productCatalog.map(function(item){
      return (
        <li key={item.cid}>
          {item.get('name')}: {item.get('price')} <button onClick={self.handleAddToCart.bind(self, item)} className="btn btn-success">Add</button>
        </li>
      )
    });

    return (
      <div>
        <ul>
          {cartItems}
        </ul>

        <button onClick={this.navigateToCart} className="btn btn-danger">View Cart</button>
      </div>
    )
  }
});

module.exports = CatalogComponent;
