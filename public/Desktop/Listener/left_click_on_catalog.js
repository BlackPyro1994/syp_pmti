function left_click_on_catalog(click) {
    console.log("function left_click_on_catalog(click");
    $(click).parent().toggleClass("cat-border");
    $(click).toggleClass("cat-background");

    if (!$(click).hasClass("disabled-catalog")) {
        if (all_catalogs_closed == 0) {
            if (($(click).siblings().is(':hidden')) && open_catalog == "") {
                $(click).siblings().toggle(200);

                open_catalog = $(click).attr("id");
                console.log("FIRST: " + open_catalog);
            }

            else if ($(click).attr("id") == open_catalog) {;
                $(click).siblings().toggle(200);

                open_catalog = "";
                console.log("SECOND: " + open_catalog);
            }

            else if (( $("#" + open_catalog).siblings().is(':visible')) && open_catalog != $(click).attr("id")) {
                $("#" + open_catalog).siblings().toggle(200);
                $("#" + open_catalog).siblings().parent().removeClass("cat-border");
                $("#" + open_catalog).siblings().parent().children().removeClass("cat-background");
                //console.log("Sibling first: "+$("#" + open_catalog).siblings().html());
                $(click).siblings().toggle(200);

                //console.log("Sibling second: "+$(click).siblings().html());

                open_catalog = $(click).attr("id");
                console.log("THIRD: " + open_catalog);
                //console.log("Sibling third: "+$("#" + open_catalog).siblings().html());
            }
        }
    }
}

