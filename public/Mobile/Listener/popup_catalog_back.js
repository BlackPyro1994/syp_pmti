/**
 *
 *
 * @param click
 */
function popup_catalog_back(click) {
    console.log("Zurück");
    open = 1;

    // == 0
    if(!close) {
        show_catalogs();
        close = 1;
    } else {
        $('#myModal-catalogs').modal('hide');
    }
}