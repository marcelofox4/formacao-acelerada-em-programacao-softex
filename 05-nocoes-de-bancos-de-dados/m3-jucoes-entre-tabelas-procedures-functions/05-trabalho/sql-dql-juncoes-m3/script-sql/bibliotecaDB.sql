CREATE DATABASE bibliotecaDB;
USE bibliotecaDB;

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
    
SELECT * FROM autores;
SELECT * FROM livros;

SELECT 
autores.autorID AS `Identificador`, 
autores.nome AS `Nome do autor`, 
titulo AS `Nome do Livro`, 
anoPublicacao AS `Ano de Publicação`
FROM livros
INNER JOIN autores ON autores.autorID = livros.autorID;

SELECT 
autores.nome AS `Nome do autor`, 
livros.titulo AS `Nome do Livro`
FROM autores
LEFT JOIN livros ON autores.autorID = livros.autorID
ORDER BY autores.nome;

SELECT * FROM autores
WHERE nacionalidade = 'Irlandês';

SELECT 
autores.autorID AS `Identificação do Autor`, 
autores.nome AS `Nome do Autor`, 
COUNT(livros.autorID) AS `Quantidade de Livros`
FROM autores
LEFT JOIN livros ON autores.autorID = livros.autorID
GROUP BY autores.autorID, autores.nome;