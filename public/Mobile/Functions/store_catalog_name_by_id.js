/**
 *
 *
 * @param cat_id
 */
function store_catalog_name_by_id(cat_id)
{
    var BreakException = {};
    
    try
    {
        katalogListe.forEach(function (entry)
        {
            if (entry.split(',')[0] == cat_id)
            {
                search_result = entry.split(',')[1];
                throw BreakException;
            }
            
        });
    } catch (e)
    {
        if (e !== BreakException) throw e;
    }
    
}