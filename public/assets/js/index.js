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
    mainBody.append($("<div>").addClass("<p>").text(proObj.desc));
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
         // If it's an uneven number, the title tab gets the remainder, see above
        if(tab.id===id){
            tabRow.prepend($("<div>").addClass(`col-${titleWidth} main-title`).text(`${tab.tabName}`));
        }
        else {            
            let newTab=$("<div>").addClass(`col-${tabWidth} projectCatTab`).text(`${tab.tabName}`);
            newTab.attr("data-id", tab.id);
            
            newTab.on("click",function(){
                buildTabs(projectCats, $(this).attr("data-id"));                 
            });
            tabRow.append(newTab);
        }
    }
    tabRow.prepend($("<div>").addClass("col-1 display-spacing"));   
    tabRow.append($("<div>").addClass("col-1 display-spacing"));
    populateMain(array,id);
}





