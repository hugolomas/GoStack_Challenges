

<h3>🚀 Sobre o desafio</h3>
Nesse desafio, você deve criar uma aplicação para treinar o que você aprendeu até agora no Node.js!

Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

<h3> Rotas da aplicação</h3>
Agora que você já está com o template clonado, e pronto para continuar, você deve abrir o arquivo app.js, e completar onde não possui código com o código para atingir os objetivos de cada rota.

<b>POST /repositories :</b> A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

<b>GET /repositories:</b> Rota que lista todos os repositórios;

<b>PUT /repositories/:id :</b> A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

<b>DELETE /repositories/:id :</b> A rota deve deletar o repositório com o id presente nos parâmetros da rota;

<b>POST /repositories/:id/like :</b> A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;
