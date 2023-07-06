// Lammar a la instanacia de express
const express = require("express");
const apiRouter = require("./src/router");
// Creando la aplicación en express
const app = express();
const port = 3006;

app.use(express.json());

//Routing
app.get("/", (req, res) => {
   res.send("Hola Mundo");
});




apiRouter(app);

// Lisening
app.listen(port, () => {
  console.log(`Lisening in the port ${port}`)
});
