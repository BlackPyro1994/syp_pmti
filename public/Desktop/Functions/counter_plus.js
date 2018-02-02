/**
 * Erhöht die Anzahl der Semester (count)
 *
 */
function counter_plus()
{
    if(count<1)
    {
        $("#div_kataloge").empty();
        show_catalogs();
    
        document.getElementById("button_minus").disabled = false;
        document.getElementById("button_speichern").disabled = false;
        document.getElementById("button_pdf").disabled = false;
    
        blocked = false;
    
        $("#button_new_plan").removeClass("mouse_over_border");
        $('#button_planLaden').removeClass("mouse_over_border");
        $("#button_plus").removeClass("mouse_over_border");
    
        $(".disabled-catalog").removeClass('disabled-catalog');
        
        update_rules();
    }
    
    document.getElementById("count").textContent++;
    count++;
    
    add_semester(startSem);
    
    console.log("Count : " + count);

    if(ausgewaehlt_modul != "") {
        availability_mask_semesters(ausgewaehlt_modul);
    }
    // update_rules();
}