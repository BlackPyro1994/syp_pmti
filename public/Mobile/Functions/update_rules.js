/**
 * Leert den Inhalt der Regelanzeige, liest den Inhalt der hinzugefügten Module anhand der Katalog ID aus
 * und erzeugt mit den Werten der Belegungsanzahl (belegAnz)
 * und bereits gewählten Modulen(Katalog ID in catalog_array) die Regeln.
 *
 */
function update_rules() {

    console.log("function update_rules()");


    $("#regeln").children().remove();

    katalogListe.forEach(function (katalog) {
        var katID = katalog.split(",")[0];
        var belegAnz = katalog.split(",")[2];
        var countBlocked = 0;

        for (i = 0; i < catalog_array.length; i++) {
            if (katID == catalog_array[i]) {
                countBlocked++;
            }
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
    console.log("blocked:"+ blocked);
    for(j=0;j<blocked.length;j++){
        if(blocked[j] == "MAA"){
            var countMects=0;
            var semNum=0;
            for(k=0;k<content.length;k++){
                console.log("content.length: "+content.length);
                for(l=0;l<content[k].length;l++) {
                    console.log("hier: content[k][l][0]: "+content[k][l][0]);
                    if (content[k][l][0] == "MAA") {
                        semNum = k;

                        console.log("semNum: "+semNum);
                    }

                }

             }
            for(k=0;k<semNum;k++){
                for(l=0;l<content[k].length;l++){
/*
                    if((content[k][l][0]=="ALM") ||(content[k][l][0] =="M07")){
                        countMects+=content[k][l][9];
                        console.log("countMects= "+countMects);

                    } else {}
                    */
                    countMects += (Number.parseInt(content[k][l][9]));
                    console.log("countMects= "+countMects);


                    console.log("content[k][l]: "+content[k][l]);
                    console.log("content[k][l][9]: "+content[k][l][9]);
                }

            }
            console.log("countMects: " + countMects);
            console.log("content: "+content);

        }
    }
    /*
    for (j = 0; j<content[i-1].length; j++) {

                liste = (content[i - 1][j]) ;
     */
    /*
               content.forEach(function (entry) {
                entry.forEach(function (inner_entry){
                    if (inner_entry.split(",")[0] == "MAA")
                });
                if (entry.split(",")[0]) {

                }
            });
     */
    /*
    content.forEach(function (entry)
    {
        entry.forEach(function (inner_entry)
        {

            text += (content.indexOf(entry) + 1) + "," ;
            text += inner_entry;
            text += "\n";
        });


    });

     */
}