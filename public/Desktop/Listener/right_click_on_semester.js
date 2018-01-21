function right_click_on_semester(caller) {

    if(open_catalog != "") {
        $("#" + open_catalog).parent().removeClass("cat-border");
        $("#" + open_catalog).removeClass("cat-background");
    }

    // ###                     $("#div_semester").children().removeClass('include');
    // ###                     $("#div_semester").children().filter(":odd").children().first().siblings().show();

    var id = $(caller.target).closest("button").attr("id").replace("semester_", "");

    console.log("Click Event : Semester ID : " + id);

    if ($(caller.target).closest("button").hasClass("ausgewaehlt")) {
        $("#" + "semester_" + id).toggleClass('ausgewaehlt');
    }
    else {
        $('#div_semester').children().removeClass('ausgewaehlt');
        $("#" + "semester_" + id).toggleClass('ausgewaehlt');
    }

    console.log("Click Event on Semester : " + id);

    if (ausgewaehlt_modul != "") {
        if(moving) {
            $("#mod_"+ausgewaehlt_modul).siblings().remove();
            $("#mod_"+ausgewaehlt_modul).remove();
        }
        insert_module_in_semester(ausgewaehlt_modul, id);

    }
    else {

        ausgewaehlt_semester = id;
        console.log("Click Event : ausgewaehlt_modul : " + ausgewaehlt_modul);
    }

}