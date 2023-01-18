
// https://stackoverflow.com/questions/13390614
var links = document.getElementsByTagName('a');
for(var i = 0; i < links.length;) {
    var link = links[i]
    var nolink = document.createElement('span');
    nolink.innerHTML = link.innerHTML;
    link.parentNode.replaceChild(nolink, link);
}
    
