/**
 * Setzt die Werte für die Überschrift, ECTS-Beschreibung und ECTS-Punkte.
 * Löscht den aktuellen Inhalt der Seite und lädt die Semester.
 *
 */
function overview() {

    //console.log("function overview()");

    console.log("MASTER ECTS: "+master_ects);
    $("#brand").text("Übersicht");
    $("#ects_text").text("Master ECTS: ");
    $("#ects_punkte").text(master_ects);

    
    if (flip) {
        
        $("body > nav > div.dropdown > button > svg").toggleClass("fa-bars fa-arrow-left");
        $("body > nav > div.dropdown > button").dropdown('toggle');
        $("body > nav > div.dropdown > button").removeAttr('onclick');
        
        save_semester_content(global_sem_id);
        flip = !flip;
        $("#div_semester").children().remove();
    }
    
    $("#div_semester").append(safe_semester);
    
    $("#button_minus").show();
    $("#button_plus").text("+");
    $("#button_plus").attr("onclick", "counter_plus()");

}