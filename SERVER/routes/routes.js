const express = require('express');

const bugController = require("../controllers/bugController");

const router = express.Router();

//GET - log  
router.get('/', bugController.getAllLogs, (req, res) => {
    console.log("WE HAVE ENTERED THE GET ALL GET REQUEST")
    return res.status(200).json([...res.locals.logs])
});

//POST - new log 
router.post('/', bugController.createLog, (req, res) => {
    console.log("WE HAVE ENTERED THE POST REQUEST FOR CREATE LOG");
    return res.status(200).json(res.locals.newLog)
}); 

module.exports = router;