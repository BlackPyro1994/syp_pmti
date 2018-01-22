/**
 * Reduziert die Anzahl der Semester (count)
 *
 */
function counter_minus() {
    console.log("function counter_minus()");
    var cat_id, mod_id, index;
    var newArray = [];
    var sem_id = $("#div_semester").children().last().attr('id');
    if (count > 0) {
        count--;

        
        $("#div_semester").children().last().remove();
        console.log("LÖSCHE SEMESTER: " + sem_id);

        sem_id = sem_id.replace("sem", "");
        console.log("");
        console.log("Vor der Schleife:");
        console.log("content: " + content);
        console.log("blocked: " + blocked);
        console.log("catalog_array: " + catalog_array);


        for (i = 0; i < content[sem_id - 1].length; i++) {
            console.log("");
            console.log("content[sem_id-1].length: " + content[sem_id - 1].length);
            console.log("schleife i: " + i);


            mod_id = content[sem_id - 1][i][0];
            cat_id = content[sem_id - 1][i][11];
            console.log("mod_id: " + mod_id);

            console.log("cat_id: " + cat_id);


            console.log("content.indexOf(mod_id): " + content.indexOf(mod_id));

            index = blocked.indexOf(mod_id);
            if (index != -1) {
                blocked.splice(index, 1);
            }

            index = catalog_array.indexOf(cat_id);
            if (index != -1) {
                catalog_array.splice(index, 1);
            }

            /*
            index = content[sem_id - 1][i].indexOf(mod_id);
            if (index != -1) {
                content[sem_id - 1].splice(index, 1);
                content[sem_id - 1][i].splice(index, 12);
                content[sem_id - 1] = newArray;
            }
            */
            remove_module_from_content(mod_id);
            update_master_ects(mod_id);

            //FEHLER
            //Springt aus Schleife nach Aufruf
            //Content wird nicht zurückgesetzt
            //remove_module_from_content(mod_id);

        }
        console.log("");
        console.log("Nach der Schleife: ");
        console.log("content: " + content);
        console.log("blocked: " + blocked);
        console.log("catalog_array: " + catalog_array);

        update_rules();
    }
}