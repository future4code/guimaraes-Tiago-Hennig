import React from "react"

export default class Etapa1 extends React.Component {
    state = {
        nome: "",
        idade: "",
        email: ""
}
    
    handleInputNomeChange= (event)=>{
        this.setState({nome: event.target.value})
    }
    
    handleInputIdadeChange= (event)=>{
        this.setState({idade: event.target.value})
    }
    
    handleInputEmailChange= (event)=>{
        this.setState({email: event.target.value})
    }
    
    
    render() {
    
    return(
        <div>
            <h1 /> ETAPA 1 - DADOS GERAIS
            <p /> Qual seu nome?
            <p /> <input type="text" value={this.state.nome} onChange={this.handleInputNomeChange} />
            <p /> Qual sua idade?
            <p /> <input type="text" value={this.state.idade} onChange={this.handleInputIdadeChange} />
            <p /> Qual seu email?
            <p /> <input type="text" value={this.state.email} onChange={this.handleInputEmailChange} />
            <p /> Qual sua escolaridade?
            <p /> <select>
                    <option value="medioIncompleto">Ensino Médio Incompleto</option>
                    <option value="medioCompleto">Ensino Médio Completo</option>
                    <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                    <option value="superiorCompleto">Ensino Superior Completo</option>
            </select>
            <p /> <button> PRÓXIMA ETAPA </button>
            
        </div>
    )
    }
}
