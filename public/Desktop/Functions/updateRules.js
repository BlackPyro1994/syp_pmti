function update_rules()
{
    
    $("#regeln").children().remove();
    
    @for(kat<-katalogListe){
    
    var katID = "@{kat(0)}";
    var belegAnz = @kat(2);
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
        
        if (("@{mod(10)}" == "true") && ("@{mod(11)}" == katID))
        {
            pm += " ";
            pm += "@{mod(0)}";
        }
    
        
        if (pm != "Verpflichtend zu wählen:")
        {
            $("#regeln").append('<div class ="row">' + '<div class ="col warnungen">' + '<p>' + 'Aus dem Katalog ' + '"@{kat(1)}"' + ' fehlen noch ' + (belegAnz - countBlocked) + ' Modul(e).' + ' (' + pm + ')' + '</p>');
        }
        else
        {
            $("#regeln").append('<div class ="row">' + '<div class ="col warnungen">' + '<p>' + 'Aus dem Katalog ' + '"@{kat(1)}"' + ' fehlen noch ' + (belegAnz - countBlocked) + ' Modul(e).' + '</p>');
        }
        
    }
}

}