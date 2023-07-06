const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
  res.json({
    subjet_id: 1234,
    name_subjets: "Aplicaciones web II",
  });
});




module.exports = router;