# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, email, senha, Estado e Cidade e clica no botão "Continuar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte 2 do cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa gênero, seu tipo de usuário (cuidador ou comum), data de nascimento e clica em criar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login. <br>
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

## Plano de Testes de Software - Economy+

**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome completo, email, telefone, senha, se possui mais de 18 anos e clica em “Registrar”.<br> 2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. <br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RF-008
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso. 

**Caso de Teste** | **CT02 - Login do usuário**
 :--------------: | ------------
**Procedimento**  | 1)	Usuário informa o email e senha cadastrados. <br> 2)	A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. <br> 3)	A aplicação direciona o usuário para a página Minha Conta.
**Requisitos associados** | RF-008
**Resultado esperado** | Usuário consegue entrar e acessar a página Minha Conta
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Adicionar Receita**
 :--------------: | ------------
**Procedimento**  | 1)	Usuário clica em “Adicionar Receita” e preenche os dados “Nome da receita”, “Valor da receita (R$)” e clica em “Salvar”. <br> 2)	 A aplicação verifica se os dados são preenchidos corretamente e informa ao usuário caso não sejam. <br> 3)	 A aplicação armazena os dados e mostra na tela as receitas já adicionadas pelo usuário.
**Requisitos associados** | RF-010
**Resultado esperado** | Receita adicionada
**Dados de entrada** | Inserção de dados válidos no formulário de receitas.
**Resultado obtido** | Sucesso. 

**Caso de Teste** | **CT04 - Editar Receita**
 :--------------: | ------------
**Procedimento**  | 1)	Usuário clica no ícone "editar" dentro de cada receita já salva, edita os valores desejados e clica em “Salvar”. <br> 2)	 A aplicação verifica se os dados são preenchidos corretamente. <br> 3)	 A aplicação armazena os dados e mostra na tela as receita atualizadas.
**Requisitos associados** | RF-010
**Resultado esperado** | Receita editada
**Dados de entrada** | Inserção de dados válidos no formulário de receitas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Excluir Receita**
 :--------------: | ------------
**Procedimento**  | 1)	Usuário clica no ícone "delete" dentro de cada receita já salva <br> 2)	 A aplicação remove a receita selecionada da tela e do Local Storage.
**Requisitos associados** | RF-010
**Resultado esperado** | Receita excluída.
**Dados de entrada** | -
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Adicionar Despesa**
 :--------------: | ------------
**Procedimento**  |  -
**Requisitos associados** | RF-011
**Resultado esperado** | Despesa adicionada.
**Dados de entrada** | Inserção de dados válidos no formulário de despesas.
**Resultado obtido** | - 

**Caso de Teste** | **CT07 - Editar Despesa**
 :--------------: | ------------
**Procedimento**  | -
**Requisitos associados** | RF-011
**Resultado esperado** | Despesa editada.
**Dados de entrada** | Inserção de dados válidos no formulário de despesas.
**Resultado obtido** | - 

**Caso de Teste** | **CT08 - Excluir Despesa**
 :--------------: | ------------
**Procedimento**  | 1)	Usuário clica no ícone "delete" dentro de cada despesa já salva <br> 2)	 A aplicação remove a despesa selecionada da tela e do Local Storage.
**Requisitos associados** | RF-011
**Resultado esperado** | Despesa excluída.
**Dados de entrada** | -
**Resultado obtido** | - 

**Caso de Teste** | **CT09 - Adicionar Meta**
 :--------------: | ------------
**Procedimento**  |  1)	Usuário clica em “Adicionar meta” e preenche os dados “Dê um nome para sua meta”, “Valor total da meta (R$)” e “Valor que já tenho disponível (R$)” clica em “Salvar”. <br>2) A aplicação verifica se os dados são preenchidos corretamente e informa ao usuário caso não sejam. <br> 3) A aplicação armazena os dados, mostra na tela as metas já adicionadas pelo usuário e calcula quanto falta para que a meta do usuário seja atingida.
**Requisitos associados** | RF-016 e RF-017
**Resultado esperado** | Meta adicionada.
**Dados de entrada** | Inserção de dados válidos no formulário de metas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 - Editar Meta**
 :--------------: | ------------
