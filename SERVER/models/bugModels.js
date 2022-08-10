
const { Pool } = require('pg');
const { Compiler } = require('webpack');
const { internalIP } = require('webpack-dev-server');

const PG_URI = "postgres://zgbmcgcp:ltyULIz4xeHvaTygaNR_WKm439bcQED6@castor.db.elephantsql.com/zgbmcgcp";

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};


//creating auto timestamps: https://x-team.com/blog/automatic-timestamps-with-postgresql/

// CREATE TABLE Logs (
//     id SMALLSERIAL PRIMARY KEY NOT NULL,
//     Title VARCHAR(25) NOT NULL,
//     Resolved BOOLEAN NOT NULL, 
//     Note VARCHAR(300) NOT NULL,
//     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
// )

