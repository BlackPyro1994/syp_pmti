function updateModuleString(mod_id)
{
    console.log("########################################");
    
    var BreakException = {};

    try
    {
        modulListe.forEach(function (entry)
        {
            console.log(entry);
            
            if (mod_id == entry.split(',')[0])
            {
                console.log(search_result);
                
                search_result = entry;

                throw BreakException;
            }
        });
    } catch (e)
    {
        console.log("########################################");
        
        if (e !== BreakException) throw e;
    }

}