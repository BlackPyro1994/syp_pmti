/**
 * Gibt das letzte Element des Arrays zurück
 *
 * @param Object Das Array zum durchsuchen
 * @param index An welcher Stelle im Array gesucht werden soll
 * @return das letzte Element des Arrays
 */
function get_element_by_index(Object, index) {
    console.log("function get_element_by_index(Object, index) {");

    return Object.slice(index, index + 1);
}