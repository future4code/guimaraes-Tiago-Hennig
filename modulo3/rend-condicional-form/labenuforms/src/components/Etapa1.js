import React from "react"
import PerguntaAberta from "./PerguntaAberta"

export default class Etapa1 extends React.Component {
    state = {
        nome: "",
        idade: "",
        email: ""
}
    

    render() {
    
    return(
        <div>
            <h1 /> ETAPA 1 - DADOS GERAIS
            <PerguntaAberta pergunta={"Qual o seu nome?"} />
            <PerguntaAberta pergunta={"Qual sua idade?"} />
            <PerguntaAberta pergunta={"Qual seu email?"} /> 
            <p /> Qual sua escolaridade?
            <p /> <select>
                    <option value="medioIncompleto">Ensino Médio Incompleto</option>
                    <option value="medioCompleto">Ensino Médio Completo</option>
                    <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                    <option value="superiorCompleto">Ensino Superior Completo</option>
            </select>
            
        </div>
    )
    }
}
