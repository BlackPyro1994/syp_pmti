function delete_module_from_semester(mod_id) {
    console.log("delete_module_from_semester(" + mod_id + ")");
    if (global_mod_id == "ALM") {
        //update_semester_ects_extra();
    } else {
        update_master_ects(global_mod_id, 0);
        //update_semester_ects(global_mod_id,0);
    }
    $("#" + mod_id).remove();
    blocked.splice(mod_id,1);
    catalog_array.splice(global_catalog_id,1);
}