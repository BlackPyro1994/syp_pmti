function add_modules_in_popup(catalog_id)
{
    emptyModal();
    console.log("add_modules_in_popup(" + catalog_id + ")");
    
    var mod_id;
    
    modulListe.forEach(function (entry)
    {
        if (entry.split(",")[11] == catalog_id)
        {
            mod_id = entry.split(",")[0];
    
            console.log(mod_id + " : " + entry.split(",")[11]);
            
            $("#catalog_list").append('<div id="' + mod_id + '" class="row modules_border class_click_modules"><button id="' + mod_id + '" class="btn btn-block"><div id="' + mod_id + '" class="row text-left"><div id="' + mod_id + '" class="col fett"><p id="' + mod_id + '">'
                + entry.split(",")[0] + '</p></div><div id="' + mod_id + '" class="col text-right"><p id="' + mod_id + '">ECTS: '
                + entry.split(",")[9] + '</p></div></div><div id="' + mod_id + '" class="row normal text-left"><div id="' + mod_id + '" class="col"><p id="' + mod_id + '">' +
                'Dozent: ' + entry.split(",")[8] + '</p></div></div></button></div>');
            
            for (i = 0; i < blocked.length; i++)
            {
                if (blocked[i] == mod_id || blocked[i] == mod_id + "_WPP" || blocked[i] + "_WPP" == mod_id || blocked[i] + "_WPP" == mod_id + "_WPP")
                {
                    //blocked = KRY        mod_id = KRY_WPP
                    $("#" + mod_id).removeClass('class_click_modules');
                    $("#" + mod_id).children().first().addClass('blocked');
                    
                    //$("#" + mod_id +"_WPP").removeClass('class_click_modules');
                    //$("#" + mod_id +"_WPP").children().first().addClass('blocked');
                }
            }
        }
    });
}
