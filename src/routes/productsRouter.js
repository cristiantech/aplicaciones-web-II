const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get('/:year',(req, res) => {
  const {year} = req.params;
  const Date = {
    _year: ValidateYear(year),
  };
  res.send("Año Valido" + Date._year);
})

router.get('/:id',(req, res) => {
  const id = req.params.id
  res.send("Hola mundo" + id);
  console.log(id);
})

router.get('/',(req, res) => {
  const {limit} = req.query
  const size = limit || 10;
  const products = [];

  for (let i = 0; i < size; i++) {
    products.push(
      {
        name: faker.commerce.product(),
        precio: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      }
    );
  }
  res.json(products);
  console.log(id);
})

router.post('/',(req, res) => {
  const body = req.body;
  res.json({
    message: "create",
    data: body
  });

})
router.patch('/:id',(req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: "update",
    data: body,
    id
  });
})

router.delete('/:id',(req, res) => {
  const {id} = req.params;
  res.json({
    message: "delete",
    id
  });
})



function ValidateYear(year){
  if(year < 0){
    throw new Error('The Year is not valid');
  }
  return year
}

module.exports = router;
