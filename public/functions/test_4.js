function test_4()
{
    add_semester(startSem);
    add_semester(startSem);
    add_semester(startSem);

    // $('#count').set(3);

    document.getElementById("count").textContent = 3;

    $('#myModal-new_plan').modal('hide');
    $(".class_p").removeClass('ausgewaehlt');
    $(".class_p").parent().removeClass('blocked');

    document.getElementById("button_minus").disabled = false;
    document.getElementById("button_plus").disabled = false;
    document.getElementById("button_speichern").disabled = false;
    document.getElementById("button_pdf").disabled = false;

    blocked = false;

    $("#button_new_plan").removeClass("red_border");
    $('#button_planLaden').removeClass("red_border");

}