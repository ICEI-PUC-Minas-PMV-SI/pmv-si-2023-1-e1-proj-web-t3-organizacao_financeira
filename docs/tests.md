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
## Plano de Testes de Software

## Plano de Testes de Software - Economy+

**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/registro.html. <br> 2) Usuário informa nome completo, email, telefone, senha, se possui mais de 18 anos e clica em “Registrar”.<br> 3) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. <br> 4) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RF-008
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso. 

**Caso de Teste** | **CT02 - Login do usuário**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/login.html. <br>	2) Usuário informa o email e senha cadastrados. <br> 3)	A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. <br> 4)	A aplicação direciona o usuário para a página Minha Conta (link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/minha-conta.html).
**Requisitos associados** | RF-008
**Resultado esperado** | Usuário consegue entrar e acessar a página Minha Conta
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Gerenciar Receitas**
 :--------------: | ------------
**Procedimento**  |Adicionar Receita <br> 1) Após ter feito o login, na página "Minha Conta", usuário clica em "Gerenciar Receitas" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/gerenciar-receitas.html. <br> 2)	Usuário clica em “Adicionar Receita” e preenche os dados “Nome da receita”, “Valor da receita (R$)” e clica em “Salvar”. <br> 3) A aplicação verifica se os dados são preenchidos corretamente e informa ao usuário caso não sejam. <br> 4) A aplicação armazena os dados e mostra na tela as receitas já adicionadas pelo usuário. <br> Editar Receita <br> 1) Após ter feito o login, na página "Minha Conta", usuário clica em "Gerenciar Receitas" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/gerenciar-receitas.html. 2) Usuário clica no ícone "editar" dentro de cada receita já salva, edita os valores desejados e clica em “Salvar”. <br> 3) A aplicação verifica se os dados são preenchidos corretamente. <br> 4) A aplicação armazena os dados e mostra na tela as receita atualizadas. <br> Excluir Receita <br> 1) Após ter feito o login, na página "Minha Conta", usuário clica em "Gerenciar Receitas" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/gerenciar-receitas.html. 2)Usuário clica no ícone "delete" dentro de cada receita já salva <br> 2)	 A aplicação remove a receita selecionada da tela e do Local Storage.
**Requisitos associados** | RF-010
**Resultado esperado** | Receita adicionada, editada ou excluída.
**Dados de entrada** | Inserção de dados válidos no formulário de receitas.
**Resultado obtido** | Sucesso. 

**Caso de Teste** | **CT04 - Gerenciar Despesas**
 :--------------: | ------------
**Procedimento**  |  Adicionar Despesa <br> 1) Após ter feito o login, na página "Minha Conta", usuário clica em "Gerenciar Despesas" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/gerenciar-despesas.html. <br> 2)	Usuário clica em “Adicionar Despesa” e preenche os dados “Nome da Despesa”, “Valor da Despesa (R$)”, seleciona a categoria da despesa e clica em “Salvar”. <br> 3)	 A aplicação verifica se os dados são preenchidos corretamente e informa ao usuário caso não sejam. <br> 4)	 A aplicação armazena os dados e mostra na tela as despesas já adicionadas pelo usuário. <br> Editar Despesa <br> 1) Após ter feito o login, na página "Minha Conta", usuário clica em "Gerenciar Despesas" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/gerenciar-despesas.html. 2) Usuário clica no ícone "editar" dentro de cada despesa já salva, edita os valores desejados e clica em “Salvar”. <br> 3)	 A aplicação verifica se os dados são preenchidos corretamente. <br> 4)	 A aplicação armazena os dados e mostra na tela as despesas atualizadas. <br> Excluir Despesa <br> 1) Após ter feito o login, na página "Minha Conta", usuário clica em "Gerenciar Despesas" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/gerenciar-despesas.html. 2)Usuário clica no ícone "delete" dentro de cada despesa já salva <br> 2)	 A aplicação remove a despesa selecionada da tela e do Local Storage.
**Requisitos associados** | RF-011
**Resultado esperado** | Despesa adicionada, editada ou excluída.
**Dados de entrada** | Inserção de dados válidos no formulário de despesas.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT05 - Gerenciar Metas**
 :--------------: | ------------
