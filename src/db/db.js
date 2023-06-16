import pg from 'pg';
const { Pool } = pg;

const config = {
    host: 'localhost',
    port: 5432,
    database: 'practica_db',
    user: 'node_user',
    password: 'node',
};

const db = new Pool(config)

export default db