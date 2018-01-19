function append_module(mod_id, sem_id)
{
    updateModuleString(mod_id);
    
    search_result = search_result.split(",");
    
    
    $("#div_semester").children().filter(":nth-child(" + sem_id + ")").append('<div id="mod_' + mod_id + '"' + ' class = "row semester">' + '<div class = "col tags id">' + '<p class="class_click_p">ID: ' + mod_id + '</p>' + '</div>' +
        
        
        '<div class = "col tags name">' + '<p class="class_click_p">' +
        search_result[1] + '</p>' + '</div>' +
        
        
        '<div class = "col tags sws">' + '<p class="class_click_p">'
        + 'V:' + search_result[2]
        + ',Ü:' + search_result[3]
        + ',P:' + search_result[4]
        + ',Pr:' + search_result[5] + '</p>' + '</div>' +
        
        
        '<div class = "col tags dozent">' + '<p class="class_click_p">' +
        search_result[8] + '</p>' + '</div>' +
        
        
        '<div class = "col tags ects">' + '<p class="class_click_p" style="vertical-align: middle,text-align: center">ECTS:' +
        search_result[9] + '</p>' + '</div>' +
        
        
        '<div class = "col-1 tags">' + '<button type = "button" id = "button_loeschen" class = " btn btn-danger btn-sm btn-block class_click_delete">x</button>' + '</div>' +
        
        
        '<div class = "col-1">' + '<button type = "button" id = "button_verschieben" class = "btn btn-warning btn-sm btn-block class_click_move">>></button>' + '</div>' +
        
        
        '</div>');
    
    
    content[sem_id - 1].push(search_result);
    
    
}