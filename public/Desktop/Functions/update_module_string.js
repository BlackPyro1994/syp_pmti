function update_module_string(mod_id)
{
    console.log("update_module_string("+mod_id+")");
    
    var BreakException = {};
    
    try
    {
        modulListe.forEach(function (entry)
        {
            if (mod_id == entry.split(',')[0])
            {
                search_result = entry;
                throw BreakException;
            }
        });
    } catch (e)
    {
        if (e !== BreakException) throw e;
    }
    
}