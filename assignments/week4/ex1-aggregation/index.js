require('dotenv').config();
const { MongoClient } = require('mongodb');

const AGE = "100+";
const YEAR = 2020;

// Array of the total population (M + F over all age groups) for a given Country per year
const firstPipeline = [
  {
    '$match': {
      'Country': 'Netherlands'
    }
  }, {
    '$group': {
      '_id': "$Year", 
      'countPopulation': {
        '$sum': {
          '$sum': [
            '$M', '$F'
          ]
        }
      }
    }
  }, {
    '$sort': {
      '_id': 1
    }
  }
];

// All the information of each continent for a given Year and Age field but add a new field TotalPopulation that will be the addition of M and F
const secondPipeline = [
  {
    '$match': {
      'Country': {
        '$regex': new RegExp('^[^a-z]*$')
      }
    }
  }, {
    '$match': {
      'Year': {
        '$eq': YEAR
      }
    }
  }, {
    '$match': {
      'Age': {
        '$eq': AGE
      }
    }
  }, {
    '$addFields': {
      'TotalPopulation': {
        '$sum': [
          '$M', '$F'
        ]
      }
    }
  }
];

// Prints aggregated results
const agrregator = async (cursor) => {
  for await (const result of cursor) {
    console.log(result);
  };
};

const main = async () => {
  const client = new MongoClient(process.env.MONGODB_URL);

  try {
    // Connect to db
    await client.connect();
    const db = client.db("databaseWeek4");
    const collection = db.collection('aggregation');

    // Aggregation queries
    const firstAggCursor = collection.aggregate(firstPipeline);
    const secondAggCursor = collection.aggregate(secondPipeline);

    // Iterate over the results
    await agrregator(firstAggCursor);
    await agrregator(secondAggCursor);

  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
};

main();