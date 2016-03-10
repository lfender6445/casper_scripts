var casper = require('casper').create({
  logLevel: 'debug'
});

casper.on('remote.message', function(msg) {
    this.echo('remote message caught: ' + msg);
});

casper.on("page.error", function(msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

var links = [
  'http://www.apartmentguide.com/apartments/Alaska/Yakutat/',
  'http://www.apartmentguide.com/'
];

casper.start().each(links, function(self, link) {
  self.thenOpen(link, function() {
    str = new Date().toString().replace(new RegExp(' ', 'g'), '-') + '.png';
    this.capture(str)
    this.echo(this.getTitle());
  });
});

casper.run()
