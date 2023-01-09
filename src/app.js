import express from "express";
import cors from "cors";

//cria o servidor
const server = express();
//cors libera servidor para ser acessado por qualquer aplicação
server.use(cors());
//para ultilizar json
server.use(express.json());

//deleter infos dentros
const users = [];

//deleter infos dentros
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

//response dos tweets (get)
server.get("/tweets", (req, res) => {
  if (tweets.length <= 10) {
    return res.send(tweets.reverse());
  } else {
    const LastTen = tweets.slice(tweets.length - 10, tweets.length);

    res.send(LastTen.reverse());
  }
});

//post tweets
//res.sendStatus(401) para usuario não autorizado.
server.post("/tweets", (req, res) => {
  const newTweet = req.body;
  tweets.push(newTweet);
  const user = req.headers.user;
  if (!users.find((u) => u.username === user)) {
    return res.sendStatus(401);
  }
  console.log(user);
  res.send(tweets);
});

//requisição dos tweets
// server.get("/tweets/:username", (req, res) => {
//   const s = req.params.username;

//   //filtra apenas o usuario do tweet
//   const userTweet = tweets.filter((U) => U.username === s);

//   res.send(userTweet);
// });

server.listen(5000, () => {
  console.log("servidor funcionou!");
});
