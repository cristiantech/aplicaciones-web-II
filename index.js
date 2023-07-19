// Lammar a la instanacia de express
const express = require("express");
const ApiRouter = require("./src/router");
// Creando la aplicación en express
const app = express();
const port = 3006;

app.use(express.json());

//Path home
app.get("/", (req, res) => {
   res.send("Bienvenidos a aplicaciones web II");
});



ApiRouter(app);

// Lisening
app.listen(port, () => {
  console.log(`Lisening in the port ${port}`)
});
