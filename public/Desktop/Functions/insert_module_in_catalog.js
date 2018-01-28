function insert_module_in_catalog(katalog_id, module_id, module_title)
{
    console.log("insert_module_in_catalog(" + katalog_id + "," + module_id + "," + module_title + ")");
    
    $("#" + katalog_id).parent().append('<button data-toggle="tooltip" data-placement="right" title="" ' +
        'id = ' + module_id + ' ' +
        'onClick="left_click_on_module(this)" ' +
        'class = "katalog_label rounded-catalog-module">' + module_title + '</button>');
    $("#" + module_id).hide();

    $('[data-toggle="tooltip"]').tooltip({
        title: toolInfo,
        animation:true,
        delay: {show: 800, hide: 0}
    });
}