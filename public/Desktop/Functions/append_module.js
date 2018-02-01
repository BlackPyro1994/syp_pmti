/**
 * Erstellt das zuvor ausgewählte Modul in der Semesteransicht
 *
 * @param mod_id Die Modul ID des zu erstellenden Moduls
 * @param sem_id Die Semester ID in welchem sich das Modul befinden wird
 * @param optional Enthaelt Freitext-Eingaben
 * @param load Ob gerade eine gespeicherte Datei geladen wird
 */
function append_module(mod_id, sem_id, optional, load)
{
    
    if (optional == null)
    {
        update_module_string(mod_id);
        search_result = search_result.split(",");
    }
    else
    {
        // search_result = optional["mod_id"] +","+ optional["name"] +","+ optional["v"] +","+ optional["u"] +","+ optional["p"] +","+ optional["pr"] +","+ optional["dozent"] +","+ optional["ects"];
        search_result = optional[0] + "," + optional[1] + "," + optional[2] + "," + optional[3] + "," + optional[4] + "," + optional[5] + "," + optional[6] + "," + optional[7];
    }
    
    if (moving == false)
    {
        
        update_master_ects(mod_id, 1);
    }
    
    var filter_string = ":nth-child(" + sem_id + ")";
    
    $("#div_semester").children().filter(filter_string).append(
        '<div class = "row" > ' +
        '<div ' + 'id="mod_' + mod_id + '"' + 'class = "col-10">' +
        '<div class="row semester bg-light">' +
        '<div class = "col-2 tags">' + '<p >ID: ' + mod_id + '</p>' + '</div>' +
        
        '<div class = "col-3 tags">' + '<p >' + search_result[1] + '</p>' + '</div>' +
        
        '<div class = "col-3 tags">' + '<p >' + 'V:' + search_result[2] + ',Ü:' + search_result[3] + ',P:' + search_result[4] + ',Pr:' + search_result[5] + '</p>' + '</div>' +
        
        '<div class = "col-2 tags">' + '<p >' + search_result[8] + '</p>' + '</div>' +
        
        '<div class = "col">' + '<p style="vertical-align: middle,text-align: center">ECTS:' + search_result[9] + '</p>' + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col">' +
        '<button type = "button" class = "button_delete col-5 btn btn-danger btn-sm semester absolute_center">x</button>' +
        '<button type = "button" class = "button_move col-5 btn btn-warning btn-sm semester absolute_center">>></button>' +
        '</div>' +
        '</div>');
    
    if (!load)
    {
        content[sem_id - 1].push(search_result);
    }
    
    // moving = 0;
    
}

