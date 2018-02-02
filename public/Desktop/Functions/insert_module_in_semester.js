/**
 * Fuegt ein Modul einem Semester hinzu
 *
 * @param mod_id ID des Moduls, das dem Semester hinzugefuegt wird
 * @param sem_id ID des Semesters, dem ein Modul hinzugefuegt wird
 * @param optional Enthaelt Freitext-Eingaben
 * @param load Ob gerade eine gespeicherte Datei geladen wird
 */
function insert_module_in_semester(mod_id, sem_id, optional, load)
{
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
                update_master_ects();
                
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
        else if(mod_id == "ALM")
        {
            append_free_module(optional[0],sem_id,optional[1],optional[2],optional[3],optional[4],optional[5],1,1,optional[6],optional[7],false,"AM");
        }
        else if(mod_id == "M07_WPP")
        {
            append_free_module(optional[0],sem_id,optional[1],optional[2],optional[3],optional[4],optional[5],1,1,optional[6],optional[7],false,"WPP");
        }
    }
    else if (load == true)
    {
        if (optional == null)
        {
            append_module(mod_id, sem_id, null, true);
            
            update_semester_ects(sem_id);
            update_master_ects();
            
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
    
//open_catalog = "";
    
    update_rules();
    
    window.scrollTo(0, 0);
}