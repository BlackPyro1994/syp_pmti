/**
 * Führt die Aktion beim klicken auf den ok-Button des ALM Moduls aus.
 * Übernimmt die dort eingetragenen Werte, speichert diese und schließt das Modal.
 *
 * @param click AUf das geklickte Element
 */
function popup_freitext_ok(click) {
    console.log("function popup_freitext_ok("+click+")");

    var mod_id;
    var name;
    var v, u, p, pr, ws, sose;
    var dozent;
    var ects;
    var istPflicht;
    var kat_id;

    anz_alm++;

    mod_id = "ALM"+anz_alm;
    name = $("#input-name").val();
    v = $("#input-v").val();
    u = $("#input-u").val();
    p = $("#input-p").val();
    pr = $("#input-pr").val();
    ws = 1;
    sose = 1;
    dozent = $("#input-dozent").val();
    ects = $("#input-ects").val();
    istPflicht = false;
    kat_id = "AM";

    append_free_module(mod_id, global_sem_id, name, v, u, p, pr, ws, sose, dozent, ects, istPflicht, kat_id, false);

    $('#myModal-freitext').modal('hide');
    update_semester_ects(global_sem_id);
}