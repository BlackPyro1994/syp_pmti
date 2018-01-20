function select_semester(caller)
{

    // ###                     $("#div_semester").children().removeClass('include');
    // ###                     $("#div_semester").children().filter(":odd").children().first().siblings().show();

    // caller.currentTarget;
    // console.log(caller);

    var id = $(caller.target).closest("button").attr("id");
    //console.log("SEMESTER::: "+$(caller.target).closest("button").attr("id"));
    
    // $(caller).toggleClass('ausgewaehlt');
    // $(caller.currentTarget).toggleClass('ausgewaehlt');
    // $(caller.target).toggleClass('ausgewaehlt');

    //console.log("CLASS: "+$(caller.target).closest("button").attr('class'));
    if ($(caller.target).closest("button").hasClass("ausgewaehlt"))
    {

        $("#"+id).toggleClass('ausgewaehlt');
    }
    else
    {
        $('#div_semester').children().removeClass('ausgewaehlt');
        $("#"+id).toggleClass('ausgewaehlt');

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
        ausgewaehlt_semester = id;
    }

}