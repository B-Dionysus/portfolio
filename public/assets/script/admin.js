$("document").ready(init);

function init(){
    loadConsole("mainCats");
}


async function loadConsole(type, id=0){

    let main=$(".main-display");
    main.empty();
    main.append($("<div>").addClass("main-display-image"));
    let res;
    let req;
    switch(type){
        case "mainCats":
            res=await fetch("/api/cats");
            rows=await res.json();
            loadMainCats(main, rows);
            break;
        case "editCat":
            res=await fetch("/api/cat/"+id);
            rows=await res.json();
            editCats(main, rows);
            break;
    }


    let buttons=$("<div>").addClass("row");
    buttons
    .append($("<div>").addClass("col-6 admin-button text-center")
    .append($("<button>").text("Add")));
    
    buttons
    .append($("<div>").addClass("col-6 admin-button text-center")
    .append($("<button>").text("Back")
    .on("click",()=>loadConsole("mainCats"))
    ))
    
    main.append(buttons);
}


function loadMainCats(main, rows){
    for(elem of rows){
        main.append(adminElement(elem.id, elem.tabName));        
     }
}
function editCats(main,rows){
    for(elem of rows){
        main.append(adminElement(elem.id, elem.tabName)); 
        main.append(adminElement(elem.id, elem.title)); 
        main.append(adminElement(elem.id, elem.about, "500px")); 
        main.append(adminElement(elem.id, elem.thumbnail)); 
        main.append(adminElement(elem.id, elem.displayOrder));        
     }

}

function adminElement(id, name, height="50px"){
    let top=$("<div>").addClass("row");
    top.append($("<div>").addClass("col-9 admin-label text-center").append($("<textarea>").css("width","100%").css("height", height).val(name)));
    top.append($("<div>")
        .addClass("col-3 admin-button")
        .append($("<button>")
        .text("Edit")
        .on("click", e=>{
            loadConsole("editCat", id);
        })
    ));
    return top;
}
