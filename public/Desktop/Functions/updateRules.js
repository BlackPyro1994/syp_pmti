function update_rules()
{
    console.log("");
    
    $("#regeln").children().remove();
    
    katalogListe.forEach(function (katalog)
    {
        var katID = katalog.split(",")[0];
        
        var belegAnz = katalog.split(",")[2];
        
        console.log("Katalog Eintrag : " + katalog);
        
        var countBlocked = $("#" + katID).children().filter(".blocked").length;
        
        console.log("Anzahl Blocked : " + countBlocked);
        
        var countWPPblocked = $("#" + katID).children().filter(".blocked_wpp").length;
        
        console.log("Anzahl Blocked WPP : " + countWPPblocked);
        
        if (katID == "WPP")
        {
            countBlocked = countWPPblocked;
        }
        
        if ((belegAnz > 0) && (countBlocked < belegAnz))
        {
            
            var pm = "Verpflichtend zu wählen:";
            
            modulListe.forEach(function (modul)
            {
                if ((modul.split(",")[10] == "true") && (modul.split(",")[11] == katID))
                {
                    pm += " ";
                    pm += modulString[0];
                }
            })
            
            if (pm != "Verpflichtend zu wählen:")
            {
                $("#regeln").append('<div class ="row">' + '<div class ="col warnungen">' + '<p>' + 'Aus dem Katalog '
                    + katalog.split(",")[1] + ' fehlen noch ' + (belegAnz - countBlocked) + ' Modul(e).' + ' (' + pm + ')' + '</p>');
            }
            else
            {
                $("#regeln").append('<div class ="row">' + '<div class ="col warnungen">' + '<p>' + 'Aus dem Katalog '
                    + katalog.split(",")[1] + ' fehlen noch ' + (belegAnz - countBlocked) + ' Modul(e).' + '</p>');
            }
            
        }
    });
    
}