**Procedimento**  |  <br> Adicionar Meta <br> 1) Após ter feito o login, na página "Minha Conta", usuário clica em "Gerenciar Metas" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/gerenciar-metas.html. <br> 2)	Usuário clica em “Adicionar meta” e preenche os dados “Dê um nome para sua meta”, “Valor total da meta (R$)” e “Valor que já tenho disponível (R$)” clica em “Salvar”. <br> 3) A aplicação verifica se os dados são preenchidos corretamente e informa ao usuário caso não sejam. <br> 4) A aplicação armazena os dados, mostra na tela as metas já adicionadas pelo usuário e calcula quanto falta para que a meta do usuário seja atingida. <br> Editar Meta <br>  1) Após ter feito o login, na página "Minha Conta", usuário clica em "Gerenciar Metas" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/gerenciar-metas.html. 2)Usuário clica no ícone "editar" dentro de cada meta já salva, edita os valores desejados e clica em “Salvar”. <br> 3)	 A aplicação verifica se os dados são preenchidos corretamente. <br> 4)	 A aplicação armazena os dados e mostra na tela as metas atualizadas. <br> Excluir Meta <br> 1) Após ter feito o login, na página "Minha Conta", usuário clica em "Gerenciar Metas" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/gerenciar-metas.html. 2)	Usuário clica no ícone "delete" dentro de cada meta já salva <br> 3)	 A aplicação remove a meta selecionada da tela e do Local Storage.
**Requisitos associados** | RF-016 e RF-017
**Resultado esperado** | Meta adicionada, editada ou excluída.
**Dados de entrada** | Inserção de dados válidos no formulário de metas.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT06 - Alterar Senha**
 :--------------: | ------------
**Procedimento**  | 1) Após estar logado, na página "Minha Conta", usuário clica em "Meu perfil" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/meu-perfil.html. <br> 2)	Na página "Meu Perfil", usuário clica na opção "Alterar Senha", digita a sua senha atual e nova senha. <br> 3)	 A aplicação confere se o primeiro dado inserido corresponde ao que está salvo no Local Storage e informa ao usuário caso não seja. <br> 4) A aplicação substitui e armazena o dado atualizado.
**Requisitos associados** | RF-008
**Resultado esperado** | Senha alterada.
**Dados de entrada** | Inserção de dado válido para alteração de senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Excluir conta**
 :--------------: | ------------
**Procedimento**  | 1) Após estar logado, na página "Minha Conta", usuário clica em "Meu perfil" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/meu-perfil.html. 2)	Na página "Meu Perfil", usuário clica na opção “Excluir Conta”. <br> 3) Usuário confirma a sua senha para que a exclusão da conta seja feita. <br> 4) A aplicação verifica se o dado fornecido confere com o dado armazenado e informa caso não seja. <br> 5) A aplicação exclui os dados de cadastro do usuário e o direciona para a tela de login.
**Requisitos associados** | RF-008
**Resultado esperado** | Conta excluída.
**Dados de entrada** | Inserção de dado válido para exclusão da conta.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Contato para suporte**
 :--------------: | ------------
**Procedimento**  |  1) Em qualquer página da aplicação, usuário clica em "Contato" e é redirecionado, em uma nova janela, para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/contato.html <br>	2) Usuário preenche dados como nome completo, email e sua mensagem para o Economy+. <br> 3) A aplicação verifica se todos os campos foram preenchidos corretamente e informa caso não sejam. <br> 4) A aplicação armazena os dados inseridos e envia uma mensagem de confirmação na tela para o usuário.
**Requisitos associados** | RF-014
**Resultado esperado** | Mensagem enviada.
**Dados de entrada** | Inserção de dados válidos para envio de mensagem.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - Relatório e Gráfico**
 :--------------: | ------------
