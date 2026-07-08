const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

// Read environment variables
const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || "mongodb";
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || "microservices";

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}`;

const client = new MongoClient(MONGO_URL);

async function connectDB() {
    try {
        await client.connect();
        console.log(`Connected to MongoDB at ${MONGO_URL}`);

        const db = client.db(DB_NAME);

        app.get("/", async (req, res) => {
            const collections = await db.listCollections().toArray();

            res.json({
                service: "User Service",
                database: DB_NAME,
                collections: collections.map(c => c.name)
            });
        });

    } catch (err) {
        console.error("Database connection failed:", err);
    }
}

connectDB();

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});