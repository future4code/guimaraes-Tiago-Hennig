```
1)
a)

VARCHAR(255) - String com no máximo 255 caracteres
DATE - Representa data (YYYY-MM-DD)
NOT NULL - Significa que a coluna não pode ser nula, ou seja, precisa ter um valor

b)
SHOW DATABASES - Mostra as DATABASES dentro de todo o banco de dados
SHOW TABLES - Mostra as tabelas que a DATABASE em questão tem acesso

c)
DESCRIBE faz uma descrição das propriedades da tabela escolhida


2)
a) Ok.

b) Erro 1062. Entrada duplicata "002" para a chave Primária(PK).
Esse erro ocorreu pois o PK deve ser de valor único na tabela, pois é ele quem diferencia e identifica cada linha da tabela.

c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

d) Código de erro: 1364. O campo 'nome' não tem um valor padrão.

e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
Nesse caso foi fornecido um number ao inves de string, e como havia hifen foi feita uma operação matemática que resultou em 1950.


3)
a) select * from Actor where gender = "female";

b) select salary from Actor where name = "Tony Ramos";

c) Não houve resultado, pois só há gêneros "male" e "female" cadastrados.

d) select * from Actor where salary <= 500000;

e) SELECT id, name from Actor WHERE id = "002";


-- DESAFIOS --

5)

a) A query acima pega as linhas da tabela que os nomes comecem com A ou com J e que tenham salário maior que 300000.

b) SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * FROM Actor WHERE (name LIKE "%G%");

d) SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;


6)

a) CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
ratings FLOAT(2) NOT NULL);

Filmes inseridos no banco com sucesso.


7)

a) SELECT id, name, ratings FROM Movies WHERE id = "002";

b) SELECT * FROM Movies WHERE name = "Se Eu Fosse Você";

c) SELECT id, name, synopsis FROM Movies WHERE ratings >= 7;


8)

a) SELECT * FROM Movies WHERE (name LIKE "%vida%");

b) SELECT * FROM Movies WHERE (name LIKE "%vida%" OR synopsis LIKE "%vida%");
```