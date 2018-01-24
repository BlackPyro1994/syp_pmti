function insert_module_in_catalog(katalog_id, module_id, module_title)
{
    
    $("#" + katalog_id).parent().append('<Button ' +
        'id = ' + module_id + ' ' +
        'onClick="left_click_on_module(this)" ' +
        'class = "katalog_label rounded-catalog-module">' + module_title + '</Button>');
    $("#" + module_id).hide();
    
}