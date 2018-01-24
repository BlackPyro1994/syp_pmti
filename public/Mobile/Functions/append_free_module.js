/**
 * Erstellt ein Freitext(Auflagen)modul mit den zuvor eingetragenen Werten
 *
 * @param mod_id
 * @param sem_id
 * @param name Name des Moduls
 * @param v Vorlesungsstunden in der Woche (sws)
 * @param u Übungsstunden in der Woche (sws)
 * @param p Praktikumsstunden in der Woche (sws)
 * @param pr Projektstunden in der Woche (sws)
 * @param ws Angebot im Wintersemester = 1
 * @param sose Angebot im Sommersemester = 1
 * @param dozent Name des Dozenten
 * @param ects Anzahl der ECTS-Punkte für das Modul
 * @param istPflicht Ob das Modul ein Pflichtmodul ist
 * @param kat_id Die zugehörige Katalog ID
 */
function append_free_module(mod_id, sem_id, name, v, u, p, pr, ws, sose, dozent, ects, istPflicht, kat_id) {
    console.log("function append_free_module(" + name + "," + v + "," + u + "," + p + "," + pr + "," + ws + "," + sose + "," + dozent + "," + ects + "," + istPflicht + "," + kat_id + ",)");

    if (global_mod_id.includes("ALM") && name == "")
        name = "Name";
    
    if (global_mod_id.includes("ALM") && dozent == "")
        dozent = "Dozent";
    
    if (global_mod_id.includes("ALM") && ects == "")
        ects = 0;
    
    if (global_mod_id.includes("ALM") && v == "")
        v = 0;
    
    if (global_mod_id.includes("ALM") && u == "")
        u = 0;
    
    if (global_mod_id.includes("ALM") && p == "")
        p = 0;
    
    if (global_mod_id.includes("ALM") && pr == "")
        pr = 0;

    search_result = (mod_id + "," + name + "," + v + "," + u + "," + p + "," + pr + "," + ws + "," + sose + "," + dozent + "," + ects + "," + istPflicht + "," + kat_id);
    search_result = search_result.split(",");

    if(!move) {
        alm_array.push([mod_id,name,v,u,p,pr,ws,sose,dozent,ects,istPflicht,kat_id]);
        if(mod_id == "M07_WPP") {
            m07_array.push([mod_id,name,v,u,p,pr,ws,sose,dozent,ects,istPflicht,kat_id]);
        }
    }


    content[sem_id - 1].push(search_result);

    $("#div_semester").append('<div id="' + mod_id + '" class="row modules_border class_click_modules_in_semester margin-top"><button id="' + mod_id + '" class="btn btn-block"><div id="' + mod_id + '" class="row text-left"><div id="' + mod_id + '" class="col fett"><p>' + mod_id + '</p></div><div id="' + mod_id + '" class="col text-right"><p id="' + mod_id + '">ECTS: ' + ects + '</p></div></div><div id="' + mod_id + '" class="row normal text-left"><div id="' + mod_id + '" class="col"><p id="' + mod_id + '">Dozent: ' + dozent + '</p></div></div></button></div>');

    update_rules();
}