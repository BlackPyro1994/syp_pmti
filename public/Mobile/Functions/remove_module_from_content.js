var position_x;
var position_y;

function remove_module_from_content(module_id)
{
    console.log("Remove from Array : " + module_id);
    
    var BreakException = {};
    var e = {};
    var newArray = [];
    
    
    for (sem = 0; sem < content.length; sem++)
    {
        console.log("outer : " + sem);
        
        for (mod = 0; mod < content[sem].length; mod++)
        {
            console.log("inner : " + mod);
            
            if (content[sem][mod][0] == module_id)
            {
                console.log("gelöscht : " + module_id);
                
                position_x = sem;
                position_y = mod;
                
                // throw BreakException;
                
                throw e;
            }
        }
    }
    
}