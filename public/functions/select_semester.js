function select_semester(caller)
{

    // ###                     $("#div_semester").children().removeClass('include');
    // ###                     $("#div_semester").children().filter(":odd").children().first().siblings().show();

    if ($(caller).attr('class').includes("ausgewaehlt"))
    {

        $(caller).toggleClass('ausgewaehlt');
    }
    else
    {

        $('#div_semester').children().removeClass('ausgewaehlt');
        $(caller).toggleClass('ausgewaehlt');

    }

    if (ausgewaehlt_modul != "")
    {

        if (moving == 1)
        {

            var target = $(caller).children().children().html().substring(0, 1);

            var id = "mod_" + ausgewaehlt_modul;
            $("#" + id).remove();
            insert_module_in_semester(ausgewaehlt_modul, target);
            moving = 0;

        }
        else
        {

            insert_module_in_semester(ausgewaehlt_modul, $(caller).children().children().html().substring(0, 1));

        }

    }
    else
    {
        // ausgewaehlt_semester = $(caller).children().children().html().replace("Semester ", "");
        ausgewaehlt_semester = $(caller).children().children().html().substring(0, 1);
    }

}