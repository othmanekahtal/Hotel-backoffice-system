require('dotenv').config();
const express = require("express");
var cors = require('cors')


const port = process.env.PORT || 3000

// configure express
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const v1 = require('./routers/v1');

app.use("/api/v1/", v1);


app.listen(port, console.log(`App Running on http://localhost:${port }`));
