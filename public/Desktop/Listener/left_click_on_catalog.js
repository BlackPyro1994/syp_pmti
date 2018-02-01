/**
 * Fuehrt die Aktion beim klicken auf einen Katalog aus
 *
 * @param click Das geklickte Element
 */
function left_click_on_catalog(click)
{
    if (!$(click).hasClass("disabled-catalog"))
    {
        
        if (all_catalogs_closed == 0)
        {
            
            if (($(click).siblings().is(':hidden')) && open_catalog == "")
            {
                $(click).siblings().toggle(200);
                
                $(click).parent().toggleClass("cat-border");
                $(click).toggleClass("cat-background");
                $(click).removeClass("mouseOver");
                
                open_catalog = $(click).attr("id");
                
                if (!open_catalog == "AM")
                {
                    if (($(click).parent().children().first().siblings().not('.blocked').length - 1) == 0)
                    {
                        $("#" + ausgewaehlt_modul).parent().toggleClass("cat-border");
                        
                        $("#" + open_catalog).removeClass("cat-background");
                        
                        $("#" + ausgewaehlt_modul).parent().children().first().siblings().toggle(200);
                        
                        open_catalog = "";
                    }
                }
                
                if (open_catalog == "WPP")
                {
                    $("#div_kataloge").children().last().siblings().hide(400);
                    
                    setTimeout(function ()
                    {
                        window.scrollTo(0, document.body.scrollHeight);
                    }, 40);
                    
                }
            }
            
            else if ($(click).attr("id") == open_catalog)
            {
                
                $(click).siblings().toggle(200);
                
                $(click).parent().toggleClass("cat-border");
                $(click).toggleClass("cat-background");
                $(click).addClass("mouseOver");
                
                open_catalog = "";
                
                if ($(click).attr("id") == "WPP")
                {
                    $("#div_kataloge").children().last().siblings().show(400);
                }
                
            }
            
            else if (( $("#" + open_catalog).siblings().is(':visible')) && open_catalog != $(click).attr("id"))
            {
                $("#" + open_catalog).siblings().toggle(200);
                $("#" + open_catalog).siblings().parent().removeClass("cat-border");
                $("#" + open_catalog).siblings().parent().children().removeClass("cat-background");
                
                $(click).siblings().toggle(200);
                $(click).parent().toggleClass("cat-border");
                $(click).toggleClass("cat-background");
                
                $(click).removeClass("mouseOver");
                
                open_catalog = $(click).attr("id");
                
                if (open_catalog == "WPP")
                {
                    $("#div_kataloge").children().last().siblings().hide(400);
                    
                    setTimeout(function ()
                    {
                        // window.scrollTo(0, document.body.scrollHeight);
                        // window.scrollTo(0, document.body.scrollHeight-document.body.children[0].children[0].children[5].children[0].children[0].scrollHeight);
                    }, 50);
                }
                
            }
        }
    }
}

