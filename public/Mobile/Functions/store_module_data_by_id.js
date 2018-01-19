/**
 * Schreibt den Inhalt des Arrays in eine Variable
 *
 * @param id
 */
function store_module_data_by_id(id) {
    console.log("store_module_data_by_id("+id+")");

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