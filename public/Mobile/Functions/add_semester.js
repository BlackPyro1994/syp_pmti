/**
 * Erstellt ein Semester anhand des Startsemesters
 *
 * @param startSem Zu Beginn ausgewähltes Startsemester
 */
function add_semester(startSem) {
    console.log("add_semester(" + startSem + ")");
    
    $("#div_semester").append('<div id="' + 'sem' + count + '" class = "container-fluid semester-gesamt class_click_semester">' + '<div id="' + 'sem' + count + '" class = "row absolute_center class_click_semester_row">' + '<div id="' + 'sem' + count + '" class="col">' + '<h6 id="' + 'sem' + count + '"class="label">' + '</h6>' + '</div>' + '</div>' + '</div>');
    
    if (startSem == "winter" && count % 2 == 1) {
        $(".label").last().text(count + ": Winter-Semester");
    }
    else if (startSem == "winter" && count % 2 == 0) {
        $(".label").last().text(count + ": Sommer-Semester");
    }
    else if (startSem == "sommer" && count % 2 == 1) {
        $(".label").last().text(count + ": Sommer-Semester");
    }
    else {
        $(".label").last().text(count + ": Winter-Semester");
    }
}