function click_catalog(click)
{
    console.log("Click on Katalog ID: " + (click.target).id);
    global_catalog_id = (click.target).id;
    
    store_catalog_name_by_id(global_catalog_id);
    
    console.log(search_result);
    
    $("#popup_title").text(search_result);
    
    // $("#popup-catalogs-back").css('visibility', 'visible');
    
    $("#popup-catalogs-back").removeClass("fa-window-close");
    $("#popup-catalogs-back").addClass("fa-outdent");
    
    console.log($("#popup-catalogs-back").attr("class"));
    
    add_modules_in_popup(global_catalog_id);
    
}