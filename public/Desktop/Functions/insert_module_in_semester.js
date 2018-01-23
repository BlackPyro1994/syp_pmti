function insert_module_in_semester(mod_id, sem_id, optional, load)
{
    console.log("function insert_module_in_semester("+mod_id+", "+sem_id+", "+optional+", "+load+")");
    if (load == false)
    {
        get_element_by_index(content, sem_id).push(new Array());
    }
    
    if (load == false)
    {
        if (optional == null)
        {
            if ((mod_id == "ALM" || mod_id == "M07_WPP") && (!moving))
            {
                fill_data(mod_id, sem_id);
            }
            else
            {
                append_module(mod_id, sem_id, null, false);
                update_semester_ects(sem_id);
                
                if (!(mod_id).toString().includes("_WPP"))
                {
                    $("#" + mod_id).addClass('blocked');
                    $("#" + mod_id + "_WPP").addClass('blocked');
                    
                } else
                {
                    $("#" + mod_id).addClass('blocked_wpp');
                    $("#" + (mod_id).toString().replace("_WPP", "")).addClass('blocked_wpp');
                }
                
                $("#" + mod_id).removeClass('ausgewaehlt');
                $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
            }
        }
        else
        {
            append_free_module(optional["mod_id"], optional["sem_id"], optional["name"], optional["v"], optional["u"], optional["p"], optional["pr"], optional["dozent"], optional["ects"], false);
        }
    }
    else if (load == true)
    {
        if (optional == null)
        {
            append_module(mod_id, sem_id, null, true);
            update_semester_ects(sem_id);
            
            if (!(mod_id).toString().includes("_WPP"))
            {
                $("#" + mod_id).addClass('blocked');
                $("#" + mod_id + "_WPP").addClass('blocked');
            }
            else
            {
                $("#" + mod_id).addClass('blocked_wpp');
                $("#" + (mod_id).toString().replace("_WPP", "")).addClass('blocked_wpp');
            }
            
            $("#" + mod_id).removeClass('ausgewaehlt');
            $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
        }
        else
        {
            append_free_module(optional["mod_id"], optional["sem_id"], optional["name"], optional["v"], optional["u"], optional["p"], optional["pr"], optional["dozent"], optional["ects"], true);
        }
    }
    
    
    ausgewaehlt_modul = "";
    ausgewaehlt_semester = "";


// -->
//open_catalog = "";
    
    update_rules();
}