function append_module_in_semester(mod_id) {
    console.log("append_module_in_semester(" + mod_id + ")");
    @for(mod <- modulListe) {
        if ("@{mod(0)}" == mod_id) {
            $("#div_semester").append('<div id="' + mod_id + '" class="row modules_border class_click_modules_in_semester margin-top"><button id="' + mod_id + '" class="btn btn-block"><div id="' + mod_id + '" class="row text-left"><div id="' + mod_id + '" class="col fett"><p>' + "@{mod(0)}" + '</p></div><div id="' + mod_id + '" class="col text-right"><p id="' + mod_id + '">ECTS: ' + "@{mod(9)}" + '</p></div></div><div id="' + mod_id + '" class="row normal text-left"><div id="' + mod_id + '" class="col"><p id="' + mod_id + '">Dozent: ' + "@{mod(8)}" + '</p></div></div></button></div>');
        }
    }
}