const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'full-stack-mern-dec-database';


// ---- middleware ----
app.use(cors(), express.json(), express.urlencoded({ extended: true}))
// -------------------

// database connection
require("./config/mongoose")(DB);

// connect the routes
require("./routes/playerRoutes")(app);


// start the server 
app.listen(PORT, () => console.log(`serer is up on port: ${PORT}`))