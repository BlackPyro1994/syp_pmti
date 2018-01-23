$(document).ready(function () {
    document.getElementById('file-input').onchange = function () {

        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function (progressEvent) {
            
            count = 0;
            
            content = [];
            var temp;
            // var str = Base64Encode(this.result);
            var str = this.result;
            var lines = str.split('\n');
            temp = lines[0].split(',');
            ok_button_new_plan({"count": temp[1], "semStart": temp[0]});

            content = eval("(" + (lines[1]) + ")");
            generate_semester_content();

            document.getElementById('file-input').value = "";
        };
        reader.readAsText(file);
    }
})


function generate_semester_content() {
    var length = content.length;
    var sem_content = "";
    var inner_content = "";

    for (i = 0; i < length; i++) {
        var sem_id = i + 1;
        var inner_length = content[i].length;
        sem_content = "";
        inner_content = "";

            for (j = 0; j < inner_length; j++) {
                var mod_id = content[i][j][0];

                if (mod_id == "M07_WPP" || mod_id == "ALM") {
                    var string = ('<div id="' + mod_id + '" class="row modules_border class_click_modules_in_semester margin-top"><button id="' + mod_id + '" class="btn btn-block"><div id="' + mod_id + '" class="row text-left"><div id="' + mod_id + '" class="col fett"><p>' + mod_id + '</p></div><div id="' + mod_id + '" class="col text-right"><p id="' + mod_id + '">ECTS: ' + content[i][j][9] + '</p></div></div><div id="' + mod_id + '" class="row normal text-left"><div id="' + mod_id + '" class="col"><p id="' + mod_id + '">Dozent: ' + content[i][j][8] + '</p></div></div></button></div>');
                    inner_content = inner_content + string;
                    if(mod_id == "M07_WPP") {
                        update_master_ects(mod_id,1);
                        blocked.push(mod_id);
                        catalog_array.push(content[i][j][11]);
                    }

                } else {
                    var string = '<div id="' + mod_id + '" class="row modules_border class_click_modules_in_semester margin-top">' +
                        '<button id="' + mod_id + '" class="btn btn-block"><div id="' + mod_id + '" class="row text-left">' +

                        '<div id="' + mod_id + '" class="col fett">' +
                        '<p>' + mod_id + '</p></div>' +

                        '<div id="' + mod_id + '" class="col text-right">' +
                        '<p id="' + mod_id + '">ECTS: ' + content[i][j][9] + '</p></div>' + '</div>' +

                        '<div id="' + mod_id + '" class="row normal text-left">' +
                        '<div id="' + mod_id + '" class="col">' +

                        '<p id="' + mod_id + '">Dozent: ' + content[i][j][8] + '</p></div></div></button></div>';

                    inner_content = inner_content + string;
                    blocked.push(mod_id);
                    catalog_array.push(content[i][j][11]);
                    update_master_ects(mod_id,1);
                }
            }
        sem_content = inner_content;
        content_html[sem_id] = sem_content;
    }
    $("#ects_text").text("Master ECTS: ");
    $("#ects_punkte").text(master_ects);
}