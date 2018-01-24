﻿function insert_module_in_semester(mod_id, sem_id, optional, load)
{
    console.log("function insert_module_in_semester(" + mod_id + ", " + sem_id + ", " + optional + ", " + load + ")");
    
    if (load == false)
    {
        get_element_by_index(content, sem_id).push(new Array());
        
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
            
            //var name = optional["name"];
            var name = optional[1];
            
            //var v = optional["v"];
            var v = optional[2];
            
            //var u = optional["u"];
            var u = optional[3];
            
            //var p = optional["p"];
            var p = optional[4];
            
            //var pr = optional["pr"];
            var pr = optional[5];
            
            // var ws = optional["ws"];
            var ws = 1;
            
            //var sose = optional["sose"];
            var sose = 1;
            
            //var dozent = optional["dozent"];
            var dozent = optional[6];
            
            //var ects = optional["ects"];
            var ects = optional[7];
            
            //var istPflicht = optional["istPflicht"];
            var istPflicht = false;
            
            //var kat_id = optional["kat_id"];
            var kat_id = "AM";
            
            append_free_module(mod_id, sem_id, name, v, u, p, pr, ws, sose, dozent, ects, istPflicht, kat_id, true);
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
            var name = optional["name"];
            var v = optional["v"];
            var u = optional["u"];
            var p = optional["p"];
            var pr = optional["pr"];
            var ws = optional["ws"];
            var sose = optional["sose"];
            var dozent = optional["dozent"];
            var ects = optional["ects"];
            var istPflicht = optional["istPflicht"];
            var kat_id = optional["kat_id"];
            
            append_free_module(mod_id, sem_id, name, v, u, p, pr, ws, sose, dozent, ects, istPflicht, kat_id, true);
        }
    }
    
    ausgewaehlt_modul = "";
    ausgewaehlt_semester = "";

// -->
//open_catalog = "";
    
    update_rules();
}