function ok_button_new_plan(options)
{
    
    // $("#master_ects").innerText = 0;
    // $("#count").innerText = 0;
    // $("#count").textContent = 0;
    
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
        add_semester(startSem);
    }
    
    // $('#count').set(wert);
    
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
}