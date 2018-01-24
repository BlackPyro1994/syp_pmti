function show_catalogs() {
    console.log("function show_catalogs()");

    katalogListe.forEach(function (t) {
        t = t.split(",");

        add_catalog(t[0], t[1]);
    });

    modulListe.forEach(function (t) {
        t = t.split(",");

        if (t[11] != "WPP" && t[0].includes("_WPP")) {
            insert_module_in_catalog("WPP", t[0], t[1]);
        }
        else {
            insert_module_in_catalog(t[11], t[0], t[1]);
        }
    });
}