/**
 * Speichert den aktuellen Seiteninhalt eines Semesters
 *
 * @param global_sem_id Das ausgewählte Semester
 */
function save_semester_content(global_sem_id) {
    console.log("save_semester_content(" + global_sem_id + ")");
    content[global_sem_id] = $("#div_semester").children();
}