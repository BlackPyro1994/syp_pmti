/**
 * Aktualisiert die Semester-ECTS Punkte mit den Werten des gewählten Moduls
 *
 * @param wert Differenzierungsfaktor um zu addieren oder zu subtrahieren
 * @param ects Übergebene Anzahl der ECTS-Punkte
 */
function update_semester_ects_extra(wert, ects) {
    console.log("update_semester_ects_extra(" + wert + "," + ects + ")");
    
    // wert = auswahl ob addieren(1) oder subtrahieren(0)
    if (wert == 1) {
        semester_ects = semester_ects + ects;
    }
    else if (wert == 0) {
        semester_ects = semester_ects - ects;
    }
}