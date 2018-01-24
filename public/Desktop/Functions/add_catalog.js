function add_catalog(kat_id, title) {
    console.log("function add_catalog("+kat_id+","+title+")");
    $("#div_kataloge").append(
        '<div class = "class_click_catalog katalog">'

        + '<Button ' +

        'id="' + kat_id + '"' +
        'class = "btn-block rounded-catalog disabled-catalog" ' +
        'onclick="left_click_on_catalog(this)">' + title + '</Button>'

        + '</div>');

}