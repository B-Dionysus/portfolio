// const orm = require("../../../config/orm");

// function init(){
//     orm.all(projectCats, populateMain);
// }
function populateMain(array, id=1){
    console.log("HULLO!");
    let main=$("#main");
    main.empty();
    let proObj={};
    for(elem of array) if(elem.id==id) proObj=elem;
    main.append($("<div>").addClass("col-1 display-spacing"));
    let mainBody=$("<div>").addClass(" col-10 main-display");
    mainBody.append($("<div>").addClass("main-display-image"));
    mainBody.append($("<div>").addClass("main-display-bg"));
    mainBody.append($("<img>").addClass("heroImage").attr("src",proObj.thumbnail));
    mainBody.append($("<h5>").addClass("project-title").text(proObj.title));
    mainBody.append($("<div>").addClass("project-desc").text(proObj.desc));
    mainBody.append($("<div>").addClass("main-dropshadow"));
    main.append(mainBody);
    main.append($("<div>").addClass("col-1 display-spacing"));
    populateMainGallery(id);
}
function populateMainGallery(id){
    let array=projects
}



function buildTabs(array, id){
    tabRow=$("#tabRow");
    tabRow.empty();
    // Make sure the tabs are sorted by their displayOrder
    array.sort((a,b)=>{if(a.displayOrder>b.displayOrder) return a; else return b});

    // If there are four tabs (including the title bar), colWidth should be 2 and mainColWidth should be 4
    // If there are five tabs, colW should just be 2 across the board
    let tabWidth=Math.floor(10/array.length);
    let titleWidth=2+(10%array.length); 
    for(tab of array){
        // Please note: Actually using var correctly!
        // (newTab is scoped within the buildTabs function,
        // but is not constrained to this for loop--we will
        // need to use it later, and using "let" would have
        // restricted its scope to just this loop.)
        var newTab=$("<div>").text(`${tab.tabName}`);
        newTab.attr("data-id", tab.id);            
        newTab.on("click",function(){
            buildTabs(projectCats, $(this).attr("data-id"));                 
        });
        // Note that id was passed from a previous function as a string here, while tab.id is a number
        if(tab.id==id){
            newTab.addClass(`col-${titleWidth} main-title`);
            tabRow.prepend(newTab);
        }
        else             
        {
            newTab.addClass(`col-${tabWidth} projectCatTab`);
            tabRow.append(newTab);
        }        
    }
    newTab.append($("<div>").addClass("tab-dropshadow"));
    tabRow.prepend($("<div>").addClass("col-1 display-spacing"));   
    tabRow.append($("<div>").addClass("col-1 display-spacing"));
    populateMain(array,id);
}





module.exports={
    populateMain
}