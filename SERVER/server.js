const path = require('path');
const express = require('express');

const app = express();
const cors = require('cors');

const PORT = 3000;
console.log("hitting server")
//require router
const bugRouter = require('./routes/routes');
// const { __esModule } = require('url-loader/dist');

//parse requesy body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//requests for static files 
app.use('/assets', express.static(path.resolve(__dirname, '../client')));

//route handlers: 
app.use('/', bugRouter); //double check the endpoint -- how do we know what the endpoint is? 

//route for main app 
// app.get('/routes', (req, res) => {
//     return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
// })

//catch-all route handler for requests to unknown routes 
app.use((req, res) => res.status(404).send('The page you are requesting does not exist.')); 

//global error 

app.use((err, req, res, next) => {
    const defaultErr = {
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

//NOTE TO SELF FOR JSON PACKAGE: REVISIT WHICH MODULES ARE IN WHICH FOLDER: https://stackoverflow.com/questions/46903002/move-a-module-from-devdependencies-to-dependencies-in-npm-package-json
//"dependencies": Packages required by your application in production.
//"devDependencies": Packages that are only needed for local development and testing.