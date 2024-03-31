import pg from 'pg';
 
const client = new pg.Client({
     user: 'postgres', host: 'localhost', database: 'opengigtasks', password: 'srv333', port: '5432', 
    });
 
/*
sql to create table 
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    status VARCHAR(255),
    date DATE
);

*/

export default client;