/**
 * Animiert die Semester auf der rechten Seite
 *
 * @param event Maus-event
 */
function semester_mouseover(event) {

    console.log($(event).target);

    if (!$(event.target).closest("button").is(".button_delete,.button_move")) {
        mouse_over_semester_id = Number.parseInt(($(event.target).closest("button").attr("id")).replace("semester_", ""));

        if (!blocked) {
            if ($(event.target).closest("button").hasClass("button_semester")) {
                $(event.target).closest("button").addClass("mouse_over_border");
            }

            //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

            if (ausgewaehlt_semester == mouse_over_semester_id) {
                $(event.target).closest("button").removeClass("mouse_over_border");
            }

            //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

            if ($(event.target).closest("button").hasClass("ausgewaehlt")) {
                $(event.target).closest("button").removeClass("mouse_over_border");
            }

            //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

            if ($(event.target).closest("button").hasClass("not_available")) {
                $(event.target).closest("button").removeClass("mouse_over_border");
            }

        }
    }

}

function semester_mouseout(event) {
    // console.log("semester_mouseout("+event+")");

    // $(event.target).closest("button").removeClass("mouse_over_border");

    $(".mouse_over_border").removeClass("mouse_over_border");
}