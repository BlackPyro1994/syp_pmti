function catalog_label_mouseover(event)
{
    if (!blocked)
    {
        if ($(event.target).hasClass("rounded-catalog-module"))
        {
            $(event.target).addClass("mouse_over_border");
        }
        
        if (!$(event.target).hasClass("cat-background"))
        {
            $(event.target).addClass("mouseOver");
        }
        else if(($(event.target).parent().children().first().siblings().not('.blocked').length - 1) == 0)
        {
            $("#" + ausgewaehlt_modul).parent().children().first().addClass("mouseOver");
        }
        
        if (ausgewaehlt_modul == $(event.target).attr("id"))
        {
            $(event.target).removeClass("mouseOver");
            $(event.target).removeClass("mouse_over_border");
        }
        else if($(event.target).hasClass("ausgewaehlt"))
        {
            $(event.target).removeClass("mouseOver");
            $(event.target).removeClass("mouse_over_border");
        }
        else if($(event.target).hasClass("blocked") || $(event.target).hasClass("blocked_wpp"))
        {
            $(event.target).removeClass("mouseOver");
            $(event.target).removeClass("mouse_over_border");
        }
        
    }
    
}

function catalog_label_mouseout(event)
{
    if (!blocked)
    {
        
        // $(event.target).css("font-weight:normal");
        
        $(event.target).removeClass("mouseOver");
        $(event.target).removeClass("mouse_over_border");
    }
}