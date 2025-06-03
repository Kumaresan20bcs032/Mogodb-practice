const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const cors=require("cors");
const app = express();

(async () => {
    const conn = await mongoose.connect(process.env.MONG0)
        .then((db) => console.log('Mongodb connected'))
        .catch(error => console.log(error.message))

    global.conn = conn;
})()


app.use(express.json());
app.use(cors());
app.use("/", router);

const PORT = process?.env?.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`)
})