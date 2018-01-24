/**
 * Schließt das Start Modal und öffnet ein Fenster zum laden einer Datei
 */
function button_laden() {
    console.log("Button function button_laden()");

    $('#myModal-start').modal('hide');
    $('#file-input').trigger('click');
}