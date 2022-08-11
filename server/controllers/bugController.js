const db = require('../models/bugModels');

const bugController = {}; 







bugController.getAllLogs = async (req, res, next) => {
  const queryStr = 'SELECT * FROM Logs';
  await db.query(queryStr)
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

// //adds a new record 
// INSERT INTO Logs(Title, Resolved, Note)
// VALUES ('Webpack Failed', TRUE, 'Webpack failed to Compiler. Error said to install webpack-cli')

bugController.createLog = async (req, res, next) => {
const {title, resolved, note} = req.body; 
const values = [title, resolved, note];
const queryStr = `INSERT INTO Logs(title, resolved, note) VALUES ($1, $2, $3)`;

await db.query(queryStr, values)
  .then( newLog => {
    console.log("CREATE LOG > NEW LOG IS ", newLog)
    res.locals.newLog = newLog
    return next();
  })
  // .catch (err => next( {err: {
  //   log: 'Error in bugController.getAllLogs', 
  //   message: {err: 'Error in bugController.getAllLogs.'},
  //   }} ));
};

//get a single log
//SELECT * FROM Logs WHERE id = 3

bugController.readSingleLog = async (req, res, next) => {
  const {id} = req.body; 
  const value = [id];
  const queryStr = 'SELECT * FROM Logs WHERE id = VALUES ($1)';
  await db.query(queryStr)
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


// //update a record 
// UPDATE Logs SET resolved = true WHERE ID = 2;
bugController.updateLog = (res, req, next) => {


};

// //delete a record 
// DELETE FROM Logs
// WHERE id = 2;

bugController.deleteLog = (res, req, next) => {


};

module.exports = bugController; 