const express = require('express');
const bugController = require("../controllers/bugControllers");
const router = express.Router();

//GET - log  
router.get('/', bugController.getAllLogs, () => {
    return res.status(200),json(/* info from middleware */)
});

// GET - single log
router.get('?????', bugController.readLog, () => {
    return res.status(200),json(/* info from middleware */)
}); 

//POST - new log 
router.post('?????', bugController.createLog, () => {
    return res.status(200),json(/* info from middleware */)
}); 

//DELETE - delete log 
router.get('?????', bugController.deleteLog, () => {
    return res.status(200),json(/* info from middleware */)
}); 

// PATCH - update log 
router.get('?????', bugController.updateLog, () => {
    return res.status(200),json(/* info from middleware */)
}); 

module.exports = router;