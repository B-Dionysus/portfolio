//  dependencies
const express = require('express');
const exphbs = require('express-handlebars')

const db = require('./models');

// const routes = require('./routes');

// create an instance of express
const app = express();

// either heroku or localhost
const PORT = process.env.PORT || 8080;



app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./routes/api-routes.js")(app);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  })
}); 