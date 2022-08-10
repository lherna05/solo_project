
const { Pool } = require('pg');

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

