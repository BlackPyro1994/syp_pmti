/**
 * Führt die Aktion beim klicken auf den ok-Button des M07_WPP Moduls aus.
 * Übernimmt die dort eingetragenen Werte, speichert diese und schließt das Modal.
 *
 * @param click Auf das geklickte Element.
 */
function popup_m07_ok(click) {

    //console.log("function popup_m07_ok(click) {");
    // //console.log("Klick auf OK-Button M07_WPP");

    var mod_id;
    var name;
    var v, u, p, pr, ws, sose;
    var dozent;
    var ects;
    var istPflicht;
    var kat_id;

    mod_id = "M07_WPP";
    name = $("#input-name-m07").val();
    v = 2;
    u = 1;
    p = 1;
    pr = 0;
    ws = 1;
    sose = 1;
    dozent = $("#input-dozent-m07").val();
    ects = 5;
    istPflicht = false;
    kat_id = "WPP";

    if (global_mod_id == "M07_WPP" && name == "") {
        name = "Name";
    }
    if (global_mod_id == "M07_WPP" && dozent == "") {
        dozent = "Dozent";
    }

    append_free_module(mod_id, global_sem_id,name, v, u, p, pr, ws, sose, dozent, ects, istPflicht, kat_id);
    $('#myModal-m07').modal('hide');
    update_master_ects(global_mod_id, 1);
    //update_semester_ects(global_mod_id,1);
}