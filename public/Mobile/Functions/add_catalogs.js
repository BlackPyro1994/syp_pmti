/**
 * Erstellt die Kataloge und fügt diese dem Modal hinzu
 *
 * @param catalog_id Die ID des Katalogs, welcher hinzugefügt wird
 * @param catalog_name Der Name des Katalogs, welcher hinzugefügt wird
 */
function add_catalogs(catalog_id, catalog_name) {
    console.log("function  add_catalogs(" + catalog_id + "," + catalog_name + ")");

    $("#catalog_list").append('<div id="'
        + catalog_id + '" class="row catalog_border class_click_catalog"><button id="'
        + catalog_id + '" class="btn btn-block text-left fett">'
        + catalog_name + '</button></div>');
}