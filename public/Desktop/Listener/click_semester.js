function click_semester(click)
{
    console.log(click);
    select_semester(click);
    
    /*
    
    click.preventDefault();
    click = click.target;
    
    
    if ($(click).attr('class').includes("class_click_delete"))
    {
        // LOESCHEN
        delete_module_from_semester(click);
    }
    else if ($(click).attr('class').includes("class_click_move"))
    {
        // VERSCHIEBEN
        //$(click).addClass("ausgewählt");
        moving = 1;
        move_module_to_semester(click);
    }
    else if ($(click).attr('class').includes("class_click_p"))
    {
        var new_click = $(click).parent().parent().parent();
        select_semester(new_click);
    }
    // Winter / Sommer - Semester Label wurde geklickt
    else if ($(click).attr('class').includes("label"))
    {
        var new_click = $(click).parent().parent();
        select_semester(new_click);
    }
    else if ($(click).attr('class').includes("class_click_semester_row"))
    {
        var new_click = $(click).parent();
        select_semester(new_click);
    }
    */
    
    
}