function add_semester(startSem)
{
    content.push(new Array());

    var wert = Number(document.getElementById("count").textContent);

    $("#div_semester").append('<div class = "container-fluid semester-gesamt class_click_semester">' + '<div class = "class_click_semester_row row">' + '<h6 id="' + 'sem' + wert + '"class="label">' + wert + '</h6>' + '<h6 class=" label"></h6>' + '<h6 class="sem_ects">ECTS: </h6>' + '<h6 id="' + 'sem_ects_anz' + wert + '" class="sem_ects"></h6>' + '</div>' + '</div>');

    if (startSem == "winter" && wert % 2 == 1)
    {
        $(".label").last().text(" : Winter-Semester ");
        $(".sem_ects").last().text("0");
    }
    else if (startSem == "winter" && wert % 2 == 0)
    {
        $(".label").last().text(" : Sommer-Semester ");
        $(".sem_ects").last().text("0");
    }
    else if (startSem == "sommer" && wert % 2 == 1)
    {
        $(".label").last().text(" : Sommer-Semester ");
        $(".sem_ects").last().text("0");
    }
    else
    {
        $(".label").last().text(" : Winter-Semester ");
        $(".sem_ects").last().text("0");
    }
}