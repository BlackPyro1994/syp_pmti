/**
 * Löscht das letzte Semester
 *
 */
function delete_last_semester() {
    console.log("delete_last_semester()");
    $("#div_semester").children().last().remove();
}