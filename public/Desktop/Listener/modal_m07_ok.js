function modal_m07_ok(click)
{
    var name;
    var v, u, p, pr, ws, sose;
    var dozent;
    var ects;
    var istPflicht;
    var kat_id;
    
    name = $("#input-name-m07").val();
    v = "2";
    u = "1";
    p = "1";
    pr = "0";
    ws = "1";
    sose = "1";
    dozent = $("#input-dozent-m07").val();
    ects = "5";
    istPflicht = "false";
    kat_id = "WPP";
    
    if (global_mod_id == "M07_WPP" && name == "")
    {
        name = "Name";
    }
    if (global_mod_id == "M07_WPP" && dozent == "")
    {
        dozent = "Dozent";
    }
    append_free_module(global_mod_id, global_sem_id, name, v, u, p, pr, ws, sose, dozent, ects, istPflicht, kat_id,false);
    
    $("#" + global_mod_id).addClass('blocked_wpp');

    
    $('#myModal-m07').modal('hide');
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');

    update_master_ects(global_mod_id,1);
    update_semester_ects(global_sem_id);
    update_rules();
}