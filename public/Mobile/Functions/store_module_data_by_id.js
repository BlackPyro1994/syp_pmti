function store_module_data_by_id(param)
{
    var index = 0;
    
    var BreakException = {};
    
    try
    {
        modulListe.forEach(function (entry)
        {
            
            index++;
            
            console.log(param + " == " + entry.split(',')[0] + " ? " );
            
            if (param == entry.split(',')[0])
            {
                console.log(entry);
                
                search_result = entry;
                
                throw BreakException;
            }
        });
    } catch (e)
    {
        if (e !== BreakException) throw e;
    }
    
}