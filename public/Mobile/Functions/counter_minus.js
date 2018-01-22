/**
 * Reduziert die Anzahl der Semester (count)
 *
 */
function counter_minus()
{
    
    var cat_id, mod_id, index;
    
    var newArray = [];
    
    global_sem_id = Number.parseInt($("#div_semester").children().last().attr('id').replace("sem", ""));
    
    // debug(content);
    
    // console.log("content[global_sem_id-1].length: " + content[global_sem_id - 1].length);
    
    var laenge = content[global_sem_id - 1].length;
    
    for (i = 0; i < laenge; i++)
    {
        mod_id = content[global_sem_id - 1][i][0];
        cat_id = content[global_sem_id - 1][i][11];
        safe_semester = $("#div_semester").children();
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
        var position_x;
        var position_y;
        try
        {
            var BreakException = {};
            for (x = 0; x < content.length; x++)
            {
                for (y = 0; y < content[x].length; y++)
                {
                    if (content[x][y][0] == module_id)
                    {
                        console.log("gelöscht : " + module_id);
                        position_x = x;
                        position_y = y;
                        throw BreakException;
                    }
                }
            }
        }
        catch
            (e)
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
        update_master_ects(mod_id, 0);
        content_html.splice(global_sem_id, 1);
        $("#" + mod_id).remove();
    }
    $("#div_semester").children().last().remove();
    update_rules();
}