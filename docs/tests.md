# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

# Teste de Software

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
**Resultado obtido** | Sucesso.


## Registro dos Testes de Software

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
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1SH2LxYZFb7zoX232-_N-3lkFFhQWrNFZ/view?usp=sharing | 

|*Caso de Teste*                                 |*CT-04 - Gerenciar Despesas*                                         |
|---|---|
|Requisito Associado |RF-011 - Permitir que o usuário cadastrado gerencie suas fontes de despesa.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1X-jU11EIfi888aeECJ9N18-tatV9yCdf/view?usp=sharing | 

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
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1xkXBqn7xiWPabxHlUNEnqLOMB3gegGiH/view?usp=sharing | 

|*Caso de Teste*                                 |*CT-09 - Relatório e Gráfico*                                         |
|---|---|
|Requisito Associado |RF-012 - Emitir um relatório de despesas do mês; RF-013 - Mostrar gráficos com o balanço do usuário   |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1S7qAyfJn3hfUQaM-xYFM8n7H9PBPyNe9/view?usp=sharing | 

## Avaliação dos Testes de Software

Considerando os resultados demonstrados acima, foi possível constatar que a aplicação web apresenta bons resultados quanto ao resultado obtido. Todos os casos de teste propostos obtiveram sucesso. Como pontos fortes, podemos destacar a implementação das funcionalidades dinâmicas como um todo e restrição de páginas que o usuário somente pode ter acesso quando está registrado e logado. Entretanto, o grupo teve como falha a implementação de funcionalidades de recuperação de senha por email (RF-009) e confirmação de cadastro por email (RF-015). O grupo pretende encontrar outras alternativas para a implementação das funcionalidades citadas. Também durante a aplicação dos testes de Software, a equipe encontrou alguns erros de implementação e foram prontamente corrigidos.

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos seis cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas seis pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em minutos e segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

## Cenários de Teste de Usabilidade - Economy+

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja ter acesso ao ambiente restrito do Economy+ para registrar e organizar as suas finanças. Faça o registro e login na apicação. |
| 2             | Você é uma pessoa que deseja ter um controle maior de seus gastos. Encontre no site o local para adicionar despesas e registre uma despesa. Em seguida, corrija o valor desta despesa. Encontre e veja o relatório de despesas na aplicação.  |
| 3             | Você é uma pessoa que deseja poupar um valor para fazer uma viagem e precisa de um local para armazenar e atualizar o quanto já possui guardado. Encontre a área de gerenciar metas e crie uma meta, completando os campos corretamente. Em seguida, altere o valor que já possui para um número superior ao anteriormente digitado. |
| 4             | Você é uma pessoa que deseja ter um maior controle de suas receitas. Encontre no site o local para armazenar suas receitas e registre uma receita. Em seguida, exclua a receita adicionada.  |
| 5            | Você é uma pessoa que já possui acesso à área restrita do Economy+, está logado e deseja alterar a sua senha. Encontre no site a área para alteração de senha.  |
| 6           | Você é uma pessoa que deseja entrar em contato com a equipe Economy+. Encontre no site o local para enviar sua mensagem. Em seguida, envie qualquer mensagem simples para o Economy+, preenchendo todos os campos. |

## Registro de Testes de Usabilidade - Economy +

Cenário 1: Você é uma pessoa que deseja ter acesso ao ambiente restrito do Economy+ para registrar e organizar as suas finanças. Faça o registro e login na apicação.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1      | SIM             |             5       |      44 segundos            |
| 2         | SIM         |            4,0       |  3 minutos e 20 segundos               |
| 3      | SIM         |           5        | 1 minuto e 53 segundos                |
| 4       | SIM         |          4,5         |    31 segundos             |
| 5      |  SIM        |           5        |       1 minuto e 20 segundos          |
| 6    |    SIM          |   5                | 46 segundos                |
|  |  |  |  |
| **Média**     |  100%        |       4.75        |      1 minuto e 35 segundos                    |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 27 segundos|


    Comentários dos usuários: - Usuário 2: Tive dificuldade de encontrar o link para registro.
    Usuário 4: Botão de registro poderia estar mais visível.

Cenário 2: Você é uma pessoa que deseja ter um controle maior de seus gastos. Encontre no site o local para adicionar despesas e registre uma despesa. Em seguida, corrija o valor desta despesa. Encontre e veja o relatório de despesas na aplicação.

| Usuário  | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1      | SIM       |   4,5                 |     2 minutos              |
| 2      |  SIM   |         5          |        1 minuto e 23 segundos         |
| 3       | SIM            |  5                 |      45 segundos           |
| 4      | SIM       |        4,5            |      52 segundos            |
| 5     |  SIM   |        4,5           |     1 minuto e 30 segundos            |
| 6      |  SIM          |    4,5               |  1 minuto e 10 segundos               |
|  |  |  |  |
| **Média**     |  100%         |       4,7        |        1 minuto e 16 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 24 segundos |


    Comentários dos usuários: - Usuário 1: Gostaria de acessar o relatório dentro da página de despesas.
    Usuário 4: Senti falta de um link para voltar para a página anterior. Tive de clicar somente em "Minha Conta".
    Usuário 5: Sugestão: colocar botão para relatório na página que gerencio minhas despesas.
    Usuário 6: Foi difícil encontrar o botão de voltar para o menu da "Minha Conta".

