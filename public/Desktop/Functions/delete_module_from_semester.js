/**
 * Loescht das ausgewählte Modul aus dem Semester
 *
 * @param id Die Modul ID des zu löschenden Moduls
 * @param sem_id Die ID des entsprechenden Semesters
 */
function delete_module_from_semester(id,sem_id)
{
    // var id = $(caller).parent().parent().children().first().text().replace("ID: ", "");
    
    // var sem_id = $(caller).parent().parent().parent().children().children().first().text();
    
    var mod_id = "mod_" + id;

    if (browser.includes("Firefox")) {
        $('#div_semester').children().removeClass('semester-hover-not-available');
        $('#div_semester').children().removeClass('semester-hover-ausgewaehlt');
        $('#div_semester').children().addClass('semester-gesamt-firefox');
    }
    
    $("#" + mod_id).siblings().remove();
    $("#" + mod_id).remove();

    $("#" + id).removeClass('blocked');
    $("#" + id).removeClass('blocked_wpp');

    $("#" + id + "_WPP").removeClass('blocked');
    $("#" + id + "_WPP").removeClass('blocked_wpp');

    $("#" + (id).toString().replace("_WPP", "")).removeClass('blocked');
    $("#" + (id).toString().replace("_WPP", "")).removeClass('blocked_wpp');

    remove_module_from_content(id);
    
    update_semester_ects(sem_id);
    update_master_ects();
    
    update_rules();

};