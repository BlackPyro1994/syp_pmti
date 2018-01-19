function loading(progressEvent)
{
    
    // $("#master_ects").innerText = 0;
    
    // document.getElementById("count").textContent = 99;
    
    var temp;
    
    console.log(progressEvent);
    
    var lines = this.result.split('\n');
    
    temp = lines[0].split(',');
    
    ok_button_new_plan({"count": temp[1], "semStart": temp[0]});
    
    for (var line = 1; line < lines.length; line++)
    {
        temp = lines[line];
        
        if (temp.split(',')[1] === "M07" || temp.split(',')[1] === "ALM")
        {
            
            // temp = temp.substring(1);
            temp = temp.split(',');
            
            insert_module_in_semester(temp[1], temp[0], {
                "mod_id": temp[1],
                "sem_id": temp[0],
                "name": temp[2],
                "v": temp[3],
                "u": temp[4],
                "p": temp[5],
                "pr": temp[6],
                "dozent": temp[7],
                "ects": temp[8]
            });
            
        }
        else
        {
            
            temp = temp.split(',');
            
            insert_module_in_semester(temp[1], temp[0]);

//				  for (var pos = 1; pos < temp.length; pos++)
//				  {
// 				     insert_module_in_semester(temp[pos], temp[0]);
//				  }
        
        }
    }
    
    document.getElementById('file-input').value = "";
    
}