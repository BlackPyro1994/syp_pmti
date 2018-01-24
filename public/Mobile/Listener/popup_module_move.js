/**
 * Führt die Aktion beim klicken auf den verschieben-Button im Modal aus.
 * Löscht den aktuellen Seiteninhalt und schließt das Modal anschließend.
 *
 * @param click
 */
function popup_module_move(click) {
    console.log("function popup_module_move("+click+")");
    
    $("#" + global_mod_id).remove();
    move = 1;
    $('#myModal-modules').modal('hide');
    remove_module_from_content(global_mod_id);
    overview();
}