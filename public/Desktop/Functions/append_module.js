function append_module(mod_id, sem_id)
{
    updateModuleString(mod_id);
    
    search_result = search_result.split(",");
    
    
    $("#div_semester").children().filter(":nth-child(" + sem_id + ")").append(
        
        '<div class = "row" > ' +
            '<div '+'id="mod_' + mod_id + '"' + 'class = "col-10">' +
                '<div class="row semester">' +
                    '<div class = "col-2 tags">' + '<p >ID: ' + mod_id + '</p>' + '</div>' +

                    '<div class = "col-3 tags">' + '<p >' + search_result[1] + '</p>' + '</div>' +

                    '<div class = "col-3 tags">' + '<p >' + 'V:' + search_result[2] + ',Ü:' + search_result[3] + ',P:' + search_result[4] + ',Pr:' + search_result[5] + '</p>' + '</div>' +

                    '<div class = "col-2 tags">' + '<p >' + search_result[8] + '</p>' + '</div>' +

                    '<div class = "col">' + '<p style="vertical-align: middle,text-align: center">ECTS:' + search_result[9] + '</p>' + '</div>' +
                '</div>' +
            '</div>' +
            '<div class="col">' +
                '<button id ="'+mod_id+'" type = "button" class = "button_delete col-5 btn btn-danger btn-sm semester absolute_center">x</button>' +
                '<button id ="'+mod_id+'" type = "button" class = "button_move col-5 btn btn-warning btn-sm semester absolute_center">>></button>' +
            '</div>' +
        '</div>');

    content[sem_id - 1].push(search_result);

}