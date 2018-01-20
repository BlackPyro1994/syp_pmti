function append_module(mod_id, sem_id)
{
    updateModuleString(mod_id);
    
    search_result = search_result.split(",");
    
    
    $("#div_semester").children().filter(":nth-child(" + sem_id + ")").append(
        
        '<div class = "row" > ' +
        
            '<div '+'id="mod_' + mod_id + '"' + 'class = "semeter row">' +
        
                '<div class = "col-auto">' + '<p >ID: ' + mod_id + '</p>' + '</div>' +
        
                '<div class = "col-auto">' + '<p >' + search_result[1] + '</p>' + '</div>' +
        
                '<div class = "col-auto">' + '<p >' + 'V:' + search_result[2] + ',Ü:' + search_result[3] + ',P:' + search_result[4] + ',Pr:' + search_result[5] + '</p>' + '</div>' +
        
                '<div class = "col-auto">' + '<p >' + search_result[8] + '</p>' + '</div>' +
        
                '<div class = "col-auto">' + '<p style="vertical-align: middle,text-align: center">ECTS:' + search_result[9] + '</p>' + '</div>' +
        
            '</div>' +
        
            '<button type = "button" class = "button_delete col-auto btn btn-danger">x</button>' +
    
            '<button type = "button" class = "button_move col-auto btn btn-warning">>></button>'
        
        + '</div>');
    
    
    content[sem_id - 1].push(search_result);
    
    
}