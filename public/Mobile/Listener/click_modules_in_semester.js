function click_modules_in_semester(click)
{
    global_mod_id = (click.currentTarget).id;
    console.log("Click on Modul ID: " + global_mod_id);
    
    
    $('#myModal-modules').modal('show');
}