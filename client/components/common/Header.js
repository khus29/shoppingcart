import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Router>
                <Link to='/' className="navbar-brand" refresh="true">
                    <img className="logo-image" src="/images/logo.jpg" alt="Logo" />
                </Link>
            </Router>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Cart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign In</a>
                </li>
            </ul>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default Header;