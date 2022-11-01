enum GENRE {
	ACTION="action",
	DRAMA="drama",
	COMEDY="comedy",
	ROMANCE="romance",
	HORROR="horror"
}

type Movies = {
    title: string ,
    year: string,
    genre: GENRE,
    pontuation?: number
}


const movie = (title:string,year:string,genre:GENRE,pontuation?:number):Movies => {
    const film:Movies = {
        title: title,
        year: year,
        genre: genre,
        pontuation: pontuation
    }
    return film
}

const Titanic:Movies = {
    title: "Titanic",
    year: "1997",
    genre: GENRE.DRAMA,
    pontuation: 100
}

console.log(movie("Titanic", "1997", GENRE.DRAMA, 100))