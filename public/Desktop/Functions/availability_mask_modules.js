function availability_mask_modules(semester_id) {
    console.log("function availability_mask_modules("+semester_id+")");

    $("#div_kataloge").children().children().removeClass("not_available");

    if (ausgewaehlt_semester % 2 == 0) {
        if (startSem == "winter") {
            //gewählt: Sommer
            modulListe.forEach(function (t) {
                if (t.split(",")[6] == "1" && t.split(",")[7] == "0") {
                    if (!$("#" + t.split(",")[0]).hasClass("blocked")) {
                        $("#" + t.split(",")[0]).addClass("not_available");
                    }
                }
            });
            if (startSem == "sommer") {
                //gewählt: Winter
                modulListe.forEach(function (t) {
                    if (t.split(",")[6] == "0" && t.split(",")[7] == "1") {
                        $("#" + t.split(",")[0]).addClass("not_available");
                    }
                });
            }
        }
    } else {
        if (startSem == "winter") {
            //gewählt: Winter
            modulListe.forEach(function (t) {
                if (t.split(",")[6] == "0" && t.split(",")[7] == "1") {
                    if (!$("#" + t.split(",")[0]).hasClass("blocked")) {
                        $("#" + t.split(",")[0]).addClass("not_available");
                    }
                }
            });
            if (startSem == "sommer") {
                //gewählt: Sommer
                modulListe.forEach(function (t) {
                    if (t.split(",")[6] == "1" && t.split(",")[7] == "0") {
                        if (!$("#" + t.split(",")[0]).hasClass("blocked")) {
                            $("#" + t.split(",")[0]).addClass("not_available");
                        }
                    }
                });
            }
        }
    }
}