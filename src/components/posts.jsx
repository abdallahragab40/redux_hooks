import React, { Component } from "react";
//2.
import { connect } from "react-redux";

//1.
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    //5.Call Action
    this.props.fetchPosts();
  }

  // componentWillUpdate() {
  //   //if props.post
  //   if (this.props.post.title) {
  //     console.log("Add");
  //     this.props.posts.unshift(this.props.post);
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <h1>Posts</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

//4.
function mapStateToProps(state) {
  return {
    posts: state.posts.items, //Get items from postsReducer
    post: state.posts.item
  };
}

//3.
export default connect(mapStateToProps, { fetchPosts })(Posts);
