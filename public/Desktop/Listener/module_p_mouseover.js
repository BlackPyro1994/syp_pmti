function module_p_mouseover(event)
{
    console.log("module_p_mouseover("+event+")");
    
    $(this).fadeOut(50);
    $(this).fadeIn(200);
}