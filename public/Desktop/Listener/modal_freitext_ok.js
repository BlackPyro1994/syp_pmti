function modal_freitext_ok(click)
{
    var name;
    var v, u, p, pr;
    var dozent;
    var ects;
    
    name = $("#input-name").val();
    v = $("#input-v").val();
    u = $("#input-u").val();
    p = $("#input-p").val();
    pr = $("#input-pr").val();
    dozent = $("#input-dozent").val();
    ects = $("#input-ects").val();
    
    append_free_module(global_mod_id, global_sem_id, name, v, u, p, pr, dozent, ects);
    
    $('#myModal-freitext').modal('hide');
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
}