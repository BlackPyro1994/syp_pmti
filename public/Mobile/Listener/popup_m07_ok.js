function popup_m07_ok(click)
{
    console.log("Klick auf OK-Button M07");
    
    var name;
    var v, u, p, pr;
    var dozent;
    var ects;
    
    name = $("#input-name-m07").val();
    v = 2;
    u = 1;
    p = 1;
    pr = 0;
    dozent = $("#input-dozent-m07").val();
    ects = 5;
    
    if (global_mod_id == "M07" && name == "")
    {
        name = "Name";
    }
    if (global_mod_id == "M07" && dozent == "")
    {
        dozent = "Dozent";
    }
    
    append_free_module(name, v, u, p, pr, dozent, ects);
    $('#myModal-m07').modal('hide');
    update_master_ects(global_mod_id, 1);
    //update_semester_ects(global_mod_id,1);
}