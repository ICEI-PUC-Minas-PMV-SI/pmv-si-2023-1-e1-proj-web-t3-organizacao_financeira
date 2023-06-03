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
|RF-001| Permitir que o usuário visitante acesse uma página com dicas financeiras | Rafael | dicas-financas.html |
|RF-002| A aplicação deverá ter uma página que apresente e responda perguntas frequentes - FAQ (Frequently Asked Questions) | Lucas Nery | FAQ.html |
|RF-003| A aplicação deverá ter uma página que apresente informações de investimentos | Lucas Warley | dicas-investimentos.html |
|RF-004| A aplicação deverá ter uma página que apresente dicas de economia doméstica   | Victor | economia-domestica.html |
|RF-005| A aplicação deverá ter uma página com sugestões de corretoras de investimentos | Nathan | corretoras.html |
|RF-006| A aplicação deverá ter uma página com informações sobre indicadores econômicos  |Beatriz| indicadores-economicos.html |
|RF-007| Permitir que o usuário visitante veja a cotação do Dólar do dia  | Victor | index.html, registro.html, sobre.html, login.html, FAQ.html, esqueceu-senha.html, dicas-investimentos.html, dicas-financas.html, economia-domestica.html, indicadores-economicos.html, corretoras.html |
|RF-008| Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração)  | | |
|RF-009| Permitir que o usuário consiga redefinir sua senha através de seu e-mail  | | |
|RF-010| Permitir que o usuário cadastrado gerencie suas fontes de receita   | Beatriz | gerenciar-receitas.html |
|RF-011| Permitir que o usuário cadastrado gerencie suas fontes de despesa  | | |
|RF-012| Emitir um relatório de despesas do mês  | | |
|RF-013| Mostrar gráficos com o balanço do usuário   | | |
|RF-014| Permitir que o usuário consiga suporte via chat   |  | |
|RF-015| Permitir que o usuário tenha a confirmação de cadastro através do seu email| |
|RF-016| A aplicação deve enviar ao usuário email para redefinição de senha | |
|RF-017| Permitir que o usuário cadastrado informe seus objetivos financeiros |Beatriz| gerenciar-metas.html |
|RF-018| A aplicação deve, com base na meta e renda, indicar ao usuário valor a ser poupado. | |

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir as notícias mais populares. | ALTA | index.html |
|RF-002| Usuários autenticados podem registrar novas notícias. | ALTA | cadastro-noticia.html |

## Descrição das estruturas:

## Registro do usuário 

|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome            | Texto  | Nome completo do usuário          | João da Silva                                             |
| E-mail         | Texto             | E-mail do usuário                        | joaodasilva@gmail.com                       |
| Telefone       | Numero (Inteiro)| Telefone do usuário                      |(31) 99998-9998                           |
| Senha       | Texto| Senha do usuário                     |abcd123@                           |

## Login
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| E-mail         | Texto             | E-mail do usuário                        | joaodasilva@gmail.com                       |
| Senha       | Texto| Senha do usuário                     |abcd123@                           |

## Registro de Receitas

|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome da Receita       | Texto  | Título da receita dado pelo usuário          | Salário                                             |
| Valor       | Número            | Valor da receita adicionada                       | 4.000,00                   |
| Categoria       | Texto| Categoria da receita adicionada                      |Salário                           |

## Registro de Despesas

|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome da Despesa       | Texto  | Título da despesa dado pelo usuário          | Aluguel                                           |
| Valor       | Número            | Valor da receita adicionada                       | 1.250,00                 |
| Categoria       | Texto| Categoria da despesa adicionada                      |Moradia                         |

## Registro de Metas Financeiras

|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome da Meta      | Texto  | Título da meta dado pelo usuário          | Viagem                                          |
| Valor Total      | Número            | Valor total necessário para a meta adicionada                       | 5.000,00                 |
| Valor que já possuo      | Número| Valor que usuário já possui separado para a meta estipulada                      |1.000,00                       |




## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

