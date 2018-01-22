function availability_mask_semesters(module_id)
{
    if (module_id)
    {
        
        store_module_data_by_id(module_id)
        
        // Sommer und nicht Winter
        if (search_result[6] && !search_result[7])
        {
            ("SOMMER");
            
            if(startSem=="sommer")
            {
                // $("#div_semester").children().filter(":even").addClass('include');
                $("#div_semester").children().filter(":odd").removeClass('include');
                // $("#div_semester").children().children().not('.class_click_semester_row').hide(200);
                // $("#div_semester").children().children().not('.class_click_semester_row').css('display', 'none');
            }
            else if(startSem=="winter")
            {
                $("#div_semester").children().filter(":odd").addClass("bg-)
            }
        }
        // Winter und nicht Sommer
    else
        if ((!@{
            mod(6)
        }
    ) &&
        @
        {
            mod(7)
        }
    )
        {
            ("WINTER");
            // ### $("#div_semester").children().filter(":odd").addClass('include');
            // ### $("#div_semester").children().filter(":even").removeClass('include');
            // ### $("#div_semester").children().children().not('.class_click_semester_row').hide(200);
            // $("#div_semester").children().children().not('.class_click_semester_row').css('display', 'block');
        }
        return;
    }
}
else
{
    ("ELSE");
        
        // $("#div_semester").children().removeClass('include');
        
        // $("#div_semester").children().children().not('.class_click_semester_row').show(200);
        
    }
}