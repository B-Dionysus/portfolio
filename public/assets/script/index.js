$("document").ready(init);

function init(){
    // let a=$("<a>").attr("href","./project/2");

    $(".projectCatTab").on("click",  function(){
        let id=$(this).data("id");
        if(id===1) location.assign(`/`);
        else location.assign(`/project/${id}`);
        // $.get(`/project/${id}`);
        // $.get({
        //     url: `/project/${id}`
        //   }) .then(()=>location.reload());
    });
}