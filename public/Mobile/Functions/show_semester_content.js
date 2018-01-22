/**
 * Lädt den Inhalt eines Semesters anhand dessen ID(auswahl).
 *
 * @param global_sem_id Ausgewähltes Semester
 */
function show_semester_content(global_sem_id) {
    console.log("function show_semester_content(" + global_sem_id + ")");
    console.log("APPEND: "+global_sem_id);
    console.log(content_html[global_sem_id]);
    console.log("APPEND");
    $("#div_semester").append(content_html[global_sem_id]);
}