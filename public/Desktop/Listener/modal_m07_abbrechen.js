function modal_m07_abbrechen(click)
{
    console.log("modal_m07_abbrechen("+click+")");
    
    $('#myModal-m07').modal('hide');
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
}