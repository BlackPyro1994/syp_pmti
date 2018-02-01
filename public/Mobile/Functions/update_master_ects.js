/**
 * Aktualisiert die Master-ECTS Punkte mit den Werten des gewählten Moduls
 *
 * @param mod_id Die Modul ID des hinzugefügten Moduls
 * @param wert Differenzierungsfaktor um zu addieren oder zu subtrahieren
 */
function update_master_ects(mod_id, wert) {

    store_module_data_by_id(mod_id);
    search_result = search_result.split(",");

    if (wert == 1) {
        master_ects = Number.parseInt(master_ects) + Number.parseInt(search_result[9]);
        $("#ects_punkte").text(master_ects);

    }
    else if (wert == 0) {
        master_ects = Number.parseInt(master_ects) - Number.parseInt(search_result[9]);
        $("#ects_punkte").text(master_ects);
    }
}