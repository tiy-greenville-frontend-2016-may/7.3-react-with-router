var $ = require('jquery');
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var Review = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return {
      'personName': '',
      'friends': '',
      'user': {
        'name': 'Random User',
        'friends': []
      }
    };
  },
  handleSubmit: function(e){
    e.preventDefault();
    var username = this.state.personName;
    var friends = this.state.friends.split(',');
    var newFriends = this.state.user.friends.concat(friends);

    var newUser = {
      'name': username,
      'friends': newFriends
    };

    this.setState({'user': newUser});
  },
  render: function(){

    var friendList = this.state.user.friends.map(function(friend){
      return <li key={friend}>{friend} <img src={friend.mug} /></li>
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input valueLink={this.linkState('personName')} type="text" name="name" placeholder="Your Name Please"/>
          <input valueLink={this.linkState('friends')} type="text" name="friends" placeholder="Provide Your List of Friends"/>

          <input type="submit" value="Send" />
        </form>

        <h1>Welcome {this.state.user.name}!</h1>

        <ul>
          {friendList}
        </ul>
      </div>
    )
  }
});


module.exports = Review;
