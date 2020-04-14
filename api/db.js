require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.DB_URL || 'mongodb+srv://admin:admin@fullstack-mongo-cluster-j0wnh.mongodb.net/inventory?authSource=admin&replicaSet=FullStack-Mongo-Cluster-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

let db;

async function getNextSequence(name) {
    const result = await db.collection('counters').findOneAndUpdate(
        { _id: name },
        { $inc: { current: 1 } },
        { returnOriginal: false },
    );
    return result.value.current;
}

async function connectToDb() {
    const client = new MongoClient(url, { useNewUrlParser: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
}

function getDb() {
    return db;
}

module.exports = { connectToDb, getNextSequence, getDb };