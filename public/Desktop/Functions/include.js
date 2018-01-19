function include(file)
{
    var script = document.createElement('script');
    var type = document.createAttribute('type');
    type.nodeValue = 'text/javascript';
    script.setAttributeNode(type);
    var source = document.createAttribute('src');
    source.nodeValue = file;
    script.setAttributeNode(source);
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
}