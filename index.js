const express = require('express');
const cors = require('cors');
require('dotenv').config();
//Create server
const app = express();

//PORT
const PORT = process.env.PORT;

//DB
// dbConnection();TODO:

//CORS  
app.use(cors());

//Read and parse body
app.use(express.json());

//Routes
app.use('/api', require('./routes/api'));

//Public Directory
app.use(express.static('public'));

//Listen request
app.listen(PORT, () => {
    console.log(`Server Running -> ${PORT}`)
});