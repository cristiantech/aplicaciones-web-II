const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
  res.json([{
    student_id: 1010,
    firstName: "Cristian",
    Lastname: "Muñoz",
    mail: "cristian.munoz@iti.edu.ec"
  },{
    student_id: 1010,
    firstName: "Suldery",
    Lastname: "Arellano",
    mail: "suldery.arellano@iti.edu.ec"
  }
]);
})

// Get un Elmento
router.get("/:id", (req, res) => {
  const {id} = req.params;
  if (id === "999") {
    res.status(404).json({
      message: "404 not found",

    });
  }
  res.json({
    student_id: id,
    firstName: "Suldery",
    Lastname: "Arellano",
    mail: "suldery.arellano@iti.edu.ec"
  });
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Create",
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
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



