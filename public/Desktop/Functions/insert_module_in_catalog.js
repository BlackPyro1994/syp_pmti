/**
 * Fuegt ein Modul einem Katalog hinzu
 *
 * @param katalog_id ID des Katalogs, in den das Modul eingefuegt wird
 * @param module_id ID des Moduls, das in den Katalog eingefuegt wird
 * @param module_title Name des Moduls, das in den Katalog eingefuegt wird
 */
function insert_module_in_catalog(katalog_id, module_id, module_title) {
    
    var tooltip;

    $("#" + katalog_id).parent().append('<button data-toggle="tooltip" data-placement="right" title="" ' +
        'id = ' + module_id + ' ' +
        'onClick="left_click_on_module(this)" ' +
        'class = "katalog_label rounded-catalog-module">' + module_title + '</button>');
    $("#" + module_id).hide();

    update_module_string(module_id);

    tooltip = "ID: " + search_result.split(",")[0] + " V:" + search_result.split(",")[2] + " Ü:" + search_result.split(",")[3] + " P:" + search_result.split(",")[4] + " Pr:" + search_result.split(",")[5] + " Dozent: " + search_result.split(",")[8] + " ECTS: " + search_result.split(",")[9];
    $('[data-toggle="tooltip"]').tooltip({
        title: tooltip,
        animation: true,
        trigger: "hover",
        delay: {show: 800, hide: 0}
    });
}