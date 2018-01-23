var position_x;
var position_y;

function remove_module_from_content(module_id)
{
    var BreakException = {};
    
    for (sem = 0; sem < content.length; sem++)
    {
        
        for (i = 0; i < content[sem].length; i++)
        {
            
            if (content[sem][i][0] == module_id)
            {
                console.log("gelöscht : " + module_id);
                
                position_x = sem;
                position_y = i;
    
                throw BreakException;
            }
        }
    }
    
}