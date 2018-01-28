/**
 * Führt die Aktion beim klicken auf ein Semester aus.
 * Ändert das Icon des Menüs, dessen Funktion(zurück Button), die Überschrift
 * und den "+" Button und dessen Funktion.
 *
 * @param click Auf das geklickte Element
 */
function click_semester(click) {
    console.log("function click_semester("+click+")");

    $("#div_semester").children().removeClass("not_available");
    $("#div_semester").children().addClass("class_click_semester");

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

        if(global_mod_id == "M07_WPP") {
            //var mod_id = Number.parseInt(global_mod_id.replace("ALM",""));
            append_free_module(m07_array[0][0],
                global_sem_id,
                m07_array[0][1],
                m07_array[0][2],
                m07_array[0][3],
                m07_array[0][4],
                m07_array[0][5],
                m07_array[0][6],
                m07_array[0][7],
                m07_array[0][8],
                m07_array[0][9],
                m07_array[0][10],
                m07_array[0][11]);
        }
        if(global_mod_id.includes("ALM")) {
            var mod_id = Number.parseInt(global_mod_id.replace("ALM",""));

            append_free_module(alm_array[mod_id-1][0],
                global_sem_id,
                alm_array[mod_id-1][1],
                alm_array[mod_id-1][2],
                alm_array[mod_id-1][3],
                alm_array[mod_id-1][4],
                alm_array[mod_id-1][5],
                alm_array[mod_id-1][6],
                alm_array[mod_id-1][7],
                alm_array[mod_id-1][8],
                alm_array[mod_id-1][9],
                alm_array[mod_id-1][10],
                alm_array[mod_id-1][11]);

        } else if(global_mod_id != "M07_WPP") {
            append_module_in_semester(global_mod_id, global_sem_id);
        }

        $("#button_minus").hide();
        $("#button_plus").text("Module");
        $("#button_plus").attr("onclick", "show_catalogs()");
        $("#brand").text("Semester: " + global_sem_id);
        move = 0;
    }

    $("#ects_text").last().text("Semester ECTS: ");
    $("#ects_punkte").last().text(semester_ects);
}