/**
 * Sucht im Content Array nach Eintrag mit Modul ID
 *
 * @param id Die Modul ID nach der gesucht wird
 */
function load_module_from_content(id)
{
    console.log("load_module_from_content("+id+")");
    
    var index = 0;
    var BreakException = {};
    
    try
    {
        content.forEach(function (t)
        {
            t.forEach(function (t2)
            {
                if (t2[0] == id)
                {
                    content_search_result = t2;
                    console.log(content_search_result);
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