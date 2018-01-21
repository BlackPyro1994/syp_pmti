function add_catalog(kat_id, title)
{
    // var katalog_count = $("#div_kataloge").children().length;
    
    /*
    $("#div_kataloge").append(
        
        '<div id="'+ kat_id+ '" class = "class_click_catalog katalog">'
        
                + '<div class = "class_click_catalog_tags tags">'
                        + '<h6 class = "class_click_catalog_label katalog_label" style="margin:5%">' + title + '</h6>'
                + '</div>'
        + '</div>');
        
        */
    
    $("#div_kataloge").append(
        '<div class = "class_click_catalog katalog">'
        
        // + '<Button class = "Btn rounded-semester Btn-Info class_click_catalog_label katalog_label">' + title + '</Button>'
        
        + '<Button id="' + kat_id + '"class = "btn-block rounded-catalog disabled-catalog" onclick="left_click_on_catalog(this)">' + title + '</Button>'
    
        // + '<Button class = "katalog_label rounded-semester">' + title + '</Button>'
        
        + '</div>');
    
}