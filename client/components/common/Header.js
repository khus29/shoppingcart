import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  renderNavLinks() {
    if (cookies.get('user')) {
      return (
        <div className="headerLinks">
          <Link to="/cartDetails" className="cartLink">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            Cart
          </Link>
          <a href="#" onClick={this.logOut}>
            SignOut
          </a>
        </div>
      );
    } else {
      return (
        <div className="headerLinks">
          <Link to="/login" className="cartLink">
            Sign-in
          </Link>
        </div>
      );
    }
  }
  logOut() {
    cookies.remove('user');
    console.log(cookies.get('user'));
    //document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = "/";
  }
  render() {
    return (
      <nav className="header">
        <Link to="/" className="navbar-brand" refresh="true">
          <img className="logo-image" src="/images/logo.jpg" alt="Logo" />
        </Link>
        {this.renderNavLinks()}
      </nav>
    );
  }
}
