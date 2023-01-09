import express from "express";
import cors from "cors";

//cria o servidor
const server = express();
//cors libera servidor para ser acessado por qualquer aplicação
server.use(cors());
//para ultilizar json
server.use(express.json());

const users = [];

const tweets = [];

//server.get leva como parametros (nome da rota, (request, response) => {})
//request -> recebe informações na requisição
//response -> devolve a informação
//127.0.0.1:'servidor''/Nome da rota' = localhost:'servidor''/Nome da rota'//tudo atrasado

//post sign-up
server.post("/sign-up", (req, res) => {
  const loggedUser = req.body;
  users.push(loggedUser);

  res.send(users);
});

//função para colocar o avatar nos tweets
function addAvatar(element) {
  for (let i = 0; i < element.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (element[i].username === users[j].username) {
        element[i].avatar = users[j].avatar;
      }
    }
  }
}

//response dos tweets (get)
server.get("/tweets", (req, res) => {
  if (tweets.length <= 10) {
    addAvatar(tweets);
    return res.send(tweets.reverse());
  } else {
    const LastTen = tweets.slice(tweets.length - 10, tweets.length);

    addAvatar(LastTen);
    res.send(LastTen.reverse());
  }
});

//post tweets
server.post("/tweets", (req, res) => {
  const newTweet = req.body;
  const user = req.headers.user;
  if (!users.find((u) => u.username === user)) {
    return res.sendStatus(401);
  }
  tweets.push(newTweet);

  res.send(tweets);
});

server.listen(5000);
