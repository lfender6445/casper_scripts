module.exports = function(casper){
  casper.on('remote.message', function(msg) {
      this.echo('remote message caught: ' + msg);
  });

  casper.on("page.error", function(msg, trace) {
      this.echo("Page Error: " + msg, "ERROR");
  });
}
