function click_semester(click)
{
    var id = (click.target).id;
    console.log("Click div_semester ID: " + id);
    global_sem_id = (click.target).id.replace("sem", "");
    flip = 1;
    
    $("body > nav > div.dropdown > button > svg").toggleClass("fa-bars fa-arrow-left");
    $("body > nav > div.dropdown > button").attr('onClick', "overview()");
    
    if (!move)
    {
        safe_semester = $("#div_semester").children();
        $("#div_semester").children().remove();
        show_semester_content(global_sem_id);
        
        $("#button_minus").hide();
        $("#button_plus").text("Add Modul");
        $("#button_plus").attr("onclick", "show_catalogs()");
        $("#brand").text("Semester: " + global_sem_id);
        //$("#ects_text").text("Semester ECTS: ");
        //$("#ects_punkte").text(semester_ects);
    } else
    {
        safe_semester = $("#div_semester").children();
        $("#div_semester").children().remove();
        show_semester_content(global_sem_id);
        append_module_in_semester(global_mod_id);
        
        $("#button_minus").hide();
        $("#button_plus").text("Module");
        $("#button_plus").attr("onclick", "show_catalogs()");
        $("#brand").text("Semester: " + global_sem_id);
        //$("#ects_text").text("Semester ECTS: ");
        //$("#ects_punkte").text(semester_ects);
        move = 0;
    }

    update_rules();
    
}