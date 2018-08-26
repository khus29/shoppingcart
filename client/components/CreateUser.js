import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-5">Register</h1>
        <input
          type="text"
          placeholder="username"
          onChange={this.props.setName}
        />
        <br />
        <input
          type="text"
          placeholder="emailId"
          onChange={this.props.setEmail}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={this.props.setPassword}
        />
        <p className="lead">
          <a
            className="btn btn-primary"
            onClick={this.clickHandler}
            role="button"
          >
            Create
          </a>
        </p>
      </div>
    );
  }
  clickHandler() {
    this.props.createUser(
      this.props.name,
      this.props.password,
      this.props.email
    );
  }
}
function mapStateToProps(state) {
  return {
    name: state.CreateUserReducer.name,
    password: state.CreateUserReducer.password,
    email: state.CreateUserReducer.email
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    createUser: (name, password, email) => {
      return dispatch(actions.createUser(name, password, email));
    },
    setName: e => dispatch({ type: "SET_CREATE_NAME", value: e.target.value }),
    setPassword: e =>
      dispatch({ type: "SET_CREATE_PASSWORD", value: e.target.value }),
    setEmail: e => dispatch({ type: "SET_CREATE_EMAIL", value: e.target.value })
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
