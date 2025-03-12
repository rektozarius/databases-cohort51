import mysql from 'mysql2/promise';

const main = async () => {
  // create queries array
  const queries = [
    // Q1: What are the names of countries with population greater than 8 million?
    `
    SELECT Name, Population FROM country
    WHERE Population > 8000000
    ORDER BY Population DESC;   
    `,
    // Q2: What are the names of countries that have “land” in their names?
    `
    SELECT Name FROM country
    WHERE Name LIKE '%land%'
    `,
    // Q3: What are the names of the cities with population in between 500,000 and 1 million?
    `
    SELECT Name, Population FROM city
    WHERE Population BETWEEN 500000 AND 1000000
    ORDER BY Population DESC;
    `,
    // Q4: What's the name of all the countries on the continent ‘Europe’?
    `
    SELECT Name, Continent FROM country
    WHERE Continent = 'Europe';
    `,
    // Q5: List all the countries in the descending order of their surface areas.
    `
    SELECT Name, SurfaceArea FROM country
    ORDER BY SurfaceArea DESC;
    `,
    // Q6: What are the names of all the cities in the Netherlands?
    `
    SELECT Name, CountryCode FROM city
    WHERE CountryCode = 'NLD';
    `,
    // Q7: What is the population of Rotterdam?
    `
    SELECT Name, Population FROM city
    WHERE Name = 'Rotterdam';
    `,
    // Q8: What's the top 10 countries by Surface Area?
    `
    SELECT Name, SurfaceArea FROM country
    ORDER BY SurfaceArea DESC
    LIMIT 10 OFFSET 0;
    `,
    // Q9: What's the top 10 most populated cities?
    `
    SELECT Name, Population FROM city
    ORDER BY Population DESC
    LIMIT 10 OFFSET 0;
    `,
    // Q10: What is the population number of the world?
    `
    SELECT 'World' AS Location, SUM(Population) AS Population FROM country;
    `,
  ];

  try {
    // create the connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'hyfuser',
      password: 'hyfpassword',
      database: 'new_world'
    });
    // query the db
    queries.forEach(async (query) => {
        const [results] = await connection.query(query);
        console.log(query);
        console.log(results);
    });
    await connection.end();

  } catch (err) {
    console.log(err);
    await connection.end();
  }
};

main();