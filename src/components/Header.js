import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  Customer List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                 Add Customer
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Header;