import React, { Component } from "react";

import { connect } from "react-redux";

import { addPost } from "../actions/postActions";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    //create post Object
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    //Call Backend
    //Call Action
    this.props.addPost(post);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title :</label> <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body :</label> <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit">Add</button>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(null, { addPost })(PostForm);
