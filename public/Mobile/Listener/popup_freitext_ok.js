/**
 * Führt die Aktion beim klicken auf den ok-Button des ALM Moduls aus.
 * Übernimmt die dort eingetragenen Werte, speichert diese und schließt das Modal.
 *
 * @param click AUf das geklickte Element
 */
function popup_freitext_ok(click) {

    console.log("function popup_freitext_ok(click) {");

    // console.log("Klick auf OK-Button ALM");

    var mod_id;
    var name;
    var v, u, p, pr, ws, sose;
    var dozent;
    var ects;
    var istPflicht;
    var kat_id;

    mod_id = "ALM";
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

    append_free_module(name, v, u, p, pr, ws, sose, dozent, ects, istPflicht, kat_id);

    $('#myModal-freitext').modal('hide');
    update_master_ects(global_mod_id, 1);
    //update_semester_ects_extra(1, ects);

}