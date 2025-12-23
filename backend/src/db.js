import pg from 'pg';
const pool =new pg.Pool({

    user:process.env.user,
    host:'localhost',
    database:process.env.database,
    password:process.env.password,
    port:5432
});

module.exports=pool;