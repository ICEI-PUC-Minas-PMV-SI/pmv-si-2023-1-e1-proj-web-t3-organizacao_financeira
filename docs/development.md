# Programação de Funcionalidades

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
|RF-008| Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração)  | Rafael, Victor | meu-perfil.html |
|RF-009| Permitir que o usuário consiga redefinir sua senha através de seu e-mail  | Nathan | esqueceu-senha.html |
|RF-010| Permitir que o usuário cadastrado gerencie suas fontes de receita   | Beatriz | gerenciar-receitas.html |
|RF-011| Permitir que o usuário cadastrado gerencie suas fontes de despesa  | Beatriz | gerenciar-despesas.html |
|RF-012| Emitir um relatório de despesas do mês  | Rafael | meu-relatorio.html |
|RF-013| Mostrar gráficos com o balanço do usuário   | Rafael | grafico-despesas.html |
|RF-014| Permitir que o usuário consiga suporte via chat   |  | |
|RF-015| Permitir que o usuário tenha a confirmação de cadastro através do seu email| Victor |registro.html|
|RF-016| A aplicação deve enviar ao usuário email para redefinição de senha | Nathan | sucesso-recuperar-senha.html|
|RF-017| Permitir que o usuário cadastrado informe seus objetivos financeiros |Beatriz| gerenciar-metas.html |
|RF-018| A aplicação deve, com base na meta e renda, indicar ao usuário valor a ser poupado. | Beatriz|gerenciar-metas.html|

### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Responsável | Artefatos|
|-------|-------------------------|----|------|
|RNF-001| A aplicação deve se adaptar(responsividade) para rodar em qualquer dispositivo | Beatriz, Rafael, Victor, Nathan, Lucas Nery, Lucas Warley | index.html, corretoras.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html| 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  Beatriz, Rafael, Victor, Nathan, Lucas Nery, Lucas Warley | index.html, corretoras.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html| 
|RNF-003| A aplicação deve enviar ao usuário email de confirmação de cadastro | | registro.html|
|RNF-004| A aplicação deve ser capaz de se integrar com outros sistemas de serviços financeiros  | | |
|RNF-005| Ter um layout intuitivo e de fácil entendimento para os usuários  | Beatriz, Rafael, Victor, Nathan, Lucas Nery, Lucas Warley | index.html, corretoras.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html |
|RNF-006| A Aplicação precisa comunicar-se com API para obter dados econômicos (dolar e outros índices)   | Victor | index.html, corretoras.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html |
|RNF-007| A Aplicação precisa comunicar-se com API para oferecer suporte via chat aos usuários   |  | |


## Descrição das estruturas:

## Registro do usuário 

|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
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

