import { UserAccount } from "./classes/UserAccount"
import { Transaction } from "./classes/Transaction"
import { Bank } from "./classes/Bank"

const tiago = new UserAccount("123456", "Tiago", 28)
const transacao = new Transaction("Compra - iPhone 8 Plus 64 GB Silver White", 3200, "12/10/2017")

tiago.setTransaction(transacao)
console.log(tiago)