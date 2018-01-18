function overview()
{
    console.log("overview()");
    $("#brand").text("Übersicht");
    if (flip)
    {
        save_semester_content(global_sem_id);
        flip = !flip;
        $("#div_semester").children().remove();
    }
    $("#div_semester").append(safe_semester);
    console.log("Count: " + count);
    $("#button_minus").show();
    $("#button_plus").text("+");
    $("#button_plus").attr("onclick", "counter_plus()");
}