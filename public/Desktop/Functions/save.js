function save()
{
    console.log("save()");
    
    var text = "";
    
    var currentdate = new Date();
    
    var filename = "PMTI_" + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " _ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    
    // text += startSem + ",";
    text += startSem + "\n";
    
    // text += document.getElementById("count").textContent + "\n";
    
    // text += Base64Decode(array2json(content));
    
    text += array2json(content);
    
    var element = document.createElement('a');
    
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
}

function array2json(arr)
{
    var parts = [];
    var is_list = (Object.prototype.toString.apply(arr) === '[object Array]');
    
    for (var key in arr)
    {
        var value = arr[key];
        if (typeof value == "object")
        { //Custom handling for arrays
            if (is_list) parts.push(array2json(value)); /* :RECURSION: */
            else parts.push('"' + key + '":' + array2json(value));
            /* :RECURSION: */
            //else parts[key] = array2json(value); /* :RECURSION: */
            
        } else
        {
            var str = "";
            if (!is_list) str = '"' + key + '":';
            
            //Custom handling for multiple data types
            if (typeof value == "number") str += value; //Numbers
            else if (value === false) str += 'false'; //The booleans
            else if (value === true) str += 'true';
            else str += '"' + value + '"'; //All other things
            // :TODO: Is there any more datatype we should be in the lookout for? (Functions?)
            
            parts.push(str);
        }
    }
    var json = parts.join(",");
    
    if (is_list) return '[' + json + ']';//Return numerical JSON
    return '{' + json + '}';//Return associative JSON
}