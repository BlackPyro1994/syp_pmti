function click_catalog(click)
{
    console.log("-----------------------------------------------------------");
    
    console.log("open_catalog : " + "(" + open_catalog + ")");
    
    console.log("$(click).siblings().is(':hidden') : " + "(" + $(click).siblings().is(':hidden') + ")");
    
    if (open_catalog != "")
    {
        console.log("$(#" + open_catalog + ").siblings().is(':visible') : " + $("#" + open_catalog).siblings().is(':visible'));
    }
    
    console.log("(" + open_catalog + ") == (" + $(click).attr("id") + ") ? ");
    
    blocked = false;
    
    if (!blocked)
    {
        if (all_catalogs_closed == 0)
        {
            // ################################################################################################
            //              Neuer Katalog
            // ################################################################################################
            
            if (($(click).siblings().is(':hidden')) && open_catalog == "")
            {
                $(click).siblings().toggle(200);
                open_catalog = $(click).attr("id");
            }
            
            // ################################################################################################
            //              Gleiche Katalog (schließen)
            // ################################################################################################
            else if ($(click).attr("id") == open_catalog)
            {
                $(click).siblings().toggle(200);
                open_catalog = "";
            }
            
            // ################################################################################################
            //              Wechsel von Katalogen
            // ################################################################################################
            else if (( $("#" + open_catalog).siblings().is(':visible')) && open_catalog != $(click).attr("id"))
            {
                $("#" + open_catalog).siblings().toggle(200);
                $(click).siblings().toggle(200);
                open_catalog = $(click).attr("id");
            }
        }
    }
}

// ###########################################################################
function DEACTIVATED_click_catalog(click)
{
    if (!blocked)
    {
        click.preventDefault();
        click = click.target;
        $(click).closest(".class_click_catalog").css("background", "#eee");
        
        if ($(click).attr('class').includes("class_click_catalog"))
        {
            
            if (all_catalogs_closed == 0)
            {
                
                // ################################################################################################
                //              Neuer Katalog
                // ################################################################################################
                
                if (($(click).parent().siblings().is(':hidden')) && open_catalog == "")
                {
                    var new_click = $(click);
                    
                    $(new_click).parent().siblings().toggle(200);
                    
                    // ### open_catalog = $(".modul:visible").closest(".class_click_catalog").attr("id");
                    
                    // $(click).parent().parent().toggleClass("open_catalog");
                    
                    // ### $(click).closest(".class_click_catalog").toggleClass("open_catalog");
                    
                }
                
                // ################################################################################################
                //              Gleiche Katalog (schließen)
                // ################################################################################################
                
                else if ($(click).closest(".class_click_catalog").attr("id") == open_catalog)
                {
                    
                    // ### $(click).closest(".class_click_catalog").toggleClass("open_catalog");
                    
                    // ###  var new_click = $(click);
                    
                    // ### $(new_click).parent().siblings().not('.class_click_catalog').not('.class_click_catalog_label').toggle(200);
                    
                    // ###  open_catalog = "";
                    
                    // $(click).parent().parent().toggleClass("open_catalog");
                    
                    // $(click).closest(".class_click_catalog").toggleClass("open_catalog");
                    
                }
                
                // ################################################################################################
                //              Wechsel von Katalogen
                // ################################################################################################
                
                else if (( $("#" + open_catalog).children().first().siblings().is(':visible')) && open_catalog != $(click).closest(".class_click_catalog").attr("id"))
                {
                    
                    $("#" + open_catalog).children().first().siblings().toggle("hidden");
                    
                    $("#" + open_catalog).removeClass("open_catalog");
                    
                    // $(click).parent().parent().toggleClass("open_catalog");
                    
                    $(click).closest(".class_click_catalog").toggleClass("open_catalog");
                    
                    var new_click = $(click);
                    
                    $(new_click).parent().siblings().show(200);
                    
                    open_catalog = $(click).parent().parent().attr("id");
                    
                }
                
            }
            
        }
        else if ($(click).attr('class').includes("class_click_module_p"))
        {
            select_module(click);
        }
        else if ($(click).attr('class').includes("class_click_module_row"))
        {
            return;
        }
        
    }
    
}

