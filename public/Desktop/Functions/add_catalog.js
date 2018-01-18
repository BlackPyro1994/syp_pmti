function add_catalog(kat_id, title)
{
    // var katalog_count = $("#div_kataloge").children().length;
    $("#div_kataloge").append('<div id="' + kat_id + '" class = "class_click_katalog katalog">' + '<div class = "class_click_katalog_tags tags">' + '<h6 class = "class_click_katalog_label katalog_label" style="margin:5%">' + title + '</h6>' + '</div>' + '</div>');
}