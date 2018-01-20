/*

function show_catalogs() {
    safe_modules = $("#div_semester").children();
    
    console.log("show_catalogs()");
    emptyModal();
    $("#cat_footer").hide();
    
    @for(katal <- katalogListe) {
        add_catalogs("@{katal(0)}", "@{katal(1)}");
    }
    if (!open) {
        $('#myModal-catalogs').modal('show');
    } else {
        emptyModal();
        open = 0;
        show_catalogs();
        return;
    }
}

*/
/**
 * Speichert den aktuellen Inhalt des Semesters, setzt den Titel des Modals und dessen Icon zum Abbrechen
 *
 */
function show_catalogs() {
    console.log("show_catalogs()");
    $("#popup_title").text("Modul-Kataloge :");

    safe_modules = $("#div_semester").children();
    close = 1;
    emptyModal();
    //$("#cat_footer").hide();
    
    katalogListe.forEach(function (t)
    {
        t = t.split(",");
        add_catalogs(t[0], t[1]);
    });
    
    if (!open)
    {
        $("#popup-icon").addClass("fa-window-close");
        $('#myModal-catalogs').modal('show');
    } else
    {
        emptyModal();
        open = 0;
        show_catalogs();
        return;
    }
}
