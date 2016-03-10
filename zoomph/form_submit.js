var links = [];

var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug'
});

casper.start('http://www.apartmentguide.com/', function() {
  this.capture('before_search.png');
  this.fill('form#search_form_2014', {
    user_search: 'Atlanta, GA'
  }, true)
  this.capture('after_search.png');
});

casper.thenEvaluate(function(){
   console.log("Page Title " + document.title);
});



casper.run();
