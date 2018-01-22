/**
 * Reduziert die Anzahl der Semester (count)
 *
 */
function counter_minus()
{
    
    var cat_id, mod_id, index;
    var newArray = [];
    global_sem_id = Number.parseInt($("#div_semester").children().last().attr('id').replace("sem", ""));
    
    if (count > 0)
    {
        count--;
        
        //console.log("LÖSCHE SEMESTER: " + sem_id);
        
        //console.log("Vor der Schleife:");
        //console.log("content: " + content);
        //console.log("blocked: " + blocked);
        //console.log("catalog_array: " + catalog_array);
        
        console.log(content);
        
        console.log("content[global_sem_id-1].length: " + content[global_sem_id - 1].length);
        
        var laenge = content[global_sem_id - 1].length;
        
        for (i = 0; i < laenge; i++)
        {
            //console.log("");
            
            
            //console.log("schleife i: " + i);
            
            mod_id = content[global_sem_id - 1][i][0];
            cat_id = content[global_sem_id - 1][i][11];
            
            safe_semester = $("#div_semester").children();
            
            //console.log("mod_id: " + mod_id);
            //console.log("cat_id: " + cat_id);
            //console.log("content.indexOf(mod_id): " + content.indexOf(mod_id));
            
            
            index = blocked.indexOf(mod_id);
            if (index != -1)
            {
                blocked.splice(index, 1);
            }
            
            index = catalog_array.indexOf(cat_id);
            if (index != -1)
            {
                catalog_array.splice(index, 1);
            }
            
            // index = content[global_sem_id - 1][i].indexOf(mod_id);
            
            /*if (index != -1)
            {
                //remove_module_from_content(mod_id);
                content = content[global_sem_id - 1][i].splice(index, 12);
                //content[sem_id - 1] = newArray;
            }*/
            
            console.log("VORHER");
            
            try
            {
                remove_module_from_content(mod_id);
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
            
            
            console.log("NACHHER");
            
            //delete_module_from_semester(mod_id);
            
            update_master_ects(mod_id, 0);
            
            content_html.splice(global_sem_id, 1);
            
            $("#" + mod_id).remove();
            
            //FEHLER
            //Springt aus Schleife nach Aufruf
            //Content wird nicht zurückgesetzt
            //remove_module_from_content(mod_id);
            
        }
        
        $("#div_semester").children().last().remove();
        //console.log("");
        //console.log("Nach der Schleife: ");
        //console.log("content: " + content);
        //console.log("blocked: " + blocked);
        //console.log("catalog_array: " + catalog_array);
        
        update_rules();
    }
}