/**
 * Lädt den Inhalt eines Semesters anhand dessen ID(auswahl).
 *
 * @param global_sem_id Ausgewähltes Semester
 */
function show_semester_content(global_sem_id)
{
    
    $("#div_semester").append(content_html[global_sem_id]);
}