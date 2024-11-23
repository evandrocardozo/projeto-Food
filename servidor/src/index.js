import express from "express";
import cors from "cors";
import {db} from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/produtos", function(req, res){

    db.all('select * from produto', [], function(err, rows){
        if (err)
            return res.status(500).send("ocorreu erro: "+err.message);
        else
            return res.status(200).json(rows);
    });
    

});

app.listen(3001, function(){
    console.log("servidor executando na porta 3001");
});
