function click_katalog(click)
{
    if (!blocked)
    {
        click.preventDefault();
        
        click = click.target;
        
        $(click).closest(".class_click_katalog").css("background", "#eee");
        
        if ($(click).attr('class').includes("class_click_katalog"))
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
                    
                    // ### open_catalog = $(".modul:visible").closest(".class_click_katalog").attr("id");
                    
                    // $(click).parent().parent().toggleClass("open_catalog");
                    
                    // ### $(click).closest(".class_click_katalog").toggleClass("open_catalog");
                    
                }
                
                // ################################################################################################
                //              Gleiche Katalog (schließen)
                // ################################################################################################
                
                else if ($(click).closest(".class_click_katalog").attr("id") == open_catalog)
                {
                    
                    // ### $(click).closest(".class_click_katalog").toggleClass("open_catalog");
                    
                    // ###  var new_click = $(click);
                    
                    // ### $(new_click).parent().siblings().not('.class_click_katalog').not('.class_click_katalog_label').toggle(200);
                    
                    // ###  open_catalog = "";
                    
                    // $(click).parent().parent().toggleClass("open_catalog");
                    
                    // $(click).closest(".class_click_katalog").toggleClass("open_catalog");
                    
                }
                
                // ################################################################################################
                //              Wechsel von Katalogen
                // ################################################################################################
                
                else if (( $("#" + open_catalog).children().first().siblings().is(':visible')) && open_catalog != $(click).closest(".class_click_katalog").attr("id"))
                {
                    
                    $("#" + open_catalog).children().first().siblings().toggle("hidden");
                    
                    $("#" + open_catalog).removeClass("open_catalog");
                    
                    // $(click).parent().parent().toggleClass("open_catalog");
                    
                    $(click).closest(".class_click_katalog").toggleClass("open_catalog");
                    
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