import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { movieDTO } from "../model/movieDTO";

export class MovieController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { title, description, durationInMinutes, yearOfRelease } = req.body;



            const movie: movieDTO = {
                title,
                description,
                durationInMinutes,
                yearOfRelease
            }

            const movieBusiness = new MovieBusiness();
            await movieBusiness.create(movie);

            res.status(201).send({ message: "Filme cadastrado com sucesso" });
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}
