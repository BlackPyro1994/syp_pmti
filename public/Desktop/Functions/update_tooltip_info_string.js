function update_tooltip_info_string()
{
    console.log("update_tooltip_info_string(" + mod_id + ")");
    
    var BreakException = {};
    
    try
    {
        modulListe.forEach(function (entry)
        {
            if (mod_id == entry.split(',')[0])
            {
                toolInfo = entry;
                throw BreakException;
            }
        });
    } catch (e)
    {
        if (e !== BreakException) throw e;
    }
    
}
