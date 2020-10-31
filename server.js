var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use("*/css",express.static("public/assets/css"));
app.use("*/script",express.static("public/assets/script"));
app.use("*/img",express.static("public/assets/img"));
app.use(express.static("public"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./routes/api-route.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at http://localhost:" + PORT);
});
