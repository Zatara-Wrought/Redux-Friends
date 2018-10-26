import React, { Component } from "react";
import { connect } from "react-redux";
import Friend from "./Friend";
import { fetchFriends } from "../actions";

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="FriendsList">
        {this.props.friends.map(friend => (
          <div className="friend" key={friend.id}>
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.name}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
        {this.props.error ? <p>{this.props.error}</p> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer,
  fetching: state.friendsReducer,
  error: state.friendsReducer
});

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
