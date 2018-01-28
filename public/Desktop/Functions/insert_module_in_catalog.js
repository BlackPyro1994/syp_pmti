function insert_module_in_catalog(katalog_id, module_id, module_title)
{
    console.log("insert_module_in_catalog(" + katalog_id + "," + module_id + "," + module_title + ")");
    
    $("#" + katalog_id).parent().append('<button data-toggle="tooltip" data-placement="right" title="" ' +
        'id = ' + module_id + ' ' +
        'onClick="left_click_on_module(this)" ' +
        'class = "katalog_label rounded-catalog-module">' + module_title + '</button>');
    $("#" + module_id).hide();
    
    update_module_string(module_id);
    
    $('[data-toggle="tooltip"]').tooltip({
        title: search_result,
        animation:true,
        delay: {show: 800, hide: 0}
    });
}