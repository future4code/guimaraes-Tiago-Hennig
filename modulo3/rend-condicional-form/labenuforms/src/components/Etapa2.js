import React from "react"

export default class Etapa2 extends React.Component {
    state = {
        curso: "",
        unidadeDeEnsino: "",
        email: ""
}

    render() {
    
    return(
        <div>
            <h1 /> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
            <p /> Qual o curso?
            <p /> <input type="text" value={this.state.curso} onChange={this.handleInputCursoChange} />
            <p /> Qual a unidade ensino?
            <p /> <input type="text" value={this.state.unidadeDeEnsino} onChange={this.handleInputunidadeDeEnsinoChange} />

            
        </div>
    )
    }
}