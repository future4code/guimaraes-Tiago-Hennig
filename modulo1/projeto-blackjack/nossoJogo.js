console.log("BOAS VINDAS AO JOGO DE BLACKJACK!")

if (confirm("Quer iniciar uma nova rodada?")) {
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const carta1pc = comprarCarta()
   const carta2pc = comprarCarta()
   
   const pontosUsuario = (carta1.valor) + (carta2.valor)
   const pontosPc = (carta1pc.valor) + (carta2pc.valor)

   console.log("Usuário - cartas: " +(carta1.texto) + " " +(carta2.texto) + " - pontuação " + pontosUsuario)
   console.log("Computador - cartas: " +(carta1pc.texto) + " " +(carta2pc.texto) + " - pontuação " + pontosPc)

   if (pontosUsuario === pontosPc) {
      console.log("Empate!")
   } else if (pontosUsuario > pontosPc) {
      console.log("O usuário ganhou!")
   } else {
      console.log("O computador ganhou!")
   }

} else {
   console.log("O jogo acabou.")
}




