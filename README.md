Grupo Panceia Care

 1ESPH Felipe de Campos Mello Arnus (RM550923) - 1ESPH João Pedro Oliveira Chambrone (RM97857)  

Observações do Projeto:

WEB-DEVELOPMENT:

Excluimos a pasta Node Modules como pedido, para diminuir o peso do projeto, sendo necessário digitar "npm i" e depois "npm run dev" para rodar o projeto; para que o login funcione, é necessário digitar "npm run backend", pois os dados dele são consumidos por um json server "dados.json";

Para o projeto de WEB-DEVELOPMENT, desenvolvemos uma tela de login que contem validação feita com JavaScript, da qual confere as credenciais no banco de dados JSON server(dados.json) e só permite o login se elas forem encontradas no arquivo Além disso, o login só permite o envio de dados se estiver com os inputs preenchidos. Também fizemos com que o usuário só consiga acessar os conteúdos da página, após o login ser bem sucedido. Quando ele é redirecionado para a home, os dados (nome do usuario) são mostrados na tela com uma mensagem de boas vindas e um botão "SAIR" (LOGOUT).

CREDENCIAIS PARA LOGIN:
usuario = medico
senha = 12345678
    ou
usuario = paciente
senha = 123456789



FRONT-END:

Utilizamos scss em todo o projeto, onde os arquivos podem ser acessados pela pasta styles. Para as seções aprofundadas do projeto, foi utilizado o mesmo arquivo, pois o estilo é muito parecido, e ficariam muitos arquivos para a mesma coisa;

O projeto foi feito para ter responsividade a todas as telas de smartphones sejam eles da Apple, Samsung e etc, pois utilizamos media queries em praticamentes todos os arquivos de estilo;

Tantamos manter a melhor semântica possível

OBS: PARA ACESSAR AS SEÇÕES É NECESSÁRIO FAZER LOGIN COM AS CREDENCIAIS CITADAS ACIMA
