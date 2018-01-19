function catalog_label_mouseover(event)
{
    if (!blocked)
    {
        if ($(event.target).parent().parent().attr('id') != open_catalog)
        {
            $(this).parent().parent().css("background", "red");
        }
    }
    
}