**Procedimento**  |  1) Após estar logado, na página "Minha Conta", usuário clica em "Exibir Relatório" e será redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/meu-relatorio.html. <br> 2) Usuário consegue vizualizar o relatório de despesas que teve durante o mês ou selecionar o mês que deseja vizualizar. Ao clicar em "Exibir Gráfico", na mesma página, usuário é redirecionado para o seguinte link: https://pmv-si-2023-1-e1-proj-web-t3-organizacao-financeira.vercel.app/html/grafico-despesas.html. Então, o usuário consegue ver de outra forma como foram divididos seus gastos durante o período (mês) selecionado. 
**Requisitos associados** | RF-012 e RF-013
**Resultado esperado** | Relatório e Gráfico gerados.
**Dados de entrada** | Inserção de dados válidos para exibição de reltório e gráfico.
**Resultado obtido** | SUcesso.


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
|*Caso de Teste*                                 |*CT-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-008 - Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração).|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1coDE10TK2F16eWTlJfraHiBwxBstXf22/view?usp=sharing | 

|*Caso de Teste*                                 |*CT-02 - Login do usuário*                                         |
|---|---|
|Requisito Associado |RF-008 - Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração).|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1LMiYN115l3l709kpoUnX6l46jfjYmAjo/view?usp=sharing | 

|*Caso de Teste*                                 |*CT-03 - Gerenciar Receitas*                                         |
|---|---|
|Requisito Associado |RF-010 - Permitir que o usuário cadastrado gerencie suas fontes de receita.|
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*CT-04 - Gerenciar Despesas*                                         |
|---|---|
|Requisito Associado |RF-011 - Permitir que o usuário cadastrado gerencie suas fontes de despesa.|
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*CT-05 - Gerenciar Metas*                                         |
|---|---|
|Requisito Associado |RF-016 - Permitir que o usuário cadastrado informe seus objetivos financeiros <br> RF-017 - A aplicação deve, com base na meta e renda, indicar ao usuário valor a ser poupado.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1XZeIq3qmMFaSWZrDHZ1cmRxfi861wSEi/view?usp=sharing | 

|*Caso de Teste*                                 |*CT-06 - Alterar Senha*                                         |
|---|---|
|Requisito Associado |RF-008 - Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração). |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1u9lKB0NkjQGcTyxrh1aSkU25Fz0d6_O7/view?usp=sharing | 

|*Caso de Teste*                                 |*CT-07 - Excluir Conta*                                         |
|---|---|
|Requisito Associado |RF-008 - Permitir que o usuário gerencie seu cadastro (cadastro, exclusão, consulta e alteração). |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/13WDneX5I4paLfZ_Sd6lMQDATes3sd82p/view?usp=sharing | 

|*Caso de Teste*                                 |*CT-08 - Contato para Suporte*                                         |
|---|---|
|Requisito Associado |RF-014 - Permitir que o usuário consiga suporte via formulário de mensagem. |
|Link do vídeo do teste realizado: | - | 

|*Caso de Teste*                                 |*CT-09 - Relatório e Gráfico*                                         |
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

## Cenários de Teste de Usabilidade - Economy+

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja ter acesso ao ambiente restrito do Economy+ para registrar e organizar as suas finanças. Faça o registro e login na apicação. |
| 2             | Você é uma pessoa que deseja ter um controle maior de seus gastos. Encontre no site o local para adicionar despesas e registre uma despesa. Em seguida, corrija o valor desta despesa.  |
| 3             | Você é uma pessoa que deseja poupar um valor para fazer uma viagem e precisa de um local para armazenar e atualizar o quanto já possui guardado. Encontre a área de gerenciar metas e crie uma meta, completando os campos corretamente. Em seguida, altere o valor que já possui para um número superior ao anteriormente digitado. |
| 4             | Você é uma pessoa que deseja ter um maior controle de suas receitas. Encontre no site o local para armazenar suas receitas e registre uma receita. Em seguida, exclua a receita adicionada.  |
| 5            | Você é uma pessoa que já possui acesso à área restrita do Economy+, está logado e deseja alterar a sua senha. Encontre no site a área para alteração de senha.  |
| 6           | Você é uma pessoa que deseja entrar em contato com a equipe Economy+. Encontre no site o local para enviar sua mensagem. Em seguida, envie qualquer mensagem simples para a equipe, preenchendo todos os campos. |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
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



