﻿function insert_module_in_semester(mod_id, sem_id, optional)
{
    // console.log("Insert Module in Semester : "+mod_id);

    $("#" + mod_id).css("background", "#eee");
    $("#" + mod_id).removeClass("open_catalog");

    getElementByIndex(content, sem_id).push(new Array());

    if (optional == null)
    {

        if ((mod_id == "ALM" || mod_id == "M07") && (!moving))
        {
            fill_data(mod_id, sem_id);
        }
        else
        {
            append_module(mod_id, sem_id);
            // Modul Aus-Grauen Links

            if (!(mod_id).toString().includes("_WPP"))
            {
                $("#" + mod_id).parent().parent().addClass('blocked');
                $("#" + mod_id + "_WPP").parent().parent().addClass('blocked');

            } else
            {
                $("#" + mod_id).parent().parent().addClass('blocked_wpp');
                $("#" + (mod_id).toString().replace("_WPP", "")).parent().parent().addClass('blocked_wpp');
            }
            $("#" + mod_id).removeClass('ausgewaehlt');
            $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
        }
    }
    else
    {
        append_free_module(optional["mod_id"], optional["sem_id"], optional["name"], optional["v"], optional["u"], optional["p"], optional["pr"], optional["dozent"], optional["ects"]);
    }

    ausgewaehlt_modul = "", ausgewaehlt_semester = "";

    // Grünen Rahmen löschen LINKS

    // Grünen Rahmen löschen RECHTS

    update_semester_ects(mod_id, sem_id, 1);
    update_master_ects(mod_id, 1);

    update_rules();
}