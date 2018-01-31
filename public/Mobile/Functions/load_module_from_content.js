/**
 * Sucht im Content Array nach Eintrag mit Modul ID
 *
 * @param id Die Modul ID nach der gesucht wird
 */
function load_module_from_content(id)
{
    
    var index = 0;
    var BreakException = {};
    
    try
    {
        content.forEach(function (t)
        {
            t.forEach(function (t2)
            {
                if (t2[0] == global_mod_id)
                {
                    search_result = t2;
                    throw BreakException;
                }
            });
        });
    }
    catch
        (e)
    {
        if (e !== BreakException) throw e;
    }
    
}