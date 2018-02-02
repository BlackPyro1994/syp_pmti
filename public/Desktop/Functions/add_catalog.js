/**
 * Erstellt die Kataloge
 *
 * @param catalog_id Die ID des Katalogs, welcher hinzugefügt wird
 * @param catalog_name Der Name des Katalogs, welcher hinzugefügt wird
 */
function add_catalog(kat_id, title)
{
    
    $("#div_kataloge").append(
        '<div class = "class_click_catalog katalog">'
        
        + '<Button ' +

        'id="' + kat_id + '"' +
        'class = "btn-block disabled-catalog catalog_button" ' +
        'onclick="left_click_on_catalog(this)">' + title + '</Button>'
        
        + '</div>');

    if (!(browser.includes("Chrome"))) {
        $('#div_kataloge').children().last().children().addClass("rounded-catalog")
    }
}