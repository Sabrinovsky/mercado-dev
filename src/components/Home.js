import React,{Component} from 'react'

import base from '../base'
import AnuncioHome from './AnuncioHome'
import LinkCategoria from './LinkCategoria'
import HeaderHome from './HeaderHome'

class Home extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          categorias: [],
          anuncios: []
        }
        base.bindToState('categorias',{
            context: this,
            state:'categorias'
        })
        base.bindToState('anuncios',{
            context: this,
            state:'anuncios',
            queries:{
              limitToLast: 3
            }
        })
      }
    render(){
        let index = 0
        return(
            <div>
                <HeaderHome/>
                <div className='container'>
                    <h3>Ultimos anúncios</h3>
                    <div className='row'>
                        {
                            this.state.anuncios.map((anuncio,indice)=>{
                        return <AnuncioHome key={indice} anuncio={anuncio}/>
                        })}
                    </div>
                    <h3>Categorias</h3>

                    <div className='row'>
                        {
                        this.state.categorias.map((cat,key) => {
                            return[
                            <LinkCategoria key={key} categoria={cat} />,
                            ++index%4 === 0 && <div className='w-100'></div>
                            ]
                        })} 
                    </div>
                </div>
            </div>
        )
    }
}
export default Home