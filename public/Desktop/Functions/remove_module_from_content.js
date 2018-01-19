function remove_module_from_content(module_id)
{
    
    //console.log(content);
    console.log("-------------------------------------------------------------------");
    
    var BreakException = {};
    
    try
    {
        
        for (sem = 0; sem < content.length; sem++)
        {
            for (mod = 0; mod < content[sem].length; mod++)
            {
                var string = (content[sem][mod]);
                
               // string = string.substr(1, string.length);
                string = string.split(",");
                
                // console.log(string);
                
                // console.log("Semester : " + sem + " Modul : " + string);
                
                // console.log(string[0] + " == " + module_id + " ?");
                
                if (string[1] == module_id)
                {
                    console.log("Modul " + module_id + " wird entfernt !");
                    // content[sem] = content[sem].splice(mod,1);
                    
                    var newArray = [];
                    
                    for (i = 0; i < content[sem].length; i++)
                    {
                        console.log(content[sem][i]);
                       // if (content[sem][i] != mod)
                        if (i!=mod)

                        {
                            newArray.push(content[sem][i]);

                            
                            console.log("-------------------------------------------------------------------");
                            //console.log(newArray);
                            //console.log(content);
                            
                          //  throw BreakException;
                        }

                    }
                    content[sem] = newArray;
                    console.log(content);
                    
                    
                }
            }
        }
        
    }
    
    catch (e)
    {
        if (e !== BreakException) throw e;
    }
    
}