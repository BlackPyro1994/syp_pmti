function availability_mask_semesters(module_id)
{
    console.log("availability_mask_semesters("+module_id+")");Click,237,428,left
    
    $("#div_semester").children().removeClass("not_available");
    
    if (module_id)
    {
        
        updateModuleString(module_id);
        
        search_result = search_result.split(",");
        
        if (search_result[6] == "1" && search_result[7] == "0")
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
        else if (search_result[6] == "0" && search_result[7] == "1")
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