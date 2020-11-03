
var db = require("../models");
const router=require("express").router;
function apiRoutes(app){


    app.get("/", (req, res) => {
        let accessLevel=0;
        if(req.user)accessLevel=req.user.accessLevel;
        // People who have not logged in have an access level of 0
        // Default uses have an access level of 10
        // If we want to, we can make the defaul accesslevel lower, and make a new
        // class of users, admins, with an access level of ten.
        if(accessLevel>=10) accessGranted=true; else accessGranted=false;
        // If we pass accessGranted=true to the main page, it will display the admin button
        res.render("index",{accessGranted:accessGranted});
    });

}



module.exports=apiRoutes;