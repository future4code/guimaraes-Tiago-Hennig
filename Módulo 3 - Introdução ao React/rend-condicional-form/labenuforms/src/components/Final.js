import React from "react"

export default class Final extends React.Component {
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
            <h1 /> FIM
            <p /> Muito obrigado por participar desta pesquisa!!!
        </div>
    )
    }
}