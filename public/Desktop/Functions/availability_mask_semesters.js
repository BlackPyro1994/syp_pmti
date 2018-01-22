function availability_mask_semesters(module_id)
{
    $("#div_semester").children().removeClass("not_available");
    
    console.log("WURDE AUFGERUFEN");
    
    if (module_id)
    {
        
        updateModuleString(module_id);
        
        search_result = search_result.split(",");
        
        console.log(search_result[6]);
        console.log(search_result[7]);
        
        console.log(startSem);
        
        console.log("Eindeutig :: " + (search_result[6] & (~search_result[7])));
        
        if (search_result[6] & (~search_result[7]))
        {
            if (startSem == "sommer")
            {
                
                // $("#div_semester").children().filter(":even").addClass('include');
                
                $("#div_semester").children().filter(":even").addClass("not_available");
                
                // $("#div_semester").children().children().not('.class_click_semester_row').hide(200);
                // $("#div_semester").children().children().not('.class_click_semester_row').css('display', 'none');
            }
            else if (startSem == "winter")
            {
                $("#div_semester").children().filter(":odd").addClass("not_available");
            }
        }
        // Winter und nicht Sommer
        else if ((~search_result[6]) && search_result[7])
        {
            // ### $("#div_semester").children().filter(":odd").addClass('include');
            // ### $("#div_semester").children().filter(":even").removeClass('include');
            // ### $("#div_semester").children().children().not('.class_click_semester_row').hide(200);
            
            // $("#div_semester").children().children().not('.class_click_semester_row').css('display', 'block');
            
            if (startSem == "sommer")
            {
                $("#div_semester").children().filter(":odd").addClass("not_available");
                
                // $("#div_semester").children().filter(":odd").removeClass('include');
                // $("#div_semester").children().children().not('.class_click_semester_row').hide(200);
                // $("#div_semester").children().children().not('.class_click_semester_row').css('display', 'none');
            }
            else if (startSem == "winter")
            {
                $("#div_semester").children().filter(":even").addClass("not_available");
            }
            
        }
    }
}