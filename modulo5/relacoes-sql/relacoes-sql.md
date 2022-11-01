`
1)

a) É uma chave que se refere e está ligada a outra tabela do Banco de dados.

b) 
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,   
    rate FLOAT NOT NULL,     
    movie_id VARCHAR(255),     
    FOREIGN KEY (movie_id) REFERENCES Movies(id) 
    );

INSERT INTO Rating(id, comment, rate, movie_id) 
VALUES( 
    "001",
    "Amei o filme.", 
    9.5, 
    "001"
    );


c) Não é possível adicionar ou atualizar uma linha filha pois houve um erro com a chave estrangeira.

d) ALTER TABLE Movie DROP COLUMN ratings;

e) Não foi possível atualizar ou deletar uma linha por motivos atrelados a chave estrangeira.


2)

a) Essa tabela relaciona filmes a elenco, através de relação entre filmes na tabela Movie  e elenco na tabela Actor.

b) Ok.

c) Não foi possível adicionar ou atualizar uma linha filha por problemas com chave estrangeira.

d) Não foi possível adicionar ou atualizar uma linha filha por problemas com chave estrangeira.


3)

a) SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

b) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;


`