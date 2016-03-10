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
path = '/apartments/Georgia/Atlanta/';
uri = host + path;

// $ = function(sel) {
//   document.querySelector(sel)
// }

casper.options.waitTimeout = 20000;
casper.options.viewportSize = {
  width: 1280,
  height: 1024
};

casper.start(uri).then(function() {
  var slideshow = 'a.photo_gallery_icon';
  var modal = '.modal-gallery-aside-visible';
  var c = this;
  casper.wait(2000, function(){
    casper.thenEvaluate(function(sel) {
      $elem = jQuery(sel).first();
      $elem.click();
    }, slideshow)
  }).wait(1000, function(){
    casper.capture('foo.png', {
      top: 0,
      left: 0,
      width: 1280,
      height: 1024
    })
  })

});

casper.then(function() {
  this.echo('page render complete');
});

casper.run();
