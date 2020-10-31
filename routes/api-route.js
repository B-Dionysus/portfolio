var express = require("express");
const orm = require("../config/orm");
var router = express.Router();
const path = require("path");

// router.get("/", function(req, res) {
//     orm.all("projectCats", function(data){
//     });
//     res.sendFile("../public/index.html");
//   });

  router.get("/", function(req, res) {
    orm.mainPage("Main Page",function(data){
        let mainTitle=data.shift();
        let tabArray=data;
        console.log("Main: "+mainTitle);
        res.render("index", {main:mainTitle, tabs:tabArray});
    });
  });

  router.get("/project/:id",(req, res)=>{
    console.log(req.params.id);
    orm.loadProject(req.params.id, (main, tabs)=>{
      let mainContent=main[0];
      let tabArray=tabs;
      res.render("index", {main:mainContent, tabs:tabArray});
    });
  });
  

let ras;


// Export routes for server.js to use.
module.exports = router;
