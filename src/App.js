import React, { Component } from 'react';
import logo from './logo.svg';

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'
import base from './base'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      categorias: []
    }
    base.bindToState('categorias',{
        context: this,
        state:'categorias'
    })
  }
  render() {
    return (
      <div className="App">
        <HeaderHome/>
        <div className='container'>
        <h3>Ultimos anúncios</h3>
          <div className='row'>
            <AnuncioHome/>
            <AnuncioHome/>
            <AnuncioHome/>
          </div>
          <h3>Categorias</h3>

          <div className='row'>
            {
              this.state.categorias.map( cat => {
                return(
                  <LinkCategoria categoria={{name: cat.categoria, url:cat.url, icon:cat.icon}} />
                )
              })
            } 
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
