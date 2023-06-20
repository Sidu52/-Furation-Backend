import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import winston from 'winston';

dotenv.config();
import db from './config/mongoose.js';
import itemRoutes from './routes/items.js';
import userRoutes from './routes/items.js';


const PORT = process.env.PORT || 4000;
const app = express();

// body-parser middleware to parse request body
app.use(bodyParser.json());



//Setup Route
app.use('/', userRoutes);
app.use('/item', itemRoutes);

//Server Setup
app.listen(PORT, (error) => {
    if (error) (console.log("Error to starting server"));
    console.log(`Server run for PORT= ${PORT}`);
})

