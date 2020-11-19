
var db = require("../models");
const router=require("express").router;
const category=require("../controllers/category_controller.js")

const ADMIN_LEVEL=100;
function htmlRoutes(app){
    app.get("/", (req, res) => {
        let admin=false;
        if(req.user && req.user.level>=ADMIN_LEVEL) admin=true;
        // People who have not logged in have an access level of 0
        // Default uses have an access level of 10
        category.displayMain(res, 1, admin);
    });
    app.get("/project/:id", (req, res)=>{
        let admin=false;
        if(req.user && req.user.level>=ADMIN_LEVEL) admin=true;
        category.displayProject(res, req.params.id, admin)
    });
    app.get("/admin", (req, res) => {
        let admin=false;
        // REMEMBER TO REMOVE THIS LINE AFTER TESTING!!!!
        req.user=true;
        if(req.user) res.render("admin", {adminPage:true});
        else res.redirect("/");
    });
    app.get("/login", (req,res)=>{
        res.render("login", {loginPage:true});
    });
    // app.get("/signup", (req, res) => {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //       let accessLevel = req.user.accessLevel;
    //       if (accessLevel >= ADMIN_LEVEL) accessGranted = true;
    //       else admin = false;
    //       res.render("landing", { accessGranted });
    //     } else res.render("signup", {});
    //   });
    
}


module.exports=htmlRoutes;