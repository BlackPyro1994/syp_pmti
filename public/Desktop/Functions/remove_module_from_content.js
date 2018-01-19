function remove_module_from_content(module_id)
{
    var BreakException = {};
    
    var position_x_y = [];
    
    var newArray = [];
    
    try
    {
        for (sem_index = 0; sem_index < content.length; sem_index++)
        {
            for (mod_index = 0; mod_index < content[sem].length; mod_index++)
            {
                if ((content[sem][mod]).split(",")[1] == module_id)
                {
                    position_x_y = [sem, mod];
                    throw BreakException;
                }
            }
        }
    }
    catch (BreakException)
    {
        for (i = 0; i < content[sem].length; i++)
        {
            if (i != mod)
            {
                newArray.push(content[sem][i]);
            }
            
        }
        
        content[sem] = newArray;
    }
    
}