/**
 * Erstellt die Kataloge und fügt diese dem Modal hinzu
 *
 * @param catalog_id
 * @param catalog_name
 */
function add_catalogs(catalog_id, catalog_name) {
    console.log("function  add_catalogs(" + catalog_id + "," + catalog_name + ")");

    $("#catalog_list").append('<div id="'
        + catalog_id + '" class="row catalog_border class_click_catalog"><button id="'
        + catalog_id + '" class="btn btn-block text-left fett">'
        + catalog_name + '</button></div>');
}