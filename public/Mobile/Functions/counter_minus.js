function counter_minus()
{
    var cat_id, mod_id, index;
    
    if (count > 0)
    {
        count--;
    
        var anz = content[global_sem_id - 1].length;
        
        if (anz != 0)
        {
            for (i = 0; i < anz; i++)
            {
                if (content[global_sem_id - 1][i] != 0)
                {
                    mod_id = content[global_sem_id - 1][i][0];
                    cat_id = content[global_sem_id - 1][i][11];
                    safe_semester = $("#div_semester").children();
                    
                    index = blocked.indexOf(mod_id);
                    
                    if (index != -1)
                    {
                        blocked.splice(index, 1);
                    }
                    
                    update_master_ects(mod_id, 0);
                    content_html.splice(global_sem_id, 1);
                }
            }
    
            update_rules();
            $("#div_semester").children().last().remove();
            
            content.pop();
            content.push(new Array());
        }
    }
}