**Procedimento**  | 1)	Usuário clica no ícone "editar" dentro de cada meta já salva, edita os valores desejados e clica em “Salvar”. <br> 2)	 A aplicação verifica se os dados são preenchidos corretamente. <br> 3)	 A aplicação armazena os dados e mostra na tela as metas atualizadas.
**Requisitos associados** | RF-016 e RF-017
**Resultado esperado** | Meta editada.
**Dados de entrada** | Inserção de dados válidos no formulário de metas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT11 - Excluir Meta**
 :--------------: | ------------
**Procedimento**  | 1)	Usuário clica no ícone "delete" dentro de cada meta já salva <br> 2)	 A aplicação remove a meta selecionada da tela e do Local Storage.
**Requisitos associados** | RF-016 e RF-017
**Resultado esperado** | Meta excluída.
**Dados de entrada** | -
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT12 - Alterar Senha**
 :--------------: | ------------
**Procedimento**  | 1)	Na página "Meu Perfil", usuário clica na opção "alterar senha", digita a sua senha atual e nova senha. <br> 2)	 A aplicação confere se o primeiro dado inserido corresponde ao que está salvo no Local Storage e informa ao usuário caso não seja. <br> 3) A aplicação substitui e armazena o dado atualizado.
**Requisitos associados** | RF-008
**Resultado esperado** | Senha alterada.
**Dados de entrada** | Inserção de dado válido para alteração de senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT13 - Excluir conta**
 :--------------: | ------------
**Procedimento**  |  1)	Usuário entra no ambiente “Meu Perfil” e clica em “Excluir Conta”. <br> 2) Usuário confirma a sua senha para que a exclusão da conta seja feita. <br> 3) A aplicação verifica se o dado fornecido confere com o dado armazenado e informa caso não seja. <br> 4) A aplicação exclui os dados de cadastro do usuário e o direciona para a tela de login.
**Requisitos associados** | RF-008
**Resultado esperado** | Conta excluída.
**Dados de entrada** | Inserção de dado válido para exclusão da conta.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT14 - Contato para suporte**
 :--------------: | ------------
**Procedimento**  |  1)	Usuário entra na página "Contato” e preenche dados como nome completo, email e sua mensagem para o Economy+. <br> 2)A aplicação verifica se todos os campos foram preenchidos corretamente e informa caso não seja. <br> 4) A aplicação armazena os dados inseridos e envia uma mensagem de confirmação na tela para o usuário.
**Requisitos associados** | RF-014
**Resultado esperado** | Mensagem enviada.
**Dados de entrada** | Inserção de dados válidos para envio de mensagem.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT15 - Relatório e Gráfico**
 :--------------: | ------------
**Procedimento**  |  -
**Requisitos associados** | RF-012 e RF-013
**Resultado esperado** | Relatório e Gráfico gerados.
**Dados de entrada** | Inserção de dados válidos para exibição de reltório e gráfico.
**Resultado obtido** | - 

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta*                                         |
|---|---|
|Requisito Associado | RF-008 - |
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

## Registro dos Testes de Software - Economy+
|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-008 - Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração).|
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado |RF-008 - Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração).|
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*TC-03 - Adicionar Receita, Editar Receita e Excluir Receita*                                         |
|---|---|
|Requisito Associado |RF-010 - Permitir que o usuário cadastrado gerencie suas fontes de receita.|
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*TC-04 - Adicionar Despesa, Editar Despesa e Excluir Despesa*                                         |
|---|---|
|Requisito Associado |RF-011 - Permitir que o usuário cadastrado gerencie suas fontes de despesa.|
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*TC-05 - Adicionar Meta, Editar Meta e Excluir Meta*                                         |
|---|---|
|Requisito Associado |RF-016 - Permitir que o usuário cadastrado informe seus objetivos financeiros <br> RF-017 - A aplicação deve, com base na meta e renda, indicar ao usuário valor a ser poupado.|
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*TC-06 - Alterar Senha*                                         |
|---|---|
|Requisito Associado |RF-008 - Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração). |
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*TC-07 - Excluir Conta*                                         |
|---|---|
|Requisito Associado |RF-008 - Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração). |
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*TC-08 - Contato para Suporte*                                         |
|---|---|
|Requisito Associado |RF-014 - Permitir que o usuário consiga suporte via formulário de mensagem. |
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*TC-09 - Relatório e Gráfico*                                         |
|---|---|
|Requisito Associado |RF-012 - Emitir um relatório de despesas do mês; RF-013 - Mostrar gráficos com o balanço do usuário   |
|Link do vídeo do teste realizado: | - | 

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



