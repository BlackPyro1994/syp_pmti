/**
 * Sucht in der Modulliste einen Wert anhand der Modul ID
 *
 * @param id Die Modul ID nach der gesucht wird
 */
function store_module_data_by_id(id) {

    var index = 0;
    var BreakException = {};

    try {
        modulListe.forEach(function (entry) {
            index++;

            if (id == entry.split(',')[0]) {
                search_result = entry;
                throw BreakException;
            }
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
}