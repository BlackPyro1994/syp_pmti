/**
 * Sucht in der Katalogliste einen Wert anhand der Katalog ID
 *
 * @param cat_id Die Katalog ID
 */
function store_catalog_name_by_id(cat_id) {
    console.log("function store_catalog_name_by_id(cat_id)");

    var BreakException = {};

    try {
        katalogListe.forEach(function (entry) {
            if (entry.split(',')[0] == cat_id) {
                //search_result = entry.split(',')[1];
                search_result = entry.split(',');
                throw BreakException;
            }

        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
}