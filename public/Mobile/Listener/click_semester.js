/**
 * Führt die Aktion beim klicken auf ein Semester aus.
 * Ändert das Icon des Menüs, dessen Funktion(zurück Button), die Überschrift
 * und den "+" Button und dessen Funktion.
 *
 * @param click Auf das geklickte Element
 */
function click_semester(click) {
    console.log("function click_semester("+click+")");

    var id = (click.target).id;
    global_sem_id = (click.target).id.replace("sem", "");
    flip = 1;

    $("body > nav > div.dropdown > button > svg").toggleClass("fa-bars fa-arrow-left");
    $("body > nav > div.dropdown > button").attr('onClick', "overview()");

    if (!move) {
        safe_semester = $("#div_semester").children();
        $("#div_semester").children().remove();
        show_semester_content(global_sem_id);
        update_semester_ects(global_sem_id);
        $("#button_minus").hide();
        $("#button_plus").text("Add Modul");
        $("#button_plus").attr("onclick", "show_catalogs()");
        $("#brand").text("Semester: " + global_sem_id);

    } else {
        safe_semester = $("#div_semester").children();
        $("#div_semester").children().remove();
        show_semester_content(global_sem_id);
        append_module_in_semester(global_mod_id, global_sem_id);

        $("#button_minus").hide();
        $("#button_plus").text("Module");
        $("#button_plus").attr("onclick", "show_catalogs()");
        $("#brand").text("Semester: " + global_sem_id);
        move = 0;
    }

    $("#ects_text").last().text("Semester ECTS: ");
    $("#ects_punkte").last().text(semester_ects);

    update_rules();
}