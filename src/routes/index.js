const express = require('express');
const product = require('./productsRouter');


function apiRouter (app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', product)
}

module.exports =  apiRouter;
