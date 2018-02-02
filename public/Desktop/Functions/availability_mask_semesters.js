/**
 * Prueft die Verfügbarkeit(fuer welches Semester welches Modul angeboten wird) der Semester fuer die Module
 * @param module_id ID des Moduls
 */
function availability_mask_semesters(module_id) {
    $("#div_semester").children().removeClass("not_available");

    update_module_string(module_id);
    search_result = search_result.split(",");

    if (search_result[6] == "1" && search_result[7] == "0") {
        if (startSem == "sommer") {
            if (!(browser.includes("Chrome"))) {
                $("#div_semester").children().filter(":even").removeClass("sem_background");
                $("#div_semester").children().filter(":even").addClass("semester-hover-not-available");
                $("#div_semester").children().filter(":even").removeClass("semester-gesamt-firefox");
            }
            $("#div_semester").children().filter(":even").addClass("not_available");

        }
        else if (startSem == "winter") {
            if (!(browser.includes("Chrome"))) {
                $("#div_semester").children().filter(":odd").removeClass("sem_background");
                $("#div_semester").children().filter(":odd").addClass("semester-hover-not-available");
                $("#div_semester").children().filter(":odd").removeClass("semester-gesamt-firefox");
            }
            $("#div_semester").children().filter(":odd").addClass("not_available");
        }
    }
    // Winter und nicht Sommer
    else if (search_result[6] == "0" && search_result[7] == "1") {
        if (startSem == "sommer") {
            if (!(browser.includes("Chrome"))) {
                $("#div_semester").children().filter(":odd").removeClass("sem_background");
                $("#div_semester").children().filter(":odd").addClass("semester-hover-not-available");
                $("#div_semester").children().filter(":odd").removeClass("semester-gesamt-firefox");
            }
            $("#div_semester").children().filter(":odd").addClass("not_available");

        }
        else if (startSem == "winter") {
            if (!(browser.includes("Chrome"))) {
                $("#div_semester").children().filter(":even").removeClass("sem_background");
                $("#div_semester").children().filter(":even").addClass("semester-hover-not-available");
                $("#div_semester").children().filter(":even").removeClass("semester-gesamt-firefox");
            }
            $("#div_semester").children().filter(":even").addClass("not_available");
        }
    }
}