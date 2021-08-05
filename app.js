/*
Customer satisfaction API
*/

const express = require('express');
const cors = require('cors');

// Global app object
const app = express();

// Middleware config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/', function(req, res) {
    res.status(200).send("Welcome to Costumer satisfaction API");
})

// Bootstrap server
const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${server.address().port}`);
});