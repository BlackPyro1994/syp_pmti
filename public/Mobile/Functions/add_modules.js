function add_modules(id)
{
    emptyModal();
    console.log("add_modules(" + id + ")");
    var mod_id;
    //$("#cat_footer").append('<button type = "button" class = "btn btn-default" id = "popup-catalogs-back">Zurück</button>');
    @for(mod <- modulListe) {
    if ("@{mod(11)}" == id)
    {
        mod_id = "@{mod(0)}";
        $("#catalog_list").append('<div id="' + mod_id + '" class="row modules_border class_click_modules"><button id="' + mod_id + '" class="btn btn-block"><div id="' + mod_id + '" class="row text-left"><div id="' + mod_id + '" class="col fett"><p id="' + mod_id + '">' + "@{mod(0)}" + '</p></div><div id="' + mod_id + '" class="col text-right"><p id="' + mod_id + '">ECTS: ' + "@{mod(9)}" + '</p></div></div><div id="' + mod_id + '" class="row normal text-left"><div id="' + mod_id + '" class="col"><p id="' + mod_id + '">Dozent: ' + "@{mod(8)}" + '</p></div></div></button></div>');
    }
}
}