import mongoose from 'mongoose';

const config = {
    database: 'mongodb+srv://admin:admin@cluster0.dlglkvz.mongodb.net/?retryWrites=true&w=majority',
};

export const database = mongoose.connect(config.database);
