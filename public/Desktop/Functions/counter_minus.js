function counter_minus()
{
    var wert = Number(document.getElementById("count").textContent);
    
    if (wert > 0)
    {
        count--;
        wert--;
    }
    
    document.getElementById("count").textContent = wert;
    modules_in_sem = $("#div_semester").children().last().children().length - 1;
    
    console.log("MODS: " + modules_in_sem);
    for (i = 0; i < modules_in_sem; i++)
    {
        var mod_id = $("#div_semester").children().last().children().last().children().attr('id');
        console.log("MOD ID: " + mod_id);
        var id = mod_id.replace("mod_", "");
        console.log("ID: " + id);
        
        $("#" + mod_id).parent().remove();
        
        $("#" + id).parent().parent().children().children().removeClass('blocked');
        $("#" + id).parent().parent().children().children().removeClass('blocked_wpp');
        $("#" + id + "_WPP").parent().parent().children().children().removeClass('blocked');
        $("#" + id + "_WPP").parent().parent().children().children().removeClass('blocked_wpp');
        $("#" + (id).toString().replace("_WPP", "")).parent().parent().children().children().removeClass('blocked');
        $("#" + (id).toString().replace("_WPP", "")).parent().parent().children().children().removeClass('blocked_wpp');
        
        update_master_ects(id, 0);
    }
    content.pop();
    $("#div_semester").children().last().remove();
    update_rules();
}