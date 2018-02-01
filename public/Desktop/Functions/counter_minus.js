/**
 * Senkt die Semesteranzahl (count) und löscht den entsprechenden Inhalt von content
 */
function counter_minus()
{
    if (count > 1)
    {
        
        count--;
        document.getElementById("count").textContent--;
        $("#div_semester").children().last().remove();
        
    }
    else
    {
    
        ausgewaehlt_semester = "";
        ausgewaehlt_modul = "";
        global_mod_id="";
        global_sem_id="";
        old_sem_id="";
        open_catalog = "";
        all_catalogs_closed = 0;
        moving = 0;
        alm = false;
        search_result = "";
        load = 0;
        
        $("#regeln").children().remove();
        
        if (count > 0)
        {
            $("#div_semester").children().last().remove();
            count--;
            document.getElementById("count").textContent--;
        }
        
        $("#div_kataloge").empty();
        show_catalogs();
        
        document.getElementById("button_minus").disabled = true;
        document.getElementById("button_speichern").disabled = true;
        document.getElementById("button_pdf").disabled = true;
        
        blocked = true;
        
        $("#button_new_plan").addClass("mouse_over_border");
        $('#button_planLaden').addClass("mouse_over_border");
        $("#button_plus").addClass("mouse_over_border");
        
        return;
        
    }
}