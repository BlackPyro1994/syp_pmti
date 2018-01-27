function counter_minus()
{
    modules_in_sem = $("#div_semester").children().last().children().length- 1;
    
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
    
    if (count > 1)
    {
        count--;
        document.getElementById("count").textContent--;
    }
    else
    {
        console.log($("#regeln").children());
        
        $("#regeln").children().remove();
        
        count--;
        document.getElementById("count").textContent--;
        
        $("#div_kataloge").empty();
        show_catalogs();
        
        document.getElementById("button_minus").disabled = true;
        document.getElementById("button_speichern").disabled = true;
        document.getElementById("button_pdf").disabled = true;
        
        blocked = true;
        
        $("#button_new_plan").addClass("mouse_over_border");
        $('#button_planLaden').addClass("mouse_over_border");
        $("#button_plus").addClass("mouse_over_border");
        
        return;
        
    }
}