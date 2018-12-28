import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Footer from './components/Footer'
import Home from './components/Home'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
