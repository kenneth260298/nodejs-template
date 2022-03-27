const express = require('express');

const path = require('path');

const cors = require('cors');
require('dotenv').config();

//Create server
const app = express();

//PORT
const PORT = process.env.PORT;

//CORS  
app.use(cors());

//Public Directory
app.use(express.static('public'));

//Read and parse body
app.use(express.json());

//To solve react routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

//Listen request
app.listen(PORT, () => {
    console.log(`Server Running -> ${PORT}`)
});