CREATE DATABASE tech_data;
USE tech_data;

CREATE TABLE transacoes (
    idTransacao INTEGER AUTO_INCREMENT PRIMARY KEY,
    dataTransacao DATE NOT NULL,
    produto VARCHAR(50) NOT NULL,
    idProduto INTEGER NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    idUsuario INT NOT NULL,
    contaRemetente VARCHAR(50) NOT NULL,
    tipoTransacao VARCHAR(50) NOT NULL
);

INSERT INTO transacoes (
	dataTransacao, 
	produto, 
	idProduto, 
	categoria, 
	valor, 
	idUsuario, 
	contaRemetente, 
	tipoTransacao)
VALUES
  ('2023-01-01', 'Notebook', 101, 'Informática', 3500.50, 2, '123-89', 'Debito'),
  ('2023-01-02', 'Smartphone', 102, 'Informática', 1199.97, 3, '1457-79', 'PIX'),
  ('2023-01-03', 'TV', 103, 'Eletrodomésticos', 2999.99, 5, '225-69', 'TED'),
  ('2023-01-04', 'Geladeira', 107, 'Eletrodomésticos', 1889.75, 8, '024-234', 'DOC'),
  ('2023-01-09', 'Teclado', 406, 'Informática', 90.05, 11, '7024-534', 'Debito');

SELECT * FROM transacoes;

SELECT 
idTransacao AS `Identificador da transação`, 
dataTransacao AS `Data da transação`, 
valor AS `Valor da transação` 
FROM transacoes;

SELECT * FROM transacoes WHERE valor > 100.00;

SELECT * FROM transacoes ORDER BY valor DESC;

SELECT 
AVG(valor) AS `Média de Preços`, 
MAX(valor) AS `Maior Preço`, 
Min(valor) AS `Menor Preço`, 
COUNT(*) AS `Total de Transações` 
FROM transacoes;

SELECT produto AS `Produto`, 
AVG(valor) AS `Preço médio praticado por produto`
FROM transacoes 
GROUP BY produto;

SELECT categoria AS `Categoria`, 
COUNT(*) AS `Total de produtos`, 
SUM(valor) AS `Valor total dos produtos`, 
AVG(valor) AS `Valor médio das transações`
FROM transacoes
GROUP BY categoria;