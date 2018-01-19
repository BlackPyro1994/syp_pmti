function update_rules()
{
    $("#regeln").children().remove();
    
    katalogListe.forEach(function (t)
    {
        var katID = t.split(",")[0];
        
        var belegAnz = t.split(",")[2];
        
        var countBlocked = $("#" + katID).children().filter(".blocked").length;
        var countWPPblocked = $("#" + katID).children().filter(".blocked_wpp").length;
        
        if (katID == "WPP")
        {
            countBlocked = countWPPblocked;
        }
        
        if ((belegAnz > 0) && (countBlocked < belegAnz))
        {
            
            var pm = "Verpflichtend zu wählen:";
            updateModuleString(id);
            modulString = modulString.split(",");
            
            if ((modulString[10] == "true") && (modulString[11] == katID))
            {
                pm += " ";
                pm += modulString[0];
            }
            
            if (pm != "Verpflichtend zu wählen:")
            {
                $("#regeln").append('<div class ="row">' + '<div class ="col warnungen">' + '<p>' + 'Aus dem Katalog '
                    + t.split(",")[1] + ' fehlen noch ' + (belegAnz - countBlocked) + ' Modul(e).' + ' (' + pm + ')' + '</p>');
            }
            else
            {
                $("#regeln").append('<div class ="row">' + '<div class ="col warnungen">' + '<p>' + 'Aus dem Katalog '
                    + t.split(",")[1] + ' fehlen noch ' + (belegAnz - countBlocked) + ' Modul(e).' + '</p>');
            }
            
        }
    });
    
}