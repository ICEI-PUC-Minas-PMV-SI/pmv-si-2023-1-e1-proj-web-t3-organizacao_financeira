# Especificações do Projeto

## Personas

1. José Antônio tem 27 anos, é engenheiro civil, solteiro e ainda reside com os pais. Apesar de ter um bom salário e não ter grandes responsabilidades financeiras (em casa ajuda apenas com a conta de energia), sempre chega ao fim do mês sem dinheiro e a fatura do cartão de crédito só aumenta. Ele percebeu que um de seus colegas, que recebe o mesmo salário, consegue fazer sobrar dinheiro, mesmo sendo o responsável pelo sustento da família. José não tem ideia de como consegue gastar todo seu dinheiro e precisa de ajuda para descobrir isso e mudar a situação.

2. Carina é analista de marketing, solteira, e com 28 anos de idade. Ela tem uma renda mensal de, aproximadamente, R$ 4.000,00 e está buscando uma solução para organizar suas finanças e atingir um dos seus objetivos financeiros que seria guardar dinheiro para uma viagem ao exterior. Carina é uma pessoa organizada e gosta de planejar suas finanças com antecedência, mas tem dificuldades em manter a disciplina para registrar todos os gastos. Portanto, busca por uma solução que facilite a organização de suas finanças e que seja prática de usar, além de permitir acesso fácil e rápido a todas as informações sobre suas finanças.

3. Daniel tem 68 anos, é aposentado, viúvo e mora sozinho em um apartamento. Ele trabalhou como funcionário público por 35 anos e sempre foi uma pessoa poupadora, mas agora que está aposentado, ele está preocupado com o seu futuro financeiro, especialmente com os gastos médicos que podem aumentar com a idade. Daniel quer garantir que seus recursos financeiros durem pelo resto de sua vida e que ele possa manter seu estilo de vida atual. Ele também gostaria de ter uma reserva para emergências médicas e outras eventualidades. Portanto, ele procura uma ferramenta que organize e armazene seus gastos mensais para alcançar seus objetivos financeiros.

4. Thiago tem 26 anos, é um empreendedor que fundou sua empresa de consultoria de TI. Ele está sempre trabalhando muito e tem pouco tempo livre. Desde cedo, Thiago sempre teve algumas dificuldades para administrar sua vida financeira. Hoje, sua empresa tem um bom faturamento e consegue receber um bom dinheiro. No futuro, ele planeja expandir suas operações. No entanto, ele não consegue ter uma ideia de como está seus gastos mês a mês. Ele está disposto a ter uma vida financeira mais organizada para que ele possa planejar melhor seu futuro e de sua empresa. Para isso, ele está procurando uma solução que o ajude com dicas financeiras e que permita que ele cadastre todo seu fluxo financeiro.

5. Carla tem 25 anos, é estagiária em uma empresa de tecnologia e está em busca de um futuro financeiro estável e equilibrado. Ela é solteira, mora sozinha em um apartamento alugado e tem um salário baixo, o que a coloca em uma situação financeira delicada. Apesar de ter uma vida simples, Carla tem algumas dívidas acumuladas devido à falta de planejamento financeiro. Ela costuma gastar com compras impulsivas e entretenimento, o que a impede de economizar dinheiro ou investir em algo. Além disso, ela ainda não possui uma reserva financeira de emergência para situações inesperadas. Ela tem como objetivo controlar seus gastos, diminuir suas dívidas e começar a investir em um futuro financeiro mais estável e seguro.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`   |PARA ... `MOTIVO/VALOR`                                     |
|--------------------|--------------------------------------|------------------------------------------------------------|
|José, Carina, Daniel, Thiago e Carla                | Registrar minhas despesas e receitas | Saber onde e como estou gastando meu dinheiro              |
|Carina, Daniel      | Definir objetivos e metas de economia | Atingir os objetivos financeiros  |
|José, Thiago, Carla         | Ter acesso a dicas práticas sobre finanças | Aplicar no meu dia-a-dia aquilo que as dicas recomendam para atingir o controle financeiro               |
|Daniel, Carla              | Saber quanto deve poupar mensalmente | Criar uma reserva de emergência                            |
|Carla                | Planejamento financeiro              | Economizar e pagar suas dívidas    

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário visitante acesse uma página com dicas financeiras | ALTA |  |
|RF-002| A aplicação deverá ter uma página que apresente e responda perguntas frequentes - FAQ (Frequently Asked Questions) | MÉDIA |  |
|RF-003| A aplicação deverá ter uma página que apresente informações de investimentos | ALTA |  |
|RF-004| A aplicação deverá ter uma página que apresente dicas de economia doméstica   | ALTA | |
|RF-005| A aplicação deverá ter uma página com sugestões de corretoras de investimentos | MÉDIA | |
|RF-006| A aplicação deverá ter uma página com informações sobre indicadores econômicos  | ALTA | |
|RF-007| Permitir que o usuário visitante veja a cotação do Dólar do dia  | ALTA | |
|RF-008| Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração)  | ALTA | |
|RF-009| Permitir que o usuário consiga redefinir sua senha através de seu e-mail  | ALTA | |
|RF-010| Permitir que o usuário cadastrado gerencie suas fontes de receita   | ALTA | |
|RF-011| Permitir que o usuário cadastrado gerencie suas fontes de despesa  | ALTA | |
|RF-012| Emitir um relatório de despesas do mês  | ALTA | |
|RF-013| Mostrar gráficos com o balanço do usuário   | MÉDIA | |
|RF-014| Permitir que o usuário consiga suporte via formulário de mensagem  | MÉDIA | |
|RF-015| Permitir que o usuário tenha a confirmação de cadastro através do seu email|  MÉDIA |
|RF-016| Permitir que o usuário cadastrado informe seus objetivos financeiros |  ALTA |
|RF-017| A aplicação deve, com base na meta e renda, indicar ao usuário valor a ser poupado. |  ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve se adaptar(responsividade) para rodar em qualquer dispositivo | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| A aplicação deve enviar ao usuário email de confirmação de cadastro |  MÉDIA |
|RNF-004| A aplicação deve ser capaz de se integrar com outros sistemas de serviços financeiros  | MÉDIA | |
|RNF-005| Ter um layout intuitivo e de fácil entendimento para os usuários  | ALTA | |
|RNF-006| A Aplicação precisa comunicar-se com API para obter dados econômicos (dolar e outros índices)   | ALTA | |
|RNF-007| A Aplicação precisa comunicar-se com API para oferecer suporte via chat aos usuários   | MÉDIA| |
|RNF-008| Os gráficos serão gerados a partir do uso de uma biblioteca | MÉDIA| |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação só aceitará cadastrar usuários maiores de 18 anos |
|02| A aplicação só apresentará relatórios e balanço se o usuário cadastrar pelo menos 01 receita e 01 despesa |
|03| O prazo de entrega final é na data 12/07/2023   |
|04| Não teremos atendimento de suporte via telefone       |
|05| Acesso somente via navegadores atualizados            |
