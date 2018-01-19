var loadJS = function (url, implementationCode, location)
{
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    location.appendChild(scriptTag);
    
};