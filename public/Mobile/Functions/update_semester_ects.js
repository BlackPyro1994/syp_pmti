/**
 * Aktualisiert die Semester-ECTS für ein Semester
 *
 * @param sem_id Die Semester-ID des zu aktualisierenden Semesters
 *
 */
function update_semester_ects(sem_id) {

    var countSemECTS = 0;

    for (i = 0; i < content[sem_id - 1].length; i++) {
        countSemECTS += (Number.parseInt(content[sem_id - 1][i][9]));
    }

    var idString = "sem_ects_anz" + (sem_id);
    semester_ects = countSemECTS;
}