/**
 * Fuehrt die Aktion beim Klicken auf den (Abbrechen)-Button des Popups zum Freitextmodul (ALM) aus
 *
 * @param click
 */
function modal_freitext_abbrechen(click)
{
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
    
    $('#myModal-freitext').modal('hide');
}