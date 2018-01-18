function move_module_to_semester(caller)
{

    var modul = $(caller).parent().parent();

    var mod_id = modul.attr("id").replace("mod_", "");

    ausgewaehlt_modul = mod_id;

};