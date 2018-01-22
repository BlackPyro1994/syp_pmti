function availability_mask_modules(semester_id)
{
    console.log("adsasda");
    
    $("#div_katalog").children().removeClass("not_available");
    
    if (ausgewaehlt_semester % 2 == 0)
    {
        modulListe.forEach(function (t)
        {
            
            console.log("Sommer : " + t.split(",")[6] + " Winter : " + t.split(",")[7]);
            
            if (t.split(",")[6] & (~t.split(",")[7]))
            {
                
                if (startSem == "winter")
                {
                    $("#" + t.split(",")[0]).addClass("not_available");
                }
                else
                {
                    $("#div_katalog").children().addClass("not_available");
                    $("#" + t.split(",")[0]).removeClass("not_available");
                }
            }
        });
        
        
    }
    
    // console.log(startSem);
    
    // console.log("Eindeutig :: " + (search_result[6] & (~search_result[7])));


//######################################################
    
    console.log("WURDE AUFGERUFEN");
    
}