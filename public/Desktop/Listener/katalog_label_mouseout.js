function catalog_label_mouseover(event)
{
    if (!blocked)
    {
        
        if (!$(event.target).hasClass("cat-background"))
        {
            $(event.target).addClass("mouseOver");
        }
        
        if ($(event.target).hasClass("rounded-catalog-module"))
        {
            $(event.target).addClass("red_border");
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