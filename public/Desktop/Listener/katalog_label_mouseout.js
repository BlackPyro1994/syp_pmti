function catalog_label_mouseover(event)
{
    console.log($(event.target).parent().children().first().siblings().not('.blocked').length);
    
    if (!blocked)
    {
        if ($(event.target).hasClass("rounded-catalog-module"))
        {
            $(event.target).addClass("red_border");
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
            $(event.target).removeClass("red_border");
        }
        else if($(event.target).hasClass("ausgewaehlt"))
        {
            $(event.target).removeClass("mouseOver");
            $(event.target).removeClass("red_border");
        }
        else if($(event.target).hasClass("blocked") || $(event.target).hasClass("blocked_wpp"))
        {
            $(event.target).removeClass("mouseOver");
            $(event.target).removeClass("red_border");
        }
        
    }
    
}

function catalog_label_mouseout(event)
{
    if (!blocked)
    {
        // console.log($(event.target));
        // $(event.target).css("font-weight:normal");
        
        $(event.target).removeClass("mouseOver");
        $(event.target).removeClass("red_border");
    }
}