
var db = require("../models");
const router=require("express").router;
const category=require("../controllers/category_controller.js")
function htmlRoutes(app){

// use controlelrs? Or no?
// https://stackoverflow.com/questions/48376479/executing-multiple-sequelize-js-model-query-methods-with-promises-node

// const user_profile = db.user_profile.findOne({
//     where: {
//         profile_id: new_profile_id
//     }
// });

// const all_reports = db.report.all();

// const report_details = db.report_detail.findAll({
//     where: {
//         profile_id: new_profile_id
//     }
// });

// Promise
//     .all([user_profile, all_reports, report_details])
//     .then(responses => {
//         console.log('**********COMPLETE RESULTS****************');
//         console.log(responses[0]); // user profile
//         console.log(responses[1]); // all reports
//         console.log(responses[2]); // report details
//     })
//     .catch(err => {
//         console.log('**********ERROR RESULT****************');
//         console.log(err);
//     });






    app.get("/", (req, res) => {
        let accessLevel=0;
        if(req.user)accessLevel=req.user.accessLevel;
        // People who have not logged in have an access level of 0
        // Default uses have an access level of 10
        category.displayMain(res, accessLevel);
    });
    app.get("/project/:id", (req, res)=>{
        let accessLevel=0;
        if(req.user)accessLevel=req.user.accessLevel;
        category.displayProject(res, req.params.id, accessLevel)
    })
}



module.exports=htmlRoutes;