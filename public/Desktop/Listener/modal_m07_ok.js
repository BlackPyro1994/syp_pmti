function modal_m07_ok(click)
{
    var name;
    var v, u, p, pr;
    var dozent;
    var ects;
    
    name = $("#input-name-m07").val();
    v = 2;
    u = 1;
    p = 1;
    pr = 0;
    dozent = $("#input-dozent-m07").val();
    ects = 5;
    
    if (global_mod_id == "M07" && name == "")
    {
        name = "Name";
    }
    if (global_mod_id == "M07" && dozent == "")
    {
        dozent = "Dozent";
    }
    append_free_module(global_mod_id, global_sem_id, name, v, u, p, pr, dozent, ects);
    $("#" + global_mod_id).parent().parent().addClass('blocked_wpp');
    
    $('#myModal-m07').modal('hide');
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
    
    update_rules();
}