/**
 * Führt die Aktion beim klicken auf den verschieben-Button im Modal aus.
 * Löscht den aktuellen Seiteninhalt und schließt das Modal anschließend.
 *
 * @param click
 */
function popup_module_move(click) {

    console.log("function popup_module_move(click) {");

    // console.log("Move-Button Module: " + global_mod_id);
    $("#" + global_mod_id).remove();
    move = 1;
    $('#myModal-modules').modal('hide');
    overview();
}