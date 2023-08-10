import express from "express";
import { connection } from "./database/database";
import { route } from "./routes";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route);

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
