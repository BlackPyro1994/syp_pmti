function modal_freitext_ok(click)
{
    var name;
    var v, u, p, pr, ws, sose;
    var dozent;
    var ects;
    var istPflicht;
    var kat_id;
    
    name = $("#input-name").val();
    v = $("#input-v").val();
    u = $("#input-u").val();
    p = $("#input-p").val();
    pr = $("#input-pr").val();
    ws = 1;
    sose = 1;
    dozent = $("#input-dozent").val();
    ects = $("#input-ects").val();
    istPflicht = false;
    kat_id = "AM";

    append_free_module(global_mod_id, global_sem_id, name, v, u, p, pr, ws, sose, dozent, ects, istPflicht, kat_id,false);
    
    $('#myModal-freitext').modal('hide');
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
    update_semester_ects(global_sem_id);
}