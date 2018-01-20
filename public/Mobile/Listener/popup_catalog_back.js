/**
 * Führt die Aktion beim klicken auf den zurück-Button in der Modulansicht oder der Katalogansicht aus.
 *
 *
 * @param click Auf das geklickte Element
 */
function popup_catalog_back(click) {

    console.log("function popup_catalog_back(click) {");

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