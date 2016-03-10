var casper = require('casper').create({
  logLevel: 'debug'
});

casper.on('remote.message', function(msg) {
    this.echo('remote message caught: ' + msg);
});

casper.on("page.error", function(msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

var host, path, uri;
host = 'http://www.apartmentguide.com';
path = '/';
uri = host + path;

casper.start(uri, function() {
});

casper.thenEvaluate(function(){
   console.log("Page Title " + document.title);
});

casper.run();
