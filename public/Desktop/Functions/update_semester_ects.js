function update_semester_ects(mod_id, wert)
{
    console.log("update_semester_ects(" + mod_id + "," + wert + ")");
    
    // wert = auswahl ob addieren(1) oder subtrahieren(0)
    var obj = document.getElementById("div_semester").querySelectorAll(".class_click_modules_in_semester");
    var length = obj.length;
    var id;
    
    for (i = 0; i < length; i++)
    {
        id = $(obj[i]).attr("id");
        
        updateModuleString(id);
        
        modulString = modulString.split(",");
        
        if (wert == 1)
        {
            
            semester_ects = semester_ects + modulString[9];
        }
        else if (wert == 0)
        {
            
            semester_ects = semester_ects - modulString[9];
        }
    }
    //console.log($.each($("#div_semester").children()));
    //$("#div_semester").append(semester_array[global_sem_id]);
    //show_semester_content(global_sem_id);
}