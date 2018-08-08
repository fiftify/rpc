 var net = require('net')
 var rpc = require('rpc-stream')
 var cmd = require('node-cmd');
 
 net.createServer(function (stream) {
   stream.pipe(rpc({
     hello: function (name, cb) {
       cb(null, 'howdy ' + name)
     },
     run: function(command, cb) {
      cmd.get(
        `${command}`,
        function(err, data){
            cb(err,data);
        }
      );
     }
   })).pipe(stream)
 }).listen(5000)
