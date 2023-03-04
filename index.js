const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send(`kinda sus bro, also your ip is ${req.ip}`);
    console.log(`Request from ${req.ip}`);
});

app.post("/", (req, res) => {
    console.log(`Post from ${req.ip}`);
});

app.listen(5151, () => {
    console.log("Listening...");
});