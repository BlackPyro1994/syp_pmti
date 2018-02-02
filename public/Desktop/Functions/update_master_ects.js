/**
 * Aktualisiert die Master-ECTS Punkte mit den Werten des gewaehlten Moduls
 *
 */
function update_master_ects()
{
    var val= 0;
    
    for (i = 0; i < count; i++)
    {
        $.each($($("#div_semester").children()[i]).children().first().siblings(), function (index, value)
        {
            var id = $(value).children().attr("id").replace("mod_","");
            
            if(id != "ALM")
            {
                console.log(id + " " + val);
                val += Number.parseInt($(value).children().children().children().children()[4].innerHTML.replace("ECTS:",""));
            }
        });
    }
    
    document.getElementById("master_ects").textContent = Number.parseInt(val);
}
