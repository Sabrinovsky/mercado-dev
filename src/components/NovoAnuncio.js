import React, {Component} from 'react'

import Header from './Header'
import Base,{Storage} from '../base'

class NovoAnuncio extends Component {
    nome = React.createRef();
    photo = React.createRef();

    constructor(props){
        super(props)
        this.state = {
            nome:'',
            categoria:'',
            descricao:'',
            preco:'',
            telefone:'',
            vendedor:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){

        const file = this.foto.files[0]
        const {name,size} = file

        const ref = Storage.ref(name)

        ref.put(file).then(img =>{
            ref.getDownloadURL().then(url=>{
                var novoAnuncio = {
                    nome : this.nome.value,
                    categoria : this.categoria.value,
                    descricao : this.descricao.value,
                    preco : this.preco.value,
                    foto: url,
                    telefone : this.telefone.value,
                    vendedor : this.vendedor.value,
                }

                Base.push('anuncios',{
                    data: novoAnuncio
                }, (err)=>{
                    console.log(err)
                })
            })
        })




        e.preventDefault()
        // return false
    }

    handleChange() {
        
    }

    render(){
        return(
            <div style={{marginTop:'120px'}}>
            <div className='container'>
                <h1>Novo Anuncio</h1>
                <Header/>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='productName'>Nome produto</label>
                            <input id='nome' className='form-control' type='text' ref={this.nome} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='photo'>Foto</label>
                            <input id='photo' className='form-control' type='file' ref={(ref) => this.foto = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='categorai'>Categoria </label>
                            <input id='categoria' className='form-control' type='text' ref={(ref) => this.categoria = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'>Descrição </label>
                            <textarea id='descricao' className='form-control' ref={(ref) => this.descricao = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='preco'>Preço </label>
                            <input id='preco' className='form-control' type='text' ref={(ref) => this.preco = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='telefone'>Telefone </label>
                            <input id='telefone' className='form-control' type='text' ref={(ref) => this.telefone = ref}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='vendedor'>Vendedor </label>
                            <input id='vendedor' className='form-control' type='text' ref={(ref) => this.vendedor = ref}/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Salvar Anúncio</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default NovoAnuncio

//13:00
