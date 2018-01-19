function popup_catalog_back(click)
{
    console.log("Zurück");
    open = 1;
    $("#popup_title").text("Modul-Kataloge :");
    // $("#popup-catalogs-back").css('visibility', 'hidden');
    
    $("#popup-catalogs-back").addClass("fa-window-close");
    $("#popup-catalogs-back").removeClass("fa-outdent");
    
    console.log($("#popup-catalogs-back").attr("class"));
    
    show_catalogs();
    
}