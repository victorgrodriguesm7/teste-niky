const express = require('express');
const routes = require('./routes');
const database = require('./database');

const app = express();

app.use(express.json());

app.use(routes);

async function start(){
    await database.sync();

    app.listen(process.env.PORT || 3000, () => {
        console.log("Listening 3000")
    });
}

start();
