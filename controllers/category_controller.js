const db = require("../models");
const { Op } = require("sequelize");
// function displayMain(res, accessLevel){
//     db.Category.findAll({raw:true}).then(projectCats=> {
//         if(accessLevel>=10) isAdmin=true; else isAdmin=false;
//         let main=projectCats.filter((projectCats)=>projectCats.displayOrder==1);
//         let tabs=projectCats.filter((projectCats)=>projectCats.displayOrder!=1);

//         db.Project.findAll({order:["displayOrder", "id"], raw:true}).then((projectData)=>{
//             res.render("index",{main:main[0], tabs:tabs, project:projectData, accessGranted:isAdmin})
//         })
  
//     });
// }
function displayProject(res, catId, accessLevel){
    db.Category.findAll({raw:true}).then(projectCats=> {
        if(accessLevel>=10) isAdmin=true; else isAdmin=false;
        // If we pass accessGranted=true to the main page, it will display the admin button
        let main=projectCats.filter((projectCats)=>projectCats.id==catId);
        let tabs=projectCats.filter((projectCats)=>projectCats.id!=catId);

        db.Project.findAll({
            where:{CategoryId:{[Op.eq]: catId}},
            order:["displayOrder", "id"], 
            raw:true
            }).then((projectData)=>{
                let mainPage=false;
                if(catId===1) mainPage=true;
            res.render("index",{main:main[0], tabs, mainPage, project:projectData, accessGranted:isAdmin})
        })
    });
}






module.exports={
    displayProject
}










