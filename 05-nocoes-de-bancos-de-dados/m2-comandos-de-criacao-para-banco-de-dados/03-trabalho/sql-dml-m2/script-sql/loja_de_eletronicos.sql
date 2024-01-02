-- Criação e utilização do Banco de dados
CREATE DATABASE loja_de_eletronicos;
USE loja_de_eletronicos;

-- Criação da tabela de Produtos
CREATE TABLE Produtos (
	ProdutoID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    Preco DECIMAL(10,2),
    Qtd_Estoque INT
);

-- 1) Inserção de produtos dentro da tabela (INSERT)
INSERT INTO Produtos (Nome, Preco, Qtd_Estoque)
VALUES ('SmarthPhone', 799.99, 20), 
('Tablet', 349.99, 10),
('Fone de Ouvido', 49.99, 50);

-- 2) Atualização do estoque (UPDATE)
UPDATE Produtos SET Preco = 849.99, Qtd_Estoque = 25 WHERE ProdutoID = 1;

-- 3) Simulação de venda (DELETE)
DELETE FROM Produtos WHERE ProdutoID >= 2;
INSERT INTO Produtos (Nome, Preco, Qtd_Estoque)
VALUES ('Tablet', 349.99, 5), 
('Fone de Ouvido', 49.99, 40);

-- 3) Outra forma de fazer a simulação da venda com o comando UPDATE
UPDATE Produtos SET Qtd_Estoque = Qtd_Estoque - 5 WHERE ProdutoID = 2;
UPDATE Produtos SET Qtd_Estoque = Qtd_Estoque - 10 WHERE ProdutoID = 3;
