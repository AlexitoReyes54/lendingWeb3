import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import router from './routes/auth';
import { database } from './database/database';

console.log(process.env.DATABASE_URL) 

const app = express();
app.use(express.json());
app.use(router);

app.get('/', (_req, res) => {
    res.send("Hello World");
  });


database.then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err);
});


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
    }

);
