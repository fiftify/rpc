     var net = require('net')
     var rpc = require('rpc-stream')
     var readline = require('readline');
     
     var rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
     })
     
     rl.on('line', line => {
     var client = rpc()
     client.pipe(net.connect(5000, 'localhost')).pipe(client)
     var remote = client.wrap(['hello','run'])
     
     remote.hello(line, function (err, msg) {
       if (err) return console.error(err)
       console.log(msg);
     })
     
     remote.run(line, function(err,data) {
          if(err) return console.log(err)
          console.log(data);
          client.end();
     })
     
     })
     
     