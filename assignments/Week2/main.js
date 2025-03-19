import mysql from 'mysql2/promise';
import * as keys from './queries/keys.js';
import * as relationships from './queries/relationships.js';
import * as joins from './queries/joins.js';
import * as aggregate from './queries/aggregate.js';

const main = async () => {
  // create pool
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
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

    // insert data
    await pool.query(relationships.insertAuthors);
    await pool.query(relationships.insertPapers);
    await pool.query(relationships.insertRelationships);


    // query db
    let [rows] = await pool.query(joins.firstQuery);
    console.log('Names of all authors and their corresponding mentors: \n', rows, '\n');

    [rows] = await pool.query(joins.secondQuery);
    console.log('All columns of authors and their published paper_title: \n', rows, '\n');

    [rows] = await pool.query(aggregate.firstQuery);
    console.log('All research papers and the number of authors that wrote that paper: \n', rows, '\n');

    [rows] = await pool.query(aggregate.secondQuery);
    console.log('Sum of the research papers published by all female authors: \n', rows, '\n');

    [rows] = await pool.query(aggregate.thirdQuery);
    console.log('Average of the h-index of all authors per university: \n', rows, '\n');

    [rows] = await pool.query(aggregate.fourthQuery);
    console.log('Sum of the research papers of the authors per university: \n', rows, '\n');

    [rows] = await pool.query(aggregate.fifthQuery);
    console.log('Minimum and maximum of the h-index of all authors per university: \n', rows, '\n');

  } catch (err) {
    console.log(err);
  } finally {
    pool.end();
  }
};

main();