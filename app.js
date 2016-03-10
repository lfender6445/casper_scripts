var casper = require('casper').create({
  logLevel: "debug"
});

require('./lib/casper_debug');

var host = 'http://www.apartmentguide.com';
var path = '/';
var uri = host + path;

casper.start(uri);

casper.then(function(){
  // this.click('h3')
});

// evaluate after form fill
casper.thenEvaluate(function(){
   console.log("Page Title " + document.title);
});

casper.run();
