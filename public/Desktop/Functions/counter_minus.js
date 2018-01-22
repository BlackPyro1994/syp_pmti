function counter_minus() {
    count = (count == 0 ? 0 : count++);

    var wert = Number(document.getElementById("count").textContent);

    if (wert > 0) {
        wert--;
    }

    document.getElementById("count").textContent = wert;
    modules_in_sem = $("#div_semester").children().last().children().length - 1;

    for (i = 0; i < modules_in_sem; i++) {
        var mod_id = $("#div_semester").children().last().children().last().children().attr('id');
        var id = mod_id.replace("mod_","");

        $("#" + mod_id).remove();

        $("#" + id).parent().parent().children().children().removeClass('blocked');
        $("#" + id).parent().parent().children().children().removeClass('blocked_wpp');
        $("#" + id + "_WPP").parent().parent().children().children().removeClass('blocked');
        $("#" + id + "_WPP").parent().parent().children().children().removeClass('blocked_wpp');
        $("#" + (id).toString().replace("_WPP", "")).parent().parent().children().children().removeClass('blocked');
        $("#" + (id).toString().replace("_WPP", "")).parent().parent().children().children().removeClass('blocked_wpp');

        remove_module_from_content(id);
        update_master_ects(id,0);
    }

    content.pop();
    $("#div_semester").children().last().remove();
    update_rules();
}