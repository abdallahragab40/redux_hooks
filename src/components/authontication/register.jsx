import React, { Component } from "react";

class Register extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* Register */}
        <div className="container">
          <form className="login">
            <h4 className="login__header">Register An Account</h4>
            <div className="form-group">
              <label htmlFor>E-mail Address</label>
              <input className="form-control" type="text" name id />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor>Password</label>
                <input className="form-control" type="text" name id />
              </div>
              <div className="form-group">
                <label htmlFor>Re-enter Password</label>
                <input className="form-control" type="text" name id />
              </div>
            </div>
            <div className="login__remember-me">
              <div className="add-product__actions">
                <button href="#" className="btn btn--gray">
                  Cancel
                </button>
                <button href="#" className="btn btn--primary">
                  Register
                </button>
              </div>
            </div>
            <a href="#" className="login__register-now">
              You are alredy a member?
            </a>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
