function test_3()
{

    var click = '#PM > div.class_click_katalog_tags.tags > h6';

    var new_click = $(click);

    $(new_click).trigger('click');

    $('#WPMT > div.class_click_katalog_tags.tags > h6').trigger('click');
}