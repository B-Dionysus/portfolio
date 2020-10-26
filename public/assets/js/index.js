$("document").ready(init);



function init(){
    buildTabs(projectCats);
}
function populateMain(proObj){
    // <div class="col-1 display-spacing"> <!-- Spacing column --> </div>
    // <div class="col-10 main-display"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident eveniet sit, unde iste veniam tempore labore officia impedit quam consequuntur aspernatur dolorum rerum suscipit velit! Consequatur nesciunt optio ratione!</div>
    // <div class="col-1 display-spacing"> <!-- Spacing column --> </div>
    let main=$("#main");
    main.append($("<div>").addClass("col-1 display-spacing"));
    let mainBody=$("<div>").addClass(" col-10 main-display");
    
    mainBody.append($("<img>").addClass("heroImage").attr("src",proObj.thumbnail));
    mainBody.append($("<div>").addClass("<p>").text(proObj.desc));
    main.append(mainBody);
    main.append($("<div>").addClass("col-1 display-spacing"));
}

function buildTabs(array){
    tabRow=$("#tabRow");
    tabRow.empty();
    // Make sure the tabs are sorted by their displayOrder
    array.sort((a,b)=>{if(a.displayOrder>b.displayOrder) return a; else return b});

    // If there are four tabs (including the title bar), colWidth should be 2 and mainColWidth should be 4
    // If there are five tabs, colW should just be 2 across the board
    let tabWidth=Math.floor(10/array.length);
    let titleWidth=2+(10%array.length); 
    tabRow.append($("<div>").addClass("col-1 display-spacing"));    
    for(tab of array){
        let tabClass="main-title";
         // If it's an uneven number, the title tab gets the remainder, see above
        if(tab.displayOrder===1){
             colW=titleWidth;

            }
        else {
            tabClass="projectCatTab";
            colW=tabWidth;
        }
        tabRow.append($("<div>").addClass(`col-${colW} ${tabClass}`).text(`${tab.tabName}`));
    }
    tabRow.append($("<div>").addClass("col-1 display-spacing"));


    
    populateMain(array[0]);
}





