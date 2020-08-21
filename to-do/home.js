//completed todo
    $("table").on("click", "label", function(){
        $(this).toggleClass("CHECKED"); 
    });

//To del a todo
    $("table").on("click", "span", function(event){
            $(this).parent().fadeOut(500, function(){
                $(this).remove(); 
        });
        event.stopPropagation();
    });


//to add a todo
   $("input").keypress(function(event){
        var todotext = $(this).val();
        if(event.which === 13)
            {
                $("table").append("<tr><td class='w-25'><span class=' py-2 px-3 bg-danger'><i class='fas fa-trash'></i></span><label class='px-2' style='cursor: pointer'>" + todotext + "</label></td></tr>");
                $(this).val("");
            }
   }); 

//plus button
$("button").on("click", function(){
    $("input").fadeToggle(300, function(){
        $(this).toggleClass("HIDE");
    }); 
});
