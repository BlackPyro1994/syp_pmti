function availability_mask_modules()
{
    
    $("#catalog_list").children().children().removeClass("not_available");
    
    if (global_sem_id % 2 == 0)
    {
        if (startSem == "winter")
        {
            //gewählte = Sommer
            
            modulListe.forEach(function (t)
            {
                if (t.split(",")[6] == "1" && t.split(",")[7] == "0")
                {
                    // WINTER
                    $('#' + t.split(",")[0]).children().addClass('not_available');
                    $('#' + t.split(",")[0]).removeClass('class_click_modules');
                }
            });
            
        }
        if (startSem == "sommer")
        {
            //gewählt winter
            
            modulListe.forEach(function (t)
            {
                
                //winter / sommer
                
                if (t.split(",")[6] == "0" && t.split(",")[7] == "1")
                {
                    $("#" + t.split(",")[0]).children().addClass("not_available");
                    $('#' + t.split(",")[0]).removeClass('class_click_modules');
                }
            });
        }
    }
    
    else if (global_sem_id % 2 == 1)
    {
        if (startSem == "winter")
        {
            // Start Winter --- Semester 1,3,5,7,9  -> Winter
            
            modulListe.forEach(function (t)
            {
                ////console.log("Sommer : " + t.split(",")[6] + " Winter : " + t.split(",")[7]);
                //winter / sommer
                if (t.split(",")[6] == "0" && t.split(",")[7] == "1")
                {
                    $("#" + t.split(",")[0]).children().addClass("not_available");
                    $('#' + t.split(",")[0]).removeClass('class_click_modules');
                }
            });
        }
        else if (startSem == "sommer")
        {
            // Start Sommer --- Semester 1,3,5,7,9  -> SOMMMER
            
            modulListe.forEach(function (t)
            {
                //winter / sommer
                
                if (t.split(",")[6] == "1" && t.split(",")[7] == "0")
                {
                    $("#" + t.split(",")[0]).children().addClass("not_available");
                    $('#' + t.split(",")[0]).removeClass('class_click_modules');
                }
            });
        }
    }
}

