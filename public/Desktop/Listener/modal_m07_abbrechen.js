function modal_m07_abbrechen(click) {
    console.log("function modal_m07_abbrechen("+click+")");

    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
}