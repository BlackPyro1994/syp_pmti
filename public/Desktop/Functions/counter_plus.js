function counter_plus()
{
    var wert = Number(document.getElementById("count").textContent);
    wert++;
    document.getElementById("count").textContent = wert;
    add_semester(startSem);

    count++;

    // update_rules();
}