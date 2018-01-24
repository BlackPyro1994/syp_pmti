function left_click_on_catalog(click) {
    console.log("function left_click_on_catalog("+click+")");

    if (!$(click).hasClass("disabled-catalog")) {
        if (all_catalogs_closed == 0) {
            if (($(click).siblings().is(':hidden')) && open_catalog == "") {
                $(click).siblings().toggle(200);
                $(click).parent().toggleClass("cat-border");
                $(click).toggleClass("cat-background");
                $(click).removeClass("mouseOver");

                open_catalog = $(click).attr("id");

                if (!open_catalog == "AM") {
                    if (($(click).parent().children().first().siblings().not('.blocked').length - 1) == 0) {
                        $("#" + ausgewaehlt_modul).parent().toggleClass("cat-border");
                        $("#" + open_catalog).removeClass("cat-background");
                        $("#" + ausgewaehlt_modul).parent().children().first().siblings().toggle(200);

                        open_catalog = "";
                    }
                }
            }
            else if ($(click).attr("id") == open_catalog) {
                $(click).siblings().toggle(200);
                $(click).parent().toggleClass("cat-border");
                $(click).toggleClass("cat-background");
                $(click).addClass("mouseOver");

                open_catalog = "";
            }
            else if (( $("#" + open_catalog).siblings().is(':visible')) && open_catalog != $(click).attr("id")) {
                $("#" + open_catalog).siblings().toggle(200);
                $("#" + open_catalog).siblings().parent().removeClass("cat-border");
                $("#" + open_catalog).siblings().parent().children().removeClass("cat-background");

                $(click).siblings().toggle(200);
                $(click).parent().toggleClass("cat-border");
                $(click).toggleClass("cat-background");
                $(click).removeClass("mouseOver");

                open_catalog = $(click).attr("id");
            }
        }
    }
}