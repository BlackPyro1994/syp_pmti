function update_master_ects(mod_id, wert) {
    console.log("update_master_ects(" + mod_id + "," + wert + ")");
    
    // wert = auswahl ob addieren(1) oder subtrahieren(0)
    if (wert == 1) {
        @for(mod <- modulListe) {
            if ("@{mod(0)}" == mod_id) {
                if (mod_id != "ALM") {
                    master_ects = master_ects + @{mod(9)};
                    $("#ects_punkte").text(master_ects);
                }
                
                
            }
        }
    }
    else if (wert == 0) {
        @for(mod <- modulListe) {
            if ("@{mod(0)}" == mod_id) {
                if (mod_id != "ALM") {
                    master_ects = master_ects - @{mod(9)};
                    $("#ects_punkte").text(master_ects);
                }
            }
        }
    }
}