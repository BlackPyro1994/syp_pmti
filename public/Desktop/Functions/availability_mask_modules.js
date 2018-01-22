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
            //gewählte = Sommer
            
            modulListe.forEach(function (t)
            {
                //console.log("Sommer : " + t.split(",")[6] + " Winter : " + t.split(",")[7]);
                //winter / sommer
                if (t.split(",")[6] == "1" && t.split(",")[7] == "0")
                {
                    $("#" + t.split(",")[0]).addClass("not_available");
                }
                else
                {
                    $("#div_katalog").children().addClass("not_available");
                    $("#" + t.split(",")[0]).removeClass("not_available");
                }
            });
            if(startSem == "sommer") {
                //gewählt winter
                modulListe.forEach(function (t)
                {
                    //console.log("Sommer : " + t.split(",")[6] + " Winter : " + t.split(",")[7]);
                    //winter / sommer
                    if (t.split(",")[6] == "0" && t.split(",")[7] == "1")
                    {
                        $("#" + t.split(",")[0]).addClass("not_available");
                    }
                    else
                    {
                        $("#div_katalog").children().addClass("not_available");
                        $("#" + t.split(",")[0]).removeClass("not_available");
                    }
                });
            }
        }
    } else {
        if (startSem == "winter")
        {
            //gewählte = winter
        
            modulListe.forEach(function (t)
            {
                //console.log("Sommer : " + t.split(",")[6] + " Winter : " + t.split(",")[7]);
                //winter / sommer
                if (t.split(",")[6] == "0" && t.split(",")[7] == "1")
                {
                    $("#" + t.split(",")[0]).addClass("not_available");
                }
                else
                {
                    $("#div_katalog").children().addClass("not_available");
                    $("#" + t.split(",")[0]).removeClass("not_available");
                }
            });
            if(startSem == "sommer") {
                //gewählt sommer
                modulListe.forEach(function (t)
                {
                    //console.log("Sommer : " + t.split(",")[6] + " Winter : " + t.split(",")[7]);
                    //winter / sommer
                    if (t.split(",")[6] == "1" && t.split(",")[7] == "0")
                    {
                        $("#" + t.split(",")[0]).addClass("not_available");
                    }
                    else
                    {
                        $("#div_katalog").children().addClass("not_available");
                        $("#" + t.split(",")[0]).removeClass("not_available");
                    }
                });
            }
        }
    }
}

/*
modulListe.forEach(function (t)
{
    console.log("Sommer : " + t.split(",")[6] + " Winter : " + t.split(",")[7]);

    //1 und 0
    if (t.split(",")[6] & (~t.split(",")[7]))
    {
        if (startSem == "winter")
        {
            modulListe.forEach(function (t2) {
                if (~t.split(",")[6])
                {
                
                }
            });
            
            $("#" + t.split(",")[0]).addClass("not_available");
        }
        else
        {
            $("#div_katalog").children().addClass("not_available");
            $("#" + t.split(",")[0]).removeClass("not_available");
        }
    }
    else if (~t.split(",")[6] & (t.split(",")[7]))
    {
        if(startSem == "sommer") {
        
        }
        
    }

});

*/
