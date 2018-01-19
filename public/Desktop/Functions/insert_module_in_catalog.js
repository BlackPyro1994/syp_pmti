function insert_module_in_catalog(katalog_id, module_id, module_title)
{

    /*
    $("#" + katalog_id).parent().append(
        '<div class = "class_click_module_row row modul">' +
            '<div class = "class_click_module_tag tags" style = "text-align: center">' +
            '<p id = ' + module_id + ' class = "class_click_module_p">'+ module_title+ '</p>'+
        '</div>');
    */
    
    $("#" + katalog_id).parent().append('<Button id = ' + module_id + ' onClick="click_module(this)" class = "katalog_label rounded-semester">' + module_title + '</Button>');
    $("#" + module_id).hide();
    
    
}