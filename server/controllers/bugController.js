const db = require('../models/bugModels');

const bugController = {}; 

bugController.getAllLogs = async (req, res, next) => {
  const queryStr = 'SELECT * FROM Logs';
  await db.query(queryStr)
    .then(result => {
        res.locals.logs = result.rows;
        return next();
    })
    .catch (err => next( {err: {
        log: 'Error in bugController.getAllLogs', 
        message: {err: 'Error in bugController.getAllLogs.'},
    }} ));
};

//VIEW BY DATE CREATED (aka ID) [STRETCH] --> SELECT * FROM Logs ORDER BY id ASC

bugController.getByDateCreated = async (req, res, next) => {
  const queryStr = 'SELECT * FROM Logs ORDER BY id ASC';
  await db.query(queryStr)
    .then(result => {
        res.locals.logsByDateCreated = result.rows;
        return next();
    })
    .catch (err => next( {err: {
        log: 'Error in bugController.getByDateCreated', 
        message: {err: 'Error in bugController.getByDateCreated'},
    }}
  ));
};

//VIEW BY DATE LAST UPDATED (aka updated_at) [STRETCH] --> SELECT * FROM Logs ORDER BY updated_at ASC

//VIEW NOT RESOLVED  [STRETCH] --> SELECT * FROM Logs WHERE resolved = false

//VIEW RESOLVED  [STRETCH] --> SELECT * FROM Logs WHERE resolved = true

//VIEW BY TITLE  [STRETCH] --> SELECT * FROM Logs ORDER BY title ASC

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
  .catch (err => next( {err: {
    log: 'Error in bugController.createLog', 
    message: {err: 'Error in bugController.createLog'},
    }}
  ));
};

//get a single log
//SELECT * FROM Logs WHERE id = 3

bugController.readSingleLog = async (req, res, next) => {
  const id = Number(req.body.id);
  const queryStr = `SELECT * FROM Logs WHERE id = ${id}`;

  await db.query(queryStr)
    .then(result => {
        console.log("RESULTS ARE ", result.rows);
        res.locals.singleLog = result.rows;
        return next();
    })
    .catch (err => next( {err: {
        log: 'Error in bugController.readSingleLog', 
        message: {err: 'Error in bugController.readSingleLog.'},
    }}
  ));
};


// //update a record 
// UPDATE Logs SET resolved = true WHERE ID = 2;
bugController.updateLog = async (req, res, next) => {
  const column_name = req.body.column_name;
  const expression = req.body.expression; 
  const id = Number(req.body.id);

  const queryStr = `UPDATE Logs SET ${column_name} = '${expression}' WHERE ID = ${id} RETURNING *`; //fix this foo

  await db.query(queryStr)
    .then(result => {
        console.log("UPDATED RESULTS ARE ", result.rows);
        res.locals.updatedLog = result.rows;
        return next();
    })
    .catch (err => next( {err: {
        log: 'Error in bugController.updateLog', 
        message: {err: 'Error in bugController.updateLog.'},
    }} 
  ));
};

// //delete a record 
// DELETE FROM Logs
// WHERE id = 2;

bugController.deleteLog = async (req, res, next) => {
  const id = Number(req.body.id); 
  const queryStr = `DELETE FROM Logs WHERE id = ${id} RETURNING *`; 

  await db.query(queryStr)
    .then(result => {
      console.log("DELETED ID IS ", result.rows);
      res.locals.deleteLog = result.rows; 
      return next(); 
    })
  //   .catch (err => next( {err: {
  //     log: 'Error in bugController.deleteLog', 
  //     message: {err: 'Error in bugController.deleteLog'},
  // }} 
  // ));
};

module.exports = bugController; 