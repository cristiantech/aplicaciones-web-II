const express = require('express');
const studentRouter = require("./student.router");
// const subjetRouter = require("./subjets.router");

const apiRouter = (app) => {
  const router = express.Router();
  app.use('/api/v1', router)
    router.use('/students', studentRouter);
    // app.use('/subjets', subjetRouter);
}


module.exports = apiRouter;