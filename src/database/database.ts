import mongoose from 'mongoose';
require('dotenv').config()

const config = {
    database: process.env.DATABASE_URL as string,
};

export const database = mongoose.connect(config.database);
