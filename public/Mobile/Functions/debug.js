function debug(arr)
{
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
    
    for (semester = 0; semester < arr.length; semester++)
    {
        for (modul = 0; modul < arr[semester].length; modul++)
        {
            console.log(semester + 1 + " : " + arr[semester][modul]);
        }
    }
    
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
    
}