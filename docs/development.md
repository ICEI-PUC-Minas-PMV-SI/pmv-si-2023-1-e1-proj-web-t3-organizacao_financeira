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
|RF-007| Permitir que o usuário visitante veja a cotação do Dólar do dia  | Victor | index.html, corretoras.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html, contato-chat.html |
|RF-008| Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração)  | Rafael, Victor | registro.html, meu-perfil.html, |
|RF-009| Permitir que o usuário consiga redefinir sua senha através de seu e-mail  | Nathan | esqueceu-senha.html |
|RF-010| Permitir que o usuário cadastrado gerencie suas fontes de receita   | Beatriz | gerenciar-receitas.html |
|RF-011| Permitir que o usuário cadastrado gerencie suas fontes de despesa  | Beatriz | gerenciar-despesas.html |
|RF-012| Emitir um relatório de despesas do mês  | Rafael | meu-relatorio.html |
|RF-013| Mostrar gráficos com o balanço do usuário   | Rafael | grafico-despesas.html |
|RF-014| Permitir que o usuário consiga suporte via chat   | Lucas Warley | contato-chat.html |
|RF-015| Permitir que o usuário tenha a confirmação de cadastro através do seu email| Victor |registro.html|
|RF-016| A aplicação deve enviar ao usuário email para redefinição de senha | Nathan | sucesso-recuperar-senha.html|
|RF-017| Permitir que o usuário cadastrado informe seus objetivos financeiros |Beatriz| gerenciar-metas.html |
|RF-018| A aplicação deve, com base na meta e renda, indicar ao usuário valor a ser poupado. | Beatriz|gerenciar-metas.html|

### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Responsável | Artefatos|
|-------|-------------------------|----|------|
|RNF-001| A aplicação deve se adaptar(responsividade) para rodar em qualquer dispositivo | Beatriz, Rafael, Victor, Nathan, Lucas Nery, Lucas Warley | index.html, corretoras.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html, contato-chat.html| 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  Beatriz, Rafael, Victor, Nathan, Lucas Nery, Lucas Warley | index.html, corretoras.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html, contato-chat.html| 
|RNF-003| A aplicação deve enviar ao usuário email de confirmação de cadastro | Victor | registro.html|
|RNF-004| A aplicação deve ser capaz de se integrar com outros sistemas de serviços financeiros  | Victor, Nathan | corretoras.html, index.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html, contato-chat.html |
|RNF-005| Ter um layout intuitivo e de fácil entendimento para os usuários  | Beatriz, Rafael, Victor, Nathan, Lucas Nery, Lucas Warley | index.html, corretoras.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html, contato-chat.html |
|RNF-006| A Aplicação precisa comunicar-se com API para obter dados econômicos (dolar e outros índices)   | Victor | index.html, corretoras.html, dicas-financeiras.html, dicas-investimentos.html, economia-domestica.html, esqueceu-senha.html, FAQ.html, gerenciar-despesas.html, gerenciar-metas.html, gerenciar-receitas.html, grafico-despesas.html, indicadores-economicos.html, login.html, meu-perfil.html, meu-relatorio.html, minha-conta.html, registro.html, sobre.html, sucesso-recuperar-senha.html, contato-chat.html |
|RNF-007| A Aplicação precisa comunicar-se com API para oferecer suporte via chat aos usuários   | Lucas Warley  | contato-chat.html |
|RNF-008| Os gráficos serão gerados a partir do uso de uma API   | Rafael | grafico-despesas.html|


## Descrição das estruturas:

## Registro do usuário 

|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id Usuário             | Numero (Inteiro)  | Identificador único do usuário           | 1                                              |
| Nome            | Texto  | Nome completo do usuário          | João da Silva                                             |
| E-mail         | Texto             | E-mail do usuário                        | joaodasilva@gmail.com                       |
| Telefone       | Numero (Inteiro)| Telefone do usuário                      |(31) 99998-9998                           |
| Senha       | Texto| Senha do usuário                     |abcd123@                           |
| Status da conta do usuário      | Booleano | Status ativo ou inativo da conta do usuário. Se true = ativo, se false = inativo|True                       |

## Registro de Receitas e Despesas

|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id Usuário             | Numero (Inteiro)  | Identificador único do usuário           | 1                                              |
| Tipo de entrada           | Texto | Identifica se usuário fez entrada de dados de receita ou despesa      | Despesa                                         |
| Nome da Receita       | Texto  | Título da receita ou despesa dado pelo usuário          | Salário                                             |
| Valor       | Número            | Valor da receita ou despesa adicionada                       | 4.000,00                   |
| Categoria       | Texto| Categoria da receita ou despesa adicionada                      |Salário                           |
| Data      | Número| Data da receita ou despesa                       | 01/01/2023                         |


## Registro de Metas Financeiras

|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id Usuário             | Numero (Inteiro)  | Identificador único do usuário           | 1                                              |
| Nome da Meta      | Texto  | Título da meta dado pelo usuário          | Viagem                                          |
| Valor Total      | Número            | Valor total necessário para a meta adicionada                       | 5.000,00                 |
| Valor que já possuo      | Número| Valor que usuário já possui separado para a meta estipulada                      |1.000,00                       |
