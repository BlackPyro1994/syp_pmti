function click_catalog(click) {
    console.log("click_catalog ID: " + (click.target).id);
    global_catalog_id = (click.target).id;
    close = 0;

    store_catalog_name_by_id(global_catalog_id);

    $("#popup_title").text(search_result);
    $("#popup-icon").removeClass("fa-window-close");
    $("#popup-icon").addClass("fa-reply");

    add_modules_in_popup(global_catalog_id);
    
}