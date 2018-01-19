/**
 * Übernimmt das ausgewählte Startsemester(startSem), die Anzahl an Semestern(wert) und erstellt diese.
 *
 */
function ok_button_new_plan()
{
    content = [];
    
    console.log("ok_button_new_plan()");
    count = 0;
    var meldung = "Bitte eine Anzahl angeben";
    var myRadio = $('input[name="optradio"]');
    startSem = myRadio.filter(':checked').val();
    wert = $("#input-semesteranzahl").val();
    
    if (wert == "")
    {
        document.getElementById("fehlermeldung").textContent = meldung;
    }
    
    else if (wert != "")
    {
        $("#div_semester").children().remove();
        
        for (i = 0; i < wert; i++)
        {
            count++;
            add_semester(startSem);
        }
        document.getElementById("fehlermeldung").textContent = "";
        $('#myModal-new_plan').modal('hide');
    }
    
    /*
    document.getElementById("button_minus").disabled = false;
    document.getElementById("button_plus").disabled = false;
    document.getElementById("button_speichern").disabled = false;
    document.getElementById("button_pdf").disabled = false;

    blocked = false;
    */
}