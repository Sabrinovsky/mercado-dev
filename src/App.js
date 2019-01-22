import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Footer from './components/Footer'
import Home from './components/Home'
import NovoAnuncio from './components/NovoAnuncio'
import base from './base';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            categorias:[]
        }
        base.bindToState('categorias',{
            context: this,
            state:'categorias'
        })
    }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' render={() => <Home categorias={this.state.categorias} />} />
          <Route exact path='/novo-anuncio' component={NovoAnuncio} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
