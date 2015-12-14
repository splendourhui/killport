var exec = require('child_process').exec;
var port = process.argv[2];
var cmd = 'lsof -i:' + port;
exec(cmd, function(err, stdout, stderr) {
  if (err) {
    return console.log(err);
  }
  stdout.split('\n').filter(function(line) {
    var p = line.trim().split(/\s+/);
    var command = p[0];
    var address = p[1];
    if (address && address != 'PID' && command == 'node') {
        exec('kill ' + address, function(err, stdout, stderr) {
          if (err) {
            return console.log('kill port failed');
          }
          console.log('kill port success');
      });
    }
  });
});
