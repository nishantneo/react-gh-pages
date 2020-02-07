import React, { Component } from 'react'
import { BrowserRouter as Router, Route ,BrowserHistory} from 'react-router-dom'


import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import User from './components/User'
import Contact from './components/Contact'
import Task from './components/Task'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/user" component={User} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/task" component={Task} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
