function update_semester_ects(mod_id) {

    var searchedSem = -1;
    var countSemECTS = 0;


    for (k = 0; k < content.length; k++) {
        console.log("content.length: " + content.length);
        for (l = 0; l < content[k].length; l++) {
            if (content[k][l][0] == mod_id) {
                if(searchedSem != k){
                    countSemECTS=0;
                    searchedSem = k;
                    for (i = 0; i < content[searchedSem].length; i++) {
                        countSemECTS += (Number.parseInt(content[searchedSem][i][9]));

                        console.log("countSemECTS= " + countSemECTS);
                    }
                    countSemECTS = Number.parseInt(countSemECTS);
                    var idString = "sem_ects_anz"+(searchedSem+1);
                    console.log("idString: "+idString);
                    document.getElementById(idString).textContent = countSemECTS;
                }

            }
        }

    }

}