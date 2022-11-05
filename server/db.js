import { createPool } from "mysql2/promise";

export const pool = new createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'CDobregon2',
    database: 'f1album'
});

