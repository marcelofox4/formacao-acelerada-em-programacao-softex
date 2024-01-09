# Resolução do problema

Vamos começar criando o database `tech_data` e setando ele para o uso:

```sql
CREATE DATABASE tech_data;
USE tech_data;
```

<br>

Agora criarei a tabela `transacoes` que será utilizada para fazer as manipulações dos dados:

```sql
CREATE TABLE transacoes (
    idTransacao INTEGER AUTO_INCREMENT PRIMARY KEY,
    dataTransacao DATE NOT NULL,
    produto VARCHAR(50) NOT NULL,
    idProduto INTEGER NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    valor DECIMAL NOT NULL,
    idUsuario INT NOT NULL,
    contaRemetente VARCHAR(50) NOT NULL,
    tipoTransacao VARCHAR(50) NOT NULL
);
```

<br>

Com a tabela criada será inserido alguns dados fictícios para as manipulações solicitadas no exercício:

```sql
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
```

<br>

**1. Seleção de dados**: escreva uma consulta que selecione todos os dados de transações da tabela de transações;

```sql
SELECT * FROM transacoes;
```

<img src=""/>

<br>

**2. Renomeando colunas**: utilize a cláusula AS para renomear as colunas da consulta anterior para nomes mais descritivos, como ID_Transacao, Data, Valor, etc;

```sql
SELECT 
idTransacao AS `Identificador da transação`, 
dataTransacao AS `Data da transação`, 
valor AS `Valor da transação` 
FROM transacoes;
```

<img src=""/>

<br>

**3. Filtragem com a cláusula WHERE**: escreva uma consulta que selecione apenas as transações com um valor superior a R$ 100,00;

```sql
SELECT * FROM transacoes WHERE valor > 80.00;
```

<img src=""/>

<br>

**4. Ordenação com a cláusula ORDER BY**: ordene as transações por valor em ordem decrescente;

```sql
SELECT * FROM transacoes ORDER BY valor DESC;
```

<img src=""/>

<br>

**5. Agregação com funções SQL**: utilize funções SQL como AVG, MAX, MIN e COUNT para calcular a média, o valor máximo, o valor mínimo e o número total de transações;

```sql
SELECT 
AVG(valor) AS `Média de Preços`, 
MAX(valor) AS `Maior Preço`, 
Min(valor) AS `Menor Preço`, 
COUNT(*) AS `Total de Transações` 
FROM transacoes;
```

<img src=""/>

<br>

**6. Agrupamento com a cláusula GROUP BY**: agrupe as transações por produto e calcule a média de valor para cada produto;

```sql
SELECT produto AS `Produto`, 
AVG(valor) AS `Preço médio praticado por produto`
FROM transacoes 
GROUP BY produto;
```

<img src=""/>

<br>

**7. Consulta combinada**: escreva uma consulta que selecione a quantidade total de produtos vendidos (COUNT), o valor total das vendas (SUM) e a média de valor por transação, agrupados por categoria de produto.

```sql
SELECT categoria AS `Categoria`, 
COUNT(*) AS `Total de produtos`, 
SUM(valor) AS `Valor total dos produtos`, 
AVG(valor) AS `Valor médio das transações`
FROM transacoes
GROUP BY categoria;
```

<img src=""/>

<br>
