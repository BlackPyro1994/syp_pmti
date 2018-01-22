/**
 * Erstellt das zuvor ausgewählte Modul in der Semesteransicht
 *
 * @param mod_id Die Modul ID
 */
function append_module_in_semester(mod_id) {
    //console.log("function append_module_in_semester(" + mod_id + ")");

    store_module_data_by_id(mod_id);
    search_result = search_result.split(",");

    $("#div_semester").append('<div id="' + mod_id + '" class="row modules_border class_click_modules_in_semester margin-top">' +
        '<button id="' + mod_id + '" class="btn btn-block"><div id="' + mod_id + '" class="row text-left">' +

        '<div id="' + mod_id + '" class="col fett">' +
        '<p>' + search_result[0] + '</p></div>' +

        '<div id="' + mod_id + '" class="col text-right">' +
        '<p id="' + mod_id + '">ECTS: ' + search_result[9] + '</p></div>' + '</div>' +

        '<div id="' + mod_id + '" class="row normal text-left">' +
        '<div id="' + mod_id + '" class="col">' +

        '<p id="' + mod_id + '">Dozent: ' + search_result[8] + '</p></div></div></button></div>');

    //console.log("search_result: "+ search_result);
    content[global_sem_id -1].push(search_result);
    update_semester_ects(global_sem_id);


}
