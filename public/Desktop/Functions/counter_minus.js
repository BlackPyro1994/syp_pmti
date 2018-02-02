/**
 * Senkt die Semesteranzahl (count) und löscht den entsprechenden Inhalt von content
 */
function counter_minus()
{
    modules_in_sem = $("#div_semester").children().last().children().length - 1;
    $("#div_kataloge").children().children().removeClass("not_available");
    $("#div_semester").children().removeClass("ausgewaehlt");

    ausgewaehlt_semester = "";

    console.log(modules_in_sem);
    
    if (count > 1)
    {
        
        count--;
        document.getElementById("count").textContent--;
        
        //////////////////////////////////////////////////////
        
        for (i = 0; i < modules_in_sem; i++)
        {
            var mod_id = $("#div_semester").children().last().children().last().children().attr('id');
            
            var id = mod_id.replace("mod_", "");
            
            console.log("Freigeben : " + mod_id);
            
            // $("#" + mod_id).parent().remove();
    
            $("#div_semester").children().last().children().last().remove();
            
            $("#" + id).removeClass('blocked');
            $("#" + id).removeClass('blocked_wpp');
            $("#" + id + "_WPP").removeClass('blocked');
            $("#" + id + "_WPP").removeClass('blocked_wpp');
            $("#" + (id).toString().replace("_WPP", "")).removeClass('blocked');
            $("#" + (id).toString().replace("_WPP", "")).removeClass('blocked_wpp');
        }
        
        ///////////////////////////////////////////////////////
        
        content.pop();
        
        $("#div_semester").children().last().remove();
        
        update_rules();
        
    }
    else
    {
        if (count > 0)
        {
            for (i = 0; i < modules_in_sem; i++)
            {
                var mod_id = $("#div_semester").children().last().children().last().children().attr('id');
                
                var id = mod_id.replace("mod_", "");
                
                $("#" + mod_id).parent().remove();
                
                $("#" + id).parent().parent().children().children().removeClass('blocked');
                $("#" + id).parent().parent().children().children().removeClass('blocked_wpp');
                $("#" + id + "_WPP").parent().parent().children().children().removeClass('blocked');
                $("#" + id + "_WPP").parent().parent().children().children().removeClass('blocked_wpp');
                $("#" + (id).toString().replace("_WPP", "")).parent().parent().children().children().removeClass('blocked');
                $("#" + (id).toString().replace("_WPP", "")).parent().parent().children().children().removeClass('blocked_wpp');
                
                update_master_ects(id, 0);
            }
            content.pop();
            
            $("#div_semester").children().last().remove();
            
            update_rules();
            
            count--;
            document.getElementById("count").textContent--;
            
            ausgewaehlt_semester = "";
            ausgewaehlt_modul = "";
            global_mod_id = "";
            global_sem_id = "";
            old_sem_id = "";
            open_catalog = "";
            all_catalogs_closed = 0;
            moving = 0;
            alm = false;
            search_result = "";
            load = 0;
            
            $("#regeln").children().remove();
            
            
            $("#div_kataloge").empty();
            show_catalogs();
            
            document.getElementById("button_minus").disabled = true;
            document.getElementById("button_speichern").disabled = true;
            document.getElementById("button_pdf").disabled = true;
            
            blocked = true;
            
            $("#button_new_plan").addClass("mouse_over_border");
            $('#button_planLaden').addClass("mouse_over_border");
            $("#button_plus").addClass("mouse_over_border");
            
        }
        
    }
}