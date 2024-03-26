const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


// Import your JSON data
const myData = require('./data/data.json');

// Route to send JSON data
app.get('/api/data', (req, res) => {
    res.json(myData);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
