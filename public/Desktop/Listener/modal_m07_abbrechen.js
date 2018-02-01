/**
 * Fuehrt die Aktion beim Klicken auf den (Abbrechen)-Button des Popups zum Modul M07 aus
 *
 * @param click
 */
function modal_m07_abbrechen(click)
{
    
    $('#myModal-m07').modal('hide');
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
}