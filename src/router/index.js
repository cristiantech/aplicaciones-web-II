const express = require('express');
const studentRouter = require("./student.router");
const subjetRouter = require("./subjets.router");
const { ro } = require('@faker-js/faker');

const apiRouter = (app) => {
  const router = express.Router();
  app.use('/api/v1', router)
    router.use('/students', studentRouter);
    router.use('/subjets', subjetRouter);
}



module.exports = apiRouter;