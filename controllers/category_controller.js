const db = require("../models");
const { Op } = require("sequelize");

function displayMain(res, catId, admin){
    db.Category.findAll({raw:true}).then(projectCats=> {
        // if(accessLevel>=10) isAdmin=true; else isAdmin=false;
        // If we pass accessGranted=true to the main page, it will display the admin button
        let main=projectCats.filter((projectCats)=>projectCats.id==catId);
        let tabs=projectCats.filter((projectCats)=>projectCats.id!=catId);

        db.Project.findAll({
            where:{CategoryId:{[Op.eq]: catId}},
            order:["displayOrder", "id"], 
            raw:true
            }).then((projectData)=>{
                let mainPage=true;
            res.render("main",{main:main[0], tabs, mainPage, project:projectData, admin})
        })
    });
}  
    function displayProject(res, catId, admin){
    db.Category.findAll({raw:true}).then(projectCats=> {
        // if(accessLevel>=10) isAdmin=true; else isAdmin=false;
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
            res.render("projects",{main:main[0], tabs, mainPage, project:projectData, admin})
        })
    });
}


module.exports={
    displayProject,
    displayMain
}