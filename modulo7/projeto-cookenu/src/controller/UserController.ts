import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/user";

const userBusiness = new UserBusiness()

export class UserController {

	public signup = async (req: Request, res: Response) => {
		try {
			const { name, email, password, role } = req.body;

			const input: UserInputDTO = {
				name,
				email,
				password,
				role
			};
			
			const token = await userBusiness.signup(input);

			res.status(201).send({ message: "Usuário criado!", token });
		} catch (error: any) {
			res.status(400).send(error.message);
		}
	};


	public login = async (req: Request, res: Response) => {
		try {
			const { email, password } = req.body;

			const input: LoginInputDTO = {
				email,
				password,
			};

			const token = await userBusiness.login(input);

			res.status(200).send({ token });
		} catch (error: any) {
			res.status(400).send(error.message);
		}
	};


	public getOwnProfile = async (req: Request, res: Response) => {

		try {
			const token = req.headers.authorization as string

			const result = await userBusiness.getOwnProfile(token)

			res.status(200).send(result)

		} catch (error: any) {

			res.status(400).send(error.message)

		}
	}


	public getAnotherProfile = async (req: Request, res: Response) => {

		try {
			const token = req.headers.authorization as string
			const id = req.params.id

			const infoGiven = {
				token,
				id
			}

			const result = await userBusiness.getAnotherProfile(infoGiven)

			res.status(200).send(result)

		} catch (error:any) {
			res.status(400).send(error.message)
		}
	}


	public getAllUsers = async (req: Request, res: Response) => {

        try {

            const token = req.headers.authorization as string

            const result = await userBusiness.getAllUsers(token)

            res.status(200).send(result)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }

    }

}
