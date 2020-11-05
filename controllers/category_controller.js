const db = require("../models");




function displayMain(res, accessLevel){
    db.Category.findAll({raw:true}).then(tabs=> {
        if(accessLevel>=10) isAdmin=true; else isAdmin=false;
        // If we pass accessGranted=true to the main page, it will display the admin button
        // The main tab is just the first tab in the list
        let main=tabs.shift();
        res.render("index",{main:main, tabs:tabs, accessGranted:isAdmin})
    });
}
function displayProject(res, projectId, accessLevel){
    db.Category.findAll({raw:true}).then(projectCats=> {
        if(accessLevel>=10) isAdmin=true; else isAdmin=false;
        // If we pass accessGranted=true to the main page, it will display the admin button
        let main=projectCats.filter((projectCats)=>projectCats.id==projectId);
        let tabs=projectCats.filter((projectCats)=>projectCats.id!=projectId);

        db.Project.findAll({raw:true}).then((projectData)=>{
            console.log(projectData);
            res.render("index",{main:main[0], tabs:tabs, project:projectData, accessGranted:isAdmin})
        })
    });
}






module.exports={
    displayMain,
    displayProject
}










