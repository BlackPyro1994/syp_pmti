var position_x;
var position_y;

function remove_module_from_content(module_id)
{
    var BreakException = {};
    
    var newArray = [];
    
    try
    {
        
        for (sem = 0; sem < content.length; sem++)
        {
            for (mod = 0; mod < content[sem].length; mod++)
            {
                if (content[sem][mod][0] == module_id)
                {
                    position_x = sem;
                    position_y = mod;
                    
                    throw BreakException;
                }
            }
        }
    }
    catch (e)
    {
        for (i = 0; i < content[position_x].length; i++)
        {
            if (i != position_y)
            {
                newArray.push(content[position_x][i]);
            }
            
        }
        
        content[sem] = newArray;
    }
    
}