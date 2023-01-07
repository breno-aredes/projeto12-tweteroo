import express from "express";
import cors from "cors";

const server = express();

//cors libera o acesso para as requisições
server.use(cors());

//server.get leva como parametros (nome da rota, (request, response) => {})
//request -> recebe informações na requisição
//response -> devolve a informação
//127.0.0.1:'servidor''/Nome da rota' = localhost:'servidor''/Nome da rota'

server.get("/sing-up", (req, res) => {
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

  res.send(usuario);
  console.log(req.params);
});

server.get("/tweets", (req, res) => {
  const tweet = [
    {
      username: "bobesponja",
      tweet: "eu amo o hub",
    },
    {
      username: "PatrickEstrela",
      tweet: "eu não amo o hub",
    },
  ];

  res.send(tweet);

  console.log(req);
});

server.listen(5000, () => {
  console.log("servidor funcionou");
});
