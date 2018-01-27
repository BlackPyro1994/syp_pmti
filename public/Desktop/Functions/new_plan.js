function new_plan()
{
    console.log("new_plan()");
    
    content = [];
    
    $(".disabled-catalog").removeClass('disabled-catalog');
    
    $('#myModal-new_plan').modal('toggle');
    
    $('#myModal-new_plan').on('shown.bs.modal', function ()
    {
        $('#input-semesteranzahl').focus();
    });
    
    $('#myModal-new_plan').keypress(function (e)
    {
        if (e.which == 13)
        {
            // $('#popup-new-ok').trigger('click');
            ok_button_new_plan();
        }
    });
    
    $('#popup-abbrechen.btn.btn-default').on('click', function ()
    {
        $('#myModal-new_plan').modal('hide');
    });
    
}