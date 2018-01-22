/**
 * Gibt das letzte Element des Arrays zurück
 *
 * @param Object Das Array zum durchsuchen
 * @param index An welcher Stelle im Array gesucht werden soll
 * @return das letzte Element des Arrays
 */
function getElementByIndex(Object, index) {

    //console.log("function getElementByIndex(Object, index) {");

    return Object.slice(index, index + 1);
}