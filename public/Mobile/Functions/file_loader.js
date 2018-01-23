$(document).ready(function ()
{
    document.getElementById('file-input').onchange = function ()
    {
        
        //$(".disabled-catalog").removeClass('disabled-catalog');
        
        //$(".btn-block.btn-light.rounded-semester").siblings().removeClass('blocked');
        //$(".btn-block.btn-light.rounded-semester").siblings().removeClass('blocked_wpp');
        
        var file = this.files[0];
        var reader = new FileReader();
        
        reader.onload = function (progressEvent)
        {
            content = [];
            
            var lines = this.result.split('\n');
    
            content = eval("(" + (lines[1]) + ")");
            
            for (var line = 1; line < lines.length; line++)
            {
                temp = lines[line];
                if (temp.split(',')[1] === "M07_WPP" || temp.split(',')[1] === "ALM")
                {
                    temp = temp.split(',');
                    if (temp[1].includes("_WPP"))
                    {
                        catalog_array.push("WPP");
                    }
                    if (temp[1] !== "ALM")
                    {
                        blocked.push(temp[1]);
                    }
                    
                    append_free_module(temp[1], temp[0], temp[2], temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[9], temp[10], temp[11], temp[12]);
                    save_semester_content(temp[0]);
                }
                else
                {
                    temp = temp.split(',');
                    if (temp[1].includes("_WPP"))
                    {
                        catalog_array.push("WPP");
                    } else
                    {
                        catalog_array.push(temp[12]);
                    }
                    append_module_in_semester(temp[1], temp[0]);
                    save_semester_content(temp[0]);
                }
            }
            
            load = 1;
            ok_button_new_plan({"count": temp2[1], "semStart": temp2[0]});
            
            //document.getElementById('file-input').value = "";
            
            //$("#button_new_plan").removeClass("red_border");
            //$('#button_planLaden').removeClass("red_border");
        };
        reader.readAsText(file);
    }
})


//FOR schleife der länge an semestern temp[1]
//FOR der kompletten Datei
//wenn temp[0](Semester ID) == i(schleife der länge der semester anzahl) // 1 == 1, 1 == 2 etc
//dann if m07 || alm append
//oder normales modul append
//dann save inhalt
//dann alle removen
//dann nächster FOR durchlauf

/*
append_free_module(temp[1], temp[0], temp[2], temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[9], temp[10], temp[11], temp[12]);
append_module_in_semester(temp[1], temp[0]);
laod = 1;
ok_button_new_plan({"count": temp[1], "semStart": temp[0]});
*/


