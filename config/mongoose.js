import dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";
const dev_URL = process.env.dev_URL;

const db = main()
    .then(() => { console.log("Connected to MogoDB") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(dev_URL);
}

mongoose.connection.on('disconnect', () => {
    console.log("MongoDB disconnect")
});
mongoose.connection.on('disconnect', () => {
    console.log("MongoDB disconnect")
});

export default db;