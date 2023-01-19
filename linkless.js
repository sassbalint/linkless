
var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length;) {

    var link = links[i]
    var nolink = document.createElement('span');

    nolink.innerHTML = link.innerHTML;

    var attrs = link.attributes;
    for(var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      nolink.setAttribute(attr.nodeName, attr.nodeValue);
    }

    link.parentNode.replaceChild(nolink, link);
}

// https://stackoverflow.com/questions/13390614
// https://stackoverflow.com/questions/6753362

