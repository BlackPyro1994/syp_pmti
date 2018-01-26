$(document).ready(function ()
{
    document.getElementById('file-input').onchange = function ()
    {
        $(".disabled-catalog").removeClass('disabled-catalog');
        
        $(".btn-block.btn-light.rounded-semester").siblings().removeClass('blocked');
        $(".btn-block.btn-light.rounded-semester").siblings().removeClass('blocked_wpp');
        
        var file = this.files[0];
        var reader = new FileReader();
        
        reader.onload = function (progressEvent)
        {
            content = [];
            
            var temp;
            
            // var str = Base64Encode(this.result);
            
            var str = this.result;
            
            var lines = str.split('\n');
            
            // temp = lines[0].split(',');
    
            // temp = lines[0];
            
            // ok_button_new_plan({"count": temp[1], "semStart": temp[0]});
    
            ausgewaehlt_semester = "";
            ausgewaehlt_modul = "";
            open_catalog = "";
            all_catalogs_closed = 0;
            moving = 0;
            search_result = "";
            
            content = eval("(" + (lines[1]) + ")");
    
            load = 1;
            
            ok_button_new_plan({"count": content.length, "semStart": lines[0]});
    
            load = 0;

            for (x = 0; x < content.length; x++)
            {
                for (y = 0; y < content[x].length; y++)
                {
                    if (content[x][y][0] == "M07_WPP" || content[x][y][0] == "ALM")
                    {
                        insert_module_in_semester(content[x][y][0], (x + 1), {
                            "mod_id": content[x][y][0],
                            "sem_id": (x+1),
                            "name": content[x][y][1],
                            "v": content[x][y][2],
                            "u": content[x][y][3],
                            "p": content[x][y][4],
                            "pr": content[x][y][5],
                            "ws": content[x][y][6],
                            "sose": content[x][y][7],
                            "dozent": content[x][y][8],
                            "ects": content[x][y][9],
                            "istPflicht": content[x][y][10],
                            "kat_id": content[x][y][11],
                        }, true);
                    }
                    else
                    {
                        insert_module_in_semester(content[x][y][0], (x + 1), null, true);
                    }
                }
                
            }
            
            document.getElementById('file-input').value = "";
            
            $("#button_new_plan").removeClass("mouse_over_border");
            $('#button_planLaden').removeClass("mouse_over_border");
        };
        reader.readAsText(file);
    }
})