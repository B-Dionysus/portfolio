
var db = require("../models");
const router=require("express").router;
const category=require("../controllers/category_controller.js")
const passport = require("../config/passport");
const ADMIN_LEVEL=100;



function apiRoutes(app){  

    app.get("/api/cat/:id",(req, res)=>{
    category.displayOneCategory(req.params.id, res);
  });
  
  app.get("/api/cats",(req, res)=>{
    category.displayAllCategories(res);
  });




// ------------------------------------------
// ----              ~~~~~               ----
// ------------------------------------------
// --     Authentication code              --
// --       (Mostly just copied from the   --
// --            passport exaple)          --
// ------------------------------------------

// Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user.id
    });
  });
  app.post("/api/signup", (req, res) => {
    db.User.create({
      name: req.body.name,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        console.log(err);
        res.status(401).json(err);
      });
  });
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

}
module.exports=apiRoutes;