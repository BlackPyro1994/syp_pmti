function ok_button_new_plan(options)
{

    if (options)
    {
        wert = options['count'];
        startSem = options['semStart'];

    }
    else
    {
        var meldung = "Bitte eine Anzahl angeben";
        var myRadio = $('input[name="optradio"]');
        startSem = myRadio.filter(':checked').val();
        wert = $("#input-semesteranzahl").val();

        if (wert == "")
        {
            document.getElementById("fehlermeldung").textContent = meldung;
            return;

        }

    }

    $("#div_semester").children().remove();

    for (i = 0; i < wert; i++)
    {
        document.getElementById("count").textContent++;
        add_semester(startSem);
    }

    // $('#count').set(wert);

    document.getElementById("fehlermeldung").textContent = "";

    $('#myModal-new_plan').modal('hide');
    $(".class_p").removeClass('ausgewaehlt');
    $(".class_p").parent().removeClass('blocked');
    $(".class_p").parent().removeClass('blocked_wpp');

    document.getElementById("button_minus").disabled = false;
    document.getElementById("button_plus").disabled = false;
    document.getElementById("button_speichern").disabled = false;
    document.getElementById("button_pdf").disabled = false;

    blocked = false;

    update_rules();
}