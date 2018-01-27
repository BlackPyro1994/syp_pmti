function counter_plus()
{
    if(count==0)
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
    
    // update_rules();
}