/**
 * Führt die Aktion beim klicken auf ein Modul im Semester aus.
 * Öffnet ein Modal.
 *
 * @param click Auf das geklickte Element
 */

function click_modules_in_semester(click)
{
    
    global_mod_id = (click.currentTarget).id;
    $('#myModal-modules').modal('show');
}