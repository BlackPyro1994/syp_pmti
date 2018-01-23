function append_module(mod_id, sem_id,optional,load)
{
    console.log("append_module("+mod_id+", "+sem_id+","+load+","+optional+")");
    
    // console.log(Boolean(optional));
    
    if (optional==null)
    {
        updateModuleString(mod_id);
        search_result = search_result.split(",");
    }
    else
    {
        search_result = optional["mod_id"] +","+ optional["name"] +","+ optional["v"] +","+ optional["u"] +","+ optional["p"] +","+ optional["pr"] +","+ optional["dozent"] +","+ optional["ects"];
    }
    
    console.log(search_result);
    
    if (moving == false)
    {
        console.log("mod_id : " + mod_id);
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
    
    moving = 0;
    
}