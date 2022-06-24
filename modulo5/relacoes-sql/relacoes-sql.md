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

d) 






`