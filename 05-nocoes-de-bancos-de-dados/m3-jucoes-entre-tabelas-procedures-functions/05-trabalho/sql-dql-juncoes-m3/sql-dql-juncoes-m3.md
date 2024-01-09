# Resolução do problema

Vamos a criação do banco de dados:

```sql
CREATE DATABASE bibliotecaDB;
USE bibliotecaDB;
```

<br>

A criação das tabelas ficará assim:

```sql
CREATE TABLE autores (
    autorID INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    nacionalidade VARCHAR(50)
);

CREATE TABLE livros (
    livroID INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    anoPublicacao INTEGER,
    autorID INTEGER,
    FOREIGN KEY (autorID) REFERENCES autores(autorID)
);
```

<br>

**Inserção de dados**: insira alguns registros nas tabelas "Autores" e "Livros". Certifique-se de que existam, pelo menos, três autores e cinco livros associados a esses autores;

```sql
INSERT INTO autores(nome, nacionalidade) 
VALUES
	('Yuaval Noah Harari', 'Isrraelense'),
  ('Jostein Gaarden', 'Norueguês'),
  ('Jordan Peterson', 'Canadense'),
  ('C.S. Lewis', 'Irlandês'),
  ('George Orwell', 'Inglês');

INSERT INTO livros(titulo, anoPublicacao, autorID)
VALUES
	('Sapiens', 2011, 1),
  ('O mundo de Sofia', 1991, 2),
  ('12 Regras para a vida', 2018, 3),
  ('Cartas de um diabo a seu aprendiz', 1942, 4),
  ('Cristianismo puro e simples', 1952, 4),
  ('1984', 1949, 5),
	('Homo Deus', 2015, 1);
```

<br>

**Consulta simples**: realize uma consulta simples para listar todos os autores e seus livros associados;

```sql
SELECT * FROM autores;
```

<img src=''/>

```sql
SELECT * FROM livros;
```

<img src=''/>

<br>

**Consulta com junção INNER JOIN**: crie uma consulta que utilize INNER JOIN para listar os detalhes dos livros e seus autores correspondentes;

```sql
SELECT 
autores.autorID AS `Identificador`, 
autores.nome AS `Nome do autor`, 
titulo AS `Nome do Livro`, 
anoPublicacao AS `Ano de Publicação`
FROM livros
INNER JOIN autores ON autores.autorID = livros.autorID;
```

<img src=''/>

<br>

**Consulta com junção LEFT JOIN**: elabore uma consulta que utilize LEFT JOIN para exibir todos os autores, independentemente de terem livros associados. Inclua informações dos livros, se disponíveis;

```sql
SELECT 
autores.nome AS `Nome do autor`, 
livros.titulo AS `Nome do Livro`
FROM autores
LEFT JOIN livros ON autores.autorID = livros.autorID
ORDER BY autores.nome;
```

<img src=''/>

<br>

**Consulta com filtro por nacionalidade**: realize uma consulta que liste os autores e seus livros, mas restrinja os resultados apenas aos autores de uma nacionalidade específica;

```sql
SELECT * FROM autores
WHERE nacionalidade = 'Irlandês';
```

<img src=''/>

<br>

**Consulta agregada**: crie uma consulta que agregue dados para contar quantos livros cada autor escreveu.

```sql
SELECT 
autores.autorID AS `Identificação do Autor`, 
autores.nome AS `Nome do Autor`, 
COUNT(livros.autorID) AS `Quantidade de Livros`
FROM autores
LEFT JOIN livros ON autores.autorID = livros.autorID
GROUP BY autores.autorID, autores.nome;
```

<img src=''/>
