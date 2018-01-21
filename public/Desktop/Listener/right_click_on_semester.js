function right_click_on_semester(caller) {
    console.log($(caller.target));

    // ###                     $("#div_semester").children().removeClass('include');
    // ###                     $("#div_semester").children().filter(":odd").children().first().siblings().show();

    // caller.currentTarget;
    // console.log(caller);

    console.log($(caller.target).closest("button"));

    var id = $(caller.target).closest("button").attr("id").replace("semester_", "");

    console.log("ID des Semesters : " + id);

    // console.log($(caller.target).closest("button"));
    // console.log($(caller.target).closest("button").attr("class"));

    if ($(caller.target).closest("button").hasClass("ausgewaehlt")) {
        $("#" + "semester_" + id).toggleClass('ausgewaehlt');
    }
    else {
        $('#div_semester').children().removeClass('ausgewaehlt');
        $("#" + "semester_" + id).toggleClass('ausgewaehlt');
    }

    console.log("select_semester() -> ausgewaehlt_modul : " + ausgewaehlt_modul);

    if (ausgewaehlt_modul != "") {

        insert_module_in_semester(ausgewaehlt_modul, id);

    }
    else {
        // ausgewaehlt_semester = $(caller).children().children().html().replace("Semester ", "");

        ausgewaehlt_semester = id;
        console.log("NOCH KEIN MODUL GEWÄHLT !");
        console.log("ausgewaehlt_semester : " + ausgewaehlt_semester);
    }

}