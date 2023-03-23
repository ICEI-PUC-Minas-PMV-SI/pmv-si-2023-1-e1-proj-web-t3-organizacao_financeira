# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

SCRUM PLANNING 
 1 - Ideia > 2 - Personas > 3 - Histórias de usuários > 4 - Selecionar o escopo do projeto > 5 - Revisar > 6 - Levantamento de requisitos e restrições > 7 - Iniciar codificação. 

## Personas

1. José Antônio tem 27 anos, é engenheiro civil, solteiro e ainda reside com os pais. Apesar de ter um bom salário e não ter grandes responsabilidades financeiras (em casa ajuda apenas com a conta de energia), sempre chega ao fim do mês sem dinheiro e a fatura do cartão de crédito só aumenta. Ele percebeu que um de seus colegas, que recebe o mesmo salário, consegue fazer sobrar dinheiro, mesmo sendo o responsável pelo sustento da família. José não tem ideia de como consegue gastar todo seu dinheiro e precisa de ajuda para descobrir isso e mudar a situação.

2. Carina é analista de marketing, solteira, e com 28 anos de idade. Ela tem uma renda mensal de, aproximadamente, R$ 4.000,00 e está buscando uma solução para organizar suas finanças e atingir um dos seus objetivos financeiros que seria guardar dinheiro para uma viagem ao exterior. Carina é uma pessoa organizada e gosta de planejar suas finanças com antecedência, mas tem dificuldades em manter a disciplina para registrar todos os gastos. Portanto, busca por uma solução que facilite a organização de suas finanças e que seja prática de usar, além de permitir acesso fácil e rápido a todas as informações sobre suas finanças.

3. João é um empresário casado, com dois filhos e 35 anos de idade. Ele tem uma renda mensal de, aproximadaente, R$ 20.000,00 e atualmente está procurando por uma aplicação que consiga ajuda-lo a organizar todas as dispesas da família. Sua principal necessidade é conseguir enxergar de maneira mais preciso o balança das contas no final do mês. Além disso, por ser uma pessoa bastante ocupada, João precisa que os mínimos detalhes das transações sejam exibidos de maneira cronologica, uma vez que o mesmo procura cortar gastos denecessários de baixo valor que formam uma bola de neve ao final do mês.

4. Daniel tem 68 anos, é aposentado, viúvo e mora sozinho em um apartamento. Ele trabalhou como funcionário público por 35 anos e sempre foi uma pessoa poupadora, mas agora que está aposentado, ele está preocupado com o seu futuro financeiro, especialmente com os gastos médicos que podem aumentar com a idade. Daniel quer garantir que seus recursos financeiros durem pelo resto de sua vida e que ele possa manter seu estilo de vida atual. Ele também gostaria de ter uma reserva para emergências médicas e outras eventualidades. Portanto, ele procura uma ferramenta que organize e armazene seus gastos mensais para alcançar seus objetivos financeiros.

5. Thiago tem 26 anos, é um empreendedor que fundou sua empresa de consultoria de TI. Ele está sempre trabalhando muito e tem pouco tempo livre. Desde cedo, Thiago sempre teve algumas dificuldades para administrar sua vida financeira. Hoje, sua empresa tem um bom faturamento e consegue receber um bom dinheiro. No futuro, ele planeja expandir suas operações. No entanto, ele não consegue ter uma ideia de como está seus gastos mês a mês. Ele está disposto a ter uma vida financeira mais organizada para que ele possa planejar melhor seu futuro e de sua empresa. Para isso, ele está procurando uma solução que o ajude com dicas financeiras e que permita que ele cadastre todo seu fluxo financeiro.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`   |PARA ... `MOTIVO/VALOR`                                     |
|--------------------|--------------------------------------|------------------------------------------------------------|
|José, usuário       | Registrar minhas despesas e receitas | Saber onde e como estou gastando meu dinheiro              |
|Administrador       | Alterar permissões                   | Permitir que possam administrar contas                     |
|Carina              | Registrar minhas despesas e receitas | Conseguir economizar e atingir seu objetivo                |
|Thiago              | Registrar todo meu fluxo financeiro  | Ter um controle das finanças e definir melhor meu futuro   |
|                    |                                      |                                                            |
|                    |                                      |                                                            |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
