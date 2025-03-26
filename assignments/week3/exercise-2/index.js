import mysql from 'mysql2/promise';
import * as create from './transactions-create-tables.js';
import * as insert from './transactions-insert-values.js';
import { singleTransaction } from './transaction.js';

const main = async () => {
    // create pool
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'hyfuser',
      password: 'hyfpassword',
      multipleStatements: 'true',
      waitForConnections: 'true',
      connectionLimit: 10,
    });
  
    try {
      // create db, tables
      await pool.query(create.createDb);
      await pool.query(create.createAccount);
      await pool.query(create.createAccountChanges);
  
      // insert data
      await pool.query(insert.insertAccount);
      await pool.query(insert.insertAccountChanges);
  
  
      // transaction
      await pool.query(singleTransaction);
      console.log('Transfer successfull');

    } catch (err) {
      console.log(err);
    } finally {
      pool.end();
    }
  };
  
  main();