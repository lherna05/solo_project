const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

//parse requesy body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//requests for static files 
app.use(express.static(path.resolve(__dirname, '../client')));

//route handlers: 



//catch-all route handler for requests to unknown routes 
app.use((req, res) => res.status(404).send('The page you are requesting does not exist.')); 

//global error 

app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Error handler caught unknown middleware error', 
        status: 500, 
        message: {err: 'An error has occured.'}
    };
    const errObj = Object.assign({}, defaultErr, err);
    console.log(errObj);
    return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}...`);
}); 

module.exports = app; 