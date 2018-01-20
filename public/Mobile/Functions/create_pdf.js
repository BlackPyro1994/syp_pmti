/**
 * Erstellt ein PDF Dokument mit dem Inhalt der zuvor gespeicherten Daten in dem Array (content[])
 *
 */
function create_pdf() {

    console.log("function create_pdf()");

    var doc = new jsPDF('landscape');
    var x = 11;
    var xq = 10;
    var y = 20;
    var id, name, v, u, p, pr, dozent, ects;
    var sem_zahl, sem_ects, str;
    var master_ects = 0;
    var restplatz = 150;
    var liste;

    var horizontal_values = [27, 160, 5, 5, 5, 8, 277];

    doc.setFont("times");

    var title = "PMTI - Individualisierter Studienverlaufsplan";
    var currentdate = new Date();


    doc.setFontSize(20);
    doc.text(80, y, title);
    doc.setFontSize(15);
    doc.text(285, y, "(" + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear() + ")", null, null, 'right');
    y += 17;


    master_ects = $("#master_ects").text();

    strMasterECTS = "Master-ECTS insgesamt: " + master_ects;

    doc.setFontSize(10);
    doc.text(285, y, strMasterECTS, null, null, 'right');
    y += 10;


    //var anz_Sem = Number(document.getElementById("count").textContent);

    var semester = startSem == "winter" ? "Wintersemester" : "Sommersemester";


    for (i = 1; i <= count; i++) {

        //var anz_Module = $("#div_semester").children().filter(":nth-child(" + i + ")").children().length - 1;
        //console.log("content: "+content);
        //console.log("catalog_array: "+catalog_array);
        //console.log("blocked: "+blocked);


        //console.log(modulListe);


        var anz_Module = catalog_array.length;
        console.log("Anzahl Module: "+anz_Module);

        if (((anz_Module * 5) + 16) > restplatz) {
            doc.addPage();
            var restplatz = 150;
            y = 47;
        }
        restplatz -= ((anz_Module * 5) + 12);

        //ab hier 1 hart geschriebene Werte zu tauschen:

        sem_ects = "30";


        str = i + ": " + semester + " (" + sem_ects + " ECTS)";

        doc.setFontSize(14);
        doc.text(x, y, str);
        y += 5;

        semester = semester == "Wintersemester" ? "Sommersemester" : "Wintersemester";

        if (anz_Module > 0) {
            doc.setFontSize(9);
            doc.text(x, y, "LVID");
            x += horizontal_values[0];

            doc.text(x, y, "LV-Bezeichnung");
            x += horizontal_values[1];

            doc.text(x, y, "V");
            x += horizontal_values[2];

            doc.text(x, y, "Ü");
            x += horizontal_values[3];

            doc.text(x, y, "P");
            x += horizontal_values[4];

            doc.text(x, y, "Pr");
            x += horizontal_values[5];

            doc.text(x, y, "DozentIn");
            x = horizontal_values[6];

            doc.text(x, y, "ECTS");

            y += 4;
            restplatz -= 4;
            x = 11;


            // Semester i beginnt mit 1

            // content[i-1].forEach(function (entry)
            //console.log("Content: " + content);
            //console.log("Content i-1 : " + content[i - 1]);
//j < content[i-1].length

            for (j = 0; j<content[i-1].length; j++) {
                console.log("i: "+i);
                console.log("Content i-1 : " + content[i - 1]);
                console.log("content[i-1].length " +content[i-1].length);
                console.log("FOR : " + "(" + j + ")");
               // console.log("Semester : (" + j + ") Modul : (" + (content[i - 1])[j] + ")");
                //console.log("content[i - 1])[j].length: " + content.length);
                console.log("content[i-1].length: " + content[i-1].length);
                console.log(content[i - 1][j]);
                liste = (content[i - 1][j]) ;

               // console.log("Liste : " + liste);
                console.log(liste);

                id = liste[0];
                console.log("id: "+id);
                name = liste[1];
                console.log("name: "+name);
                v = liste[2];
                console.log("v: "+v);
                u = liste[3];
                console.log("u: "+u);
                p = liste[4];
                console.log("p: "+p);
                pr = liste[5];
                console.log("pr: "+pr);
                dozent = liste[8];
                console.log("dozent: "+dozent);
                ects = liste[9];
                console.log("ects: "+ects);

                doc.setFont("courier");
                doc.setFontSize(10);

                doc.rect(xq, (y - 3), 275, 4);

                doc.text(x, y, id);
                x += horizontal_values[0];

                doc.text(x, y, name);
                x += horizontal_values[1];

                doc.text(x, y, v);
                x += horizontal_values[2];

                doc.text(x, y, u);
                x += horizontal_values[3];

                doc.text(x, y, p);
                x += horizontal_values[4];

                doc.text(x, y, pr);
                x += horizontal_values[5];

                doc.text(x, y, dozent);
                x = horizontal_values[6];

                doc.text(x, y, ects);

                doc.setFont("times");

                y += 5;
                x = 11;

            }

        }

        y += 7;

    }

    var filename = "PMTI_" + "Studienverlaufsplan_" + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear();

    doc.save(filename + '.pdf');


}