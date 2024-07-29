import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import dbConnect from './dbConnect.js';
// import { insertMovies } from './routes/movies.js';
import router from './routes/movies.js';





const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
dbConnect();
// insertMovies()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
