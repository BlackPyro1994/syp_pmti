/**
 * Führt die Aktion beim klicken auf ein Modul im Semester aus.
 * Öffnet ein Modal.
 *
 * @param click Auf das geklickte Element
 */

var MODUL_String = "";

function click_modules_in_semester(click)
{
    
    global_mod_id = (click.currentTarget).id;
    
    // var html_index = $("button").index(this);
    
    console.log(click);
    
    var html_index = $("div").index($(click.currentTarget));
    
    console.log(html_index);
    
    console.log($("div").eq(html_index));
    
    // var semester_id = $("div").eq(html_index).parent().parent().parent().attr("id").replace("semester_", "");
    
    var zaehler = 0;
    
    $.each($("div").eq(html_index).parent().parent().children().first().children().children().children(), function (index, value)
    {
        // console.log(index + ": " + $(value).text());
        
        MODUL_String[zaehler] = $(value).text();
        
        zaehler++;
        
    });
    
    // console.log(MODUL_String);
    
    // MODUL_String[0] = MODUL_String[0].replace("ID: ", "");
    
    if (MODUL_String[0] == "ALM")
    {
    }
    
    $('#myModal-modules').modal('show');
}