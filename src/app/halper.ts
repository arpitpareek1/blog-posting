import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your PostgreSQL username
    password: 'admin', // Replace with your PostgreSQL password
    database: 'forge',
    port: 5432,
});