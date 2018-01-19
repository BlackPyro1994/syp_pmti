function save()
{
    
    var text = "";
    
    var currentdate = new Date();
    
    var filename = "PMTI_" + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " _ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    
    text += startSem + ",";
    
    text += document.getElementById("count").textContent + "\n";
    
    debug(content);
    
    content.forEach(function (entry)
    {
        entry.forEach(function (inner_entry)
        {
            
            text += (content.indexOf(entry) + 1) + "," ;
            text += inner_entry;
            text += "\n";
        });
        
        
    });
    
    var element = document.createElement('a');
    
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
    
}