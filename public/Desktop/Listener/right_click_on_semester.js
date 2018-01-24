function right_click_on_semester(caller) {
    var semester_id = $(caller.target).closest("button").attr("id").replace("semester_", "");

    console.log(semester_id);

    if (!$(caller.target).closest("button").hasClass("not_available")) {
        //########################################################################

        if (ausgewaehlt_modul != "") {
            if (moving) {
                $("#mod_" + ausgewaehlt_modul).siblings().remove();
                $("#mod_" + ausgewaehlt_modul).remove();
                remove_module_from_content(ausgewaehlt_modul);
                update_semester_ects(old_sem_id);
            }
            else {
                if (($("#" + ausgewaehlt_modul).parent().children().first().siblings().not('.blocked').length - 1) == 0) {
                    $("#" + ausgewaehlt_modul).parent().toggleClass("cat-border");
                    $("#" + open_catalog).removeClass("cat-background");
                    $("#" + ausgewaehlt_modul).parent().children().first().siblings().toggle(200);

                    open_catalog = "";
                }
            }

            insert_module_in_semester(ausgewaehlt_modul, semester_id, null, false);

            $("#div_semester").children().removeClass("not_available");
        }
        else {
            if ($(caller.target).closest("button").hasClass("ausgewaehlt")) {
                $("#div_semester").children().removeClass("mouse_over_border");

                $("#" + "semester_" + semester_id).toggleClass('ausgewaehlt');

                $("#div_kataloge").children().children().removeClass("not_available");

                ausgewaehlt_semester = "";
            }
            else {
                $('#div_semester').children().removeClass('ausgewaehlt');
                $("#" + "semester_" + semester_id).toggleClass('ausgewaehlt');

                ausgewaehlt_semester = semester_id;
                availability_mask_modules(semester_id);

            }
        }
    }
}
