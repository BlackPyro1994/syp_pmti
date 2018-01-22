function right_click_on_semester(caller)
{
    var semester_id = $(caller.target).closest("button").attr("id").replace("semester_", "");
    
    if (!$(caller.target).closest("button").hasClass("not_available"))
    {
        console.log("HAT NICHT NOT_AVAIALBALBAE");
        
        //########################################################################
        
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
                
                if (($("#" + ausgewaehlt_modul).parent().children().first().siblings().not('.blocked').length - 1) == 0)
                {
                    console.log("KATALOG SCHLIEßEN");
                    
                    $("#" + ausgewaehlt_modul).parent().toggleClass("cat-border");
                    
                    $("#" + open_catalog).removeClass("cat-background");
                    
                    $("#" + ausgewaehlt_modul).parent().children().first().siblings().toggle(200);
                    
                    open_catalog = "";
                }
                
                
            }
            
            insert_module_in_semester(ausgewaehlt_modul, semester_id);
            
            $("#div_semester").children().removeClass("not_available");
        }
        else
        {
            if ($(caller.target).closest("button").hasClass("ausgewaehlt"))
            {
                console.log("IST BEREITS AUSGEWAEHLT");
                
                $("#" + "semester_" + semester_id).toggleClass('ausgewaehlt');
                console.log($("#div_katalog").children().children());
                $("#div_kataloge").children().children().removeClass("not_available");
            }
            else
            {
                console.log("IS NO NIT AUSJEWAEHLT");
                
                $('#div_semester').children().removeClass('ausgewaehlt');
                $("#" + "semester_" + semester_id).toggleClass('ausgewaehlt');
                availability_mask_modules(semester_id);
                // $("#div_kataloge").children().children().removeClass("not_available");
            }
            //availability_mask_modules(semester_id);
            ausgewaehlt_semester = semester_id;
            console.log("Click Event : ausgewaehltes semester: " + ausgewaehlt_semester);
        }
    }
    
}
