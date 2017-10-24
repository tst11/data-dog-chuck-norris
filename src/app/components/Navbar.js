import React from "react";
import { render } from "react-dom";
import {
  Link
} from 'react-router-dom'


class Navbar extends React.Component {

  render() {
    
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#">Chuck Norris</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link activeclassname={"active"} className="nav-item nav-link" to="/search">Search <span className="sr-only">(current)</span></Link>
            <Link activeclassname={"active"} className="nav-item nav-link" to="/categories">Categories</Link>
            <Link activeclassname={"active"} className="nav-item nav-link" to="/history">Search History</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;