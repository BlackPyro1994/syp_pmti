/**
 * Erstellt ein Semester anhand des Startsemesters
 *
 * @param startSem Zu Beginn ausgewähltes Startsemester
 */
function add_semester(startSem)
{
    
    if (!load)
    {
        content.push(new Array());
    }
    
    var wert = Number(document.getElementById("count").textContent);
    
    var anzahl = content.length;
    
    $("#div_semester").append(
        '<div id="semester_' + wert + '"class = "semester-gesamt mod_background">' +
        '<button type = "button" class = "button_semester class_click_semester btn-block">' +
        '<div class ="row">' +
            '<h6 id="' + 'sem' + wert + '"class="col-1">' + wert + '</h6>' +
            '<h6 class="col-3 label text-left"></h6>' +
            '<h6 class="col-1 sem_ects">ECTS:</h6>' +
            '<h6 class="col-1 sem_ects text-left" id="' + 'sem_ects_anz' + wert + '"></h6>' +
        '</div>' +
        '</button>' +
        '</div>')
    
    if (startSem == "winter" && wert % 2 == 1)
    {
        $(".label").last().text("Winter-Semester");
        $(".sem_ects").last().text("0");
    }
    else if (startSem == "winter" && wert % 2 == 0)
    {
        $(".label").last().text("Sommer-Semester");
        $(".sem_ects").last().text("0");
    }
    else if (startSem == "sommer" && wert % 2 == 1)
    {
        $(".label").last().text("Sommer-Semester");
        $(".sem_ects").last().text("0");
    }
    else
    {
        $(".label").last().text("Winter-Semester");
        $(".sem_ects").last().text("0");
    }
    
}