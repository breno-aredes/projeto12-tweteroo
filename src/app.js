import express from "express";
import cors from "cors";

//cria o servidor
const server = express();
//cors libera servidor para ser acessado por qualquer aplicação
server.use(cors());

//deleter infos dentros
const usuario = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
  {
    username: "PatrickEstrela",
    avatar:
      "https://www.torredevigilancia.com/wp-content/uploads/2020/08/patrick-star-wallpaper-810x608.jpg",
  },
];

//deleter infos dentros
const tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub",
  },
  {
    username: "PatrickEstrela",
    tweet: "eu não amo o hub",
  },
];

//server.get leva como parametros (nome da rota, (request, response) => {})
//request -> recebe informações na requisição
//response -> devolve a informação
//127.0.0.1:'servidor''/Nome da rota' = localhost:'servidor''/Nome da rota'//tudo atrasado

//apenas response do sing-up
server.get("/sing-up", (req, res) => {
  res.send(usuario);
});

//apenas response dos tweets
server.get("/tweets", (req, res) => {
  res.send(tweets);
});
//requisição dos tweets
server.get("/tweets/:username", (req, res) => {
  const user = req.params.username;

  //filtra apenas o usuario do tweet
  const userTweet = tweets.filter((U) => U.username === user);

  res.send(userTweet);
});

server.listen(5000, () => {
  console.log("servidor funcionou!");
});
