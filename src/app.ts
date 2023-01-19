import express from 'express';
import router from './routes/auth';
import { database } from './database/database';

const app = express();
app.use(express.json());
app.use(router);
const port:number = 3000;

app.get('/', (_req, res) => {
    res.send("Hello World");
  });


database.then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err);
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }

);
