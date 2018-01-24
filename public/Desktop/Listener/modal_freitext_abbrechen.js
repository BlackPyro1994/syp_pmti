function modal_freitext_abbrechen(click) {
    console.log("function modal_freitext_abbrechen("+click+",");

    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
}