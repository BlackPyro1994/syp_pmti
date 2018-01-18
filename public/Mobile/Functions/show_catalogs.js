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