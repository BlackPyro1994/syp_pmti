function insert_module_in_catalog(katalog_id, module_id, module_title)
{

    $("#" + katalog_id).append('<div class = "class_click_module_row row modul">' + '<div class = "class_click_module_tag tags" style = "text-align: center">'

        + '<p id = ' + module_id + ' class = "class_click_module_p">'

        + module_title

        + '</p>'

        + '</div>');
}