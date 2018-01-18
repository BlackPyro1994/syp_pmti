function test_1()
{

    for (i = 1; i <= 4; i++)
    {
        document.getElementById("count").textContent = i;
        add_semester("winter");
    }

    document.getElementById("button_minus").disabled = false;
    document.getElementById("button_plus").disabled = false;
    document.getElementById("button_speichern").disabled = false;
    document.getElementById("button_pdf").disabled = false;

    blocked = false;
}