import React, { Component } from "react";

// import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  sample() {
    this.props.history.replace("/");
  }
  render() {
    return (
      <React.Fragment>
        {/* Login */}
        <div className="container">
          <form className="login">
            <h4 className="login__header">I'M A RETURNING CUSTOMER</h4>
            <div className="form-group">
              <label htmlFor>Username or E-mail Address</label>
              <input className="form-control" type="text" name id />
            </div>
            <div className="form-group login__Password">
              <a href="#" className="login__forget-password">
                (Forget Password?)
              </a>
              <label htmlFor>Password</label>
              <input className="form-control" type="text" name id />
            </div>
            <div className="login__remember-me">
              <div className="form-group__checkbox">
                <input type="checkbox" name id />
                <span>Remember Me</span>
              </div>
              <div className="add-product__actions">
                <button href="#" className="btn btn--gray">
                  Cancel
                </button>
                <button
                  onClick={() => this.sample()}
                  className="btn btn--primary"
                >
                  Login
                </button>
              </div>
            </div>
            <a href="#" className="login__register-now">
              Register Now
            </a>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
