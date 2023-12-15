# Resolução do problema

Vamos começar criando nosso Banco de dados e sentando-o, para isso basta rodar o script SQL abaixo:

```sql
CREATE DATABASE BlogDB;
USE BlogDB;
```

<br>

Com o Banco de dados criado, o próximo passo é criar as tabelas de **Autor**, **Post** e **Comentario**:

```sql
CREATE TABLE Autor (
	AutorID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NomeDoAutor VARCHAR(100)
) ENGINE=InnoDB;

CREATE TABLE Post (
	PostID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Autor_ID INT NOT NULL,
    Titulo VARCHAR(255),
    Conteudo VARCHAR(255),
    DataPublicacao DATE,
    FOREIGN KEY (Autor_ID) REFERENCES Autor(AutorID) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Comentario (
	ComentarioID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Autor_ID INT NOT NULL,
    Titulo VARCHAR(255),
    TextoDoComentario VARCHAR(255),
    DataDoComentario DATE,
    FOREIGN KEY (Autor_ID) REFERENCES Autor(AutorID) ON DELETE CASCADE 
) ENGINE=InnoDB;
```

Foi utilizado no exercício como opção de integridade referencial o `CASCADE`, pois ele permite excluir ou atualizar os registros relacionados presentes na tabela filha automaticamente.

<br>

Para testes vamos fazer as seguintes manipulações com as tabelas:

1 - Inserir dados nas Tabelas Autor e Post:

```sql
INSERT INTO Autor (NomeDoAutor) VALUES ('Marcelo Raposo'), ('Priscilla Aquila');
SELECT NomeDoAutor FROM Autor;

INSERT INTO Post (Autor_ID ,Titulo, Conteudo, DataPublicacao) 
VALUES (1, 'Titulo Marcelo', 'Conteudo Marcelo', '2023-12-15'), 
(2, 'Titulo Priscilla', 'Conteudo Priscilla', '2023-12-20');
SELECT * FROM Post;
```

<br>

2 - Fazer uma consulta entre as tabelas Autor e Post verificando o relacionamento entre as tabelas:

```sql
SELECT A.AutorID, A.NomeDoAutor, P.Titulo, P.DataPublicacao
FROM Autor A
INNER JOIN Post P
ON A.AutorID = P.Autor_ID;
```

<br>

3 - Deletar um registro na Tabela Autor:

```sql
Delete From Autor Where AutorID = 1;
```

<br>

4 - Fazer uma consulta na tabela Post, verificando que o registro relacionado ao Autor de `AutorID = 1` foi excluído.

```sql
SELECT * FROM Post;
```


