function modal_freitext_abbrechen(click)
{
    console.log("modal_freitext_abbrechen("+click+")");
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
    
    $('#myModal-freitext').modal('hide');
}