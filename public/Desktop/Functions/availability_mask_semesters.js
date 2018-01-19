 function availability_mask_semesters(module_id)
{
    if (module_id)
    {
        
        @for(mod<-modulListe){
        if ("@{mod(0)}" == module_id)
        {
            
            // Sommer und nicht Winter
            
            if (@{mod(6)} &&
            !(@{mod(7)})
        )
            {
                
                ("SOMMER");
                
                // ###                                 $("#div_semester").children().filter(":even").addClass('include');
                // ###                                 $("#div_semester").children().filter(":odd").removeClass('include');
                
                // $("#div_semester").children().children().not('.class_click_semester_row').hide(200);
                
                // ###                                 $("#div_semester").children().children().not('.class_click_semester_row').css('display', 'none');
                
            }
            
            // Winter und nicht Sommer
        
        else
            if ((!@{mod(6)}) && @{mod(7)})
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
    }
    else
    {
        
        ("ELSE");
        
        // $("#div_semester").children().removeClass('include');
        
        // $("#div_semester").children().children().not('.class_click_semester_row').show(200);
        
    }
}