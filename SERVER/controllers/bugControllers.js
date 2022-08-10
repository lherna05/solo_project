const db = require('../models/bugsModels');
const bugController = {}; 

// //retrieves all data from table 
// SELECT * FROM Logs


// //adds a new record 
// INSERT INTO Logs(Title, Resolved, Note)
// VALUES ('Webpack Failed', TRUE, 'Webpack failed to Compiler. Error said to install webpack-cli')

// //delete a record 
// DELETE FROM Logs
// WHERE id = 2;

// //update a record 
// UPDATE Logs SET resolved = true WHERE ID = 2;

bugController.getAllLogs = (res, req, next) => {


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