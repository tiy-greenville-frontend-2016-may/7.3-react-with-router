var Backbone = require('backbone');
var BackboneMixin = require('backbone-react-component');
var React = require('react');

var ComparisonComponent = React.createClass({
  // mixins: [BackboneMixin],
  render: function(){
    // var collection = this.getCollection();
    var collection = this.props.router.shoppingCart;
    var cartItems = collection.map(function(item){
      return <div className="col-md-2" key={item.cid}>{item.get('name')}: {item.get('price')}</div>
    });

    return (
      <div className="row">
        {cartItems}
      </div>
    );
  }
});

module.exports = ComparisonComponent;
