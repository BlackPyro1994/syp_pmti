function show_catalogs() {
    console.log("function show_catalogs()");

    $("#popup_title").text("Modul-Kataloge :");

    safe_modules = $("#div_semester").children();
    close = 1;
    emptyModal();

    katalogListe.forEach(function (t) {
        t = t.split(",");
        add_catalogs(t[0], t[1]);
    });

    if (!open) {
        $("#popup-icon").addClass("fa-window-close");
        $('#myModal-catalogs').modal('show');
    } else {
        emptyModal();
        open = 0;
        show_catalogs();
        return;
    }
}