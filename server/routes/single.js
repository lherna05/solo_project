const express = require('express');

const bugController = require("../controllers/bugController");

const router = express.Router();

// GET - single log
// router.get('?????', bugController.readLog, () => {
//     return res.status(200),json(/* info from middleware */)
// }); 

//DELETE - delete log 
// router.get('?????', bugController.deleteLog, (req, res) => {
//     return res.status(200).json(/* info from middleware */)
// }); 

// PATCH - update log 
// router.get('?????', bugController.updateLog, (req, res) => {
//     return res.status(200).json(/* info from middleware */)
// }); 

module.exports = router;