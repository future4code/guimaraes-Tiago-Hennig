import React from "react"

export default class Etapa3 extends React.Component {
    state = {
        perguntaConclusao: "",
        idade: "",
        email: ""
}

    render() {
    
    return(
        <div>
            <h1 /> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO
            <p /> Por que você não terminou um curso de graduação?
            <p /> <input type="text" value={this.state.perguntaConclusao} onChange={this.handleInputperguntaConclusaoChange} />
            <p /> Você fez algum curso complementar?
            <p /> <select>
                    <option value="cursoTecnico">Curso Técnico</option>
                    <option value="Cursos de Ingles">Cursos de Inglês</option>
                    <option value="naoFiz">Não fiz curso complementar</option>
            </select>
            
        </div>
    )
    }
}