Cenário 3: Você é uma pessoa que deseja poupar um valor para fazer uma viagem e precisa de um local para armazenar e atualizar o quanto já possui guardado. Encontre a área de gerenciar metas e crie uma meta, completando os campos corretamente. Em seguida, altere o valor que já possui para um número superior ao anteriormente digitado.

|Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1        | SIM             |        5            |    40 segundos              |
| 2       |    SIM         |          5         |      49 segundos           |
| 3      |   SIM          |          5         |     33 segundos            |
| 4      |   SIM           |          4,5          |    39 segundos              |
| 5       |   SIM          |          5         |     1 minuto            |
| 6       |     SIM        |         5          |     38 segundos            |
|  |  |  |  |
| **Média**     |   100%       |        4,91       |      43 segundos                    |
| **Tempo para conclusão pelo especialista** | SIM  | 5 | 14 segundos |


    Comentários dos usuários: - Usuário 4: A única dificuldade que encontrei foi perceber que dentro do botão de adicionar meta, somente posso clicar no + e não em todo retângulo verde.

Cenário 4: Você é uma pessoa que deseja ter um maior controle de suas receitas. Encontre no site o local para armazenar suas receitas e registre uma receita. Em seguida, exclua a receita adicionada.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1     |    SIM          |         5           |      31 segundos            |
| 2      |   SIM          |          5         |     49 segundos            |
| 3      |    SIM         |          5         |       15 segundos          |
| 4       |     SIM         |         5           |    18 segundos              |
| 5      |    SIM         |        5           |      28 segundos           |
| 6       |    SIM         |           5        |   29 segundos              |
|  |  |  |  |
| **Média**     |    100%     |      5         |       28 segundos                   |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 10 segundos |


    Comentários dos usuários: Usuário 4: o "Meu Perfil" poderia abrir uma lista suspensa na página minha conta, com a opção de mudar a senha sem redirecionar para outra página. Senti falta do "confirme a sua nova senha".

Cenário 5: Você é uma pessoa que já possui acesso à área restrita do Economy+, está logado e deseja alterar a sua senha. Encontre no site a área para alteração de senha.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1    |  SIM            |          5          | 9 segundos                 |
| 2       |  SIM           |         5          |    22 segundos             |
| 3    |  SIM           |         5          |      14 segundos           |
| 4     |  SIM            |        5            |     19 segundos             |
| 5    |  SIM           |         5          |         18 segundos        |
|6     |     SIM        |       5            |    27 segundos             |
|  |  |  |  |
| **Média**     |      100%    |     5      |     18 segundos                     |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8 segundos |


    Comentários dos usuários: -

Cenário 6: Você é uma pessoa que deseja entrar em contato com a equipe Economy+. Encontre no site o local para enviar sua mensagem. Em seguida, envie qualquer mensagem simples para o Economy+, preenchendo todos os campos.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1     | SIM             |     5               |       17 segundos           |
| 2     |  SIM           |    5              |     51 segundos            |
| 3   |  SIM           |      5             |     36 segundos            |
| 4      |  SIM            |      5              |     26 segundos             |
| 5|  SIM           |        5           |      32 segundos           |
| 6     |  SIM           |        5           |          38 segundos       |
|  |  |  |  |
| **Média**     |    100%      |            5   |           33 segundos               |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 11 segundos |


    Comentários dos usuários: - 

## Avaliação dos Testes de Usabilidade

Levando em consideração os resultados obtidos com os testes de usabilidade, foi possível constatar que, de forma geral, a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários. Todos os cenários foram integralmente concluídos por todos. No entanto, foi possível perceber que alguns usuários encontraram dificuldades pontuais em determinados cenários. Em destaque, foi possível perceber uma maior dificuldade em encontrar a página de Registro, como apontaram os Usuários 1 e 4. Há também comentários relacionados à falta de um botão "voltar" dentro das páginas de acesso restrito. Sendo assim, alguns usuários relataram que tiveram que clicar em "Minha Conta" para voltar à página desejada. Por fim, foi também observado e pontuado por alguns usuários que facilitaria o acesso ao relatório e gráfico se houvesse um link dentro da página de despesas. As médias de avaliações de cada cenários estão sempre entre 4 (bom) e 5 (ótimo).

Quando são considerados os tempos de cada usuário para a conclusão de cada tarefa, foi possível perceber que alguns usuários tiveram maior dificuldade nos primeiros cenários. Uma hipótese levantada seria em função de ser o primeiro contato do usuário com a aplicação; outra se dá pela dificuldade de encontrar o link de registro. Nos outros cenários, os testes foram concluídos em um período de tempo menor. Entretanto, há ainda uma discrepância quando comparados ao tempo gasto pelo especialista em cada cenário. Isso se deve ao fato de que o desenvolvedor já estava em contato com a aplicação previamente.  

Considerando a diferença de tempo em alguns cenários, assim como os comentários feitos pelos usuários durante a aplicação dos testes de usabilidade, o grupo entende que algumas melhorias podem ser feitas para que a satisfação do usuário seja aumentada durante o uso da aplicação. Há também sugestões levantadas pelos usuários que participaram dos testes que serão levadas em consideração para a melhoria do projeto.




