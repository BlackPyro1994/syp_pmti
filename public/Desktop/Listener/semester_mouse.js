function semester_mouseover(event)
{
    console.log(event);
    
    if (!blocked)
    {
        if ($(event.target).closest("button").hasClass("button_semester"))
        {
            $(event.target).closest("button").addClass("mouse_over_border");
        }
        
        if (ausgewaehlt_semester == $(event.target).attr("id"))
        {
            $(event.target).closest("button").removeClass("mouse_over_border");
        }
        
        if($(event.target).closest("button").hasClass("ausgewaehlt"))
        {
            $(event.target).closest("button").removeClass("mouse_over_border");
        }
        
        if($(event.target).closest("button").hasClass("not-available"))
        {
            $(event.target).closest("button").removeClass("mouse_over_border");
        }
        
    }
    
}

function semester_mouseout(event)
{
    if (!blocked)
    {
        $(event.target).closest("button").removeClass("mouse_over_border");
    }
}