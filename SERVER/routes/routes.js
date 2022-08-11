const express = require('express');

const bugController = require("../controllers/bugController");

const router = express.Router();

//GET - all logs 

//FORMAT FOR GET ALL GET REQ: 
//no body -- loads upon page loading
console.log("HITTING ROUTES FOLDER")

router.get('/getAll', bugController.getAllLogs, (req, res) => {
    console.log("WE HAVE ENTERED THE GET ALL GET REQUEST");
    return res.status(200).json([...res.locals.logs]);
});

//POST - new log 

//FORMAT FOR POST REQ:
// {
//     "title": "Patch Req Error",
//     "resolved": "true",
//     "note": "Not executing past queryStr const. Resolved: need to use single quotes in the queryStr."
//  }

router.post('/postOne', bugController.createLog, (req, res) => {
    console.log("WE HAVE ENTERED THE POST REQUEST FOR CREATE LOG");
    return res.status(200).json(res.locals.newLog);
}); 

// GET - single log

//FORMAT FOR SINGLE LOG GET REQ: 
// {
//     "id": "13"
//  }

router.get('/single', bugController.readSingleLog, (req, res) => {
    console.log('WE HAVE ENTERED THE SINGLE LOG GET REQ');
    return res.status(200).json(res.locals.singleLog);
}); 

//DELETE - delete log 
router.delete('/deleteOne', bugController.deleteLog, (req, res) => {
    console.log("WE HAVE ENTERED THE DELETE REQ");
    return res.status(200).json(res.locals.deletedLog);
}); 

// PATCH - update log 

//FORMAT FOR PATCH: 
// {
//     "column_name": "title", 
//     "expression": "View Single Log Error",
//     "id": "13"
//  }

//do I need the read single middleware before the updateLog? 

router.patch('/updateOne', bugController.updateLog, (req, res) => {
    console.log("WE HAVE ENTERED THE PATCH REQ");
    return res.status(200).json(res.locals.updatedLog);
}); 

module.exports = router;