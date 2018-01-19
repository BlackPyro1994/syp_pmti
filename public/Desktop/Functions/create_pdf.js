function create_pdf()
{
    var doc = new jsPDF('landscape');
    var x = 11;
    var xq = 10;
    var y = 20;
    var id, name, v, u, p, pr, dozent, ects;
    var sem_zahl, sem_ects, str;
    var master_ects = 0;
    var restplatz = 150;
    
    var horizontal_values = [27, 160, 5, 5, 5, 6, 284];
    
     doc.setFont("times");
    
    //doc.setFont("courier");

    //var title = "PMTI - Individualisierter Studienverlaufsplan           " + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear();




    var title = "PMTI - Individualisierter Studienverlaufsplan" ;
    var currentdate = new Date();


    doc.setFontSize(20);
    doc.text(80, y, title);
    doc.setFontSize(15);
    doc.text(285,y,"(" + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear() + ")", null, null, 'right');
    y += 17;

//ab hier 1 hart geschriebener Wert zu tauschen:
    
    master_ects = $("#master_ects").innerText;
    
    strMasterECTS = "Master-ECTS insgesamt: " + master_ects;
    
    doc.setFontSize(10);
    doc.text(285, y, strMasterECTS, null, null, 'right');
    y += 10;
    
    var anz_Sem = Number(document.getElementById("count").textContent);
    console.log("Anzahl Semester:" + anz_Sem);
    
    var semester = startSem.replace("Winter", "Wintersemester").replace("Sommer", "Sommersemester");
    
    for (i = 1; i <= anz_Sem; i++)
    {
        
        var anz_Module = $("#div_semester").children().filter(":nth-child(" + i + ")").children().length - 1;
        console.log("Anzahl Module in Semester" + i + ": " + anz_Module);
        
        if (((anz_Module * 5) + 16) > restplatz)
        {
            doc.addPage();
            var restplatz = 150;
            y = 47;
        }
        restplatz -= ((anz_Module * 5) + 12);
        
        //ab hier 3 hart geschriebene Werte zu tauschen:
        
        sem_ects = "30";
        
        str = i + ": " + semester + " (" + sem_ects + " ECTS)";
        
        semester = semester == "Wintersemester" ? "Sommersemester" : "Wintersemester";
        
        doc.setFontSize(14);
        doc.text(x, y, str);
        y += 5;
        
        if (anz_Module > 0)
        {
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

            doc.text(x, y, "ECTS", null, null, 'right');
            
            y += 4;
            restplatz -= 4;
            x = 11;
            
            
            content[i - 1].forEach(function (entry)
            {
                
                entry = entry.substr(1, entry.length);
                
                var liste = entry.split(',');
                console.log(liste);
                
                id = liste[0];
                name = liste[1];
                v = liste[2];
                u = liste[3];
                p = liste[4];
                pr = liste[5];
                dozent = liste[6];
                ects = liste[7];
                
                // doc.setFont("courier");
                doc.setFontSize(10);
                
                // Empty square
                
                // doc.rect(xq, (y - 3), 190, 4);
    
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
                
                doc.text(x, y, ects, null, null,'right');
                
                // doc.setFont("times");
                
                y += 5;
                x = 11;
                
            });
            
        }
        
        y += 7;
        
    }
    
    var filename = "PMTI_" + "Studienverlaufsplan_" + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear();
    
    doc.save(filename + '.pdf');
    
    
}