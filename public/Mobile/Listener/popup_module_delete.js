/**
 * Führt die Aktion beim klicken auf den löschen-Button im Modal aus.
 * Schließt das Modal anschließend.
 *
 * @param click Auf das geklickte Element
 */
function popup_module_delete(click) {

    $('#myModal-modules').modal('hide');
    delete_module_from_semester(global_mod_id);
}