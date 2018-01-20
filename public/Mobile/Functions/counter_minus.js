/**
 * Reduziert die Anzahl der Semester (count)
 *
 */
function counter_minus()
{
    console.log("counter_minus()");
    if (count > 0)
    {
        count--;
    }
    $("#div_semester").children().last().remove();
    //blocked Modules löschen
    //catalog_array daten löschen
    
    //update_rules();
}