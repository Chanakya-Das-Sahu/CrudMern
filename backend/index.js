const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataRoutes = require('./Routes/dataRoutes');
const connectToMongo = require('./db');
const port = 3000 ;

const app = express();
connectToMongo();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/crud/data',dataRoutes);

app.listen(port,()=>{
    console.log(`Server Listening on the port ${port}`);
});