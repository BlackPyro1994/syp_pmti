/**
 * Aktualisiert die Semester-ECTS für ein Semester
 *
 * @param sem_id Die Semester-ID des zu aktualisierenden Semesters
 *
 */
function update_semester_ects(sem_id) {
    var countSemECTS = 0;

    for (z = 0; z < content[sem_id - 1].length; z++) {
        countSemECTS += (Number.parseInt(content[sem_id - 1][z][9]));
    }

    var idString = "sem_ects_anz" + (sem_id);
    semester_ects = countSemECTS;

    $("#ects_punkte").last().text(semester_ects);
    sem_ects_array[sem_id] = semester_ects;
}