const express = require('express');
const Student = require('../services/student.service');
const router = express.Router();

const service = new Student();

// Find All Studente
router.get("/", (req, res) => {
  const allStudent = service.find();
  res.json(allStudent);
})

// Find one student
router.get("/:id", (req, res) => {
    const {id} = req.params;
    const oneStudent = service.findOne(parseInt(id));
    console.log(id)
    res.json(oneStudent);
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Create",
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const {id} = req.params; // index de mi lista
  const body = req.body; // los cambios a implementar
  res.json({
    message: "Update",
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: "Delete",
    id,
  });
});


module.exports = router;



