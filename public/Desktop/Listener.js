$('#button_planLaden').on('click', function ()
{
    $('#file-input').trigger('click');
});

//##########################################################################################################

$('#button_pdf').on('click', create_pdf);

//##########################################################################################################

$('#myModal-freitext').on('click', '#popup-freitext-abbrechen', function (click)
{
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
});

//##########################################################################################################

$('#myModal-m07').on('click', '#popup-m07-abbrechen', function (click)
{
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
});

//##########################################################################################################

$('#myModal-freitext').on('click', '#popup-freitext-ok', function (click)
{
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
    
    append_free_module(global_mod_id, global_sem_id, name, v, u, p, pr, dozent, ects);
    
    $('#myModal-freitext').modal('hide');
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
});

//##########################################################################################################

$('#myModal-m07').on('click', '#popup-m07-ok', function (click)
{
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
    append_free_module(global_mod_id, global_sem_id, name, v, u, p, pr, dozent, ects);
    $("#" + global_mod_id).parent().parent().addClass('blocked');
    
    $('#myModal-m07').modal('hide');
    
    $('.container-fluid.semester-gesamt').removeClass('ausgewaehlt');
    $("#" + global_mod_id).removeClass('ausgewaehlt');
    
    update_rules();
});

//##########################################################################################################

$('#div_kataloge').on('click', '.class_click_katalog', function (click)
{
    if (!blocked)
    {
        click.preventDefault();
        
        click = click.target;
        
        $(click).closest(".class_click_katalog").css("background", "#eee");
        
        if ($(click).attr('class').includes("class_click_katalog"))
        {
            
            if (all_catalogs_closed == 0)
            {
                
                // ################################################################################################
                //              Neuer Katalog
                // ################################################################################################
                
                if (($(click).parent().siblings().is(':hidden')) && open_catalog == "")
                {
                    var new_click = $(click);
                    
                    $(new_click).parent().siblings().toggle(200);
                    
                    // ### open_catalog = $(".modul:visible").closest(".class_click_katalog").attr("id");
                    
                    // $(click).parent().parent().toggleClass("open_catalog");
                    
                    // ### $(click).closest(".class_click_katalog").toggleClass("open_catalog");
                    
                }
                
                // ################################################################################################
                //              Gleiche Katalog (schließen)
                // ################################################################################################
                
                else if ($(click).closest(".class_click_katalog").attr("id") == open_catalog)
                {
                    
                    // ### $(click).closest(".class_click_katalog").toggleClass("open_catalog");
                    
                    // ###  var new_click = $(click);
                    
                    // ### $(new_click).parent().siblings().not('.class_click_katalog').not('.class_click_katalog_label').toggle(200);
                    
                    // ###  open_catalog = "";
                    
                    // $(click).parent().parent().toggleClass("open_catalog");
                    
                    // $(click).closest(".class_click_katalog").toggleClass("open_catalog");
                    
                }
                
                // ################################################################################################
                //              Wechsel von Katalogen
                // ################################################################################################
                
                else if (( $("#" + open_catalog).children().first().siblings().is(':visible')) && open_catalog != $(click).closest(".class_click_katalog").attr("id"))
                {
                    
                    $("#" + open_catalog).children().first().siblings().toggle("hidden");
                    
                    $("#" + open_catalog).removeClass("open_catalog");
                    
                    // $(click).parent().parent().toggleClass("open_catalog");
                    
                    $(click).closest(".class_click_katalog").toggleClass("open_catalog");
                    
                    var new_click = $(click);
                    
                    $(new_click).parent().siblings().show(200);
                    
                    open_catalog = $(click).parent().parent().attr("id");
                    
                }
                
            }
            
        }
        else if ($(click).attr('class').includes("class_click_module_p"))
        {
            select_module(click);
        }
        else if ($(click).attr('class').includes("class_click_module_row"))
        {
            return;
        }
        
    }
    
});

//##########################################################################################################

$('#div_kataloge').on('mouseover', '.class_click_katalog_label', function (event)
{
    if (!blocked)
    {
        if ($(event.target).parent().parent().attr('id') != open_catalog)
        {
            $(this).parent().parent().css("background", "red");
        }
    }
    
});

//##########################################################################################################

$('#div_kataloge').on('mouseout', '.class_click_katalog_label', function (event)
{
    $(this).parent().parent().css("background", "#eee");
    
});

//##########################################################################################################

$('#myModal-new_plan').on('click', '#popup-abbrechen', function (click)
{
    $('#myModal-new_plan').modal('hide');
});

//##########################################################################################################

$('#div_kataloge').on('mouseover', '.class_click_module_p', function (event)
{
    $(this).fadeOut(50);
    $(this).fadeIn(200);
});

//##########################################################################################################

$('#div_semester').on('click', '.class_click_semester', function (click)
{
    
    click.preventDefault();
    click = click.target;
    
    if ($(click).attr('class').includes("class_click_delete"))
    {
        // LOESCHEN
        delete_module_from_semester(click);
    }
    else if ($(click).attr('class').includes("class_click_move"))
    {
        // VERSCHIEBEN
        //$(click).addClass("ausgewählt");
        moving = 1;
        move_module_to_semester(click);
    }
    else if ($(click).attr('class').includes("class_click_p"))
    {
        var new_click = $(click).parent().parent().parent();
        select_semester(new_click);
    }
    // Winter / Sommer - Semester Label wurde geklickt
    else if ($(click).attr('class').includes("label"))
    {
        var new_click = $(click).parent().parent();
        select_semester(new_click);
    }
    else if ($(click).attr('class').includes("class_click_semester_row"))
    {
        var new_click = $(click).parent();
        select_semester(new_click);
    }
    
});

//##########################################################################################################