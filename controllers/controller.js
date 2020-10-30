var express = require("express");
const orm = require("../config/orm");
var router = express.Router();
const path = require("path");
// // Import the model (cat.js) to use its database functions.
// var cat = require("../models/cat.js");
let portfolio=require("../models/portfolio.js");

router.get("/", function(req, res) {

    console.log("Hi?");
    orm.all("projectCats", function(data){
        portfolio.populateMain(data);
    });
    res.sendFile("../public/index.html");
  });

  router.get("/test", function(req, res) {

    console.log("Hello there?");
    orm.mainPage("Main Page",function(data){
        console.log(data);
        res.render("index", data[0]);
    });
  });
  




// Export routes for server.js to use.
module.exports = router;
