const {Pool} = require('pg')


     const  pool = new Pool({
        user:'postgres',
        host:'localhost',
        database:'portfolio',
        password:'Floreat123!Post',
        port:5432,  
    });

module.exports = {
    pool,
}