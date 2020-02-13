import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import SearchField from 'react-search-field'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }


  render() {

    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
           <Link to="/user" className="nav-link">
               User Lists
           </Link>
        </li>
        <li className="nav-item">
          <Link to="/task" className="nav-link">
           Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link">
              Shop
          </Link>
        </li>
        <li className="nav-item">
           <Link  to="/contact" className="nav-link">
               Contact Us
           </Link>
        </li>

          <SearchField
              placeholder="Search..."
            //  onChange={this.onchange.bind(this)}
              searchText="This is initial search text"
              classNames="test-class"
          />
          <li className="nav-item" >
              <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                  Logout
              </a>
          </li>
      </ul>


    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>

          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
