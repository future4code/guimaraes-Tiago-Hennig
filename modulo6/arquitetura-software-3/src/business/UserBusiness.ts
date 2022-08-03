import { UserDatabase } from "../data/UserDatabase"
import { InvalidEmail } from "../error/InvalidEmail"
import { InvalidRequest } from "../error/InvalidRequest"
import { ShortName } from "../error/ShortName"
import { userInputDTO } from "../model/userInputDTO"
import { generateId } from "../services/generateId"

export class UserBusiness {
  async create(user: userInputDTO):Promise<void> {
    if (!user.email || !user.name || !user.password) {
      throw new InvalidRequest()
    }

    if (!user.email.includes("@")) {
      throw new InvalidEmail()
    }

    if (user.name.length < 3) {
      throw new ShortName()
    }

    const id: string = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name: user.name,
      email: user.email,
      password: user.password
    })
  }

}
