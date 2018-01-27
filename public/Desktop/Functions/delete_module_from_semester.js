function delete_module_from_semester(id,sem_id)
{
    console.log("delete_module_from_semester("+id+","+sem_id+")");
    
    // var id = $(caller).parent().parent().children().first().text().replace("ID: ", "");
    
    // var sem_id = $(caller).parent().parent().parent().children().children().first().text();
    
    var mod_id = "mod_" + id;
    
    $("#" + mod_id).siblings().remove();
    $("#" + mod_id).remove();

    $("#" + id).removeClass('blocked');
    $("#" + id).removeClass('blocked_wpp');

    $("#" + id + "_WPP").removeClass('blocked');
    $("#" + id + "_WPP").removeClass('blocked_wpp');

    $("#" + (id).toString().replace("_WPP", "")).removeClass('blocked');
    $("#" + (id).toString().replace("_WPP", "")).removeClass('blocked_wpp');
    
    remove_module_from_content(id);
    
    update_master_ects(id, 0);
    update_semester_ects(sem_id);
    update_rules();
};