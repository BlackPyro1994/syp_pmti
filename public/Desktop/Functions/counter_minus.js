function counter_minus()
{
    count = (count == 0 ? 0 : count++);

    var wert = Number(document.getElementById("count").textContent);

    if (wert > 0)
    {
        wert--;
    }

    document.getElementById("count").textContent = wert;

    modules_in_sem = $("#div_semester").children().last().children().length - 1;

    for (i = 0; i < modules_in_sem; i++)
    {

        var id = $("#div_semester").children().last().children().filter(":nth-child(" + 2 + ")").children().first().text().replace("ID: ", "");

        var mod_id = "mod_" + id;

        remove_module_from_content(id);
        
        $("#" + mod_id).remove();

        $("#" + id).parent().parent().removeClass('blocked');
        $("#" + id).parent().parent().removeClass('blocked_wpp');
        $("#" + id + "_WPP").parent().parent().removeClass('blocked');
        $("#" + id + "_WPP").parent().parent().removeClass('blocked_wpp');
        $("#" + (id).toString().replace("_WPP", "")).parent().parent().removeClass('blocked');
        $("#" + (id).toString().replace("_WPP", "")).parent().parent().removeClass('blocked_wpp');

    }
    
    content.pop();
    
    $("#div_semester").children().last().remove();
    remove_module_from_content(id);

    update_rules();
}