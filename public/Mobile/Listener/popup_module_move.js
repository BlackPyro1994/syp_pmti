function popup_module_move(click)
{
    console.log("Move-Button Module: " + global_mod_id);
    $("#" + global_mod_id).remove();
    move = 1;
    $('#myModal-modules').modal('hide');
    overview();
}