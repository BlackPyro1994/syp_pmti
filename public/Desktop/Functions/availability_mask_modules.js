/**
 * Prueft die Verfügbarkeit(wann welches Modul angeboten wird) der Module in den Semestern
 * @param semester_id ID des Semesters
 */
function availability_mask_modules(semester_id)
{
    $("#div_kataloge").children().children().removeClass("not_available");
    
    if (ausgewaehlt_semester % 2 == 0)
    {
        //gerade Semester
        //wenn startSem = winter
        //dann aktuell gewählte = Sommer
        //sonst Winter
        
        if (startSem == "winter")
        {
            // gewählte = Sommer
            
            modulListe.forEach(function (t)
            {
                // winter / sommer
                
                if (t.split(",")[6] == "1" && t.split(",")[7] == "0")
                {
                    if (!($("#" + t.split(",")[0]).is(".blocked,.blocked_wpp")))
                    {
                        $("#" + t.split(",")[0]).addClass("not_available");
                    }
                }
            });
            if (startSem == "sommer")
            {
                // gewählt winter
                
                modulListe.forEach(function (t)
                {
                    // winter / sommer
                    
                    if (t.split(",")[6] == "0" && t.split(",")[7] == "1")
                    {
                        if (!($("#" + t.split(",")[0]).is(".blocked,.blocked_wpp")))
                        {
                            $("#" + t.split(",")[0]).addClass("not_available");
                        }
                    }
                    
                });
            }
        }
    } else
    {
        if (startSem == "winter")
        {
            //gewählte = winter
            
            modulListe.forEach(function (t)
            {
                
                //winter / sommer
                if (t.split(",")[6] == "0" && t.split(",")[7] == "1")
                {
                    if (!($("#" + t.split(",")[0]).is(".blocked,.blocked_wpp")))
                    {
                        $("#" + t.split(",")[0]).addClass("not_available");
                    }
                }
                
            });
            if (startSem == "sommer")
            {
                //gewählt sommer
                modulListe.forEach(function (t)
                {
                    
                    //winter / sommer
                    if (t.split(",")[6] == "1" && t.split(",")[7] == "0")
                    {
                        if (!($("#" + t.split(",")[0]).is(".blocked,.blocked_wpp")))
                        {
                           $("#" + t.split(",")[0]).addClass("not_available");
                        }
                    }
                });
            }
        }
    }
}