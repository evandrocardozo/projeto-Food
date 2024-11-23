import express from "express";
import cors from "cors";
import {db} from "./config/database.js";
import routeProduto from "./routes/route.produto.js";
import routePedido from "./routes/route.pedido.js";

const app = express();

app.use(express.json());
app.use(cors());

// rotas
app.use(routeProduto);
app.use(routePedido);

app.listen(3001, function(){
    console.log("servidor executando na porta 3001");
});
