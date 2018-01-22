/**
 *
 */
function availability_mask_modules()
{
    console.log("function availability_mask_modules()");
    $("#catalog_list").children().removeClass("not_available");
    
    if (global_sem_id % 2 == 0)
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
                console.log(t);
                
                console.log("------------------------------------");
                
                //console.log("Sommer : " + t.split(",")[6] + " Winter : " + t.split(",")[7]);
                //winter / sommer
                if (t.split(",")[6] == "1" && t.split(",")[7] == "0")
                {
                    //$("#catalog_list").children().addClass("not_available");
                    //document.getElementById('#'+t.split(",")[0]).class.addClass("not_available");
                    document.getElementById('#'+t.split(",")[0]).classList.add('not_available');
                    //$("#" + t.split(",")[0]).addClass("not_available");
                }
                else
                {
                    //$("#catalog_list").children().addClass("not_available");
                    //$("#" + t.split(",")[0]).removeClass("not_available");
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
                        $("#catalog_list").children().addClass("not_available");
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

