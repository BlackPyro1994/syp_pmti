/**
 * (OK)-Button des Popups zum Erstellen eines neuen Plans
 *
 * @param options Vom Benutzer eingegebene Werte zu Anzahl Semestern und Start im WS oder SoSe
 */
function ok_button_new_plan(options)
{
    count = 0;
    
    $("#div_kataloge").empty();
    show_catalogs();
    
    // $("#div_kataloge").children().first().siblings().remove();
    // show_catalogs();
    
    open_catalog ="";
    ausgewaehlt_semester = "";
    ausgewaehlt_modul="";
    
    if (options)
    {
        var wert = options['count'];
        startSem = options['semStart'];
        
    }
    else
    {
        var meldung = "Bitte eine Anzahl angeben";
        var myRadio = $('input[name="optradio"]');
        
        var wert = $("#input-semesteranzahl").val();
        startSem = myRadio.filter(':checked').val();
        
        if (wert == "")
        {
            document.getElementById("fehlermeldung").textContent = meldung;
            return;
        }
    }
    
    $("#div_semester").children().remove();
    
    document.getElementById("master_ects").textContent = 0;
    document.getElementById("count").textContent = 0;

    for (i = 0; i < wert; i++)
    {
        document.getElementById("count").textContent++;
        count++;
        add_semester(startSem);
    }
    
    document.getElementById("fehlermeldung").textContent = "";
    
    $('#myModal-new_plan').modal('hide');
    
    $(".class_p").removeClass('ausgewaehlt');
    
    $(".disabled-catalog").removeClass('disabled-catalog');
    
    $(".btn-block.btn-light.rounded-semester").siblings().removeClass('blocked');
    $(".btn-block.btn-light.rounded-semester").siblings().removeClass('blocked_wpp');
    
    document.getElementById("button_minus").disabled = false;
    document.getElementById("button_plus").disabled = false;
    document.getElementById("button_speichern").disabled = false;
    document.getElementById("button_pdf").disabled = false;
    
    blocked = false;
    
    update_rules();
    
    $("#button_new_plan").removeClass("mouse_over_border");
    $('#button_planLaden').removeClass("mouse_over_border");
    
    load = 0;
}