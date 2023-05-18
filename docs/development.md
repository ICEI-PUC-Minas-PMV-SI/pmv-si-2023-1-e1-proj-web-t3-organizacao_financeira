# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Responsável| Artefato |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário visitante acesse uma página com dicas financeiras | Rafael |   |
|RF-002| A aplicação deverá ter uma página que apresente e responda perguntas frequentes - FAQ (Frequently Asked Questions) |  |  |
|RF-003| A aplicação deverá ter uma página que apresente informações de investimentos | |  |
|RF-004| A aplicação deverá ter uma página que apresente dicas de economia doméstica   | Victor | |
|RF-005| A aplicação deverá ter uma página com sugestões de corretoras de investimentos | Nathan | |
|RF-006| A aplicação deverá ter uma página com informações sobre indicadores econômicos  |Beatriz| indicadores-economicos.html |
|RF-007| Permitir que o usuário visitante veja a cotação do Dólar do dia  | | index.html |
|RF-008| Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração)  | | |
|RF-009| Permitir que o usuário consiga redefinir sua senha através de seu e-mail  | | |
|RF-010| Permitir que o usuário cadastrado gerencie suas fontes de receita   | | |
|RF-011| Permitir que o usuário cadastrado gerencie suas fontes de despesa  | | |
|RF-012| Emitir um relatório de despesas do mês  | | |
|RF-013| Mostrar gráficos com o balanço do usuário   | | |
|RF-014| Permitir que o usuário consiga suporte via chat   |  | |
|RF-015| Permitir que o usuário tenha a confirmação de cadastro através do seu email| |
|RF-016| A aplicação deve enviar ao usuário email para redefinição de senha | |
|RF-017| Permitir que o usuário cadastrado informe seus objetivos financeiros | |
|RF-018| A aplicação deve, com base na meta e renda, indicar ao usuário valor a ser poupado. | |

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir as notícias mais populares. | ALTA | index.html |
|RF-002| Usuários autenticados podem registrar novas notícias. | ALTA | cadastro-noticia.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

