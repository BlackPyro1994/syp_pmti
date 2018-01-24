function left_click_on_module(caller) {
    console.log("function left_click_on_module("+caller+")");

    if ($(caller).hasClass("blocked") == false && $(caller).hasClass("blocked_wpp") == false && $(caller).hasClass("not_available") == false) {
        if (ausgewaehlt_semester != "") {
            insert_module_in_semester($(caller).attr('id'), ausgewaehlt_semester, null, false);
            return;
        }
        // ################################################################################################
        //              Neues Module
        // ################################################################################################
        if ((!$(caller).attr('class').includes("ausgewaehlt")) && ausgewaehlt_modul == "") {
            $("#div_semester").children().removeClass("not_available");
            $(caller).removeClass("mouseOver");
            $(caller).removeClass("mouse_over_border");
            $(caller).toggleClass('ausgewaehlt');

            ausgewaehlt_modul = $(caller).attr('id');

            availability_mask_semesters(ausgewaehlt_modul);
        }
        // ################################################################################################
        //              Gleiche Module (deaktivieren)
        // ################################################################################################
        else if ($(caller).attr('id') == ausgewaehlt_modul) {
            $("#div_semester").children().removeClass("not_available");
            $(caller).toggleClass('ausgewaehlt');

            ausgewaehlt_modul = "";
        }
        // ################################################################################################
        //              Wechsel von Modules
        // ################################################################################################
        else if ($("#" + ausgewaehlt_modul).attr('class').includes("ausgewaehlt") && ausgewaehlt_modul != $(caller).attr('id')) {
            $("#div_semester").children().removeClass("not_available");
            $("#" + ausgewaehlt_modul).removeClass('ausgewaehlt');
            $(caller).addClass('ausgewaehlt');

            ausgewaehlt_modul = $(caller).attr('id');

            availability_mask_semesters(ausgewaehlt_modul);
        }
    }
}