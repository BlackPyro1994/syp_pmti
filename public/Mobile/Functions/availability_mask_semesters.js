/**
 * Prueft die Verfügbarkeit(fuer welches Semester welches Modul angeboten wird) der Semester fuer die Module
 * @param module_id ID des Moduls
 */
function availability_mask_semesters(module_id)
{
    
    $("#div_semester").children().removeClass("not_available");
    
    store_module_data_by_id(module_id);
    search_result = search_result.split(",");
    
    if (search_result[6] == "1" && search_result[7] == "0")
    {
        if (startSem == "sommer")
        {
            $("#div_semester").children().filter(":even").addClass("not_available");
            $("#div_semester").children().filter(":even").removeClass("class_click_semester");

        }
        else if (startSem == "winter")
        {
            $("#div_semester").children().filter(":odd").addClass("not_available");
            $("#div_semester").children().filter(":odd").removeClass("class_click_semester");
        }
    }
    // Winter und nicht Sommer
    else if (search_result[6] == "0" && search_result[7] == "1")
    {
        if (startSem == "sommer")
        {
            $("#div_semester").children().filter(":odd").addClass("not_available");
            $("#div_semester").children().filter(":odd").removeClass("class_click_semester");
            
        }
        else if (startSem == "winter")
        {
            $("#div_semester").children().filter(":even").addClass("not_available");
            $("#div_semester").children().filter(":even").removeClass("class_click_semester");
        }
    }
}