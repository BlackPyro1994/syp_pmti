$(document).ready(function () {
    document.getElementById('file-input').onchange = function () {

        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function (progressEvent) {
            ;

            load = true;

            count = 0;

            content = [];
            content_html = [];

            var temp;

            var str = this.result;

            var lines = str.split('\n');


            content = eval("(" + (lines[1]) + ")");

            var alm_count = 0;

            content.forEach(function (t) {
                t.forEach(function (t2) {
                    if (t2[0].includes("ALM")) {
                        t2[0] = t2[0] + alm_count;
                        alm_count++;
                    }
                });
            });

            ok_button_new_plan({"count": content.length, "semStart": lines[0]});

            generate_semester_content();

            document.getElementById('file-input').value = "";

            load = false;

        };
        reader.readAsText(file);
    }
})

