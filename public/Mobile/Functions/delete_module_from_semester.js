/**
 * Löscht das ausgewählte Modul im Semester und gibt dieses wieder in dem blocked und catalog_array array frei
 *
 * @param mod_id Die Modul ID des zu löschenden Moduls
 */
function delete_module_from_semester(mod_id) {

    var cat_id;
    var index;
    $("#" + mod_id).remove();
    //entferne Modul ID aus blocked array
    index = blocked.indexOf(mod_id);
    if (index != -1) {
        blocked.splice(index, 1);
    }

    //Entferne Katalog ID aus catalog_array
    modulListe.forEach(function (entry) {
        if (entry.split(',')[0] == mod_id) {
            if (mod_id.includes("_WPP")) {
                cat_id = "WPP";
            } else {
                cat_id = entry.split(',')[11];
            }
            index = catalog_array.indexOf(cat_id);

            if (index != -1) {
                catalog_array.splice(index, 1);
            }
        }
    });
    content_html.splice(global_sem_id, 1);
    remove_module_from_content(mod_id);

    if(global_mod_id.includes("ALM")) {
        update_semester_ects(global_sem_id);
    } else {
        update_master_ects(global_mod_id, 0);
        update_semester_ects(global_sem_id);
    }
}