/**
 * Führt die Aktion beim klicken auf ein Semester aus.
 * Ändert das Icon des Menüs, dessen Funktion(zurück Button), die Überschrift
 * und den "+" Button und dessen Funktion.
 *
 * @param click Auf das geklickte Element
 */
function click_semester(click)
{
    
    $("#div_semester").children().removeClass("not_available");
    $("#div_semester").children().addClass("class_click_semester");
    
    var id = (click.target).id;
    global_sem_id = (click.target).id.replace("sem", "");
    flip = 1;
    
    $("body > nav > div.dropdown > button > svg").toggleClass("fa-bars fa-arrow-left");
    $("body > nav > div.dropdown > button").attr('onClick', "overview()");
    
    console.log("Move : " + move);
    
    if (!move)
    {
        safe_semester = $("#div_semester").children();
        $("#div_semester").children().remove();
        show_semester_content(global_sem_id);
        
        update_semester_ects(global_sem_id);
        update_master_ects();
        
        $("#button_minus").hide();
        $("#button_plus").text("Add Modul");
        $("#button_plus").attr("onclick", "show_catalogs()");
        $("#brand").text("Semester: " + global_sem_id);
        
    }
    
    // EINFÜGEN ODER VERSCHIEBEN !!!
    
    else
    {
        safe_semester = $("#div_semester").children();
        $("#div_semester").children().remove();
        show_semester_content(global_sem_id);
        
        if (global_mod_id == "M07_WPP")
        {
            load_module_from_content(global_mod_id);
            
            copy = search_result;
            
            copy[6] = Number.parseInt(copy[6]);
            copy[7] = Number.parseInt(copy[7]);
            copy[10] = JSON.parse(copy[10]);
            
            remove_module_from_content(global_mod_id);
            append_free_module(copy[0], global_sem_id, copy[1], copy[2], copy[3], copy[4], copy[5], copy[6], copy[7], copy[8], copy[9], copy[10], copy[11]);
        }
        else if (global_mod_id.includes("ALM"))
        {
            var mod_id = Number.parseInt(global_mod_id.replace("ALM", ""));
            var outer = 0, inner = 0;
            
            console.log("Mod-Id-Global : " + global_mod_id);
            
            // load_module_from_content(global_mod_id);
            
            copy = content_search_result;
            
            console.log(copy);
            
            copy[6] = Number.parseInt(copy[6]);
            copy[7] = Number.parseInt(copy[7]);
            // copy[10] = JSON.parse(copy[10]);
            
            console.log("Remove : " + global_mod_id);
            
            remove_module_from_content(global_mod_id);
            append_free_module(copy[0], global_sem_id, copy[1], copy[2], copy[3], copy[4], copy[5], copy[6], copy[7], copy[8], copy[9], copy[10], copy[11]);
            
            // return;
        } else if (global_mod_id != "M07_WPP")
        {
            append_module_in_semester(global_mod_id, global_sem_id);
        }
        
        $("#button_minus").hide();
        $("#button_plus").text("Module");
        $("#button_plus").attr("onclick", "show_catalogs()");
        $("#brand").text("Semester: " + global_sem_id);
        move = 0;
    }
    
    update_semester_ects(global_sem_id);
    
    $("#ects_text").last().text("Semester ECTS: ");
    $("#ects_punkte").last().text(semester_ects);
}