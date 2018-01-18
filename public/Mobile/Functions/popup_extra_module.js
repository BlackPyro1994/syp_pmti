function popup_extra_module() {
    console.log("popup_extra_module()");
    
    if (global_mod_id == "M07") {
        $('#myModal-m07').modal('show');
        
        $("#input-name-m07").val("");
        $("#input-dozent-m07").val("");
    }
    else if (global_mod_id == "ALM") {
        $('#myModal-freitext').modal('show');
        
        $("#input-name").val("");
        $("#input-v").val("");
        $("#input-u").val("");
        $("#input-p").val("");
        $("#input-pr").val("");
        $("#input-dozent").val("");
        $("#input-ects").val("");
    }
}