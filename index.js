const express = require('express');
const { faker } = require('@faker-js/faker');
const apiRouter = require('./src/routes')

const app = express();
const port = 3001;
app.use(express.json());
app.get('/', (req, res) => {
  res.send("Hola mundo");
})


try {
  apiRouter(app);
} catch (e) {
  console.error(e.message);
}
console.log("Hola");
app.listen(port, () => {
  console.log(`Conectado al puerto ${port}`);
});

