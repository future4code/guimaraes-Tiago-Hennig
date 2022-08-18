import { MovieDatabase } from "../data/MovieDatabase"
import { InvalidRequest } from "../error/InvalidRequest"
import { movieDTO } from "../model/movieDTO"

import { generateId } from "../services/generateId"

export class MovieBusiness {
    async create(movie: movieDTO): Promise<void> {
        if (!movie.title || !movie.description || !movie.durationInMinutes || !movie.yearOfRelease) {
            throw new InvalidRequest()
        }

        const id: string = generateId()

        const movieDatabase = new MovieDatabase()
        await movieDatabase.create({
            id,
            title: movie.title,
            description: movie.description,
            durationInMinutes: movie.durationInMinutes,
            yearOfRelease: movie.yearOfRelease

        })
    }

}
