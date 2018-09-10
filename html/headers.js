var req = new XMLHttpRequest();
req.open('GET', "/about", false);
req.send(null);
var headers = req.getAllResponseHeaders().toLowerCase();
alert(headers);