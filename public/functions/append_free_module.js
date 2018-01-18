function append_free_module(mod_id, sem_id, name, v, u, p, pr, dozent, ects)
{
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

    // getElementByIndex(content, sem_id).push(new Array());

    // getLast(getElementByIndex(content, sem_id)).push("#" + sem_id + "," + mod_id + "," + name + "," + v + "," + u + "," + p + "," + pr + "," + dozent + "," + ects);

    // getElementByIndex(content, sem_id-1).push("#" + sem_id + "," + mod_id + "," + name + "," + v + "," + u + "," + p + "," + pr + "," + dozent + "," + ects);

    content[sem_id - 1].push("," + mod_id + "," + name + "," + v + "," + u + "," + p + "," + pr + "," + dozent + "," + ects);

    $("#div_semester").children().filter(":nth-child(" + sem_id + ")").append('<div id="mod_' + mod_id + '"' + ' class = "row semester">' + '<div class = "col tags id">' + '<p class="class_click_p">ID: ' + mod_id + '</p>' + '</div>' + '<div class = "col tags name">' + '<p class="class_click_p">' + name + '</p>' + '</div>' + '<div class = "col tags sws">' + '<p class="class_click_p">V:' + v + ',Ü:' + u + ',P:' + p + ',Pr:' + pr + '</p>' + '</div>' + '<div class = "col tags dozent">' + '<p class="class_click_p">' + dozent + '</p>' + '</div>' + '<div class = "col tags ects">' + '<p class="class_click_p" style="vertical-align: middle,text-align: center">ECTS: ' + ects + '</p>' + '</div>' + '<div class = "col-1 tags">' + '<button type = "button" id = "button_loeschen" class = " btn btn-danger btn-sm btn-block class_click_delete">x</button>' + '</div>' + '<div class = "col-1">' + '<button type = "button" id = "button_verschieben" class = "btn btn-warning btn-sm btn-block class_click_move">>></button>' + '</div>' + '</div>');

}