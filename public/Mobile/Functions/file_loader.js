$(document).ready(function () {
    document.getElementById('file-input').onchange = function () {

        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function (progressEvent) {
            
            load = true;
            
            count = 0;
            
            content = [];
            var temp;
            // var str = Base64Encode(this.result);
            var str = this.result;
            var lines = str.split('\n');
            
            content = eval("(" + (lines[1]) + ")");
            
            // ok_button_new_plan({"count": temp[1], "semStart": temp[0]});
            ok_button_new_plan({"count": content.length, "semStart": lines[0]});

            generate_semester_content();

            document.getElementById('file-input').value = "";
            
            load = false;
            
        };
        reader.readAsText(file);
    }
})

