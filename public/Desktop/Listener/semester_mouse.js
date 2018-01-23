function semester_mouseover(event)
{
    console.log(event);
    
    if (!blocked)
    {
        if ($(event.target).hasClass("button_semester"))
        {
            $(event.target).addClass("mouse_over_border");
        }
        
        if (ausgewaehlt_semester == $(event.target).attr("id"))
        {
            $(event.target).removeClass("mouse_over_border");
        }
        else if($(event.target).hasClass("ausgewaehlt"))
        {
            $(event.target).removeClass("mouse_over_border");
        }
        else if($(event.target).hasClass("not-available"))
        {
            $(event.target).removeClass("mouse_over_border");
        }
        
    }
    
}

function semester_mouseout(event)
{
    if (!blocked)
    {
        $(event.target).removeClass("mouse_over_border");
    }
}