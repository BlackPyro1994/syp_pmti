function save() {
    console.log("function save()");

    var text = "";
    var currentdate = new Date();
    var filename = "PMTI_" + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " _ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    text += startSem + ",";
    text += document.getElementById("count").textContent + "\n";
    text += array2json(content);

    var element = document.createElement('a');

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function array2json(arr) {
    var parts = [];
    var is_list = (Object.prototype.toString.apply(arr) === '[object Array]');

    for (var key in arr) {
        var value = arr[key];
        if (typeof value == "object") {
            if (is_list) parts.push(array2json(value));
            else parts.push('"' + key + '":' + array2json(value));
        } else {
            var str = "";
            if (!is_list) str = '"' + key + '":';

            if (typeof value == "number") str += value;
            else if (value === false) str += 'false';
            else if (value === true) str += 'true';
            else str += '"' + value + '"';

            parts.push(str);
        }
    }
    var json = parts.join(",");

    if (is_list) return '[' + json + ']';
    return '{' + json + '}';
}