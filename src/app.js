import express from "express";
import cors from "cors";

//cria o servidor
const server = express();
//cors libera servidor para ser acessado por qualquer aplicação
server.use(cors());
//para ultilizar json
server.use(express.json());

//deleter infos dentros
const users = [
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

//post sign-up
server.post("/sign-up", (req, res) => {
  const loggedUser = req.body;
  users.push(loggedUser);

  res.send(users);
});

//response dos tweets (get)
server.get("/tweets", (req, res) => {
  res.send(tweets);
});

//post tweets
server.post("/tweets", (req, res) => {
  const newTweet = req.body;
  tweets.push(newTweet);
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
