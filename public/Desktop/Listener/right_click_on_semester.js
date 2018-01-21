function right_click_on_semester(click)
{
    console.log($(caller.target));
    
    // ###                     $("#div_semester").children().removeClass('include');
    // ###                     $("#div_semester").children().filter(":odd").children().first().siblings().show();
    
    // caller.currentTarget;
    // console.log(caller);
    
    var id = $(caller.target).closest("button").attr("id").replace("semester_", "");
    
    //console.log("SEMESTER::: "+$(caller.target).closest("button").attr("id"));
    
    // $(caller).toggleClass('ausgewaehlt');
    // $(caller.currentTarget).toggleClass('ausgewaehlt');
    // $(caller.target).toggleClass('ausgewaehlt');
    
    //console.log("CLASS: "+$(caller.target).closest("button").attr('class'));
    
    console.log($(caller.target).closest("button"));
    console.log($(caller.target).closest("button").attr("class"));
    
    if ($(caller.target).closest("button").hasClass("ausgewaehlt"))
    {
        $("#" + "semester_" + id).toggleClass('ausgewaehlt');
    }
    else
    {
        $('#div_semester').children().removeClass('ausgewaehlt');
        $("#" + "semester_" + id).toggleClass('ausgewaehlt');
    }
    
    console.log("select_semester() -> ausgewaehlt_modul : " + ausgewaehlt_modul);
    
    if (ausgewaehlt_modul != "")
    {
        
        if (moving == 1)
        {
            var target = $(caller.target).attr("id").replace("semester_", "");
            
            var id = "mod_" + ausgewaehlt_modul;
            $("#" + "semester_" + id).remove();
            console.log(target);
            insert_module_in_semester(ausgewaehlt_modul, target);
            moving = 0;
            
        }
        else
        {
            console.log(target);
            insert_module_in_semester(ausgewaehlt_modul, $(caller.target).attr("id").replace("semester_", ""));
            
        }
        
    }
    else
    {
        // ausgewaehlt_semester = $(caller).children().children().html().replace("Semester ", "");
        ausgewaehlt_semester = id;
    }
    
}