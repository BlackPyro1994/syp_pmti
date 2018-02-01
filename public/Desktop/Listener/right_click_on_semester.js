function right_click_on_semester(caller)
{
    
    var semester_id = $(caller.target).closest("button").attr("id").replace("semester_", "");
    
    if (!$(caller.target).closest("button").hasClass("not_available"))
    {
        
        // HIER WURDE EIN SEMESTER ANGETIPPT NACHDEM :
        // ENTWEDER (1)     ein Modul im Katalog BEREITS gewhält ist  !!
        // ODER     (2)     ein MOVE stattfindet !!
        
        if (ausgewaehlt_modul != "")
        {
            if (moving)
            {
                // $("#mod_" + ausgewaehlt_modul).siblings().remove();
                
                if (ausgewaehlt_modul != "ALM")
                {
                    $("#mod_" + ausgewaehlt_modul).parent().remove();
                    remove_module_from_content(ausgewaehlt_modul);
                }
                else
                {
                    content[löschen[0] - 1].splice(löschen[1] - 1, 1);
                    $("button").eq(löschen[2]).parent().parent().remove();
                }
                update_semester_ects(old_sem_id);
                
                if (ausgewaehlt_modul == "ALM")
                {
                    // options = get_module_from_content(ausgewaehlt_modul);
                    // console.log(options);
                    
                    console.log(ALM_String);
                    insert_module_in_semester("ALM", semester_id, ALM_String, false);
                }
                else if (ausgewaehlt_modul == "M07_WPP")
                {
                    insert_module_in_semester(ausgewaehlt_modul, semester_id, M07_WPP_String, false);
                }
                else
                {
                    insert_module_in_semester(ausgewaehlt_modul, semester_id, null, false);
                }
                
                $("#div_semester").children().removeClass("not_available");
                $('#div_kataloge').children().removeClass('ausgewaehlt');
            }
            else
            {
                $("#div_semester").children().removeClass("not_available");
                
                if (($("#" + ausgewaehlt_modul).parent().children().first().siblings().not('.blocked').length - 1) == 0)
                {
                    $("#" + ausgewaehlt_modul).parent().toggleClass("cat-border");
                    $("#" + open_catalog).removeClass("cat-background");
                    $("#" + ausgewaehlt_modul).parent().children().first().siblings().toggle(200);
                    
                    open_catalog = "";
                }
                
                insert_module_in_semester(ausgewaehlt_modul, semester_id, null, false);
            }
            
            $(".mouse_over_border").removeClass("mouse_over_border");
            
            moving = false;
            
        }
        
        // EIN SEMESTER WURDE ANGETIPPT ... ES IST NOCH KEINE (MODUL) AUSWAHL VORHANDEN !!!
        else
        {
            if ($(caller.target).closest("button").hasClass("ausgewaehlt"))
            {
                $("#div_semester").children().removeClass("mouse_over_border");
                
                $("#" + "semester_" + semester_id).toggleClass('ausgewaehlt');
                
                $("#div_kataloge").children().children().removeClass("not_available");
                
                ausgewaehlt_semester = "";
                
                //availability_mask_modules(semester_id);
                
                $(".mouse_over_border").toggleClass("mouse_over_border");
            }
            else
            {
                $('#div_semester').children().removeClass('ausgewaehlt');
                
                $("#" + "semester_" + semester_id).toggleClass('ausgewaehlt');
                
                $(".mouse_over_border").toggleClass("mouse_over_border");
                
                ausgewaehlt_semester = semester_id;
                
                availability_mask_modules(semester_id);
                
            }
        }
    }
}
