function list_click_module(click)
{
    global_mod_id = (click.currentTarget).id;
    console.log("Add Modul ID: " + global_mod_id);
    
    $('#myModal-catalogs').modal('hide');
    emptyModal();
    if (global_mod_id == "ALM" || global_mod_id == "M07")
    {
        popup_extra_module();
    } else
    {
        append_module_in_semester(global_mod_id);
        update_master_ects(global_mod_id, 1);
        //update_semester_ects(global_mod_id,1);
    }
    blocked.push(global_mod_id);
    catalog_array.push(global_catalog_id);
}