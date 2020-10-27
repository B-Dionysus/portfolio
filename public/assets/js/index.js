$("document").ready(init);



function init(){
    buildTabs(projectCats, 4);
}
function populateMain(array, id){
    let main=$("#main");
    main.empty();
    let proObj={};
    for(elem of array) if(elem.id==id) proObj=elem;
    main.append($("<div>").addClass("col-1 display-spacing"));
    let mainBody=$("<div>").addClass(" col-10 main-display");
    mainBody.append($("<div>").addClass("main-display-image"));
    mainBody.append($("<img>").addClass("heroImage").attr("src",proObj.thumbnail));
    mainBody.append($("<h5>").addClass("project-title").text(proObj.title));
    mainBody.append($("<div>").addClass("project-desc").text(proObj.desc));
    main.append(mainBody);
    main.append($("<div>").addClass("col-1 display-spacing"));
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
        let newTab=$("<div>").text(`${tab.tabName}`);
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
    tabRow.prepend($("<div>").addClass("col-1 display-spacing"));   
    tabRow.append($("<div>").addClass("col-1 display-spacing"));
    populateMain(array,id);
}





