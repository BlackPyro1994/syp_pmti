function update_master_ects(mod_id, wert)
{
    var ects = Number(document.getElementById("master_ects").textContent);
    // wert = auswahl ob addieren oder subtrahieren
    // 1 == adieren 0 == subtrahieren
    
    updateModuleString(id);
    
    modulString = modulString.split(",");
    
    if (wert == 1)
    {
        if (mod_id == "ALM")
        {
            document.getElementById("master_ects").textContent = ects;
        }
        else
        {
            ects = ects + modulString[9];
            document.getElementById("master_ects").textContent = ects;
        }
    }
    else if (wert == 0)
    {
        if (mod_id == "ALM")
        {
            document.getElementById("master_ects").textContent = ects;
        }
        else
        {
            ects = ects - modulString[9];
            document.getElementById("master_ects").textContent = ects;
        }
    }
    
}