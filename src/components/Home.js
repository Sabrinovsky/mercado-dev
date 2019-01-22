import React,{Component} from 'react'

import base from '../base'
import AnuncioHome from './AnuncioHome'
import LinkCategoria from './LinkCategoria'
import HeaderHome from './HeaderHome'

class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            anuncios: []
        }
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
                            Object.keys(this.state.anuncios).map((key)=>{
                            const anuncio = this.state.anuncios[key]
                        return <AnuncioHome key={key} anuncio={anuncio}/>
                        })}
                    </div>
                    <h3>Categorias</h3>

                    <div className='row'>
                        {
                        this.props.categorias.map((cat,key) => {
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
