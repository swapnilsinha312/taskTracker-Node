const connection= require('./src/db');
const express= require('express');
const cors= require('cors');
const tasks= require("./routes/tasks");

connection();

const app= express();
app.use(express.json());
app.use(cors());

app.use("/tasks",tasks)

const port = process.env.PORT || 8080;

app.listen(port,(console.log(`Listening on port ${port}`)));

