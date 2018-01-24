function availability_mask_modules() {
    console.log("function availability_mask_modules()");

    $("#catalog_list").children().children().removeClass("not_available");

    if (global_sem_id % 2 == 0) {
        if (startSem == "winter") {
            //gewählt Sommer
            modulListe.forEach(function (t) {

                if (t.split(",")[6] == "1" && t.split(",")[7] == "0") {
                    // WINTER
                    $('#' + t.split(",")[0]).children().addClass('not_available');
                    $('#' + t.split(",")[0]).removeClass('class_click_modules');
                }
            });
        }
        if (startSem == "sommer") {
            //gewählt Winter
            modulListe.forEach(function (t) {

                if (t.split(",")[6] == "0" && t.split(",")[7] == "1") {
                    $("#" + t.split(",")[0]).children().addClass("not_available");
                    $('#' + t.split(",")[0]).removeClass('class_click_modules');
                }
            });
        }
    }
    else if (global_sem_id % 2 == 1) {
        if (startSem == "winter") {
            //gewählt Winter
            modulListe.forEach(function (t) {

                if (t.split(",")[6] == "0" && t.split(",")[7] == "1") {
                    $("#" + t.split(",")[0]).children().addClass("not_available");
                    $('#' + t.split(",")[0]).removeClass('class_click_modules');
                }
            });
        }
        else if (startSem == "sommer") {
            //gewählt Sommer
            modulListe.forEach(function (t) {

                if (t.split(",")[6] == "1" && t.split(",")[7] == "0") {
                    $("#" + t.split(",")[0]).children().addClass("not_available");
                    $('#' + t.split(",")[0]).removeClass('class_click_modules');
                }
            });
        }
    }
}