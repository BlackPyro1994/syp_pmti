function updateModuleString(mod_id)
{
    var index = 0;

    var BreakException = {};

    try
    {
        modulListe.forEach(function (entry)
        {

            index++;

            if (mod_id == entry.split(',')[0])
            {
                modulString = entry;

                throw BreakException;
            }
        });
    } catch (e)
    {
        if (e !== BreakException) throw e;
    }

}

//###########################################################################

/*

function get_catalog_name_by_id(cat_id)
{
    var BreakException = {};
    
    index = 0;
    
    check = false;
    
    try
    {
        katalogListe.forEach(function (entry)
        {
            index++;
            
            console.log(index);
            
            if (!check)
            {
                
                if (entry.split(',')[0] == cat_id)
                {
                    console.log("Katalog Name der ID : " + cat_id + " gefunden : " + entry.split(',')[1]);
                    check=true;
                    return entry.split(',')[1];
                    
                }
            }
            else
            {
                throw BreakException;
            }
        });
    } catch (e)
    {
        if (e !== BreakException) throw e;
    }
    
}

*/