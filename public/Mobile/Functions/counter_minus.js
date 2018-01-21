/**
 * Reduziert die Anzahl der Semester (count)
 *
 */
function counter_minus()
{
    console.log("function counter_minus()");

    var sem_id = $("#div_semester").children().last().attr('id');
    if (count > 0)
    {
        count--;
    }
    $("#div_semester").children().last().remove();
    console.log("LÖSCHE SEMESTER: "+sem_id);
    //console.log(content);

    //blocked = Mod IDs

    //catalog_array = Kat IDs



    //blocked Modules löschen

    //catalog_array daten löschen
    //remove_module_from_content(mod_id);


    update_rules();
}