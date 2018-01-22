function right_click_on_semester(caller)
{
    var semester_id = $(caller.target).closest("button").attr("id").replace("semester_", "");
    
    console.log("Click Event : Semester ID : " + semester_id);
    
    if ($(caller.target).closest("button").hasClass("ausgewaehlt"))
    {
        $("#" + "semester_" + semester_id).toggleClass('ausgewaehlt');
    }
    else
    {
        $('#div_semester').children().removeClass('ausgewaehlt');
        $("#" + "semester_" + semester_id).toggleClass('ausgewaehlt');
    }
    
    console.log("Click Event on Semester : " + semester_id);
    
    if (ausgewaehlt_modul != "")
    {
        if (moving)
        {
            $("#mod_" + ausgewaehlt_modul).siblings().remove();
            $("#mod_" + ausgewaehlt_modul).remove();
            remove_module_from_content(semester_id);
        }
        else
        {
            console.log("ausg. modul : " + ausgewaehlt_modul);
            
            console.log($("#" + ausgewaehlt_modul).parent().children().first().siblings());
            
            console.log($("#" + ausgewaehlt_modul).parent().children().first().siblings().not('.blocked'));
        }
        
        insert_module_in_semester(ausgewaehlt_modul, semester_id);
        
    }
    else
    {
        
        ausgewaehlt_semester = semester_id;
        console.log("Click Event : ausgewaehltes semester: " + ausgewaehlt_semester);
    }
    
}