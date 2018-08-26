import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import auth from "../routes/auth";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.props;

    if (redirectToReferrer) {
      auth.authenticate();
      return <Redirect to={from} />;
    }

    return (
      <div className="jumbotron">
        <h1 className="display-5">Login</h1>
        <input
          type="text"
          placeholder="username"
          onChange={this.props.setName}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={this.props.setPassword}
        />
        <p className="lead">
          You must log in to view the page at {from.pathname}.
        </p>
        <p className="lead">
          <a
            className="btn btn-primary"
            onClick={this.clickHandler}
            role="button"
          >
            Login
          </a>
        </p>
        <div>
          <Link to="/createUser">
            <b>New User?</b>
          </Link>
        </div>
      </div>
    );
  }
  clickHandler() {
    this.props.login(this.props.name, this.props.password);
  }
}

function mapStateToProps(state) {
  return {
    redirectToReferrer: state.LoginReducer.redirectToReferrer,
    name: state.LoginReducer.name,
    password: state.LoginReducer.password
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: (name, pass) => {
      return dispatch({ type: "LOGIN_ACTION", name: name, password: pass });
    },
    setName: e => dispatch({ type: "SET_NAME", value: e.target.value }),
    setPassword: e => dispatch({ type: "SET_PASSWORD", value: e.target.value })
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
