// Klick auf Semester in Übersicht
$('#div_semester').on('click', '.class_click_semester', function (click) {
    var id = (click.target).id;
    console.log("Click div_semester ID: " + id);
    global_sem_id = (click.target).id.replace("sem", "");
    flip = 1;
    
    if (!move) {
        safe_semester = $("#div_semester").children();
        $("#div_semester").children().remove();
        show_semester_content(global_sem_id);
        
        $("#button_minus").hide();
        $("#button_plus").text("Module");
        $("#button_plus").attr("onclick", "show_catalogs()");
        $("#brand").text("Semester: " + global_sem_id);
        //$("#ects_text").text("Semester ECTS: ");
        //$("#ects_punkte").text(semester_ects);
    } else {
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
    
});

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//Klick auf zurück-Button in Modulansicht im Popup "Modul"
$('#myModal-catalogs').on('click', '#popup-catalogs-back', function (click) {
    console.log("Zurück");
    open = 1;
    $("#cat_footer").hide();
    show_catalogs();
});

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//Klick auf move-Button (nach klick auf Modul im Semester)
$('#myModal-modules').on('click', '#popup-module-move', function (click) {
    console.log("Move-Button Module: " + global_mod_id);
    $("#" + global_mod_id).remove();
    move = 1;
    $('#myModal-modules').modal('hide');
    overview();
});

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//Klick auf delete-Button (nach klick auf Modul im Semester)
$('#myModal-modules').on('click', '#popup-module-delete', function (click) {
    console.log("Delete-Button Module: " + global_mod_id);
    $('#myModal-modules').modal('hide');
    delete_module_from_semester(global_mod_id);
});

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//Klick auf Katalog im Popup
$('#catalog_list').on('click', '.class_click_catalog', function (click) {
    console.log("Click on Katalog ID: " + (click.target).id);
    global_catalog_id = (click.target).id;
    
    $("#cat_footer").show();
    add_modules_in_popup(global_catalog_id);
});

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//Klick auf Modul im Popup(nach klick auf Katalog)
$('#catalog_list').on('click', '.class_click_modules', function (click) {
    global_mod_id = (click.currentTarget).id;
    console.log("Add Modul ID: " + global_mod_id);
    
    $('#myModal-catalogs').modal('hide');
    emptyModal();
    if (global_mod_id == "ALM" || global_mod_id == "M07") {
        popup_extra_module();
    } else {
        append_module_in_semester(global_mod_id);
        update_master_ects(global_mod_id, 1);
        //update_semester_ects(global_mod_id,1);
    }
    blocked.push(global_mod_id);
    catalog_array.push(global_catalog_id);
});

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//Klick auf Modul in Semesteransicht
$('#div_semester').on('click', '.class_click_modules_in_semester', function (click) {
    global_mod_id = (click.currentTarget).id;
    console.log("Click on Modul ID: " + global_mod_id);
    
    
    $('#myModal-modules').modal('show');
});

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//Ok-Button im M07 Popup klicken
$('#myModal-m07').on('click', '#popup-m07-ok', function (click)
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
});

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//Ok-Button im ALM Popup klicken
$('#myModal-freitext').on('click', '#popup-freitext-ok', function (click)
{
    
    console.log("Klick auf OK-Button M07");
    
    var name;
    var v, u, p, pr;
    var dozent;
    var ects;
    
    name = $("#input-name").val();
    v = $("#input-v").val();
    u = $("#input-u").val();
    p = $("#input-p").val();
    pr = $("#input-pr").val();
    dozent = $("#input-dozent").val();
    ects = $("#input-ects").val();
    
    append_free_module(name, v, u, p, pr, dozent, ects);
    
    $('#myModal-freitext').modal('hide');
    update_master_ects(global_mod_id, 1);
    //update_semester_ects_extra(1, ects);
    
});



