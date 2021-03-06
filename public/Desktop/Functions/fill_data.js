/**
 * Belegt Eingabewerte fuer M07_WPP bzw. ALM vor
 *
 * @param mod_id Die Modul ID des Moduls mit den zu fuellenden Daten
 * @param sem_id Die entsprechende Semester-ID
 */
function fill_data(mod_id, sem_id)
{
   
    if (mod_id == "M07_WPP")
    {
        $('#myModal-m07').modal('toggle');

        $("#input-name-m07").val("");
        $("#input-dozent-m07").val("");

        global_sem_id = sem_id;
        global_mod_id = mod_id;

    }
    else if (mod_id == "ALM")
    {
        $('#myModal-freitext').modal('toggle');

        $("#input-name").val("");
        $("#input-v").val("");
        $("#input-u").val("");
        $("#input-p").val("");
        $("#input-pr").val("");
        $("#input-dozent").val("");
        $("#input-ects").val("");

        global_sem_id = sem_id;
        global_mod_id = mod_id;
    }
}