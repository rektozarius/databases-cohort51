import mysql from 'mysql2/promise';
import * as keys from './queries/keys.js';
import * as relationships from './queries/relationships.js';

const main = async () => {
  // create pool
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'week2',
    multipleStatements: 'true',
    waitForConnections: 'true',
    connectionLimit: 1,
  });

  try {
    // create db, tables
    await pool.query(keys.createDb);
    await pool.query(keys.createAuthors);
    await pool.query(keys.addMentor);
    await pool.query(relationships.createPapers);
    await pool.query(relationships.createAuthorPaper);
    await pool.query(relationships.insertAuthors);
    await pool.query(relationships.insertPapers);
    await pool.query(relationships.insertRelationships);



    // [rows] = await pool.query(queries.veganAndJapanese);
    // console.log('Here are the all the vegan and japanese recipes: \n', rows, '\n')

  } catch (err) {
    console.log(err);
  } finally {
    pool.end();
  }
};

main();