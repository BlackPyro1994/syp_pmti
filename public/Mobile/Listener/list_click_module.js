/**
 * Führt die Aktion beim klicken auf ein Module im Modal aus.
 * Schließt das Modal, fügt die Modul ID dem blocked und dessen Katalog ID dem catalog_array array hinzu.
 *
 * @param click Auf das geklickte Element
 */
function list_click_module(click) {

    //console.log("function list_click_module(click) {");

    global_mod_id = (click.currentTarget).id;
    //console.log("Add Modul ID: " + global_mod_id);
    close = 0;
    
    $('#myModal-catalogs').modal('hide');
    emptyModal();
    if (global_mod_id == "ALM" || global_mod_id == "M07_WPP") {
        popup_extra_module();
    } else {
        append_module_in_semester(global_mod_id);
        update_master_ects(global_mod_id, 1);
        //update_semester_ects(global_mod_id,1);
    }
    if(global_mod_id != "ALM") {
        //wenn mod_id includes _WPP dann cat_id == WPP
        blocked.push(global_mod_id);

        if(global_mod_id.includes("_WPP")) {
            catalog_array.push("WPP");
        } else {
            catalog_array.push(global_catalog_id);
        }
        update_rules();
    }
}