const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require( './config/config');
app.use(express.json() );

const PirataRouter = require( './rutas/pirata.routes');
app.use ( '/', PirataRouter);


app.listen(8080, () => {
    console.log("Listening at Port 8080")
});