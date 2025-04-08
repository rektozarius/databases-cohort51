const { MongoClient } = require('mongodb');
const setupAccounts = require('./setup.js');
const transferAmount = require('./transfer.js');
require('dotenv').config();

const main = async () => {
  const client = new MongoClient(process.env.MONGODB_URL);
  const db = client.db("databaseWeek4");
  const collection = db.collection('accounts');

  try {
    // Connect to db
    await client.connect();
    
    // Set up accounts collection
    await setupAccounts(collection);

    // Set up a session and transfer balance
    
    await transferAmount(client, collection, "101", "102", 1000);
    

  } catch (err) {
    console.error(err.message);
  } finally {
    client.close();
  }
};

main();