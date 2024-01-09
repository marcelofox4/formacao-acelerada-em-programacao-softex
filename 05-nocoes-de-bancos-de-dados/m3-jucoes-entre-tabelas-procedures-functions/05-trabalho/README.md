# Trabalho

## Instruções da Atividade

Considere um banco de dados simples que armazena informações sobre livros e autores. As tabelas relevantes são as seguintes

1 - Tabela "Autores":

Colunas: AutorID (Chave Primária), Nome, Nacionalidade

2 - Tabela "Livros":

Colunas: LivroID (Chave Primária), Titulo, AnoPublicacao, AutorID (Chave Estrangeira referenciando Autores)

<br>

**Instruções**:

**1. Inserção de dados**: insira alguns registros nas tabelas "Autores" e "Livros". Certifique-se de que existam, pelo menos, três autores e cinco livros associados a esses autores;

**2. Consulta simples**: realize uma consulta simples para listar todos os autores e seus livros associados;

**3. Consulta com junção INNER JOIN**: crie uma consulta que utilize INNER JOIN para listar os detalhes dos livros e seus autores correspondentes;

**4. Consulta com junção LEFT JOIN**: elabore uma consulta que utilize LEFT JOIN para exibir todos os autores, independentemente de terem livros associados. Inclua informações dos livros, se disponíveis;

**5. Consulta com filtro por nacionalidade**: realize uma consulta que liste os autores e seus livros, mas restrinja os resultados apenas aos autores de uma nacionalidade específica;

**6. Consulta agregada**: crie uma consulta que agregue dados para contar quantos livros cada autor escreveu.

<br>

**Observações**:

\- utilize as chaves primárias e estrangeiras corretamente nas junções;

\- documente cada consulta explicando o propósito e os resultados esperados;

\- considere a importância das junções para unir informações de tabelas relacionadas e entender a interconexão dos dados.
