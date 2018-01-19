function click_catalog(click)
{
    if (!$(click).hasClass("disabled-catalog"))
    {
        if (all_catalogs_closed == 0)
        {
            if (($(click).siblings().is(':hidden')) && open_catalog == "")
            {
                $(click).siblings().toggle(200);
                open_catalog = $(click).attr("id");
            }
            
            else if ($(click).attr("id") == open_catalog)
            {
                $(click).siblings().toggle(200);
                open_catalog = "";
            }
            
            else if (( $("#" + open_catalog).siblings().is(':visible')) && open_catalog != $(click).attr("id"))
            {
                $("#" + open_catalog).siblings().toggle(200);
                $(click).siblings().toggle(200);
                open_catalog = $(click).attr("id");
            }
        }
    }
}

