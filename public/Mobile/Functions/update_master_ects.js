/*

function update_master_ects(mod_id, wert)
{
    var ects = Number(document.getElementById("master_ects").textContent);
    // wert = auswahl ob addieren oder subtrahieren
    // 1 == adieren 0 == subtrahieren
    if (wert == 1)
    {
        @for(mod <- modulListe) {
        if ("@{mod(0)}" == mod_id)
        {
            if (mod_id == "ALM")
            {
                document.getElementById("master_ects").textContent = ects;
            }
            else
            {
                ects = ects + @{mod(9)};
                document.getElementById("master_ects").textContent = ects;
            }
        }
    }
    }
    else if (wert == 0)
    {
        @for(mod <- modulListe) {
        if ("@{mod(0)}" == mod_id)
        {
            if (mod_id == "ALM")
            {
                document.getElementById("master_ects").textContent = ects;
            }
            else
            {
                ects = ects - @{mod(9)};
                document.getElementById("master_ects").textContent = ects;
            }
        }
    }
    }
}

*/

function update_master_ects(mod_id, wert)
{
    var ects = Number(document.getElementById("master_ects_punkte").textContent);
    // wert = auswahl ob addieren oder subtrahieren
    // 1 == adieren 0 == subtrahieren
    
    updateModuleString(mod_id);
    
    modulString = modulString.split(",");
    
    if (wert == 1)
    {
        if (mod_id == "ALM")
        {
            document.getElementById("master_ects_punkte").textContent = ects;
        }
        else
        {
            ects = Number.parseInt(ects) + Number.parseInt(modulString[9]);
            document.getElementById("master_ects_punkte").textContent = ects;
        }
    }
    else if (wert == 0)
    {
        if (mod_id == "ALM")
        {
            document.getElementById("master_ects_punkte").textContent = ects;
        }
        else
        {
            ects = Number.parseInt(ects) - Number.parseInt(modulString[9]);
            document.getElementById("master_ects_punkte").textContent = ects;
        }
    }
    
}