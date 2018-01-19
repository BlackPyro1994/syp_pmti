function click_module(caller)
{
    console.log("TEST");
    
    if (!$(caller).parent().parent().attr('class').includes("blocked"))
    {

        // Semester bereits ausgewählt

        if (ausgewaehlt_semester != "")
        {

            ("1");

            insert_module_in_semester($(caller).attr('id'), ausgewaehlt_semester);

            return;
        }

        // ################################################################################################
        //              Neues Module
        // ################################################################################################

        if ((!$(caller).attr('class').includes("ausgewaehlt")) && ausgewaehlt_modul == "")
        {

            ("Modul Ausgewählt");

            $(caller).toggleClass('ausgewaehlt');

            ausgewaehlt_modul = $(caller).attr('id');

            // FEHLT NOCH !!!!!!!!!!!!!!!!!
            // availability_mask_semesters(ausgewaehlt_modul);

        }

        // ################################################################################################
        //              Gleiche Module (deaktivieren)
        // ################################################################################################

        else if ($(caller).attr('id') == ausgewaehlt_modul)
        {

            ("Module Nochmal Angeklickt");

            $(caller).toggleClass('ausgewaehlt');

            ausgewaehlt_modul = "";

            availability_mask_semesters(0);

        }

        // ################################################################################################
        //              Wechsel von Modules
        // ################################################################################################

        else if ($("#" + ausgewaehlt_modul).attr('class').includes("ausgewaehlt") && ausgewaehlt_modul != $(caller).attr('id'))
        {

            ("Anderes Modul Ausgewählt");

            $("#" + ausgewaehlt_modul).removeClass('ausgewaehlt');

            $(caller).addClass('ausgewaehlt');

            ausgewaehlt_modul = $(caller).attr('id');

            // FEHLT NOCH !!!!!!!!!!!!!!!!!1
            //  availability_mask_semesters(ausgewaehlt_modul);

        }
    }
}