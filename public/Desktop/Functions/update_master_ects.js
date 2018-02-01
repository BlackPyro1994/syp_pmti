/**
 * Aktualisiert die Master-ECTS Punkte mit den Werten des gewaehlten Moduls
 *
 * @param mod_id Die Modul ID des hinzugefuegten Moduls
 * @param wert Differenzierungsfaktor um zu addieren oder zu subtrahieren
 */
function update_master_ects(mod_id, wert)
{
    console.log("update_master_ects");
    console.log(mod_id);
    console.log(wert);
    console.log("---------------------");
    var ects = Number(document.getElementById("master_ects").textContent);
    
    // wert = auswahl ob addieren oder subtrahieren
    // 1 == adieren 0 == subtrahieren
    
    update_module_string(mod_id);
    
    if(!moving) {
        search_result = search_result.split(",");
    }
    
    if (wert == 1)
    {
        if (mod_id == "ALM")
        {
            document.getElementById("master_ects").textContent = ects;
        }
        else
        {
            ects = Number.parseInt(ects) + Number.parseInt(search_result[9]);
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
            console.log(ects);
            console.log(search_result.split(",")[9]);
            console.log(Number.parseInt(search_result.split(",")[9]));
            
            ects = Number.parseInt(ects) - Number.parseInt(search_result.split(",")[9]);
            document.getElementById("master_ects").textContent = ects;
        }
    }
    
}