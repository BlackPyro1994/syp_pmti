/**
 * Führt die Aktion beim klicken auf den ok-Button des ALM Moduls aus.
 * Übernimmt die dort eingetragenen Werte, speichert diese und schließt das Modal.
 *
 * @param click AUf das geklickte Element
 */
function popup_freitext_ok(click) {

    console.log("function popup_freitext_ok(click) {");

    // console.log("Klick auf OK-Button ALM");

    var name;
    var v, u, p, pr;
    var dozent;
    var ects;

    name = $("#input-name").val();
    v = $("#input-v").val();
    u = $("#input-u").val();
    p = $("#input-p").val();
    pr = $("#input-pr").val();
    dozent = $("#input-dozent").val();
    ects = $("#input-ects").val();

    append_free_module(name, v, u, p, pr, dozent, ects);

    $('#myModal-freitext').modal('hide');
    update_master_ects(global_mod_id, 1);
    //update_semester_ects_extra(1, ects);

}