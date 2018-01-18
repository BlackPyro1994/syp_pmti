function append_free_module(name, v, u, p, pr, dozent, ects) {
    console.log("append_free_module(" + name + "," + v + "," + u + "," + p + "," + pr + "," + dozent + "," + ects + ")");
    
    if (global_mod_id == "ALM" && name == "")
        name = "Name";
    
    if (global_mod_id == "ALM" && dozent == "")
        dozent = "Dozent";
    
    if (global_mod_id == "ALM" && ects == "")
        ects = 0;
    
    if (global_mod_id == "ALM" && v == "")
        v = 0;
    
    if (global_mod_id == "ALM" && u == "")
        u = 0;
    
    if (global_mod_id == "ALM" && p == "")
        p = 0;
    
    if (global_mod_id == "ALM" && pr == "")
        pr = 0;
    
    $("#div_semester").append('<div id="' + global_mod_id + '" class="row modules_border class_click_modules_in_semester margin-top"><button id="' + global_mod_id + '" class="btn btn-block"><div id="' + global_mod_id + '" class="row text-left"><div id="' + global_mod_id + '" class="col fett"><p>' + global_mod_id + '</p></div><div id="' + global_mod_id + '" class="col text-right"><p id="' + global_mod_id + '">ECTS: ' + ects + '</p></div></div><div id="' + global_mod_id + '" class="row normal text-left"><div id="' + global_mod_id + '" class="col"><p id="' + global_mod_id + '">Dozent: ' + dozent + '</p></div></div></button></div>');
    //semester_array[global_sem_id - 1].push("," + global_mod_id + "," + name + "," + v + "," + u + "," + p + "," + pr + "," + dozent + "," + ects);
}