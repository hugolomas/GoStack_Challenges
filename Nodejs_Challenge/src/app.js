const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateRepositorieId(request, response, next){
  const { id } = request.params;

  if(!isUuid(id)){
    return response.status(400).json({ error: 'Invalid repositorie ID.'})
  }

  return next();
}

app.use("/repositories/:id", validateRepositorieId);


app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repositorie = { 
    id: uuid(), 
    title: title ? title : 'Desafio Node.js', 
    url: url ? url : 'https://github.com/hugolomas/GoStack_Challenges', 
    techs: techs ? techs : ['Node.js', '...'],
    likes: 0
  }

  repositories.push(repositorie);

  return response.json(repositorie);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositorieIndex = repositories.findIndex(repo => repo.id === id);

  if(repositorieIndex < 0){
    return response.status(400).json({ error: 'Repositorie not found.' });
  }

  const repositorie = {
    id,
    title,
    url, 
    techs,
    likes: repositories[repositorieIndex].likes
  };

  repositories[repositorieIndex] = repositorie;

  return response.json(repositorie);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  
  const repositorieIndex = repositories.findIndex(repo => repo.id === id);

  if(repositorieIndex < 0){
    return response.status(400).json({ error: 'Repositorie not found.' });
  }

  repositories.splice(repositorieIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositorieIndex = repositories.findIndex(repository => 
    repository.id === id);

  if(repositorieIndex < 0){
    return response.status(400).json({ error: 'Repositorie not found.' });
  }

  repositories[repositorieIndex].likes += 1;

  return response.json(repositories[repositorieIndex]);
});

module.exports = app;
