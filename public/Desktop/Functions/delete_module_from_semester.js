function delete_module_from_semester(id,sem_id)
{
    // var id = $(caller).parent().parent().children().first().text().replace("ID: ", "");
    
    // var sem_id = $(caller).parent().parent().parent().children().children().first().text();
    
    var mod_id = "mod_" + id;
    
    console.log("Lösche Modul ("+mod_id+") aus Semester ("+sem_id+")");
    
    $("#" + mod_id).remove();
    $("#" + id).parent().parent().removeClass('blocked');
    $("#" + id).parent().parent().removeClass('blocked_wpp');
    $("#" + id + "_WPP").parent().parent().removeClass('blocked');
    $("#" + id + "_WPP").parent().parent().removeClass('blocked_wpp');
    $("#" + (id).toString().replace("_WPP", "")).parent().parent().removeClass('blocked');
    $("#" + (id).toString().replace("_WPP", "")).parent().parent().removeClass('blocked_wpp');
    
    remove_module_from_content(id);
    
    update_master_ects(id, 0);
    update_semester_ects(id, sem_id, 0);
    update_rules();
};