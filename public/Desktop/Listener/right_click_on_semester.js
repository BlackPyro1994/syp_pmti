/**
 * Auswaehlen eines Semesters
 *
 * @param caller Click auf das Semester
 */

function right_click_on_semester(caller)
{
    console.clear();
    
    // CHROME (+)
    
    if (browser.includes("Firefox") == false)
    {
        
        var semester_id = $(caller.target).closest("button").attr("id").replace("semester_", "");
        
        if ($(caller.target).closest("button").hasClass("not_available") == false)
        {
            // HIER WURDE EIN SEMESTER ANGETIPPT NACHDEM :
            // ENTWEDER (1)     ein Modul im Katalog BEREITS gewhält ist  !!
            // ODER     (2)     ein MOVE stattfindet !!
            
            //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
            
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
                    update_master_ects();
                    
                    if (ausgewaehlt_modul == "ALM")
                    {
                        
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
                
                //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                
                else
                {
                    $("#div_semester").children().removeClass("not_available");
                    
                    if (($("#" + ausgewaehlt_modul).parent().children().first().siblings().not('.blocked').length - 1) == 0)
                    {
                        $("#" + ausgewaehlt_modul).parent().toggleClass("cat-border");
                        $("#" + open_catalog).removeClass("cat-background");
                        $("#" + ausgewaehlt_modul).parent().children().first().siblings().toggle(200);
                        
                        $("#" + open_catalog).removeClass("catalog_button_open");
                        $("#" + open_catalog).addClass("catalog_button");
                        
                        open_catalog = "";
                    }
                    
                    insert_module_in_semester(ausgewaehlt_modul, semester_id, null, false);
                }
                
                //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                
                $(".mouse_over_border").removeClass("mouse_over_border");
                
                moving = false;
                
            }
            
            //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
            
            // EIN SEMESTER WURDE ANGETIPPT ... ES IST NOCH KEINE (MODUL) AUSWAHL VORHANDEN !!!
            else
            {
                if ($(caller.target).parent().hasClass("ausgewaehlt"))
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
    
    //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
    
    // Firefox
    
    else if (browser.includes("Firefox") == true)
    {
        var semester_id = $(caller.target).parent().attr("id").replace("semester_", "");
        
        console.info("Semester ID : " + semester_id);
        
        if ($(caller.target).parent().hasClass("not_available") == false)
        {
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
                    update_master_ects();
                    
                    if (ausgewaehlt_modul == "ALM")
                    {
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
                    $("#div_semester").children().removeClass("semester-hover-not-available");
                    $('#div_kataloge').children().removeClass('ausgewaehlt');
                    $("#div_semester").children().addClass("semester-gesamt-firefox");
                    $("#div_semester").children().addClass("sem_background");
                }
                else
                {
                    console.info("Ausgewählte Modul : " + ausgewaehlt_modul);
                    
                    $("#div_semester").children().removeClass("not_available");
                    $("#div_semester").children().removeClass("semester-hover-not-available");
                    $("#div_semester").children().removeClass("semester-hover-ausgewaehlt");
                    $("#div_semester").children().addClass("semester-gesamt-firefox");
                    $("#div_semester").children().addClass("sem_background");
                    
                    
                    if (($("#" + ausgewaehlt_modul).parent().children().first().siblings().not('.blocked').length - 1) == 0)
                    {
                        $("#" + ausgewaehlt_modul).parent().toggleClass("cat-border");
                        $("#" + open_catalog).removeClass("cat-background");
                        $("#" + ausgewaehlt_modul).parent().children().first().siblings().toggle(200);
                        
                        $("#" + open_catalog).removeClass("catalog_button_open");
                        $("#" + open_catalog).addClass("catalog_button");
                        
                        open_catalog = "";
                    }
                    
                    insert_module_in_semester(ausgewaehlt_modul, semester_id, null, false);
                }
                
                $(".mouse_over_border").removeClass("mouse_over_border");
                
                moving = false;
                
            }
            
            // KEIN MODUL AUSGEWÄHLT
            // SEMESTER GEKLICKT
            
            else
            {
                if ($(caller.target).parent().hasClass("ausgewaehlt")==true)
                {
                    $("#div_semester").children().removeClass("mouse_over_border");
                    $("#div_kataloge").children().children().removeClass("not_available");
                    
                    $("#" + "semester_" + semester_id).removeClass('ausgewaehlt');
                    $("#" + "semester_" + semester_id).removeClass("semester-hover-ausgewaehlt");

                    $("#" + "semester_" + semester_id).addClass('sem_background');
                    $("#" + "semester_" + semester_id).addClass("semester-gesamt-firefox");
                    
                    ausgewaehlt_semester = "";
                    
                    //availability_mask_modules(semester_id);
                    
                    $(".mouse_over_border").toggleClass("mouse_over_border");
                }
                else
                {
                    
                    $('#div_semester').children().removeClass('ausgewaehlt');

                    
                    $('#div_semester').children().removeClass('semester-hover-ausgewaehlt');

                    
                    $('#div_semester').children().addClass('semester-gesamt-firefox');

                    
                    $('#div_semester').children().addClass('sem_background');

                    
                    $("#" + "semester_" + semester_id).toggleClass('ausgewaehlt sem_background');

                    
                    $("#" + "semester_" + semester_id).removeClass('semester-gesamt-firefox');

                    
                    $("#" + "semester_" + semester_id).addClass('semester-hover-ausgewaehlt');

                    
                    $(".mouse_over_border").toggleClass("mouse_over_border");
                    
                    ausgewaehlt_semester = semester_id;
                    
                    availability_mask_modules(semester_id);
                    
                }
            }
        }
    }
    
}
