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