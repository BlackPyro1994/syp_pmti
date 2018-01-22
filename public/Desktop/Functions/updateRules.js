/**
 * Leert den Inhalt der Regelanzeige, liest den Inhalt der hinzugefügten Module anhand der Katalog ID aus
 * und erzeugt mit den Werten der Belegungsanzahl (belegAnz)
 * und bereits gewählten Modulen(Katalog ID in catalog_array) die Regeln.
 *
 */
function update_rules() {

    var maa = false;
    var koll = false;
    var semMAA = 0;
    var semKOLL = 0;
    var countMects = 0;

    $("#regeln").children().remove();

    katalogListe.forEach(function (katalog) {
        var katID = katalog.split(",")[0];


        var belegAnz = katalog.split(",")[2];


        var countBlocked = $("#" + katID).siblings().filter(".blocked").length;


        var countWPPblocked = $("#" + katID).siblings().filter(".blocked_wpp").length;


        if (katID == "WPP") {
            countBlocked = countWPPblocked;
        }

        if ((belegAnz > 0) && (countBlocked < belegAnz)) {

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

    for (k = 0; k < content.length; k++) {

        for (l = 0; l < content[k].length; l++) {

            if (content[k][l][0] == "MAA") {
                semMAA = k;
                maa = true;


            }
            if (content[k][l][0] == "KOLL") {
                semKOLL = k;
                koll = true;


            }
        }
    }

    for (k = 0; k < semMAA; k++) {
        for (l = 0; l < content[k].length; l++) {
            if(content[k][l][0]!="ALM") {
                countMects += (Number.parseInt(content[k][l][9]));

            }
        }
    }


    if (maa == true && countMects < 45) {
        $("#regeln").append('<div class ="row">' + '<div class ="col rules">' + '<p>' + 'Achtung: Zulassung zur Masterarbeit erst bei erreichten 45 Master-ECTS.' + '</p>');
    }

    if ((koll == true && maa == false) || (koll == true && maa == true && semMAA > semKOLL)) {
        $("#regeln").append('<div class ="row">' + '<div class ="col rules">' + '<p>' + 'Achtung: Das Kolloquium ist erst nach Abgabe der Masterarbeit möglich.' + '</p>');
    }

}