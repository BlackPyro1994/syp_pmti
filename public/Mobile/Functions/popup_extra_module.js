/**
 * Öffnet ein Modal beim hinzufügen von ALM oder M07
 *
 */
function popup_extra_module() {

    console.log("function popup_extra_module() { ");
    
    if (global_mod_id == "M07_WPP") {
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