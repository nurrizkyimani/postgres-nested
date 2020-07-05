import { Pool } from 'pg';

const pool = new Pool()

module.exports = {
    module: (text, params) => {
        pool.query(text, params)
    }
}
