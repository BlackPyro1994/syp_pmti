/**
 *
 */
function update_rules() {
    console.log("update_rules()");

    $("#regeln").children().remove();

    katalogListe.forEach(function (katalog) {
        var katID = katalog.split(",")[0];
        var belegAnz = katalog.split(",")[2];
        var countBlocked = 0;

        for(i=0;i<catalog_array.length;i++) {
            if(katID == catalog_array[i]) {
                countBlocked++;
                console.log("BLOCKED ++: "+countBlocked);
            }
        }

        if ((belegAnz > 0) && (countBlocked < belegAnz)) {
            console.log("INHALT: "+catalog_array);
            console.log("BLOCKED: "+countBlocked);

            var pm = "Verpflichtend zu wählen:";

            modulListe.forEach(function (modul) {
                if ((modul.split(",")[10] == "true") && (modul.split(",")[11] == katID)) {
                    pm += " ";
                    pm += modul.split(",")[0];
                }
            })

            if (pm != "Verpflichtend zu wählen:") {
                $("#regeln").append('<div class ="row">' + '<div class ="col rules">' + '<p>' + 'Aus dem Katalog '
                    + katalog.split(",")[1] + ' fehlen noch ' + (belegAnz - countBlocked) + ' Modul(e).' + ' (' + pm + ')' + '</p>');
            }
            else {
                $("#regeln").append('<div class ="row">' + '<div class ="col rules">' + '<p>' + 'Aus dem Katalog '
                    + katalog.split(",")[1] + ' fehlen noch ' + (belegAnz - countBlocked) + ' Modul(e).' + '</p>');
            }

        }
    });
}