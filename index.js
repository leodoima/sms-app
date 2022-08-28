import express from "express";
import dotenv from "dotenv";

import routes from "./src/routes/routes.js";

// Definição de arquivo gerenciador de variáveis de ambiente
dotenv.config({ path: "./src/config/.env" });

const app = express();

app.use(express.json());
app.use(routes);


app.listen("3333");
