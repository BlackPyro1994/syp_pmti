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
    
    if (!move)
    {
        console.log("SEMESTER ANSICHT");
        
        safe_semester = $("#div_semester").children();
        $("#div_semester").children().remove();
        show_semester_content(global_sem_id);
        update_semester_ects(global_sem_id);
        $("#button_minus").hide();
        $("#button_plus").text("Add Modul");
        $("#button_plus").attr("onclick", "show_catalogs()");
        $("#brand").text("Semester: " + global_sem_id);
        
    }
    
    // EINFÜGEN ODER VERSCHIEBEN !!!
    
    else
    {
        console.log("EINFÜGEN ODER VERSCHIEBEN");
        
        safe_semester = $("#div_semester").children();
        $("#div_semester").children().remove();
        show_semester_content(global_sem_id);
        
        if (global_mod_id == "M07_WPP")
        {
            load_module_from_content(global_mod_id);
    
            copy = search_result;
    
            console.log(copy);
    
            copy[6] = Number.parseInt(copy[6]);
            copy[7] = Number.parseInt(copy[7]);
            copy[10] = JSON.parse(copy[10]);
    
            console.log(copy);
    
            remove_module_from_content(global_mod_id);
    
            append_free_module(copy[0], global_sem_id, copy[1], copy[2], copy[3], copy[4], copy[5], copy[6], copy[7], copy[8], copy[9], copy[10], copy[11]);
    
    
    
        }
        if (global_mod_id.includes("ALM"))
        {
            var mod_id = Number.parseInt(global_mod_id.replace("ALM", ""));
            
            console.log(alm_array[mod_id - 1]);
            
            /*append_free_module(alm_array[mod_id - 1][0],
                global_sem_id, alm_array[mod_id - 1][1],
                alm_array[mod_id - 1][2],
                alm_array[mod_id - 1][3],
                alm_array[mod_id - 1][4],
                alm_array[mod_id - 1][5],
                alm_array[mod_id - 1][6],
                alm_array[mod_id - 1][7],
                alm_array[mod_id - 1][8],
                alm_array[mod_id - 1][9],
                alm_array[mod_id - 1][10],
                alm_array[mod_id - 1][11]);*/
            
            console.log(global_mod_id);
            
            var outer = 0, inner = 0;
            
            load_module_from_content(global_mod_id);
            
            copy = search_result;
            
            console.log(copy);
            
            copy[6] = Number.parseInt(copy[6]);
            copy[7] = Number.parseInt(copy[7]);
            copy[10] = JSON.parse(copy[10]);
            
            console.log(copy);
            
            remove_module_from_content(global_mod_id);
            
            append_free_module(copy[0], global_sem_id, copy[1], copy[2], copy[3], copy[4], copy[5], copy[6], copy[7], copy[8], copy[9], copy[10], copy[11]);
            
            // return;
        }
        
        
        else if (global_mod_id != "M07_WPP")
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