//function append_free_module(mod_id, sem_id, name, v, u, p, pr, dozent, ects)
function append_free_module(mod_id, sem_id, name, v, u, p, pr, ws, sose, dozent, ects, istPflicht, kat_id)
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

    search_result = (mod_id + "," + name + "," + v + "," + u + "," + p + "," + pr + "," + ws + "," + sose + "," + dozent + "," + ects + "," + istPflicht + "," + kat_id);
    search_result = search_result.split(",");
    content[sem_id - 1].push(search_result);

    update_semester_ects(sem_id);


    var filter_string = ":nth-child(" + sem_id + ")";
    $("#div_semester").children().filter(filter_string).append(

        '<div class = "row" > ' +
        '<div ' + 'id="mod_' + mod_id + '"' + 'class = "col-10">' +
        '<div class="row semester bg-light">' +
        '<div class = "col-2 tags">' + '<p >ID: ' + mod_id + '</p>' + '</div>' +

        '<div class = "col-3 tags">' + '<p >' + name + '</p>' + '</div>' +

        '<div class = "col-3 tags">' + '<p >' + 'V:' + v + ',Ü:' + u + ',P:' + p + ',Pr:' + pr + '</p>' + '</div>' +

        '<div class = "col-2 tags">' + '<p >' + dozent + '</p>' + '</div>' +

        '<div class = "col">' + '<p style="vertical-align: middle,text-align: center">ECTS:' + ects + '</p>' + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col">' +
        '<button id ="' + mod_id + '" type = "button" class = "button_delete col-5 btn btn-danger btn-sm semester absolute_center">x</button>' +
        '<button id ="' + mod_id + '" type = "button" class = "button_move col-5 btn btn-warning btn-sm semester absolute_center">>></button>' +
        '</div>' +
        '</div>');
}