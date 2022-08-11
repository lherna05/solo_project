const db = require('../models/bugModels');

const bugController = {}; 

// //adds a new record 
// INSERT INTO Logs(Title, Resolved, Note)
// VALUES ('Webpack Failed', TRUE, 'Webpack failed to Compiler. Error said to install webpack-cli')

// //delete a record 
// DELETE FROM Logs
// WHERE id = 2;

// //update a record 
// UPDATE Logs SET resolved = true WHERE ID = 2;

bugController.getAllLogs = (res, req, next) => {
  const queryStr = 'SELECT * FROM Logs';
  db.query(queryStr)
    .then(result => {
        console.log("RESULTS ARE ", result.rows);
        res.locals.logs = result.rows;
        return next();
    })
    // .catch (err => next( {err: {
    //     log: 'Error in bugController.getAllLogs', 
    //     message: {err: 'Error in bugController.getAllLogs.'},
    // }} ));
};

bugController.createLog = (res, req, next) => {


};

bugController.readLog = (res, req, next) => {


};

bugController.updateLog = (res, req, next) => {


};

bugController.deleteLog = (res, req, next) => {


};

module.exports = bugController; 