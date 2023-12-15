-- Criação do Banco de dados BlogDB
CREATE DATABASE BlogDB;
USE BlogDB;

-- Criação da Tabela de Autor
CREATE TABLE Autor (
	AutorID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NomeDoAutor VARCHAR(100)
) ENGINE=InnoDB;

-- Criação da Tabela de Post
CREATE TABLE Post (
	PostID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Autor_ID INT NOT NULL,
    Titulo VARCHAR(255),
    Conteudo VARCHAR(255),
    DataPublicacao DATE,
    FOREIGN KEY (Autor_ID) REFERENCES Autor(AutorID) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Criação da Tabela de Comentario
CREATE TABLE Comentario (
	ComentarioID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Autor_ID INT NOT NULL,
    Titulo VARCHAR(255),
    TextoDoComentario VARCHAR(255),
    DataDoComentario DATE,
    FOREIGN KEY (Autor_ID) REFERENCES Autor(AutorID) ON DELETE CASCADE 
) ENGINE=InnoDB;

-- Inserção de dados na Tabela Autor
INSERT INTO Autor (NomeDoAutor) VALUES ('Marcelo Raposo'), ('Priscilla Aquila');
SELECT NomeDoAutor FROM Autor;

-- Inserção de dados na Tabela Post
INSERT INTO Post (Autor_ID ,Titulo, Conteudo, DataPublicacao) 
VALUES (1, 'Titulo Marcelo', 'Conteudo Marcelo', '2023-12-15'), 
(2, 'Titulo Priscilla', 'Conteudo Priscilla', '2023-12-20');
SELECT * FROM Post;

-- Busca realizada para mostrar as tabelas se referenciando
SELECT A.AutorID, A.NomeDoAutor, P.Titulo, P.DataPublicacao
FROM Autor A
INNER JOIN Post P
ON A.AutorID = P.Autor_ID;

-- Deleção de um Autor, o que fará com que na tabela Post também seja exluido o registro relacionado.
DELETE FROM Autor WHERE AutorID = 1;


-- Basta verificar na tabela Post que o registro relacionado a o Autor de Id 1 foi exluido.
SELECT * FROM Post;