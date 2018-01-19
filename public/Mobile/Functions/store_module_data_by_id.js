/**
 * Schreibt den Inhalt des Arrays in eine Variable
 *
 * @param id
 */
function store_module_data_by_id(id)
{
    var index = 0;
    
    var BreakException = {};
    
    try
    {
        modulListe.forEach(function (entry)
        {
            
            index++;
            
            console.log(id + " == " + entry.split(',')[0] + " ? " );
            
            if (id == entry.split(',')[0])
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