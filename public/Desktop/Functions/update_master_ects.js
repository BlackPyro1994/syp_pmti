function update_master_ects(mod_id, wert)
{
    var ects = Number(document.getElementById("master_ects").textContent);
    // wert = auswahl ob addieren oder subtrahieren
    // 1 == adieren 0 == subtrahieren
    
    updateModuleString(mod_id);
    
    modulString = modulString.split(",");
    
    if (wert == 1)
    {
        if (mod_id == "ALM")
        {
            document.getElementById("master_ects").textContent = ects;
        }
        else
        {
            ects = Number.parseInt(ects) + Number.parseInt(modulString[9]);
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
            ects = Number.parseInt(ects) - Number.parseInt(modulString[9]);
            document.getElementById("master_ects").textContent = ects;
        }
    }
    
}