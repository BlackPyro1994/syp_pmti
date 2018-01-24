function counter_minus() {
    console.log("function counter_minus()");
    var cat_id, mod_id, index;

    if (count > 0) {
        count--;

        //var anz = content[global_sem_id - 1].length;
        var length = content.length;
        var inner_length = content[length-1].length;

        for (i=0;i<inner_length;i++) {
            mod_id = content[length-1][i][0];
            cat_id = content[length-1][i][11];
            safe_semester = $("#div_semester").children();

            index = blocked.indexOf(mod_id);
            if (index != -1) {
                blocked.splice(index, 1);
            }
            index = catalog_array.indexOf(cat_id);
            if (index != -1) {
                catalog_array.splice(index, 1);
            }

            update_master_ects(mod_id, 0);
            content_html.splice(length, 1);

        }
        update_rules();
        $("#div_semester").children().last().remove();
        content.pop();
        //content.push(new Array());
    }
}