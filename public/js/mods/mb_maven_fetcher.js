var x = new XMLHttpRequest();
x.open("GET", "https://maven.henrikstabell.com/com/henrikstabell/mistbiomes/MistBiomes-1.12/maven-metadata.xml", true);
x.onreadystatechange = function () {
  if (x.readyState == 4 && x.status == 200)
  {
    var doc = x.responseText;
    var parsedDoc = new DOMParser().parseFromString(doc,'text/xml');
    readPom(parsedDoc)
  }
};
x.send(null);

function readPom(xml) {
    var xmlDoc = xml;
    document.getElementsByClassName("btn-group")[0].appendChild+='<a href="https://maven.henrikstabell.com/com/henrikstabell/mistbiomes/MistBiomes-1.12/' + xmlDoc.getElementsByTagName("release")[0].firstChild.nodeValue + '/' + xmlDoc.getElementsByTagName("release")[0].firstChild.nodeValue + '-universal.jar' + '"  class="btn btn-secondary can-hide"><span class="fa fa-download"></span> Download latest from Maven</a>'
    for(var i = 0, k = xmlDoc.getElementsByTagName("version").length; i < k; i++) {
     document.getElementsByClassName("thead-default")[0].outerHTML+='<tbody><tr><td><a href="https://maven.henrikstabell.com/com/henrikstabell/mistbiomes/MistBiomes-1.12/' + xmlDoc.getElementsByTagName("version")[i].firstChild.nodeValue + '/"><span class="can-hide">Mist Biomes </span>' + xmlDoc.getElementsByTagName("version")[i].firstChild.nodeValue + '</a> <td class="can-hide">1.12.2</a></td> </td><td class="can-hide">Hennamann</td> <td class="can-hide"><b>Unstable</b></td> <td class="can-hide"><center><a href="https://maven.henrikstabell.com/com/henrikstabell/mistbiomes/MistBiomes-1.12/' + xmlDoc.getElementsByTagName("version")[i].firstChild.nodeValue + '/MistBiomes-1.12-' + xmlDoc.getElementsByTagName("version")[i].firstChild.nodeValue + '-universal.jar' + '" class="btn btn-secondary btn-sm"><span class="fa fa-download"></span></a></center></td></tr></tbody>'
    }
}